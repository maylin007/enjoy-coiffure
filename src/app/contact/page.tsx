import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Contact", description: "Contactez Enjoy Coiffure. 4 salons à Tahiti, sans rendez-vous." };

const salons = [
  { name: "Papeete — Rue Gauguin", phone: "40 43 80 70", address: "Rue Gauguin, Papeete" },
  { name: "Taunoa", phone: "40 45 46 45", address: "Cours de l'Union sacrée, Papeete" },
  { name: "Mahina", phone: "40 45 07 45", address: "Galerie Champion, Mahina" },
  { name: "Punaauia", phone: "40 85 00 01", address: "Centre Tamanu, Punaauia" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nous contacter</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">Appelez-nous</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">Tous nos salons sont sans rendez-vous. Passez directement.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salons.map((salon, i) => (
              <AnimatedSection key={salon.name} delay={i * 0.1}>
                <div className="border border-divider p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-light text-dark mb-4">{salon.name}</h3>
                  <p className="text-muted text-[15px] mb-2">{salon.address}</p>
                  <a href={`tel:+689${salon.phone.replace(/\s/g, "")}`} className="text-brand text-lg font-medium hover:text-brand-dark transition-colors block mb-4">{salon.phone}</a>
                  <a href={`tel:+689${salon.phone.replace(/\s/g, "")}`} className="inline-block bg-brand text-white px-6 py-3 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">Appeler</a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-16 text-center">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Réseaux sociaux</p>
              <div className="flex items-center justify-center gap-8">
                <a href="https://www.facebook.com/enjoycoiffuretahiti/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors text-[15px]">Facebook</a>
                <a href="https://www.instagram.com/enjoy_coiffure_tahiti/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors text-[15px]">Instagram</a>
                <a href="https://m.me/106007199735326" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors text-[15px]">Messenger</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
