import Layout from '@/components/layout/Layout';
import FAQAccordion from '@/components/ui/FAQAccordion';

export const metadata = {
  title: '常见问题 - Brainrot Clicker',
  description: '了解 Brainrot Clicker 游戏的常见问题和解答，帮助你更好地享受游戏体验',
};

// FAQ数据
const faqItems = [
  {
    question: '什么是脑腐值？',
    answer: '脑腐值是游戏中的主要资源，通过点击和角色能力收集获得。它是一种由互联网活动产生的神秘能量，可以用来解锁新角色和升级。'
  },
  {
    question: '我如何解锁新角色？',
    answer: '你需要收集足够的脑腐值来解锁新角色。每个角色都有特定的解锁成本，可以在"角色收藏"页面查看。解锁后，角色会提供特殊能力，帮助你更快地收集脑腐值。'
  },
  {
    question: '游戏进度会保存吗？',
    answer: '是的，游戏进度会自动保存在你的浏览器本地存储中。这意味着即使关闭浏览器或刷新页面，你的进度也不会丢失。但请注意，清除浏览器数据可能会导致游戏进度丢失。'
  },
  {
    question: '我可以在手机上玩这个游戏吗？',
    answer: '当然可以！Brainrot Clicker 采用响应式设计，可以在包括智能手机和平板电脑在内的各种设备上流畅运行。界面会自动适应不同屏幕尺寸，确保最佳游戏体验。'
  },
  {
    question: '游戏是免费的吗？',
    answer: '是的，Brainrot Clicker 完全免费，无需付费即可享受完整游戏内容。游戏也没有任何广告或内购项目，我们希望提供纯粹的游戏体验。'
  },
  {
    question: '我可以离线玩游戏吗？',
    answer: '一旦页面加载完成，你可以在一定程度上离线玩游戏。然而，某些功能可能需要互联网连接。另外，游戏支持离线脑腐值收集，这意味着即使你不在游戏中，某些角色也会继续为你收集脑腐值。'
  },
  {
    question: '如何提高脑腐值收集效率？',
    answer: '提高脑腐值收集效率的主要方法包括：解锁并升级具有特殊能力的角色、完成成就以获得奖励、定期点击以触发组合加成，以及策略性地投资于最有效的升级选项。'
  },
  {
    question: '我可以把游戏分享给朋友吗？',
    answer: '当然可以！我们鼓励你与朋友分享这个游戏。你可以通过社交媒体分享链接，或者直接告诉他们网站地址。扩大玩家社区有助于我们改进游戏。'
  },
];

export default function FAQPage() {
  return (
    <Layout>
      <section className="py-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">常见问题</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              以下是关于 Brainrot Clicker 游戏的一些常见问题和解答，希望能帮助你更好地享受游戏
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQAccordion 
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === 0}
              />
            ))}
            
            <div className="mt-12 text-center">
              <p className="text-text-muted mb-4">还有其他问题？</p>
              <a href="mailto:contact@brainrotclicker.co" className="text-primary hover:text-primary-dark transition-colors">
                联系我们: contact@brainrotclicker.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 