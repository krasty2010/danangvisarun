import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center text-2xl font-bold">
              <span className="gradient-text font-montserrat">Best Border Bus</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#process" className="text-text-primary hover:text-accent-DEFAULT">
              Процесс
            </a>
            <a href="#services" className="text-text-primary hover:text-accent-DEFAULT">
              Услуги
            </a>
            <a href="#reviews" className="text-text-primary hover:text-accent-DEFAULT">
              Отзывы
            </a>
            <a href="#faq" className="text-text-primary hover:text-accent-DEFAULT">
              FAQ
            </a>
            <a 
              href="https://t.me/learnx1000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex items-center space-x-2"
            >
              <span>Забронировать</span>
              <Send size={16} />
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-1">
              <a 
                href="/" 
                className="flex items-center space-x-1 rounded-md bg-white px-3 py-1 text-sm font-medium text-text-primary shadow-sm"
              >
                <Globe size={14} />
                <span>RU</span>
              </a>
              <a 
                href="/en" 
                className="flex items-center space-x-1 rounded-md px-3 py-1 text-sm font-medium text-text-secondary hover:bg-white hover:text-text-primary"
              >
                <Globe size={14} />
                <span>EN</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4 py-8 md:hidden">
          <button
            className="absolute right-4 top-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6 py-12 text-lg">
            <a 
              href="#process" 
              className="text-text-primary hover:text-accent-DEFAULT"
              onClick={() => setIsMenuOpen(false)}
            >
              Процесс
            </a>
            <a 
              href="#services" 
              className="text-text-primary hover:text-accent-DEFAULT"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#reviews" 
              className="text-text-primary hover:text-accent-DEFAULT"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#faq" 
              className="text-text-primary hover:text-accent-DEFAULT"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://t.me/learnx1000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary mt-4 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Забронировать</span>
              <Send size={16} />
            </a>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-1">
              <a 
                href="/" 
                className="flex items-center space-x-1 rounded-md bg-white px-3 py-1 text-sm font-medium text-text-primary shadow-sm"
              >
                <Globe size={14} />
                <span>RU</span>
              </a>
              <a 
                href="/en" 
                className="flex items-center space-x-1 rounded-md px-3 py-1 text-sm font-medium text-text-secondary hover:bg-white hover:text-text-primary"
              >
                <Globe size={14} />
                <span>EN</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;