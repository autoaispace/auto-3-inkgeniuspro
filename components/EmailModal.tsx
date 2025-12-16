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
  const [emailError, setEmailError] = useState('');
  const [copied, setCopied] = useState(false);
  const [vipClicked, setVipClicked] = useState(false);
  const [userId] = useState(() => {
    // Generate a fake user ID (8 character alphanumeric)
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  });
  const queuePosition = "999+";
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const referralUrl = `${baseUrl}?ref=${userId}`;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setStep('success');
    setTimeout(() => {
      setStep('queue');
    }, 1500);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-w-3xl w-full p-8 md:p-12 my-8 animate-fade-in-down">
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
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-[#111] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    emailError ? 'border-red-500/50' : 'border-white/10 focus:border-ink-gold/50'
                  }`}
                />
                {emailError && (
                  <p className="text-red-400 text-xs mt-2">{emailError}</p>
                )}
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
          <div className="space-y-8">
            {/* Queue Status Header */}
            <div className="text-center border-b border-white/10 pb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ink-gold/10 border border-ink-gold/20 mb-4">
                <Users className="w-10 h-10 text-ink-gold" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-3">You're in Queue!</h3>
              <div className="text-5xl font-serif text-ink-gold mb-2">#{queuePosition}</div>
              <p className="text-gray-400">Your position in line</p>
            </div>

            {/* Accelerate Options Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-xl font-serif text-white mb-2">Move Up Faster</h4>
                <p className="text-gray-400 text-sm">Choose your preferred acceleration method</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Free Accelerate - More Prominent */}
                <div className="bg-gradient-to-br from-[#111] to-[#1a1a2e] border-2 border-ink-blue/30 rounded-xl p-6 space-y-4 hover:border-ink-blue/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-ink-blue/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-ink-blue" />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif text-white">Free Boost</h5>
                      <p className="text-xs text-gray-400 font-mono uppercase">Invite Friends</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Share your referral link with friends. Each friend who joins moves you up in the queue!
                  </p>
                  <button
                    onClick={handleCopyLink}
                    className="w-full px-4 py-3 bg-ink-blue/20 border-2 border-ink-blue/40 rounded-lg text-sm font-semibold text-ink-blue hover:bg-ink-blue/30 hover:border-ink-blue/60 transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Link Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Referral Link
                      </>
                    )}
                  </button>
                </div>

                {/* VIP Accelerate - More Prominent */}
                <div className="bg-gradient-to-br from-[#111] to-[#2a1a0e] border-2 border-ink-gold/40 rounded-xl p-6 space-y-4 hover:border-ink-gold/60 transition-all relative">
                  {!vipClicked && (
                    <div className="absolute -top-3 -right-3 bg-ink-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                      FASTEST
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-ink-gold/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-ink-gold" />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif text-white">VIP Boost</h5>
                      <p className="text-xs text-gray-400 font-mono uppercase">Skip the Line</p>
                    </div>
                  </div>
                  {!vipClicked ? (
                    <>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Jump to the front of the queue instantly. Get immediate access to InkGenius PRO.
                      </p>
                      <button
                        onClick={handleVipClick}
                        className="w-full px-4 py-3 bg-ink-gold text-black rounded-lg text-sm font-bold hover:bg-ink-goldHover transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      >
                        $9.9 Pay Now
                      </button>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-orange-400 mb-3">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-mono font-bold text-sm">SOLD OUT</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Sorry! Today's VIP slots are full. Try again tomorrow, or use the free boost option on the left.
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

