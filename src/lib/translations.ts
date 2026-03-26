interface Service { name: string; price: string; note?: string }
interface Category { title: string; services: Service[] }

export const translations = {
  // Navigation
  nav: {
    home: { fr: "Accueil", en: "Home" },
    salons: { fr: "Nos Salons", en: "Our Salons" },
    services: { fr: "Services & Tarifs", en: "Services & Prices" },
    contact: { fr: "Contact", en: "Contact" },
    noAppointment: { fr: "Sans RDV", en: "Walk-in" },
    subtitle: { fr: "4 salons à Tahiti", en: "4 salons in Tahiti" },
  },

  // Home page
  home: {
    heroTag: { fr: "4 salons à Tahiti — Sans rendez-vous", en: "4 salons in Tahiti — No appointment needed" },
    heroTitle1: { fr: "Votre coiffeur", en: "Your hairdresser" },
    heroTitle2: { fr: "près de chez vous", en: "close to home" },
    heroDesc: { fr: "Coupes, colorations, mèches, transformations. Venez comme vous êtes, repartez sublimé.", en: "Cuts, colors, highlights, transformations. Come as you are, leave looking great." },
    findSalon: { fr: "Trouver un salon", en: "Find a salon" },
    ourServices: { fr: "Nos services", en: "Our services" },
    salonsTag: { fr: "Nos salons", en: "Our salons" },
    salonsTitle: { fr: "4 adresses à Tahiti", en: "4 locations in Tahiti" },
    noAppointment: { fr: "Sans rendez-vous", en: "Walk-in" },
    seeDetails: { fr: "Voir les détails", en: "See details" },
    servicesTag: { fr: "Nos services", en: "Our services" },
    servicesTitle: { fr: "L'expertise au quotidien", en: "Everyday expertise" },
    servicesDesc: { fr: "Chez Enjoy Coiffure, chaque visite est une expérience. Nos coiffeurs maîtrisent les dernières tendances et s'adaptent à vos envies pour un résultat qui vous ressemble.", en: "At Enjoy Coiffure, every visit is an experience. Our stylists master the latest trends and adapt to your wishes for a result that reflects you." },
    servicesList: {
      fr: ["Coupes femme, homme et enfant", "Colorations et mèches", "Balayage et ombré", "Lissage et transformations"],
      en: ["Women's, men's & children's cuts", "Color & highlights", "Balayage & ombré", "Straightening & transformations"],
    },
    seePrices: { fr: "Voir les tarifs", en: "See prices" },
    bannerTitle: { fr: "Sans rendez-vous", en: "No appointment needed" },
    bannerDesc: { fr: "Passez quand vous voulez, on s'occupe de vous.", en: "Drop by whenever you like, we'll take care of you." },
    bannerCta: { fr: "Trouver le salon le plus proche", en: "Find the nearest salon" },
    galleryTag: { fr: "Nos réalisations", en: "Our work" },
    galleryTitle: { fr: "Le talent de nos coiffeurs", en: "The talent of our stylists" },
    galleryWomen: { fr: "Femme", en: "Women" },
    galleryMen: { fr: "Homme", en: "Men" },
    galleryChildren: { fr: "Enfant", en: "Children" },
    testimonial: { fr: "Super coupe, accueil chaleureux, et pas besoin de prendre rendez-vous. Mon salon préféré à Papeete.", en: "Great haircut, warm welcome, and no appointment needed. My favorite salon in Papeete." },
    testimonialAuthor: { fr: "Cliente fidèle", en: "Loyal customer" },
  },

  // Services page
  services: {
    tag: { fr: "Nos prestations", en: "Our services" },
    title: { fr: "Services & Tarifs", en: "Services & Prices" },
    subtitle: { fr: "Tous nos services sont disponibles sans rendez-vous dans nos 4 salons.", en: "All our services are available walk-in at our 4 salons." },
    tableService: { fr: "Prestation", en: "Service" },
    tablePrice: { fr: "Tarif", en: "Price" },
    categories: {
      fr: [
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
      ],
      en: [
        { title: "Women's Cuts", services: [
          { name: "Cut + blow-dry", price: "5 500" },
          { name: "Cut + dry", price: "4 500" },
          { name: "Blow-dry only", price: "3 000" },
          { name: "Children's cut (under 12)", price: "2 500" },
        ]},
        { title: "Men's Cuts", services: [
          { name: "Men's cut", price: "2 800" },
          { name: "Cut + beard", price: "3 500" },
          { name: "Fade cut", price: "3 000" },
          { name: "Boy's cut", price: "2 000" },
        ]},
        { title: "Color", services: [
          { name: "Full color", price: "7 500" },
          { name: "Color + cut + blow-dry", price: "11 000" },
          { name: "Root touch-up", price: "5 500" },
          { name: "Tone-on-tone color", price: "6 000" },
        ]},
        { title: "Highlights & Balayage", services: [
          { name: "Full highlights", price: "9 500" },
          { name: "Half-head highlights", price: "7 000" },
          { name: "Balayage", price: "8 500" },
          { name: "Ombré hair", price: "10 000" },
        ]},
        { title: "Treatments & Care", services: [
          { name: "Deep conditioning", price: "3 500" },
          { name: "Keratin treatment", price: "12 000", note: "depending on length" },
          { name: "Brazilian blowout", price: "18 000", note: "depending on length" },
          { name: "Relaxer", price: "8 000" },
        ]},
      ],
    },
    disclaimer: { fr: "Tarifs indicatifs. Suppléments possibles selon longueur et épaisseur des cheveux.", en: "Indicative prices. Surcharges may apply depending on hair length and thickness." },
    callUs: { fr: "Appelez-nous — 40 43 80 70", en: "Call us — 40 43 80 70" },
  },

  // Salons page
  salons: {
    tag: { fr: "Nos adresses", en: "Our locations" },
    title: { fr: "4 salons à Tahiti", en: "4 salons in Tahiti" },
    subtitle: { fr: "Tous nos salons vous accueillent sans rendez-vous.", en: "All our salons welcome you without an appointment." },
    address: { fr: "Adresse", en: "Address" },
    phone: { fr: "Téléphone", en: "Phone" },
    hours: { fr: "Horaires", en: "Hours" },
    noAppointment: { fr: "Sans rendez-vous", en: "Walk-in" },
    closed: { fr: "Fermé", en: "Closed" },
    days: {
      "Lundi — Vendredi": { fr: "Lundi — Vendredi", en: "Monday — Friday" },
      "Lundi — Samedi": { fr: "Lundi — Samedi", en: "Monday — Saturday" },
      "Samedi": { fr: "Samedi", en: "Saturday" },
      "Dimanche": { fr: "Dimanche", en: "Sunday" },
    } as Record<string, { fr: string; en: string }>,
  },

  // Contact page
  contact: {
    tag: { fr: "Nous contacter", en: "Contact us" },
    title: { fr: "Appelez-nous", en: "Call us" },
    subtitle: { fr: "Tous nos salons sont sans rendez-vous. Passez directement.", en: "All our salons are walk-in. Come directly." },
    call: { fr: "Appeler", en: "Call" },
    socialTag: { fr: "Réseaux sociaux", en: "Social media" },
    sendMessage: { fr: "Envoyer un message", en: "Send a message" },
  },

  // Footer
  footer: {
    desc: { fr: "4 salons de coiffure à Tahiti. Sans rendez-vous.", en: "4 hair salons in Tahiti. Walk-in welcome." },
    home: { fr: "Accueil", en: "Home" },
    salons: { fr: "Nos Salons", en: "Our Salons" },
    services: { fr: "Services", en: "Services" },
    contact: { fr: "Contact", en: "Contact" },
    mainPhone: { fr: "Téléphone principal", en: "Main phone" },
    messenger: { fr: "Messenger", en: "Messenger" },
    sendMessage: { fr: "Envoyer un message", en: "Send a message" },
    locations: { fr: "4 salons", en: "4 salons" },
    copyright: { fr: "Enjoy Coiffure. Tous droits réservés.", en: "Enjoy Coiffure. All rights reserved." },
  },
};

export type Language = "fr" | "en";

export function t(obj: { fr: string; en: string }, lang: Language): string {
  return obj[lang];
}
