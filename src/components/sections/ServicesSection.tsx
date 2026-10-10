"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_LIST, ServiceItem } from "@/data/eventsData";
import { CheckCircle2, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export function ServicesSection({ onSelectPhoto }: { onSelectPhoto?: (src: string) => void }) {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_LIST[0]);

  const phoneNum = CONTACT_INFO.whatsappNumber;

  return (
    <section id="services" className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
            <span>🌸</span>
            <span>Our Core Event Services • हमारी सेवाएं</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Unforgettable Decor for Every Celebration
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            From grand wedding mandaps and Haldi canopies to divine Guru Kirtan darbars and high-bass DJ stages — 
            premium decor tailored to your venue and budget.
          </p>
        </div>

        {/* Service Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SERVICES_LIST.map((srv) => {
            const isCurrent = selectedService.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  isCurrent
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10"
                }`}
              >
                <span>{srv.icon}</span>
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Spotlight */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-900/90 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedService.badge}
                </span>
                <span className="text-xs font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  ✦ Bespoke Proposal
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium mt-1 text-emerald-400">
                  {selectedService.hindiTitle} • {selectedService.subtitle}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                {selectedService.description}
              </p>

              {/* Included Highlights */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Included Features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization Options */}
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Customization Options:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.customOptions.map((opt, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10 bg-white/5 text-slate-300"
                    >
                      ✨ {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`https://wa.me/${phoneNum}?text=${encodeURIComponent(
                    `Hello Deep Events! I want to book: ${selectedService.title} (${selectedService.hindiTitle}). Please share photos and a bespoke quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md flex items-center gap-2 transition-colors"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book This Service on WhatsApp</span>
                </a>

                <a
                  href="#calculator"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold border border-white/15 bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <span>Estimate Package Cost</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Photo Mosaic */}
            <div className="lg:col-span-6 space-y-3">
              {/* Main Photo */}
              <div
                onClick={() => onSelectPhoto && onSelectPhoto(selectedService.bannerImage)}
                className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-white/10 bg-slate-950"
              >
                <Image
                  src={selectedService.bannerImage}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1.5 border border-white/10">
                  <span>📸 Real Client Work</span>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-4 gap-2">
                {selectedService.galleryImages.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectPhoto && onSelectPhoto(img)}
                    className="relative aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer shadow-xs group bg-slate-950"
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="140px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
