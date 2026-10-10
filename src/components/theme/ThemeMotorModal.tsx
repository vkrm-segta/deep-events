"use client";

import React from "react";
import { useTheme, THEME_PRESETS } from "@/context/ThemeContext";
import { ThemePreset, TextSizeScale, LanguageMode } from "@/types/theme";
import { Sliders, Sparkles, X, RotateCcw, Check, Palette, Type, Globe, Layers } from "lucide-react";

export function ThemeMotorModal() {
  const {
    preset,
    colors,
    textSize,
    language,
    butterfliesEnabled,
    petalsEnabled,
    isMotorOpen,
    setPreset,
    updateCustomColor,
    setTextSize,
    setLanguage,
    toggleButterflies,
    togglePetals,
    setIsMotorOpen,
    resetToDefaults,
  } = useTheme();

  return (
    <>
      {/* Floating Magic Wand / Motor Button (Desktop only; on mobile, quick action bar handles it) */}
      <button
        onClick={() => setIsMotorOpen(true)}
        aria-label="Open Theme Customizer Motor"
        className="hidden sm:flex fixed bottom-24 right-5 z-40 items-center gap-2 rounded-full px-4 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "2px solid var(--color-primary)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <span className="relative flex h-3 w-3">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <span
            className="relative inline-flex rounded-full h-3 w-3"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
        </span>
        <div className="flex items-center gap-1.5 font-medium text-sm" style={{ color: "var(--color-text-primary)" }}>
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: "8s" }} />
          <span className="font-semibold">Theme Motor</span>
          <span className="text-xs px-1.5 py-0.5 rounded-full font-mono font-bold" style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-secondary)" }}>
            Custom
          </span>
        </div>
      </button>

      {/* Slide-over or Modal Customizer */}
      {isMotorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm transition-opacity">
          <div
            className="relative h-full w-full max-w-md overflow-y-auto p-4 sm:p-6 shadow-2xl transition-all"
            style={{
              backgroundColor: "var(--color-bg)",
              color: "var(--color-text-primary)",
              borderLeft: "1px solid var(--color-surface-border)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-surface-border)" }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="p-2.5 rounded-2xl shadow-sm"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-primary)" }}
                >
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Theme & Style Motor</h2>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                    {language === "hi"
                      ? "पूरी वेबसाइट के रंग और फॉन्ट तुरंत बदलें"
                      : "Live control for colors, typography & fairy animations"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMotorOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Close customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Presets Section */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  {language === "hi" ? "थीम स्टाइल चुनें" : "Event Theme Presets"}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {(Object.keys(THEME_PRESETS) as ThemePreset[]).map((key) => {
                  const item = THEME_PRESETS[key];
                  const isSelected = preset === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setPreset(key)}
                      className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                        isSelected ? "ring-2 scale-[1.01] shadow-sm font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5 opacity-80"
                      }`}
                      style={{
                        borderColor: isSelected ? "var(--color-primary)" : "var(--color-surface-border)",
                        backgroundColor: "var(--color-surface)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: item.colors.primary }} />
                            <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: item.colors.accent }} />
                            <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: item.colors.background }} />
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Color Pickers ("Motor" granular customizer) */}
            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-surface-border)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  {language === "hi" ? "कस्टम कलर मोटर (बारीक रंग चयन)" : "Custom Color Engine"}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-xl border" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <span className="text-xs font-medium">Primary Accent (Green / Theme)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono">{colors.primary}</span>
                    <input
                      type="color"
                      value={colors.primary}
                      onChange={(e) => updateCustomColor("primary", e.target.value)}
                      className="w-7 h-7 rounded-lg cursor-pointer border-0 bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl border" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <span className="text-xs font-medium">Flower Accent (Rose / Gold)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono">{colors.accent}</span>
                    <input
                      type="color"
                      value={colors.accent}
                      onChange={(e) => updateCustomColor("accent", e.target.value)}
                      className="w-7 h-7 rounded-lg cursor-pointer border-0 bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl border" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <span className="text-xs font-medium">Canvas Background</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono">{colors.background}</span>
                    <input
                      type="color"
                      value={colors.background}
                      onChange={(e) => updateCustomColor("background", e.target.value)}
                      className="w-7 h-7 rounded-lg cursor-pointer border-0 bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl border" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <span className="text-xs font-medium">Text Primary Shade</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono">{colors.textPrimary}</span>
                    <input
                      type="color"
                      value={colors.textPrimary}
                      onChange={(e) => updateCustomColor("textPrimary", e.target.value)}
                      className="w-7 h-7 rounded-lg cursor-pointer border-0 bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Font Size Scaling (Great for older family members) */}
            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-surface-border)" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold tracking-wide uppercase">
                    {language === "hi" ? "अक्षर का आकार (फॉन्ट साइज)" : "Font Scale / Text Size"}
                  </h3>
                </div>
                <span className="text-xs capitalize font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-primary)" }}>
                  {textSize}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(["compact", "normal", "comfortable", "large"] as TextSizeScale[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setTextSize(size)}
                    className={`py-2 px-1 text-xs rounded-xl border font-medium transition-all text-center capitalize ${
                      textSize === size ? "font-bold shadow-sm" : "opacity-70 hover:opacity-100"
                    }`}
                    style={{
                      borderColor: textSize === size ? "var(--color-primary)" : "var(--color-surface-border)",
                      backgroundColor: textSize === size ? "var(--color-badge-bg)" : "var(--color-surface)",
                      color: textSize === size ? "var(--color-secondary)" : "inherit",
                    }}
                  >
                    {size === "compact" && "90%"}
                    {size === "normal" && "100%"}
                    {size === "comfortable" && "108%"}
                    {size === "large" && "118%"}
                    <span className="block text-[10px] opacity-75">{size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-surface-border)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold tracking-wide uppercase">Language / भाषा</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "hinglish", label: "Hinglish", desc: "Easy Indian" },
                  { id: "hi", label: "हिन्दी", desc: "शुद्ध हिन्दी" },
                  { id: "en", label: "English", desc: "Global" },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLanguage(l.id as LanguageMode)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      language === l.id ? "font-bold shadow-sm ring-1" : "opacity-75 hover:opacity-100"
                    }`}
                    style={{
                      borderColor: language === l.id ? "var(--color-primary)" : "var(--color-surface-border)",
                      backgroundColor: language === l.id ? "var(--color-badge-bg)" : "var(--color-surface)",
                      color: language === l.id ? "var(--color-secondary)" : "inherit",
                    }}
                  >
                    <span className="text-xs font-semibold block">{l.label}</span>
                    <span className="text-[10px] opacity-75">{l.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fairy Tale Animation Toggles */}
            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-surface-border)" }}>
              <h3 className="text-sm font-bold tracking-wide uppercase mb-3">
                {language === "hi" ? "जीवंत एनिमेशन प्रभाव" : "Fairy Garden Micro-Animations"}
              </h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-2xl border cursor-pointer" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🦋</span>
                    <div>
                      <p className="text-xs font-semibold">Fluttering Butterflies</p>
                      <p className="text-[10px]" style={{ color: "var(--color-text-secondary)" }}>Gentle flying butterflies</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={butterfliesEnabled}
                    onChange={toggleButterflies}
                    className="w-4 h-4 accent-emerald-600 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-2xl border cursor-pointer" style={{ borderColor: "var(--color-surface-border)", backgroundColor: "var(--color-surface)" }}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🌸</span>
                    <div>
                      <p className="text-xs font-semibold">Falling Flower Petals</p>
                      <p className="text-[10px]" style={{ color: "var(--color-text-secondary)" }}>Rose & marigold petal drift</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={petalsEnabled}
                    onChange={togglePetals}
                    className="w-4 h-4 accent-emerald-600 cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Reset Action */}
            <div className="mt-8 pt-4 pb-6 flex gap-3">
              <button
                onClick={resetToDefaults}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-semibold transition-all hover:bg-black/5 dark:hover:bg-white/5"
                style={{ borderColor: "var(--color-surface-border)" }}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>
              <button
                onClick={() => setIsMotorOpen(false)}
                className="flex-1 py-3 rounded-xl text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
