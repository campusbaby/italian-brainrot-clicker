'use client';

import React from 'react';

interface ScrollToTopButtonProps {
  className: string;
  children: React.ReactNode;
}

export default function ScrollToTopButton({ className, children }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={className}
    >
      {children}
    </button>
  );
} 