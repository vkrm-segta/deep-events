"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export function QuickActionBar() {
  const whatsappMsg = encodeURIComponent(
    "Namaste Deep Events! I would like to get a quote and check availability for an upcoming event."
  );

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-[#090d16]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-100 font-bold text-xs border border-white/10 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Call Us</span>
        </a>

        {/* Get Quote Button */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
        >
          <FileText className="w-3.5 h-3.5 text-white shrink-0" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
