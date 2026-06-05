import { Instagram, Mail, Phone } from 'lucide-react';

const buttons = [
  {
    icon: Phone,
    label: 'WhatsApp',
    href: 'https://wa.me/919004988577',
    color: '#25D366',
    glow: 'rgba(37, 211, 102, 0.4)',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/vayro_media',
    color: '#E1306C',
    glow: 'rgba(225, 48, 108, 0.4)',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:chaubeygyan02@gmail.com',
    color: '#1976FF',
    glow: 'rgba(25, 118, 255, 0.4)',
  },
];

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-6 flex flex-col gap-3 z-50">
      {buttons.map((btn, i) => {
        const Icon = btn.icon;
        return (
          <div key={btn.label} className="relative group" style={{ animationDelay: `${i * 0.2}s` }}>
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-pulse-ring opacity-0 group-hover:opacity-100"
              style={{ background: btn.color }}
            />
            <a
              href={btn.href}
              target="_blank"
              rel="noreferrer"
              aria-label={btn.label}
              className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
              style={{
                background: btn.color,
                boxShadow: `0 0 20px ${btn.glow}`,
              }}
            >
              <Icon size={20} className="text-white" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
