import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, CreditCard, Shield, Ban } from 'lucide-react';

interface TermsOfServiceProps {
  onBack?: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
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
              <FileText className="w-8 h-8 text-ink-gold" />
              <h1 className="text-3xl md:text-4xl font-serif text-white">Terms of Service</h1>
            </div>
            <p className="text-gray-400 text-sm">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-ink-gold" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  By accessing or using InkGenius PRO ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p>
                  These Terms apply to all users of the Service, including without limitation users who are browsers, customers, artists, and contributors of content.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-ink-gold" />
                2. Description of Service
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  InkGenius PRO is an AI-powered tattoo design visualization platform that allows users to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload custom sketches and designs</li>
                  <li>Generate 3D skin mesh visualizations of tattoo designs</li>
                  <li>Export high-resolution stencil files (.PDF format)</li>
                  <li>Preview designs on various body parts and skin tones</li>
                </ul>
                <p>
                  The Service uses artificial intelligence and machine learning algorithms to process and visualize your designs. Results may vary based on input quality and complexity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-ink-gold" />
                3. Payment and Refunds
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  <strong className="text-white">Pricing:</strong> Access to InkGenius PRO is provided through a one-time payment model. Pricing is subject to change, but any changes will not affect existing users who have already purchased access.
                </p>
                <p>
                  <strong className="text-white">Refunds:</strong> We offer a 30-day money-back guarantee. If you are not satisfied with the Service, contact us within 30 days of purchase for a full refund. Refunds are processed within 5-10 business days.
                </p>
                <p>
                  <strong className="text-white">Payment Processing:</strong> All payments are processed securely through Stripe. We do not store your payment card information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5 text-ink-gold" />
                4. User Conduct and Prohibited Uses
              </h2>
              <div className="space-y-3 ml-7">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload content that is illegal, harmful, threatening, abusive, or violates any laws</li>
                  <li>Upload copyrighted material without proper authorization</li>
                  <li>Generate designs that promote hate speech, violence, or discrimination</li>
                  <li>Attempt to reverse engineer, decompile, or extract our AI models or algorithms</li>
                  <li>Use automated systems (bots, scrapers) to access the Service</li>
                  <li>Share your account credentials with others</li>
                  <li>Resell or redistribute generated stencils or designs without proper licensing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">5. Intellectual Property Rights</h2>
              <div className="space-y-3 ml-7">
                <p>
                  <strong className="text-white">Your Content:</strong> You retain all ownership rights to the sketches and designs you upload. By uploading content, you grant InkGenius PRO a limited, non-exclusive license to process your content solely for the purpose of providing the Service.
                </p>
                <p>
                  <strong className="text-white">Generated Outputs:</strong> You own the stencils and visualizations generated from your uploaded content. Commercial use is permitted with a valid license.
                </p>
                <p>
                  <strong className="text-white">Service IP:</strong> The InkGenius PRO platform, including its AI technology, user interface, and proprietary algorithms, remains the exclusive property of InkGenius. You may not copy, modify, or create derivative works based on the Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">6. Commercial Use License</h2>
              <div className="space-y-3 ml-7">
                <p>
                  With a valid InkGenius PRO license, you may:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use generated stencils for commercial tattoo work</li>
                  <li>Include generated designs in your portfolio or marketing materials</li>
                  <li>Resell tattoo services that incorporate our generated stencils</li>
                </ul>
                <p>
                  You may not resell or redistribute the stencil files themselves as standalone products without explicit written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-ink-gold" />
                7. Disclaimers and Limitations of Liability
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  <strong className="text-white">AI Accuracy:</strong> While we strive for accuracy, AI-generated visualizations are approximations and may not perfectly represent the final tattoo result. Always consult with a professional tattoo artist before making permanent decisions.
                </p>
                <p>
                  <strong className="text-white">No Medical Advice:</strong> InkGenius PRO is a design visualization tool only. We do not provide medical, health, or safety advice. Consult healthcare professionals regarding tattoo safety and aftercare.
                </p>
                <p>
                  <strong className="text-white">Service Availability:</strong> We do not guarantee uninterrupted or error-free service. The Service may be temporarily unavailable due to maintenance, updates, or unforeseen circumstances.
                </p>
                <p>
                  <strong className="text-white">Limitation of Liability:</strong> To the maximum extent permitted by law, InkGenius PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">8. Account Termination</h2>
              <div className="space-y-3 ml-7">
                <p>
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activity. Upon termination, your access to the Service will be immediately revoked, but you will retain ownership of any generated content you have downloaded.
                </p>
                <p>
                  You may delete your account at any time through your account settings. Account deletion is permanent and cannot be undone.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">9. Changes to Terms</h2>
              <div className="space-y-3 ml-7">
                <p>
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via email or platform notification. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">10. Contact Information</h2>
              <div className="space-y-3 ml-7">
                <p>
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-ink-gold font-mono">legal@inkgeniuspro.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;

