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

// 生成XML头部
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

// 生成根URL（英文）
sitemap += `<url><loc>${config.siteUrl}</loc><lastmod>${config.lastmod}</lastmod><changefreq>${config.changefreq}</changefreq><priority>${config.priority}</priority>`;

// 添加英文页面的替代语言链接
sitemap += `<xhtml:link rel="alternate" hreflang="en" href="${config.siteUrl}"/>`;
sitemap += `<xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}"/>`;

// 添加所有其他语言的链接
config.languages.forEach(lang => {
  sitemap += `<xhtml:link rel="alternate" hreflang="${lang}" href="${config.siteUrl}/${lang}"/>`;
});

sitemap += `</url>\n`;

// 为每种语言生成URL
config.languages.forEach(lang => {
  // 添加语言URL
  sitemap += `<url><loc>${config.siteUrl}/${lang}</loc><lastmod>${config.lastmod}</lastmod><changefreq>${config.changefreq}</changefreq><priority>${config.priority}</priority>`;
  
  // 添加英文和x-default链接（始终指向根域名）
  sitemap += `<xhtml:link rel="alternate" hreflang="en" href="${config.siteUrl}"/>`;
  sitemap += `<xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}"/>`;
  
  // 添加当前语言的自引用链接
  sitemap += `<xhtml:link rel="alternate" hreflang="${lang}" href="${config.siteUrl}/${lang}"/>`;
  
  // 添加所有其他语言的链接
  config.languages.forEach(otherLang => {
    if (otherLang !== lang) {
      sitemap += `<xhtml:link rel="alternate" hreflang="${otherLang}" href="${config.siteUrl}/${otherLang}"/>`;
    }
  });
  
  sitemap += `</url>\n`;
});

// 结束XML
sitemap += `</urlset>`;

// 确保目录存在
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 写入站点地图文件
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('站点地图已生成: public/sitemap.xml');

// 生成robots.txt
const robots = `# robots.txt
User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('robots.txt已生成: public/robots.txt');

console.log('站点地图生成完成！'); 