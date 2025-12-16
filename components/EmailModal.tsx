import React, { useState } from 'react';
import { X, Mail, Check, Copy, Users, Zap, AlertCircle } from 'lucide-react';
import Button from './Button';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'email' | 'success' | 'queue'>('email');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [vipClicked, setVipClicked] = useState(false);
  const [userId] = useState(() => {
    // Generate a fake user ID (8 character alphanumeric)
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  });
  const queuePosition = "999+";
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const referralUrl = `${baseUrl}?ref=${userId}`;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setStep('success');
      setTimeout(() => {
        setStep('queue');
      }, 1500);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVipClick = () => {
    setVipClicked(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-down">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'email' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink-gold/10 border border-ink-gold/20 mb-4">
                <Mail className="w-8 h-8 text-ink-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Join the Waitlist</h3>
              <p className="text-gray-400 text-sm">Be among the first to experience InkGenius PRO</p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ink-gold/50 transition-colors"
                  required
                />
              </div>
              <Button variant="primary" type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center space-y-6 py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Success!</h3>
            <p className="text-gray-400">You're on the list</p>
          </div>
        )}

        {step === 'queue' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink-gold/10 border border-ink-gold/20 mb-4">
                <Users className="w-8 h-8 text-ink-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">You're in Queue!</h3>
              <div className="text-4xl font-serif text-ink-gold mb-2">#{queuePosition}</div>
              <p className="text-gray-400 text-sm">Your position in line</p>
            </div>

            <div className="space-y-4">
              <p className="text-center text-gray-300 text-sm">Want to move up faster?</p>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Free Accelerate */}
                <div className="bg-[#111] border border-white/10 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 text-ink-blue mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase">Free Boost</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">Invite friends to jump ahead</p>
                  <button
                    onClick={handleCopyLink}
                    className="w-full px-3 py-2 bg-ink-blue/10 border border-ink-blue/30 rounded text-xs text-ink-blue hover:bg-ink-blue/20 transition-colors flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>

                {/* VIP Accelerate */}
                <div className="bg-[#111] border border-ink-gold/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 text-ink-gold mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase">VIP Boost</span>
                  </div>
                  {!vipClicked ? (
                    <>
                      <p className="text-xs text-gray-400 mb-3">Skip the line instantly</p>
                      <button
                        onClick={handleVipClick}
                        className="w-full px-3 py-2 bg-ink-gold text-black rounded text-xs font-bold hover:bg-ink-goldHover transition-colors"
                      >
                        $9.9 Pay Now
                      </button>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-orange-400 text-xs mb-2">
                        <AlertCircle className="w-3 h-3" />
                        <span className="font-mono">SOLD OUT</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">
                        Sorry! Today's VIP slots are full. Try again tomorrow, or use the free boost option.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailModal;

