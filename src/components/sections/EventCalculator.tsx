"use client";

import React, { useState } from "react";
import { Calculator, Check, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export function EventCalculator() {
  const [eventType, setEventType] = useState<string>("wedding-home");
  const [scale, setScale] = useState<string>("medium");
  const [flowerType, setFlowerType] = useState<string>("hybrid");
  const [guestCount, setGuestCount] = useState<number>(300);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "fairy-lights",
    "gate-arch",
  ]);

  const eventTypes = [
    { id: "wedding-home", name: "Wedding Home Decor", hindi: "शादी में घर की सजावट", icon: "🏡" },
    { id: "haldi-mehndi", name: "Haldi & Mehndi Setup", hindi: "हल्दी व मेहंदी सेज", icon: "🌼" },
    { id: "reception-stage", name: "Royal Reception Stage", hindi: "भव्य रिसेप्शन स्टेज", icon: "👑" },
    { id: "dj-sound", name: "DJ, Truss & LED Floor", hindi: "डीजे, ट्रस्ट व डांस फ्लोर", icon: "🎧" },
    { id: "jagran-bhakti", name: "Guru Kirtan & Darbar", hindi: "गुरु कीर्तन व अलौकिक दरबार", icon: "ੴ" },
    { id: "room-decor", name: "Romantic Room Decor", hindi: "कमरे की सजावट (फर्स्ट नाइट)", icon: "🌹" },
    { id: "sports-events", name: "Sports Arena Event", hindi: "स्पोर्ट्स टूर्नामेंट ग्राउंड", icon: "🏏" },
  ];

  const scaleOptions = [
    { id: "compact", name: "Intimate (Small House / Room)" },
    { id: "medium", name: "Standard (Villa / House + Lawn)" },
    { id: "grand", name: "Grand (Palace / Banquet / Farmhouse)" },
  ];

  const flowerOptions = [
    { id: "artificial", name: "Premium Silk Artificial", tag: "Budget Friendly" },
    { id: "hybrid", name: "Hybrid (Real + Silk Flowers)", tag: "Most Popular" },
    { id: "fresh", name: "100% Exotic Fresh Flowers", tag: "Ultra Fragrant" },
  ];

  const addonsList = [
    { id: "fairy-lights", name: "Curtain Fairy Lights & Gate Arch", tag: "Popular", icon: "✨" },
    { id: "gate-arch", name: "Royal Entrance Floral Gate", tag: "Premium", icon: "🌸" },
    { id: "truss-cage", name: "Aluminum Truss & Moving Beam Lights", tag: "Concert", icon: "💡" },
    { id: "led-dance-floor", name: "P3 LED Visuals & Illuminated Dance Floor", tag: "High Energy", icon: "🕺" },
    { id: "cold-pyro", name: "Cold Pyro Sparklers & Heavy Fog Machine", tag: "Special FX", icon: "🎆" },
    { id: "punjabi-dhol", name: "Live Punjabi Dhol Group (Grand Entry)", tag: "Live Entry", icon: "🥁" },
    { id: "flower-shower", name: "Flower Shower / Pushp Varsha Cannon", tag: "Royal Seva", icon: "🌺" },
    { id: "generator-backup", name: "Silent DG Generator Power Backup", tag: "100% Uptime", icon: "⚡" },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentEvent = eventTypes.find((e) => e.id === eventType) || eventTypes[0];
  const currentScale = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];
  const currentFlower = flowerOptions.find((f) => f.id === flowerType) || flowerOptions[1];

  const phoneNum = CONTACT_INFO.whatsappNumber;
  const whatsappQuoteMsg = encodeURIComponent(
    `*Deep Events Custom Event Specification:*\n` +
      `• Event: ${currentEvent.name} (${currentEvent.hindi})\n` +
      `• Scale: ${currentScale.name}\n` +
      `• Flowers: ${currentFlower.name}\n` +
      `• Estimated Guests: ${guestCount}\n` +
      `• Selected Add-ons: ${
        selectedAddons.length > 0
          ? selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.name).join(", ")
          : "Standard Inclusions"
      }\n\n` +
      `Please confirm availability and share a bespoke quote for my date!`
  );

  return (
    <section id="calculator" className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Event Package Planner • खर्च व पैकेज प्लानर</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Custom Event Package &amp; Requirements Estimator
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            Select your event type, flowers, venue scale, and special effects to receive a tailored
            quote on WhatsApp.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-white/10 space-y-6">
            {/* Step 1: Select Event */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-300">
                1. Select Event Type (आयोजन का प्रकार):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {eventTypes.map((et) => {
                  const isSel = eventType === et.id;
                  return (
                    <button
                      key={et.id}
                      onClick={() => setEventType(et.id)}
                      className={`p-3 rounded-2xl border text-left transition-colors ${
                        isSel
                          ? "border-emerald-500 bg-emerald-500/15 text-white shadow-xs"
                          : "border-white/10 bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-xl block mb-1">{et.icon}</span>
                      <span className="text-xs font-semibold block leading-tight">{et.name}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{et.hindi}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Venue Scale */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-300">
                2. Venue Scale / Area (जगह का आकार):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scaleOptions.map((sc) => {
                  const isSel = scale === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setScale(sc.id)}
                      className={`p-3 rounded-xl border text-xs text-left transition-colors ${
                        isSel
                          ? "border-emerald-500 bg-emerald-500/15 text-white font-bold"
                          : "border-white/10 bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      {sc.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Flower Material */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-300">
                3. Flower Preference (फूलों की गुणवत्ता):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {flowerOptions.map((fl) => {
                  const isSel = flowerType === fl.id;
                  return (
                    <button
                      key={fl.id}
                      onClick={() => setFlowerType(fl.id)}
                      className={`p-3 rounded-xl border text-left transition-colors ${
                        isSel
                          ? "border-emerald-500 bg-emerald-500/15 text-white font-bold"
                          : "border-white/10 bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-xs font-bold block">{fl.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full inline-block mt-1 bg-white/10 text-slate-300">
                        {fl.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Add-ons Multi-Select */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-300">
                4. Production &amp; Special Effects (अतिरिक्त सुविधाएं):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addonsList.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs flex items-center justify-between transition-colors ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-500/15 text-white"
                          : "border-white/10 bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{addon.icon}</span>
                        <span>{addon.name}</span>
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                            isSelected
                              ? "bg-emerald-500 text-white border-emerald-500"
                              : "border-slate-500"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Guest Slider */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between items-center mb-1 text-xs font-bold text-slate-300">
                <span>Estimated Guest Count (मेहमान संख्या):</span>
                <span className="text-emerald-400 text-sm">{guestCount} Guests</span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-white/10 space-y-6 lg:sticky lg:top-24">
            <div className="pb-4 border-b border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Custom Event Proposal
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Selected Package Summary
              </h3>
            </div>

            {/* Bespoke Quote Display */}
            <div className="p-5 rounded-2xl text-center space-y-1.5 bg-emerald-950/40 border border-emerald-500/30">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                100% Tailored Proposal
              </span>
              <div className="text-2xl font-black text-white tracking-tight">
                Bespoke Direct Quote
              </div>
              <p className="text-[11px] text-slate-300">
                *Accurate quotation based on your venue size, date &amp; decor needs
              </p>
            </div>

            {/* Specifications summary list */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Event Type:</span>
                <span className="font-semibold text-white">{currentEvent.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Venue Scale:</span>
                <span className="font-semibold text-white">{currentScale.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Flowers:</span>
                <span className="font-semibold text-white">{currentFlower.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Add-ons:</span>
                <span className="font-semibold text-white">{selectedAddons.length} chosen</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Guests:</span>
                <span className="font-semibold text-white">~{guestCount} People</span>
              </div>
            </div>

            {/* Guarantee Pill */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Punctual completion 2-3 hours before Mahurat guaranteed.</span>
            </div>

            {/* 1-Click WhatsApp Send */}
            <a
              href={`https://wa.me/${phoneNum}?text=${whatsappQuoteMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white shadow-xl flex items-center justify-center gap-2 transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Request Custom Quote on WhatsApp</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
