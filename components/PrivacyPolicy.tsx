import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
              <Shield className="w-8 h-8 text-ink-gold" />
              <h1 className="text-3xl md:text-4xl font-serif text-white">Privacy Policy</h1>
            </div>
            <p className="text-gray-400 text-sm">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-ink-gold" />
                1. Information We Collect
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  <strong className="text-white">Email Address:</strong> When you join our waitlist or subscribe to InkGenius PRO, we collect your email address to communicate with you about your account and our services.
                </p>
                <p>
                  <strong className="text-white">Uploaded Content:</strong> Any sketches, designs, or images you upload to our platform are processed temporarily to generate 3D skin mesh visualizations. We do not store your uploaded images permanently unless you explicitly save them to your account.
                </p>
                <p>
                  <strong className="text-white">Usage Data:</strong> We collect anonymized usage statistics to improve our AI algorithms and user experience, including generation counts, feature usage, and technical performance metrics.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-ink-gold" />
                2. How We Use Your Information
              </h2>
              <div className="space-y-3 ml-7">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our AI tattoo simulation services</li>
                  <li>Process your design uploads and generate 3D skin mesh visualizations</li>
                  <li>Send you important updates about your account and our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Ensure platform security and prevent fraudulent activity</li>
                  <li>Comply with legal obligations and enforce our Terms of Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-ink-gold" />
                3. Data Storage and Security
              </h2>
              <div className="space-y-3 ml-7">
                <p>
                  <strong className="text-white">Encryption:</strong> All data transmitted to and from our servers is encrypted using industry-standard SSL/TLS protocols.
                </p>
                <p>
                  <strong className="text-white">Temporary Processing:</strong> Your uploaded sketches are processed in secure, isolated environments and automatically deleted after generation unless you choose to save them.
                </p>
                <p>
                  <strong className="text-white">Account Data:</strong> Your email address and account preferences are stored securely and are never shared with third parties except as required by law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-ink-gold" />
                4. Your Rights and Choices
              </h2>
              <div className="space-y-3 ml-7">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access, update, or delete your account information at any time</li>
                  <li>Request a copy of your personal data</li>
                  <li>Opt-out of marketing communications (account-related emails will still be sent)</li>
                  <li>Delete your account and all associated data</li>
                  <li>Request that we stop processing your data (may limit service functionality)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">5. Third-Party Services</h2>
              <div className="space-y-3 ml-7">
                <p>
                  We use trusted third-party services for payment processing (Stripe), email delivery, and cloud infrastructure. These services are bound by strict confidentiality agreements and only process data necessary to provide their services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">6. Children's Privacy</h2>
              <div className="space-y-3 ml-7">
                <p>
                  InkGenius PRO is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">7. Changes to This Policy</h2>
              <div className="space-y-3 ml-7">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through a prominent notice on our platform. Your continued use of InkGenius PRO after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-white mb-4">8. Contact Us</h2>
              <div className="space-y-3 ml-7">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <p className="text-ink-gold font-mono">privacy@inkgeniuspro.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

