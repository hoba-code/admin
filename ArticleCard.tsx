

interface ArticleProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  featured?: boolean;
  color: string;
}

interface Props {
  article: ArticleProps;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-700 transition hover:border-cyan-500">
      {/* Background Gradient */}
      <div className={`absolute inset-0 -z-10 h-full w-full bg-gradient-to-br ${article.color} opacity-5`} />

      {/* Card Content */}
      <div className="flex h-full flex-col p-6">
        {/* Category Badge */}
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-cyan-400">
            {article.categoryLabel}
          </span>
          {article.featured && (
            <span className="inline-block rounded-full bg-orange-900/50 px-3 py-1 text-xs font-semibold text-orange-300">
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 flex-1 text-lg font-bold leading-tight transition group-hover:text-cyan-400">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm text-slate-400">{article.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-700 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>{formatDate(article.date)}</span>
            <span className="text-slate-600">•</span>
            <span>{article.readTime} read</span>
          </div>
          <button className="transition hover:text-cyan-400">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5a3.5 3.5 0 0 0-3.5 3.5v10A3.5 3.5 0 0 0 5 18.5h10a3.5 3.5 0 0 0 3.5-3.5V9.5m-15 0h15m-7.5-8v8m4-4l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
