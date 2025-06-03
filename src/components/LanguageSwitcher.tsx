'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames, defaultLocale } from '@/app/i18n/settings';
import { Fragment, useState } from 'react';

interface LanguageSwitcherProps {
  currentLocale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // 获取不带语言前缀的路径
  const getPathWithoutLocale = () => {
    let path = pathname;
    
    // 移除所有可能的语言前缀
    for (const locale of locales) {
      if (path.startsWith(`/${locale}/`)) {
        path = path.replace(`/${locale}`, '');
      } else if (path === `/${locale}`) {
        path = '/';
      }
    }
    
    return path || '/';
  };
  
  const pathnameWithoutLocale = getPathWithoutLocale();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // 根据语言和当前路径生成链接
  const getLocalizedHref = (locale: string) => {
    // 英语(默认语言)使用不带前缀的路径
    if (locale === defaultLocale) {
      return pathnameWithoutLocale;
    }
    
    // 非默认语言添加语言前缀
    return `/${locale}${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`;
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-sm rounded-full bg-gray-800 px-3 py-1.5 hover:bg-gray-700 focus:outline-none"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <span>{localeNames[currentLocale as keyof typeof localeNames]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 right-0 bg-gray-800 rounded-md shadow-lg overflow-hidden min-w-[120px]">
          <div className="py-1">
            {locales.map((locale) => (
              <Fragment key={locale}>
                {locale !== currentLocale && (
                  <Link
                    href={getLocalizedHref(locale)}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={closeDropdown}
                  >
                    {localeNames[locale as keyof typeof localeNames]}
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 