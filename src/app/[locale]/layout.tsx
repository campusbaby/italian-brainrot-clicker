import { Inter, Roboto_Mono } from "next/font/google";import { Metadata } from "next";import Script from "next/script";import { locales, defaultLocale } from "../i18n/settings";import { getDictionary } from "../i18n";import { Dictionary } from "../i18n/types";

// 字体设置
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

// 生成元数据
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // 获取当前语言
  const locale = params.locale || defaultLocale;
  // 获取翻译
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL('https://brainrotclicker.co'),
    title: dict.site.title || "Italian Brainrot Clicker",
    description: dict.site.description || "Immerse yourself in a fantastic internet world",
    keywords: "Italian Brainrot Clicker, clicker games, idle games, clicking games, brainrot games",
    openGraph: {
      title: dict.site.title || "Italian Brainrot Clicker",
      description: dict.site.description || "Immerse yourself in a fantastic internet world",
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
      title: dict.site.title || "Italian Brainrot Clicker",
      description: dict.site.description || "Immerse yourself in a fantastic internet world",
      images: ["https://brainrotclicker.co/og-image.png"],
    },
    // 添加备用语言链接
    alternates: {
      languages: locales.reduce((acc, lang) => {
        return {
          ...acc,
          [lang]: `/${lang}${params.locale === lang ? '' : ''}`,
        };
      }, {}),
    },
  };
}

// 生成静态参数
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  // 验证语言代码
  if (!locales.includes(locale)) {
    // 在客户端重定向到默认语言
    return null;
  }

  return (    <div className={`${inter.variable} ${robotoMono.variable}`}>      {children}    </div>  );
} 