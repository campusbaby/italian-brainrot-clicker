import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* 英雄区 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-gray-900/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Brainrot Clicker
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 max-w-2xl mb-10">
            探索奇幻互联网世界，收集脑腐值，解锁稀奇古怪的角色和故事
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/game" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white">
              立即开始
            </Link>
            <Link href="/characters" className="border-2 border-purple-600 hover:bg-purple-600 text-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium">
              探索角色
            </Link>
          </div>
          
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg">
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <p className="text-lg text-gray-400">游戏画面载入中...</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* 游戏特点 */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">游戏特点</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Brainrot Clicker 带你进入一个奇幻的互联网世界，点击收集脑腐值，解锁稀奇古怪的互联网角色
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">即点即玩</h3>
              <p className="text-gray-400">
                无需下载安装，直接在浏览器中享受点击游戏的乐趣，随时随地开始你的脑腐之旅。
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">奇特角色</h3>
              <p className="text-gray-400">
                收集脑腐值解锁十多个稀奇古怪的互联网角色，每个角色都有独特的能力和背景故事。
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">本地进度</h3>
              <p className="text-gray-400">
                游戏进度自动保存在本地，无需担心刷新页面或关闭浏览器导致进度丢失。
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/features" className="btn btn-primary">
              了解更多特点
            </Link>
          </div>
        </div>
      </section>
      
      {/* 角色预览 */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">角色预览</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              收集脑腐值解锁这些稀奇古怪的互联网角色，每个角色都有独特的能力和背景故事
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="relative h-64 mb-4 bg-background rounded-lg overflow-hidden flex items-center justify-center">
                  <p className="text-text-muted">角色图片 {index + 1}</p>
                </div>
                <h3 className="text-xl font-bold mb-2">神秘角色 {index + 1}</h3>
                <p className="text-text-muted mb-4">
                  解锁这个神秘角色以了解其独特能力和背景故事。需要收集一定数量的脑腐值。
                </p>
                <Link 
                  href="/characters" 
                  className="text-primary hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  <span>了解更多</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/characters" className="btn btn-primary">
              查看全部角色
            </Link>
          </div>
        </div>
      </section>
      
      {/* 测评区域 */}
      <section className="py-20 bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">玩家评价</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              看看其他玩家对 Brainrot Clicker 的评价和体验分享
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">脑腐爱好者</h4>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted">
                "这游戏简直太上瘾了！每天睡前都要点击收集脑腐值，解锁新角色的成就感太爽了。推荐给所有喜欢点击游戏的朋友！"
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold">LM</span>
                </div>
                <div>
                  <h4 className="font-bold">资深玩家</h4>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "none"} stroke={i < 4 ? "none" : "currentColor"} strokeWidth="2" className="text-primary">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted">
                "角色的设计很有创意，背景故事也很有趣。但是后期升级有点慢，希望能增加更多获取脑腐值的途径。总体来说还是很棒的游戏！"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 行动召唤 */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0" />
        <div className="absolute inset-0 bg-[url(/noise.png)] opacity-5 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              准备好开始你的脑腐之旅了吗？
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
              点击收集脑腐值，解锁稀奇古怪的角色，探索奇幻互联网世界
            </p>
            
            <Link href="/game" className="btn btn-primary text-lg px-8 py-3">
              立即开始游戏
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
