import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Radar, Code2, Plane } from 'lucide-react';

interface MobileBottomNavProps {
  matrixMode: boolean;
}

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Radar, label: 'Radar', id: 'radar' },
  { icon: Code2, label: 'Dev', id: 'dev' },
  { icon: Plane, label: 'Aviation', id: 'aviation' },
];

export default function MobileBottomNav({ matrixMode }: MobileBottomNavProps) {
  const [active, setActive] = useState('home');
  const accentColor = matrixMode ? '#39FF14' : '#00F2FF';

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-10 left-4 right-4 z-50 md:hidden"
    >
      <div
        className="flex items-center justify-around rounded-2xl border px-2 py-2"
        style={{
          background: 'rgba(11,14,20,0.9)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center gap-0.5 rounded-xl px-4 py-2 transition-all duration-200"
              style={{
                color: isActive ? accentColor : 'rgba(240,242,245,0.4)',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: `${accentColor}10` }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <item.icon className="relative h-5 w-5" />
              <span className="relative text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
