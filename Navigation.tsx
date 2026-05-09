import { useState, useEffect } from 'react';
import { Search, Command, Radar, Menu, X, Terminal, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  matrixMode: boolean;
  setMatrixMode: (v: boolean) => void;
}

export default function Navigation({ matrixMode, setMatrixMode }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Tech', href: '#tech' },
    { label: 'Aviation', href: '#aviation' },
    { label: 'Trends', href: '#trends' },
    { label: 'Dev', href: '#dev' },
  ];

  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-lg opacity-20"
                  style={{ backgroundColor: accentColor }}
                />
                <Radar
                  className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                  style={{ color: accentColor }}
                />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold tracking-tight">HOBA</span>
                <span
                  className="text-lg font-light tracking-widest"
                  style={{ color: accentColor }}
                >
                  RADAR
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 hover:text-text-primary"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden items-center gap-2 rounded-lg border border-border-subtle bg-obsidian-light/50 px-3 py-1.5 text-sm text-text-muted transition-all duration-200 hover:border-border-medium hover:text-text-secondary sm:flex"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <Search className="h-3.5 w-3.5" />
                <span>Search</span>
                <kbd className="ml-1 rounded border border-border-subtle px-1.5 py-0.5 text-[10px]">
                  <Command className="inline h-3 w-3" />K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setMatrixMode(!matrixMode)}
                className="rounded-lg border border-border-subtle p-2 text-text-muted transition-all duration-200 hover:border-border-medium hover:text-text-secondary"
                title={matrixMode ? 'Switch to Radar Mode' : 'Switch to Matrix Mode'}
              >
                {matrixMode ? (
                  <Sun className="h-4 w-4" style={{ color: '#39FF14' }} />
                ) : (
                  <Terminal className="h-4 w-4" style={{ color: '#00F2FF' }} />
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-lg border border-border-subtle p-2 text-text-muted md:hidden"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Command Palette / Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 backdrop-blur-sm pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl overflow-hidden rounded-xl border border-border-medium bg-obsidian shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
                <Search className="h-4 w-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search articles, topics, tags..."
                  className="flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  autoFocus
                />
                <kbd className="rounded border border-border-subtle px-2 py-0.5 text-[10px] text-text-muted">
                  ESC
                </kbd>
              </div>
              <div className="px-2 py-3">
                <div className="px-3 pb-2 text-[10px] font-medium uppercase tracking-wider text-text-muted">
                  Recent Searches
                </div>
                {['AI in Aviation', 'Quantum Computing', 'React Patterns', 'SpaceX Starship'].map(
                  (term) => (
                    <button
                      key={term}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-text-secondary transition hover:bg-obsidian-lighter"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      <Search className="h-3.5 w-3.5 text-text-muted" />
                      {term}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border-subtle bg-obsidian/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition hover:bg-obsidian-lighter hover:text-text-primary"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
