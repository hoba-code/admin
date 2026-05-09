import { motion } from 'framer-motion';
import { Radar, Globe, MessageCircle, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  matrixMode: boolean;
}

export default function Footer({ matrixMode }: FooterProps) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  const footerLinks = {
    Intelligence: ['Tech Analysis', 'Aviation Reports', 'Global Trends', 'Developer Guides'],
    Platform: ['About', 'Careers', 'Press Kit', 'Contact'],
    Connect: ['Newsletter', 'RSS Feed', 'API Access', 'Community'],
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'Twitter' },
    { icon: Globe, label: 'GitHub' },
    { icon: ExternalLink, label: 'LinkedIn' },
    { icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="relative border-t px-4 pb-24 pt-20 sm:px-6 lg:px-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <Radar className="h-5 w-5" style={{ color: accentColor }} />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold">HOBA</span>
                <span className="text-lg font-light tracking-widest" style={{ color: accentColor }}>
                  RADAR
                </span>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              Hoba Radar's interface isn't just a website; it's a digital cockpit designed for those who want to see further and understand deeper.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:border-opacity-50"
                  style={{
                    borderColor: 'rgba(255,255,255,0.06)',
                    color: 'rgba(240,242,245,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}40`;
                    (e.currentTarget as HTMLElement).style.color = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(240,242,245,0.4)';
                  }}
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ color: accentColor }} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-xl border p-6 sm:p-8"
          style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="mb-1 text-lg font-bold">Stay in the loop</h3>
              <p className="text-sm text-text-secondary">
                Get weekly intelligence briefings delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full gap-2 sm:w-auto">
              <input
                type="email"
                placeholder="pilot@hobaradar.com"
                className="flex-1 rounded-lg border bg-transparent px-4 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted sm:w-64"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  fontFamily: 'var(--font-mono)',
                }}
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg px-6 py-2.5 text-sm font-semibold text-obsidian transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 20px ${matrixMode ? 'rgba(57,255,20,0.2)' : 'rgba(0,242,255,0.2)'}`,
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs text-text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
            &copy; 2024 HOBA RADAR. All systems operational.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-text-muted transition hover:text-text-secondary"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
