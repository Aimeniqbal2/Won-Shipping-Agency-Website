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
    <footer className="relative border-t border-white/10 bg-[#030810]/95 backdrop-blur-2xl z-20 overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="h-24 sm:h-28 w-auto flex items-center justify-start">
                <img 
                  src="/Logo.png" 
                  alt="Won Shipping Agencies" 
                  className="h-full w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,180,216,0.3)]"
                />
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Premier FCL and NVOCC representative, international freight forwarder, and multimodal logistics provider based in Karachi, Pakistan. Reshaping maritime logistics by setting new industry standards in reliability and transparency.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="liquid-glass-btn-gold px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <button onClick={() => scrollTo('overview')} className="hover:text-cyan-300 transition-colors">
                  Company Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('vision')} className="hover:text-cyan-300 transition-colors">
                  Vision & Outlook
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-cyan-300 transition-colors">
                  Logistics Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('tir')} className="hover:text-cyan-300 transition-colors">
                  Central Asia TIR
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-cyan-300 transition-colors">
                  Stay Connected
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-heading">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Head Office Karachi
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Office No 709, 7th Floor, Marine Faisal, Shahrah-e-Faisal, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:02132431139" className="hover:text-amber-300 transition-colors font-mono">
                  021-3243113-9
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:Anas@wonshippingagencies.com" className="hover:text-amber-300 transition-colors break-all">
                  Anas@wonshippingagencies.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="http://www.wonshippingline.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                  www.wonshippingline.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} Won Shipping Agencies. All rights reserved. Connecting Ports, Moving Dreams.</p>

          {/* DigiCreatix Agency Credit with Verified Link */}
          <div className="text-xs tracking-wide flex items-center gap-1">
            <span className="text-slate-400">Creativity Engineered by</span>
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
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified NVOCC & Customs Agency</span>
            </span>

            <button
              onClick={scrollToTop}
              className="liquid-glass-dock p-2.5 rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer group"
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
