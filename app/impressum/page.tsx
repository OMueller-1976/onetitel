import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
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
        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          Angaben gem. § 5 TMG
        </h2>
        <p>
          OneTitel – Digital &amp; Business Solutions<br />
          Oliver M. Müller<br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          Deutschland<br />
          E-Mail: <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>info@onetitel.de</a>
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          Haftungsausschluss
        </h2>
        <p>
          Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich.
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          Haftungsbeschränkung für externe Links
        </h2>
        <p>
          Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder
          indirekt verlinkten Webseiten haben wir keinen Einfluss. Für die Inhalte der externen Links sind
          die jeweiligen Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          Urheberrecht
        </h2>
        <p>
          Die auf unserer Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers.
        </p>
      </div>
    </section>
  );
}
