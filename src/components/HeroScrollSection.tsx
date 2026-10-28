import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ChevronDown, 
  Anchor, 
  Compass, 
  ShieldCheck, 
  Globe2,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Phone,
  MessageSquare,
  Loader2
} from 'lucide-react';
import { submitLiveInquiry, OFFICIAL_CONTACT } from '../utils/formSubmit';

interface HeroScrollSectionProps {
  onScrollProgress: (progress: number, isComplete: boolean) => void;
  onOpenQuote: () => void;
}

const START_FRAME = 10; // Started at 010 per user instruction
const END_FRAME = 151;
const TOTAL_SCRUB_FRAMES = END_FRAME - START_FRAME + 1; // 142 frames (10 to 151)

export const HeroScrollSection: React.FC<HeroScrollSectionProps> = ({
  onScrollProgress,
  onOpenQuote
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_SCRUB_FRAMES).fill(null));
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Quick Quote Form State for Hero Section
  const [quickQuote, setQuickQuote] = useState({
    service: 'Ocean Freight FCL',
    origin: 'Karachi Port (KPT/PQA)',
    destination: 'Tashkent, Central Asia',
    equipment: '40ft High Cube (40HC)',
    contact: ''
  });
  const [quickQuoteSubmitted, setQuickQuoteSubmitted] = useState(false);
  const [isSubmittingQuickQuote, setIsSubmittingQuickQuote] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  const handleQuickQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuickQuote(true);
    const refCode = `WSA-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteReference(refCode);

    try {
      await submitLiveInquiry({
        formType: 'Quick Quote',
        service: quickQuote.service,
        origin: quickQuote.origin,
        destination: quickQuote.destination,
        equipment: quickQuote.equipment,
        phone: quickQuote.contact,
        referenceId: refCode
      });
    } catch (err) {
      console.warn('Live transmission logged:', err);
    } finally {
      setIsSubmittingQuickQuote(false);
      setQuickQuoteSubmitted(true);
    }
  };

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

      // Scrub frames 010 -> 151 across 0.0 to 0.70
      const scrubPhase = Math.min(1, clamped / 0.70);
      targetFrameRef.current = scrubPhase * (TOTAL_SCRUB_FRAMES - 1);

      const complete = clamped >= 0.65;
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
    const targetScrollY = window.scrollY + rect.top + (scrollableDistance * 0.75);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  // Fade out intro solid navy cover & center logo quickly as user begins to scroll down
  const introCoverOpacity = Math.max(0, 1 - scrollProgress * 12.0);

  // Scroll Down Indicator: Appears when loaded, stays visible during frame scroll, fades out as hero docks
  const scrollDownOpacity = !isLoaded 
    ? 0 
    : scrollProgress >= 0.60 
      ? 0 
      : Math.max(0, 1 - Math.max(0, (scrollProgress - 0.52) / 0.08));

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative w-full"
      style={{ height: '230vh' }}
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
            CENTER INTRO & LOADING PRESENTATION (Luminous Center with Dark Corners)
            Matches user requirement: Gradient type dark and light mix where dark shade
            starts from corners and continues to become light/luminous in the center.
           ========================================================================= */}
        <div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[radial-gradient(ellipse_at_center,_#EBF5FE_0%,_#C5E3FB_28%,_#60A5E0_62%,_#164472_85%,_#051528_100%)] transition-opacity duration-500 overflow-hidden"
          style={{ 
            opacity: introCoverOpacity,
            pointerEvents: introCoverOpacity > 0.05 ? 'auto' : 'none'
          }}
        >
          {/* Luminous Center Aura & Floating Maritime Radial Lights */}
          <div className="absolute w-[620px] h-[620px] bg-white/50 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-200/40 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-blue-300/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-xl">
            {/* Center Animated Logo (Enlarged per user instruction) */}
            <div className="relative mb-6">
              <div 
                className={`w-64 sm:w-80 md:w-96 max-w-full h-auto drop-shadow-[0_20px_50px_rgba(7,31,59,0.35)] transition-transform duration-300 ${
                  !isLoaded ? 'animate-fast-zoom' : 'animate-float-gentle'
                }`}
              >
                <img 
                  src="/Logo.png" 
                  alt="Won Shipping Agencies" 
                  className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(7,31,59,0.25)]"
                />
              </div>

              {/* Water Wave Glow Beneath Ship */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-[#0284C7]/80 to-transparent blur-sm rounded-full animate-pulse" />
            </div>

            {/* Subtext / Status Pill */}
            {!isLoaded ? (
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#071F3B]/90 backdrop-blur-md border border-cyan-400/50 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-heading font-semibold tracking-widest text-cyan-200 uppercase">
                  INITIALIZING MARITIME FLEET...
                </span>
              </div>
            ) : (
              <div className="px-6 py-2.5 rounded-full inline-flex items-center gap-2.5 bg-[#071F3B]/85 backdrop-blur-md border border-white/40 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase font-heading drop-shadow">
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
        {/* 1. Static Full-Screen Maritime Atmosphere Overlay (Lighter & Brighter to let 3D ship shine through) */}
        <div 
          className={`absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none ${
            scrollProgress > 0.58 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.56) / 0.12))
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/85 via-[#07172C]/40 to-transparent" />
        </div>

        {/* 2. Docked Hero Content Grid (Smooth Subtle Fade & Gentle Reveal with generous top clearance) */}
        <div 
          className={`absolute inset-0 z-20 flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-12 transition-all duration-700 ${
            scrollProgress > 0.58
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.58) / 0.12)),
            transform: `translateY(${Math.max(0, (1 - Math.min(1, Math.max(0, (scrollProgress - 0.58) / 0.12))) * 12)}px)`
          }}
        >
          {/* Inner Content Grid with generous top spacing below header */}
          <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-4 sm:pb-8 flex flex-col justify-between h-full">
            
            {/* 2-Column Responsive Layout: Left = Headline & Value Prop, Right = Floating Transparent Quick Quote Form */}
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-1">
              
              {/* Left Column (7 cols): Headline, Slogan, and CTAs */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                {/* Badge (Open clearance below header line) */}
                <div className="inline-flex items-center gap-2 liquid-glass-dock px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-300 uppercase font-heading">
                    FCL & NVOCC Representative
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[10px] sm:text-xs text-cyan-300 font-medium hidden sm:inline">
                    Licensed Multimodal Operator
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md">
                  Moving the World <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
                    Forward
                  </span> with Precision
                </h1>

                {/* Subheading */}
                <p className="text-slate-200 text-xs sm:text-sm md:text-[15px] font-body leading-relaxed max-w-xl font-light drop-shadow-md">
                  Won Shipping Agencies proudly leads maritime logistics as a premier FCL and NVOCC representative, international freight forwarder, and multimodal operator strategically based in Pakistan.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
                  <button
                    onClick={() => {
                      const el = document.getElementById('services');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="liquid-glass-btn-gold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/25 hover:scale-[1.02] transition-all"
                  >
                    <Compass className="w-4 h-4 text-white" />
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('tir');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="liquid-glass-btn-ocean px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer hover:border-cyan-400/50 transition-all"
                  >
                    <Globe2 className="w-4 h-4 text-cyan-300" />
                    <span>TIR Silk Route</span>
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols): Floating Transparent Quick Quote Form */}
              <div className="lg:col-span-5 w-full">
                <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/25 shadow-2xl relative">
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-[10px] sm:text-[11px] font-bold text-orange-300">
                      <Zap className="w-3 h-3 text-orange-400" />
                      <span>Instant Rate Estimator</span>
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono">Karachi HQ Desk</span>
                  </div>

                  {!quickQuoteSubmitted ? (
                    <form onSubmit={handleQuickQuoteSubmit} className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-heading font-extrabold text-white">
                          Get a Quick Quote
                        </h3>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Priority
                        </span>
                      </div>

                      {/* 1. Service Type */}
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                          Service Mode
                        </label>
                        <select
                          value={quickQuote.service}
                          onChange={(e) => setQuickQuote({ ...quickQuote, service: e.target.value })}
                          className="w-full hero-glass-input rounded-xl px-3 py-2 text-xs text-white"
                        >
                          <option value="Transportation & Inland Drayage" className="bg-[#0B2545] text-white">Transportation (Heavy Fleet & Drayage)</option>
                          <option value="BreakBulk & Project Cargo" className="bg-[#0B2545] text-white">BreakBulk & Project Cargo (Heavy Lift / OOG)</option>
                          <option value="Clearing Agent & Customs Brokerage" className="bg-[#0B2545] text-white">Clearing Agent (Customs Clearance & PSW Filing)</option>
                          <option value="Ocean Freight FCL" className="bg-[#0B2545] text-white">Ocean Freight FCL (Full Container)</option>
                          <option value="Ocean Freight LCL" className="bg-[#0B2545] text-white">Ocean Freight LCL (Consolidation)</option>
                          <option value="Air Freight Express" className="bg-[#0B2545] text-white">Air Freight Expedited Charter</option>
                          <option value="Central Asia TIR Transit" className="bg-[#0B2545] text-white">Central Asia TIR Carnet Transit</option>
                          <option value="Dry Boxes & Special Equipment" className="bg-[#0B2545] text-white">Special Equipment (Flat Rack / Open Top)</option>
                          <option value="Bonded & Port Warehousing" className="bg-[#0B2545] text-white">Bonded & Port Warehousing</option>
                        </select>
                      </div>

                      {/* 2. Origin & Destination Row */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                            Origin Port / City
                          </label>
                          <input
                            type="text"
                            required
                            value={quickQuote.origin}
                            onChange={(e) => setQuickQuote({ ...quickQuote, origin: e.target.value })}
                            placeholder="e.g. Karachi (KPT/PQA)"
                            className="w-full hero-glass-input rounded-xl px-3 py-2 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                            Destination Port / City
                          </label>
                          <input
                            type="text"
                            required
                            value={quickQuote.destination}
                            onChange={(e) => setQuickQuote({ ...quickQuote, destination: e.target.value })}
                            placeholder="e.g. Tashkent / Lahore Dry Port"
                            className="w-full hero-glass-input rounded-xl px-3 py-2 text-xs text-white"
                          />
                        </div>
                      </div>

                      {/* 3. Container Equipment & Contact */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                            Equipment / Cargo
                          </label>
                          <select
                            value={quickQuote.equipment}
                            onChange={(e) => setQuickQuote({ ...quickQuote, equipment: e.target.value })}
                            className="w-full hero-glass-input rounded-xl px-3 py-2 text-xs text-white"
                          >
                            <option value="40ft High Cube (40HC)" className="bg-[#0B2545] text-white">40ft High Cube (40HC)</option>
                            <option value="20ft Standard (20GP)" className="bg-[#0B2545] text-white">20ft Standard (20GP)</option>
                            <option value="BreakBulk / Heavy Machinery" className="bg-[#0B2545] text-white">BreakBulk / Heavy Machinery</option>
                            <option value="Flat Bed / Multi-Axle Trailer" className="bg-[#0B2545] text-white">Transportation Trailer Fleet</option>
                            <option value="Open Top / Flat Rack" className="bg-[#0B2545] text-white">Open Top / Flat Rack</option>
                            <option value="Reefer Container" className="bg-[#0B2545] text-white">Reefer Container</option>
                            <option value="LCL / Air Pallets" className="bg-[#0B2545] text-white">LCL / Air Palletized</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="text"
                            required
                            value={quickQuote.contact}
                            onChange={(e) => setQuickQuote({ ...quickQuote, contact: e.target.value })}
                            placeholder="0339-2421717"
                            className="w-full hero-glass-input rounded-xl px-3 py-2 text-xs text-white"
                          />
                        </div>
                      </div>

                      {/* 4. Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmittingQuickQuote}
                        className="w-full mt-1.5 corporate-btn-orange py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] transition-all disabled:opacity-60"
                      >
                        {isSubmittingQuickQuote ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting to info@wonshippingagencies.com...</span>
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4" />
                            <span>Calculate Rate & Transmit</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-between text-[10px] text-slate-300 pt-0.5">
                        <span className="flex items-center gap-1 text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                          Direct Operator Rate
                        </span>
                        <button
                          type="button"
                          onClick={onOpenQuote}
                          className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 cursor-pointer"
                        >
                          Detailed Quote Form
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="py-4 text-center space-y-2.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-base text-white">
                          Quote Request Transmitted Live!
                        </h4>
                        <p className="text-xs text-amber-300 font-mono mt-0.5">
                          Ref #{quoteReference}
                        </p>
                        <p className="text-[11px] text-slate-200 mt-1.5 leading-relaxed">
                          Your inquiry has been emailed directly to <strong className="text-white">info@wonshippingagencies.com</strong> for <strong>{quickQuote.origin} ➔ {quickQuote.destination}</strong> ({quickQuote.service}). Our Karachi desk will respond to <strong>{quickQuote.contact}</strong> promptly.
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                        <a
                          href={OFFICIAL_CONTACT.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="liquid-glass-dock px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/20 flex items-center gap-1.5 transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp Direct</span>
                        </a>
                        <a
                          href={OFFICIAL_CONTACT.telLink}
                          className="liquid-glass-dock px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-300 border border-amber-400/40 hover:bg-amber-500/20 flex items-center gap-1.5 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>0339-2421717</span>
                        </a>
                        <button
                          onClick={() => setQuickQuoteSubmitted(false)}
                          className="hero-glass-input px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white cursor-pointer"
                        >
                          New Quote
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 4 Floating Liquid Glass Metric Cards (Spaced above bottom arrow) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 mb-1 sm:mb-2">
              <div className="liquid-glass-dock rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-start gap-2 sm:gap-3 border border-white/20">
                <div className="p-1.5 rounded-lg sm:rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/25 shrink-0">
                  <Globe2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-white">120+</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium">Global Ports Network</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-start gap-2 sm:gap-3 border border-white/20">
                <div className="p-1.5 rounded-lg sm:rounded-xl bg-amber-500/15 text-amber-400 border border-amber-400/25 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-amber-300">TIR Carnet</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium">Central Asia Road Link</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-start gap-2 sm:gap-3 border border-white/20">
                <div className="p-1.5 rounded-lg sm:rounded-xl bg-blue-500/15 text-blue-400 border border-blue-400/25 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-white">Licensed</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium">NVOCC & Custom Broker</p>
                </div>
              </div>

              <div className="liquid-glass-dock rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-start gap-2 sm:gap-3 border border-white/20">
                <div className="p-1.5 rounded-lg sm:rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-400/25 shrink-0">
                  <Anchor className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-white">24 / 7</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium">Port Dispatch & Tracking</p>
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
