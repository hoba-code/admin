import { motion } from 'framer-motion';
import { Radio, Terminal } from 'lucide-react';

interface LiveTickerProps {
  matrixMode: boolean;
}

const tickerItems = [
  { type: 'TECH', text: 'OpenAI announces GPT-5 architecture details', time: '2m ago' },
  { type: 'AVIATION', text: 'Boeing 787 receives new avionics certification', time: '5m ago' },
  { type: 'TREND', text: 'Global semiconductor market hits $600B valuation', time: '8m ago' },
  { type: 'DEV', text: 'Rust 1.75 released with async trait support', time: '12m ago' },
  { type: 'TECH', text: 'Google DeepMind achieves new protein folding milestone', time: '15m ago' },
  { type: 'AVIATION', text: 'SpaceX Starship completes static fire test', time: '18m ago' },
  { type: 'TREND', text: 'EU passes landmark AI regulation framework', time: '22m ago' },
  { type: 'DEV', text: 'Next.js 15 introduces server components v2', time: '25m ago' },
  { type: 'TECH', text: 'NVIDIA H200 chips now shipping to cloud providers', time: '28m ago' },
  { type: 'AVIATION', text: 'Airbus reveals zero-emission aircraft concept', time: '31m ago' },
];

export default function LiveTicker({ matrixMode }: LiveTickerProps) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="fixed bottom-0 left-0 right-0 z-40 hidden border-t md:flex"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        background: 'rgba(11,14,20,0.9)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-center">
        {/* Status Label */}
        <div
          className="flex shrink-0 items-center gap-2 border-r px-4 py-2 text-[10px] font-bold uppercase tracking-widest"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
            color: accentColor,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <Radio className="h-3 w-3 animate-pulse" />
          Live Console
        </div>

        {/* Scrolling Ticker */}
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-scroll flex items-center whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: accentColor, opacity: 0.7 }}
                >
                  [{item.type}]
                </span>
                <span className="text-xs text-text-secondary">{item.text}</span>
                <span className="text-[10px] text-text-muted">{item.time}</span>
                <span className="mx-2 text-text-muted">|</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Icon */}
        <div
          className="flex shrink-0 items-center border-l px-4 py-2"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <Terminal className="h-3.5 w-3.5" style={{ color: accentColor, opacity: 0.5 }} />
        </div>
      </div>
    </motion.div>
  );
}
