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

// 添加游戏页面配置
const games = [
  {
    id: 'rolling-balls-space-race',
    priority: 0.9
  }
];

// 生成XML头部，添加样式表引用
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

// 生成根URL（英文）
sitemap += `  <url>
    <loc>${config.siteUrl}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>`;

// 添加英文页面的替代语言链接
sitemap += `
    <xhtml:link rel="alternate" hreflang="en" href="${config.siteUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}"/>`;

// 添加所有其他语言的链接
config.languages.forEach(lang => {
  sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${config.siteUrl}/${lang}"/>`;
});

sitemap += `
  </url>
`;

// 为每种语言生成URL
config.languages.forEach(lang => {
  // 添加语言URL
  sitemap += `  <url>
    <loc>${config.siteUrl}/${lang}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>`;
  
  // 添加英文和x-default链接（始终指向根域名）
  sitemap += `
    <xhtml:link rel="alternate" hreflang="en" href="${config.siteUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}"/>`;
  
  // 添加当前语言的自引用链接
  sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${config.siteUrl}/${lang}"/>`;
  
  // 添加所有其他语言的链接
  config.languages.forEach(otherLang => {
    if (otherLang !== lang) {
      sitemap += `
    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${config.siteUrl}/${otherLang}"/>`;
    }
  });
  
  sitemap += `
  </url>
`;
});

// 添加游戏页面的URL
games.forEach(game => {
  // 添加英文游戏页面
  const gameUrl = `${config.siteUrl}/game/${game.id}`;
  sitemap += `  <url>
    <loc>${gameUrl}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${game.priority}</priority>`;
  
  // 添加英文自引用链接
  sitemap += `
    <xhtml:link rel="alternate" hreflang="en" href="${gameUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${gameUrl}"/>`;
  
  // 添加其他语言的链接
  config.languages.forEach(lang => {
    const localizedGameUrl = `${config.siteUrl}/${lang}/game/${game.id}`;
    sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${localizedGameUrl}"/>`;
  });
  
  sitemap += `
  </url>
`;
  
  // 为每种语言生成游戏页面URL
  config.languages.forEach(lang => {
    const localizedGameUrl = `${config.siteUrl}/${lang}/game/${game.id}`;
    sitemap += `  <url>
    <loc>${localizedGameUrl}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${game.priority}</priority>`;
    
    // 添加英文和x-default链接
    sitemap += `
    <xhtml:link rel="alternate" hreflang="en" href="${gameUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${gameUrl}"/>`;
    
    // 添加当前语言的自引用链接
    sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${localizedGameUrl}"/>`;
    
    // 添加所有其他语言的链接
    config.languages.forEach(otherLang => {
      if (otherLang !== lang) {
        const otherLocalizedGameUrl = `${config.siteUrl}/${otherLang}/game/${game.id}`;
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${otherLocalizedGameUrl}"/>`;
      }
    });
    
    sitemap += `
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
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('站点地图已生成: public/sitemap.xml');

// 创建XML样式表文件
const xslStyle = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            font-size: 14px;
            max-width: 75%;
            margin: 0 auto;
            padding: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #eee;
            margin: 15px 0;
          }
          th {
            background-color: #f6f8fa;
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid #eee;
            font-weight: bold;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #eee;
          }
          tr:hover td {
            background-color: #f6f8fa;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          a {
            color: #0366d6;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .description {
            margin: 10px 0 20px 0;
            font-size: 14px;
            line-height: 1.5;
          }
          .count {
            font-size: 14px;
            margin-bottom: 20px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="description">
          This is a sitemap for <a href="{sitemap:urlset/sitemap:url[1]/sitemap:loc}"><xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:loc" /></a>, 
          generated to help search engines index the site more efficiently.
        </div>
        <div class="count">
          Number of URLs in this sitemap: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
        </div>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

fs.writeFileSync(path.join(publicDir, 'sitemap-style.xsl'), xslStyle);
console.log('XML样式表已生成: public/sitemap-style.xsl');

// 生成robots.txt
const robots = `# robots.txt
User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('robots.txt已生成: public/robots.txt');

console.log('站点地图生成完成！'); 