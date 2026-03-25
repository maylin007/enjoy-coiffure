import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Services & Tarifs", description: "Coupes, colorations, mèches, lissage, transformations. Tarifs Enjoy Coiffure Tahiti." };

interface Service { name: string; price: string; note?: string }
interface Category { title: string; services: Service[] }

const categories: Category[] = [
  { title: "Coupes Femme", services: [
    { name: "Coupe + brushing", price: "5 500" },
    { name: "Coupe + séchage", price: "4 500" },
    { name: "Brushing seul", price: "3 000" },
    { name: "Coupe enfant (- 12 ans)", price: "2 500" },
  ]},
  { title: "Coupes Homme", services: [
    { name: "Coupe homme", price: "2 800" },
    { name: "Coupe + barbe", price: "3 500" },
    { name: "Coupe dégradé", price: "3 000" },
    { name: "Coupe enfant garçon", price: "2 000" },
  ]},
  { title: "Coloration", services: [
    { name: "Coloration complète", price: "7 500" },
    { name: "Coloration + coupe + brushing", price: "11 000" },
    { name: "Retouche racines", price: "5 500" },
    { name: "Couleur ton sur ton", price: "6 000" },
  ]},
  { title: "Mèches & Balayage", services: [
    { name: "Mèches complètes", price: "9 500" },
    { name: "Demi-tête de mèches", price: "7 000" },
    { name: "Balayage", price: "8 500" },
    { name: "Ombré hair", price: "10 000" },
  ]},
  { title: "Soins & Traitements", services: [
    { name: "Soin profond", price: "3 500" },
    { name: "Soin kératine", price: "12 000", note: "selon longueur" },
    { name: "Lissage brésilien", price: "18 000", note: "selon longueur" },
    { name: "Défrisage", price: "8 000" },
  ]},
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos prestations</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">Services & Tarifs</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">Tous nos services sont disponibles sans rendez-vous dans nos 4 salons.</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {categories.map((category, index) => (
          <section key={category.title} className={`py-12 ${index < categories.length - 1 ? "border-b border-divider" : ""}`}>
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-8">{category.title}</h2>

              <div className="hidden sm:grid grid-cols-12 text-[11px] tracking-wider uppercase text-muted pb-4 border-b border-divider mb-1">
                <div className="col-span-8">Prestation</div>
                <div className="col-span-4 text-right">Tarif</div>
              </div>

              {category.services.map((service, i) => (
                <div key={`${service.name}-${i}`} className="grid grid-cols-12 items-baseline py-4 border-b border-divider/50 hover:bg-light/50 transition-colors px-1 -mx-1">
                  <div className="col-span-8">
                    <p className="text-dark text-[15px]">{service.name}</p>
                    {service.note && <p className="text-muted text-xs mt-0.5">{service.note}</p>}
                  </div>
                  <div className="col-span-4 text-right">
                    <p className="text-dark font-medium text-[15px]">{service.price}<span className="text-muted font-normal text-xs ml-1">XPF</span></p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </section>
        ))}

        <div className="py-12 text-center">
          <p className="text-muted text-sm mb-6">Tarifs indicatifs. Suppléments possibles selon longueur et épaisseur des cheveux.</p>
          <a href="tel:+68940438070" className="inline-block bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">Appelez-nous — 40 43 80 70</a>
        </div>
      </div>
    </>
  );
}
