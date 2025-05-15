'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/app/i18n/types';

interface LayoutProps {
  children: ReactNode;
  dict?: Dictionary;
}

export default function Layout({ children, dict }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow pt-20">
        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer dict={dict} />
    </div>
  );
} 