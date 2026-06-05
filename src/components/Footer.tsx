import { Instagram, Mail, Phone } from 'lucide-react';

const LOGO = '/ChatGPT_Image_Jun_4,_2026,_02_19_23_PM.png';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 px-4" style={{ borderTop: '1px solid rgba(25,118,255,0.12)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(25,118,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO} alt="VAYRO MEDIA" className="h-16 w-auto object-contain mb-4" />
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#1976FF' }}
            >
              Creating Content That Converts
            </p>
            <p className="text-silver-dim text-sm leading-relaxed">
              Premium creative agency helping brands grow through powerful content and strategic social media execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-silver-dim hover:text-electric-blue text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-electric-blue/40 group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connect With Us
            </h4>
            <div className="space-y-4 mb-6">
              <a href="tel:+919004988577" className="flex items-center gap-3 text-silver-dim hover:text-white text-sm transition-colors group">
                <Phone size={15} className="text-electric-blue" />
                +91 9004988577
              </a>
              <a href="mailto:chaubeygyan02@gmail.com" className="flex items-center gap-3 text-silver-dim hover:text-white text-sm transition-colors group">
                <Mail size={15} className="text-electric-blue" />
                chaubeygyan02@gmail.com
              </a>
              <a href="https://instagram.com/vayro_media" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-silver-dim hover:text-white text-sm transition-colors group">
                <Instagram size={15} className="text-electric-blue" />
                @vayro_media
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/vayro_media"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-electric-blue/50 hover:text-electric-blue transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/919004988577"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-electric-blue/50 hover:text-electric-blue transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:chaubeygyan02@gmail.com"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-electric-blue/50 hover:text-electric-blue transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(25,118,255,0.3), transparent)' }} />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-silver-dim text-sm">
            © 2026 VAYRO MEDIA. All Rights Reserved.
          </p>
          <p className="text-silver-dim/50 text-xs">
            Premium Creative Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
