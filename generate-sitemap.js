const fs = require('fs');
const path = require('path');

console.log('开始生成站点地图...');

// 站点配置
const config = {
  siteUrl: 'https://brainrotclicker.co',
  lastmod: new Date().toISOString(),
  changefreq: 'daily',
  priority: 1.0,
  languages: ['sv', 'no', 'da', 'fr', 'nl', 'es', 'de', 'is', 'vi', 'lv', 'ar']
};

// 从games.ts获取所有游戏
const games = [
  { id: 'italian-brainrot-clicker', priority: 1.0 }, // 主游戏
  { id: 'blood-money-game', priority: 0.9 },
  { id: 'merge-fellas', priority: 0.9 },
  { id: 'italian-brainrot-obby-parkour', priority: 0.8 }
];

// 生成XML头部
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 生成根URL（英文主页）
sitemap += `  <url>
    <loc>${config.siteUrl}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>
`;

// 为每种语言生成主页URL
config.languages.forEach(lang => {
  sitemap += `  <url>
    <loc>${config.siteUrl}/${lang}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>
`;
});

// 添加游戏页面的URL
games.forEach(game => {
  // 添加英文游戏页面（默认路径）
  if (game.id === 'italian-brainrot-clicker') {
    // 主游戏不需要/game/路径，因为它在根路径
    return;
  }

  sitemap += `  <url>
    <loc>${config.siteUrl}/game/${game.id}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${game.priority}</priority>
  </url>
`;

  // 为每种语言生成游戏页面URL
  config.languages.forEach(lang => {
    sitemap += `  <url>
    <loc>${config.siteUrl}/${lang}/game/${game.id}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${game.priority}</priority>
  </url>
`;
  });
});

// 结束XML
sitemap += `</urlset>`;

// 确保目录存在
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 写入站点地图文件
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`站点地图已生成: ${sitemapPath}`);
console.log(`包含 ${sitemap.split('<url>').length - 1} 个URL`);

// 生成robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);

console.log(`robots.txt已生成: ${robotsPath}`);
console.log('站点地图生成完成！');