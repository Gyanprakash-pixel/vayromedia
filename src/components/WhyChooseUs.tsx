import { useEffect, useRef } from 'react';
import { Zap, Gem, Target, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const reasons = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnarounds without compromising quality.' },
  { icon: Gem, title: 'Premium Quality', desc: 'Cinematic-grade content that stands out in every feed.' },
  { icon: Target, title: 'Results Focused', desc: 'Every piece of content is built to drive measurable outcomes.' },
  { icon: TrendingUp, title: 'Growth Driven', desc: 'Strategic content that compounds and builds long-term reach.' },
  { icon: Users, title: 'Dedicated Support', desc: 'A team committed to your brand\'s success 24/7.' },
  { icon: ArrowUpRight, title: 'Conversion Focused', desc: 'We craft content engineered to convert viewers into customers.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(25,118,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Our Edge
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">Why Choose Vayro Media</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="why-card glass-card rounded-2xl p-7 scroll-reveal flex gap-5"
                style={{ transitionDelay: `${i * 80}ms`, borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-electric-blue/10 border border-electric-blue/20">
                  <Icon size={22} className="text-electric-blue" />
                </div>
                <div>
                  <h3
                    className="font-bold text-white text-lg mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-silver-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
