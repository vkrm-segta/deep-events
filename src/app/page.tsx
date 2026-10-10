"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Calendar,
  Layers,
  Volume2,
  Users2,
  Trophy,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { LightboxModal, UnifiedPhoto } from "@/components/common/LightboxModal";
import { EventCategoryCard } from "@/components/cards/EventCategoryCard";
import { EVENT_CATEGORIES, getFeaturedWorkByCategory, GalleryItem } from "@/data/eventCatalog";
import { CONTACT_INFO } from "@/data/contactInfo";

export default function HomePage() {
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<UnifiedPhoto | null>(null);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>("weddings");

  const phoneNum = CONTACT_INFO.phone;
  const whatsappNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    "Namaste Deep Events! I would like to plan an event and get a customized quotation."
  );

  const activeFeaturedPhotos = getFeaturedWorkByCategory(activeGalleryCategory);

  const whyChooseUsPillars = [
    {
      icon: Layers,
      title: "Complete Event Management",
      hindi: "शुरुआत से अंत तक सम्पूर्ण व्यवस्था",
      desc: "Turnkey planning across venue setup, timing, safety, and coordination so families and organizers celebrate stress-free.",
    },
    {
      icon: Sparkles,
      title: "Customized Decoration",
      hindi: "मनपसंद थीम व कस्टम डिजाइन",
      desc: "From Pinterest/Instagram inspiration to living reality — bespoke floral backdrops, lighting halos, and structural sets.",
    },
    {
      icon: Volume2,
      title: "Professional Sound & Lighting",
      hindi: "कॉन्सर्ट-ग्रेड साउंड व लाइव एलईडी",
      desc: "Acoustically tuned line-arrays, outdoor stadium PA systems, computerized sharp beams, and P3 high-definition screens.",
    },
    {
      icon: Users2,
      title: "Experienced In-House Team",
      hindi: "अनुभवी व कुशल कारीगरों की टीम",
      desc: "Dedicated project leads, master floral artisans, lighting technicians, and sound engineers with over a decade of mastery.",
    },
    {
      icon: Trophy,
      title: "End-to-End Execution",
      hindi: "100% समय पर मुकम्मल डिलीवरी",
      desc: "Rigorous checklist execution guaranteed ahead of auspicious Mahurats and match whistle timings with zero last-minute delays.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      {/* 1. Navbar */}
      <Navbar />

      <div className="flex-1 space-y-16 sm:space-y-24 relative z-10 pb-16">
        {/* 2. Hero Section - Section 5 */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Core Value Proposition */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>North India's Premier Event Studio</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-white leading-tight">
                  We Create Events <br />
                  <span className="shimmer-text">People Remember.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Expert management and bespoke production for grand weddings, high-energy sports tournaments, 
                  and sacred Guru Kirtan &amp; Jagran samagams. Structured, transparent, and executed to perfection.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Plan Your Event</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>

                  <a
                    href="#categories"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 font-semibold text-sm transition-all"
                  >
                    <span>Explore Events</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                    <div className="text-xs text-slate-400 font-medium">On-Time Execution</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">35+</div>
                    <div className="text-xs text-slate-400 font-medium">Curated Services</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-cyan-400">1,200+</div>
                    <div className="text-xs text-slate-400 font-medium">Successful Events</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5]">
                  <Image
                    src="/events/event-28.png"
                    alt="Deep Events Signature Stage"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Floating Tag */}
                  <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/15 space-y-1">
                    <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
                      <span>Bespoke Event Production</span>
                      <span className="text-[11px] text-slate-300">Delhi NCR • Punjab</span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      From Grand Celebrations to Spiritual Diwans
                    </div>
                    <p className="text-xs text-slate-400">
                      Explore each event category with dedicated services &amp; authentic galleries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Event Categories - Section 5 */}
        <section id="categories" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300">
                <span>Select Your Event Type</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
                Choose an Event Category
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe in structured exploration. Select your event type below to view its specific 
                services, verified photos, and custom options — without clutter.
              </p>
            </div>

            {/* 3 Major Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {EVENT_CATEGORIES.map((cat) => (
                <EventCategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us - Section 5 */}
        <section className="bg-slate-900/40 border-y border-white/5 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why Choose Deep Events
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Five pillars that ensure every setup is reliable, beautiful, and delivered on schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {whyChooseUsPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col justify-between space-y-3 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                        <p className="text-[11px] font-semibold text-emerald-400/90 mt-0.5">
                          {pillar.hindi}
                        </p>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Featured Work - Section 5 (Category-Isolated Tabs) */}
        <section id="work" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300">
                  <span>Authentic Portfolio</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                  Featured Work by Category
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  We never mix unrelated event pictures. Select a category below to explore verified work 
                  for that specific event type.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 self-start md:self-auto">
                {EVENT_CATEGORIES.map((cat) => {
                  const isActive = activeGalleryCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveGalleryCategory(cat.slug)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-md"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gallery Grid (Isolated for selected category only) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {activeFeaturedPhotos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedLightboxPhoto({
                    id: item.id,
                    src: item.src,
                    title: item.title,
                    caption: item.caption,
                    tag: item.tag || "Featured Decor",
                  })}
                  className="group relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 text-left">
                    {item.tag && (
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 text-amber-300 border border-white/10 mb-1">
                        {item.tag}
                      </span>
                    )}
                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Dedicated Category Page */}
            <div className="pt-2 text-center">
              <Link
                href={`/events/${activeGalleryCategory}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
              >
                <span>View All Services &amp; Work in {EVENT_CATEGORIES.find((c) => c.slug === activeGalleryCategory)?.name}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Final Conversion CTA - Section 5 */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-900 via-[#0d1627] to-[#0a1f18] border border-white/15 shadow-2xl text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400">
                <span>✦ Stress-Free Planning &amp; Execution</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                Planning an Event? <br />
                <span className="shimmer-text">Let's Make It Special.</span>
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                Share your event date, venue, and decor requirements. Receive an itemized proposal, 
                transparent pricing, and personal consultation within hours.
              </p>
            </div>

            {/* Buttons: Get a Quote | WhatsApp Us */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-sm shadow-xl transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              Direct Helpline: {CONTACT_INFO.phoneDisplay} &bull; WhatsApp: {CONTACT_INFO.whatsappDisplay} &bull; Active 7 Days a Week
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <QuickActionBar />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedLightboxPhoto}
        photosList={activeFeaturedPhotos.map((p) => ({
          id: p.id,
          src: p.src,
          title: p.title,
          caption: p.caption,
          tag: p.tag || "Decor",
        }))}
        onClose={() => setSelectedLightboxPhoto(null)}
        onNavigate={(p) => setSelectedLightboxPhoto(p)}
      />
    </main>
  );
}
