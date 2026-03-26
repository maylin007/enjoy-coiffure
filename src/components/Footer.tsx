"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const f = translations.footer;

  const footerLinks = [
    { href: "/", label: t(f.home, lang) },
    { href: "/salons", label: t(f.salons, lang) },
    { href: "/services", label: t(f.services, lang) },
    { href: "/contact", label: t(f.contact, lang) },
  ];

  return (
    <footer className="bg-[#1a1010] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-light tracking-wide">Enjoy Coiffure</h3>
            <p className="text-white/60 text-sm mt-3 max-w-xs leading-relaxed">{t(f.desc, lang)}</p>
            <div className="flex gap-6 mt-4 text-sm text-white/50">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <a href="tel:+68940438070" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <div><p className="text-[10px] tracking-[0.2em] uppercase text-white/60">{t(f.mainPhone, lang)}</p><p className="text-white/80 group-hover:text-white transition-colors">40 43 80 70</p></div>
            </a>
            <a href="https://m.me/106007199735326" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
              <div><p className="text-[10px] tracking-[0.2em] uppercase text-white/60">{t(f.messenger, lang)}</p><p className="text-white/80 group-hover:text-white transition-colors">{t(f.sendMessage, lang)}</p></div>
            </a>
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              <div><p className="text-[10px] tracking-[0.2em] uppercase text-white/60">{t(f.locations, lang)}</p><p className="text-white/80">Papeete, Taunoa, Mahina, Punaauia</p></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-4 text-center">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} {t(f.copyright, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
