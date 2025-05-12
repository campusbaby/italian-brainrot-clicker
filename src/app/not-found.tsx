import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 flex-grow flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">页面未找到</h2>
            <p className="text-text-muted max-w-md mx-auto mb-8">
              你似乎迷失在互联网的脑腐深处了。这个页面并不存在，或者可能被吞噬了过多的脑腐值。
            </p>
            
            <Link href="/" className="btn btn-primary">
              返回首页
            </Link>
          </motion.div>
          
          <div className="mt-16">
            <p className="text-text-muted">你收集了 <span className="text-primary font-bold">404</span> 脑腐值</p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 