"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemePreset, ThemeColors, TextSizeScale, LanguageMode, ThemeContextType } from "@/types/theme";

export const PERMANENT_DARK_COLORS: ThemeColors = {
  primary: "#10b981",
  secondary: "#059669",
  accent: "#f59e0b",
  background: "#090d16",
  surface: "#111827",
  surfaceBorder: "rgba(255, 255, 255, 0.09)",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  badgeBg: "rgba(16, 185, 129, 0.15)",
  heroGlow: "radial-gradient(circle at 50% 12%, rgba(16, 185, 129, 0.18) 0%, rgba(245, 158, 11, 0.08) 40%, rgba(9, 13, 22, 0) 75%)",
};

export const THEME_PRESETS: Record<ThemePreset, { name: string; icon: string; colors: ThemeColors }> = {
  midnightGala: {
    name: "Midnight Luxury (Dark)",
    icon: "🌙",
    colors: PERMANENT_DARK_COLORS,
  },
  fairyGarden: {
    name: "Midnight Luxury (Dark)",
    icon: "🌙",
    colors: PERMANENT_DARK_COLORS,
  },
  royalMarigold: {
    name: "Midnight Luxury (Dark)",
    icon: "🌙",
    colors: PERMANENT_DARK_COLORS,
  },
  roseTwilight: {
    name: "Midnight Luxury (Dark)",
    icon: "🌙",
    colors: PERMANENT_DARK_COLORS,
  },
  peacockElegance: {
    name: "Midnight Luxury (Dark)",
    icon: "🌙",
    colors: PERMANENT_DARK_COLORS,
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preset] = useState<ThemePreset>("midnightGala");
  const [colors] = useState<ThemeColors>(PERMANENT_DARK_COLORS);
  const [textSize, setTextSizeState] = useState<TextSizeScale>("normal");
  const [language, setLanguageState] = useState<LanguageMode>("hinglish");
  const [isMotorOpen, setIsMotorOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedLang = localStorage.getItem("nep_lang") as LanguageMode | null;
      if (savedLang) setLanguageState(savedLang);
    } catch {}
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";

    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-secondary", colors.secondary);
    root.style.setProperty("--color-accent", colors.accent);
    root.style.setProperty("--color-bg", colors.background);
    root.style.setProperty("--color-surface", colors.surface);
    root.style.setProperty("--color-surface-border", colors.surfaceBorder);
    root.style.setProperty("--color-text-primary", colors.textPrimary);
    root.style.setProperty("--color-text-secondary", colors.textSecondary);
    root.style.setProperty("--color-badge-bg", colors.badgeBg);
    root.style.setProperty("--hero-glow", colors.heroGlow);
    root.style.setProperty("--font-scale", "1");
  }, [colors, isMounted]);

  const setPreset = (_newPreset: ThemePreset) => {};
  const updateCustomColor = (_key: keyof ThemeColors, _value: string) => {};
  const setTextSize = (size: TextSizeScale) => setTextSizeState(size);
  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("nep_lang", lang);
    } catch {}
  };
  const toggleButterflies = () => {};
  const togglePetals = () => {};
  const toggleSparkles = () => {};
  const resetToDefaults = () => {};

  return (
    <ThemeContext.Provider
      value={{
        preset,
        colors,
        textSize,
        language,
        butterfliesEnabled: false,
        petalsEnabled: false,
        sparklesEnabled: false,
        isMotorOpen,
        setPreset,
        updateCustomColor,
        setTextSize,
        setLanguage,
        toggleButterflies,
        togglePetals,
        toggleSparkles,
        setIsMotorOpen,
        resetToDefaults,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
