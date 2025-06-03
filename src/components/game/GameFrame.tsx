'use client';

import React from 'react';

interface GameFrameProps {
  gameUrl?: string;
  allowAttributes?: string;
}

export default function GameFrame({ 
  gameUrl = "https://1games.io/game/italian-brainrot-clicker/",
  allowAttributes
}: GameFrameProps) {
  // 合并默认allow属性和可选的额外属性
  const allowValue = allowAttributes 
    ? `gamepad *; fullscreen *; autoplay; clipboard-write; encrypted-media; ${allowAttributes}` 
    : "gamepad *; fullscreen *; autoplay; clipboard-write; encrypted-media;";

  return (
    <div className="w-full h-full relative bg-gray-900 rounded-lg overflow-hidden">
      <iframe 
        src={gameUrl} 
        style={{ width: '100%', height: '100%' }} 
        frameBorder="0" 
        scrolling="no"
        allow={allowValue} 
        allowFullScreen
        loading="eager"
        referrerPolicy="origin"
      ></iframe>
    </div>
  );
}
