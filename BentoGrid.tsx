import { motion } from 'framer-motion';
import { Rocket, Cpu, Code2, TrendingUp, Clock, Tag, ArrowUpRight } from 'lucide-react';

interface BentoGridProps {
  matrixMode: boolean;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryIcon: React.ElementType;
  date: string;
  readTime: string;
  size: 'large' | 'medium' | 'small';
  color: string;
  tag: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'AI Revolutionizes Aerospace Engineering',
    excerpt:
      'Machine learning transforms aircraft design and autonomous navigation systems for next-gen aviation. Deep dive into neural networks optimizing wing geometry and flight path prediction.',
    category: 'aviation',
    categoryIcon: Rocket,
    date: '2024-12-28',
    readTime: '8 min',
    size: 'large',
    color: 'from-blue-500/20 to-cyan-500/20',
    tag: 'FEATURED',
  },
  {
    id: 2,
    title: 'Quantum Computing Breakthrough',
    excerpt: 'Major milestone in quantum error correction reshapes global data security.',
    category: 'tech',
    categoryIcon: Cpu,
    date: '2024-12-27',
    readTime: '6 min',
    size: 'medium',
    color: 'from-purple-500/20 to-pink-500/20',
    tag: 'BREAKING',
  },
  {
    id: 3,
    title: 'Automation Trends 2025',
    excerpt: 'Emerging tools defining the engineering landscape this year.',
    category: 'tech',
    categoryIcon: Cpu,
    date: '2024-12-26',
    readTime: '7 min',
    size: 'medium',
    color: 'from-emerald-500/20 to-teal-500/20',
    tag: 'ANALYSIS',
  },
  {
    id: 4,
    title: 'Hypersonic Flight: Mach 5+',
    excerpt: 'Technical challenges and breakthroughs in commercial supersonic travel.',
    category: 'aviation',
    categoryIcon: Rocket,
    date: '2024-12-25',
    readTime: '9 min',
    size: 'small',
    color: 'from-sky-500/20 to-blue-600/20',
    tag: 'DEEP DIVE',
  },
  {
    id: 5,
    title: 'Scalable API Architecture',
    excerpt: 'Design patterns for production-grade systems.',
    category: 'dev',
    categoryIcon: Code2,
    date: '2024-12-24',
    readTime: '5 min',
    size: 'small',
    color: 'from-indigo-500/20 to-violet-500/20',
    tag: 'TUTORIAL',
  },
  {
    id: 6,
    title: 'Global Supply Chain Tech',
    excerpt: 'AI-driven logistics solutions worldwide.',
    category: 'trends',
    categoryIcon: TrendingUp,
    date: '2024-12-23',
    readTime: '6 min',
    size: 'small',
    color: 'from-orange-500/20 to-red-500/20',
    tag: 'TREND',
  },
];

function BentoCard({
  article,
  index,
  matrixMode,
}: {
  article: Article;
  index: number;
  matrixMode: boolean;
}) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';
  const accentDim = matrixMode ? 'rgba(57,255,20,0.05)' : 'rgba(0,242,255,0.05)';

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className={`group relative overflow-hidden rounded-xl border border-border-subtle bg-obsidian-light transition-all duration-300 ${sizeClasses[article.size]}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
      }}
    >
      {/* Scan line effect on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${accentDim} 50%, transparent 100%)`,
        }}
      />

      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-30`}
      />

      <div className="relative flex h-full flex-col p-5 sm:p-6">
        {/* Top row: tag + icon */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              color: accentColor,
              backgroundColor: accentDim,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {article.tag}
          </span>
          <article.categoryIcon
            className="h-4 w-4"
            style={{ color: `${accentColor}60` }}
          />
        </div>

        {/* Title */}
        <h3
          className={`mb-2 font-bold leading-tight transition-colors duration-300 group-hover:text-white ${
            article.size === 'large' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
          }`}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`mb-auto text-text-secondary ${
            article.size === 'large'
              ? 'line-clamp-3 text-sm sm:text-base'
              : 'line-clamp-2 text-xs sm:text-sm'
          }`}
        >
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-3 border-t pt-4 text-[10px] uppercase tracking-wider text-text-muted sm:text-xs">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {article.category}
          </span>
          <span className="ml-auto">{article.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid({ matrixMode }: BentoGridProps) {
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <div
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor, fontFamily: 'var(--font-mono)' }}
            >
              Intelligence Feed
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">Latest Scans</h2>
          </div>
          <button
            className="hidden items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium text-text-secondary transition hover:text-text-primary sm:flex"
            style={{
              borderColor: 'rgba(255,255,255,0.06)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            View All
            <ArrowUpRight className="h-3 w-3" style={{ color: accentColor }} />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <BentoCard
              key={article.id}
              article={article}
              index={index}
              matrixMode={matrixMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
