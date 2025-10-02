'use client';

import { useState, useEffect } from 'react'; // Boşluk düzeltmesi

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
    <nav className={`sticky top-0 z-50 transition-all duration-300
      ${scrolled ? 'p-2 bg-gray-800/95 shadow-lg' : 'p-4 bg-gray-800'}
      text-white`}>
      
      <div className="flex justify-between items-center px-6">
        <a href="#" className="text-xl font-bold hover:text-blue-400 transition-colors cursor-pointer">
  Baha Yıldız
</a>
        
        {/* Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a 
              href="#about" 
              className="relative hover:text-blue-400 transition-colors
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-blue-400 after:transition-all after:duration-300
                hover:after:w-full"
            >
              Hakkımda
            </a>
          </li>
          <li>
            <a 
              href="#technologies" 
              className="relative hover:text-blue-400 transition-colors duration-300
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-blue-400 after:transition-all after:duration-500 after:ease-in-out
                hover:after:w-full"
            >
              Teknolojiler
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="relative hover:text-blue-400 transition-colors
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-blue-400 after:transition-all after:duration-300
                hover:after:w-full"
            >
              Projeler
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="relative hover:text-blue-400 transition-colors
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-blue-400 after:transition-all after:duration-300
                hover:after:w-full"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 pb-4">
           <li>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Hakkımda
            </a>
          </li>
           <li>
            <a href="#technologies" onClick={closeMenu} className="block hover:text-blue-400 transition-colors">
              Teknolojiler
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Projeler
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              İletişim
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}