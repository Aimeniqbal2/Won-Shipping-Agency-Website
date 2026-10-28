import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  Anchor, 
  FileCheck, 
  Truck, 
  Globe2, 
  Warehouse, 
  Container, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  category: 'ocean_air' | 'clearing_agent' | 'transportation' | 'breakbulk' | 'tir_warehousing';
  title: string;
  tagline: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  highlights: string[];
  specs: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ocean_air' | 'clearing_agent' | 'transportation' | 'breakbulk' | 'tir_warehousing'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'transportation',
      category: 'transportation',
      title: 'Transportation & Heavy Fleet Haulage',
      tagline: 'Nationwide Drayage with 24/7 Satellite GPS Tracking',
      image: '/images/transportation.jpg',
      icon: Truck,
      badge: 'Transportation & Haulage',
      description: 'Our dedicated Transportation division provides comprehensive overland logistics across Pakistan. Powered by a modern, heavy-duty fleet of prime movers, multi-axle trailers, low-bed carriers, and container chassis, we guarantee safe, punctual drayage from Karachi port terminals to all upcountry industrial destinations with continuous GPS satellite telematics.',
      highlights: [
        'Fleet of prime movers, 40ft/20ft container chassis & multi-axle trailers',
        'Direct long-haul transit from Karachi ports to all upcountry dry ports',
        '24/7 active satellite GPS telematics with live route optimization',
        'Strict safety protocols, cargo lashing certifications & convoy escorts'
      ],
      specs: ['Fleet: Prime Movers & Multi-Axle Trailers', 'Coverage: Nationwide Pakistan Haulage', 'Tracking: 24/7 Live Satellite GPS']
    },
    {
      id: 'breakbulk-cargo',
      category: 'breakbulk',
      title: 'BreakBulk & Heavy Lift Project Cargo',
      tagline: 'Vessel Chartering, Port Stevedoring & Out-Of-Gauge Logistics',
      image: '/images/special_equipment.jpg',
      icon: Container,
      badge: 'BreakBulk & Heavy Lift',
      description: 'Won Shipping Agencies delivers elite BreakBulk cargo handling, heavy-lift parcel chartering, and out-of-gauge (OOG) marine logistics across Karachi Port (KPT) and Port Qasim (PQA). From heavy industrial turbines and steel coils to oversized manufacturing modules, our marine engineers manage vessel berthing, certified crane lifts, and hook-to-trailer discharge with zero demurrage.',
      highlights: [
        'Breakbulk vessel chartering, parcel space booking & berth coordination',
        'Certified heavy lift crane operations & professional stevedoring teams',
        'Out-of-gauge (OOG) flat rack, open top & platform container securing',
        'Marine surveyor lashing certifications & direct quay-to-trailer transfer'
      ],
      specs: ['Cargo: BreakBulk, Heavy Machinery, OOG', 'Ports: KPT & Port Qasim Dedicated Berths', 'Capacity: Multi-Ton Heavy Lift & Project Cargo']
    },
    {
      id: 'custom-clearance',
      category: 'clearing_agent',
      title: 'Clearing Agent & Customs Compliance',
      tagline: 'Authorized Customs Clearing Agent with Accelerated PSW Green Channel',
      image: '/images/custom_clearance.jpg',
      icon: FileCheck,
      badge: 'Licensed Clearing Agent',
      description: 'As an officially licensed Clearing Agent in Pakistan, Won Shipping Agencies navigates customs regulations with unmatched precision. Operating across all major seaports, airports, and inland container depots, we handle swift Goods Declaration (GD) processing, Pakistan Single Window (PSW) filings, HS code duty optimization, and rapid green-channel releases to prevent costly demurrage.',
      highlights: [
        'Licensed customs clearing agent at KPT, Port Qasim & Air Freight units',
        'Automated digital filing and fast-track processing via Pakistan Single Window (PSW)',
        'HS tariff classification, valuation advisory & SRO duty exemption consulting',
        'Swift delivery orders (DO), physical examinations & 24/7 port desk'
      ],
      specs: ['License: Authorized Customs Clearing Agent', 'Platform: Pakistan Single Window (PSW)', 'Turnaround: Rapid 24–48 Hour Clearance']
    },
    {
      id: 'freight-forwarding',
      category: 'ocean_air',
      title: 'Global Freight Forwarding',
      tagline: 'Dual Expertise in Air & Ocean Cargo Across 120+ Ports',
      image: '/images/freight_forwarding.jpg',
      icon: Plane,
      badge: 'Air & Sea Multimodal',
      description: 'Won Shipping Agencies specializes in offering a comprehensive suite of logistics services, including both air and ocean freight. This dual expertise allows us to provide you with versatile options that best suit your unique shipping needs. We take pride in being the bridge that connects your products to markets around the world with tailored, cost-effective routing.',
      highlights: [
        'Global FCL & LCL Consolidation across 120+ ports worldwide',
        'Expedited Air Freight charters & scheduled cargo flight space',
        'Tailored routing minimizing layovers, transshipments & transit times',
        'Complete end-to-end B/L documentation, clearance & cargo insurance'
      ],
      specs: ['Mode: Air & Sea', 'Coverage: Global (120+ Ports)', 'Capacity: LCL to Full Vessel Charter']
    },
    {
      id: 'agency-representation',
      category: 'clearing_agent',
      title: 'Agency Representation',
      tagline: 'Reliable Ally to Global Principals & Shipping Lines',
      image: '/images/agency_representation.jpg',
      icon: Anchor,
      badge: 'NVOCC & Line Agency',
      description: 'Won Shipping Agencies proudly serves as a reliable ally to our principals. We understand that effective agency representation demands not only reliability but also a keen awareness of the evolving marketing dynamics within the shipping sector. As a reputable shipping agency, we provide expert representatives for shipping lines, offering comprehensive services to facilitate smooth operations.',
      highlights: [
        'Cargo booking, vessel coordination & berth allocation at KPT & PQA',
        'Liaison between shipowners, charterers & cargo interests',
        'In-depth mastery of local Pakistani maritime laws & port regulations',
        'Transparent marketing dynamics maximizing vessel intake and utilization'
      ],
      specs: ['Focus: Shipping Lines & NVOCCs', 'Ports: Karachi (KPT) & Port Qasim (PQA)', 'Service: 24/7 Operations & Husbandry']
    },
    {
      id: 'door-to-door',
      category: 'tir_warehousing',
      title: 'Door-to-Door & Central Asia TIR',
      tagline: 'Pivotal Road Connector via TIR Carnets Across Borders',
      image: '/images/door_to_door.jpg',
      icon: Globe2,
      badge: 'TIR Carnet Corridor',
      description: 'Won Shipping Agencies exceptional network positions us to execute pick-up and delivery services from even the most remote locations across the globe. Our extensive logistics expertise extends beyond borders, enabling us to collect cargo from any location in Pakistan to your chosen port. We take pride in our role as a pivotal connector of Central Asian countries through TIR Carnets.',
      highlights: [
        'Seamless pick-up from remote manufacturing centers across Pakistan',
        'Direct TIR Carnet overland corridors to Uzbekistan, Turkmenistan, Kazakhstan',
        'Sealed transit bypassing multi-border customs bottlenecks',
        'Single-carrier accountability from factory door to destination warehouse'
      ],
      specs: ['Territory: Pakistan ➔ Central Asia', 'Protocol: TIR Carnet Convention', 'Service: Door-to-Door Multimodal']
    },
    {
      id: 'warehousing',
      category: 'tir_warehousing',
      title: 'Bonded & Non-Bonded Warehousing',
      tagline: 'Strategic Port-Adjacent Facilities & International Consolidation',
      image: '/images/warehousing.jpg',
      icon: Warehouse,
      badge: 'Port-Adjacent Storage',
      description: 'At Won Shipping Agencies, our diverse portfolio encompasses both bonded and non-bonded warehouses strategically located in close proximity to ports, ensuring seamless cargo transfer to vessels. We take great pride in offering a comprehensive array of services, including international consolidation, effectively serving multi-country operations.',
      highlights: [
        'Facilities adjacent to Karachi Port and Port Qasim terminals',
        'Bonded warehousing for duty-deferred international consolidation',
        'Advanced inventory control with barcoding & selective racking',
        'Cross-docking, repackaging, palletizing & cargo staging'
      ],
      specs: ['Type: Bonded & General Storage', 'Proximity: < 5km from Port Berths', 'Security: 24/7 CCTV & Guards']
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="w-full relative overflow-hidden bg-gradient-to-b from-[#91C7F5] via-[#7BB6EE] to-[#A3CFF7] py-28 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-white/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-white/55 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-white/65 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="corporate-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Ship className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-xs font-bold tracking-widest text-[#0B2545] uppercase font-heading">
            03 • COMPREHENSIVE CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight max-w-3xl font-heading">
          Complete Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Services Suite</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
          From international ocean and air freight to specialized equipment and direct TIR Carnet road links into Central Asia.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Capabilities
        </button>
        <button
          onClick={() => setActiveFilter('transportation')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'transportation'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Transportation & Fleet
        </button>
        <button
          onClick={() => setActiveFilter('breakbulk')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'breakbulk'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          BreakBulk & Project Cargo
        </button>
        <button
          onClick={() => setActiveFilter('clearing_agent')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'clearing_agent'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Clearing Agent & Brokerage
        </button>
        <button
          onClick={() => setActiveFilter('ocean_air')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'ocean_air'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Air & Ocean Freight
        </button>
        <button
          onClick={() => setActiveFilter('tir_warehousing')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'tir_warehousing'
              ? 'bg-[#0B2545] text-white shadow-md shadow-navy-900/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          TIR Corridor & Warehousing
        </button>
      </div>

      {/* Services Grid (Corporate Cards) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id}
              className="corporate-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200/90 bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-orange-400/50 transition-all duration-300"
            >
              <div>
                {/* Image Header with Real PDF Picture */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 bg-[#F97316] text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{service.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-sky-200 font-medium line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.specs.slice(0, 2).map((sp, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-mono border border-slate-200">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#0284C7] hover:text-[#0B2545] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="corporate-btn-orange px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Get Rate</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-slate-950/70 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="corporate-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 bg-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-6">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block shadow-md">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0284C7] font-heading">
                Comprehensive Capability
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {selectedService.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#EA580C] font-heading mb-3">
                Key Operational Strengths
              </h4>
              <div className="space-y-2.5">
                {selectedService.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-normal">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedService.specs.map((spec, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200">
                  {spec}
                </span>
              ))}
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs text-slate-500 hover:text-slate-800 py-2 text-center"
              >
                Close Window
              </button>
              
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectService(serviceName);
                }}
                className="corporate-btn-orange px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Quote for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};
