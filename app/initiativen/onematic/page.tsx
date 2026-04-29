import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ONEmatic – Programmatic Advertising Platform",
  description:
    "ONEmatic ist die SaaS-Plattform für Programmatic Advertising, Digital Marketing und KI-gestützte Kampagnensteuerung.",
};

const features = [
  {
    title: "Kampagnen-Management",
    description: "Display, Video und Mobile — alle Kanäle in einer Oberfläche verwalten und optimieren.",
  },
  {
    title: "DSP-Anbindung & Programmatic",
    description: "Nahtlose Integration führender Demand-Side Platforms für effiziente Mediaeinkäufe in Echtzeit.",
  },
  {
    title: "KI Ad Bundle Generator (BETA)",
    description:
      "DALL-E generiert Display-Creatives in IAB-Standardformaten (300×250, 728×90, 160×600) auf Knopfdruck — skalierbare Creative-Produktion ohne Agentur.",
  },
  {
    title: "Creative-Bibliothek & Asset-Management",
    description: "Alle Creatives zentral verwalten, versionieren und kanalübergreifend einsetzen.",
  },
  {
    title: "Datengetriebenes Targeting",
    description: "Präzise Audience-Segmentierung und Targeting-Strategien auf Basis echter Nutzerdaten.",
  },
  {
    title: "Dynamic Creative Optimization (DCO)",
    description: "Automatische Anpassung von Werbemitteln in Echtzeit — das richtige Creative zur richtigen Zeit.",
  },
  {
    title: "Brand Safety & Fraud-Prevention",
    description: "Schutz vor Markenschäden und Ad-Fraud durch automatisierte Qualitätssicherung.",
  },
];

export default function OnematicPage() {
  return (
    <>
      {/* Hero — dunkel/technisch */}
      <section
        style={{
          background: "#0A0A0A",
          color: "var(--bg)",
          padding: "5rem 2rem 5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link
            href="/initiativen"
            style={{
              fontSize: "0.8rem",
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
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.35,
              marginBottom: "1.25rem",
            }}
          >
            AdTech · SaaS Platform
          </p>
          <h1
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              color: "var(--bg)",
            }}
          >
            ONEmatic
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              fontWeight: 300,
              opacity: 0.55,
              letterSpacing: "-0.01em",
              maxWidth: "640px",
              lineHeight: 1.4,
            }}
          >
            Die Programmatic Advertising Platform für Digital Marketer
          </p>
        </div>
      </section>

      {/* Was ist ONEmatic */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Plattform
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 300,
                lineHeight: 1.65,
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}
            >
              ONEmatic ist eine SaaS-Plattform für Programmatic Advertising, Digital Marketing und
              KI-gestützte Kampagnensteuerung — entwickelt von einem BVDW-Fokusgruppen-Experten mit
              über 15 Jahren Programmatic-Erfahrung.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, opacity: 0.6 }}>
              Zielgruppe: Marketing-Teams, Agenturen, Publisher und KMU mit Digital-Marketing-Bedarf.
            </p>
          </div>
        </div>
      </section>

      {/* ONEella */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#111111",
          color: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.35,
                  marginBottom: "1rem",
                }}
              >
                KI-Assistentin
              </p>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.03em",
                  color: "var(--bg)",
                  marginBottom: "0",
                }}
              >
                ONEella
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  opacity: 0.7,
                }}
              >
                ONEella ist die sachkundige, trocken-humorvolle KI-Expertin für Programmatic Ads —
                kompetent in DSPs, Creative-Optimierung, Brand Safety und KPIs. Sie liefert
                präzise Antworten auf komplexe Programmatic-Fragen, ohne dabei den menschlichen
                Faktor zu vergessen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "2.5rem",
          }}
        >
          Features &amp; Funktionen
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "2rem 1fr 2fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <span style={{ fontSize: "0.8rem", opacity: 0.3, fontWeight: 500 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.65, opacity: 0.6, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Badge */}
      <section style={{ padding: "4rem 2rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.7, maxWidth: "600px", margin: "0 auto" }}>
            Entwickelt von einem BVDW-Fokusgruppen-Experten mit 15+ Jahren Programmatic-Erfahrung.
            Praxiswissen, das in jedes Feature einfließt.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "var(--fg)",
          color: "var(--bg)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--bg)",
          }}
        >
          Platform entdecken
        </h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.55, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Programmatic Advertising auf dem nächsten Level — mit KI, Daten und Erfahrung.
        </p>
        <a
          href="https://app.onematic.de"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.75rem",
            background: "var(--bg)",
            color: "var(--fg)",
            fontSize: "1.25rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid var(--bg)",
          }}
        >
          Zu app.onematic.de →
        </a>
      </section>
    </>
  );
}
