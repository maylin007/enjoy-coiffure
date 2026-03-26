"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-[11px] tracking-wider uppercase">
      <button
        onClick={() => setLang("fr")}
        className={`px-1.5 py-0.5 transition-colors duration-300 ${
          lang === "fr"
            ? scrolled ? "text-brand font-medium" : "text-white font-medium"
            : scrolled ? "text-muted hover:text-dark" : "text-white/40 hover:text-white/70"
        }`}
      >
        FR
      </button>
      <span className={`transition-colors duration-300 ${scrolled ? "text-muted/40" : "text-white/30"}`}>|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 transition-colors duration-300 ${
          lang === "en"
            ? scrolled ? "text-brand font-medium" : "text-white font-medium"
            : scrolled ? "text-muted hover:text-dark" : "text-white/40 hover:text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}
