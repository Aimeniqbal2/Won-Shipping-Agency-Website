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
    <section id="contact" className="w-full relative overflow-hidden bg-gradient-to-b from-[#B0D7F8] via-[#8DC3F2] to-[#A5CEF6] py-24 sm:py-28 z-20">
      {/* Floating circular glowing white spots placed well inside section interior to prevent edge clipping */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-white/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-white/65 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-white/55 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-white/65 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
        <div className="corporate-pill px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
          <Headphones className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-xs font-bold tracking-widest text-[#0B2545] uppercase font-heading">
            05 • STAY CONNECTED
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight max-w-2xl font-heading">
          Partner with <span className="text-[#0B2545]">Won Shipping</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Agencies</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3 font-normal leading-relaxed">
          Get in touch with our executive operations team in Karachi for agencies appointments, freight quotations, and TIR transit bookings.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Official Contact Directory from PDF Page 12 (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="corporate-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] font-heading">
              Karachi Operations Headquarters
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Centrally based on Shahrah-e-Faisal with high-speed operational ties to Karachi Port Trust (KPT), Port Qasim Authority (PQA), and inland dry ports.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Head Office Location
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B2545] font-medium leading-relaxed">
                    Office No 709, 7th Floor, Marine Faisal, <br />
                    Shahrah-e-Faisal, Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <a 
                href="tel:02132431139" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-400/50 hover:bg-orange-50/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-200 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Telephone Exchange
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#EA580C]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B2545] font-mono font-bold group-hover:text-[#EA580C] transition-colors">
                    021-3243113-9
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:Anas@wonshippingagencies.com" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-400/50 hover:bg-orange-50/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-200 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Operations Email
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#EA580C]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B2545] font-semibold group-hover:text-[#EA580C] transition-colors break-all">
                    Anas@wonshippingagencies.com
                  </p>
                </div>
              </a>

              {/* Website */}
              <a 
                href="http://www.wonshippingline.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-400/50 hover:bg-sky-50/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-200 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Web Portal
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1D4ED8]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B2545] font-medium group-hover:text-[#1D4ED8] transition-colors">
                    www.wonshippingline.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Operating Hours & Dispatch Badge */}
          <div className="corporate-card rounded-3xl p-5 flex items-center gap-4 bg-white border border-slate-200 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0B2545]">24/7 Port Husbandry & Clearance Desk</p>
              <p className="text-[11px] text-slate-600 font-normal">Office Mon–Sat: 09:00–18:00 PKT | Vessel Berthing: Continuous</p>
            </div>
          </div>
        </div>

        {/* Right Column: Corporate Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="corporate-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40 h-full flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] font-heading mb-1">
                    Send a Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Our managing representatives will respond within 2 business hours.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Khan"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5 font-heading">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5 font-heading">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5 font-heading">
                      Service Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                    >
                      <option value="FCL & Shipping Agencies Inquiries">FCL & Shipping Agencies Inquiries</option>
                      <option value="Global Freight Forwarding (Air/Sea)">Global Freight Forwarding (Air/Sea)</option>
                      <option value="TIR Carnet Central Asia Cross-Border">TIR Carnet Central Asia Cross-Border</option>
                      <option value="Custom Clearance & PSW Port Logistics">Custom Clearance & PSW Port Logistics</option>
                      <option value="Dry Boxes & Special Equipment">Dry Boxes & Special Equipment</option>
                      <option value="Warehousing & Port Consolidation">Warehousing & Port Consolidation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5 font-heading">
                    Detailed Cargo / Vessel Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding origin, destination ports, equipment type, cargo tonnage, or agency appointment scope..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Transmitted to Anas@wonshippingagencies.com</span>
                  </div>

                  <button
                    type="submit"
                    className="corporate-btn-orange px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#0B2545] font-heading">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto font-normal leading-relaxed">
                    Thank you <strong className="text-[#EA580C]">{formData.name}</strong>. Your inquiry has been routed to our Karachi headquarters desk.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs text-slate-700 text-left space-y-1">
                  <p><strong className="text-[#0B2545]">Subject:</strong> {formData.subject}</p>
                  <p><strong className="text-[#0B2545]">Phone:</strong> {formData.phone}</p>
                  <p><strong className="text-[#0B2545]">Email:</strong> {formData.email}</p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
