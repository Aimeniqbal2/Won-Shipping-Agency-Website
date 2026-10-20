import React, { useState } from 'react';
import { Globe2, Shield, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface TirCorridorSectionProps {
  onOpenQuote: () => void;
}

export const TirCorridorSection: React.FC<TirCorridorSectionProps> = ({ onOpenQuote }) => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  const routes = [
    {
      id: 0,
      title: 'Karachi ➔ Uzbekistan (Tashkent & Termez)',
      via: 'Via Peshawar / Torkham Border',
      transitTime: '8 – 11 Days',
      cargoType: 'Industrial Machinery, Textiles, Agricultural Goods, Pharmaceuticals',
      features: ['Direct customs-sealed transit', 'Zero border offloading', 'TIR guarantee bond applied']
    },
    {
      id: 1,
      title: 'Karachi ➔ Turkmenistan (Ashgabat & Turkmenbashi)',
      via: 'Via Quetta / Chaman Border',
      transitTime: '9 – 13 Days',
      cargoType: 'Consumer Goods, Heavy Equipment, Chemicals',
      features: ['Caspian Sea maritime forwarding tie-in', 'Door-to-door single B/L', 'Continuous GPS monitoring']
    },
    {
      id: 2,
      title: 'Karachi ➔ Kazakhstan (Almaty & Astana)',
      via: 'Northern Overland Silk Route',
      transitTime: '12 – 16 Days',
      cargoType: 'High-Value Electronics, Automotive Parts, Steel Products',
      features: ['Multimodal road-rail coordination', 'Zero demurrage risk', 'Customs bonded seal throughout']
    },
    {
      id: 3,
      title: 'Karachi ➔ Tajikistan & Kyrgyzstan (Dushanbe & Bishkek)',
      via: 'High-Altitude Crossings',
      transitTime: '11 – 15 Days',
      cargoType: 'Special Project Cargo, Mining Equipment, General Merchandise',
      features: ['Heavy axle trailer support', 'Winterized all-weather dispatch', '24/7 convoy assistance']
    }
  ];

  return (
    <section id="tir" className="w-full relative overflow-hidden bg-gradient-to-b from-[#A3CFF7] via-[#85BDEE] to-[#B0D7F8] py-24 sm:py-28 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-white/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-white/55 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-white/65 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
        <div className="corporate-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Globe2 className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-xs font-bold tracking-widest text-[#0B2545] uppercase font-heading">
            04 • CENTRAL ASIAN CORRIDOR
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight max-w-3xl font-heading">
          Beyond Borders: Connecting <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Pakistan to Central Asia</span> & Beyond
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
          Pioneering seamless door-to-door overland trade through the strategic utilization of international TIR Carnets.
        </p>
      </div>

      {/* Two Column Layout: Narrative + Interactive TIR Route Visualizer */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Column: Context & Advantages (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="corporate-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#0284C7] bg-sky-50 border border-sky-200 mb-4">
              <Zap className="w-3 h-3 text-[#0284C7]" />
              <span>International TIR Convention</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-4 font-heading">
              A Pivotal Connector for Landlocked Nations
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
              Won Shipping Agencies’ exceptional network positions us to execute pick-up and delivery services from even the most remote and challenging locations across the globe.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Our extensive logistics expertise extends beyond borders, enabling us to collect cargo from any factory or warehouse in Pakistan, ensuring prompt and secure transportation to your chosen port or direct overland transit into Central Asia.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Shield className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0B2545]">Customs-Sealed Security</p>
                  <p className="text-[11px] text-slate-600 font-normal">No physical container inspections at transit borders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0B2545]">Direct Sea-to-Road Connectivity</p>
                  <p className="text-[11px] text-slate-600 font-normal">Cargo offloaded from ships in Karachi goes directly onto TIR trucks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real PDF Asset Card */}
          <div className="corporate-card rounded-3xl p-3 overflow-hidden relative group bg-white border border-slate-200 shadow-lg">
            <div className="h-44 rounded-2xl overflow-hidden relative">
              <img 
                src="/images/door_to_door.jpg" 
                alt="Door to door logistics" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Multimodal Fleet & Container Lines</span>
                <span className="bg-[#F97316] text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md">
                  Active Corridors
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Route Corridors (7 cols) */}
        <div className="lg:col-span-7">
          <div className="corporate-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-[#0B2545] font-heading">
                    Active TIR Carnet Trade Corridors
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    Select a transit route to view estimated timelines and specifications
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#EA580C] px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
                  4 Corridors
                </span>
              </div>

              {/* Route Tabs */}
              <div className="space-y-3 mb-6">
                {routes.map((r) => {
                  const isSelected = selectedRoute === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRoute(r.id)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                        isSelected 
                          ? 'bg-[#0B2545] text-white border-[#F97316] shadow-lg' 
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold font-heading ${isSelected ? 'text-[#FB923C]' : 'text-[#0B2545]'}`}>
                          {r.title}
                        </span>
                        <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                          isSelected ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30' : 'bg-slate-200/80 text-slate-700'
                        }`}>
                          {r.transitTime}
                        </span>
                      </div>
                      <p className={`text-xs font-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{r.via}</p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Route Detailed View */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-4">
                <div>
                  <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-1">
                    Typical Cargo Commodities
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {routes[selectedRoute].cargoType}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2">
                    Corridor Guarantees
                  </p>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {routes[selectedRoute].features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>IRU TIR Carnet Certified Operator</span>
              </div>

              <button
                onClick={onOpenQuote}
                className="corporate-btn-orange px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request TIR Corridor Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
