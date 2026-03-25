import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Nos Salons", description: "4 salons Enjoy Coiffure à Tahiti : Papeete, Taunoa, Mahina, Punaauia. Sans rendez-vous." };

const salons = [
  { name: "Papeete — Rue Gauguin", address: "Rue Gauguin, 98713 Papeete", phone: "40 43 80 70", hours: [{ days: "Lundi — Vendredi", time: "08h00 — 17h00" }, { days: "Samedi", time: "08h00 — 16h00" }, { days: "Dimanche", time: "Fermé" }], mapQuery: "Rue+Gauguin+Papeete+Tahiti" },
  { name: "Taunoa", address: "Cours de l'Union sacrée, Taunoa, Papeete", phone: "40 45 46 45", hours: [{ days: "Lundi — Vendredi", time: "08h00 — 17h00" }, { days: "Samedi", time: "09h00 — 14h00" }, { days: "Dimanche", time: "Fermé" }], mapQuery: "Taunoa+Papeete+Tahiti" },
  { name: "Mahina — Galerie Champion", address: "Galerie marchande Champion, Mahina", phone: "40 45 07 45", hours: [{ days: "Lundi — Samedi", time: "08h00 — 18h00" }, { days: "Dimanche", time: "Fermé" }], mapQuery: "Champion+Mahina+Tahiti" },
  { name: "Punaauia — Centre Tamanu", address: "Centre Tamanu, Punaauia", phone: "40 85 00 01", hours: [{ days: "Lundi — Samedi", time: "08h00 — 18h00" }, { days: "Dimanche", time: "Fermé" }], mapQuery: "Centre+Tamanu+Punaauia+Tahiti" },
];

export default function SalonsPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos adresses</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">4 salons à Tahiti</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">Tous nos salons vous accueillent sans rendez-vous.</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {salons.map((salon, index) => (
          <section key={salon.name} className={`py-16 ${index < salons.length - 1 ? "border-b border-divider" : ""}`}>
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-6">{salon.name}</h2>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Adresse</p>
                      <p className="text-dark text-[15px]">{salon.address}</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Téléphone</p>
                      <a href={`tel:+689${salon.phone.replace(/\s/g, "")}`} className="text-brand text-[15px] font-medium hover:text-brand-dark transition-colors">{salon.phone}</a>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-2">Horaires</p>
                      {salon.hours.map((h) => (
                        <div key={h.days} className="flex justify-between text-[15px] py-1 max-w-xs">
                          <span className="text-dark">{h.days}</span>
                          <span className={h.time === "Fermé" ? "text-muted/50" : "text-muted"}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="inline-block bg-brand-50 text-brand text-[13px] tracking-wide uppercase px-4 py-2">Sans rendez-vous</p>
                </div>
                <div className="h-80 lg:h-auto min-h-[300px]">
                  <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-149.56!3d-17.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${salon.mapQuery}!5e0!3m2!1sfr!2spf!4v1`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={salon.name} />
                </div>
              </div>
            </AnimatedSection>
          </section>
        ))}
      </div>
    </>
  );
}
