import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepevents.in"),
  title: "Deep Events & Decor | Luxury Wedding, Haldi, Guru Kirtan, DJ & Sports Event Planner",
  description:
    "India's premier luxury event planner and decorator. Specializing in wedding home lighting, Haldi & Mehndi marigold setups, divine Guru Kirtan flower darbars, high-bass DJ truss stages, romantic rose room decor, and sports event management. 100% on-time guarantee.",
  keywords: [
    "deep events decor",
    "wedding home decoration",
    "haldi mehndi decor",
    "guru kirtan flower darbar",
    "guru kirtan setup",
    "dj truss light dance floor",
    "first night room decor",
    "sports event planning india",
    "event planner delhi ncr chandigarh",
    "flower decoration india",
    "pinterest wedding decor replica",
  ],
  authors: [{ name: "Deep Events" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased" style={{ colorScheme: "dark" }}>
      <body className="min-h-screen flex flex-col relative bg-[#090d16] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
