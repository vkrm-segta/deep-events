"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryPhoto } from "@/data/eventsData";
import { Sparkles, Eye, MessageCircle, MapPin, Star } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

interface InteractiveGalleryProps {
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

export function InteractiveGallery({ onOpenLightbox }: InteractiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const phoneNum = CONTACT_INFO.whatsappNumber;

  const categories = [
    { id: "all", name: "All Real Work", hindi: "सभी फोटो", icon: "✨" },
    { id: "wedding-home", name: "Wedding Homes", hindi: "घर की सजावट", icon: "🏡" },
    { id: "haldi-mehndi", name: "Haldi & Mehndi", hindi: "हल्दी व मेहंदी", icon: "🌼" },
    { id: "reception-stage", name: "Reception & Stages", hindi: "स्टेज व रिसेप्शन", icon: "👑" },
    { id: "sports-events", name: "Sports & Tournaments", hindi: "स्पोर्ट्स टूर्नामेंट", icon: "🏆" },
    { id: "dj-sound", name: "DJ & Dance Floor", hindi: "डीजे व लाइट्स", icon: "🎧" },
    { id: "jagran-bhakti", name: "Guru Kirtan", hindi: "गुरु कीर्तन दरबार", icon: "ੴ" },
    { id: "room-decor", name: "First Night Room", hindi: "कमरे की सजावट", icon: "🌹" },
  ];

  // Curated gallery photos, excluding removed items [18, 25, 26, 27]
  const EXCLUDED_PHOTO_IDS = [18, 25, 26, 27];
  const sportsPhotos = GALLERY_ITEMS.filter((item) => [101, 102, 103, 104].includes(item.id));

  const allGalleryPhotos: GalleryPhoto[] = [
    ...sportsPhotos,
    ...Array.from({ length: 35 }, (_, index) => index + 1)
      .filter((photoId) => !EXCLUDED_PHOTO_IDS.includes(photoId))
      .map((photoId) => {
        const existing = GALLERY_ITEMS.find((item) => item.id === photoId);
        if (existing) return existing;

        let cat: GalleryPhoto["category"] = "wedding-home";
        let title = `Grand Indian Celebration Decor #${photoId}`;
        let hindi = `भारतीय उत्सव की भव्य सजावट #${photoId}`;
        let tag = "Wedding Decor";

        if (photoId === 23) {
          cat = "reception-stage";
          title = "Royal Floral Wedding Entrance Walkway";
          hindi = "शाही पुष्प प्रवेश द्वार व वॉकवे";
          tag = "Entrance Decor";
        } else if (photoId === 19) {
          cat = "wedding-home";
          title = "Illuminated Floral Villa Facade";
          hindi = "रोशनी व फूलों से सजी कोठी";
          tag = "Wedding Home";
        } else if ([16, 22].includes(photoId)) {
          cat = "room-decor";
          title = "Romantic Rose & Fairy Canopy Setup";
          hindi = "गुलाब व फेयरी नेट से सजा कमरा";
          tag = "Room Decor";
        } else if ([30, 31].includes(photoId)) {
          cat = "reception-stage";
          title = "Royal Wedding Pavilion & Chandelier Stage";
          hindi = "शाही मंडप व झूमर से सजी स्टेज";
          tag = "Reception";
        } else if ([35].includes(photoId)) {
          cat = "haldi-mehndi";
          title = "Marigold Floral Umbrella Haldi Vibe";
          hindi = "पीले गेंदे के फूलों से सजी हल्दी सेज";
          tag = "Haldi & Mehndi";
        } else if ([33, 34, 17].includes(photoId)) {
          cat = "sports-events";
          title = "Sports Arena Staging & VIP Pavilion";
          hindi = "स्पोर्ट्स टूर्नामेंट स्टेज व ग्राउंड डेकोर";
          tag = "Sports Arena";
        }

        return {
          id: photoId,
          src: `/events/event-${photoId}.png`,
          category: cat,
          title,
          hindiTitle: hindi,
          tag,
          badgeColor: "#10b981",
          description:
            photoId === 23
              ? "Magnificent illuminated entrance archway draped in blush pink silks, cascading wisterias, chandeliers, and red carpet walkway."
              : "Authentic client event execution with 100% on-time floral artistry and glowing evening ambience.",
          location: "Delhi NCR / Haryana / Punjab",
          rating: 5,
        };
      }),
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? allGalleryPhotos
      : allGalleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Event Portfolio • 35+ तस्वीरें</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explore Genuine Client Decor Transformations
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            No stock mockups! Every photograph is from genuine homes, farmhouses, and venues 
            decorated by our master team across Delhi NCR, Haryana and Punjab.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((c) => {
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
                {isSelected && (
                  <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
                    {filteredPhotos.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-white/25 flex flex-col shadow-md transition-colors"
            >
              {/* Image Container */}
              <div
                onClick={() => onOpenLightbox(photo)}
                className="relative aspect-4/3 sm:aspect-5/4 w-full overflow-hidden bg-slate-950 cursor-pointer group"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-white bg-black/75 backdrop-blur-md border border-white/10">
                    {photo.tag}
                  </span>
                </div>

                {/* Eye Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Photo Caption Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {photo.location}
                    </span>
                    <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      5.0
                    </span>
                  </div>

                  <h3
                    onClick={() => onOpenLightbox(photo)}
                    className="text-sm font-bold line-clamp-1 cursor-pointer text-white hover:text-emerald-400 transition-colors"
                  >
                    {photo.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {photo.description}
                  </p>
                </div>

                {/* 1-Click WhatsApp Booking */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenLightbox(photo)}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Inspect HD
                  </button>

                  <a
                    href={`https://wa.me/${phoneNum}?text=${encodeURIComponent(
                      `Namaste! I love this setup from your gallery: ${photo.title} (${photo.hindiTitle} - Image #${photo.id}). Can I get this exact decor for my date?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xs flex items-center gap-1.5 transition-colors"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Book This Setup</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
