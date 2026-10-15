import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ChevronDown, 
  Anchor, 
  Compass, 
  ShieldCheck, 
  Globe2, 
  Search, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface HeroScrollSectionProps {
  onScrollProgress: (progress: number, isComplete: boolean) => void;
  onOpenQuote: () => void;
  onOpenTracker: () => void;
}

const START_FRAME = 10; // Started at 010 per user instruction
const END_FRAME = 151;
const TOTAL_SCRUB_FRAMES = END_FRAME - START_FRAME + 1; // 142 frames (10 to 151)

export const HeroScrollSection: React.FC<HeroScrollSectionProps> = ({
  onScrollProgress,
  onOpenQuote,
  onOpenTracker
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_SCRUB_FRAMES).fill(null));
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lock window scroll while loading is in progress per user requirement
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isLoaded]);

  const targetFrameRef = useRef(0);
  const currentRenderedFrameRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const rafIdRef = useRef<number | null>(null);

  // Helper to format frame path starting from frame 010
  const getFrameUrl = (scrubIndex: number) => {
    const actualFrameNum = START_FRAME + scrubIndex;
    const padded = String(actualFrameNum).padStart(3, '0');
    return `/Hero Section Animation/Untitled_Scene_10-12_18_30_20_20261014012541_${padded}.webp`;
  };

  // Draw a frame to canvas with object-fit: cover
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let closestDist = Infinity;
      let closestImg: HTMLImageElement | null = null;
      for (let i = 0; i < TOTAL_SCRUB_FRAMES; i++) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const dist = Math.abs(i - frameIndex);
          if (dist < closestDist) {
            closestDist = dist;
            closestImg = candidate;
          }
        }
      }
      img = closestImg;
    }

    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    if (imgWidth === 0 || imgHeight === 0) return;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const scaledWidth = imgWidth * scale;
    const scaledHeight = imgHeight * scale;
    const offsetX = (canvasWidth - scaledWidth) / 2;
    const offsetY = (canvasHeight - scaledHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
    lastDrawnIndexRef.current = frameIndex;
  }, []);

  // Set up canvas resolution
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      drawFrame(Math.round(currentRenderedFrameRef.current));
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [drawFrame]);

  // Preload frames starting at frame 010 with minimum animation duration
  useEffect(() => {
    let active = true;

    // Minimum display time (1.4s) so the rapid zoom loading animation displays smoothly
    const minLoadTimer = new Promise((resolve) => setTimeout(resolve, 1400));

    // 1. Frame 010 (scrub index 0)
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    const frame0Promise = new Promise((resolve) => {
      frame0.onload = () => resolve(true);
      frame0.onerror = () => resolve(true);
    });

    Promise.all([minLoadTimer, frame0Promise]).then(() => {
      if (!active) return;
      imagesRef.current[0] = frame0;
      drawFrame(0);
      setIsLoaded(true);
    });

    // 2. Preload keyframes (every 4th)
    const keyframes: number[] = [];
    for (let i = 4; i < TOTAL_SCRUB_FRAMES; i += 4) {
      keyframes.push(i);
    }
    if (!keyframes.includes(TOTAL_SCRUB_FRAMES - 1)) {
      keyframes.push(TOTAL_SCRUB_FRAMES - 1);
    }

    let loadedKeyframes = 0;
    keyframes.forEach(k => {
      const img = new Image();
      img.src = getFrameUrl(k);
      img.onload = () => {
        if (!active) return;
        imagesRef.current[k] = img;
        loadedKeyframes++;
        if (loadedKeyframes === keyframes.length) {
          // 3. Fill in all remaining frames
          for (let i = 1; i < TOTAL_SCRUB_FRAMES; i++) {
            if (!imagesRef.current[i]) {
              const fillImg = new Image();
              fillImg.src = getFrameUrl(i);
              fillImg.onload = () => {
                if (!active) return;
                imagesRef.current[i] = fillImg;
              };
            }
          }
        }
      };
    });

    return () => {
      active = false;
    };
  }, [drawFrame]);

  // Butter-smooth lerp loop
  useEffect(() => {
    const loop = () => {
      const target = targetFrameRef.current;
      const current = currentRenderedFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.01) {
        currentRenderedFrameRef.current = current + diff * 0.22;
        const frameToDraw = Math.min(TOTAL_SCRUB_FRAMES - 1, Math.max(0, Math.round(currentRenderedFrameRef.current)));
        if (frameToDraw !== lastDrawnIndexRef.current) {
          drawFrame(frameToDraw);
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  // Scroll listener
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

      // Scrub frames 010 -> 151 across 0.0 to 0.60
      const scrubPhase = Math.min(1, clamped / 0.60);
      targetFrameRef.current = scrubPhase * (TOTAL_SCRUB_FRAMES - 1);

      const complete = clamped >= 0.55;
      onScrollProgress(clamped, complete);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollProgress]);

  // Scroll down trigger
  const handleScrollDownClick = () => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (scrollableDistance * 0.68);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  // Fade out intro solid navy cover & center logo quickly as user begins to scroll down
  const introCoverOpacity = Math.max(0, 1 - scrollProgress * 12.0);

  // Scroll Down Indicator: Appears when loaded, stays visible during frame scroll, fades out as hero docks
  const scrollDownOpacity = !isLoaded 
    ? 0 
    : scrollProgress >= 0.52 
      ? 0 
      : Math.max(0, 1 - Math.max(0, (scrollProgress - 0.44) / 0.08));

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative w-full"
      style={{ height: '320vh' }}
    >
      {/* Sticky Fullscreen Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#030810]">
        {/* The 3D Video Scrub Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Ambient Maritime Vignette */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-radial-[circle_at_center,transparent_50%,rgba(3,8,16,0.6)_100%]" />

        {/* =========================================================================
            CENTER INTRO & LOADING PRESENTATION (Solid Deep Navy Background)
            Matches user requirement: Center large logo, rapid zoom-in zoom-out during loading,
            fade out smoothly as scrolling begins to reveal ship frames.
           ========================================================================= */}
        <div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[#050D1A] transition-opacity duration-500"
          style={{ 
            opacity: introCoverOpacity,
            pointerEvents: introCoverOpacity > 0.05 ? 'auto' : 'none'
          }}
        >
          {/* Ambient Maritime Glow */}
          <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,rgba(0,180,216,0.12)_0%,transparent_70%]" />

          <div className="relative flex flex-col items-center max-w-xl">
            {/* Center Animated Logo (Enlarged per user instruction) */}
            <div className="relative mb-6">
              <div 
                className={`w-64 sm:w-80 md:w-96 max-w-full h-auto drop-shadow-[0_20px_50px_rgba(0,180,216,0.35)] transition-transform duration-300 ${
                  !isLoaded ? 'animate-fast-zoom' : 'animate-float-gentle'
                }`}
              >
                <img 
                  src="/Logo.png" 
                  alt="Won Shipping Agencies" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Water Wave Glow Beneath Ship */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-sm rounded-full animate-pulse" />
            </div>

            {/* Subtext / Status Pill */}
            {!isLoaded ? (
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full liquid-glass-dock border border-cyan-400/30">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-heading font-semibold tracking-widest text-cyan-200 uppercase">
                  INITIALIZING MARITIME FLEET...
                </span>
              </div>
            ) : (
              <div className="liquid-glass-dock px-5 py-2 rounded-full inline-flex items-center gap-2.5 border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase font-heading">
                  FCL & NVOCC Representative • Multimodal Logistics
                </span>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            RIGHT-SIDE CENTER: CLEAN PROMINENT "SCROLL DOWN" INDICATOR (No bulky glass card)
            Requested by user: Larger icon and text, smooth vertical movement, prominent,
            shown only when loaded, stays visible during frame scroll, disappears when hero arrives.
           ========================================================================= */}
        {isLoaded && scrollProgress < 0.52 && (
          <div 
            onClick={handleScrollDownClick}
            className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 pointer-events-auto cursor-pointer group transition-opacity duration-300 flex flex-col items-center gap-3 select-none"
            style={{ 
              opacity: scrollDownOpacity,
              pointerEvents: scrollDownOpacity > 0.05 ? 'auto' : 'none'
            }}
            title="Scroll Down to Explore Fleet & Services"
          >
            <div className="flex flex-col items-center gap-2.5 animate-scroll-down-float group-hover:scale-110 transition-transform duration-300">
              {/* Sleek Mouse Icon with Animated Scrolling Wheel */}
              <div className="relative w-8 h-14 rounded-full border-2 border-white/80 group-hover:border-amber-400 transition-colors flex justify-center pt-2 shadow-[0_0_20px_rgba(0,180,216,0.25)]">
                {/* Animated Wheel Dot sliding down */}
                <div className="w-1.5 h-3 rounded-full bg-amber-400 animate-mouse-wheel shadow-[0_0_8px_#F59E0B]" />
              </div>

              {/* Downward Chevrons */}
              <div className="flex flex-col items-center -space-y-1.5">
                <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
                <ChevronDown className="w-5 h-5 text-amber-400/80 animate-bounce -mt-2" style={{ animationDelay: '150ms' }} />
              </div>

              {/* Bold Prominent "SCROLL DOWN" Text */}
              <div className="flex flex-col items-center leading-tight">
                <span className="font-heading font-extrabold text-xs sm:text-[13px] tracking-[0.28em] uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-amber-300 transition-colors">
                  SCROLL
                </span>
                <span className="font-heading font-extrabold text-xs sm:text-[13px] tracking-[0.28em] uppercase text-cyan-300 drop-shadow-[0_0_12px_rgba(0,180,216,0.6)] group-hover:text-amber-400 transition-colors mt-0.5">
                  DOWN
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            DOCKED HERO SECTION (Frame 151 Reached at completion of scroll)
            Background is Frame 151, restored rich navy backdrop, ample top padding so header NEVER overlaps!
           ========================================================================= */}
        {/* =========================================================================
            DOCKED HERO SECTION (Frame 151 Reached at completion of scroll)
            User requested:
            1. Dark opacity overlay must NOT slide up from bottom like a sheet; it fades in
               smoothly across the whole screen.
            2. Content has ample top padding (pt-28 sm:pt-32 md:pt-36) so top badge and heading
               never overlap or go behind the taller header!
           ========================================================================= */}
        {/* 1. Static Full-Screen Dark Navy Atmosphere Overlay (Zero Blur - Consistent Opacity as requested) */}
        <div 
          className={`absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none ${
            scrollProgress > 0.50 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.48) / 0.12))
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/95 via-[#050D1A]/65 to-[#050D1A]/35" />
        </div>

        {/* 2. Docked Hero Content Grid (Smooth Subtle Fade & Gentle Reveal with generous top clearance) */}
        <div 
          className={`absolute inset-0 z-20 flex flex-col justify-start px-4 md:px-12 transition-all duration-700 ${
            scrollProgress > 0.50
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.50) / 0.12)),
            transform: `translateY(${Math.max(0, (1 - Math.min(1, Math.max(0, (scrollProgress - 0.50) / 0.12))) * 12)}px)`
          }}
        >
          {/* Inner Content Grid with generous top spacing below header as requested */}
          <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 flex flex-col justify-between h-full">
            <div className="max-w-3xl">
              {/* Badge (Open clearance below header line) */}
              <div className="inline-flex items-center gap-2.5 liquid-glass-dock px-3.5 py-1.5 rounded-full mb-3 sm:mb-3.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-amber-300 uppercase font-heading">
                  FCL & NVOCC Representative
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-[11px] sm:text-xs text-cyan-300 font-medium hidden sm:inline">
                  Licensed Multimodal Operator
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-2.5 sm:mb-3">
                Moving the World <br />
                <span className="text-gradient-gold">Forward</span> with Precision
              </h1>

              {/* Subheading */}
              <p className="text-slate-200 text-xs sm:text-sm md:text-base font-body leading-relaxed mb-3.5 sm:mb-4 max-w-2xl font-light drop-shadow line-clamp-2 sm:line-clamp-none">
                Won Shipping Agencies proudly leads maritime logistics as a premier FCL and NVOCC representative, international freight forwarder, and multimodal operator strategically based in Pakistan.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <button
                  onClick={onOpenQuote}
                  className="liquid-glass-btn-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all"
                >
                  <Zap className="w-4 h-4" />
                  <span>Request Instant Freight Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="liquid-glass-btn-ocean px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer hover:border-cyan-400/50 transition-all"
                >
                  <Compass className="w-4 h-4 text-cyan-300" />
                  <span>Explore Services</span>
                </button>

                <button
                  onClick={onOpenTracker}
                  className="liquid-glass-dock hover:border-cyan-400 px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 hover:text-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Track Cargo</span>
                </button>
              </div>
            </div>

            {/* 4 Floating Liquid Glass Metric Cards (Spaced above bottom arrow) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-2">
              <div className="liquid-glass-dock rounded-2xl p-3 sm:p-3.5 flex items-start gap-3 border border-white/20">
                <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/25 shrink-0">
                  <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-white">120+</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Global Ports Network</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-2xl p-3 sm:p-3.5 flex items-start gap-3 border border-white/20">
                <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-400/25 shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-amber-300">TIR Carnet</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Central Asia Road Link</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-2xl p-3 sm:p-3.5 flex items-start gap-3 border border-white/20">
                <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-400/25 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-white">Licensed</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">NVOCC & Custom Broker</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-2xl p-3 sm:p-3.5 flex items-start gap-3 border border-white/20">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-400/25 shrink-0">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-white">24 / 7</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Port Dispatch & Tracking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Downward Scroll Arrow touching bottom edge as requested */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-30 flex justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('container-reveal');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="liquid-glass-dock hover:border-amber-400/50 p-2 rounded-full text-slate-300 hover:text-white transition-all cursor-pointer animate-bounce shadow-md"
              title="Scroll to 3D Container Reveal"
            >
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
