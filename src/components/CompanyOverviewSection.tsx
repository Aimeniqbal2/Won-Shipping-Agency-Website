import React from 'react';
import { Award, Compass, Shield, ArrowUpRight, TrendingUp } from 'lucide-react';

export const CompanyOverviewSection: React.FC = () => {
  return (
    <section id="overview" className="w-full relative overflow-hidden bg-gradient-to-b from-[#A7D3F7] via-[#91C7F5] to-[#B6DCF9] py-24 sm:py-28 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-white/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/55 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 bg-white/65 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

      {/* Section Header Badge */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
        <div className="corporate-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F97316]" />
          <span className="text-xs font-bold tracking-widest text-[#0B2545] uppercase font-heading">
            01 • COMPANY OVERVIEW
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight max-w-2xl font-heading">
          Evolving with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#0B2545]">Global Industry</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3 font-normal leading-relaxed">
          A strategic transformation from Won Line into an elite shipping agencies and multimodal supply chain powerhouse.
        </p>
      </div>

      {/* Main Grid: Story + Image Card */}
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Column: Story & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="corporate-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 relative overflow-hidden bg-white shadow-xl shadow-slate-200/40">
            {/* Top highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-[#F97316] to-[#0B2545]" />
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mb-4 font-heading">
              Rooted in Pakistan, Connected to the Oceans
            </h3>
            
            <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed mb-5 font-normal">
              <strong className="text-[#EA580C] font-bold">Won Shipping Agencies</strong> proudly leads the industry, excelling as an <span className="text-[#0B2545] font-semibold">FCL and NVOCC Representative</span>, <span className="text-[#0B2545] font-semibold">International Freight Forwarder</span>, and comprehensive logistics services provider, with its operational base strategically located in Pakistan.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              As the industry has evolved and grown significantly over time, <strong className="text-[#0284C7] font-semibold">Won Line</strong> has proactively aimed towards revitalizing the inter-organizational structure and formulated a new strategy that enhanced our shipping business, further enabling us to maintain a competitive edge.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-[#F97316] border-y border-r border-amber-200/60 mb-2">
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic font-medium">
                “We made a strategic decision to evolve into a fully-fledged shipping agencies under the same management, thereby upgrading our shipping license to meet the evolving demands of the industry.”
              </p>
            </div>
          </div>

          {/* 3 Pillars of Strategic Evolution */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="corporate-card rounded-2xl p-5 text-left border border-slate-200 bg-white shadow-sm hover:border-orange-400/50">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center mb-3 border border-orange-200">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B2545] mb-1">Upgraded License</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Full-fledged shipping agencies credential under veteran maritime management.
              </p>
            </div>

            <div className="corporate-card rounded-2xl p-5 text-left border border-slate-200 bg-white shadow-sm hover:border-sky-400/50">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 border border-sky-200">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B2545] mb-1">FCL & NVOCC</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Direct container contracts and multi-carrier capacity representation.
              </p>
            </div>

            <div className="corporate-card rounded-2xl p-5 text-left border border-slate-200 bg-white shadow-sm hover:border-blue-400/50">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-3 border border-blue-200">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B2545] mb-1">Dynamic Agility</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Proactive strategy navigating volatile global shipping markets with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Real PDF Visual Asset + Badges (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden corporate-card p-3 shadow-xl border border-slate-200/90 bg-white">
            {/* Real Port Image from PDF Page 3 */}
            <div className="relative h-96 sm:h-[460px] rounded-2xl overflow-hidden group">
              <img 
                src="/images/overview_port.jpg" 
                alt="Won Shipping Port Operations" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent opacity-85" />

              {/* Glass Badges floating over image */}
              <div className="absolute top-4 left-4 liquid-glass-dock px-3.5 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Karachi Gateway • Port Qasim & KICT</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 liquid-glass-dock rounded-2xl p-5 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider font-heading">
                    Strategic Gateway
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  Operational Base in Pakistan Connecting the Silk Route & Arabian Sea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
