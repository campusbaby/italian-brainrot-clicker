import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '玩法指南 - Brainrot Clicker',
  description: '学习如何玩 Brainrot Clicker，掌握游戏技巧，了解最佳策略和角色解锁顺序',
};

export default function GuidesPage() {
  return (
    <Layout>
      <section className="py-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">玩法指南</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              掌握 Brainrot Clicker 的游戏玩法和策略，最大化你的脑腐值收集效率
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* 基础玩法 */}
            <div className="card mb-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text">基础玩法</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">游戏目标</h3>
                  <p className="text-text-muted mb-4">
                    Brainrot Clicker 的主要目标是收集尽可能多的脑腐值，解锁所有奇特的互联网角色，并发现他们的背景故事。
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">如何开始</h3>
                  <ol className="list-decimal pl-5 text-text-muted space-y-2">
                    <li>点击屏幕中央区域开始收集脑腐值</li>
                    <li>使用收集到的脑腐值解锁新角色</li>
                    <li>利用角色的特殊能力提升脑腐值收集效率</li>
                    <li>解锁自动点击器以在离线状态下继续收集脑腐值</li>
                  </ol>
                </div>
                <div className="bg-background-light rounded-lg p-6 text-center flex items-center justify-center">
                  <div className="text-text-muted">游戏操作示意图</div>
                </div>
              </div>
            </div>
            
            {/* 角色解锁策略 */}
            <div className="card mb-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text">角色解锁策略</h2>
              <p className="text-text-muted mb-6">
                角色解锁顺序对游戏进度有很大影响。以下是我们推荐的最佳解锁顺序：
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2">第一阶段 (0-1,000 脑腐值)</h3>
                  <p className="text-text-muted">
                    先解锁"脑腐博士"，他的基础点击加成可以加速早期游戏进度。每次点击获得的脑腐值增加25%，是最适合初始阶段的角色。
                  </p>
                </div>
                
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2">第二阶段 (1,000-5,000 脑腐值)</h3>
                  <p className="text-text-muted">
                    接下来解锁"梦境浏览者"和"像素收集者"。前者提供自动收集功能，后者则有机会触发暴击，这两个角色组合可以大幅提升收集效率。
                  </p>
                </div>
                
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2">第三阶段 (5,000+ 脑腐值)</h3>
                  <p className="text-text-muted">
                    解锁"缓存幽灵"和"评论区魔法师"，这两个角色特别适合长时间游戏，能够提供稳定的脑腐值收入，特别是在离线状态下。
                  </p>
                </div>
              </div>
              
              <Link href="/characters" className="btn btn-primary inline-flex items-center">
                <span>查看所有可解锁角色</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* 高级技巧 */}
            <div className="card mb-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text">高级技巧</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    组合加成
                  </h3>
                  <p className="text-text-muted">
                    某些角色组合可以产生特殊效果。例如，同时激活"像素收集者"和"缓存幽灵"可以触发"像素缓存"效果，使点击暴击率增加10%。
                  </p>
                </div>
                
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    定时检查
                  </h3>
                  <p className="text-text-muted">
                    有些角色在特定时间会触发特殊事件。例如，"加载中...永远"角色在凌晨12点到1点之间会产生双倍脑腐值。定期检查游戏可以发现这些隐藏奖励。
                  </p>
                </div>
                
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                      <line x1="8" y1="2" x2="8" y2="18" />
                      <line x1="16" y1="6" x2="16" y2="22" />
                    </svg>
                    成就系统
                  </h3>
                  <p className="text-text-muted">
                    完成游戏中的各种成就可以获得额外奖励。查看成就列表，有针对性地完成它们可以大幅加速游戏进度。
                  </p>
                </div>
                
                <div className="p-4 bg-background-light rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                      <path d="M12 12H8" />
                      <path d="M12 6v6" />
                    </svg>
                    离线优化
                  </h3>
                  <p className="text-text-muted">
                    优先解锁和升级那些能提高离线收集效率的角色，如"缓存幽灵"。这样即使你不玩游戏，也能持续积累脑腐值。
                  </p>
                </div>
              </div>
              
              <p className="text-center text-text-muted">
                记住，游戏中有许多隐藏机制和彩蛋等待你去发现。不断尝试新的组合和策略，享受探索的乐趣！
              </p>
            </div>
            
            <div className="text-center">
              <Link href="/game" className="btn btn-primary">
                开始游戏
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 