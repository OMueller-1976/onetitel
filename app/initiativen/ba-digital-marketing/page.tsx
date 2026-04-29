import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BA Digital Marketing – Business Angel & Beratung im Digital-Marketing",
  description:
    "Business Angel Initiative von Oliver M. Müller für digital-affine Start-ups und Wachstumsunternehmen im Marketing-Bereich — Programmatic, KI, Go-to-Market.",
};

const fokusthemen = [
  {
    title: "Programmatic Advertising & Data-Driven Marketing",
    description:
      "Aufbau und Optimierung programmatischer Werbestrategien — von DSP-Selektion bis Creative-Optimierung und Brand Safety.",
  },
  {
    title: "AI/KI-gestützte Leadgenerierung & Sales-Optimierung",
    description:
      "Einsatz intelligenter Automatisierung und datengetriebener Analysen zur Identifikation hochwertiger Zielkunden und Steigerung der Funnel-Performance.",
  },
  {
    title: "Aufbau digitaler Vermarktungsstrukturen",
    description:
      "Entwicklung skalierbarer Strukturen für digitale Werbevermarktung — von der Strategie bis zur operativen Umsetzung.",
  },
  {
    title: "Go-to-Market-Strategie für Digital-First Unternehmen",
    description:
      "Markteintrittsstrategien, Positionierung und Wachstumsplanung für Unternehmen mit digitalem Kerngeschäft.",
  },
  {
    title: "Existenzgründung & Start-up Begleitung",
    description:
      "Begleitung von der Idee bis zur Marktreife — operative Unterstützung, Netzwerkzugang und strategisches Sparring.",
  },
];

const angebotsmodell = [
  {
    format: "Advisory / Mentoring",
    beschreibung:
      "Regelmäßiges strategisches Sparring für Gründer und Führungskräfte — Erfahrung auf Abruf.",
  },
  {
    format: "Equity-Beteiligung",
    beschreibung:
      "Bei strategischem Fit und überzeugendem Geschäftsmodell: Beteiligung als aktiver Business Angel.",
  },
  {
    format: "Projekt-Begleitung",
    beschreibung:
      "Zeitlich definierte Begleitung konkreter Wachstumsprojekte — hands-on und ergebnisorientiert.",
  },
];

const stationen = [
  {
    rolle: "Fokusgruppe Programmatic Advertising",
    org: "BVDW (Bundesverband Digitale Wirtschaft)",
    zeitraum: "bis 2019",
  },
  {
    rolle: "Key Account Manager",
    org: "iq digital media marketing GmbH",
    zeitraum: "",
  },
  {
    rolle: "Interim Manager Leitung Vermarktung Digital",
    org: "Weser-Kurier Mediengruppe (BTAG)",
    zeitraum: "2019–2020",
  },
  {
    rolle: "Experte Data-Driven Advertising & Programmatic",
    org: "OneTitel",
    zeitraum: "seit 2020",
  },
];

export default function BaDigitalMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "5rem 2rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/initiativen"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.4,
            textDecoration: "none",
            color: "inherit",
            display: "inline-block",
            marginBottom: "3rem",
          }}
        >
          ← Initiativen &amp; Ventures
        </Link>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "1.25rem",
          }}
        >
          Business Angel · Digital Marketing
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
          }}
        >
          Digital Growth.
          <br />
          <span style={{ opacity: 0.35 }}>Von Experten begleitet.</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            opacity: 0.55,
            letterSpacing: "-0.01em",
            maxWidth: "620px",
            lineHeight: 1.5,
          }}
        >
          Business Angel und Beratung im Digital-Marketing — für Start-ups und
          Wachstumsunternehmen mit digitalem Fokus.
        </p>
      </section>

      {/* Was ist BA Digital Marketing */}
      <section style={{ padding: "3rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            Die Initiative
          </p>
          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}
            >
              BA Digital Marketing ist die Business Angel Initiative von Oliver M. Müller für
              digital-affine Start-ups und Wachstumsunternehmen im Marketing-Bereich. Mit
              15+ Jahren Erfahrung in Programmatic Advertising, Data-Driven Marketing und
              digitalem Vertrieb begleite ich Gründer und Teams vom ersten Pitch bis zur Skalierung.
            </p>
          </div>
        </div>
      </section>

      {/* Fokusthemen */}
      <section style={{ padding: "4rem 2rem", background: "var(--fg)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.35,
              marginBottom: "2.5rem",
            }}
          >
            Fokusthemen
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "rgba(242,240,235,0.08)",
            }}
          >
            {fokusthemen.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(242,240,235,0.03)",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr 2fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: "0.7rem", opacity: 0.3, fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    color: "var(--bg)",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, opacity: 0.6, margin: 0 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angebotsmodell */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "2.5rem",
          }}
        >
          Angebotsmodell
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {angebotsmodell.map((a) => (
            <div key={a.format} style={{ background: "var(--bg)", padding: "2.5rem" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                }}
              >
                {a.format}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.75, opacity: 0.65, margin: 0 }}>
                {a.beschreibung}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hintergrund */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2.5rem",
            }}
          >
            Hintergrund · Oliver M. Müller
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--border)",
            }}
          >
            {stationen.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#EBEBEB",
                  padding: "2rem 2.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {s.rolle}
                </h3>
                <p style={{ fontSize: "0.83rem", opacity: 0.55, margin: 0 }}>{s.org}</p>
                {s.zeitraum && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      opacity: 0.4,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.zeitraum}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Anfrage stellen
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.6,
            marginBottom: "2.5rem",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
          }}
        >
          Pitch, Kooperation oder strategisches Sparring — ich freue mich auf das Gespräch.
        </p>
        <Link href="/kontakt" className="btn-primary">
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
