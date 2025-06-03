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
  
  // 检查是否已存在任何语言代码
  const hasAnyLocale = locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // 如果已存在语言代码，检查是否有嵌套的语言代码（异常情况）
  if (hasAnyLocale) {
    // 提取第一个语言代码
    const firstSegment = pathname.split('/')[1];
    
    // 检查路径其余部分是否还包含其他语言代码
    const remainingPath = pathname.substring(firstSegment.length + 1);
    
    const hasNestedLocale = locales.some(locale => 
      remainingPath.startsWith(`/${locale}/`) || remainingPath === `/${locale}`
    );
    
    // 如果发现嵌套的语言代码，修复路径
    if (hasNestedLocale) {
      // 获取路径中不包含语言代码的部分
      let cleanPath = pathname;
      
      // 移除所有语言代码
      for (const locale of locales) {
        // 处理形如 /locale/ 的前缀
        if (cleanPath.startsWith(`/${locale}/`)) {
          cleanPath = cleanPath.replace(`/${locale}`, '');
        } 
        // 处理独立的 /locale
        else if (cleanPath === `/${locale}`) {
          cleanPath = '/';
        }
      }
      
      // 使用第一个找到的语言代码重建路径
      return NextResponse.redirect(
        new URL(`/${firstSegment}${cleanPath}`, request.url)
      );
    }
    
    // 如果没有嵌套的语言代码，则正常处理
    return;
  }

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