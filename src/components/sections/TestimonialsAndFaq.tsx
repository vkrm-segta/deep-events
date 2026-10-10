"use client";

import React, { useState } from "react";
import { TESTIMONIALS, FAQS } from "@/data/eventsData";
import { Star, ChevronDown, HelpCircle, Heart } from "lucide-react";

export function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-14 sm:py-20 bg-[#090d16] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Happy Families • ग्राहकों का अनुभव</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Words of Gratitude from Real Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 flex flex-col justify-between shadow-sm transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{t.avatar}</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm italic leading-relaxed text-slate-200">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium">{t.event}</p>
                  <p className="text-[10px] text-slate-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div className="max-w-3xl mx-auto pt-4">
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions • अक्सर पूछे जाने वाले सवाल</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Got Questions? We Have Clear Answers
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-emerald-400" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3 text-slate-300">
                      <p>{faq.a}</p>
                      <p className="mt-2 text-xs text-emerald-400 font-medium">{faq.aHi}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
