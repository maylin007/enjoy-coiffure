"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const s = translations.services;
  const categories = s.categories[lang];

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{t(s.tag, lang)}</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">{t(s.title, lang)}</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">{t(s.subtitle, lang)}</p>
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
                <div className="col-span-8">{t(s.tableService, lang)}</div>
                <div className="col-span-4 text-right">{t(s.tablePrice, lang)}</div>
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
          <p className="text-muted text-sm mb-6">{t(s.disclaimer, lang)}</p>
          <a href="tel:+68940438070" className="inline-block bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">{t(s.callUs, lang)}</a>
        </div>
      </div>
    </>
  );
}
