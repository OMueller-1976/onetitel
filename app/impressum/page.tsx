import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

const h2Style: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 500,
  marginBottom: "0.5rem",
  marginTop: "2.5rem",
  opacity: 1,
  letterSpacing: "-0.01em",
};

export default function ImpressumPage() {
  return (
    <section style={{ padding: "5rem 2rem 6rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 200,
          letterSpacing: "-0.03em",
          marginBottom: "3rem",
        }}
      >
        Impressum
      </h1>

      <div style={{ fontSize: "1.125rem", lineHeight: 1.9, opacity: 0.75 }}>

        {/* § 5 TMG */}
        <h2 style={h2Style}>Angaben gemäß § 5 TMG</h2>
        <p>
          OneTitel – Digital &amp; Business Solutions<br />
          Oliver M. Müller<br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          Deutschland
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>
            info@onetitel.de
          </a>
          <br />
          Website: www.onetitel.de
        </p>

        {/* Umsatzsteuer */}
        <h2 style={h2Style}>Umsatzsteuer-Identifikationsnummer</h2>
        <p>
          Gemäß § 19 UStG wird keine Umsatzsteuer-Identifikationsnummer ausgewiesen
          (Kleinunternehmerregelung).
        </p>

        {/* Berufsbezeichnung */}
        <h2 style={h2Style}>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Unternehmensberater / Interim Manager<br />
          Zuständige Kammer: Industrie- und Handelskammer (IHK) Trier<br />
          Verliehen in: Deutschland
        </p>

        {/* Verantwortlicher § 55 RStV */}
        <h2 style={h2Style}>Verantwortlicher gemäß § 55 Abs. 2 RStV</h2>
        <p>
          Oliver M. Müller<br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          E-Mail:{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>
            info@onetitel.de
          </a>
        </p>

        {/* EU-Streitschlichtung */}
        <h2 style={h2Style}>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
          Die Plattform finden Sie unter:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        {/* Haftung für Inhalte */}
        <h2 style={h2Style}>Haftung für Inhalte (§ 7 TMG)</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>

        {/* Haftung für Links */}
        <h2 style={h2Style}>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
        <p>
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
          überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        {/* Urheberrecht */}
        <h2 style={h2Style}>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        <p>
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
          gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
          die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
          bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

      </div>
    </section>
  );
}
