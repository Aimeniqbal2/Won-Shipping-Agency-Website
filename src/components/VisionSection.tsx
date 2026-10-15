import React from 'react';
import { Sparkles, Eye, Cpu, Leaf, Handshake, CheckCircle2 } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Data-Driven Insights',
      desc: 'Harnessing modern maritime technology and predictive route modeling to optimize cargo transit cycles.',
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-400/50'
    },
    {
      icon: Leaf,
      title: 'Efficiency & Sustainability',
      desc: 'Commitment to streamlined multimodal logistics minimizing ecological footprint while accelerating delivery.',
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-400/50'
    },
    {
      icon: Handshake,
      title: 'Enduring Partnerships',
      desc: 'Building generational relationships with cargo owners, charterers, and shipping lines rooted in mutual triumph.',
      accent: 'text-amber-400',
      border: 'hover:border-amber-400/50'
    },
    {
      icon: Sparkles,
      title: 'Industry Transparency',
      desc: 'Setting uncompromised benchmarks in documentation precision, billing clarity, and live container visibility.',
      accent: 'text-blue-400',
      border: 'hover:border-blue-400/50'
    }
  ];

  return (
    <section id="vision" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header Badge */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase font-heading">
            02 • VISION & OUTLOOK
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
          Revolutionizing the <span className="text-gradient-gold">Global Supply Chain</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Reshaping maritime logistics by setting new industry standards in reliability, technology, and transparency.
        </p>
      </div>

      {/* Split Hero Card for Vision */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Visual: Real PDF Vision Ship Asset (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="h-full rounded-3xl overflow-hidden liquid-glass-card p-3 shadow-2xl flex flex-col">
            <div className="relative flex-1 min-h-[340px] rounded-2xl overflow-hidden group">
              <img 
                src="/images/vision_ship.jpg" 
                alt="Won Shipping Vision Vessel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4 liquid-glass-pill px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
                Global Horizons
              </div>

              <div className="absolute bottom-6 left-6 right-6 liquid-glass-dock rounded-2xl p-5 border border-white/20">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-heading mb-1">
                  Our Mission Statement
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  "To build enduring client relationships rooted in trust and mutual success through cutting-edge technology and data-driven insights."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Vision Statements (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 font-heading">
              Setting New Benchmarks in Maritime Transport
            </h3>
            
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-light">
              At <strong className="text-amber-300 font-semibold">Won Shipping Agencies</strong>, our vision is to revolutionize the global supply chain with innovative, customer-centric solutions that enhance efficiency and sustainability. We are dedicated to reshaping maritime logistics by setting new industry standards in reliability and transparency.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Through cutting-edge technology and data-driven insights, we aim to optimize the entire logistics workflow. Our commitment extends far beyond freight brokerage—we build enduring client relationships rooted in unwavering trust and shared success.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Customer-Centric Freight Strategy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optimized Port Turnaround Times</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time Milestone Visibility</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous Sustainability Initiatives</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className={`liquid-glass-card rounded-2xl p-5 transition-all duration-300 ${p.border}`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 ${p.accent} border border-white/10`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1.5 font-heading">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
