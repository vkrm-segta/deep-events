"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, MapPin, Star, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export interface UnifiedPhoto {
  id: string | number;
  src: string;
  title: string;
  hindiTitle?: string;
  tag?: string;
  description?: string;
  caption?: string;
  location?: string;
  rating?: number;
}

interface LightboxModalProps {
  photo: UnifiedPhoto | null;
  photosList?: UnifiedPhoto[];
  onClose: () => void;
  onNavigate?: (photo: UnifiedPhoto) => void;
}

export function LightboxModal({ photo, photosList, onClose, onNavigate }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!photo || !photosList || photosList.length <= 1 || !onNavigate) return;
      const currentIndex = photosList.findIndex((p) => p.src === photo.src);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % photosList.length;
        onNavigate(photosList[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + photosList.length) % photosList.length;
        onNavigate(photosList[prevIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photo, photosList, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photosList ? photosList.findIndex((p) => p.src === photo.src) : -1;
  const hasMultiple = photosList && photosList.length > 1 && onNavigate;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultiple && currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % photosList.length;
      onNavigate(photosList[nextIndex]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultiple && currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + photosList.length) % photosList.length;
      onNavigate(photosList[prevIndex]);
    }
  };

  const phoneNum = CONTACT_INFO.whatsappNumber;
  const desc = photo.description || photo.caption || "Signature setup designed & executed by our master artisans.";
  const whatsappMsg = encodeURIComponent(
    `Namaste Deep Events! I am looking for this specific setup:\n` +
      `• Design: ${photo.title}\n` +
      `• Image: ${photo.src}\n` +
      `• Category: ${photo.tag || "Event Setup"}\n\n` +
      `Please let me know availability and pricing.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/10 bg-[#0f172a] flex flex-col md:flex-row overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close photo view"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-black text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Full HD Image Preview with Navigation Chevrons */}
        <div className="relative md:w-3/5 min-h-[320px] sm:min-h-[440px] md:min-h-[520px] bg-black flex items-center justify-center">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-contain"
            priority
          />

          {hasMultiple && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {hasMultiple && (
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 text-[11px] font-mono text-slate-300 border border-white/10">
              {currentIndex + 1} / {photosList.length}
            </div>
          )}
        </div>

        {/* Right: Decor Details & Direct Booking Action */}
        <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-6 bg-slate-900">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                {photo.tag || "Signature Decor"}
              </span>
              <span className="text-xs text-slate-400 font-mono">Ref #{photo.id}</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {photo.title}
              </h3>
              {photo.hindiTitle && (
                <p className="text-xs text-emerald-400 font-semibold mt-1">
                  {photo.hindiTitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300 py-2 border-y border-white/10">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {photo.location || "North India / Pan-India"}
              </span>
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                {photo.rating || 5}.0 Rating
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {desc}
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Exact Setup Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Delivered and managed end-to-end by experienced crew with on-time commitment.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <a
              href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-xl flex items-center justify-center gap-2 transition-colors active:scale-98"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire This Setup on WhatsApp</span>
            </a>
            <p className="text-center text-[10px] text-slate-400">
              ⚡ Instant response with quotation &amp; date check
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
