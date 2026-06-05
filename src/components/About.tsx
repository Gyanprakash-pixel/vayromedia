import { useEffect, useRef } from 'react';
import { Award, Users, Zap } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Award-Winning Editing' },
  { icon: Users, label: '50+ Happy Clients' },
  { icon: Zap, label: 'Lightning Fast Delivery' },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(25,118,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div
                className="rounded-3xl overflow-hidden aspect-square relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(25,118,255,0.15), rgba(25,118,255,0.05))',
                  border: '1px solid rgba(25,118,255,0.2)',
                  boxShadow: '0 0 60px rgba(25,118,255,0.15)',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vayro Media team"
                  className="w-full h-full object-cover opacity-80"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(5,9,20,0.3) 0%, rgba(25,118,255,0.1) 100%)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 text-center"
                style={{ border: '1px solid rgba(25,118,255,0.3)', boxShadow: '0 0 30px rgba(25,118,255,0.2)' }}
              >
                <div
                  className="text-4xl font-black"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: 'linear-gradient(135deg, #ffffff, #1976FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  2M+
                </div>
                <div className="text-xs text-silver-dim tracking-wider mt-1">Views Generated</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="scroll-reveal order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
              About Us
            </span>
            <h2
              className="section-title text-4xl sm:text-5xl font-black mt-4 mb-6 leading-tight"
            >
              About Vayro Media
            </h2>

            <p className="text-silver text-lg leading-relaxed mb-6">
              Vayro Media helps businesses, creators and brands grow through powerful content,
              professional editing and strategic social media execution.
            </p>

            <div
              className="glass-card rounded-2xl p-6 mb-8"
              style={{ borderLeft: '3px solid #1976FF', borderColor: 'rgba(25,118,255,0.4)' }}
            >
              <p className="text-white text-lg font-medium leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                "Our mission is simple: Create content that captures attention, builds trust and drives results."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 flex-1">
                    <Icon size={18} className="text-electric-blue flex-shrink-0" />
                    <span className="text-sm text-silver font-medium">{h.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: '2022', text: 'Founded with a vision to revolutionize brand content' },
                { year: '2023', text: 'Scaled to 20+ clients, 200+ reels delivered' },
                { year: '2024', text: 'Crossed 1M+ views generated for clients' },
                { year: '2026', text: 'Now powering 50+ brands with premium content' },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-xs font-bold text-electric-blue">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-electric-blue" />
                  </div>
                  <p className="text-silver-dim text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
