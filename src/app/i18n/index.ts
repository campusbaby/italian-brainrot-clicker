import { locales, defaultLocale } from './settings';
import { Dictionary } from './types';

// 翻译存储对象
const dictionaries: Record<string, Dictionary> = {};

// 异步加载翻译文件
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // 如果已经加载，直接返回
  if (dictionaries[locale]) {
    return dictionaries[locale];
  }

  // 尝试加载请求的语言
  try {
    const dictionary = await import(`./locales/${locale}/translations.json`).then(
      (module) => module.default
    );
    dictionaries[locale] = dictionary;
    return dictionary;
  } catch (error) {
    // 如果失败，回退到默认语言
    console.error(`Failed to load dictionary for ${locale}`, error);
    
    // 如果不是默认语言，尝试加载默认语言
    if (locale !== defaultLocale) {
      return getDictionary(defaultLocale);
    }
    
    // 如果是默认语言失败，返回空对象
    return {} as Dictionary;
  }
};

// 从请求/cookie中获取当前语言
export const getLocale = (request: Request): string => {
  // 从Cookie中获取
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const cookieLocale = cookieHeader
      .split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith('NEXT_LOCALE='));
      
    if (cookieLocale) {
      const locale = cookieLocale.split('=')[1];
      if (locales.includes(locale)) {
        return locale;
      }
    }
  }
  
  // 从Accept-Language头部获取
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => {
        const shortLang = lang.substring(0, 2);
        return locales.includes(shortLang);
      });
      
    if (preferredLocale) {
      return preferredLocale.substring(0, 2);
    }
  }
  
  // 默认返回默认语言
  return defaultLocale;
}; 