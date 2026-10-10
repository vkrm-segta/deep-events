"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Heart, MapPin, ArrowRight, Mail } from "lucide-react";
import { EVENT_CATEGORIES } from "@/data/eventCatalog";
import { CONTACT_INFO, PRIMARY_LOCATIONS } from "@/data/contactInfo";

export function Footer() {
  return (
    <footer className="relative pt-14 pb-20 md:pb-14 border-t border-white/10 bg-[#070b12] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand story */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-md ring-2 ring-amber-400/60 bg-[#0d1c14] flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Deep Events Logo"
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-serif-luxury font-bold tracking-tight gold-brand-text">
                  Deep Events
                </span>
                <p className="text-xs text-slate-400">
                  Premium Event Management Studio
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-300">
              Structured event management and bespoke decor for Weddings, Sports Tournaments, 
              and Sacred Kirtan &amp; Jagran samagams. Turnkey execution with 100% on-time guarantee.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Event Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Event Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {EVENT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/events/${cat.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-500">→</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work (Filtered Portfolio)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Service Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Primary Service Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {PRIMARY_LOCATIONS.map((loc) => (
                <li key={loc} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Helpline &amp; Support
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl text-white font-bold shadow-xs hover:opacity-95 transition-opacity"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-slate-900 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
              <p className="text-[11px] text-slate-400 pt-1">
                Direct phone consultation &amp; quotation 7 days a week.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Deep Events. Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for Memorable Celebrations.</span>
          </p>

          <p className="text-[11px] text-slate-400">
            End-to-End Execution • Professional Acoustics &amp; Staging
          </p>
        </div>
      </div>
    </footer>
  );
}
