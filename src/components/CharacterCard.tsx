import React, { useState } from 'react';
import Image from 'next/image';

interface CharacterCardProps {
  name: string;
  description: string;
  imageUrl: string;
  fallbackImage?: string;
}

export default function CharacterCard({ name, description, imageUrl, fallbackImage}: CharacterCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  
  // 处理图片加载错误
  const handleImageError = () => {
    if (fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };
  
  // 截断描述，保持简短
  const truncateDescription = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all hover:shadow-purple-500/20 hover:border-purple-500/50">
      <div className="overflow-hidden relative">
        <div className="relative w-full h-56">
          <Image 
            src={imgSrc} 
            alt={`${name} - Italian Brainrot Character`} 
            className="object-cover transition-transform hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
            onError={handleImageError}
          />
        </div>
      </div>
      <div className="p-2.5 pt-2">
        <h3 className="text-lg font-bold mb-0.5 text-white">{name}</h3>
        <p className="text-gray-400 text-sm h-10 line-clamp-2">{truncateDescription(description, 75)}</p>
      </div>
    </div>
  );
} 