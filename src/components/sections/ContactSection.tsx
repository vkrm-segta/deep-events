"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("Wedding Home Decor");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNum = CONTACT_INFO.phone;
  const whatsappNum = CONTACT_INFO.whatsappNumber;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = encodeURIComponent(
      `*New Event Booking Request:*\n` +
        `• Name: ${name || "Client"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• City/Location: ${city || "Not specified"}\n` +
        `• Event Date: ${date || "To be decided"}\n` +
        `• Event Type: ${eventType}\n` +
        `• Notes / Requirements: ${notes || "None"}\n\n` +
        `Please check availability and send photos/pricing.`
    );
    window.open(`https://wa.me/${whatsappNum}?text=${formattedMsg}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Booking Desk • आसान बुकिंग व संपर्क</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Lock Your Date &amp; Get an Instant Decor Consultation
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            Auspicious wedding dates book out weeks in advance. Fill out the quick details below or reach our 
            director directly on WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Connect & Hubs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Helpline &amp; WhatsApp Desk
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${phoneNum}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-slate-800/60 hover:bg-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-white text-sm">{CONTACT_INFO.phoneDisplay}</span>
                    <span className="text-xs text-slate-400">24/7 Event Helpline (Hindi / Punjabi / English)</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent("Namaste Deep Events! I want to discuss event planning.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="font-bold block text-white text-sm">Official WhatsApp Desk ({CONTACT_INFO.whatsappDisplay})</span>
                    <span className="text-xs text-emerald-300">Send Instagram / Pinterest photos directly</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-slate-800/60 hover:bg-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-white text-sm">{CONTACT_INFO.email}</span>
                    <span className="text-xs text-slate-400">Official Gmail Consultation &amp; RFP Desk</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Active Service Hubs:</strong> Ambala, Kurukshetra, Yamuna Nagar, Patiala, Chandigarh, Panchkula, Mohali
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Setup Teams:</strong> On-site operational teams working 24x7 for timely completion
                  </span>
                </div>
              </div>
            </div>

            {/* Auspicious Blessing Box */}
            <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-center space-y-1">
              <span className="text-xl">🙏</span>
              <p className="text-xs font-semibold text-amber-300">
                &ldquo;अतिथि देवो भव — आपके मेहमानों का स्वागत हम राजसी ठाठ-बाट से कराएंगे।&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900 border border-white/10">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                    Your Full Name (नाम):
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                    Phone / WhatsApp (फोन नंबर):
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98123 45678"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                    City / Venue (शहर व वेन्यू):
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ambala / Kurukshetra / Chandigarh"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                    Event Date (आयोजन की तारीख):
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                  Primary Service Needed (मुख्य सेवा):
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500 [color-scheme:dark]"
                >
                  <option value="Wedding Home Decor">Wedding Home Decor (घर की सजावट)</option>
                  <option value="Haldi & Mehndi Setup">Haldi & Mehndi Setup (हल्दी व मेहंदी)</option>
                  <option value="Wedding Reception Stage">Wedding Reception Stage (शाही स्टेज व मंडप)</option>
                  <option value="DJ, Truss & LED Dance Floor">DJ, Truss & LED Dance Floor (डीजे सेटअप)</option>
                  <option value="Guru Kirtan / Devotional Darbar">Guru Kirtan / Devotional Darbar (गुरु कीर्तन व दरबार)</option>
                  <option value="Room Decor (First Night)">Room Decor / First Night (कमरे की सजावट)</option>
                  <option value="Sports Tournament Event">Sports Tournament Event (स्पोर्ट्स ग्राउंड)</option>
                  <option value="Custom Pinterest Design">Custom Pinterest / Instagram Design (मनपसंद डिजाइन)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-300">
                  Special Requests / Decor Notes (कोई विशेष पसंद):
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Yellow & green marigold theme for Haldi, floral jhoola, entrance arch..."
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-bold text-white shadow-xl flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Booking Details Directly on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

              {isSubmitted && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp opened! Our event planning director will connect with you right away.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
