import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, AlertTriangle, Check, Layers } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseDown = () => (isDragging.current = true);
  const onMouseUp = () => (isDragging.current = false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => (isDragging.current = false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-24 bg-ink-black border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ink-gray via-ink-black to-ink-black opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-ink-gold font-mono text-xs tracking-[0.2em] uppercase mb-2 block">The Reality Check</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Generic "Sticker Apps" Fail</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Flat overlays ruin the illusion. Our <span className="text-white">Mesh-Wrap™</span> technology respects every muscle fiber.
          </p>
        </div>

        {/* Comparison UI */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Slider Container */}
          <div className="lg:col-span-8 order-2 lg:order-1 relative rounded border border-white/10 group cursor-ew-resize select-none h-[400px] md:h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]"
               ref={containerRef}
               onMouseDown={onMouseDown}
               onMouseUp={onMouseUp}
               onMouseMove={onMouseMove}
               onTouchMove={onTouchMove}
          >
            {/* Image 1: Bad (Full Width) */}
            <div className="absolute inset-0 w-full h-full bg-[#111]">
               <img 
                 src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop" 
                 alt="Generic Sticker App" 
                 className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-50" 
               />
               {/* Bad Overlay - Flat and fake */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-80">
                  <img src="/images/flat-icon.svg" className="w-full h-full drop-shadow-2xl" style={{ filter: 'invert(1)' }} alt="Flat Design" />
               </div>
               <div className="absolute top-6 left-6 flex items-center gap-2">
                 <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-sm">
                   2D Overlay (Generic)
                 </div>
               </div>
            </div>

            {/* Image 2: Good (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden bg-black"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop" 
                alt="InkGenius Pro Result" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              {/* Good Overlay - Wrapped and Blended */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 mix-blend-overlay opacity-90">
                  <img src="/images/flat-icon.svg" className="w-full h-full" style={{ filter: 'invert(1) blur(0.5px)', transform: 'perspective(500px) rotateY(15deg) rotateX(5deg) scale(0.95)' }} alt="Wrapped Design" />
               </div>
               {/* Skin Texture Noise */}
               <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>

              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="bg-ink-gold/10 border border-ink-gold/50 text-ink-gold px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  3D Mesh Wrap™
                </div>
              </div>
            </div>

            {/* Slider Handle (Custom Tool Look) */}
            <div 
              className="absolute top-0 bottom-0 w-[1px] bg-white/50 cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-ink-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] transform transition-transform group-active:scale-95 group-active:border-white">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                   <ChevronsLeftRight className="text-ink-gold w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-10">
            
            {/* Generic Features */}
            <div className={`transition-all duration-500 transform ${sliderPosition < 45 ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4 blur-[1px]'}`}>
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" /> The Amateur Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400 group">
                  <span className="text-red-500 mr-3 mt-1 text-xs">01</span> 
                  <span className="text-sm">Floating "Sticker" Effect. No depth perception.</span>
                </li>
                <li className="flex items-start text-gray-400 group">
                  <span className="text-red-500 mr-3 mt-1 text-xs">02</span> 
                  <span className="text-sm">Ignores skin texture and pores.</span>
                </li>
              </ul>
            </div>

            {/* InkGenius Features */}
            <div className={`transition-all duration-500 transform ${sliderPosition > 55 ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4 blur-[1px]'}`}>
              <h3 className="text-lg font-bold text-ink-gold mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <Layers className="w-4 h-4" /> The Pro Standard
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-white group">
                  <span className="text-ink-gold mr-3 mt-1 text-xs font-mono">01</span> 
                  <span className="text-sm">Wraps around curvature (Arm/Leg cylinders).</span>
                </li>
                <li className="flex items-start text-white group">
                  <span className="text-ink-gold mr-3 mt-1 text-xs font-mono">02</span> 
                  <span className="text-sm">Simulates <span className="text-ink-gold">ink bleed</span> (0.2mm) & healed look.</span>
                </li>
                <li className="flex items-start text-white group">
                  <span className="text-ink-gold mr-3 mt-1 text-xs font-mono">03</span> 
                  <span className="text-sm">Adjusts to Fitzpatrick Skin Scales 1-6.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;