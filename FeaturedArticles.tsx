
import ArticleCard from './ArticleCard';

const FeaturedArticles: React.FC = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'AI Revolutionizes Aerospace Engineering: The Next Generation of Smart Aircraft',
      excerpt:
        'Discover how machine learning is transforming aircraft design and autonomous navigation systems for civilian and military applications.',
      category: 'aviation',
      categoryLabel: 'Aviation & Aerospace',
      date: '2024-12-28',
      readTime: '8 min',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Breaking: New Quantum Computing Breakthrough Could Transform Global Data Security',
      excerpt:
        'Leading researchers announce a major milestone in quantum error correction, potentially reshaping cryptography and cybersecurity.',
      category: 'tech',
      categoryLabel: 'Tech Intelligence',
      date: '2024-12-27',
      readTime: '6 min',
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Automation Trends 2025: What Engineering Teams Need to Know',
      excerpt:
        'An in-depth technical analysis of emerging automation tools and practices that will define the engineering landscape this year.',
      category: 'tech',
      categoryLabel: 'Tech Intelligence',
      date: '2024-12-26',
      readTime: '7 min',
      featured: true,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="border-b border-slate-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Coverage</h2>
          <div className="h-1 flex-1 ml-8 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
