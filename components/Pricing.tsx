import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import EmailModal from './EmailModal';

const Pricing: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  return (
    <section className="py-24 bg-ink-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ink-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-gold/10 border border-ink-gold/20 text-ink-gold text-[10px] font-mono font-bold tracking-widest uppercase rounded-full mb-6">
            <Sparkles className="w-3 h-3" />
            Ready to Transform Your Sketches
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Try InkGenius PRO today
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the future of tattoo design visualization. See your sketches come to life on realistic 3D skin meshes before you make permanent decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="primary" icon className="text-base px-8 py-4 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.7)]" onClick={() => setIsEmailModalOpen(true)}>
              Get Started Now
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-mono uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-ink-gold rounded-full"></div>
              Instant Access
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-ink-blue rounded-full"></div>
              Secure & Private
            </div>
          </div>
        </div>
      </div>
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </section>
  );
};

export default Pricing;