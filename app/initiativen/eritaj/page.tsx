import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERITAJ – Digitale Nachlassplanung & Erbrecht",
  description:
    "ERITAJ ist die digitale Plattform für Nachlassplanung, Erbrecht und Vorsorge — für Privatpersonen, die vorausdenken.",
};

const features = [
  {
    title: "Digitaler Nachlassordner",
    description: "Alle wichtigen Dokumente strukturiert ablegen — sicher, übersichtlich und jederzeit zugänglich.",
  },
  {
    title: "KI-gestützter Ratgeber",
    description: "Kompetente Unterstützung zu Erbrecht und Testament — verständlich erklärt, ohne Juristendeutsch.",
  },
  {
    title: "Vorsorgedokumente digital erstellen",
    description: "Vorsorgevollmacht und Patientenverfügung einfach und rechtssicher online erstellen.",
  },
  {
    title: "Optionale Sonderleistungen",
    description: "Notartermin, Rechtsberatung, Testament-Hinterlegung und Sterbegeldversicherung — buchbar im Abo.",
  },
];

const preise = [
  { name: "Free", beschreibung: "Einstieg ohne Kosten — Basis-Funktionen sofort nutzbar." },
  { name: "Basic", beschreibung: "Vollständiger Nachlassordner, KI-Ratgeber und Vorsorgedokumente." },
  { name: "Gold", beschreibung: "Alle Leistungen inkl. 50% Rabatt auf Notartermin und Premiumsupport." },
];

const sonderleistungen = [
  { label: "Notartermin", preis: "199 € einmalig", note: "Im Gold-Abo 50% Rabatt" },
  { label: "Rechtsberatung", preis: "149 € / 45 Minuten", note: "" },
  { label: "Testament-Hinterlegung beim Amtsgericht", preis: "125 €", note: "" },
  { label: "Sterbegeldversicherung", preis: "ab 29 €/Monat", note: "" },
];

export default function EritajPage() {
  return (
    <>
      {/* Hero — schwarz */}
      <section
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
          padding: "5rem 2rem 5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              opacity: 0.35,
              marginBottom: "1.25rem",
            }}
          >
            LegalTech · Initiative
          </p>
          <h1
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              color: "var(--bg)",
            }}
          >
            ERITAJ
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              opacity: 0.55,
              letterSpacing: "-0.01em",
              maxWidth: "640px",
              lineHeight: 1.4,
            }}
          >
            Digitale Nachlassplanung &amp; Erbrecht leicht gemacht
          </p>
        </div>
      </section>

      {/* Was ist ERITAJ */}
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
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Was ist ERITAJ?
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
              ERITAJ ist eine digitale Plattform für Nachlassplanung, Erbrecht und Vorsorge — für
              Privatpersonen, die vorausdenken. Wir machen ein komplexes, oft verdrängtes Thema
              zugänglich: strukturiert, verständlich und sicher.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.6 }}>
              Zielgruppe: Privatpersonen ab 40, Familien, Selbständige.
              Beratungsleistungen sind ggf. über die BAFA förderbar.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
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
            Leistungen &amp; Features
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "rgba(242,240,235,0.08)",
            }}
          >
            {features.map((f, i) => (
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
                <p style={{ fontSize: "1rem", lineHeight: 1.65, opacity: 0.6, margin: 0 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonderleistungen */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2rem",
            }}
          >
            Optionale Sonderleistungen
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "var(--border)",
            }}
          >
            {sonderleistungen.map((s) => (
              <div
                key={s.label}
                style={{ background: "#EBEBEB", padding: "2rem" }}
              >
                <p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.75rem", margin: "0 0 0.5rem" }}>
                  {s.label}
                </p>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    margin: "0 0 0.25rem",
                  }}
                >
                  {s.preis}
                </p>
                {s.note && (
                  <p style={{ fontSize: "0.72rem", opacity: 0.45, margin: 0 }}>{s.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preisstruktur */}
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
          Preisstruktur
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {preise.map((p) => (
            <div
              key={p.name}
              style={{ background: "var(--bg)", padding: "2.5rem" }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                {p.name}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, opacity: 0.6, margin: 0 }}>
                {p.beschreibung}
              </p>
            </div>
          ))}
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
          Jetzt kostenlos starten
        </h2>
        <p style={{ fontSize: "1.05rem", opacity: 0.55, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Vorausdenken zahlt sich aus — starten Sie heute mit ERITAJ.
        </p>
        <a
          href="https://www.eritaj.de"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.75rem",
            background: "var(--bg)",
            color: "var(--fg)",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid var(--bg)",
          }}
        >
          Zu eritaj.de →
        </a>
      </section>
    </>
  );
}
