import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata = {
  title: '游戏特色 - Brainrot Clicker',
  description: '了解 Brainrot Clicker 的独特特色和游戏机制，包括角色系统、脑腐值收集和离线游戏',
};

// 特色数据
const features = [
  {
    title: "独特角色系统",
    description: "解锁10多个奇特的互联网角色，每个角色都有独特的背景故事和特殊能力，帮助你收集更多脑腐值。角色之间还可以形成组合效果，触发特殊加成。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "脑腐值系统",
    description: "脑腐值是游戏的核心资源，通过点击收集。随着游戏进展，你可以解锁各种提升脑腐值收集效率的能力和角色，包括自动点击器、暴击系统和时间加成。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path>
      </svg>
    ),
  },
  {
    title: "本地存储",
    description: "游戏进度自动保存在浏览器的本地存储中，无需注册账号。你可以放心关闭浏览器，下次访问时继续你的游戏进度。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
    ),
  },
  {
    title: "离线游戏",
    description: "即使你不在游戏中，某些角色也会继续为你收集脑腐值。返回游戏时，你会收到你离线期间收集到的所有脑腐值。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
    ),
  },
  {
    title: "成就系统",
    description: "完成游戏中的各种挑战和成就可以获得额外的脑腐值奖励和特殊能力。挑战难度从简单到困难不等，给各类玩家提供乐趣。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
  },
  {
    title: "即点即玩",
    description: "无需下载安装，直接在浏览器中享受游戏。支持电脑和移动设备，随时随地开始你的脑腐之旅。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <Layout>
      <section className="py-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">游戏特色</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              发现 Brainrot Clicker 的独特特色，这些特色让游戏变得如此有趣和上瘾
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="card h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-muted flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* 隐藏特色 */}
          <div className="card mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text">隐藏特色和彩蛋</h2>
              <p className="text-text-muted mt-2">
                游戏中隐藏了许多特殊彩蛋和机制，等待玩家发现
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-background-light rounded-lg border border-gray-800">
                <h3 className="font-bold mb-2">秘密组合</h3>
                <p className="text-text-muted">
                  某些特定角色组合会触发特殊效果。尝试不同的角色组合，看看会发生什么!
                </p>
              </div>
              
              <div className="p-4 bg-background-light rounded-lg border border-gray-800">
                <h3 className="font-bold mb-2">点击模式</h3>
                <p className="text-text-muted">
                  尝试以特定的节奏或模式点击，可能会触发特殊奖励或隐藏成就。
                </p>
              </div>
              
              <div className="p-4 bg-background-light rounded-lg border border-gray-800">
                <h3 className="font-bold mb-2">时间事件</h3>
                <p className="text-text-muted">
                  在特定的时间或日期玩游戏可能会解锁特殊内容或获得额外奖励。
                </p>
              </div>
              
              <div className="p-4 bg-background-light rounded-lg border border-gray-800">
                <h3 className="font-bold mb-2">更多待发现</h3>
                <p className="text-text-muted">
                  还有更多彩蛋等待被发现...尝试各种操作和组合，发现更多隐藏内容！
                </p>
              </div>
            </div>
          </div>
          
          {/* 行动召唤 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              准备好探索这些特色了吗？
            </h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              开始你的脑腐收集之旅，解锁所有奇特角色，发现游戏中的隐藏彩蛋
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/game" className="btn btn-primary">
                立即开始游戏
              </Link>
              <Link href="/guides" className="btn btn-outline">
                查看游戏指南
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 