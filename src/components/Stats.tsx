import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 500, suffix: '+', label: 'Videos Created' },
  { value: 2, suffix: 'M+', label: 'Views Generated' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ target, suffix, running }: { target: number; suffix: string; running: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!running) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [running, target]);

  return (
    <span className="stat-number text-5xl sm:text-6xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const [running, setRunning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRunning(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(25,118,255,0.06) 50%, transparent 100%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          className="glass-card rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ borderColor: 'rgba(25,118,255,0.2)', boxShadow: '0 0 60px rgba(25,118,255,0.08)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-3">
              <Counter target={stat.value} suffix={stat.suffix} running={running} />
              <span className="text-silver-dim text-sm font-medium tracking-wider uppercase">{stat.label}</span>
              <div className="h-px w-8 bg-electric-blue opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
