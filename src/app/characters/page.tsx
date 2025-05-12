import Layout from '@/components/layout/Layout';
import CharacterCard from '@/components/characters/CharacterCard';

export const metadata = {
  title: '角色收藏 - Brainrot Clicker',
  description: '解锁并收集稀奇古怪的互联网角色，了解他们的背景故事和特殊能力',
};

// 模拟角色数据
const characters = [
  {
    id: 1,
    name: '脑腐博士',
    description: '作为脑腐学的开创者，博士通过研究互联网迷因和点击行为模式，发现了脑腐值的存在。他的特殊能力可以增加基础点击获取的脑腐值。',
    unlockCost: 100,
    ability: '每次点击获得的脑腐值增加25%',
    imageUrl: '/characters/character1.png',
    isUnlocked: true,
  },
  {
    id: 2,
    name: '梦境浏览者',
    description: '她可以穿梭于互联网的梦境层面，收集被遗忘的网页和失效链接中残留的脑腐值。据说她曾经迷失在Web 1.0的遗迹中长达数年。',
    unlockCost: 500,
    ability: '每30秒自动收集一次脑腐值',
    imageUrl: '/characters/character2.png',
    isUnlocked: false,
  },
  {
    id: 3,
    name: '像素收集者',
    description: '他痴迷于收集互联网上的每一个像素，相信像素中蕴含着强大的脑腐能量。他经常以各种分辨率出现，有时甚至会变成8位元风格。',
    unlockCost: 1000,
    ability: '随机触发点击暴击，获得5倍脑腐值',
    imageUrl: '/characters/character3.png',
    isUnlocked: false,
  },
  {
    id: 4,
    name: '缓存幽灵',
    description: '曾经是一个普通的网络爬虫程序，在索引过量的互联网内容后获得了自我意识。现在它游荡在各种缓存和临时文件中，搜寻脑腐值。',
    unlockCost: 2000,
    ability: '离线时脑腐值收集效率提高50%',
    imageUrl: '/characters/character4.png',
    isUnlocked: false,
  },
  {
    id: 5,
    name: '评论区魔法师',
    description: '她掌握着互联网评论区的奥秘，能够从键盘战争和网络争论中提取脑腐值。她的存在形式是由无数网络争论中的精华观点组成的。',
    unlockCost: 5000,
    ability: '每分钟有10%几率获得大量脑腐值奖励',
    imageUrl: '/characters/character5.png',
    isUnlocked: false,
  },
  {
    id: 6,
    name: '加载中...永远',
    description: '这个角色被永久困在加载状态中，它的形象总是一个旋转的圆圈。奇怪的是，正是这种永恒的加载状态让它能够收集到特殊的"等待型"脑腐值。',
    unlockCost: 10000,
    ability: '页面加载时获得额外脑腐值',
    imageUrl: '/characters/character6.png',
    isUnlocked: false,
  },
];

export default function CharactersPage() {
  return (
    <Layout>
      <section className="py-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">角色收藏</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              通过收集脑腐值解锁这些稀奇古怪的互联网角色，每个角色都有独特的能力和背景故事
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-text-muted mb-6">更多角色即将解锁，敬请期待！</p>
            <a href="/game" className="btn btn-primary">
              返回游戏继续收集脑腐值
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 