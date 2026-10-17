import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  Plane, 
  Anchor, 
  Container, 
  FileCheck, 
  Truck, 
  Globe2, 
  Warehouse, 
  CheckCircle2, 
  Layers,
  ChevronDown
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  highlights: string[];
  specs: string[];
}

interface CinematicServices3DProps {
  onActiveChange?: (isActive: boolean) => void;
}

const TOTAL_FRAMES = 82; // 000 to 081

export const CinematicServices3D: React.FC<CinematicServices3DProps> = ({ onActiveChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetFrameRef = useRef(0);
  const currentRenderedFrameRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const rafIdRef = useRef<number | null>(null);
  const wasActiveRef = useRef(false);

  const services: ServiceItem[] = [
    {
      id: 'freight-forwarding',
      number: '01',
      title: 'Global Freight Forwarding',
      tagline: 'Dual Expertise in Air & Ocean Cargo Across 120+ Ports',
      image: '/images/freight_forwarding.jpg',
      icon: Plane,
      badge: 'Air & Sea Multimodal',
      description: 'Comprehensive air and ocean freight forwarding connecting Pakistan to major global trade lanes. Tailored routing minimizing layovers, transit times, and demurrage.',
      highlights: [
        'Global FCL & LCL Consolidation across 120+ ports',
        'Expedited Air Freight charters & scheduled cargo flights',
        'Full end-to-end B/L documentation & cargo insurance'
      ],
      specs: ['Mode: Air & Sea', 'Network: 120+ Ports', 'Capacity: LCL to Full Vessel Charter']
    },
    {
      id: 'agency-representation',
      number: '02',
      title: 'Agency Representation',
      tagline: 'Reliable Ally to Global Principals & Shipping Lines',
      image: '/images/agency_representation.jpg',
      icon: Anchor,
      badge: 'NVOCC & Line Agency',
      description: 'Serving as a trusted ally for international shipping lines and NVOCCs. Providing expert husbanding, berth coordination, and proactive marketing dynamics.',
      highlights: [
        'Cargo booking, vessel coordination & berth allocation',
        'Liaison between shipowners, charterers & cargo interests',
        'In-depth mastery of local Pakistani port regulations'
      ],
      specs: ['Focus: Shipping Lines & Owners', 'Ports: Karachi & Port Qasim', 'Husbandry: 24/7 Operations']
    },
    {
      id: 'special-equipment',
      number: '03',
      title: 'Dry Boxes & Special Equipment',
      tagline: 'Empowering Pakistan’s Heavy & Oversized Export Trade',
      image: '/images/special_equipment.jpg',
      icon: Container,
      badge: 'Project & Out-Of-Gauge',
      description: 'Extensive inventory of high-cube dry boxes, flat racks, and open-top containers engineered to transport project cargo, machinery, and breakbulk safely.',
      highlights: [
        'High-cube dry boxes (20ft, 40ft, 45ft HC)',
        'Flat racks & open tops for oversized breakbulk',
        'Certified cargo lashing & weight distribution'
      ],
      specs: ['Inventory: Dry, Open Top, Flat Rack', 'Cargo: Heavy Lift & Machinery', 'Standard: ISO Certified']
    },
    {
      id: 'custom-clearance',
      number: '04',
      title: 'Custom Clearance & Compliance',
      tagline: 'Zero Delays, Precise Tariff Classification & PSW Filing',
      image: '/images/custom_clearance.jpg',
      icon: FileCheck,
      badge: 'Licensed Customs Broker',
      description: 'Authorized customs brokerage delivering frictionless import and export clearance across all Pakistani seaports, air freight units, and dry ports.',
      highlights: [
        'Licensed customs brokerage at all Pakistani seaports & airports',
        'HS code classification, duty exemption & tax optimization',
        'Direct automated Pakistan Single Window (PSW) filing'
      ],
      specs: ['System: Pakistan Single Window (PSW)', 'Turnaround: 24–48 Hours', 'Compliance: 100% Audit-Proof']
    },
    {
      id: 'transportation',
      number: '05',
      title: 'Inland Transportation & Fleet',
      tagline: 'Diverse Heavy Fleet with Real-Time Satellite GPS',
      image: '/images/transportation.jpg',
      icon: Truck,
      badge: 'Nationwide Drayage',
      description: 'Dedicated fleet of modern prime movers, multi-axle trailers, and chassis delivering seamless overland transport from port terminals to industrial hubs.',
      highlights: [
        'Prime movers, multi-axle trailers & container chassis',
        'Long-haul transit from Karachi to upcountry dry ports',
        '24/7 Satellite GPS tracking & route monitoring'
      ],
      specs: ['Fleet: Prime Movers & Heavy Trailers', 'Coverage: Nationwide Pakistan', 'Tracking: 24/7 Satellite GPS']
    },
    {
      id: 'door-to-door',
      number: '06',
      title: 'Door-to-Door & Central Asia TIR',
      tagline: 'Direct Overland Silk Road Link via TIR Carnet Conventions',
      image: '/images/door_to_door.jpg',
      icon: Globe2,
      badge: 'TIR Carnet Corridor',
      description: 'Pivotal road connector linking Pakistan to Uzbekistan, Turkmenistan, and Kazakhstan with sealed, tamper-proof TIR transit bypassing multi-border customs delays.',
      highlights: [
        'Pick-up from remote factories to destination doors',
        'Direct TIR Carnet corridors across Central Asian borders',
        'Single-carrier accountability with sealed transit'
      ],
      specs: ['Territory: Pakistan ➔ Central Asia', 'Protocol: TIR Carnet Convention', 'Service: Door-to-Door']
    },
    {
      id: 'warehousing',
      number: '07',
      title: 'Bonded & Non-Bonded Warehousing',
      tagline: 'Strategic Port-Adjacent Facilities & International Consolidation',
      image: '/images/warehousing.jpg',
      icon: Warehouse,
      badge: 'Port-Adjacent Storage',
      description: 'Prime facilities situated within minutes of Karachi Port and Port Qasim berths. Providing secure bonded storage, inventory control, and consolidation.',
      highlights: [
        'Facilities adjacent to Karachi Port and Port Qasim berths',
        'Duty-deferred bonded warehousing for export consolidation',
        'Cross-docking, selective racking & 24/7 surveillance'
      ],
      specs: ['Type: Bonded & General Storage', 'Proximity: < 5km from Port Berths', 'Security: 24/7 CCTV & Guards']
    }
  ];

  // Helper to format frame path: 000 to 081
  const getFrameUrl = (index: number) => {
    const padded = String(index).padStart(3, '0');
    return `/3d_Cinematic/Cinematic_3D_animation_of_a_20261014012417_${padded}.webp`;
  };

  // Draw frame to canvas with object-fit: cover
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let closestDist = Infinity;
      let closestImg: HTMLImageElement | null = null;
      for (let i = 0; i < TOTAL_FRAMES; i++) {
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

  // Resize canvas according to device pixel ratio
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

  // Preload frames
  useEffect(() => {
    let active = true;

    // 1. Preload first frame immediately
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    frame0.onload = () => {
      if (!active) return;
      imagesRef.current[0] = frame0;
      drawFrame(0);

      // 2. Preload keyframes (every 4th)
      const keyframes: number[] = [];
      for (let i = 4; i < TOTAL_FRAMES; i += 4) {
        keyframes.push(i);
      }
      if (!keyframes.includes(TOTAL_FRAMES - 1)) {
        keyframes.push(TOTAL_FRAMES - 1);
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
            // 3. Fill in remaining frames
            for (let i = 1; i < TOTAL_FRAMES; i++) {
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
    };

    return () => {
      active = false;
    };
  }, [drawFrame]);

  // Smooth lerp frame loop (butter-smooth 60fps)
  useEffect(() => {
    const loop = () => {
      // 1. Smooth 3D Canvas Video Scrub
      const target = targetFrameRef.current;
      const current = currentRenderedFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.01) {
        currentRenderedFrameRef.current = current + diff * 0.22;
        const frameToDraw = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentRenderedFrameRef.current)));
        if (frameToDraw !== lastDrawnIndexRef.current) {
          drawFrame(frameToDraw);
        }
      }

      // 2. Smooth 60fps Card Interpolation (Eliminates mobile touch jitter & hitching!)
      const targetP = targetProgressRef.current;
      const currentP = currentProgressRef.current;
      const diffP = targetP - currentP;
      if (Math.abs(diffP) > 0.0003) {
        currentProgressRef.current = currentP + diffP * 0.22;
        setScrollProgress(currentProgressRef.current);
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  // Scroll listener to update progress and notify header visibility
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

      // Feed targets into RAF loop for butter-smooth decoupled 60fps interpolation
      targetProgressRef.current = clamped;
      targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);

      // User requirement: Header must hide BEFORE entering this section,
      // stay hidden throughout the 3D cinematic scrub, and unhide only when fully exited.
      const isEnteringOrActive = rect.top <= window.innerHeight * 0.85 && rect.bottom >= 120;
      if (isEnteringOrActive !== wasActiveRef.current) {
        wasActiveRef.current = isEnteringOrActive;
        onActiveChange?.(isEnteringOrActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onActiveChange]);

  // Compute active card index for HUD indicator
  const activeServiceIndex = Math.min(
    services.length - 1, 
    Math.max(0, Math.floor(scrollProgress * services.length))
  );

  return (
    <section 
      ref={containerRef}
      id="cinematic-services"
      className="relative w-full"
      style={{ height: '700vh' }} // 7 full viewport scrolls for 7 services
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#030810]">
        {/* 3D Cinematic Sunset Ship Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Ambient Dark Navy Vignette for Legibility */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#030810]/85 via-[#030810]/35 to-transparent" />
        <div className="absolute inset-0 pointer-events-none z-10 bg-radial-[circle_at_25%_50%,rgba(0,180,216,0.06)_0%,transparent_60%]" />

        {/* =========================================================================
            RIGHT-SIDE HUD: PROGRESS TRACKER (Shows current step 01-07 without obstructing ship)
           ========================================================================= */}
        <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 pointer-events-none">
          <div className="liquid-glass-dock py-4 px-3 rounded-2xl flex flex-col items-center gap-2.5 border border-white/15 shadow-xl">
            <span className="font-heading font-extrabold text-[10px] tracking-widest text-slate-400 uppercase">
              STEP
            </span>
            <span className="font-heading font-black text-sm text-amber-400">
              0{activeServiceIndex + 1}
            </span>
            <div className="w-4 h-[1px] bg-white/20 my-1" />
            <div className="flex flex-col gap-2">
              {services.map((_, i) => (
                <div 
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    i === activeServiceIndex 
                      ? 'h-6 bg-cyan-400 shadow-[0_0_10px_#00B4D8]' 
                      : i < activeServiceIndex 
                        ? 'h-2 bg-amber-400/70' 
                        : 'h-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <span className="font-heading font-bold text-[9px] text-slate-500">
              / 07
            </span>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM-RIGHT INSTRUCTION PILL (Discreet guide)
           ========================================================================= */}
        <div className="absolute bottom-4 right-4 sm:right-8 lg:right-10 z-20 pointer-events-none">
          <div className="liquid-glass-dock px-3.5 py-1 rounded-full flex items-center gap-2 border border-white/15 text-slate-300 text-[10px] sm:text-[11px] font-medium shadow-md">
            <span>Scroll through capabilities</span>
            <ChevronDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* =========================================================================
            TOP-LEFT HEADING: "Core Services" (Positioned at Top-Left corner where logo sits)
            Requested by user: Larger text, top-left placement, transparent background
           ========================================================================= */}
        <div className="absolute top-7 sm:top-9 md:top-10 left-4 sm:left-8 md:left-12 lg:left-16 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-2 font-heading font-extrabold text-[11px] sm:text-xs tracking-[0.28em] uppercase text-cyan-300 drop-shadow-[0_0_12px_rgba(0,180,216,0.6)] mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            CAPABILITIES & SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-tight">
            Core <span className="text-gradient-gold">Services</span>
          </h2>
        </div>

        {/* =========================================================================
            LEFT-CENTER SERVICE CARDS (Smooth 60fps GPU acceleration, responsive placement)
           ========================================================================= */}
        <div 
          className="absolute left-3 sm:left-6 md:left-12 lg:left-16 z-20 pointer-events-none"
          style={{ 
            width: 'min(420px, calc(100vw - 24px))', 
            top: 'calc(50% + 40px)',
            transform: 'translateY(-50%)'
          }}
        >
          {services.map((service, index) => {
            const total = services.length;
            const segment = 1 / total;
            const cardCenter = (index + 0.5) * segment;
            
            // Relative scroll offset for this specific card
            // rel = -1 when entering from below, 0 when centered, +1 when exiting above
            const rel = (scrollProgress - cardCenter) / (segment * 0.5);

            // Keep in DOM with visibility/opacity to eliminate mobile mounting stutter and image blink
            const isNear = Math.abs(rel) <= 1.25;
            const opacity = isNear ? Math.max(0, 1 - Math.pow(Math.abs(rel), 1.6)) : 0;
            const translateY = isNear ? -rel * 20 : (rel > 0 ? -25 : 25);
            const scale = isNear ? Math.max(0.96, 1 - Math.abs(rel) * 0.04) : 0.95;

            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="absolute inset-0 will-change-transform"
                style={{
                  opacity,
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                  visibility: opacity > 0.01 ? 'visible' : 'hidden',
                  pointerEvents: opacity > 0.6 ? 'auto' : 'none',
                  zIndex: index === activeServiceIndex ? 30 : 20
                }}
              >
                {/* Master Liquid Glass Service Card */}
                <div className="liquid-glass-dock rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/20 shadow-2xl backdrop-blur-xl">
                  {/* Top Row: Service Number Badge + Category */}
                  <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center font-heading font-black text-[10px] sm:text-xs">
                        {service.number}
                      </span>
                      <span className="font-heading font-bold text-[10px] sm:text-xs tracking-wider text-amber-300 uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-cyan-300/80 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-400/20">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      <span>{index + 1} of {total}</span>
                    </div>
                  </div>

                  {/* Compact Preview Image with Gradient Vignette */}
                  <div className="relative w-full h-14 sm:h-18 rounded-xl overflow-hidden mb-1.5 sm:mb-2 border border-white/15 shadow-inner group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/90 via-[#050D1A]/30 to-transparent" />
                    
                    {/* Floating Service Icon on Image */}
                    <div className="absolute bottom-1.5 left-2 p-1 sm:p-1.5 rounded-lg liquid-glass-dock border border-white/25 text-amber-400 shadow-md">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-sm sm:text-lg font-extrabold text-white font-heading leading-tight mb-0.5">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-[10px] sm:text-[11px] font-semibold text-cyan-300 mb-1 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed font-light mb-1.5 sm:mb-2 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1 mb-1.5 sm:mb-2">
                    {service.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-[9.5px] sm:text-[11px] text-slate-200 font-medium leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Specifications Pill Bar */}
                  <div className="pt-1.5 border-t border-white/10 flex flex-wrap gap-1">
                    {service.specs.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[8.5px] sm:text-[10px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>
    );
  };

