import React from 'react';
import { Star, Quote, Feather } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative">
      {/* Background Texture: Traditional Flash Art (Subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-ink-gold/50"></div>
              <span className="text-ink-gold font-mono text-xs tracking-widest uppercase">Community Verified</span>
              <div className="h-px w-12 bg-ink-gold/50"></div>
          </div>
          <h2 className="text-4xl font-serif text-white mb-4">No Regrets. Just Great Ink.</h2>
          <div className="flex justify-center gap-1 text-ink-gold mb-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="fill-current w-5 h-5 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
            ))}
          </div>
          <p className="text-gray-500 font-mono text-sm">Based on 12,000+ generated stencils</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* User Review */}
          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-xl relative hover:border-ink-gold/30 transition-colors group">
            <Quote className="absolute top-6 right-6 text-white/5 w-10 h-10 group-hover:text-ink-gold/20 transition-colors" />
            <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">
              "I saved myself from a huge mistake. The design looked good on paper but terrible on my forearm. InkGenius showed me that <span className="text-white font-medium border-b border-ink-gold/30">before it was too late</span>."
            </p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-10 h-10 rounded-full grayscale object-cover" />
              <div>
                <div className="text-white font-serif font-bold">Alex D.</div>
                <div className="text-xs text-gray-500 font-mono uppercase">First-time Client • New York</div>
              </div>
            </div>
          </div>

          {/* Artist Review */}
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#161625] border border-ink-blue/20 p-8 rounded-xl relative hover:border-ink-blue/40 transition-colors">
            <div className="absolute -top-3 left-8 bg-ink-blue text-white text-[10px] font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Artist Verified
            </div>
            <Quote className="absolute top-6 right-6 text-ink-blue/10 w-10 h-10" />
            <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">
              "I use this for every consultation. Clients love seeing the 'finished' look before I even start stenciling. It <span className="text-ink-blue">builds massive trust</span> and saves me sketching time."
            </p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Artist" className="w-10 h-10 rounded-full grayscale object-cover" />
              <div>
                <div className="text-white font-serif font-bold">Mike T.</div>
                <div className="text-xs text-ink-blue font-mono uppercase flex items-center gap-1">
                   <Feather className="w-3 h-3" /> BlackAnchor Studio
                </div>
              </div>
            </div>
          </div>

          {/* Studio Owner */}
          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-xl relative hover:border-ink-gold/30 transition-colors group">
            <Quote className="absolute top-6 right-6 text-white/5 w-10 h-10 group-hover:text-ink-gold/20 transition-colors" />
            <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">
              "We run four chairs. Showing realistic previews cut back-and-forth by half and bumped close rates. It’s now in every consult checklist."
            </p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=100&h=100" alt="Studio Owner" className="w-10 h-10 rounded-full grayscale object-cover" />
              <div>
                <div className="text-white font-serif font-bold">Sara L.</div>
                <div className="text-xs text-gray-500 font-mono uppercase">Studio Owner • Austin</div>
              </div>
            </div>
          </div>

          {/* Repeat Client */}
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#161625] border border-ink-blue/20 p-8 rounded-xl relative hover:border-ink-blue/40 transition-colors">
            <div className="absolute -top-3 left-8 bg-ink-blue text-white text-[10px] font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Returning Client
            </div>
            <Quote className="absolute top-6 right-6 text-ink-blue/10 w-10 h-10" />
            <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">
              "Second sleeve planned entirely in InkGenius. We tested placements in minutes. Zero surprises on session day."
            </p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100&h=100" alt="Returning Client" className="w-10 h-10 rounded-full grayscale object-cover" />
              <div>
                <div className="text-white font-serif font-bold">Diego M.</div>
                <div className="text-xs text-ink-blue font-mono uppercase">Repeat Client • Madrid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;