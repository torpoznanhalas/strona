import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://torpoznanhalas.pl"),
  title: {
    default: "Tor Poznań: hałas, fakty i dokumenty",
    template: "%s | Tor Poznań: Hałas"
  },
  description:
    "Dokumenty, nagrania i fakty dotyczące hałasu emitowanego przez Tor Poznań oraz działań podejmowanych po decyzji organów ochrony środowiska.",
  keywords: [
    "Tor Poznań hałas",
    "torpoznan",
    "Tor Poznań",
    "hałas Poznań Ławica",
    "Przeźmierowo hałas",
    "Automobilklub Wielkopolski",
    "normy hałasu"
  ],
  authors: [{ name: "Stowarzyszenie Mieszkańców Ławica-Bajkowe" }],
  creator: "Stowarzyszenie Mieszkańców Ławica-Bajkowe",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://torpoznanhalas.pl",
    siteName: "Tor Poznań: Hałas",
    title: "Tor Poznań przekraczał normy. Potem ruszyła walka o zmianę zasad.",
    description:
      "Zobacz dokumenty, posłuchaj nagrań i poprzyj egzekwowanie norm hałasu przy Torze Poznań."
  },
  twitter: {
    card: "summary_large_image",
    title: "Tor Poznań: hałas, fakty i dokumenty",
    description: "Nie prosimy, byś wierzył nam na słowo. Pokazujemy dokumenty."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
