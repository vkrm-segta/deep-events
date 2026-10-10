"use client";

import React from "react";
import { Clock, Flower2, BadgePercent, Music2, Camera, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Flower2 className="w-6 h-6 text-emerald-400" />,
      title: "Fresh Mandi Flowers Daily",
      hindi: "रोज सुबह 4 बजे मंडी से ताजे फूल",
      desc: "Direct procurement at dawn ensures fragrant marigolds, roses, and mogra that remain vibrant for your entire ceremony.",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "Completed Before Mahurat",
      hindi: "शुभ मुहूर्त से 2-3 घंटे पहले तैयार",
      desc: "Guaranteed completion 2 to 3 hours in advance so the family can take peaceful portraits without any labor roaming around.",
    },
    {
      icon: <Camera className="w-6 h-6 text-rose-400" />,
      title: "100% Pinterest & Instagram Replica",
      hindi: "पिंटरेस्ट / इंस्टाग्राम का हूबहू डिजाइन",
      desc: "Saw a dreamy design on Instagram or Pinterest? Send us the screenshot and our artisans craft the exact identical setup.",
    },
    {
      icon: <Music2 className="w-6 h-6 text-cyan-400" />,
      title: "High-Bass Sound & DG Generator Backup",
      hindi: "धमाकेदार डीजे व साइलेंट जनरेटर",
      desc: "Concert-grade line-array sound systems with silent DG power backups so dancing never stops during power outages.",
    },
    {
      icon: <BadgePercent className="w-6 h-6 text-purple-400" />,
      title: "Zero Hidden Costs Upfront",
      hindi: "पारदर्शी बिलिंग - कोई छुपा हुआ खर्च नहीं",
      desc: "Labor, transportation, and post-event cleanup are all included transparently upfront in the quotation.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Sports & Guru Kirtan Specialists",
      hindi: "स्पोर्ट्स व गुरु कीर्तन दरबार एक्सपर्ट",
      desc: "Dedicated specialized teams for sacred Guru Kirtan flower darbars as well as professional sports ground tournament arenas.",
    },
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
            <span>🌿</span>
            <span>The Deep Events Guarantee • हमारा भरोसा</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Indian Families Trust Deep Events
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            Weddings and auspicious milestones happen once in a lifetime. We treat your family event with
            utmost dedication and craftsmanship.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-4">
                {r.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {r.title}
              </h3>
              <p className="text-xs font-semibold text-emerald-400 mb-2">
                {r.hindi}
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
