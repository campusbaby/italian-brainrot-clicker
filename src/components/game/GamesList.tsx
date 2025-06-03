'use client';

import React from 'react';
import GameCard from './GameCard';
import { games } from '@/data/games';
import { Dictionary } from '@/app/i18n/types';

interface GamesListProps {
  title?: string;
  dict?: Dictionary;
}

export default function GamesList({ title, dict }: GamesListProps) {
  // 使用传入的标题或从字典中获取
  const listTitle = title || dict?.games?.center || 'Games Center';

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {listTitle}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map(game => (
          <GameCard key={game.id} game={game} dict={dict} />
        ))}
      </div>
    </div>
  );
} 