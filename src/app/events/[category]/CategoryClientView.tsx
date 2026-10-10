"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { EventCategoryDefinition } from "@/data/eventCatalog";
import { CONTACT_INFO } from "@/data/contactInfo";

interface CategoryClientViewProps {
  category: EventCategoryDefinition;
}

export function CategoryClientView({ category }: CategoryClientViewProps) {
  // If sports, enable subcategory sport selector
  const isSports = category.slug === "sports";
  const [selectedSport, setSelectedSport] = useState<string>("all");

  const phoneNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    `Namaste Deep Events! I am looking for professional management & decor for our upcoming ${category.name} (${category.hindiName}). Please share packages and dates availability.`
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Category Hero */}
      <section className="relative pt-6 pb-12 sm:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: "Events", href: "/#categories" },
              { label: category.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{category.badgeText}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
                {category.name}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-emerald-400">
                {category.hindiName} • {category.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire via WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] border border-white/15 bg-slate-900 shadow-2xl">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white">Full Turnkey Production: </span>
                  Setup, sound, decor, on-time handover &amp; coordination.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sport Subcategory Selector (Specific to Sports Events as per Section 4) */}
      {isSports && category.sports && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/15 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Filter className="w-4 h-4 text-emerald-400" />
                  <span>Select Your Sport (खेल का चयन करें)</span>
                </h3>
                <p className="text-xs text-slate-400">
                  First choose your specific sport to explore relevant ground setup &amp; staging services.
                </p>
              </div>
              {selectedSport !== "all" && (
                <button
                  onClick={() => setSelectedSport("all")}
                  className="text-xs text-emerald-400 hover:text-emerald-300 underline font-medium self-start sm:self-auto"
                >
                  Show All Services
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {category.sports.map((sport) => {
                const isSelected = selectedSport === sport.id;
                return (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-emerald-600 text-white border-emerald-400 shadow-md scale-[1.02]"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="text-2xl mb-1">{sport.icon}</div>
                    <div className="text-xs sm:text-sm font-bold truncate">{sport.name}</div>
                    <div className={`text-[10px] ${isSelected ? "text-emerald-100" : "text-slate-400"}`}>
                      {sport.hindiName}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedSport !== "all" && (
              <div className="pt-2 text-xs text-slate-300 bg-black/30 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-300">Selected Sport: </span>
                  {category.sports.find((s) => s.id === selectedSport)?.description}
                </div>
                <span className="text-[11px] text-amber-300 font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                  Ready to book
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Services Grid - Section 6 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <span>{category.name} Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Explore Individual Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any service below to view its dedicated gallery, inclusions, and exact specifications.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            Showing {category.services.length} services
          </div>
        </div>

        {/* Clean, elegant service cards with single representative image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {category.services.map((service) => (
            <ServiceCard
              key={service.id}
              categorySlug={category.slug}
              service={service}
            />
          ))}
        </div>
      </section>

      {/* 4. Bottom Category Consultation Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Package for {category.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We create consolidated proposals bundling stage, sound, lighting, seating, and decor 
              at transparent package prices with dedicated supervisor on-site.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Get Itemized Quote
            </Link>
            <a
              href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-colors text-center flex items-center justify-center gap-2"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
