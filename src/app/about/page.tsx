import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Users2,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CONTACT_INFO, PRIMARY_LOCATIONS } from "@/data/contactInfo";

export const metadata: Metadata = {
  title: "About Deep Events & Decor | Premium Event Management Studio",
  description:
    "Learn about Deep Events & Decor: our experienced artisans, professional sound engineers, on-time commitment, and bespoke production across Weddings, Sports Tournaments & Devotional Samagams.",
};

export default function AboutPage() {
  const phoneNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    "Namaste Deep Events! I would like to learn more about your services and team."
  );

  const values = [
    {
      title: "100% On-Time Guarantee",
      hindi: "शुभ मुहूर्त व मैच समय से पहले मुकम्मल",
      desc: "We stage and light up venues at least 24 hours prior to auspicious rituals or match ceremonies, giving families and organizers total peace of mind.",
      icon: Clock,
    },
    {
      title: "Mandi-Fresh Botanicals",
      hindi: "ताजे गुलाब, गेंदा व एग्जॉटिक ऑर्किड्स",
      desc: "Direct procurement from trusted flower mandis ensures fragrant blooms that stay pristine and vibrant throughout the day and evening.",
      icon: Sparkles,
    },
    {
      title: "Engineered Safety & Truss Rigging",
      hindi: "सुरक्षित एल्युमिनियम ट्रस्ट व इलेक्ट्रिकल लोड",
      desc: "Heavy-duty aluminum trussing, fire-retardant fabric drapes, balanced electrical distribution, and silent generator backups for uninterrupted events.",
      icon: ShieldCheck,
    },
    {
      title: "Dedicated On-Site Supervisor",
      hindi: "शुरुआत से अंत तक एक समर्पित सुपरवाइजर",
      desc: "Every project has a senior coordinator stationed on-site from pre-event logistics to post-event teardown, addressing all real-time needs.",
      icon: Users2,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      <Navbar />

      <div className="flex-1 space-y-12 sm:space-y-16 relative z-10 pb-16">
        {/* Header & Breadcrumb */}
        <section className="relative pt-6 pb-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <Breadcrumbs items={[{ label: "About Our Studio" }]} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Story &bull; हमारा परिचय</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
                Crafting Celebrations into <br />
                <span className="shimmer-text">Unforgettable Memories</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Founded with a mission to eliminate event stress, Deep Events has grown into one of North India&apos;s 
                most trusted full-service event production studios — delivering signature weddings, stadium sports events, 
                and divine kirtan samagams.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Philosophy & Pillars */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                The Deep Events Philosophy
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether creating a grand Vedic mandap adorned with blush hydrangeas, rigging an outdoor cricket tournament with commentary PA sound, or setting up a tranquil white diwan for Guru Kirtan — we believe in structured clarity, uncompromising beauty, and reliable timing.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We never outsource our critical execution. Our in-house artisans, fabricators, and acoustic technicians work directly under our supervision to guarantee that what you approve in concept is what is delivered in reality.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
                  <div className="text-2xl font-black text-amber-400">12+</div>
                  <div className="text-xs text-slate-400 mt-1">Years of Excellence</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">1,200+</div>
                  <div className="text-xs text-slate-400 mt-1">Events Managed</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/15 shadow-2xl">
                <Image
                  src="/events/event-28.png"
                  alt="Deep Events Signature Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                  <span className="font-bold text-amber-300">Signature Mandap: </span>
                  Artisan floral carvings and imported crystal chandeliers.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="bg-slate-900/50 border-y border-white/5 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Our Standards of Excellence
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                How we deliver consistency and elegance across every venue.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-3 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{val.title}</h3>
                    <p className="text-xs font-semibold text-emerald-400">
                      {val.hindi}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Primary Coverage Hubs */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Areas We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Active logistics bases and artisan teams stationed across North India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {PRIMARY_LOCATIONS.map((hub, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">{hub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 border border-white/15 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Discuss Your Celebration?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Connect directly with our senior event director for date reservation and customized package recommendations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                Request Quotation
              </Link>
              <a
                href={`https://wa.me/${phoneNum}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <QuickActionBar />
    </main>
  );
}
