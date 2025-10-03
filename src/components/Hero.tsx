'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl translate-x-20 translate-y-10 animate-float-reverse"></div>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-10 animate-float-slow"></div>
      </div>

      {/* İçerik (ön planda) */}
      <div className="relative z-10 max-w-5xl px-6">
        {/* Küçük Tanıtım */}
        <p className="text-blue-400 text-sm md:text-base font-semibold mb-4 tracking-widest uppercase animate-fade-in">
          Merhaba, ben
        </p>

        {/* Büyük İsim - Gradient */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          BAHA YILDIZ
        </h1>

        {/* Açıklama (Typing) */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-400 min-h-[3rem]">
          {typedText}
          <span className="animate-blink">|</span>
        </p>

        {/* Sosyal Medya İkonları */}
        <div className="flex gap-6 justify-center items-center mb-4">
          <a
            href="https://github.com/06baha06"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
            <div className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 p-4 rounded-full transition-all hover:scale-110">
              <Github className="w-7 h-7" />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/baha-yıldız-1451222b3"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
            <div className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 p-4 rounded-full transition-all hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </div>
          </a>

          <a
            href="#contact"
            className="group relative"
            aria-label="Email"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 transition-all"></div>
            <div className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 p-4 rounded-full transition-all hover:scale-110">
              <Mail className="w-7 h-7" />
            </div>
          </a>
        </div>
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