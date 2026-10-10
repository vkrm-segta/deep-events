"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  scale: number;
  color: string;
  wingColor: string;
}

export function Butterflies() {
  const { butterfliesEnabled } = useTheme();
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    // Generate 8 graceful butterflies balanced across left and right sides
    const colors = [
      { main: "#f43f5e", wing: "#fbcfe8" }, // Rose Pink (Left)
      { main: "#f59e0b", wing: "#fef08a" }, // Marigold Gold (Left)
      { main: "#10b981", wing: "#a7f3d0" }, // Mint Leaf (Left)
      { main: "#a855f7", wing: "#f3e8ff" }, // Fairy Lavender (Left)
      { main: "#06b6d4", wing: "#cffafe" }, // Sky Cyan (Right)
      { main: "#ec4899", wing: "#fce7f3" }, // Blossom (Right)
      { main: "#8b5cf6", wing: "#ede9fe" }, // Violet (Right)
      { main: "#f97316", wing: "#ffedd5" }, // Amber Orange (Right)
    ];

    // 4 on the left half (8% - 44%), 4 on the right half (56% - 92%)
    const startXPositions = [8, 20, 32, 44, 56, 68, 80, 92];

    const list: Butterfly[] = colors.map((col, idx) => ({
      id: idx,
      startX: startXPositions[idx],
      startY: 12 + (idx % 4) * 22,
      duration: 18 + (idx % 4) * 4,
      delay: idx * 1.5,
      scale: 0.75 + (idx % 3) * 0.18,
      color: col.main,
      wingColor: col.wing,
    }));

    setButterflies(list);
  }, []);

  // Listen to window scroll events to simulate gentle breeze
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null;
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      lastY = currentY;

      if (Math.abs(delta) > 1.5) {
        setIsScrolling(true);
        if (delta > 0) {
          setScrollDirection("down");
        } else if (delta < 0) {
          setScrollDirection("up");
        }
      }

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

  if (!butterfliesEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {butterflies.map((b) => {
        const isLeft = b.startX < 50;

        // Natural breeze displacement outward to the edges
        const windX = isLeft
          ? -(4.5 + (50 - b.startX) * 0.08)
          : (4.5 + (b.startX - 50) * 0.08);

        // Soft natural bank angle
        const windRotate = isLeft ? -5 : 5;

        return (
          <div
            key={b.id}
            className="absolute will-change-transform"
            style={{
              left: `${b.startX}%`,
              top: `${b.startY}%`,
              transform: isScrolling
                ? `translate3d(${windX}vw, 0px, 0) rotate(${windRotate}deg)`
                : `translate3d(0, 0, 0) rotate(0deg)`,
              transition: isScrolling
                ? "transform 2.4s cubic-bezier(0.25, 1, 0.5, 1)"
                : "transform 3.2s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {/* Natural Organic Wandering Path */}
            <div
              className={`butterfly-wander ${isScrolling ? "wind-flutter" : ""}`}
              style={{
                animationDuration: `${b.duration}s`,
                animationDelay: `${b.delay}s`,
              }}
            >
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-125">
                <svg
                  width="44"
                  height="38"
                  viewBox="0 0 100 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] filter"
                >
                  {/* Left Wing with Flutter */}
                  <g className="butterfly-wing-left">
                    <path
                      d="M50 40 C35 15, 10 5, 5 30 C0 50, 25 65, 50 45 Z"
                      fill={b.wingColor}
                      stroke={b.color}
                      strokeWidth="2.5"
                    />
                    <circle cx="28" cy="32" r="6" fill={b.color} opacity="0.7" />
                    <circle cx="20" cy="42" r="3" fill="#ffffff" />
                    <circle cx="36" cy="24" r="2.5" fill="#ffffff" />
                  </g>

                  {/* Right Wing with Flutter */}
                  <g className="butterfly-wing-right">
                    <path
                      d="M50 40 C65 15, 90 5, 95 30 C100 50, 75 65, 50 45 Z"
                      fill={b.wingColor}
                      stroke={b.color}
                      strokeWidth="2.5"
                    />
                    <circle cx="72" cy="32" r="6" fill={b.color} opacity="0.7" />
                    <circle cx="80" cy="42" r="3" fill="#ffffff" />
                    <circle cx="64" cy="24" r="2.5" fill="#ffffff" />
                  </g>

                  {/* Body and Antennae */}
                  <path
                    d="M50 25 C48 30, 48 50, 50 55 C52 50, 52 30, 50 25 Z"
                    fill="#2d3748"
                  />
                  <path
                    d="M48 25 Q42 12, 38 10 M52 25 Q58 12, 62 10"
                    stroke="#2d3748"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="38" cy="10" r="1.5" fill={b.color} />
                  <circle cx="62" cy="10" r="1.5" fill={b.color} />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

