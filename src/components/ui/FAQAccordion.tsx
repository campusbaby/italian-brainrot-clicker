'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export default function FAQAccordion({ question, answer, isOpen = false }: FAQAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  
  return (
    <div className="mb-4 border border-gray-800 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left bg-background-light flex justify-between items-center hover:bg-background-light/70 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-base md:text-lg font-medium">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 bg-background text-text-muted border-t border-gray-800">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}