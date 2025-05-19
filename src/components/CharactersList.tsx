'use client';

import React from 'react';
import CharacterCard from './CharacterCard';
import Image from 'next/image';
import { Dictionary } from '@/app/i18n/types';

interface CharactersListProps {
  dict?: Dictionary;
}

export default function CharactersList({ dict }: CharactersListProps) {
  // 角色数据使用翻译
  const characters = [
    {
      id: 'tralalero-tralala',
      name: dict?.charactersList?.characters?.tralaleroTralala?.name || '',
      description: dict?.charactersList?.characters?.tralaleroTralala?.description || '',
      imageUrl: '/images/characters/tralalero-tralala.webp'
    },
    {
      id: 'bombardino-crocodilo',
      name: dict?.charactersList?.characters?.bombardinoCrocodilo?.name || '',
      description: dict?.charactersList?.characters?.bombardinoCrocodilo?.description || '',
      imageUrl: '/images/characters/bombardino-crocodilo.webp'
    },
    {
      id: 'tung-tung-tung-sahur',
      name: dict?.charactersList?.characters?.tungTungTungSahur?.name || '',
      description: dict?.charactersList?.characters?.tungTungTungSahur?.description || '',
      imageUrl: '/images/characters/tung-tung-tung-sahur.webp'
    },
    {
      id: 'Lirilì-Larilà',
      name: dict?.charactersList?.characters?.liriliLarila?.name || '',
      description: dict?.charactersList?.characters?.liriliLarila?.description || '',
      imageUrl: '/images/characters/Lirilì-Larilà.webp'
    },
    {
      id: 'Boneca-Ambalabu',
      name: dict?.charactersList?.characters?.BonecaAmbalabu?.name || '',
      description: dict?.charactersList?.characters?.BonecaAmbalabu?.description || '',
      imageUrl: '/images/characters/Boneca-Ambalabu.webp'
    }
  ];

  return (
    <section id="animals-list" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {dict?.charactersList?.title || 'Italian Brainrot Animals List'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {dict?.charactersList?.description || 'Explore all the unique characters in the Italian Brainrot universe. Each character has their own unique traits and interesting backstory.'}
          </p>
        </div>
        
        {/* Display the first 4 character cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mx-auto">
          {characters.map((character) => (
            <CharacterCard 
              key={character.id}
              name={character.name}
              description={character.description}
              imageUrl={character.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* SEO optimized structured data - includes all characters even if only 4 are displayed in UI */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "CollectionPage",
            "name": dict?.charactersList?.title || "Italian Brainrot Animals Collection",
            "description": dict?.charactersList?.description || "Complete collection of all characters in the Italian Brainrot Clicker game",
            "itemListElement": characters.map(char => ({
              "@type": "VideoGame",
              "character": {
                "@type": "Character",
                "name": char.name,
                "description": char.description
              }
            }))
          })
        }}
      />
    </section>
  );
} 