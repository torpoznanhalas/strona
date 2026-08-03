import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dla mediów",
  description: "Podstawowe fakty, dokumenty i kontakt prasowy w sprawie hałasu z Toru Poznań."
};

export default function MediaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Dla dziennikarzy</p>
          <h1>Sprawa w pięć minut.</h1>
          <p className="section-lead">
            Kontakt prasowy: Stowarzyszenie Mieszkańców Ławica-Bajkowe ·{" "}
            <a href="mailto:halastorpoznan@gmail.com">halastorpoznan@gmail.com</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ paddingTop: 0 }}>
            <h2>Istota sprawy</h2>
            <p>
              Spór nie dotyczy samego istnienia sportu motorowego. Dotyczy tego, czy komercyjnie
              wykorzystywany obiekt może regularnie przerzucać koszty hałasu na okolicznych mieszkańców,
              a po decyzji organu ochrony środowiska uzyskiwać polityczne wsparcie dla zmiany zasad.
            </p>

            <h2>Najważniejsza chronologia</h2>
            <ol>
              <li>GIOŚ podejmuje decyzję dotyczącą zamknięcia toru z powodu przekroczeń norm hałasu.</li>
              <li>Po odwołaniu wykonanie decyzji zostaje wstrzymane.</li>
              <li>W Sejmie procedowany jest projekt zmieniający status homologowanych torów.</li>
              <li>W debacie pojawia się możliwość podniesienia dopuszczalnego poziomu hałasu lokalnie.</li>
              <li>W oficjalnym wykazie uczestników posiedzenia nie ma reprezentacji okolicznych osiedli.</li>
            </ol>

            <h2>Materiały</h2>
            <p>
              <Link href="/dokumenty">Otwórz archiwum dokumentów źródłowych.</Link>
            </p>

            <h2>Rozmowa i wykorzystanie nagrań</h2>
            <p>
              W sprawie komentarza, rozmów z mieszkańcami i uzgodnienia zasad wykorzystania materiałów
              wideo prosimy o kontakt mailowy. Nie należy zakładać, że każde nagranie może zostać
              automatycznie wykorzystane poza tą stroną.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
