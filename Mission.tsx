import { motion } from 'framer-motion';
import { Target, Cpu, Plane, Globe, Code, Zap } from 'lucide-react';

interface MissionProps {
  matrixMode: boolean;
}

const pillars = [
  {
    icon: Cpu,
    title: 'Tech Intelligence',
    description: 'AI-driven automation, software development, and hardware breakthroughs analyzed through an engineering lens.',
    stat: '200+',
    statLabel: 'Tech Articles',
  },
  {
    icon: Plane,
    title: 'Aviation & Aerospace',
    description: 'Technical deep dives into aircraft engineering, civil and military aviation, and industry shifts.',
    stat: '150+',
    statLabel: 'Aviation Reports',
  },
  {
    icon: Globe,
    title: 'Global Trends',
    description: 'Real-time reporting on significant news and global events, ensuring you stay ahead of the curve.',
    stat: '100+',
    statLabel: 'Trend Analyses',
  },
  {
    icon: Code,
    title: "Developer's Corner",
    description: 'Practical tutorials and insights into programming, scripting, and leveraging technology for smarter workflows.',
    stat: '50+',
    statLabel: 'Tutorials',
  },
];

export default function Mission({ matrixMode }: MissionProps) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div
        className="absolute -right-40 top-0 h-96 w-96 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: accentColor }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div
            className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: accentColor, fontFamily: 'var(--font-mono)' }}
          >
            <Target className="h-3 w-3" />
            Mission Control
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Empowering the{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${accentColor}, ${matrixMode ? '#00F2FF' : '#39FF14'})`,
              }}
            >
              Curious
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            At Hoba Radar, we scan the horizon of innovation to provide our community with the data, news, and technical knowledge they need to navigate the future.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border-subtle bg-obsidian-light/50 p-6 transition-all duration-300"
              style={{
                '--hover-color': `${accentColor}20`,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}30`;
                (e.currentTarget as HTMLElement).style.backgroundColor = `${accentColor}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(17,20,28,0.5)';
              }}
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${accentColor}10` }}
              >
                <pillar.icon className="h-5 w-5" style={{ color: accentColor }} />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-base font-semibold">{pillar.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-1 border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                <span className="text-lg font-bold" style={{ color: accentColor }}>
                  {pillar.stat}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted">
                  {pillar.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Edge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl border p-8 sm:p-12"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
            background: `linear-gradient(135deg, ${matrixMode ? 'rgba(57,255,20,0.03)' : 'rgba(0,242,255,0.03)'}, transparent)`,
          }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'The Engineering Perspective',
                text: 'Unlike traditional news outlets, we analyze every story through a technical lens, bridging the gap between complex engineering and accessible information.',
              },
              {
                icon: Cpu,
                title: 'Automated Excellence',
                text: 'Utilizing advanced AI and automation tools to curate and deliver content with unmatched speed and accuracy.',
              },
              {
                icon: Target,
                title: 'Visionary Leadership',
                text: 'Founded on the principles of precision, modern aesthetics, and a commitment to technical education.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${accentColor}10` }}
                >
                  <item.icon className="h-5 w-5" style={{ color: accentColor }} />
                </div>
                <h4 className="mb-2 text-sm font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
