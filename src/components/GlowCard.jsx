import React, { useRef, useState } from 'react';

export default function GlowCard({ children, className = '', glowColor = 'blue', onClick }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getGlowGradient = () => {
    switch (glowColor) {
      case 'purple':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.15), transparent 80%)';
      case 'emerald':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.15), transparent 80%)';
      case 'cyan':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 80%)';
      case 'blue':
      default:
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 80%)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
      className={`relative group rounded-2xl border border-white/[0.08] bg-[#0d101b]/80 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Highlight Inside Card */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: getGlowGradient(),
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
