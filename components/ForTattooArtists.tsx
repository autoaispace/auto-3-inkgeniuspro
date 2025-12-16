import React from 'react';
import { ArrowLeft, Palette, Zap, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Button from './Button';
import EmailModal from './EmailModal';

interface ForTattooArtistsProps {
  onBack?: () => void;
}

const ForTattooArtists: React.FC<ForTattooArtistsProps> = ({ onBack }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);

  return (
    <>
      <section className="min-h-screen py-24 bg-ink-black">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          )}

          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-ink-gold" />
                <h1 className="text-3xl md:text-4xl font-serif text-white">For Tattoo Artists</h1>
              </div>
              <p className="text-gray-400 text-sm">Professional tools for modern tattoo studios</p>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-ink-gold/10 to-ink-purple/10 border border-ink-gold/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-serif text-white mb-4">Transform Your Consultation Process</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                InkGenius PRO helps professional tattoo artists build trust, close more clients, and save hours of sketching time with AI-powered 3D visualization.
              </p>
              <Button variant="primary" onClick={() => setIsEmailModalOpen(true)}>
                Get Started for Artists
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-ink-gold" />
                  <h3 className="text-xl font-serif text-white">Save Consultation Time</h3>
                </div>
                <p className="text-gray-400">
                  Show clients exactly how their design will look on their body part before you even start sketching. Reduce back-and-forth revisions by 70%.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-ink-blue" />
                  <h3 className="text-xl font-serif text-white">Increase Conversion Rates</h3>
                </div>
                <p className="text-gray-400">
                  Clients who see realistic 3D previews are 3x more likely to book appointments. Build confidence and close more deals.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-ink-purple" />
                  <h3 className="text-xl font-serif text-white">Professional Presentation</h3>
                </div>
                <p className="text-gray-400">
                  Stand out from competitors with cutting-edge visualization technology. Show clients you're using the latest tools in the industry.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-ink-gold" />
                  <h3 className="text-xl font-serif text-white">Production-Ready Stencils</h3>
                </div>
                <p className="text-gray-400">
                  Export high-resolution PDF stencils (300 DPI) directly to your thermal transfer machine. No manual tracing required.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-[#111] border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-serif text-white mb-6">What You Get</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Unlimited custom sketch uploads",
                  "50+ AI design generations per month",
                  "High-res stencil export (.PDF)",
                  "Commercial use license included",
                  "3D Skin-Mesh™ technology",
                  "All skin tone adaptations",
                  "Multiple body part previews",
                  "Client presentation mode"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ink-gold flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-ink-blue/10 to-ink-purple/10 border border-ink-blue/20 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ink-blue/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-ink-blue" />
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "I use InkGenius PRO for every consultation. Clients love seeing the 'finished' look before I even start stenciling. It builds massive trust and saves me sketching time."
                  </p>
                  <div>
                    <p className="text-white font-serif font-bold">Mike T.</p>
                    <p className="text-gray-500 text-sm font-mono">BlackAnchor Studio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-gray-400 mb-6">
                Join 500+ professional studios already using InkGenius PRO
              </p>
              <Button variant="primary" onClick={() => setIsEmailModalOpen(true)}>
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </>
  );
};

export default ForTattooArtists;

