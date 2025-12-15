import React, { useState } from 'react';
import { Menu, X, Instagram, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-yellow shadow-md border-b-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center text-brand-yellow font-bold text-xl border-2 border-white">
              WC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-brand-brown leading-none display-font">Waffle Castle</span>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Jharsuguda Outlet</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-brown font-bold hover:text-white transition-colors duration-200 text-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://maps.app.goo.gl/LEJPMeR8G2ExH32u6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-brown text-brand-yellow px-5 py-2 rounded-full font-bold hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <MapPin size={18} /> Visit Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-yellow border-t-2 border-brand-orange/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-bold text-brand-brown hover:bg-brand-orange/20"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/waffle_castle_official/"
              target="_blank"
              rel="noreferrer"
              className="block px-3 py-3 text-brand-orange font-bold flex items-center gap-2"
            >
              <Instagram size={20} /> Follow on Insta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;