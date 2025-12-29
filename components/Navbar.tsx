
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_NAME } from '../constants';

interface NavbarProps {
  onBook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Parcours', href: '#parcours' },
    { name: 'Palmarès', href: '#concours' },
    { name: 'Services', href: '#services' },
    { name: 'Avis', href: '#temoignages' },
  ];

  const handleMobileBook = () => {
    setIsOpen(false);
    onBook();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-sand-50/95 backdrop-blur-md border-sand-200 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center relative z-[101]">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className={`font-serif text-2xl tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${scrolled || isOpen ? 'text-charcoal' : 'text-white'}`}>
              {SITE_NAME}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-sans font-bold uppercase tracking-[0.15em] hover:text-bronze-400 transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBook}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] border transition-all duration-300 hover:bg-bronze-400 hover:border-bronze-400 hover:text-white cursor-pointer
                ${scrolled ? 'border-charcoal text-charcoal' : 'border-white text-white'}`}
            >
              Contact / RDV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors z-[102] ${scrolled || isOpen ? 'text-charcoal' : 'text-white'}`}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Full Screen Overlay */}
      <div 
        className={`md:hidden fixed inset-0 w-full h-screen bg-sand-50 z-[90] transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center space-y-10 p-6 text-center w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl text-charcoal hover:text-bronze-400 transition-colors active:scale-95 duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-16 h-[1px] bg-gray-300 my-4"></div>

          <button
            onClick={handleMobileBook}
            className="px-10 py-4 bg-charcoal text-white text-sm font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            Prendre Rendez-vous
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
