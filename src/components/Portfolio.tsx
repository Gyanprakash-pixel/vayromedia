import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const categories = ['All', 'Gym Reels', 'Restaurant', 'Business', 'Brand Commercials', 'Before & After'];

const portfolioItems = [
  {
    title: 'Gym Transformation Reel',
    category: 'Gym Reels',
    img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
  },
  {
    title: 'Restaurant Ambiance Film',
    category: 'Restaurant',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
  {
    title: 'Corporate Brand Story',
    category: 'Business',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
  {
    title: 'Fitness Brand Commercial',
    category: 'Brand Commercials',
    img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
  },
  {
    title: 'Before & After Edit',
    category: 'Before & After',
    img: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
  {
    title: 'Food Showcase Reel',
    category: 'Restaurant',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
  {
    title: 'Gym Promo Video',
    category: 'Gym Reels',
    img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
  },
  {
    title: 'Luxury Brand Ad',
    category: 'Brand Commercials',
    img: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
  {
    title: 'Business Highlight Reel',
    category: 'Business',
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory);

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

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 20% 50%, rgba(25,118,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Our Work
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">Portfolio</h2>
          <p className="text-silver-dim mt-4 text-lg max-w-2xl mx-auto">
            A showcase of premium content crafted for brands that demand excellence.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-electric-blue text-white shadow-lg'
                  : 'glass-card text-silver-dim hover:text-white hover:border-electric-blue/40'
              }`}
              style={{
                boxShadow: activeCategory === cat ? '0 0 20px rgba(25,118,255,0.4)' : undefined,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="portfolio-card relative rounded-2xl overflow-hidden break-inside-avoid glass-card scroll-reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`overflow-hidden ${item.tall ? 'aspect-[3/4]' : 'aspect-video'}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="port-thumb w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="play-overlay absolute inset-0 bg-dark-bg/70 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-electric-blue/90 flex items-center justify-center shadow-lg">
                  <Play size={22} className="text-white ml-1" />
                </div>
                <span className="text-white font-semibold text-sm px-4 text-center">{item.title}</span>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-bg/80 text-electric-blue border border-electric-blue/20 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
