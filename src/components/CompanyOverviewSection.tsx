import React from 'react';
import { Award, Compass, Shield, ArrowUpRight, TrendingUp } from 'lucide-react';

export const CompanyOverviewSection: React.FC = () => {
  return (
    <section id="overview" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header Badge */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-300 uppercase font-heading">
            01 • COMPANY OVERVIEW
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
          Evolving with the <span className="text-gradient-cyan">Global Industry</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          A strategic transformation from Won Line into an elite shipping agency and multimodal supply chain powerhouse.
        </p>
      </div>

      {/* Main Grid: Story + Image Card */}
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Column: Story & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
            {/* Top highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-blue-500" />
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 font-heading">
              Rooted in Pakistan, Connected to the Oceans
            </h3>
            
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-light">
              <strong className="text-amber-300 font-semibold">Won Shipping Agencies</strong> proudly leads the industry, excelling as an <span className="text-white font-medium">FCL and NVOCC Representative</span>, <span className="text-white font-medium">International Freight Forwarder</span>, and comprehensive logistics services provider, with its operational base strategically located in Pakistan.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              As industry has evolved and grown significantly over time, <strong className="text-cyan-300 font-medium">Won Line</strong> has proactively aimed towards revitalizing the inter-organizational structure and formulated a new strategy that enhanced our shipping business, further enabling us to maintain a competitive edge.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-2">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-light">
                “We made a strategic decision to evolve into a fully-fledged shipping agency under the same management, thereby upgrading our shipping license to meet the evolving demands of the industry.”
              </p>
            </div>
          </div>

          {/* 3 Pillars of Strategic Evolution */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="liquid-glass-card rounded-2xl p-5 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center mb-3 border border-amber-400/20">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Upgraded License</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Full-fledged shipping agency credential under veteran maritime management.
              </p>
            </div>

            <div className="liquid-glass-card rounded-2xl p-5 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/15 text-cyan-400 flex items-center justify-center mb-3 border border-cyan-400/20">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">FCL & NVOCC</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Direct container contracts and multi-carrier capacity representation.
              </p>
            </div>

            <div className="liquid-glass-card rounded-2xl p-5 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-400/15 text-blue-400 flex items-center justify-center mb-3 border border-blue-400/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Dynamic Agility</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Proactive strategy navigating volatile global shipping markets with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Real PDF Visual Asset + Badges (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden liquid-glass-card p-3 shadow-2xl">
            {/* Real Port Image from PDF Page 3 */}
            <div className="relative h-96 sm:h-[460px] rounded-2xl overflow-hidden group">
              <img 
                src="/images/overview_port.jpg" 
                alt="Won Shipping Port Operations" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent opacity-80" />

              {/* Glass Badges floating over image */}
              <div className="absolute top-4 left-4 liquid-glass-pill px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Karachi Gateway • Port Qasim & KICT</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 liquid-glass-dock rounded-2xl p-5 border border-white/20">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider font-heading">
                    Strategic Gateway
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  Operational Base in Pakistan Connecting the Silk Route & Arabian Sea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
