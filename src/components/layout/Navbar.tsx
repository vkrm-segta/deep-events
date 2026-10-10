"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { EVENT_CATEGORIES } from "@/data/eventCatalog";
import { CONTACT_INFO } from "@/data/contactInfo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const phoneNum = CONTACT_INFO.phone;
  const whatsappNum = CONTACT_INFO.whatsappNumber;
  const whatsappMsg = encodeURIComponent(
    "Namaste Deep Events Team! I am planning an event and would like to discuss design packages and date availability."
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEventsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 py-3 px-4 sm:px-8 bg-[#090d16]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md ring-2 ring-amber-400/70 bg-[#0d1c14] shrink-0">
            <Image
              src="/logo.png"
              alt="Deep Events Logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-tight gold-brand-text group-hover:brightness-110 transition-all">
              Deep Events
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase font-semibold text-slate-400 mt-0.5">
              Event Management Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          {/* Events Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus:outline-hidden"
              aria-expanded={eventsDropdownOpen}
            >
              <span>Events</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  eventsDropdownOpen ? "rotate-180 text-emerald-400" : ""
                }`}
              />
            </button>

            {eventsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/15 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Select Event Category
                </div>
                {EVENT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/events/${cat.slug}`}
                    onClick={() => setEventsDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-emerald-500/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                        {cat.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {cat.hindiName}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/work" className="hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${phoneNum}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-all active:scale-95"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Toggle & WhatsApp button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xs"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 font-medium text-sm text-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between"
            >
              <span>Home (मुख्य पृष्ठ)</span>
            </Link>

            <div className="pt-2 pb-1 px-2.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Event Categories
            </div>

            {EVENT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/events/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 pl-4 rounded-xl hover:bg-white/5 flex items-center justify-between text-slate-300"
              >
                <div>
                  <div className="font-semibold text-white">{cat.name}</div>
                  <div className="text-[11px] text-emerald-400">{cat.hindiName}</div>
                </div>
                <span className="text-xs text-slate-500">→</span>
              </Link>
            ))}

            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>Our Work (पोर्टफोलियो)</span>
                <span className="text-xs text-slate-500">→</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>About Us (हमारे बारे में)</span>
                <span className="text-xs text-slate-500">→</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between text-emerald-400 font-bold"
              >
                <span>Get a Quote / Contact (कोटेशन)</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${phoneNum}`}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Helpline: {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white text-center flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
