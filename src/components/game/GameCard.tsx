'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/data/games';
import { Dictionary } from '@/app/i18n/types';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/app/i18n/settings';

interface GameCardProps {
  game: Game;
  dict?: Dictionary;
}

export default function GameCard({ game, dict }: GameCardProps) {
  const pathname = usePathname();
  
  // 检测当前URL中的语言
  const getCurrentLocale = () => {
    const path = pathname || '';
    const segments = path.split('/').filter(Boolean);
    return segments.length > 0 && segments[0].length === 2 ? segments[0] : '';
  };
  
  const currentLocale = getCurrentLocale();
  
  // 为Italian Brainrot Clicker生成首页链接，其他游戏生成详情页链接
  const getGameLink = () => {
    if (game.id === 'italian-brainrot-clicker') {
      // 如果是默认语言或没有语言，返回根路径
      return (currentLocale && currentLocale !== defaultLocale) ? `/${currentLocale}` : '/';
    } else {
      // 如果没有检测到当前语言环境，使用默认语言
      const locale = currentLocale || defaultLocale;
      // 如果是默认语言，不添加语言前缀
      if (locale === defaultLocale) {
        return `/game/${game.id}`;
      } else {
        return `/${locale}/game/${game.id}`;
      }
    }
  };

  // 从翻译字典中获取游戏标题和描述，如果没有则使用默认值
  const getGameTitle = () => {
    return dict?.games?.gamesList?.[game.id]?.title || game.title;
  };

  const getGameDescription = () => {
    return dict?.games?.gamesList?.[game.id]?.description || game.description;
  };

  return (
    <Link 
      href={getGameLink()}
      className="block bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-full"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={game.thumbnailUrl}
          alt={getGameTitle()}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-white text-lg">{getGameTitle()}</h3>
        <p className="text-gray-400 text-sm mt-1">{getGameDescription()}</p>
        <div className="mt-3">
          <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
            {dict?.games?.play || 'Play Now'}
          </span>
        </div>
      </div>
    </Link>
  );
} 