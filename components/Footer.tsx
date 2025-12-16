import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'privacy' | 'terms' | 'artists') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-serif text-white">
            InkGenius <span className="text-ink-gold font-bold">PRO</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button 
            onClick={() => onNavigate?.('privacy')}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => onNavigate?.('terms')}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Terms of Service
          </button>
          <button 
            onClick={() => onNavigate?.('artists')}
            className="text-sm text-gray-500 hover:text-ink-gold transition-colors"
          >
            For Tattoo Artists
          </button>
        </div>

        <div className="text-sm text-gray-600">
          © 2025 InkGenius. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;