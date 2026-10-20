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
    <section id="vision" className="w-full relative overflow-hidden bg-gradient-to-b from-[#B6DCF9] via-[#8EC5F3] to-[#A2CEF6] py-24 sm:py-28 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-white/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-white/55 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] bg-white/65 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

      {/* Section Header Badge */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
        <div className="corporate-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
          <span className="text-xs font-bold tracking-widest text-[#0B2545] uppercase font-heading">
            02 • VISION & OUTLOOK
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight max-w-2xl font-heading">
          Revolutionizing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Global Supply Chain</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3 font-normal leading-relaxed">
          Reshaping maritime logistics by setting new industry standards in reliability, technology, and transparency.
        </p>
      </div>

      {/* Split Hero Card for Vision */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Visual: Real PDF Vision Ship Asset (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="h-full rounded-3xl overflow-hidden corporate-card p-3 shadow-xl border border-slate-200/90 bg-white flex flex-col">
            <div className="relative flex-1 min-h-[340px] rounded-2xl overflow-hidden group">
              <img 
                src="/images/vision_ship.jpg" 
                alt="Won Shipping Vision Vessel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent opacity-85" />

              <div className="absolute top-4 left-4 liquid-glass-dock px-3.5 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20">
                Global Horizons
              </div>

              <div className="absolute bottom-6 left-6 right-6 liquid-glass-dock rounded-2xl p-5 border border-white/20 shadow-2xl">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider font-heading mb-1">
                  Our Mission Statement
                </p>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  "To build enduring client relationships rooted in trust and mutual success through cutting-edge technology and data-driven insights."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Vision Statements (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="corporate-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mb-4 font-heading">
              Setting New Benchmarks in Maritime Transport
            </h3>
            
            <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed mb-5 font-normal">
              At <strong className="text-[#EA580C] font-bold">Won Shipping Agencies</strong>, our vision is to revolutionize the global supply chain with innovative, customer-centric solutions that enhance efficiency and sustainability. We are dedicated to reshaping maritime logistics by setting new industry standards in reliability and transparency.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Through cutting-edge technology and data-driven insights, we aim to optimize the entire logistics workflow. Our commitment extends far beyond freight brokerage—we build enduring client relationships rooted in unwavering trust and shared success.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Customer-Centric Freight Strategy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Optimized Port Turnaround Times</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real-Time Milestone Visibility</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  className="corporate-card rounded-2xl p-5 border border-slate-200/90 bg-white shadow-sm hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center mb-3 border border-orange-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0B2545] mb-1.5 font-heading">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
