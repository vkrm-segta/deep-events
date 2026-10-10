import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ServiceDefinition } from "@/data/eventCatalog";

interface ServiceCardProps {
  categorySlug: string;
  service: ServiceDefinition;
}

export function ServiceCard({ categorySlug, service }: ServiceCardProps) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1">
      {/* Representative Image (Single, High Quality) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={service.coverImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Gallery count pill */}
        <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300">
          {service.gallery.length} Photos
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-xs font-medium text-emerald-400/90 mt-0.5">
                {service.hindiTitle}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {service.tagline}
          </p>

          {/* Quick 2-feature preview */}
          <div className="pt-2 space-y-1.5">
            {service.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Link to Dedicated Service Page */}
        <div className="pt-3 border-t border-white/10">
          <Link
            href={`/events/${categorySlug}/${service.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold transition-all group-hover:border-emerald-500"
          >
            <span>View Details & Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
