'use client';

import { motion } from 'framer-motion';

interface Character {
  id: number;
  name: string;
  description: string;
  unlockCost: number;
  ability: string;
  imageUrl: string;
  isUnlocked: boolean;
}

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <motion.div 
      className={`card h-full overflow-hidden relative ${!character.isUnlocked ? 'opacity-70' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* 角色图片 */}
      <div className="relative h-48 mb-4 bg-background rounded-lg overflow-hidden flex items-center justify-center">
        {character.isUnlocked ? (
          <div className="text-text-muted">角色图片</div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-background-light/50 backdrop-blur-sm z-10">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <p className="text-sm text-text-DEFAULT">需要 {character.unlockCost} 脑腐值解锁</p>
            </div>
          </div>
        )}
      </div>
      
      {/* 角色信息 */}
      <h3 className="text-xl font-bold mb-2">
        {character.name}
        {character.isUnlocked && (
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
            已解锁
          </span>
        )}
      </h3>
      
      <p className="text-text-muted mb-4 text-sm">
        {character.isUnlocked 
          ? character.description 
          : character.description.substring(0, 70) + '... (解锁后查看更多)'}
      </p>
      
      {/* 能力信息 */}
      {character.isUnlocked && (
        <div className="mb-4 p-3 bg-background rounded-lg">
          <h4 className="text-sm font-bold mb-1 text-primary">特殊能力</h4>
          <p className="text-text-DEFAULT text-sm">{character.ability}</p>
        </div>
      )}
      
      {/* 解锁按钮 */}
      {!character.isUnlocked && (
        <button className="w-full btn btn-primary flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          解锁角色
        </button>
      )}
    </motion.div>
  );
} 