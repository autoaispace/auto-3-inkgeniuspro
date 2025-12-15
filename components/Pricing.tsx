import React from 'react';
import { Check, Shield } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  const features = [
    "Unlimited Custom Sketch Uploads",
    "50 AI Design Generations",
    "High-Res Stencil Export (.PDF)",
    "Commercial Use License",
    "3D Skin-Mesh™ Technology"
  ];

  return (
    <section className="py-24 bg-ink-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ink-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-md mx-auto relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-ink-gold via-[#FBF5D4] to-ink-gold rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          <div className="relative bg-[#080808] border border-ink-gold/30 rounded-xl p-8 md:p-12 text-center shadow-2xl">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-ink-gold px-4 py-1 rounded-full">
                 <span className="text-ink-gold text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                    <Shield className="w-3 h-3" /> Lifetime Access
                 </span>
            </div>

            <h2 className="text-3xl font-serif text-white mt-4 mb-2">The "Safety Net" Pass</h2>
            <p className="text-gray-500 text-sm mb-8 font-light">Stop regretting permanent decisions.</p>
            
            <div className="flex items-baseline justify-center gap-2 mb-8 border-b border-white/5 pb-8">
              <span className="text-5xl md:text-6xl font-serif text-white tracking-tighter">$9.90</span>
              <span className="text-gray-500 font-mono text-xs uppercase">/ One-time</span>
            </div>

            <ul className="text-left space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-ink-gold/10 border border-ink-gold/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-ink-gold" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="primary" className="w-full mb-4 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">GET LIFETIME ACCESS</Button>
            
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wide">
              100% Money Back Guarantee • Secure Stripe Checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;