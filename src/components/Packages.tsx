import { useEffect, useRef } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    highlight: false,
    badge: null,
    features: [
      '4 Reels per month',
      'Professional Editing',
      'Trending Style Reels',
      '1 Revision',
      'Fast Delivery',
    ],
    cta: 'Get Started',
    ctaHref: '#contact',
  },
  {
    name: 'Growth',
    price: '₹4,999',
    period: '/month',
    highlight: true,
    badge: 'MOST POPULAR',
    features: [
      '8 Reels per month',
      'Professional Editing',
      'Content Strategy',
      'Priority Delivery',
      '2 Revisions',
    ],
    cta: 'Start Growing',
    ctaHref: '#contact',
  },
  {
    name: 'Pro',
    price: '₹7,999',
    period: '/month',
    highlight: false,
    badge: null,
    features: [
      '12 Reels per month',
      'Professional Editing',
      'Social Media Management',
      'Monthly Analytics',
      'Priority Support',
      '3 Revisions',
    ],
    cta: 'Scale My Brand',
    ctaHref: '#contact',
  },
];

export default function Packages() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(25,118,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Pricing
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">Choose Your Growth Plan</h2>
          <p className="text-silver-dim mt-4 text-lg max-w-2xl mx-auto">
            Transparent pricing. Premium results. Pick the plan that matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 scroll-reveal transition-all duration-300 ${
                plan.highlight
                  ? 'border-electric-blue/50 scale-105'
                  : 'glass-card hover:border-electric-blue/30'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                ...(plan.highlight
                  ? {
                      background: 'linear-gradient(135deg, rgba(25,118,255,0.12) 0%, rgba(25,118,255,0.04) 100%)',
                      border: '1px solid rgba(25,118,255,0.5)',
                      boxShadow: '0 0 60px rgba(25,118,255,0.25), 0 0 120px rgba(25,118,255,0.1)',
                    }
                  : {}),
              }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-electric-blue text-white shadow-lg"
                    style={{ boxShadow: '0 0 20px rgba(25,118,255,0.5)' }}>
                    <Star size={10} fill="white" />
                    {plan.badge}
                    <Star size={10} fill="white" />
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-silver'}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mt-4">
                  <span
                    className="text-5xl font-black"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: plan.highlight ? 'linear-gradient(135deg, #fff, #1976FF)' : 'linear-gradient(135deg, #c0c8d8, #8892a4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-silver-dim text-sm mb-2">{plan.period}</span>
                </div>
              </div>

              <div className="h-px mb-6" style={{ background: plan.highlight ? 'rgba(25,118,255,0.3)' : 'rgba(255,255,255,0.07)' }} />

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.highlight ? 'bg-electric-blue' : 'bg-electric-blue/20 border border-electric-blue/40'
                    }`}>
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-sm text-silver-dim">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo(plan.ctaHref)}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
