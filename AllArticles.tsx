import { useMemo } from 'react';
import ArticleCard from './ArticleCard';

interface AllArticlesProps {
  category?: string;
  limit?: number;
}

const AllArticles: React.FC<AllArticlesProps> = ({ category, limit = 6 }) => {
  const allArticles = [
    {
      id: 1,
      title: 'AI Revolutionizes Aerospace Engineering: The Next Generation of Smart Aircraft',
      excerpt:
        'Discover how machine learning is transforming aircraft design and autonomous navigation systems.',
      category: 'aviation',
      categoryLabel: 'Aviation & Aerospace',
      date: '2024-12-28',
      readTime: '8 min',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Breaking: New Quantum Computing Breakthrough Could Transform Global Data Security',
      excerpt:
        'Leading researchers announce a major milestone in quantum error correction, potentially reshaping cryptography.',
      category: 'tech',
      categoryLabel: 'Tech Intelligence',
      date: '2024-12-27',
      readTime: '6 min',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Automation Trends 2025: What Engineering Teams Need to Know',
      excerpt:
        'An in-depth technical analysis of emerging automation tools and practices that will define the engineering landscape.',
      category: 'tech',
      categoryLabel: 'Tech Intelligence',
      date: '2024-12-26',
      readTime: '7 min',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Global Supply Chain Crisis: How Technology is Reshaping Logistics',
      excerpt:
        'A comprehensive look at how AI-driven solutions are addressing supply chain challenges worldwide.',
      category: 'trends',
      categoryLabel: 'Global Trends',
      date: '2024-12-25',
      readTime: '9 min',
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 5,
      title: 'Building Scalable APIs: A Developer\'s Guide to Modern Architecture',
      excerpt:
        'Deep dive into API design patterns and best practices for building production-grade systems.',
      category: 'developer',
      categoryLabel: "Developer's Corner",
      date: '2024-12-24',
      readTime: '5 min',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      title: 'Hypersonic Flight: The Future of Commercial Aviation',
      excerpt:
        'Exploring the technical challenges and breakthroughs enabling speeds of Mach 5 and beyond.',
      category: 'aviation',
      categoryLabel: 'Aviation & Aerospace',
      date: '2024-12-23',
      readTime: '7 min',
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 7,
      title: 'Cybersecurity in the Age of AI: Threats and Solutions',
      excerpt:
        'Understanding how artificial intelligence is both creating and solving security challenges.',
      category: 'tech',
      categoryLabel: 'Tech Intelligence',
      date: '2024-12-22',
      readTime: '8 min',
      color: 'from-rose-500 to-pink-500',
    },
    {
      id: 8,
      title: 'Climate Tech Innovations Making Real Impact in 2024',
      excerpt:
        'Review of breakthrough technologies helping tackle climate change through engineering innovation.',
      category: 'trends',
      categoryLabel: 'Global Trends',
      date: '2024-12-21',
      readTime: '6 min',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 9,
      title: 'Mastering TypeScript: Advanced Patterns for Production Code',
      excerpt:
        'Learn advanced TypeScript patterns that professional development teams use daily.',
      category: 'developer',
      categoryLabel: "Developer's Corner",
      date: '2024-12-20',
      readTime: '10 min',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const filteredArticles = useMemo(() => {
    let filtered = allArticles;
    if (category) {
      filtered = filtered.filter((article) => article.category === category);
    }
    return filtered.slice(0, limit);
  }, [category, limit]);

  return (
    <section className="border-b border-slate-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {category && (
          <h2 className="mb-12 text-3xl font-bold capitalize">
            {allArticles.find((a) => a.category === category)?.categoryLabel}
          </h2>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {!category && (
          <div className="mt-12 flex justify-center">
            <button className="rounded-lg border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArticles;
