"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/salons", label: "Nos Salons" },
  { href: "/services", label: "Services & Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    setScrolled(window.scrollY > 50);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-tight">
            <span className={`font-[family-name:var(--font-display)] text-2xl font-light tracking-wide transition-colors duration-500 ${scrolled ? "text-brand" : "text-white"}`}>Enjoy Coiffure</span>
            <span className={`text-[9px] tracking-[0.25em] uppercase transition-colors duration-500 ${scrolled ? "text-muted" : "text-white/60"}`}>4 salons à Tahiti</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`text-[13px] tracking-wide uppercase transition-colors duration-300 ${scrolled ? (pathname === link.href ? "text-brand" : "text-dark hover:text-brand") : (pathname === link.href ? "text-white" : "text-white/70 hover:text-white")}`}>{link.label}</Link>
            ))}
            <a href="tel:+68940438070" className="text-[13px] tracking-wide uppercase border border-brand bg-brand text-white px-5 py-2.5 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark">Sans RDV</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            {[0, 1, 2].map((i) => (<span key={i} className={`w-6 h-px transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"} ${isOpen && i === 0 ? "rotate-45 translate-y-[4px]" : isOpen && i === 1 ? "opacity-0" : isOpen && i === 2 ? "-rotate-45 -translate-y-[4px]" : ""}`} />))}
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${isOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {links.map((link) => (<Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`text-[13px] tracking-wide uppercase py-3 border-b border-divider ${pathname === link.href ? "text-brand" : "text-dark"}`}>{link.label}</Link>))}
          <a href="tel:+68940438070" className="mt-4 text-center text-[13px] tracking-wide uppercase border border-brand bg-brand text-white px-5 py-3">Sans rendez-vous — 40 43 80 70</a>
        </div>
      </div>
    </nav>
  );
}
