/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brainrotclicker.co',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://brainrotclicker.co/sitemap.xml',
    ],
  },
}; 