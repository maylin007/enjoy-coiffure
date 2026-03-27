import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import ChatWidget from "@/components/ChatWidget";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://enjoy-coiffure.vercel.app"),
  title: { default: "Enjoy Coiffure — Tahiti", template: "%s — Enjoy Coiffure" },
  description: "4 salons de coiffure à Tahiti. Coupes, colorations, mèches, transformations. Sans rendez-vous. Papeete, Taunoa, Mahina, Punaauia.",
  keywords: ["coiffeur Papeete", "salon coiffure Tahiti", "coupe sans rdv Tahiti", "coloration Papeete", "Enjoy Coiffure"],
  alternates: {
    canonical: "https://enjoy-coiffure.vercel.app",
    languages: { "fr": "https://enjoy-coiffure.vercel.app", "en": "https://enjoy-coiffure.vercel.app" },
  },
  openGraph: { title: "Enjoy Coiffure — Tahiti", description: "4 salons de coiffure à Tahiti. Sans rendez-vous.", locale: "fr_FR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "name": "Enjoy Coiffure",
          "address": { "@type": "PostalAddress", "streetAddress": "Rue Gauguin", "addressLocality": "Papeete", "postalCode": "98713", "addressCountry": "PF" },
          "telephone": "+68940438070",
          "openingHours": ["Mo-Fr 08:00-17:00", "Sa 08:00-16:00"],
          "url": "https://enjoy-coiffure.vercel.app",
          "description": "4 salons de coiffure à Tahiti. Coupes femme, homme, enfant. Colorations, mèches, balayage. Sans rendez-vous.",
          "priceRange": "$",
          "geo": { "@type": "GeoCoordinates", "latitude": -17.535, "longitude": -149.569 },
          "sameAs": ["https://www.facebook.com/enjoycoiffuretahiti/"]
        })}} />
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <PhoneButton />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
