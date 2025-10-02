import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baha Yıldız | Computer Engineer",
  description: "Bilgisayar mühendisi ve frontend developer. React, TypeScript, C# ve .NET ile modern web uygulamaları geliştiriyorum. Portfolio ve projelerim.",
  keywords: ["Baha Yıldız", "Frontend Developer", "React Developer", "TypeScript", "Web Developer", "Software Engineer", "Bilgisayar Mühendisi"],
  authors: [{ name: "Baha Yıldız" }],
  creator: "Baha Yıldız",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://bahayildiz.com",
    title: "Baha Yıldız | Frontend Developer",
    description: "Bilgisayar mühendisi ve frontend developer. React, TypeScript ve modern web teknolojileri.",
    siteName: "Baha Yıldız Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baha Yıldız | Frontend Developer",
    description: "Bilgisayar mühendisi ve frontend developer. React, TypeScript ve modern web teknolojileri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
