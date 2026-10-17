import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const HangingContainerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      // As user scrolls down from hero section:
      // When container section top is at window bottom (rect.top = windowH): revealProgress = 0
      // As container section enters screen (rect.top goes from windowH down to 0): revealProgress goes 0 -> 1.0
      // By the time section reaches full screen (rect.top <= 0): revealProgress is 1.0 (fully lowered!)
      const rawProgress = (windowH - rect.top) / windowH;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setRevealProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When revealProgress = 0 (just entering as user begins scrolling down from hero):
  // translateY is -65% so the bottom edge of the container emerges first as the section comes into view!
  // As user scrolls down into the section, it smoothly lowers down to 0% (fully centered in viewport)
  // When user is on this section (rect.top <= 0), it stays pinned at 0% for comfortable viewing
  const translateY = (1 - revealProgress) * -65;

  return (
    <section 
      ref={containerRef}
      id="container-reveal"
      className="relative w-full z-15 bg-[#050D1A]"
      style={{ height: '115vh', backgroundColor: '#050D1A' }}
    >
      {/* Sticky Fullscreen Viewport - Clean Solid Dark Navy Background (Pure #050D1A, Zero Glow) */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#050D1A]"
        style={{ backgroundColor: '#050D1A' }}
      >
        {/* Subtle grid pattern background matching site */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Hanging 3D Container Asset - Widened by 50px on each side (100px total) per user instruction */}
        <div 
          className="relative z-10 w-full flex flex-col items-center justify-center will-change-transform select-none transition-transform duration-100 ease-out px-3 sm:px-6 md:px-10 lg:px-[50px]"
          style={{
            transform: `translate3d(0, ${translateY}%, 0)`
          }}
        >
          {/* Main 3D Container Image: Responsive margins (12px mobile, 24px tablet, 50px desktop) */}
          <div className="relative w-full flex justify-center items-center filter drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <img 
              src="/3D_Orange_Container_Cropped.png" 
              alt="Won Shipping Agencies - Connecting Ports, Moving Dreams" 
              className="w-full h-auto max-h-[82vh] sm:max-h-[88vh] md:max-h-[90vh] max-w-[calc(100vw-24px)] sm:max-w-[calc(100vw-48px)] lg:max-w-[calc(100vw-100px)] object-contain mx-auto pointer-events-none select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Guide Chevron */}
        <div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300 pointer-events-auto"
          style={{
            opacity: revealProgress >= 0.95 ? 1 : 0
          }}
        >
          <button
            onClick={() => {
              const el = document.getElementById('overview');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="liquid-glass-dock hover:border-amber-400/50 p-2 sm:p-2.5 rounded-full text-slate-300 hover:text-white transition-all cursor-pointer animate-bounce shadow-lg"
            title="Continue to Company Overview"
          >
            <ChevronDown className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};


