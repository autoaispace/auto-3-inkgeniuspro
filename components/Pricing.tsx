import React from 'react';
import { Check, Shield } from 'lucide-react';
import Button from './Button';

type Plan = {
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  highlight?: boolean;
  cta: string;
  note: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Free Trial',
    badge: 'Starter',
    price: '$0',
    cadence: '/ forever',
    cta: 'START FOR FREE',
    note: 'No card required • 7 days • Core features',
    features: [
      '3 Custom Sketch Uploads',
      '5 AI Design Generations',
      'Low-Res Stencil Preview',
      'Personal Use Only'
    ]
  },
  {
    name: 'Pro Monthly',
    badge: 'Most Popular',
    price: '$19',
    cadence: '/ month',
    highlight: true,
    cta: 'GO MONTHLY',
    note: 'Cancel anytime • Stripe checkout',
    features: [
      'Unlimited Uploads',
      '50 AI Generations / mo',
      'High-Res Stencil Export (.PDF)',
      'Commercial Use License',
      '3D Skin-Mesh™ Technology'
    ]
  },
  {
    name: 'Pro Yearly',
    badge: 'Save 35%',
    price: '$99',
    cadence: '/ year',
    cta: 'GO YEARLY',
    note: 'Best value • Priority support',
    features: [
      'Unlimited Uploads',
      '700 AI Generations / yr',
      'High-Res Stencil Export (.PDF)',
      'Commercial Use License',
      '3D Skin-Mesh™ Technology',
      'Team seat (1 included)'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-ink-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ink-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-gold/10 border border-ink-gold/20 text-ink-gold text-[10px] font-mono font-bold tracking-widest uppercase rounded-full">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Pick your pass</h2>
          <p className="text-gray-500 mt-3">Try free, scale monthly, or lock in yearly savings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative group rounded-xl border ${
                plan.highlight ? 'border-ink-gold/50 bg-[#0c0c0c]' : 'border-white/10 bg-[#080808]'
              } p-6 md:p-8 shadow-2xl overflow-hidden`}
            >
              {/* Glow for highlight */}
              {plan.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-ink-gold via-[#FBF5D4] to-ink-gold opacity-20 blur-2xl pointer-events-none" />
              )}

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-xs font-mono uppercase tracking-wide text-ink-gold/80 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> {plan.name}
                    </div>
                    <div className="text-gray-500 text-sm">{plan.note}</div>
                  </div>
                  {plan.badge && (
                    <div className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${
                      plan.highlight ? 'border-ink-gold text-ink-gold bg-ink-gold/10' : 'border-white/10 text-gray-300 bg-white/5'
                    }`}>
                      {plan.badge}
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-serif text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 font-mono text-xs uppercase">{plan.cadence}</span>
                </div>

                <Button
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  className={`w-full ${plan.highlight ? 'group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]' : ''}`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 text-sm text-gray-300 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-ink-gold/10 border border-ink-gold/30 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-ink-gold" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;