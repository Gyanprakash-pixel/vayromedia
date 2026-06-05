import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const LOGO = '/ChatGPT_Image_Jun_4,_2026,_02_19_23_PM.png';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.pulse += 0.02;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(25, 118, 255, ${alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(25, 118, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 70% at 50% -10%, rgba(25,118,255,0.18) 0%, transparent 70%), #050914' }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="particles-canvas" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #1976FF 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #1976FF 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-float" style={{ animationDelay: '0s' }}>
          <img
            src={LOGO}
            alt="VAYRO MEDIA"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 40px rgba(25,118,255,0.5))' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="block text-white mb-2">WE CREATE CONTENT THAT</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #c0c8d8 30%, #1976FF 70%, #4d9fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CAPTURES ATTENTION
          </span>
          <span className="block text-white mt-2">AND GROWS BRANDS.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-silver-dim font-light tracking-widest mb-10 uppercase">
          Creating content that converts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('#packages')}
            className="btn-primary px-8 py-4 rounded-full text-base font-semibold"
          >
            View Packages
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-secondary px-8 py-4 rounded-full text-base font-semibold"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs tracking-widest text-silver-dim uppercase">Scroll</span>
        <ChevronDown size={18} className="text-electric-blue" />
      </div>
    </section>
  );
}
