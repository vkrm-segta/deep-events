"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
  type: "rose" | "marigold" | "leaf";
}

export function FallingPetals() {
  const { petalsEnabled } = useTheme();
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const list: Petal[] = [];
    const types: ("rose" | "marigold" | "leaf")[] = ["rose", "marigold", "leaf", "rose", "marigold"];

    for (let i = 0; i < 18; i++) {
      list.push({
        id: i,
        left: (i * 5.5 + Math.random() * 5) % 96,
        duration: 16 + (i % 6) * 3,
        delay: (i * 1.0) % 10,
        size: 14 + (i % 4) * 4,
        rotation: (i * 45) % 360,
        type: types[i % types.length],
      });
    }

    setPetals(list);
  }, []);

  // Listen to window scroll events to trigger natural wind dispersion
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null;
    const onScroll = () => {
      setIsScrolling(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      // When scrolling stops, smooth return after 750ms
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 750);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  if (!petalsEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {petals.map((p) => {
        const isLeft = p.left < 50;
        const windX = isLeft
          ? -(4.5 + (50 - p.left) * 0.08)
          : (4.5 + (p.left - 50) * 0.08);

        return (
          <div
            key={p.id}
            className="absolute will-change-transform"
            style={{
              left: `${p.left}%`,
              top: `-40px`,
              transform: isScrolling
                ? `translate3d(${windX}vw, 0, 0)`
                : `translate3d(0, 0, 0)`,
              transition: isScrolling
                ? "transform 2.4s cubic-bezier(0.25, 1, 0.5, 1)"
                : "transform 3.2s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div
              className="petal-fall"
              style={{
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                width: `${p.size}px`,
                height: `${p.size * 1.3}px`,
              }}
            >
          <div
            className="w-full h-full petal-sway filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
            style={{
              transform: `rotate(${p.rotation}deg)`,
            }}
          >
            {p.type === "rose" && (
              <svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M15 0 C25 8, 30 22, 22 34 C16 42, 6 36, 2 26 C-2 15, 6 2, 15 0 Z"
                  fill="url(#roseGrad)"
                  opacity="0.85"
                />
                <defs>
                  <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="60%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {p.type === "marigold" && (
              <svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M15 2 C24 8, 28 20, 24 32 C20 40, 8 38, 4 28 C0 18, 6 4, 15 2 Z"
                  fill="url(#marigoldGrad)"
                  opacity="0.88"
                />
                <defs>
                  <linearGradient id="marigoldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {p.type === "leaf" && (
              <svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M15 0 C28 10, 26 30, 15 40 C4 30, 2 10, 15 0 Z"
                  fill="url(#leafGrad)"
                  opacity="0.8"
                />
                <path d="M15 3 L15 36" stroke="#15803d" strokeWidth="1" opacity="0.6" />
                <defs>
                  <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="60%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>
  );
}
