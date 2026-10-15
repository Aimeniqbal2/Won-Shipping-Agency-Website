import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  Compass, 
  Layers, 
  Globe2, 
  PhoneCall, 
  FileText,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  visible: boolean;
  onOpenTracker: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ visible, onOpenTracker, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'overview', 'vision', 'services', 'tir', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: 'About', icon: FileText },
    { id: 'vision', label: 'Vision', icon: Compass },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'tir', label: 'TIR Network', icon: Globe2 },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-4 md:top-5 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-700 pointer-events-none ${
          visible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-32 opacity-0'
        }`}
      >
        {/* Unified Combined Liquid Glass Header Bar (Height increased per user request: ~20-30px taller + enlarged logo) */}
        <div className="pointer-events-auto liquid-glass-dock rounded-2xl md:rounded-full px-4 sm:px-7 h-16 sm:h-[76px] flex items-center justify-between gap-3 sm:gap-6 shadow-2xl border border-white/15 backdrop-blur-2xl">
          
          {/* 1. Left Logo & Brand (Enlarged Ship Icon per user request) */}
          <div 
            onClick={() => scrollTo('home')}
            className="cursor-pointer flex items-center gap-3 sm:gap-3.5 group transition-all duration-300 hover:scale-[1.02] shrink-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <img 
                src="/logo icon.png" 
                alt="Won Shipping" 
                className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(0,180,216,0.4)]"
              />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-heading font-extrabold text-xs sm:text-base tracking-wider text-white group-hover:text-amber-400 transition-colors uppercase">
                WON SHIPPING
              </span>
              <span className="font-heading font-bold text-[9px] sm:text-[11px] tracking-[0.24em] text-cyan-300 uppercase mt-0.5">
                AGENCY
              </span>
            </div>
          </div>

          {/* 2. Center Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer h-10 sm:h-11 ${
                    isActive 
                      ? 'text-white bg-white/20 shadow-sm border border-white/25' 
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00B4D8]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Track Cargo Button */}
            <button
              onClick={onOpenTracker}
              className="hidden sm:flex items-center gap-2 px-4 sm:px-5 h-10 sm:h-11 rounded-full text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
              title="Track Container / BL"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Track Cargo</span>
            </button>

            {/* Request a Quote Button */}
            <button
              onClick={onOpenQuote}
              className="liquid-glass-btn-gold px-5 sm:px-6 h-10 sm:h-11 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 hover:scale-[1.03] transition-all"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Liquid Glass Overlay) */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 backdrop-blur-2xl bg-slate-950/80 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-24 left-4 right-4 liquid-glass-card rounded-3xl p-6 transition-all duration-500 ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center p-0.5">
                <img src="/logo icon.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-sm text-white">Won Shipping Navigation</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-white/10 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="liquid-glass-dock py-3 rounded-xl text-xs font-semibold text-center text-cyan-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Cargo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="liquid-glass-btn-gold py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
