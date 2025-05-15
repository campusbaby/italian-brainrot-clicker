import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales, localeRedirects } from './app/i18n/settings';

// 匹配所有路径但排除特定路径
export const config = {
  matcher: [
    // 排除以下路径:
    '/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml|manifest.json).*)',
  ],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 检查当前请求路径中是否已经有语言代码
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 首先尝试从cookie中获取语言设置
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let locale = '';

  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    // 否则尝试从Accept-Language头部检测用户首选语言
    const acceptLanguage = request.headers.get('accept-language');
    
    if (acceptLanguage) {
      // 处理语言重定向，如en-US -> en
      for (const [key, value] of Object.entries(localeRedirects)) {
        if (acceptLanguage.includes(key)) {
          locale = value;
          break;
        }
      }
      
      // 如果没找到重定向，直接查找基本语言代码
      if (!locale) {
        for (const l of locales) {
          if (acceptLanguage.includes(l)) {
            locale = l;
            break;
          }
        }
      }
    }
    
    // 如果没有找到匹配的语言，使用默认语言
    if (!locale) {
      locale = defaultLocale;
    }
  }

  // 如果是默认语言(英语)，不做重定向
  if (locale === defaultLocale) {
    return;
  }

  // 只有非默认语言才重定向到带前缀的URL
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
      request.url
    )
  );
} 