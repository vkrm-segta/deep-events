"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Mail,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { EVENT_CATEGORIES } from "@/data/eventCatalog";
import { FAQS } from "@/data/eventsData";
import { CONTACT_INFO } from "@/data/contactInfo";

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("weddings");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [guestCount, setGuestCount] = useState("300-500 Guests");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const phoneNum = CONTACT_INFO.phone;
  const whatsappNum = CONTACT_INFO.whatsappNumber;

  // Category services list
  const currentCategoryObj = EVENT_CATEGORIES.find((c) => c.slug === selectedCategory) || EVENT_CATEGORIES[0];

  const handleToggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle) ? prev.filter((s) => s !== serviceTitle) : [...prev, serviceTitle]
    );
  };

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setSelectedServices([]); // reset selected services
  };

  const formattedWhatsAppMessage = encodeURIComponent(
    `*NEW EVENT QUOTATION REQUEST - DEEP EVENTS*\n\n` +
      `👤 *Name:* ${clientName || "Valued Client"}\n` +
      `📞 *Phone:* ${clientPhone || "Provided on chat"}\n` +
      `🎉 *Event Type:* ${currentCategoryObj.name} (${currentCategoryObj.hindiName})\n` +
      `📍 *City/Venue:* ${eventCity || "To be discussed"}\n` +
      `📅 *Date:* ${eventDate || "Upcoming season"}\n` +
      `👥 *Estimated Guests:* ${guestCount}\n` +
      `🛠️ *Required Services:* ${selectedServices.length > 0 ? selectedServices.join(", ") : "Complete turnkey management"}\n` +
      (notes ? `📝 *Notes/Theme:* ${notes}\n` : "") +
      `\nPlease share availability and customized packages.`
  );

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      <Navbar />

      <div className="flex-1 space-y-12 sm:space-y-16 relative z-10 pb-16">
        {/* Header & Breadcrumb */}
        <section className="relative pt-6 pb-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <Breadcrumbs items={[{ label: "Contact & Quotation" }]} />

            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Transparent Quotes &bull; तुरंत संपर्क</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
                Get an Itemized Quotation
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Tell us about your upcoming event. Receive a comprehensive quotation with itemized decor, 
                staging, sound specifications, and 100% on-time execution guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Form + Direct Contact Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Interactive Quotation Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl space-y-6">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Received with Joy!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-semibold">{clientName || "Friend"}</span>. 
                      Our senior event director will review your requirements for {currentCategoryObj.name} 
                      and connect with you within 2 hours.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${phoneNum}?text=${formattedWhatsAppMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Accelerate via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    {/* Step 1: Event Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <span>1. Choose Event Type:</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {EVENT_CATEGORIES.map((cat) => {
                          const isSelected = selectedCategory === cat.slug;
                          return (
                            <button
                              type="button"
                              key={cat.id}
                              onClick={() => handleCategoryChange(cat.slug)}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? "bg-emerald-600 text-white border-emerald-400 shadow-md font-bold"
                                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                              }`}
                            >
                              <div className="text-xs sm:text-sm">{cat.name}</div>
                              <div className="text-[11px] opacity-75">{cat.hindiName}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Services Checkboxes */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                        <span>2. Select Services Needed ({currentCategoryObj.name}):</span>
                        <span className="text-[11px] text-emerald-400 font-normal">Select all that apply</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentCategoryObj.services.map((srv) => {
                          const isChecked = selectedServices.includes(srv.title);
                          return (
                            <button
                              type="button"
                              key={srv.id}
                              onClick={() => handleToggleService(srv.title)}
                              className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                                isChecked
                                  ? "bg-emerald-500/20 border-emerald-500/50 text-white font-semibold"
                                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                              }`}
                            >
                              <span className="truncate">{srv.title}</span>
                              <div
                                className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                                  isChecked
                                    ? "bg-emerald-500 border-emerald-400 text-white"
                                    : "border-white/20"
                                }`}
                              >
                                {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Date, City & Guest Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Event Date</label>
                        <input
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Venue City</label>
                        <input
                          type="text"
                          placeholder="e.g. Ambala / Kurukshetra / Chandigarh"
                          value={eventCity}
                          onChange={(e) => setEventCity(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Guest Size</label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                        >
                          <option>50 - 150 Guests</option>
                          <option>150 - 300 Guests</option>
                          <option>300 - 600 Guests</option>
                          <option>600 - 1,500 Guests</option>
                          <option>1,500+ Large Tournament / Samagam</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 4: Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Vikram Singh"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder={CONTACT_INFO.phoneDisplay}
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold">
                        Special Notes, Theme, or Budget Preferences (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Want Haldi marigold arch and Sangeet truss sound system..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={`https://wa.me/${whatsappNum}?text=${formattedWhatsAppMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-1/2 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-98"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Instant WhatsApp Quote</span>
                      </a>

                      <button
                        type="submit"
                        className="w-full sm:w-1/2 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Proposal Request</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-400">
                      🔒 No spam. We respect your event privacy and only share tailored quotes.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Direct Helplines, Office Info & FAQs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hotline Card */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Direct Hotline &amp; Studio</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <a
                    href={`tel:${phoneNum}`}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors block"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">{CONTACT_INFO.phoneDisplay}</div>
                      <div className="text-[11px] text-slate-400">Primary Booking Helpline (24x7)</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNum}?text=${formattedWhatsAppMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors block"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">{CONTACT_INFO.whatsappDisplay} (WhatsApp Business)</div>
                      <div className="text-[11px] text-slate-400">Instant design sharing &amp; catalog discussion</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors block"
                  >
                    <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">{CONTACT_INFO.email}</div>
                      <div className="text-[11px] text-slate-400">Official Gmail Inquiry &amp; Quotes Desk</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Daily: 8:00 AM – 10:00 PM</div>
                      <div className="text-[11px] text-slate-400">Urgent wedding setup hotline active round-the-clock</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-2 pt-1">
                  {FAQS.slice(0, 4).map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/10 overflow-hidden bg-slate-950/60"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-3 text-left text-xs font-semibold text-white flex items-center justify-between gap-2"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                              isOpen ? "rotate-180 text-emerald-400" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-3 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <QuickActionBar />
    </main>
  );
}
