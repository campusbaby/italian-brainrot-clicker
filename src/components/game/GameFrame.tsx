'use client';

import React from 'react';

export default function GameFrame() {
  return (
    <div className="w-full h-full relative bg-gray-900 rounded-lg overflow-hidden">
      <iframe 
        src="https://1games.io/game/italian-brainrot-clicker/" 
        style={{ width: '100%', height: '100%' }} 
        frameBorder="0" 
        scrolling="no"
        allow="gamepad *; fullscreen *; autoplay; clipboard-write; encrypted-media;" 
        allowFullScreen
        loading="eager"
        referrerPolicy="origin"
      ></iframe>
    </div>
  );
}
