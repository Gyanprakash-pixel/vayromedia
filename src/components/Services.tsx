import { useEffect, useRef } from 'react';
import { Video, Scissors, BarChart2, Lightbulb, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Reels Creation',
    desc: 'Create engaging short-form content designed for reach and conversions.',
    color: '#1976FF',
  },
  {
    icon: Scissors,
    title: 'Professional Video Editing',
    desc: 'Premium editing with cinematic transitions and compelling storytelling.',
    color: '#3a8fff',
  },
  {
    icon: BarChart2,
    title: 'Social Media Management',
    desc: 'Complete account handling and growth management across all platforms.',
    color: '#1976FF',
  },
  {
    icon: Lightbulb,
    title: 'Content Strategy',
    desc: 'Custom content plans tailored for your business goals and audience.',
    color: '#3a8fff',
  },
  {
    icon: Palette,
    title: 'Branding Support',
    desc: 'Visual branding guidance and content consistency across every touchpoint.',
    color: '#1976FF',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    desc: 'Data-driven growth and audience development to scale your presence.',
    color: '#3a8fff',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.scroll-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(25,118,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            What We Do
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">Our Services</h2>
          <p className="text-silver-dim mt-4 text-lg max-w-2xl mx-auto">
            End-to-end creative solutions engineered to build your brand and grow your audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="glass-card service-card rounded-2xl p-8 scroll-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${svc.color}22, ${svc.color}11)`, border: `1px solid ${svc.color}33` }}
                >
                  <Icon size={26} style={{ color: svc.color }} />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-silver-dim text-sm leading-relaxed">{svc.desc}</p>

                <div
                  className="mt-6 h-px w-12"
                  style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
