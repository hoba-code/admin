import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import BentoGrid from './components/BentoGrid';
import LiveTicker from './components/LiveTicker';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ScanlineOverlay from './components/ScanlineOverlay';

export default function App() {
  const [matrixMode, setMatrixMode] = useState(false);

  return (
    <div
      className="relative min-h-screen text-text-primary transition-colors duration-500"
      style={{ backgroundColor: '#0B0E14' }}
    >
      <ScanlineOverlay />
      <Navigation matrixMode={matrixMode} setMatrixMode={setMatrixMode} />
      <main className="pb-20 md:pb-10">
        <Hero matrixMode={matrixMode} />
        <Mission matrixMode={matrixMode} />
        <BentoGrid matrixMode={matrixMode} />
        <Footer matrixMode={matrixMode} />
      </main>
      <LiveTicker matrixMode={matrixMode} />
      <MobileBottomNav matrixMode={matrixMode} />
    </div>
  );
}
