import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight,
  Headphones
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'FCL & Shipping Agency Inquiries',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Headphones className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-300 uppercase font-heading">
            05 • STAY CONNECTED
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
          Partner with <span className="text-gradient-cyan">Won Shipping</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Get in touch with our executive operations team in Karachi for agency appointments, freight quotations, and TIR transit bookings.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Official Contact Directory from PDF Page 12 (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Karachi Operations Headquarters
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              Centrally based on Shahrah-e-Faisal with high-speed operational ties to Karachi Port Trust (KPT), Port Qasim Authority (PQA), and inland dry ports.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl liquid-glass-dock text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Head Office Location
                  </span>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Office No 709, 7th Floor, Marine Faisal, <br />
                    Shahrah-e-Faisal, Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <a 
                href="tel:02132431139" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl liquid-glass-dock text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-400/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Telephone Exchange
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-mono font-bold group-hover:text-cyan-300 transition-colors">
                    021-3243113-9
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:Anas@wonshippingagencies.com" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl liquid-glass-dock text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Operations Email
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-semibold group-hover:text-amber-300 transition-colors break-all">
                    Anas@wonshippingagencies.com
                  </p>
                </div>
              </a>

              {/* Website */}
              <a 
                href="http://www.wonshippingline.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl liquid-glass-dock text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Web Portal
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium group-hover:text-cyan-300 transition-colors">
                    www.wonshippingline.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Operating Hours & Dispatch Badge */}
          <div className="liquid-glass-dock rounded-3xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">24/7 Port Husbandry & Clearance Desk</p>
              <p className="text-[11px] text-slate-400 font-light">Office Mon–Sat: 09:00–18:00 PKT | Vessel Berthing: Continuous</p>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/10 h-full flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1">
                    Send an Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 font-light">
                    Our managing representatives will respond within 2 business hours.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Khan"
                      className="w-full liquid-glass-input rounded-xl px-4 py-3 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full liquid-glass-input rounded-xl px-4 py-3 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full liquid-glass-input rounded-xl px-4 py-3 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                      Service Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full liquid-glass-input rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200"
                    >
                      <option value="FCL & Shipping Agency Inquiries" className="bg-[#0A192F]">FCL & Shipping Agency Inquiries</option>
                      <option value="Global Freight Forwarding (Air/Sea)" className="bg-[#0A192F]">Global Freight Forwarding (Air/Sea)</option>
                      <option value="TIR Carnet Central Asia Cross-Border" className="bg-[#0A192F]">TIR Carnet Central Asia Cross-Border</option>
                      <option value="Custom Clearance & PSW Port Logistics" className="bg-[#0A192F]">Custom Clearance & PSW Port Logistics</option>
                      <option value="Dry Boxes & Special Equipment" className="bg-[#0A192F]">Dry Boxes & Special Equipment</option>
                      <option value="Warehousing & Port Consolidation" className="bg-[#0A192F]">Warehousing & Port Consolidation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-heading">
                    Detailed Cargo / Vessel Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding origin, destination ports, equipment type, cargo tonnage, or agency appointment scope..."
                    className="w-full liquid-glass-input rounded-xl px-4 py-3 text-xs sm:text-sm resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Transmitted to Anas@wonshippingagencies.com</span>
                  </div>

                  <button
                    type="submit"
                    className="liquid-glass-btn-gold px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl liquid-glass-dock mx-auto flex items-center justify-center text-emerald-400 border border-emerald-400/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white font-heading">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto font-light leading-relaxed">
                    Thank you <strong className="text-amber-300">{formData.name}</strong>. Your inquiry has been routed to our Karachi headquarters desk.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-slate-300 text-left space-y-1">
                  <p><strong className="text-white">Subject:</strong> {formData.subject}</p>
                  <p><strong className="text-white">Phone:</strong> {formData.phone}</p>
                  <p><strong className="text-white">Email:</strong> {formData.email}</p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="liquid-glass-pill px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
