import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Instagram, Send, CheckCircle, Loader } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9004988577',
      href: 'tel:+919004988577',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'chaubeygyan02@gmail.com',
      href: 'mailto:chaubeygyan02@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@vayro_media',
      href: 'https://instagram.com/vayro_media',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(25,118,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-electric-blue uppercase mb-4 px-4 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Get In Touch
          </span>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl mt-4">Let's Build Something Great</h2>
          <p className="text-silver-dim mt-4 text-lg max-w-2xl mx-auto">
            Ready to transform your brand? Reach out and let's create content that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5 scroll-reveal">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass-card service-card rounded-2xl p-6 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/20 transition-colors">
                    <Icon size={22} className="text-electric-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-silver-dim tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              );
            })}

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 mt-2"
              style={{
                background: 'linear-gradient(135deg, rgba(25,118,255,0.12), rgba(25,118,255,0.04))',
                border: '1px solid rgba(25,118,255,0.25)',
              }}
            >
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ready to scale?
              </h3>
              <p className="text-silver-dim text-sm leading-relaxed">
                We respond within 24 hours. Start your journey to premium content and real growth today.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 scroll-reveal" style={{ transitionDelay: '150ms' }}>
            <div
              className="glass-card rounded-3xl p-8 md:p-10"
              style={{ border: '1px solid rgba(25,118,255,0.15)' }}
            >
              {success ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center"
                    style={{ boxShadow: '0 0 40px rgba(25,118,255,0.3)' }}>
                    <CheckCircle size={36} className="text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p className="text-silver-dim">We'll get back to you within 24 hours.</p>
                  </div>
                  <button onClick={() => setSuccess(false)} className="btn-secondary px-8 py-3 rounded-xl text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-silver-dim tracking-widest uppercase mb-2">
                        Name <span className="text-electric-blue">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-silver-dim/40 outline-none transition-all duration-200 focus:border-electric-blue/50"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        required
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs text-silver-dim tracking-widest uppercase mb-2">
                        Email <span className="text-electric-blue">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-silver-dim/40 outline-none transition-all duration-200 focus:border-electric-blue/50"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs text-silver-dim tracking-widest uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-silver-dim/40 outline-none transition-all duration-200 focus:border-electric-blue/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-silver-dim tracking-widest uppercase mb-2">
                      Message <span className="text-electric-blue">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand and goals..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-silver-dim/40 outline-none resize-none transition-all duration-200 focus:border-electric-blue/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
