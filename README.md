# Italian Brainrot Clicker

一个基于Next.js和Tailwind CSS构建的有趣的增量点击游戏网站，灵感来源于病毒式传播的意大利风格meme。

## 项目概述

Italian Brainrot Clicker是一个沉浸式网页游戏，玩家通过点击收集"脑腐点数"，解锁各种有趣的角色和升级。游戏融合了互联网文化中流行的意大利风格meme元素，创造了一个充满乐趣的点击体验。

## 主要特性

- **沉浸式游戏体验**：从Tralalero Tralala（一只穿着耐克鞋的鲨鱼）开始，收集点数解锁更多角色
- **多样化角色系统**：解锁10+独特角色，如Bombardino Crocodilo、Cappuccino Assassino等
- **动态天气系统**：游戏中有多种天气效果，包括雨天、晴天、星雨、大风和下雪
- **渐进式升级系统**：使用收集的金币购买升级，提高点击效率
- **自动保存功能**：游戏进度自动保存到浏览器，无需担心关闭页面
- **多语言支持**：支持12种语言，为全球用户提供本地化体验

## 支持的语言

该游戏支持以下12种语言：

1. 英语 (English) - 默认
2. 瑞典语 (Svenska)
3. 挪威语 (Norsk)
4. 丹麦语 (Dansk)
5. 法语 (Français)
6. 荷兰语 (Nederlands)
7. 西班牙语 (Español)
8. 德语 (Deutsch)
9. 冰岛语 (Íslenska)
10. 越南语 (Tiếng Việt)
11. 拉脱维亚语 (Latviešu)
12. 阿拉伯语 (العربية)

用户可以通过页面右上角的语言切换器轻松切换语言。

## 技术栈

- **前端框架**：Next.js 14
- **样式解决方案**：Tailwind CSS
- **动画库**：Framer Motion
- **国际化**：自定义i18n解决方案
- **SEO优化**：具有hreflang标签的动态站点地图
- **部署平台**：Vercel

## 本地开发

1. 克隆仓库：
```bash
git clone https://github.com/campusbaby/italian-brainrot-clicker.git
cd italian-brainrot-clicker
```

2. 安装依赖：
```bash
npm install
# 或者
yarn install
```

3. 启动开发服务器：
```bash
npm run dev
# 或者
yarn dev
```

4. 在浏览器中访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

项目采用单页应用设计，所有主要内容都在首页通过锚点导航：

- 游戏框架（主页）
- 游戏特性（#features）
- 游戏指南（#guides）
- 常见问题（#faq）

多语言支持实现：
- `src/app/i18n/` - 多语言配置和翻译
- `src/app/[locale]/` - 本地化路由
- `src/components/LanguageSwitcher.tsx` - 语言切换组件

## 许可证

MIT

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
