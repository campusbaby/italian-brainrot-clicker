'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Dictionary } from '@/app/i18n/types';
import { defaultLocale, locales } from '@/app/i18n/settings';

interface HeaderProps {
  dict?: Dictionary; // 翻译字典，可选参数
}

export default function Header({ dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // 创建导航项，使用翻译文本并生成正确的链接
  const navItems = [
    { name: dict?.header?.home || 'Home', path: getLocalizedPath('/') },
    { name: dict?.header?.gamesCenter || 'Games Center', path: getLocalizedPath('/#games-center') },
    { name: dict?.header?.features || 'Features', path: getLocalizedPath('/#features') },
    { name: dict?.header?.characters || 'Characters', path: getLocalizedPath('/#animals-list') },
    { name: dict?.header?.guides || 'Guides', path: getLocalizedPath('/#guides') },
    { name: dict?.header?.faq || 'FAQ', path: getLocalizedPath('/#faq') },
  ];

  // Handle scroll event to change navigation bar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={getLocalizedPath('/')} className="flex items-center">
          <div className="text-2xl font-bold text-purple-500">
            {dict?.header?.logo || 'Italian Brainrot Clicker'}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-purple-500 ${
                pathname === item.path ? 'text-purple-500' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-gray-800 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-purple-500 p-2 rounded-md ${
                    pathname === item.path 
                      ? 'text-purple-500 bg-gray-900' 
                      : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 