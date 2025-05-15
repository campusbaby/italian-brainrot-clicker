const fs = require('fs');
const path = require('path');

console.log('开始修复站点地图...');

// 获取当前日期
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentSecond = now.getSeconds();
const currentMillisecond = now.getMilliseconds();

// 手动构建当前日期字符串，确保年份正确
const currentDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(currentDay).padStart(2, '0')}T${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}:${String(currentSecond).padStart(2, '0')}.${String(currentMillisecond).padStart(3, '0')}Z`;

// 读取现有的站点地图
console.log('读取站点地图...');
const sitemap = fs.readFileSync(path.join(__dirname, 'public', 'sitemap.xml'), 'utf8');

// 将所有2025年替换为当前年份
console.log('修复日期问题...');
const fixedSitemap = sitemap.replace(/2025-/g, `${currentYear}-`);

// 写入修复后的站点地图
console.log('写入修复后的站点地图...');
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), fixedSitemap);

console.log(`站点地图日期修复完成！所有2025年日期已替换为${currentYear}年`); 