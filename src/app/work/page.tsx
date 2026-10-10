"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LightboxModal, UnifiedPhoto } from "@/components/common/LightboxModal";
import { EVENT_CATEGORIES, EventCategoryDefinition } from "@/data/eventCatalog";
import { CONTACT_INFO } from "@/data/contactInfo";

export default function WorkPortfolioPage() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("weddings");
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>("all");
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<UnifiedPhoto | null>(null);

  const phoneNum = CONTACT_INFO.whatsappNumber;

  // Current active category object
  const currentCategory = useMemo(() => {
    return EVENT_CATEGORIES.find((cat) => cat.slug === selectedCategorySlug) || EVENT_CATEGORIES[0];
  }, [selectedCategorySlug]);

  // Filtered photos strictly respecting Event -> Service hierarchy
  const displayedPhotos = useMemo(() => {
    if (selectedServiceSlug === "all") {
      // Gather photos from this category's services
      const allCategoryPhotos: {
        id: string | number;
        src: string;
        title: string;
        caption: string;
        tag?: string;
        serviceName: string;
        serviceSlug: string;
      }[] = [];

      currentCategory.services.forEach((service) => {
        service.gallery.forEach((photo) => {
          allCategoryPhotos.push({
            ...photo,
            serviceName: service.title,
            serviceSlug: service.slug,
          });
        });
      });

      return allCategoryPhotos;
    } else {
      const activeService = currentCategory.services.find((s) => s.slug === selectedServiceSlug);
      if (!activeService) return [];
      return activeService.gallery.map((photo) => ({
        ...photo,
        serviceName: activeService.title,
        serviceSlug: activeService.slug,
      }));
    }
  }, [currentCategory, selectedServiceSlug]);

  // When changing category, reset service filter to "all"
  const handleCategoryChange = (slug: string) => {
    setSelectedCategorySlug(slug);
    setSelectedServiceSlug("all");
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      <Navbar />

      <div className="flex-1 space-y-10 sm:space-y-14 relative z-10 pb-16">
        {/* 1. Header & Breadcrumbs */}
        <section className="relative pt-6 pb-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Our Work", href: "/work" },
                { label: currentCategory.name },
              ]}
            />

            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Structured Portfolio &bull; कभी मिक्स नहीं</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
                Our Work &amp; Gallery
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explore our portfolio organized strictly by event type and service. Select an event category 
                and drill down to individual services without sifting through mixed galleries.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Structured Hierarchy Filter Bar - Section 8 */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-xl space-y-5">
            {/* Step 1: Major Event Category Selector */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-emerald-400" />
                <span>Step 1: Choose Event Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {EVENT_CATEGORIES.map((cat) => {
                  const isActive = selectedCategorySlug === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-md scale-[1.02]"
                          : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="ml-1.5 text-[11px] opacity-80">({cat.hindiName})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Specific Service Filter */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Step 2: Filter by Service in {currentCategory.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedServiceSlug("all")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedServiceSlug === "all"
                      ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  All Services in {currentCategory.name}
                </button>

                {currentCategory.services.map((srv) => {
                  const isActive = selectedServiceSlug === srv.slug;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceSlug(srv.slug)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                          : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {srv.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Verified Photo Gallery Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>Showing: </span>
              <span className="text-emerald-400">
                {selectedServiceSlug === "all"
                  ? `All ${currentCategory.name} Photos`
                  : currentCategory.services.find((s) => s.slug === selectedServiceSlug)?.title}
              </span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {displayedPhotos.length} Photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {displayedPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() =>
                  setSelectedLightboxPhoto({
                    id: photo.id,
                    src: photo.src,
                    title: photo.title,
                    caption: photo.caption,
                    tag: photo.tag || photo.serviceName,
                  })
                }
                className="group relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 text-left">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 text-amber-300 border border-white/10 mb-1">
                    {photo.tag || photo.serviceName}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Category Page Link */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <h3 className="text-sm font-bold text-white">
                Looking for full details on {currentCategory.name}?
              </h3>
              <p className="text-xs text-slate-400">
                Explore individual service breakdown, equipment scope, and custom options.
              </p>
            </div>
            <Link
              href={`/events/${currentCategory.slug}`}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Go to {currentCategory.name} Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 4. Bottom Booking CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-6 sm:p-10 bg-slate-900 border border-white/15 text-center space-y-4">
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              Saw a Decor Look You Love?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Share a photo screenshot or reference code directly on WhatsApp. We provide prompt budget estimations and venue feasibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                Request Quotation
              </Link>
              <a
                href={`https://wa.me/${phoneNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <QuickActionBar />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedLightboxPhoto}
        photosList={displayedPhotos.map((p) => ({
          id: p.id,
          src: p.src,
          title: p.title,
          caption: p.caption,
          tag: p.tag || p.serviceName,
        }))}
        onClose={() => setSelectedLightboxPhoto(null)}
        onNavigate={(p) => setSelectedLightboxPhoto(p)}
      />
    </main>
  );
}
