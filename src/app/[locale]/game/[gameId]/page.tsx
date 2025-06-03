import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import GameFrame from '@/components/game/GameFrame';
import { games } from '@/data/games';
import { getDictionary, getGameTranslation } from '@/app/i18n';
import { defaultLocale, locales } from '@/app/i18n/settings';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// 生成静态页面参数
export function generateStaticParams() {
  // 为每个游戏和每种语言生成静态路径参数
  const params = [];
  
  for (const locale of locales) {
    for (const game of games) {
      // 如果是主游戏，不生成详情页
      if (game.id !== 'italian-brainrot-clicker') {
        params.push({
          locale,
          gameId: game.id,
        });
      }
    }
  }
  
  return params;
}

// 服务器组件获取翻译
async function GameDetailPage({ 
  params 
}: { 
  params: { locale: string; gameId: string } 
}) {
  const { locale, gameId } = params;
  
  // 查找当前游戏
  const game = games.find(g => g.id === gameId);
  
  // 如果找不到游戏，返回404
  if (!game) {
    notFound();
  }
  
  // 获取通用翻译
  const dict = await getDictionary(locale || defaultLocale);
  
  // 获取游戏特定翻译
  const gameTranslation = await getGameTranslation(gameId, locale || defaultLocale);
  
  // 获取本地化的游戏标题和描述
  const gameTitle = dict.games?.gamesList?.[gameId]?.title || game.title;
  const gameDescription = dict.games?.gamesList?.[gameId]?.description || game.description;
  
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
            {gameTitle}
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 max-w-3xl mb-10">
            {gameDescription}
          </p>
          
          <div className="relative w-full max-w-8xl aspect-[16/9] rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg">
            <GameFrame gameUrl={game.iframeUrl} allowAttributes={game.allowAttributes} />
          </div>
          
          {/* Games Center Section - 像首页一样放在iframe下方 */}
          <div id="games-center" className="w-full mt-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {dict.games?.center || 'Games Center'}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {games
                .filter(g => g.id !== gameId) // 排除当前游戏
                .slice(0, 4) // 最多显示4个游戏
                .map(otherGame => (
                  <Link 
                    key={otherGame.id}
                    href={otherGame.id === 'italian-brainrot-clicker' ? `/${locale}` : `/${locale}/game/${otherGame.id}`}
                    className="block bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-full"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={otherGame.thumbnailUrl}
                        alt={dict.games?.gamesList?.[otherGame.id]?.title || otherGame.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-white text-lg">{dict.games?.gamesList?.[otherGame.id]?.title || otherGame.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {dict.games?.gamesList?.[otherGame.id]?.description || otherGame.description}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                          {dict.games?.play || 'Play Now'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      
      {/* 游戏玩法指南 */}
      <section id="howToPlay" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {gameTranslation.howToPlay?.title || 'How to Play'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {gameTranslation.howToPlay?.description || 'Use your mouse to interact with the game.'}
            </p>
          </div>
          
          <div className="mx-auto">
            <div className="card mb-12">
              <h3 className="text-xl font-bold mb-3">
                {gameTranslation.tips?.title || 'Game Tips'}
              </h3>
              <p className="text-gray-400 mb-4">
                {gameTranslation.tips?.description || 'Master these key game techniques:'}
              </p>
              
              {gameTranslation.tips && (
                <ul className="text-gray-400 mb-6">
                  {gameTranslation.tips.tip1 && <li>• {gameTranslation.tips.tip1}</li>}
                  {gameTranslation.tips.tip2 && <li>• {gameTranslation.tips.tip2}</li>}
                  {gameTranslation.tips.tip3 && <li>• {gameTranslation.tips.tip3}</li>}
                  {gameTranslation.tips.tip4 && <li>• {gameTranslation.tips.tip4}</li>}
                  {gameTranslation.tips.tip5 && <li>• {gameTranslation.tips.tip5}</li>}
                </ul>
              )}
              
              {gameTranslation.controller && (
                <>
                  <h3 className="text-xl font-bold mb-3">
                    {gameTranslation.controller.title || 'Controller Support'}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {gameTranslation.controller.description || 'This game supports keyboard controls.'}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      {gameTranslation.faq && (
        <section id="faq" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {dict.faq?.title || 'FAQ'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {dict.faq?.description || 'Common questions about this game answered'}
              </p>
            </div>
            
            <div className="mx-auto space-y-6">
              {gameTranslation.faq.goal && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-2">{gameTranslation.faq.goal.question}</h3>
                  <p className="text-gray-400">
                    {gameTranslation.faq.goal.answer}
                  </p>
                </div>
              )}
              
              {gameTranslation.faq.tracks && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-2">{gameTranslation.faq.tracks.question}</h3>
                  <p className="text-gray-400">
                    {gameTranslation.faq.tracks.answer}
                  </p>
                </div>
              )}
              
              {gameTranslation.faq.mobile && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-2">{gameTranslation.faq.mobile.question}</h3>
                  <p className="text-gray-400">
                    {gameTranslation.faq.mobile.answer}
                  </p>
                </div>
              )}
              
              {gameTranslation.faq.multiplayer && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-2">{gameTranslation.faq.multiplayer.question}</h3>
                  <p className="text-gray-400">
                    {gameTranslation.faq.multiplayer.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* 回到顶部按钮 */}
      <ScrollToTopButton />
    </Layout>
  );
}

export default GameDetailPage; 