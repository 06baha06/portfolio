'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState<string>('');
  const fullText =
    'Bilgisayar mühendisiyim. Ağırlıklı olarak front-end ve back-end geliştirme ile ilgileniyorum.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black text-white overflow-hidden">
       {/* Arka planda bulanık mor-beyaz yuvarlak alan */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl translate-x-20 translate-y-10"></div>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-10"></div>
      </div>
        {/* İçerik (ön planda) */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-4 animate-fade-in">Merhaba, ben Baha 👋</h2>
        <p className="text-lg max-w-2xl mb-6 min-h-[4rem]">
          {typedText}
          <span className="animate-blink">|</span>
        </p>
      </div>
        {/* Aşağı kaydırma oku */}
      <a
        href="#about"
        className="absolute bottom-16 z-10 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <svg
          className="w-8 h-8 text-white/70 hover:text-white transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
