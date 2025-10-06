import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-psi-ten-1zdu3723yk.vercel.app'),
  title: {
    default: "Baha Yıldız | Bilgisayar Mühendisi & Yazılım Geliştirici",
    template: "%s | Baha Yıldız"
  },
  description: "Bilgisayar mühendisi ve yazılım geliştirici. React, TypeScript, C# ve .NET ile modern web uygulamaları geliştiriyorum. Portfolio ve projelerim.",
  keywords: [
    "Baha Yıldız",
    "Bilgisayar Mühendisi",
    "Yazılım Geliştirici",
    "Software Engineer",
    "Software Developer",
    "React Developer", 
    "TypeScript",
    "Next.js Developer",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript Developer"
  ],
  authors: [{ name: "Baha Yıldız", url: "https://portfolio-psi-ten-1zdu3723yk.vercel.app" }],
  creator: "Baha Yıldız",
  publisher: "Baha Yıldız",
  alternates: {
    canonical: 'https://portfolio-psi-ten-1zdu3723yk.vercel.app',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portfolio-psi-ten-1zdu3723yk.vercel.app",
    title: "Baha Yıldız | Yazılım Geliştirici",
    description: "Bilgisayar mühendisi ve yazılım geliştirici. React, TypeScript ve modern web teknolojileri ile çalışıyorum.",
    siteName: "Baha Yıldız Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Baha Yıldız - Yazılım Geliştirici Portfolio',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baha Yıldız | Yazılım Geliştirici",
    description: "Bilgisayar mühendisi ve yazılım geliştirici. React, TypeScript ve modern web teknolojileri.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="gHRte1o-dJ_93namBH2KCEYZbum5Q5FfkJaNIOI97VY" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}