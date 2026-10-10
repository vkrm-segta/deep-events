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
  ShieldCheck,
  ChevronRight,
  Eye,
  Calendar,
  Layers,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LightboxModal, UnifiedPhoto } from "@/components/common/LightboxModal";
import { EventCategoryDefinition, ServiceDefinition } from "@/data/eventCatalog";
import { CONTACT_INFO } from "@/data/contactInfo";

interface ServiceClientViewProps {
  category: EventCategoryDefinition;
  service: ServiceDefinition;
}

export function ServiceClientView({ category, service }: ServiceClientViewProps) {
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<UnifiedPhoto | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const phoneNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    `Namaste Deep Events! I am looking for details and pricing for "${service.title}" (${service.hindiTitle}) for our upcoming ${category.name}. Please share packages and dates availability.`
  );

  // Gallery items for this service exclusively
  const visibleGallery = showAllPhotos ? service.gallery : service.gallery.slice(0, 6);
  const remainingCount = Math.max(0, service.gallery.length - 6);

  // Related sibling services in this category
  const siblingServices = category.services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Breadcrumbs & Service Hero */}
      <section className="relative pt-6 pb-10 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { label: "Events", href: "/#categories" },
              { label: category.name, href: `/events/${category.slug}` },
              { label: service.title },
            ]}
          />

          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Side */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  {category.name}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  ✦ Tailored In-House Production
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-emerald-400">
                {service.hindiTitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {service.tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Get Quotation</span>
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  100% On-Time Guarantee
                </span>
                <span>•</span>
                <span>Pan-India Logistics</span>
              </div>
            </div>

            {/* Large Representative Image Hero */}
            <div className="lg:col-span-6">
              <div
                onClick={() =>
                  setSelectedLightboxPhoto({
                    id: service.id,
                    src: service.coverImage,
                    title: service.title,
                    hindiTitle: service.hindiTitle,
                    caption: service.tagline,
                    tag: service.title,
                  })
                }
                className="group relative rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-slate-900 border border-white/15 shadow-2xl cursor-pointer hover:border-emerald-500/50 transition-all"
              >
                <Image
                  src={service.coverImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-slate-200 border border-white/10">
                    Representative Setup
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-600 text-white font-semibold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Zoom Photo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About This Service & Inclusions */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                About This Service
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Custom Options if any */}
              {service.customOptions && service.customOptions.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Customization Highlights:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.customOptions.map((opt, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl text-xs bg-white/5 border border-white/10 text-slate-200"
                      >
                        ✦ {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* What We Provide (Feature List - Section 7) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  What We Provide
                </h2>
                <span className="text-xs text-emerald-400 font-semibold">
                  Standard Scope
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Work (Gallery containing ONLY images for this specific service! - Section 7 & 8) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Dedicated Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Our Work: {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real setup photographs curated strictly for this service. Click any photo to inspect in full HD.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            {service.gallery.length} verified setups
          </div>
        </div>

        {/* Gallery Grid - Only images for this specific service! */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6">
          {visibleGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() =>
                setSelectedLightboxPhoto({
                  id: photo.id,
                  src: photo.src,
                  title: photo.title,
                  caption: photo.caption,
                  tag: photo.tag || service.title,
                })
              }
              className="group relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 text-left">
                {photo.tag && (
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 text-amber-300 border border-white/10 mb-1">
                    {photo.tag}
                  </span>
                )}
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery expander if more photos exist */}
        {remainingCount > 0 && !showAllPhotos && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllPhotos(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
            >
              <span>View Full Gallery (+{remainingCount} more photos) →</span>
            </button>
          </div>
        )}
      </section>

      {/* 4. Conversion CTA - Section 7 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-r from-slate-900 via-[#111e2f] to-[#0a1e19] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              ✦ Ready to Reserve?
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Interested in This Setup?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get an exact quotation for {service.title} based on your date, venue size, and custom specifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors text-center shadow-lg shadow-emerald-600/30"
            >
              Get a Quote
            </Link>

            <a
              href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm transition-colors text-center flex items-center justify-center gap-2 shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Related Services in Same Category */}
      {siblingServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-white">
              More Services in {category.name}
            </h3>
            <Link
              href={`/events/${category.slug}`}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siblingServices.map((sibling) => (
              <Link
                key={sibling.id}
                href={`/events/${category.slug}/${sibling.slug}`}
                className="group p-3.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all flex items-center gap-3"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0">
                  <Image
                    src={sibling.coverImage}
                    alt={sibling.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
                    {sibling.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {sibling.hindiTitle}
                  </p>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedLightboxPhoto}
        photosList={service.gallery.map((g) => ({
          id: g.id,
          src: g.src,
          title: g.title,
          caption: g.caption,
          tag: g.tag || service.title,
        }))}
        onClose={() => setSelectedLightboxPhoto(null)}
        onNavigate={(p) => setSelectedLightboxPhoto(p)}
      />
    </div>
  );
}
