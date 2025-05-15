'use client';

import Link from 'next/link';
import { Dictionary } from '@/app/i18n/types';
import { usePathname } from 'next/navigation';
import { defaultLocale, locales } from '@/app/i18n/settings';

interface FooterProps {
  dict?: Dictionary; // 翻译字典，可选参数
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  // 检测当前URL中的语言
  const getCurrentLocale = () => {
    for (const locale of locales) {
      if (locale !== defaultLocale && pathname.startsWith(`/${locale}`)) {
        return locale;
      }
    }
    return defaultLocale;
  };
  
  const currentLocale = getCurrentLocale();
  
  // 生成带语言前缀的URL
  const getLocalizedPath = (path: string) => {
    // 如果是默认语言(英语)，使用不带前缀的路径
    if (currentLocale === defaultLocale) {
      return path;
    }
    
    // 非默认语言，添加语言前缀
    return `/${currentLocale}${path}`;
  };
  
  return (
    <footer className="bg-gray-800 py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href={getLocalizedPath('/')} className="block mb-4">
              <h2 className="text-xl font-bold text-purple-500">
                {dict?.header?.logo || 'Italian Brainrot Clicker'}
              </h2>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              {dict?.footer?.description || 'A clicking game exploring the fantastic internet world, collect brainrot points, unlock stories and more.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">
              {dict?.footer?.navigation || 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLocalizedPath('/')} className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.header?.home || 'Home'}</Link></li>
              <li><Link href={getLocalizedPath('/')} className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.header?.home || 'Play Game'}</Link></li>
              <li><Link href={getLocalizedPath('/#guides')} className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.header?.guides || 'Guides'}</Link></li>
              <li><Link href={getLocalizedPath('/#features')} className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.header?.features || 'Features'}</Link></li>
              <li><Link href={getLocalizedPath('/#faq')} className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.header?.faq || 'FAQ'}</Link></li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">
              {dict?.footer?.legal || 'Legal'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.footer?.privacyPolicy || 'Privacy Policy'}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.footer?.termsOfUse || 'Terms of Use'}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">{dict?.footer?.cookiePolicy || 'Cookie Policy'}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
          <p>© {currentYear} {dict?.header?.logo || 'Italian Brainrot Clicker'}. {dict?.footer?.rights || 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
} 