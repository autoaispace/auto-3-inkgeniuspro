import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ink-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif text-white tracking-tight">
            InkGenius <span className="text-ink-gold font-bold">PRO</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-ink-gold transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-ink-gold transition-colors">Features</a>
          <a href="#reviews" className="text-sm font-medium text-gray-300 hover:text-ink-gold transition-colors">Reviews</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-medium text-white hover:text-ink-gold transition-colors">Login</button>
          <Button variant="primary" className="py-2 px-5 text-sm">Start Previewing</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ink-black border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
          <a href="#how-it-works" className="text-lg text-gray-200 hover:text-ink-gold" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#features" className="text-lg text-gray-200 hover:text-ink-gold" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#reviews" className="text-lg text-gray-200 hover:text-ink-gold" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <hr className="border-white/10 my-2" />
          <button className="text-left text-lg text-white hover:text-ink-gold">Login</button>
          <Button variant="primary" className="w-full">Start Previewing</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;