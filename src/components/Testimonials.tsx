import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Gym Owner',
    avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Vayro Media transformed our social media presence. The reels they create consistently go viral and bring in new members. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Restaurant Owner',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Professional editing and quick delivery every time. Our food reels look absolutely cinematic. Our bookings have increased by 40% since working with Vayro.',
    stars: 5,
  },
  {
    name: 'Arjun Nair',
    role: 'Brand Founder',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The reels generated more engagement than anything we\'ve posted before. Vayro Media understands what makes content perform and delivers every single time.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(25,118,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Social Proof
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">What Clients Say</h2>
        </div>

        {/* Main card */}
        <div className="scroll-reveal">
          <div
            className="glass-card rounded-3xl p-10 md:p-14 text-center relative"
            style={{ border: '1px solid rgba(25,118,255,0.15)', boxShadow: '0 0 60px rgba(25,118,255,0.08)' }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-8 left-10 text-8xl font-serif leading-none opacity-10 text-electric-blue"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[active].stars)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400" fill="#facc15" />
              ))}
            </div>

            {/* Text */}
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
              "{testimonials[active].text}"
            </p>

            {/* Avatar */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-electric-blue/40"
              />
              <div className="text-left">
                <div
                  className="font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {testimonials[active].name}
                </div>
                <div className="text-electric-blue text-sm">{testimonials[active].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8 scroll-reveal">
          <button
            onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-electric-blue/40 transition-all hover:text-electric-blue"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-electric-blue' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-electric-blue/40 transition-all hover:text-electric-blue"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
