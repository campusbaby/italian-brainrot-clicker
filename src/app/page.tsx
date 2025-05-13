import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import GameFrame from "@/components/game/GameFrame";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-gray-900/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Italian Brainrot Clicker
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 max-w-3xl mb-10">
            Dive into this addictive incremental clicker game where you tap through the viral Italian Brainrot universe! Collect unique characters like Bombardino Crocodilo, Cappuccino Assasino, and many more as you progress.
          </p>
          
          <div className="relative w-full max-w-7xl aspect-[16/9] rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg">
            <GameFrame />
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Game Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the fascinating world of Italian Brainrot Clicker! Click your way through an immersive experience featuring unique characters and exciting upgrades that boost your gameplay experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Addictive Gameplay</h3>
              <p className="text-gray-400">
                Start playing instantly in your browser! Begin with Tralalero Tralala, a shark in Nike shoes, and click your way to fame and fortune through this addictive incremental adventure.
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
              <h3 className="text-xl font-bold mb-3">Unlock Viral Characters</h3>
              <p className="text-gray-400">
                Collect over 10 unique characters from Bombardino Crocodilo to Cappuccino Assassino. Each character has its own personality and meme-worthy traits in the Italian Brainrot universe.
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dynamic Weather System</h3>
              <p className="text-gray-400">
                Experience multiple weather effects including rain, sunny, star rain, windy and snow as you progress. Each weather creates a unique atmosphere for your clicking adventure.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            {/* 删除了Learn More Features按钮 */}
          </div>
        </div>
      </section>
      
      {/* Game Guides */}
      <section id="guides" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Game Guides</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn how to master Italian Brainrot Clicker with our comprehensive guides and strategies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card mb-12">
              <h3 className="text-xl font-bold mb-3">How to Play</h3>
              <p className="text-gray-400 mb-4">
                The goal of Italian Brainrot Clicker is simple: click as much as possible to earn coins and unlock exciting upgrades. You begin with Tralalero Tralala and normal weather, then progress through clicking to unlock more characters and weather effects.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Strategic Upgrades</h3>
              <p className="text-gray-400 mb-4">
                Use your coins wisely to purchase powerful upgrades:
                <br/>• 50 coins: Cursor (+1 Brainrot per click)
                <br/>• 125 coins: Auto Click (+1 Brainrot per second)
                <br/>• 500 coins: Mr Clicker (+5 Brainrot per click)
                <br/>• 1,100 coins: Trallero Trallala Farm (+6 Brainrot per second)
                <br/>• 12,000 coins: Unlock a special mystery reward!
              </p>
              
              <h3 className="text-xl font-bold mb-3">Character Collection</h3>
              <p className="text-gray-400">
                Unlock unique characters through persistent clicking. After reaching 200 clicks, you'll unlock Bombardino Crocodilo. Around 1,000 coins, you'll unlock the rain weather effect. Continue collecting to discover all characters including Tung Tung Tung Sahur, Brr Brr Patapim, Lirili Larila, and the lightning-fast Cappuccino Assassino!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">FAQ</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about Italian Brainrot Clicker answered
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2">What is a brainrot meme?</h3>
              <p className="text-gray-400">
                Brainrot memes are viral content that have captured widespread attention on platforms like TikTok. Italian Brainrot Clicker brings these memes to life as playable characters you can collect and enjoy.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2">What does brainrot mean?</h3>
              <p className="text-gray-400">
                In internet culture, brainrot refers to when someone becomes obsessed with or repeatedly engages with a viral trend without fully understanding why. It's the perfect description for the addictive nature of our clicker game!
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Can I play Italian Brainrot Clicker on mobile devices?</h3>
              <p className="text-gray-400">
                Absolutely! Italian Brainrot Clicker is fully optimized for mobile phones, tablets, and desktop computers. Play anywhere, anytime through your web browser with no downloads required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-20 bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Player Reviews</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              See what other players are saying about Italian Brainrot Clicker and their shared experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Brainrot Enthusiast</h4>
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
                "This game is so addictive! I love collecting all the Italian Brainrot characters. Unlocking Bombardino Crocodilo and Cappuccino Assasino was such a thrill! Can't wait to get Tralalero Tralala next!"
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold">LM</span>
                </div>
                <div>
                  <h4 className="font-bold">Veteran Player</h4>
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
                "The chaotic meme characters are hilarious! Burbaloni Luliloli and Brr Brr Patapim make me laugh every time I see them. Italian Brainrot Clicker is the perfect game to decompress after a long day. Still trying to collect Bobritto Bandito!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
