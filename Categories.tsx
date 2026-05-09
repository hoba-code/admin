

interface CategoriesProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'tech', label: 'Tech Intelligence', icon: '⚙️' },
    { id: 'aviation', label: 'Aviation & Aerospace', icon: '✈️' },
    { id: 'trends', label: 'Global Trends', icon: '🌍' },
    { id: 'developer', label: "Developer's Corner", icon: '💻' },
  ];

  return (
    <section className="border-b border-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold">Explore Topics</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-lg border-2 p-6 text-left transition ${
              activeCategory === null
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="mb-2 text-2xl">📡</div>
            <h3 className="font-semibold">All Topics</h3>
            <p className="text-sm text-slate-400">Latest from all categories</p>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-lg border-2 p-6 text-left transition ${
                activeCategory === category.id
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="mb-2 text-2xl">{category.icon}</div>
              <h3 className="font-semibold">{category.label}</h3>
              <p className="text-sm text-slate-400">
                {category.id === 'tech' && 'AI & Automation'}
                {category.id === 'aviation' && 'Aircraft & Engineering'}
                {category.id === 'trends' && 'News & Insights'}
                {category.id === 'developer' && 'Tutorials & Tips'}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
