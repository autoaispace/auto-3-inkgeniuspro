import React from 'react';
import { ShieldCheck, ScanFace } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-ink-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      {/* Decorative Ink Splatter (CSS shapes) */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl animate-fade-in-up z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono tracking-widest text-ink-gold uppercase">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              v2.0 Neural Skin Mesh™ Active
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-white">
              Stop Guessing.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-gold via-[#FBF5D4] to-ink-gold text-glow">
                Wear It Before You Ink It.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              The first AI simulator that wraps <strong className="text-white">Your Sketches</strong> perfectly around muscle contours.
              <br />
              <span className="text-sm font-mono text-gray-500 mt-2 block border-l-2 border-ink-gold/30 pl-3">
                &gt; Compatible with Procreate exports & physical drawings.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="primary" icon>UPLOAD SKETCH</Button>
              <Button variant="secondary">GENERATE DESIGN</Button>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <ShieldCheck className="text-ink-blue w-6 h-6 flex-shrink-0" />
              <p className="text-xs md:text-sm text-gray-400 font-mono">
                TRUSTED BY <span className="text-white font-bold">500+ STUDIOS</span> GLOBALLY
              </p>
            </div>
          </div>

          {/* Visual Strategy - Technical Split */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             {/* Tech Grid Background behind images */}
             <div className="absolute -inset-4 border border-white/5 rounded-xl z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

             <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl z-10">
                <div className="grid grid-cols-2 h-[500px]">
                  {/* Left: Raw Sketch */}
                  <div className="relative h-full overflow-hidden bg-[#f0f0f0]">
                    <img 
                      src="https://images.unsplash.com/photo-1578301978693-85ea400056e4?q=80&w=800&auto=format&fit=crop" 
                      alt="Raw Sketch on Paper" 
                      className="absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale"
                    />
                    <div className="absolute inset-0 bg-ink-black/10 mix-blend-multiply"></div>
                    
                    {/* Raw Input Label */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/80 backdrop-blur border border-white/10 px-3 py-1 text-[10px] font-mono text-white uppercase tracking-widest">
                        INPUT: RAW_SCAN.JPG
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Realistic Tattoo with Tech Overlay */}
                  <div className="relative h-full overflow-hidden bg-black">
                    <img 
                      src="https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?q=80&w=800&auto=format&fit=crop" 
                      alt="Tattoo on Skin" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    
                    {/* 3D Mesh Overlay Effect */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20 mix-blend-overlay"></div>
                    
                    {/* Scanner Line */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-ink-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-scan-vertical opacity-50"></div>

                    {/* Pro Label */}
                    <div className="absolute bottom-4 right-4 text-right">
                       <div className="bg-ink-gold text-black px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest inline-block mb-1">
                        RENDER_COMPLETE
                      </div>
                      <div className="text-[9px] text-ink-gold font-mono opacity-80">
                        POLY_COUNT: 1.2M <br/> LIGHTING: STUDIO_SOFT
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30 z-20 transform -translate-x-1/2 flex flex-col items-center justify-center gap-1">
                   <div className="w-6 h-6 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                      <ScanFace className="w-3 h-3 text-white" />
                   </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-ink-gold/20 to-transparent rounded-full blur-xl -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;