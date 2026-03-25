import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const salons = [
  { name: "Papeete — Rue Gauguin", phone: "40 43 80 70", hours: "Lun-Ven 8h-17h, Sam 8h-16h" },
  { name: "Taunoa", phone: "40 45 46 45", hours: "Lun-Ven 8h-17h, Sam 9h-14h" },
  { name: "Mahina — Champion", phone: "40 45 07 45", hours: "Lun-Sam 8h-18h" },
  { name: "Punaauia — Centre Tamanu", phone: "40 85 00 01", hours: "Lun-Sam 8h-18h" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">4 salons à Tahiti — Sans rendez-vous</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              Votre coiffeur<br /><span className="text-brand-light">près de chez vous</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">Coupes, colorations, mèches, transformations. Venez comme vous êtes, repartez sublimé.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/salons" className="bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">Trouver un salon</Link>
              <Link href="/services" className="border border-white/30 text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-white/10">Nos services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 salons */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos salons</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">4 adresses à Tahiti</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salons.map((salon, i) => (
              <AnimatedSection key={salon.name} delay={i * 0.1}>
                <div className="border-t-2 border-brand pt-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-light text-dark mb-3">{salon.name}</h3>
                  <a href={`tel:+689${salon.phone.replace(/\s/g, "")}`} className="text-brand font-medium hover:text-brand-dark transition-colors">{salon.phone}</a>
                  <p className="text-muted text-sm mt-2">{salon.hours}</p>
                  <p className="text-muted text-xs mt-1">Sans rendez-vous</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/salons" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">Voir les détails</Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto">
            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" alt="Coupe femme" className="w-full h-full object-cover" />
          </div>
          <AnimatedSection className="flex items-center px-8 lg:px-20 py-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos services</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-light text-dark mb-8 leading-tight">L&apos;expertise<br />au quotidien</h2>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">Chez Enjoy Coiffure, chaque visite est une expérience. Nos coiffeurs maîtrisent les dernières tendances et s&apos;adaptent à vos envies pour un résultat qui vous ressemble.</p>
              <ul className="space-y-4 mb-10">
                {["Coupes femme, homme et enfant", "Colorations et mèches", "Balayage et ombré", "Lissage et transformations"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px]"><span className="w-5 h-px bg-brand" /><span className="text-dark">{item}</span></li>
                ))}
              </ul>
              <Link href="/services" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">Voir les tarifs</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sans RDV banner */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-white mb-4">Sans rendez-vous</h2>
            <p className="text-white/70 text-base font-light mb-8">Passez quand vous voulez, on s&apos;occupe de vous.</p>
            <Link href="/salons" className="inline-block bg-white text-brand px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-light">Trouver le salon le plus proche</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-light text-muted italic leading-relaxed mb-6">&ldquo;Super coupe, accueil chaleureux, et pas besoin de prendre rendez-vous. Mon salon préféré à Papeete.&rdquo;</p>
            <div className="w-8 h-px bg-brand mx-auto mb-4" />
            <p className="text-[13px] tracking-wide uppercase text-muted">Cliente fidèle</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
