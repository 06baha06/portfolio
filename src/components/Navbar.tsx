'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'py-3 bg-black/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' 
        : 'py-5 bg-black/60 backdrop-blur-sm border-b border-white/5'
      }
      text-white`}>
      
      {/* Arka planda hafif blur efekt */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -top-32 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -top-32 right-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/İsim */}
        <a 
          href="#" 
          className="relative text-2xl font-bold hover:text-blue-400 transition-colors duration-300 cursor-pointer group"
        >
          <span className="relative z-10">Baha Yıldız</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
        
        {/* Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden relative text-2xl focus:outline-none hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2">
          {[
            { href: '#about', label: 'Hakkımda' },
            { href: '#technologies', label: 'Teknolojiler' },
            { href: '#projects', label: 'Projeler' },
            { href: '#contact', label: 'İletişim' }
          ].map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="relative px-4 py-2 rounded-lg hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover background */}
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Bottom border animasyonu */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            </li>
          ))}
          
          {/* CV İndirme Butonu */}
          <li>
            <a 
              href="/Baha_Yildiz_CV.pdf" 
              download="Baha_Yildiz_CV.pdf"
              className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group flex items-center gap-2 ml-2"
            >
              <span className="relative z-10">CV İndir</span>
              {/* Download ikonu */}
              <svg 
                className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {/* Glow efekti */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6 pb-6 pt-4 border-t border-white/5 mt-4">
          {[
            { href: '#about', label: 'Hakkımda' },
            { href: '#technologies', label: 'Teknolojiler' },
            { href: '#projects', label: 'Projeler' },
            { href: '#contact', label: 'İletişim' }
          ].map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Mobil CV İndirme Butonu */}
          <li>
            <a 
              href="/Baha_Yildiz_CV.pdf" 
              download="Baha_Yildiz_CV.pdf"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center font-semibold"
            >
              📄 CV İndir
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}