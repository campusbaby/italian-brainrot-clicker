'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GameFrame() {
  const [isLoading, setIsLoading] = useState(true);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [gameUrl] = useState('about:blank'); // 将来替换为实际游戏URL
  
  // 模拟游戏加载
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setGameLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-primary shadow-neon">
      {isLoading ? (
        <div className="absolute inset-0 bg-background-light flex flex-col items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
          </motion.div>
          <p className="text-lg text-text-muted">游戏正在加载中...</p>
        </div>
      ) : (
        <>
          {!gameLoaded ? (
            <div className="absolute inset-0 bg-background-light flex items-center justify-center">
              <p className="text-lg text-text-muted">游戏加载失败，请刷新页面重试</p>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {/* 游戏画面占位 */}
              <div className="absolute inset-0 bg-background flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center mb-6 hover:bg-primary/30 transition-colors cursor-pointer">
                  <p className="text-3xl font-bold gradient-text">点击我</p>
                </div>
                <p className="text-xl text-text-muted">点击收集脑腐值: <span className="text-primary font-bold">0</span></p>
              </div>
              
              {/* 实际游戏iframe，当有真实游戏URL时启用 */}
              {/* 
              <iframe 
                src={gameUrl} 
                className="absolute inset-0 w-full h-full border-0"
                title="Brainrot Clicker Game"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
              */}
            </div>
          )}
        </>
      )}
    </div>
  );
} 