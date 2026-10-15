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
  category: 'ocean_air' | 'agency_customs' | 'specialized_fleet' | 'inland_warehousing';
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'ocean_air' | 'agency_customs' | 'specialized_fleet' | 'inland_warehousing'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'freight-forwarding',
      category: 'ocean_air',
      title: 'Global Freight Forwarding',
      tagline: 'Dual Expertise in Air & Ocean Cargo',
      image: '/images/freight_forwarding.jpg',
      icon: Plane,
      badge: 'Air & Sea Multimodal',
      description: 'Won Shipping agencies specializes in offering a comprehensive suite of logistics services, including both air and ocean freight. This dual expertise allows us to provide you with versatile options that best suit your unique shipping needs. We take pride in being the bridge that connects your products to markets around the world, all while offering you a tailored, cost-effective, and efficient shipping solution.',
      highlights: [
        'Global FCL & LCL Consolidation across 120+ ports',
        'Expedited Air Freight charters & scheduled cargo flights',
        'Tailored routing minimizing layovers & transit times',
        'Complete end-to-end B/L documentation & cargo insurance'
      ],
      specs: ['Mode: Air & Sea', 'Coverage: Global', 'Capacity: LCL to Full Vessel Charter']
    },
    {
      id: 'agency-representation',
      category: 'agency_customs',
      title: 'Agency Representation',
      tagline: 'Reliable Ally to Global Principals & Shipping Lines',
      image: '/images/agency_representation.jpg',
      icon: Anchor,
      badge: 'NVOCC & Line Agency',
      description: 'Won Shipping Agencies proudly serves as a reliable ally to our principals. We understand that effective agency representation demands not only reliability but also a keen awareness of the evolving marketing dynamics within the shipping sector. As a reputable shipping agency, we provide expert representatives for shipping lines, offering comprehensive services to facilitate smooth and efficient operations.',
      highlights: [
        'Cargo booking, vessel coordination & berth allocation',
        'Liaison between shipowners, charterers & cargo interests',
        'In-depth mastery of local Pakistani port regulations',
        'Transparent marketing dynamics maximizing vessel intake'
      ],
      specs: ['Focus: Shipping Lines & Owners', 'Ports: Karachi (KPT) & Port Qasim (PQA)', 'Service: 24/7 Husbandry']
    },
    {
      id: 'special-equipment',
      category: 'specialized_fleet',
      title: 'Dry Boxes & Special Equipment',
      tagline: 'Empowering Pakistan’s Heavy & Oversized Export Trade',
      image: '/images/special_equipment.jpg',
      icon: Container,
      badge: 'Project & Out-Of-Gauge',
      description: 'Our extensive array of dry boxes ensures the secure and weatherproof transportation of general cargo, providing protection against external elements throughout transit. We excel in the handling of special equipment, which plays a vital role in facilitating Pakistan\'s exports. These specialized units allow us to accommodate oversized cargo, contributing to the diverse range of shipping requirements we can meet.',
      highlights: [
        'High-cube dry boxes (20ft, 40ft, 45ft HC)',
        'Flat racks, open tops & platform containers for breakbulk',
        'Expert cargo lashing, securing & weight distribution engineering',
        'Seamless integration into Pakistan’s industrial export lanes'
      ],
      specs: ['Inventory: Dry, Open Top, Flat Rack', 'Cargo: Heavy Lift & Machinery', 'Standard: ISO Certified']
    },
    {
      id: 'custom-clearance',
      category: 'agency_customs',
      title: 'Custom Clearance & Compliance',
      tagline: 'Zero Delays, Precise Tariff Classification & Duties',
      image: '/images/custom_clearance.jpg',
      icon: FileCheck,
      badge: 'Licensed Customs Broker',
      description: 'Our company excels in seamless custom clearance services, ensuring efficient and compliant import and export processes. With expertise in navigating complex regulations, we facilitate smooth transactions, minimize delays, and optimize logistics for businesses. Our experienced team provides personalized support, handling documentation, duties, and taxes with precision, allowing clients to focus on their core operations.',
      highlights: [
        'Licensed customs brokerage at all Pakistani seaports & airports',
        'HS code classification, duty exemption & tax optimization',
        'Expedited green-channel processing minimizing demurrage',
        'Automated digital filing with Pakistan Single Window (PSW)'
      ],
      specs: ['System: Pakistan Single Window (PSW)', 'Clearance Time: 24–48 Hours', 'Compliance: 100% Audit-Proof']
    },
    {
      id: 'transportation',
      category: 'specialized_fleet',
      title: 'Inland Transportation & Fleet',
      tagline: 'Diverse Heavy Fleet with Real-Time Satellite Tracking',
      image: '/images/transportation.jpg',
      icon: Truck,
      badge: 'Nationwide Drayage',
      description: 'Our transportation services provide comprehensive logistics solutions, ensuring timely and efficient movement of goods. With a diverse fleet and extensive network, we offer tailored transportation options to meet specific business needs. From local deliveries to long-haul shipments, our experienced team manages every aspect, prioritizing cargo safety, security, and customer satisfaction.',
      highlights: [
        'Fleet of prime movers, multi-axle trailers & container chassis',
        'Long-haul transit from Karachi ports to upcountry dry ports',
        'GPS live tracking with real-time route optimization',
        'Strict safety protocols and dedicated convoy escorts if needed'
      ],
      specs: ['Fleet: Prime Movers & Heavy Trailers', 'Coverage: Nationwide Pakistan', 'Tracking: 24/7 Satellite GPS']
    },
    {
      id: 'door-to-door',
      category: 'inland_warehousing',
      title: 'Door-to-Door & Central Asia TIR',
      tagline: 'Pivotal Road Connector via TIR Carnets Across Borders',
      image: '/images/door_to_door.jpg',
      icon: Globe2,
      badge: 'TIR Carnet Corridor',
      description: 'Won Shipping agencies exceptional network positions us to execute pick-up and delivery services from even the most remote and challenging locations across the globe. Our extensive logistics expertise extends beyond borders, enabling us to collect cargo from any location in Pakistan to your chosen port. We take pride in our role as a pivotal connector of Central Asian countries through the utilization of TIR Carnets.',
      highlights: [
        'Seamless pick-up from remote manufacturing centers across Pakistan',
        'Direct TIR Carnet overland corridors to Uzbekistan, Turkmenistan, Kazakhstan',
        'Sealed transit bypassing multi-border customs bottlenecks',
        'Single-carrier accountability from factory door to destination warehouse'
      ],
      specs: ['Territory: Pakistan ➔ Central Asia', 'Protocol: TIR Carnet Convention', 'Service: Door-to-Door']
    },
    {
      id: 'warehousing',
      category: 'inland_warehousing',
      title: 'Bonded & Non-Bonded Warehousing',
      tagline: 'Strategic Port-Adjacent Facilities & International Consolidation',
      image: '/images/warehousing.jpg',
      icon: Warehouse,
      badge: 'Port-Adjacent Storage',
      description: 'At Won Shipping agencies, our diverse portfolio encompasses both bonded and non-bonded warehouses strategically located in close proximity to ports, ensuring seamless cargo transfer to vessels. We take great pride in offering a comprehensive array of services, including international consolidation, effectively serving multi-country operations.',
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
    <section id="services" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="liquid-glass-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Ship className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-300 uppercase font-heading">
            03 • COMPREHENSIVE CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
          Complete Logistics <span className="text-gradient-cyan">Services Suite</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 font-light">
          From international ocean and air freight to specialized equipment and direct TIR Carnet road links into Central Asia.
        </p>
      </div>

      {/* Category Filter Pills (Liquid Glass Dock style) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'liquid-glass-dock text-amber-300 border-amber-400/40 shadow-lg'
              : 'liquid-glass-pill text-slate-300 hover:text-white'
          }`}
        >
          All 7 Capabilities
        </button>
        <button
          onClick={() => setActiveFilter('ocean_air')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'ocean_air'
              ? 'liquid-glass-dock text-cyan-300 border-cyan-400/40 shadow-lg'
              : 'liquid-glass-pill text-slate-300 hover:text-white'
          }`}
        >
          Air & Ocean Freight
        </button>
        <button
          onClick={() => setActiveFilter('agency_customs')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'agency_customs'
              ? 'liquid-glass-dock text-cyan-300 border-cyan-400/40 shadow-lg'
              : 'liquid-glass-pill text-slate-300 hover:text-white'
          }`}
        >
          Agency & Custom Clearance
        </button>
        <button
          onClick={() => setActiveFilter('specialized_fleet')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'specialized_fleet'
              ? 'liquid-glass-dock text-cyan-300 border-cyan-400/40 shadow-lg'
              : 'liquid-glass-pill text-slate-300 hover:text-white'
          }`}
        >
          Special Equipment & Fleet
        </button>
        <button
          onClick={() => setActiveFilter('inland_warehousing')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            activeFilter === 'inland_warehousing'
              ? 'liquid-glass-dock text-cyan-300 border-cyan-400/40 shadow-lg'
              : 'liquid-glass-pill text-slate-300 hover:text-white'
          }`}
        >
          TIR Road & Warehousing
        </button>
      </div>

      {/* Services Grid (Liquid Glass Cards) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id}
              className="liquid-glass-card rounded-3xl overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Real PDF Picture */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 liquid-glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{service.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl liquid-glass-dock flex items-center justify-center text-cyan-300 border border-white/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-cyan-300/90 font-medium line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 font-light">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="liquid-glass-btn-gold px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Get Rate</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Detail Modal (Liquid Glass) */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-slate-950/80 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="liquid-glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-white/20 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full liquid-glass-pill text-slate-300 hover:text-white cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="liquid-glass-pill px-3 py-1 rounded-full text-xs font-bold text-amber-300 uppercase mb-2 inline-block">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-heading">
                Comprehensive Capability
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                {selectedService.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-heading mb-3">
                Key Operational Strengths
              </h4>
              <div className="space-y-2.5">
                {selectedService.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-light">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedService.specs.map((spec, i) => (
                <span key={i} className="liquid-glass-pill px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-300">
                  {spec}
                </span>
              ))}
            </div>

            {/* Modal CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close Window
              </button>
              
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectService(serviceName);
                }}
                className="liquid-glass-btn-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quote for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
