import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medienberichte & Presseartikel – Oliver M. Müller",
  description:
    "Presseartikel und Medienberichte über Oliver M. Müller und OneTitel – Experte für Programmatic Advertising, Digital Marketing und Sales-Consulting.",
  alternates: { canonical: "https://www.onetitel.de/medienberichte" },
  openGraph: {
    url: "https://www.onetitel.de/medienberichte",
    title: "Medienberichte | OneTitel",
  },
};

const berichte: { quelle: string; titel: string; zitat: string | null; beschreibung: string; thumbnail?: boolean }[] = [
  {
    quelle: "Marconomy",
    titel: "Warum lohnt sich programmatisches Drucken?",
    zitat:
      "Ich finde die Möglichkeiten äußerst faszinierend! Programmatic Printing bietet das Potential mit der datengetriebenen Personalisierung und Individualisierung den Schulterschluss der Ansprache im Omnichannel zu schließen und die Kundenansprache auszubauen.",
    beschreibung:
      "Oliver Müller, Interimsmanager, Berater und Spezialist für Online Marketing, Data-Driven und Programmatic Advertising, über die Möglichkeiten von Programmatic Printing.",
  },
  {
    quelle: "Marconomy",
    titel: "AUTOR UND PRODUKT-LEAD SAAS WHITEPAPER",
    zitat: null,
    beschreibung:
      "SaaS Lösung zur Optimierung des Werbemittel-Managements. Das Whitepaper gibt Ihnen einen grundsätzlichen Einblick zu SaaS Lösungen, der Effizienzsteigerung für dezentrale Strukturen und Anwendungsmöglichkeiten zur Optimierung des Werbemittel-Managements im Marketing.",
  },
  {
    quelle: "Internetworld.de",
    titel: "Digitale Vermarktung: \"Wir fahren von Monat zu Monat auf Sicht\"",
    zitat: null,
    beschreibung:
      "Die Auswirkungen der Corona-Krise auf die Wirtschaft und damit auch auf die Werbewirtschaft sind erheblich. Oliver Markus Müller von der Bremer Tageszeitungen AG erklärt, wie es mit dem digitalen Vermarktungsgeschäft aussieht.",
  },
  {
    quelle: "W&V",
    titel: "iq digital baut mit Oliver Markus Müller das Team im Bereich IT aus",
    zitat: null,
    beschreibung:
      "Oliver Markus Müller startet zum 1. August als Key Account Manager mit Schwerpunkt IT Branchen bei iq digital, dem Düsseldorfer Vermarkter für digitale Qualitätsmedien und Mediabrands.",
  },
  {
    quelle: "W&V / EuGH",
    titel: "EuGH-Urteil: Pflicht zur Zeiterfassung — Wer profitiert, wer verliert?",
    zitat: null,
    beschreibung:
      "Das Urteil des Europäischen Gerichtshofs, das Arbeitgeber zur Zeiterfassung verpflichtet, schlägt hohe Wellen. Widerspricht es flexiblen Arbeitsmodellen oder unterstützt es sie?",
    thumbnail: true,
  },
  {
    quelle: "SocialOne / Marconomy",
    titel: "Programmatic Advertising: 7 aktuelle Herausforderungen im B2B",
    zitat: null,
    beschreibung:
      "Einer der größten Treiber des Online-Werbemarktes ist derzeit Programmatic Advertising. Es wird prognostiziert, dass der programmatische Handel in wenigen Jahren für alle Märkte und Medien zur Standardeinkaufsmethode wird.",
  },
];

export default function MedienberishtePage() {
  return (
    <>
      <section style={{ padding: "5rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "1rem",
          }}
        >
          Presse
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
          }}
        >
          Berichte
          <br />
          <span style={{ opacity: 0.3 }}>in Medien</span>
        </h1>
      </section>

      <section style={{ padding: "0 2rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {berichte.map((b, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg)",
                padding: "3rem",
              }}
            >
              {b.thumbnail && (
                <div
                  style={{
                    position: "relative",
                    height: "160px",
                    marginBottom: "1rem",
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                >
                  <Image
                    src="/images/media-clock.jpg"
                    alt="Zeiterfassung"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: "0.75rem",
                }}
              >
                {b.quelle}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                }}
              >
                {b.titel}
              </h2>
              {b.zitat && (
                <blockquote
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    opacity: 0.7,
                    borderLeft: "2px solid var(--fg)",
                    paddingLeft: "1.25rem",
                    margin: "0 0 1rem",
                  }}
                >
                  „{b.zitat}"
                </blockquote>
              )}
              <p style={{ fontSize: "1.125rem", lineHeight: 1.65, opacity: 0.6, margin: 0 }}>
                {b.beschreibung}
              </p>
            </div>
          ))}
        </div>

        {/* BVDW note */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2.5rem",
            background: "#FFFFFF",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "0.75rem",
            }}
          >
            Digital Marketing Kompetenz
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
            Bis 2019 Mitglied in der Fokusgruppe "Programmatic Advertising" des Bundesverbandes der
            digitalen Werbewirtschaft e. V. und Mitwirkender am Leitfaden "Daten-Strategie" im
            Programmatic Advertising.
          </p>
        </div>
      </section>
    </>
  );
}
