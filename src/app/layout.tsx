import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brainrotclicker.co'),
  title: "Italian Brainrot Clicker - Fantastic Internet Clicking Game",
  description: "Immerse yourself in a fantastic internet world, collect brainrot points, unlock quirky characters and stories",
  keywords: "Italian Brainrot Clicker, clicker games, idle games, clicking games, brainrot games",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Italian Brainrot Clicker - Fantastic Internet Clicking Game",
    description: "Immerse yourself in a fantastic internet world, collect brainrot points, unlock quirky characters and stories",
    images: [
      {
        url: "https://brainrotclicker.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Italian Brainrot Clicker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Brainrot Clicker - Fantastic Internet Clicking Game",
    description: "Immerse yourself in a fantastic internet world, collect brainrot points, unlock quirky characters and stories",
    images: ["https://brainrotclicker.co/og-image.png"],
  },
  alternates: {
    canonical: 'https://brainrotclicker.co',
    languages: {
      'en': 'https://brainrotclicker.co',
      'sv': 'https://brainrotclicker.co/sv'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X85K71DQ7R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X85K71DQ7R');
          `}
        </Script>
        
        {/* Bing Clarity */}
        <Script id="bing-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "riu9rb6rqa");
          `}
        </Script>
        
        {/* Tailwind loading to ensure styles are applied correctly */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
