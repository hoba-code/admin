import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, Globe } from 'lucide-react';

interface HeroProps {
  matrixMode: boolean;
}

export default function Hero({ matrixMode }: HeroProps) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';
  const accentDim = matrixMode ? 'rgba(57,255,20,0.08)' : 'rgba(0,242,255,0.08)';
  const accentBorder = matrixMode ? 'rgba(57,255,20,0.15)' : 'rgba(0,242,255,0.15)';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Radar Sweep Animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
              borderColor: accentBorder,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 1 }}
          />
        ))}

        {/* Rotating sweep line */}
        <div className="radar-sweep absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
          <div
            className="absolute left-1/2 top-0 h-1/2 w-px"
            style={{
              background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
              transformOrigin: 'bottom center',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${accentDim} 60deg, transparent 120deg)`,
            }}
          />
        </div>

        {/* Center dot */}
        <motion.div
          className="pulse-glow absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        {/* Radar ping rings */}
        {[0, 1].map((i) => (
          <motion.div
            key={`ping-${i}`}
            className="radar-ring absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              borderColor: accentBorder,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
          style={{
            borderColor: accentBorder,
            color: accentColor,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          System Online — Live Feed Active
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
        >
          Scanning the Horizon of{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${accentColor}, ${matrixMode ? '#00F2FF' : '#39FF14'})`,
            }}
          >
            Tech & Aviation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          High-precision intelligence on AI, aerospace, and global innovation.
          <br className="hidden sm:block" />
          Engineered for those who want to see further and understand deeper.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            className="group flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold text-obsidian transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 30px ${accentDim}`,
            }}
          >
            Initialize Feed
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            className="flex items-center gap-2 rounded-lg border px-8 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:text-text-primary"
            style={{
              borderColor: accentBorder,
              fontFamily: 'var(--font-mono)',
            }}
          >
            View Logs
          </button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 border-t pt-8 sm:gap-12"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {[
            { icon: Activity, value: '500+', label: 'Articles Scanned' },
            { icon: Zap, value: '50K+', label: 'Active Nodes' },
            { icon: Globe, value: '24/7', label: 'Live Coverage' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon
                className="mx-auto mb-2 h-4 w-4"
                style={{ color: accentColor, opacity: 0.6 }}
              />
              <div
                className="text-xl font-bold sm:text-2xl"
                style={{ color: accentColor }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-text-muted sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
