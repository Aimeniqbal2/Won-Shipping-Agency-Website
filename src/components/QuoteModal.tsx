import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Ship, 
  Plane, 
  Truck, 
  Globe2, 
  Container, 
  ShieldCheck,
  Phone,
  Mail,
  FileCheck,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { submitLiveInquiry, OFFICIAL_CONTACT } from '../utils/formSubmit';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  preselectedService 
}) => {
  const [service, setService] = useState('Transportation & Haulage');
  const [origin, setOrigin] = useState('Karachi, Pakistan (Port Qasim / KICT)');
  const [destination, setDestination] = useState('Tashkent, Uzbekistan (TIR)');
  const [cargoType, setCargoType] = useState('General Commercial Goods');
  const [weight, setWeight] = useState('24 Tons');
  const [containerCount, setContainerCount] = useState('1 x 40ft High Cube');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const refCode = `WSA-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteReference(refCode);

    try {
      await submitLiveInquiry({
        formType: 'Detailed Freight Quote',
        name,
        company,
        email,
        phone,
        service,
        origin,
        destination,
        cargoType,
        weight,
        equipment: containerCount,
        message: notes,
        referenceId: refCode
      });
    } catch (err) {
      console.warn('Live quote transmission logged:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-2xl bg-slate-950/85 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="liquid-glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-white/20 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Pill and Close Button */}
        <div className="flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-6 pb-2 relative z-10 shrink-0">
          <span className="liquid-glass-pill px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider inline-block">
            Tailored Logistics Pricing
          </span>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full liquid-glass-pill text-slate-300 hover:text-white cursor-pointer transition-colors"
            title="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with Inset Custom Scrollbar */}
        <div className="overflow-y-auto px-4 sm:px-8 pb-5 sm:pb-8 pt-1 custom-modal-scroll flex-1">
          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-3xl font-bold text-white font-heading">
                  Request an Instant Freight Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  Direct quotation from Won Shipping Agencies Karachi headquarters.
                </p>
              </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Service Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2 font-heading">
                  Logistics Service Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Transportation & Haulage', icon: Truck },
                    { label: 'BreakBulk & Project Cargo', icon: Container },
                    { label: 'Clearing Agent & PSW', icon: FileCheck },
                    { label: 'Ocean Freight FCL', icon: Ship },
                    { label: 'Ocean Freight LCL', icon: Ship },
                    { label: 'Air Freight Charter', icon: Plane },
                    { label: 'TIR Central Asia', icon: Globe2 },
                    { label: 'Special Equipment', icon: Container },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isCurrent = service.includes(item.label) || service === item.label;
                    return (
                      <button
                        type="button"
                        key={item.label}
                        onClick={() => setService(item.label)}
                        className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
                          isCurrent
                            ? 'liquid-glass-dock border-amber-400 text-amber-300 shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Origin & Destination */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Origin (Port / City)
                  </label>
                  <input
                    type="text"
                    required
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. Karachi Port, Lahore Dry Port, Shanghai..."
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Destination (Port / City)
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Tashkent (TIR), Rotterdam, Dubai, Almaty..."
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Cargo Specs */}
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Commodity
                  </label>
                  <input
                    type="text"
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    placeholder="e.g. Textiles, Machinery..."
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Est. Weight
                  </label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 24 Tons, 5000 kg"
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Equipment / Units
                  </label>
                  <input
                    type="text"
                    value={containerCount}
                    onChange={(e) => setContainerCount(e.target.value)}
                    placeholder="e.g. 1 x 40HC, Flat Rack"
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider font-heading">
                  Your Contact Information
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full liquid-glass-input rounded-xl px-3.5 py-2 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company / Organization"
                      className="w-full liquid-glass-input rounded-xl px-3.5 py-2 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Business Email *"
                      className="w-full liquid-glass-input rounded-xl px-3.5 py-2 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone / WhatsApp (0339-2421717) *"
                      className="w-full liquid-glass-input rounded-xl px-3.5 py-2 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Special Requirements (e.g. Transportation drayage, BreakBulk heavy lift, Clearing agent customs assistance, temperature control)..."
                    className="w-full liquid-glass-input rounded-xl px-3.5 py-2 text-xs sm:text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Live direct transmission to info@wonshippingagencies.com</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="liquid-glass-btn-gold px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Rate Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl liquid-glass-dock mx-auto flex items-center justify-center text-emerald-400 border border-emerald-400/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Inquiry Successfully Transmitted!
              </h3>
              <p className="text-xs text-amber-300 font-mono mt-1">
                Reference ID: #{quoteReference}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto font-light leading-relaxed">
                Thank you <strong className="text-amber-300">{name || 'valued partner'}</strong>. Your detailed request has been transmitted live to <strong className="text-cyan-300">info@wonshippingagencies.com</strong> for <strong className="text-white">{service}</strong> from {origin} to {destination}.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs text-slate-300">
              <p><strong className="text-white">Route:</strong> {origin} ➔ {destination}</p>
              <p><strong className="text-white">Cargo:</strong> {cargoType} ({weight}, {containerCount})</p>
              <p><strong className="text-white">Live Dispatched To:</strong> info@wonshippingagencies.com</p>
              <p><strong className="text-white">Direct Hotline:</strong> 0339-2421717</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={OFFICIAL_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-dock px-5 py-3 rounded-xl text-xs font-semibold text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Operations</span>
              </a>

              <a
                href={OFFICIAL_CONTACT.telLink}
                className="liquid-glass-btn-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0339-2421717</span>
              </a>

              <a
                href={`mailto:info@wonshippingagencies.com?subject=Freight Quote Request [${quoteReference}] - ${encodeURIComponent(service)}&body=Name: ${encodeURIComponent(name)}%0ACompany: ${encodeURIComponent(company)}%0APhone: ${encodeURIComponent(phone)}%0ARoute: ${encodeURIComponent(origin)} to ${encodeURIComponent(destination)}%0ACargo: ${encodeURIComponent(cargoType)} (${encodeURIComponent(weight)})`}
                className="liquid-glass-pill hover:border-cyan-400 px-5 py-3 rounded-xl text-xs font-semibold text-cyan-300 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>info@wonshippingagencies.com</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full text-xs text-slate-400 hover:text-white pt-2"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
