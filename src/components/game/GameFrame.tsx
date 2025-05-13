'use client';

import React from 'react';

export default function GameFrame() {
  return (
    <div className="w-full h-full relative bg-gray-900 rounded-lg overflow-hidden">
      <iframe 
        src="https://www.crazygames.com/embed/italian-brainrot-clicker-usp?locale=en" 
        style={{ width: '100%', height: '100%' }} 
        frameBorder="0" 
        allow="gamepad *; fullscreen *; autoplay; clipboard-write; encrypted-media;" 
        allowFullScreen
        loading="eager"
        referrerPolicy="origin"
      ></iframe>
    </div>
  );
}
