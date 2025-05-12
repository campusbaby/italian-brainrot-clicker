import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brainrot Clicker - 奇幻互联网点击游戏",
  description: "沉浸在奇幻互联网世界中，收集脑腐值，解锁稀奇古怪的角色和故事",
  keywords: "Brainrot Clicker, clicker games, idle games, 点击游戏, 脑腐游戏",
  openGraph: {
    title: "Brainrot Clicker - 奇幻互联网点击游戏",
    description: "沉浸在奇幻互联网世界中，收集脑腐值，解锁稀奇古怪的角色和故事",
    images: [
      {
        url: "https://brainrotclicker.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brainrot Clicker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainrot Clicker - 奇幻互联网点击游戏",
    description: "沉浸在奇幻互联网世界中，收集脑腐值，解锁稀奇古怪的角色和故事",
    images: ["https://brainrotclicker.co/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <head>
        {/* Tailwind 加载确保样式正确应用 */}
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
