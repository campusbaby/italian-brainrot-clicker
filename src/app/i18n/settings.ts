// 支持的语言列表
export const locales = ['en', 'sv', 'no', 'da', 'fr', 'nl', 'es', 'de', 'is', 'vi', 'lv', 'ar'];

// 默认语言
export const defaultLocale = 'en';

// 配置重定向（可选）
export const localeRedirects = {
  'en-US': 'en',
  'en-GB': 'en',
  'sv-SE': 'sv',
  'nb-NO': 'no', // 挪威博克马尔语
  'nn-NO': 'no', // 挪威尼诺斯克语
  'da-DK': 'da', // 丹麦语
  'fr-FR': 'fr', // 法语(法国)
  'fr-CA': 'fr', // 法语(加拿大)
  'fr-BE': 'fr', // 法语(比利时)
  'fr-CH': 'fr', // 法语(瑞士)
  'nl-NL': 'nl', // 荷兰语(荷兰)
  'nl-BE': 'nl', // 荷兰语(比利时/弗拉芒语)
  'es-ES': 'es', // 西班牙语(西班牙)
  'es-MX': 'es', // 西班牙语(墨西哥)
  'es-AR': 'es', // 西班牙语(阿根廷)
  'es-CO': 'es', // 西班牙语(哥伦比亚)
  'de-DE': 'de', // 德语(德国)
  'de-AT': 'de', // 德语(奥地利)
  'de-CH': 'de', // 德语(瑞士)
  'is-IS': 'is', // 冰岛语
  'vi-VN': 'vi', // 越南语
  'lv-LV': 'lv', // 拉脱维亚语
  'ar-SA': 'ar', // 阿拉伯语(沙特阿拉伯)
  'ar-EG': 'ar', // 阿拉伯语(埃及)
  'ar-AE': 'ar', // 阿拉伯语(阿联酋)
  'ar-MA': 'ar', // 阿拉伯语(摩洛哥)
};

// 语言名称映射（用于语言切换器显示）
export const localeNames = {
  'en': 'English',
  'sv': 'Svenska',
  'no': 'Norsk',
  'da': 'Dansk',
  'fr': 'Français',
  'nl': 'Nederlands',
  'es': 'Español',
  'de': 'Deutsch',
  'is': 'Íslenska',
  'vi': 'Tiếng Việt',
  'lv': 'Latviešu',
  'ar': 'العربية',
}; 