import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'INÍCIO', href: '#home' },
  { label: 'SOBRE', href: '#about' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'PROJETOS', href: '#projects' },
  { label: 'AVALIAÇÕES', href: '#testimonials' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80; // Compensação para o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-xl border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="group"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <h1 className="font-raleway font-light text-xl tracking-[0.2em] text-white group-hover:text-gray-300 transition-colors">
            ASAFE ARÊAS
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/557788166451"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-xs font-raleway font-semibold tracking-widest text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            ENTRAR EM CONTATO
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 items-center animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-raleway font-light tracking-[0.2em] text-white hover:text-gray-300 transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/557788166451"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 text-xs font-raleway font-semibold tracking-widest text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            ENTRAR EM CONTATO
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;