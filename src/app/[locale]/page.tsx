import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import GameFrame from "@/components/game/GameFrame";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "../i18n";
import { defaultLocale, locales } from "../i18n/settings";

// 生成静态页面参数
export function generateStaticParams() {
  // 只为非默认语言生成静态参数，默认语言(英语)使用根路径
  return locales
    .filter(locale => locale !== defaultLocale)
    .map(locale => ({ locale }));
}

// 服务器组件获取翻译
async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale || defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <Layout dict={dict}>
      {/* 语言切换器 */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLocale={locale} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-gray-900/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {dict.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 max-w-3xl mb-10">
            {dict.hero.description}
          </p>
          
          <div className="relative w-full max-w-7xl aspect-[16/9] rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg">
            <GameFrame />
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {dict.features.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.features.gameplay.title}</h3>
              <p className="text-gray-400">
                {dict.features.gameplay.description}
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.features.characters.title}</h3>
              <p className="text-gray-400">
                {dict.features.characters.description}
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.features.weather.title}</h3>
              <p className="text-gray-400">
                {dict.features.weather.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Game Guides */}
      <section id="guides" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {dict.guides.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.guides.description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card mb-12">
              <h3 className="text-xl font-bold mb-3">{dict.guides.howToPlay.title}</h3>
              <p className="text-gray-400 mb-4">
                {dict.guides.howToPlay.description}
              </p>
              
              <h3 className="text-xl font-bold mb-3">{dict.guides.upgrades.title}</h3>
              <p className="text-gray-400 mb-4">
                {dict.guides.upgrades.description}
                <br/>• 50 coins: Cursor (+1 Brainrot per click)
                <br/>• 125 coins: Auto Click (+1 Brainrot per second)
                <br/>• 500 coins: Mr Clicker (+5 Brainrot per click)
                <br/>• 1,100 coins: Trallero Trallala Farm (+6 Brainrot per second)
                <br/>• 12,000 coins: Unlock a special mystery reward!
              </p>
              
              <h3 className="text-xl font-bold mb-3">{dict.guides.characters.title}</h3>
              <p className="text-gray-400">
                {dict.guides.characters.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {dict.faq.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {dict.faq.description}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2">{dict.faq.what.title}</h3>
              <p className="text-gray-400">
                {dict.faq.what.description}
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2">{dict.faq.mean.title}</h3>
              <p className="text-gray-400">
                {dict.faq.mean.description}
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2">{dict.faq.mobile.title}</h3>
              <p className="text-gray-400">
                {dict.faq.mobile.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 回到顶部按钮 */}
      <ScrollToTopButton />
    </Layout>
  );
}

export default HomePage; 