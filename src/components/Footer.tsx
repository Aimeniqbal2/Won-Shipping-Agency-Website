import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-b from-[#A5CEF6] via-[#8DC3F2] to-[#78B4EB] text-slate-800 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-white/55 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200/90">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="h-20 sm:h-24 w-auto flex items-center justify-start">
                <img 
                  src="/Logo.png" 
                  alt="Won Shipping Agencies" 
                  className="h-full w-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              Premier FCL and NVOCC representative, international freight forwarder, and multimodal logistics provider based in Karachi, Pakistan. Reshaping maritime logistics by setting new industry standards in reliability and transparency.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="corporate-btn-orange px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <button onClick={() => scrollTo('overview')} className="hover:text-[#EA580C] transition-colors">
                  Company Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('vision')} className="hover:text-[#EA580C] transition-colors">
                  Vision & Outlook
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#EA580C] transition-colors">
                  Logistics Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('tir')} className="hover:text-[#EA580C] transition-colors">
                  Central Asia TIR
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#EA580C] transition-colors">
                  Stay Connected
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] font-heading">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>Air & Ocean Freight</li>
              <li>Agency Representation</li>
              <li>Special Equipment</li>
              <li>Custom Clearance</li>
              <li>Fleet Transportation</li>
              <li>Door-to-Door Multimodal</li>
              <li>Port Warehousing</li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] font-heading">
              Head Office Karachi
            </h4>
            <div className="space-y-3 text-xs text-slate-600 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>
                  Office No 709, 7th Floor, Marine Faisal, Shahrah-e-Faisal, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href="tel:02132431139" className="hover:text-[#EA580C] transition-colors font-mono font-medium">
                  021-3243113-9
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href="mailto:Anas@wonshippingagencies.com" className="hover:text-[#EA580C] transition-colors break-all font-medium">
                  Anas@wonshippingagencies.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0284C7] shrink-0" />
                <a href="http://www.wonshippingline.com" target="_blank" rel="noreferrer" className="hover:text-[#0284C7] transition-colors font-medium">
                  www.wonshippingline.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} Won Shipping Agencies. All rights reserved. Connecting Ports, Moving Dreams.</p>

          {/* DigiCreatix Agency Credit with Verified Link */}
          <div className="text-xs tracking-wide flex items-center gap-1">
            <span className="text-slate-500">Creativity Engineered by</span>
            <a 
              href="https://digicreatix.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[#0066FF] hover:text-[#3B82F6] hover:underline transition-colors ml-0.5"
              title="Visit DigiCreatix"
            >
              DigiCreatix
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified NVOCC & Customs Broker</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#0B2545] hover:text-[#EA580C] hover:border-orange-300 shadow-sm transition-all cursor-pointer group"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
