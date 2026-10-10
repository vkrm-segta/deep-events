export type ThemePreset = 'fairyGarden' | 'royalMarigold' | 'roseTwilight' | 'peacockElegance' | 'midnightGala';

export interface ThemeColors {
  primary: string;         // Leaf / Branch green or thematic primary
  secondary: string;       // Accent leaf / floral tone
  accent: string;          // Vibrant flower color (rose/marigold/coral)
  background: string;      // Fairy white / ivory shade
  surface: string;         // Glass card background
  surfaceBorder: string;   // Glass card border
  textPrimary: string;     // Main text color
  textSecondary: string;   // Muted text color
  badgeBg: string;         // Badge background
  heroGlow: string;        // Ambient magical glow
}

export type TextSizeScale = 'compact' | 'normal' | 'comfortable' | 'large';

export type LanguageMode = 'en' | 'hi' | 'hinglish';

export interface ThemeContextType {
  preset: ThemePreset;
  colors: ThemeColors;
  textSize: TextSizeScale;
  language: LanguageMode;
  butterfliesEnabled: boolean;
  petalsEnabled: boolean;
  sparklesEnabled: boolean;
  isMotorOpen: boolean;
  setPreset: (preset: ThemePreset) => void;
  updateCustomColor: (key: keyof ThemeColors, value: string) => void;
  setTextSize: (size: TextSizeScale) => void;
  setLanguage: (lang: LanguageMode) => void;
  toggleButterflies: () => void;
  togglePetals: () => void;
  toggleSparkles: () => void;
  setIsMotorOpen: (open: boolean) => void;
  resetToDefaults: () => void;
}
