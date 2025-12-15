import React from 'react';
import { Upload, ScanLine, Eye } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-6 h-6 text-black" />,
      title: "Upload or Create",
      description: "Upload a sketch from your camera roll, or describe your dream tattoo to our AI engine."
    },
    {
      icon: <ScanLine className="w-6 h-6 text-black" />,
      title: "3D Body Mapping",
      description: "Our algorithm scans your photo to understand muscle curvature and lighting conditions."
    },
    {
      icon: <Eye className="w-6 h-6 text-black" />,
      title: "Hyper-Realistic Preview",
      description: "See exactly how it will look on your body. Export a high-res stencil for your artist."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-ink-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-ink-gold text-xs font-mono font-bold tracking-[0.2em] uppercase mb-3 block">The Workflow</span>
          <h2 className="text-4xl font-serif text-white">From Idea to Skin in 3 Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-ink-gold to-[#7a6212] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 relative">
                 <div className="absolute inset-[2px] bg-ink-black rounded-full flex items-center justify-center z-10">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center relative overflow-hidden">
                        {step.icon}
                        {/* Scanning beam inside icon */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-gold/50 to-transparent h-full w-full -translate-y-full group-hover:animate-scan-vertical"></div>
                    </div>
                 </div>
                 
                 {/* Number Badge */}
                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#222] border border-white/20 rounded-full flex items-center justify-center text-white font-mono text-xs z-20">
                    {index + 1}
                 </div>
              </div>
              
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-ink-gold transition-colors">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs text-sm font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;