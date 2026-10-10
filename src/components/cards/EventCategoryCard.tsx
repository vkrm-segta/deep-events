import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { EventCategoryDefinition } from "@/data/eventCatalog";

interface EventCategoryCardProps {
  category: EventCategoryDefinition;
}

export function EventCategoryCard({ category }: EventCategoryCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1">
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-amber-300">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{category.badgeText}</span>
        </div>

        {/* Services count pill */}
        <div className="absolute bottom-3 right-4 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-slate-200">
          {category.services.length} Specialized Services
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
              {category.name}
            </h3>
          </div>
          <p className="text-xs font-semibold text-emerald-400">
            {category.hindiName}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Service Pills Preview */}
        <div className="pt-2 border-t border-white/10 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {category.services.slice(0, 4).map((s) => (
              <span
                key={s.id}
                className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-slate-300"
              >
                {s.title}
              </span>
            ))}
            {category.services.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-[11px] bg-white/5 text-slate-400">
                +{category.services.length - 4} more
              </span>
            )}
          </div>

          <Link
            href={`/events/${category.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors group-hover:shadow-lg group-hover:shadow-emerald-600/30"
          >
            <span>Explore {category.name}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
