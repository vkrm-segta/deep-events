"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Flower2,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

interface Atmosphere {
  id: string;
  category: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  image: string;
  bloomHighlights: string[];
  icon: string;
}

const ATMOSPHERES: Atmosphere[] = [
  {
    id: "mandap",
    category: "Royal Wedding",
    title: "Vedic Palace Mandap",
    hindiTitle: "भव्य पिंक फ्लोरल वैवाहिक मंडप",
    tagline: "Cascading orchids, blush hydrangeas, gold bells & royal silk drapes",
    image: "/events/event-28.png",
    bloomHighlights: ["Exotic Orchids", "Blush Hydrangeas", "Royal Fabric Drapes"],
    icon: "🌸",
  },
  {
    id: "haldi",
    category: "Pre-Wedding",
    title: "Sunlit Haldi & Mehndi Canopy",
    hindiTitle: "पीले गेंदे के फूलों से सजी हल्दी सेज",
    tagline: "Dense Kolkata marigold canopies, brass urlis & floral swing jhoolas",
    image: "/events/event-21.png",
    bloomHighlights: ["Kolkata Marigolds", "Handmade Tassels", "Lotus Brass Urlis"],
    icon: "🌼",
  },
  {
    id: "kirtan",
    category: "Devotional Samagam",
    title: "Divine Guru Kirtan Darbar",
    hindiTitle: "गुरु कीर्तन व अलौकिक पुष्प दरबार",
    tagline: "Palki Sahib floral seva, white lily chandoa & sacred acoustic ambience",
    image: "/events/event-6.png",
    bloomHighlights: ["White Chrysanthemums", "Exotic Orchids", "Sacred Chandoa Seva"],
    icon: "ੴ",
  },
  {
    id: "home",
    category: "Wedding Home",
    title: "Illuminated Royal Haveli",
    hindiTitle: "गुलाबों व जगमगाती रोशनी से सजा घर",
    tagline: "Warm fairy-light curtains, grand entrance floral arches & rooftop chandeliers",
    image: "/events/event-2.png",
    bloomHighlights: ["Fairy Light Curtains", "Fresh Door Garlands", "Grand Entrance Arch"],
    icon: "🏡",
  },
  {
    id: "stage",
    category: "Sangeet & Party",
    title: "Concert Truss & Laser Stage",
    hindiTitle: "धमाकेदार डीजे, ट्रस्ट व लेजर लाइट",
    tagline: "Heavy-duty aluminum truss, sharp beam lights, LED video wall & line-array",
    image: "/events/event-30.png",
    bloomHighlights: ["Aluminium 4-Pillar Truss", "Sharpy Beam Lights", "High-Bass Line Array"],
    icon: "🎧",
  },
  {
    id: "room",
    category: "Honeymoon Suite",
    title: "Romantic Rose Petal Art",
    hindiTitle: "गुलाब की पंखुड़ियों से सजी सेज",
    tagline: "Intricate floral bed art, scented candles, warm ambient lanterns & rose canopy",
    image: "/events/event-11.png",
    bloomHighlights: ["Dutch Crimson Roses", "Aromatherapy Tealights", "Swan Pillow Monogram"],
    icon: "🌹",
  },
];

export function HeroSection() {
  const [activeAtmosphereIndex, setActiveAtmosphereIndex] = useState(0);
  const currentAtmosphere = ATMOSPHERES[activeAtmosphereIndex];

  const phoneNum = CONTACT_INFO.phone;
  const whatsappNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    `Hello Deep Events! I am looking for decor for my upcoming celebration. I really like your "${currentAtmosphere.title}" setup. Please share packages and dates availability.`
  );

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-20 bg-[#090d16]">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-7xl rounded-full opacity-25 blur-3xl bg-radial from-emerald-500/20 via-amber-500/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Header / Editorial Masthead */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* Top Royal Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-semibold">
            <span>✦ Estd. 2012</span>
            <span className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span>1,250+ Celebrations</span>
            <span className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span>Ambala, Kurukshetra, Tricity & Patiala ✦</span>
          </div>

          {/* High Impact Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-serif-luxury text-white">
            Luxury Weddings, Mandaps &amp;{" "}
            <span className="text-amber-400 block sm:inline">Milestone Celebrations</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-slate-300 font-normal">
            Architectural floral mandaps, sunlit Haldi canopies, celestial Guru Kirtan darbars,
            and concert-grade DJ truss stages. 100% on-time execution guaranteed before Mahurat.
          </p>

          {/* Direct Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg flex items-center gap-2 transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Instant Inquiry</span>
            </a>

            <a
              href={`tel:${phoneNum}`}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 border border-white/20 bg-slate-900/90 hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline ({CONTACT_INFO.phoneDisplay})</span>
            </a>

            <a
              href="#calculator"
              className="px-5 py-3 rounded-xl text-sm font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/50 transition-colors flex items-center gap-1.5"
            >
              <span>Package Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Clean Showcase Card (No continuous rotation or moving layers) */}
        <div className="mt-10 lg:mt-12 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 mb-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 min-w-max sm:min-w-0">
              {ATMOSPHERES.map((atm, idx) => {
                const isSelected = idx === activeAtmosphereIndex;
                return (
                  <button
                    key={atm.id}
                    onClick={() => setActiveAtmosphereIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{atm.icon}</span>
                    <span>{atm.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Featured Card */}
          <div className="rounded-3xl bg-slate-900/90 border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Photo Area */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-slate-950">
                <Image
                  src={currentAtmosphere.image}
                  alt={currentAtmosphere.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-amber-300 bg-black/75 border border-amber-400/30 backdrop-blur-md">
                  {currentAtmosphere.icon} {currentAtmosphere.category}
                </div>
              </div>

              {/* Information Area */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-slate-900">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {currentAtmosphere.hindiTitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mt-1">
                      {currentAtmosphere.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentAtmosphere.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentAtmosphere.bloomHighlights.map((bloom, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200"
                        >
                          <Flower2 className="w-3 h-3 text-emerald-400" />
                          {bloom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      5.0 (100% Client Satisfaction)
                    </span>
                    <span className="text-emerald-400 font-medium">Bespoke Proposal</span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md flex items-center justify-center gap-2 transition-colors"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire This Setup on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Ready 2-3 Hrs Before:</strong> Mahurat on-time guarantee
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300">
              <Flower2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-white">4 AM Mandi Sourcing:</strong> 100% fresh, fragrant flowers
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Pinterest Replica:</strong> Identical execution promise
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
