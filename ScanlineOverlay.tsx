export default function ScanlineOverlay() {
  return (
    <>
      {/* Horizontal scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
      {/* Subtle vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-[99]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </>
  );
}
