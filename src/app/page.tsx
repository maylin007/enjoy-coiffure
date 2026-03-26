"use client";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const salons = [
  { name: "Papeete — Rue Gauguin", phone: "40 43 80 70", hours: { fr: "Lun-Ven 8h-17h, Sam 8h-16h", en: "Mon-Fri 8am-5pm, Sat 8am-4pm" } },
  { name: "Taunoa", phone: "40 45 46 45", hours: { fr: "Lun-Ven 8h-17h, Sam 9h-14h", en: "Mon-Fri 8am-5pm, Sat 9am-2pm" } },
  { name: "Mahina — Champion", phone: "40 45 07 45", hours: { fr: "Lun-Sam 8h-18h", en: "Mon-Sat 8am-6pm" } },
  { name: "Punaauia — Centre Tamanu", phone: "40 85 00 01", hours: { fr: "Lun-Sam 8h-18h", en: "Mon-Sat 8am-6pm" } },
];

export default function Home() {
  const { lang } = useLanguage();
  const h = translations.home;

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/616036836_1230143142542672_5474286374494117945_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=g45bGH0R3aQQ7kNvwF_q228&_nc_oc=Ado8-4Fkx1R0O_RcDOtSKv3tXjKM_-udFVn0sIYl8J2RXF2oH9rRzokaYVdMZ7wotlQ&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=zQ8QSz0UpcILBr6CaMK1zQ&_nc_ss=7a32e&oh=00_AfwM4pvXjYFpw2wvS5VQFcIJRlQRgnMgK6XDKfL3sfAf2w&oe=69C8F77E')" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">{t(h.heroTag, lang)}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              {t(h.heroTitle1, lang)}<br /><span className="text-brand-light">{t(h.heroTitle2, lang)}</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">{t(h.heroDesc, lang)}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/salons" className="bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">{t(h.findSalon, lang)}</Link>
              <Link href="/services" className="border border-white/30 text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-white/10">{t(h.ourServices, lang)}</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 salons */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{t(h.salonsTag, lang)}</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">{t(h.salonsTitle, lang)}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salons.map((salon, i) => (
              <AnimatedSection key={salon.name} delay={i * 0.1}>
                <div className="border-t-2 border-brand pt-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-light text-dark mb-3">{salon.name}</h3>
                  <a href={`tel:+689${salon.phone.replace(/\s/g, "")}`} className="text-brand font-medium hover:text-brand-dark transition-colors">{salon.phone}</a>
                  <p className="text-muted text-sm mt-2">{salon.hours[lang]}</p>
                  <p className="text-muted text-xs mt-1">{t(h.noAppointment, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/salons" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">{t(h.seeDetails, lang)}</Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 px-6 bg-light">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{t(h.servicesTag, lang)}</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-light text-dark mb-8 leading-tight">{t(h.servicesTitle, lang)}</h2>
            <p className="text-muted leading-relaxed mb-8 text-[15px]">{t(h.servicesDesc, lang)}</p>
            <ul className="space-y-4 mb-10">
              {h.servicesList[lang].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px]"><span className="w-5 h-px bg-brand" /><span className="text-dark">{item}</span></li>
              ))}
            </ul>
            <Link href="/services" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">{t(h.seePrices, lang)}</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sans RDV banner */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-white mb-4">{t(h.bannerTitle, lang)}</h2>
            <p className="text-white/70 text-base font-light mb-8">{t(h.bannerDesc, lang)}</p>
            <Link href="/salons" className="inline-block bg-white text-brand px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-light">{t(h.bannerCta, lang)}</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Realisations */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{t(h.galleryTag, lang)}</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">{t(h.galleryTitle, lang)}</h2>
            </div>
          </AnimatedSection>

          {/* Femme */}
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{t(h.galleryWomen, lang)}</p>
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
              {[
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/650904696_1272734904950162_1352880729413638463_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=02K9q-lc5z0Q7kNvwFfxwfS&_nc_oc=AdqFnmE0Z20bfXXEuLrsUcBIVjxUq0cEo6j9BFE-JI78lsedqEImH1IpMPYHyGOEFXk&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=uqOfKpUldCZJPq4L-JIa1Q&_nc_ss=7a32e&oh=00_AfyJZE3ffwMG6WrKWRMjd1peGnBLzrwfbBhZgyYsEfzM2Q&oe=69C91D76", alt: "Rattrapage couleur" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/650968871_1272734894950163_347594449777480637_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=7RKDU_0-xvYQ7kNvwEy4BmG&_nc_oc=AdrO4xgbydqB8aCFCx5h9cdlaTsUhbyPuwxOg-1cX4e1E6yuhtZKwdiag5tfZ5TtBOk&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=uqOfKpUldCZJPq4L-JIa1Q&_nc_ss=7a32e&oh=00_AfzRnsi-iLR4ZGHMano13lBAj61YJ1RHblX_f_nIvqHRfg&oe=69C8FB3C", alt: "Rattrapage résultat" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/603972697_1210505211173132_5214834717041802570_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=AHj5sdrlqzEQ7kNvwGy8hm9&_nc_oc=Adr_4dBjtjG_Jl_8zDj0WnmCX73_47YS4joCpDuCyCK49QlURJ_-k1LsWZ-cdLO9yBM&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=RoLwtKT6AG0HkL96oSrEDQ&_nc_ss=7a32e&oh=00_AfyqRkLVanwf1unp5o79A-SHR2eJe5qtL0x30q8fgsCLPQ&oe=69C9021B", alt: "Coupe + couleur violet" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/605038750_1210505134506473_5329453832858731132_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=DPchCwo3ioAQ7kNvwGrUQcy&_nc_oc=Adok-FfRYxMegCiEZ6yWVT3mJIyx-jOuLagP1M6TtbI10isGKle0qgDht-mlhGorufA&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=RoLwtKT6AG0HkL96oSrEDQ&_nc_ss=7a32e&oh=00_AfwwZv6gcreNsBWi4uFqrgzwJbO70PE74O2kmHoh5AhM7w&oe=69C8FC71", alt: "Couleur violet profil" },
              ].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 snap-start overflow-hidden aspect-square">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Homme */}
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4 mt-12">{t(h.galleryMen, lang)}</p>
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
              {[
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644456835_1261514436072209_7798624875715402619_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=IwWZWMmZ23cQ7kNvwHtTdz8&_nc_oc=AdrNOP1dqi2O4m0Zyil0ff8_XBIEfl2ebnKUUI02OZZbcS_UrIhELUf3x5mXCjhvlgg&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ySWKjBuFTtnkxA27_6vMqA&_nc_ss=7a32e&oh=00_AfwLxTRQ_MJjKoCW-ndmnWkmf7KmdCH1-ArJk5Km0zatOg&oe=69C90231", alt: "Couleur vert face" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644554775_1261514442738875_3951513341373228882_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=yLsZFd33v7AQ7kNvwGABGC3&_nc_oc=AdpakozuxxIO9OdN9UKfJ_spvq13xXsR15zJZRiF3r85VH504AbbfBaJm0TZ6ijpBz8&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ySWKjBuFTtnkxA27_6vMqA&_nc_ss=7a32e&oh=00_AfxXDPbwmH_sTmOSBhU40eir0BvZxJ2b5DaWFlNEcYxjZg&oe=69C8FE8D", alt: "Couleur vert profil" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/634733566_1252410203649299_4082401052700506738_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=jUY4qi-qJw0Q7kNvwE7PzUm&_nc_oc=Ado7zsgNSYSNKSH0oATKyf52Wha1Gdv3tNZ0axehFUCHdLU8BzGcsXAj9DxT8XH-LhE&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ySWKjBuFTtnkxA27_6vMqA&_nc_ss=7a32e&oh=00_AfxsGiJH8HW1hjrepJj6D_bBitc0Zy0vjwpZ1TAKLUfBvg&oe=69C8FCD5", alt: "Couleur blanc face" },
                { src: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/636652472_1252410206982632_4395957418645611229_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=k9YHGtn2SBUQ7kNvwGrQZ6F&_nc_oc=Adra1L6TPypka_Y_83htTOqF6tfnyqbmNVhKfBWf2Of0dkvINI3G4cjDYQLSkwUPGik&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ySWKjBuFTtnkxA27_6vMqA&_nc_ss=7a32e&oh=00_Afy2DAYhQ9Qob4Rn_Wo12SFmTFeHXKIiUGnoo6Jm2nuLnA&oe=69C8F076", alt: "Couleur blanc profil" },
              ].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 snap-start overflow-hidden aspect-square">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Enfant */}
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4 mt-12">{t(h.galleryChildren, lang)}</p>
            <div className="w-64 overflow-hidden aspect-square">
              <img src="https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/636837943_1252403223649997_307635693931759440_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=dA-x7nQaIfoQ7kNvwFEJSsb&_nc_oc=Adr1y1wap7TBqqgrLGZqoBTy57ZzpjWxjqnzybUgdEsSFoQu3rXABKeQ1Dz-WhkrM1g&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=TfI14xzwxWz8rjAR5l1sPw&_nc_ss=7a32e&oh=00_AfwLrpPbmWJxAljTRel9JmRUm5QuXylgPlw6OVYNKFc_Ag&oe=69C8F36A" alt="Coupe enfant" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-light text-muted italic leading-relaxed mb-6">&ldquo;{t(h.testimonial, lang)}&rdquo;</p>
            <div className="w-8 h-px bg-brand mx-auto mb-4" />
            <p className="text-[13px] tracking-wide uppercase text-muted">{t(h.testimonialAuthor, lang)}</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
