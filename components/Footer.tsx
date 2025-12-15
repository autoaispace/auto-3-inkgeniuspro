import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-serif text-white">
            InkGenius <span className="text-ink-gold font-bold">PRO</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-sm text-gray-500 hover:text-ink-gold transition-colors">For Tattoo Artists</a>
        </div>

        <div className="text-sm text-gray-600">
          © 2025 InkGenius. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;