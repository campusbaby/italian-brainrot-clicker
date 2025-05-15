'use client';

import React from 'react';

interface ScrollToTopButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ScrollToTopButton({ className = '', children }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors z-50 ${className}`}
    >
      {children || (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      )}
    </button>
  );
} 