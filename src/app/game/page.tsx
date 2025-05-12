import Layout from '@/components/layout/Layout';
import GameFrame from '@/components/game/GameFrame';

export const metadata = {
  title: '开始游戏 - Brainrot Clicker',
  description: '直接在浏览器中玩 Brainrot Clicker，收集脑腐值，解锁角色和特殊能力',
};

export default function GamePage() {
  return (
    <Layout>
      <section className="py-10 flex-grow">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">开始游戏</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              点击收集脑腐值，解锁稀奇古怪的角色，提升你的点击能力
            </p>
          </div>
          
          <GameFrame />
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">游戏指南</h2>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>通过点击屏幕中心区域来收集脑腐值</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>使用收集到的脑腐值解锁新角色和升级</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>每个角色都有特殊能力，可以增加你的点击效率</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>解锁自动点击器以在离开游戏时继续收集脑腐值</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-bold mb-4">游戏小贴士</h2>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>优先购买性价比最高的升级，可以最大化脑腐值收集效率</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>注意查看每个角色的特殊能力，有些可能会有意想不到的加成</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>游戏进度会自动保存在本地，无需担心关闭浏览器</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2 mt-0.5">•</span>
                  <span>别忘了查看成就系统，完成成就可以获得额外奖励</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 