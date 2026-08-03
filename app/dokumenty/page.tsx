import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dokumenty źródłowe",
  description: "Dokumenty dotyczące Toru Poznań, hałasu i prac legislacyjnych."
};

const documents = [
  {
    type: "PDF",
    title: "Projekt ustawy o zmianie ustawy o sporcie — druk nr 2647",
    description: "Projekt i uzasadnienie dotyczące homologowanych torów sportów motorowych.",
    href: "/dokumenty/projekt-zmiany-ustawy-o-sporcie-druk-2647.pdf"
  },
  {
    type: "PDF",
    title: "Pełny zapis posiedzenia Komisji z 15 lipca 2026 r.",
    description: "Stenogram pierwszego czytania projektów dotyczących funkcjonowania Toru Poznań.",
    href: "/dokumenty/stenogram-komisji-15-07-2026.pdf"
  },
  {
    type: "DOCX",
    title: "Komunikat stowarzyszeń mieszkańców z 7 maja 2026 r.",
    description: "Stanowisko strony społecznej. Dokument ma charakter publicystyczny i wymaga czytania wraz ze wskazanymi źródłami.",
    href: "/dokumenty/komunikat-stowarzyszen-07-05-2026.docx"
  },
  {
    type: "DOCX",
    title: "Projekt pisma do posłów",
    description: "Projekt wystąpienia mieszkańców dotyczący narracji użytej w pracach nad zmianą ustawy.",
    href: "/dokumenty/pismo-do-poslow-projekt.docx"
  }
];

export default function DocumentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Źródła</p>
          <h1>Dokumenty, nie insynuacje.</h1>
          <p className="section-lead">
            Tu publikujemy materiały, na których opieramy chronologię i opis działań. W kolejnych
            etapach dodamy pełne decyzje GIOŚ i WIOŚ, pomiary, korespondencję urzędową oraz dokumenty
            dotyczące historii i sposobu użytkowania toru.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="source-list">
            {documents.map((document) => (
              <a
                className="source-card"
                href={document.href}
                key={document.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="source-type">{document.type}</span>
                <span>
                  <h3>{document.title}</h3>
                  <p>{document.description}</p>
                </span>
                <span className="source-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <div className="prose">
            <h2>Materiały, które chcemy jeszcze opublikować</h2>
            <ul>
              <li>pełna decyzja WIOŚ i decyzja GIOŚ wraz z uzasadnieniami;</li>
              <li>wyniki pomiarów hałasu oraz metodykę pomiarową;</li>
              <li>dokumenty dotyczące wcześniejszych uzgodnień z mieszkańcami;</li>
              <li>oficjalne kalendarze imprez i komercyjnych wynajmów toru;</li>
              <li>materiały źródłowe dotyczące zabudowy okolicy przed 1977 rokiem;</li>
              <li>dokumenty określające pierwotne przeznaczenie, budowę i późniejsze użytkowanie obiektu.</li>
            </ul>
            <p>
              Masz dokument, który powinien znaleźć się w tym archiwum? Napisz na{" "}
              <a href="mailto:halastorpoznan@gmail.com">halastorpoznan@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
