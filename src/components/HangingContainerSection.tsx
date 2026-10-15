import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const HangingContainerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const scrolledY = -rect.top;
      const rawProgress = scrolledY / scrollableDistance;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When scrolling down, the container descends from behind the hero section (starting at -70% translateY)
  // down to 0% (perfectly centered on screen) as progress reaches 1.0
  const translateY = (1 - scrollProgress) * -85; // Moves from -85% down to 0%
  const containerOpacity = Math.min(1, Math.max(0.15, scrollProgress * 1.5));
  const scale = 0.92 + scrollProgress * 0.08; // Subtle zoom from 0.92 to 1.0

  return (
    <section 
      ref={containerRef}
      id="container-reveal"
      className="relative w-full z-15 bg-[#050D1A]"
      style={{ height: '220vh' }} // 2.2 viewports for a cinematic lowering experience
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#050D1A]">
        
        {/* Ambient Maritime Atmospheric Glows */}
        <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_50%_30%,rgba(245,158,11,0.08)_0%,transparent_60%]" />
        <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_50%_75%,rgba(0,180,216,0.08)_0%,transparent_60%]" />

        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Top Crane Cable Shadow Indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-amber-500/40 via-cyan-400/20 to-transparent pointer-events-none" />

        {/* Hanging 3D Container Asset */}
        <div 
          className="relative z-10 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl px-4 sm:px-6 flex flex-col items-center transition-transform duration-100 ease-out will-change-transform select-none"
          style={{
            transform: `translateY(${translateY}%) scale(${scale})`,
            opacity: containerOpacity
          }}
        >
          {/* Main 3D Container Image */}
          <div className="relative w-full flex justify-center filter drop-shadow-[0_25px_60px_rgba(245,158,11,0.25)] drop-shadow-[0_40px_90px_rgba(0,0,0,0.85)]">
            <img 
              src="/3D_Orange_Container.png" 
              alt="Won Shipping Agencies - Connecting Ports, Moving Dreams" 
              className="w-full max-h-[75vh] object-contain pointer-events-none"
              loading="eager"
            />
          </div>

          {/* Elegant Pill Badge Beneath Container when fully lowered */}
          <div 
            className="mt-4 transition-all duration-500 flex flex-col items-center gap-2"
            style={{
              opacity: Math.max(0, (scrollProgress - 0.70) / 0.30),
              transform: `translateY(${(1 - Math.max(0, (scrollProgress - 0.70) / 0.30)) * 20}px)`
            }}
          >
            <div className="liquid-glass-dock px-5 py-2 rounded-full inline-flex items-center gap-2.5 border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-heading font-bold text-xs sm:text-sm tracking-[0.22em] text-white uppercase">
                Global Multimodal Cargo Operations
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="font-heading font-medium text-xs text-cyan-300 hidden sm:inline">
                ISO Certified Container Fleet
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Guide Chevron */}
        <div 
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300 pointer-events-auto"
          style={{
            opacity: scrollProgress > 0.85 ? 1 : 0
          }}
        >
          <button
            onClick={() => {
              const el = document.getElementById('overview');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="liquid-glass-dock hover:border-amber-400/50 p-2.5 rounded-full text-slate-300 hover:text-white transition-all cursor-pointer animate-bounce shadow-lg"
            title="Continue to Company Overview"
          >
            <ChevronDown className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
