import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Throttle or direct set
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark background base */}
      <div className="absolute inset-0 bg-[#08090d]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* Dynamic Cursor Spotlight (Subtle) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-all duration-300 ease-out hidden md:block"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)',
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      {/* Ambient Top Glow / Aurora */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-[120px] rounded-full opacity-60 pointer-events-none" />

      {/* Subtle Side Ambient Glows */}
      <div className="absolute top-[35%] -left-48 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[65%] -right-48 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Vignette on Edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,13,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
