import React from 'react';
import { ArrowDownToLine, Wand2, FileDigit, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-ink-gray/20 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 space-y-0 relative z-10">
        
        {/* Feature A: Custom Uploads */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-gold/10 border border-ink-gold/20 text-ink-gold text-[10px] font-mono font-bold tracking-widest uppercase mb-2">
              <Smartphone className="w-3 h-3" /> Mobile Optimized
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Your Sketch.<br/>Any Body Part.</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Don't just imagine it. Upload any image from your camera roll. Our AI <span className="text-white border-b border-ink-gold/50">auto-removes the background</span> and preps it for the mesh wrapper.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500 font-mono pt-4">
               <li className="flex items-center gap-2"><span>&gt;</span> JPG/PNG/HEIC</li>
               <li className="flex items-center gap-2"><span>&gt;</span> Procreate Export</li>
               <li className="flex items-center gap-2"><span>&gt;</span> iPad Sketches</li>
               <li className="flex items-center gap-2"><span>&gt;</span> Pinterest Saves</li>
            </ul>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-sm bg-black">
              {/* Phone Mockup Content */}
              <div className="relative aspect-[9/18]">
                  <img 
                    src="/images/phone-upload.png" 
                    alt="Uploading custom design" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Scanning UI Overlay */}
                  <div className="absolute inset-0 border-2 border-ink-gold/30 m-6 rounded-xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-ink-gold/80 shadow-[0_0_15px_rgba(212,175,55,1)] animate-scan-vertical"></div>
                      <div className="absolute top-2 right-2 text-[8px] font-mono text-ink-gold">ANALYZING_CONTOURS...</div>
                      {/* Grid overlay inside phone */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
                  </div>
              </div>
              
              {/* Phone Bezel Reflection */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
            </div>
          </div>
        </div>

        {/* Feature B: Artist Export */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-purple/10 border border-ink-purple/20 text-ink-purple text-[10px] font-mono font-bold tracking-widest uppercase mb-2">
              <FileDigit className="w-3 h-3" /> Production Ready
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Save Your Artist Hours.</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We don't just give you a pretty picture. We generate a <strong className="text-white">High-Res Thermal Stencil (Line Art)</strong> ready for the transfer machine.
            </p>
            <div className="p-4 bg-white/5 rounded border border-white/10 mt-4">
                <p className="text-sm text-gray-400 font-mono mb-2 flex justify-between">
                    <span>STENCIL_QUALITY</span>
                    <span className="text-green-400">300 DPI</span>
                </p>
                <div className="h-1 bg-white/10 rounded overflow-hidden">
                    <div className="h-full w-full bg-ink-purple origin-left animate-[fade-in-down_1s_ease-out]"></div>
                </div>
            </div>
          </div>
          
          <div className="flex-1 relative group perspective-1000">
             {/* Stencil Visual Stack */}
             <div className="relative w-3/4 mx-auto aspect-[3/4] transition-transform duration-700 transform rotate-y-12 rotate-x-12 group-hover:rotate-0">
                
                {/* Back Page (Carbon) */}
                <div className="absolute top-2 -right-2 w-full h-full bg-[#3a3a5e] rounded shadow-lg border border-white/5"></div>
                
                {/* Main Thermal Paper */}
                <div className="absolute inset-0 stencil-paper rounded shadow-2xl overflow-hidden flex flex-col items-center p-0">
                     {/* Perforation Top */}
                     <div className="absolute top-0 left-0 w-full h-4 bg-white/50 border-b border-dashed border-gray-400"></div>

                    <div className="w-full h-full border-2 border-indigo-900/20 relative overflow-hidden rounded-lg">
                         {/* SVG Line Art */}
                          <img
                            src="/images/Tech_Mesh.png"
                            alt="Stencil Line Art"
                            className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
                          />
                         
                         {/* Watermark */}
                         <div className="absolute bottom-2 right-2 text-[8px] font-mono text-indigo-900/40 rotate-180">INKGENIUS_PRO</div>
                    </div>
                </div>

                {/* Print Animation Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-scan-vertical opacity-0 group-hover:opacity-100"></div>
             </div>

             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-ink-purple text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-indigo-900/50 flex items-center gap-2 text-sm whitespace-nowrap hover:bg-indigo-500 transition-colors cursor-pointer">
                <ArrowDownToLine className="w-4 h-4" /> Download .PDF
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;