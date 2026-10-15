import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Ship, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CargoTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CargoTrackerModal: React.FC<CargoTrackerModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('WSA-98214-PK');
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-slate-950/85 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="liquid-glass-card rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 border border-white/20 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full liquid-glass-pill text-slate-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl liquid-glass-dock flex items-center justify-center text-cyan-400 border border-cyan-400/30">
            <Ship className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Won Shipping Live Cargo Tracker
            </h3>
            <p className="text-xs text-slate-400 font-light">
              Real-time container & Bill of Lading (B/L) tracking across global sea lines & TIR corridors
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 sm:gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Container Number or B/L (e.g. WSA-98214-PK, MSKU-81923)..."
              className="w-full liquid-glass-input rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-mono"
            />
          </div>
          <button
            type="submit"
            className="liquid-glass-btn-gold px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Track</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Tracking Result View */}
        {hasSearched && (
          <div className="space-y-6">
            {/* Status Summary Banner */}
            <div className="p-5 rounded-2xl liquid-glass-dock border border-cyan-400/30 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Vessel Underway • On Schedule
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-mono">
                  {query.toUpperCase()} • 40ft High Cube Dry
                </h4>
                <p className="text-xs text-slate-300 font-light">
                  Carrier: <strong className="text-white">Won Shipping Line (NVOCC)</strong> | Vessel: <strong className="text-cyan-300">M/V WON ENTERPRISE (IMO 948210)</strong>
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-slate-400 block font-light">Estimated Port Arrival</span>
                <span className="text-base font-bold text-amber-400 font-mono">OCT 18, 2026 • 14:00 PKT</span>
                <span className="text-[11px] text-emerald-400 block">Berth Confirmed</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="liquid-glass-pill rounded-xl p-3 text-center">
                <span className="text-[10px] text-slate-400 uppercase block">Current Speed</span>
                <span className="text-sm font-bold text-white font-mono">18.6 knots</span>
              </div>
              <div className="liquid-glass-pill rounded-xl p-3 text-center">
                <span className="text-[10px] text-slate-400 uppercase block">Coordinates</span>
                <span className="text-sm font-bold text-cyan-300 font-mono">24.86° N, 66.98° E</span>
              </div>
              <div className="liquid-glass-pill rounded-xl p-3 text-center">
                <span className="text-[10px] text-slate-400 uppercase block">Destination Port</span>
                <span className="text-sm font-bold text-white font-mono">Karachi (KICT)</span>
              </div>
              <div className="liquid-glass-pill rounded-xl p-3 text-center">
                <span className="text-[10px] text-slate-400 uppercase block">Customs Status</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">Pre-Cleared (PSW)</span>
              </div>
            </div>

            {/* Milestone Timeline */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
                Transit Milestone History
              </h5>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:via-cyan-400 before:to-slate-700">
                {/* Milestone 1 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-950 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-slate-950" />
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-bold text-white">Cargo Loaded & Port Departure</p>
                    <span className="text-[11px] font-mono text-slate-400">Oct 10, 2026 - 19:30</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light">Origin Port • Container sealed with High-Security Bolt Seal #WSA-88319</p>
                </div>

                {/* Milestone 2 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-950 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-slate-950" />
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-bold text-white">Deep Sea Ocean Passage</p>
                    <span className="text-[11px] font-mono text-slate-400">Oct 12, 2026 - 08:15</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light">Arabian Sea Corridor • Navigating direct course at optimal fuel efficiency</p>
                </div>

                {/* Milestone 3 (Current) */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-950 animate-pulse" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-bold text-cyan-300">Approaching Karachi Outer Anchorage</p>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">Current Position</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-light">Vessel pilot scheduled for berth entry at Karachi Port Trust (KPT)</p>
                </div>

                {/* Milestone 4 (Pending) */}
                <div className="relative opacity-60">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-900" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-300">Customs Clearance & Truck Dispatch</p>
                    <span className="text-[11px] font-mono text-slate-500">Oct 19, 2026</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-light">Door Delivery inland via Won Shipping transport fleet or TIR to Central Asia</p>
                </div>
              </div>
            </div>

            {/* Direct Assistance CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified by Pakistan Port Authority & Won Shipping Agency</span>
              </div>
              <a 
                href="mailto:Anas@wonshippingagencies.com?subject=Tracking Inquiry for WSA-98214-PK"
                className="liquid-glass-pill hover:border-amber-400 px-4 py-2 rounded-xl text-xs font-semibold text-amber-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Need Detailed Cargo Manifest?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
