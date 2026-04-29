import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lersi – Die Lern-App für Kinder, Eltern und Pädagogen",
  description:
    "Lersi verbindet Eltern, Kinder und pädagogische Fachkräfte — strukturiertes, spielerisches Lernen für die ganze Familie.",
};

const features = [
  {
    title: "Kindgerechte Lernübungen",
    description: "Spielerische Aufgaben und interaktive Übungen, die Kinder motivieren und Lernerfolge sichern.",
  },
  {
    title: "Eltern-Dashboard",
    description: "Lernfortschritt in Echtzeit verfolgen, Aufgaben verwalten und Einstellungen bequem von überall anpassen.",
  },
  {
    title: "Pädagogen-Zugang",
    description: "Lehrkräfte und Förderpädagogen verknüpfen Kind-Accounts über einen einfachen Einladungscode.",
  },
  {
    title: "PIN-basierter Kinder-Login",
    description: "Sicherer, kinderleichter Einstieg — ohne Passwörter, aber mit verlässlichem Schutz.",
  },
  {
    title: "Push-Benachrichtigungen",
    description: "Sanfte Erinnerungen für Lernziele und Erfolgsmeldungen — damit die Motivation hochbleibt.",
  },
  {
    title: "DSGVO-konform",
    description: "Kinderdaten werden besonders geschützt — nach höchsten europäischen Datenschutzstandards.",
  },
  {
    title: "Abo-Modell mit kostenlosem Einstieg",
    description: "Lersi kostenlos testen, dann flexibel upgraden. Stripe-Integration für reibungslose Zahlungsabwicklung.",
  },
];

export default function LersiPage() {
  return (
    <>
      {/* Hero — freundlich, hell */}
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
          EdTech · Lern-App
        </p>
        <h1
          style={{
            fontSize: "clamp(4rem, 10vw, 9rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
          }}
        >
          Lersi
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 300,
            opacity: 0.55,
            letterSpacing: "-0.01em",
            maxWidth: "620px",
            lineHeight: 1.4,
          }}
        >
          Die Lern-App für Kinder, Eltern und Pädagogen
        </p>
      </section>

      {/* Was ist Lersi */}
      <section style={{ padding: "3rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto" }}>
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
              Die App
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}
            >
              Lersi ist eine App für strukturiertes, spielerisches Lernen — sie verbindet Eltern,
              Kinder und pädagogische Fachkräfte in einem gemeinsamen digitalen Raum. Lernen wird
              zur Routine, nicht zur Last.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["Eltern", "Schulkinder", "Grundschulen", "Förderpädagogen", "ADHS-Begleitung"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.4rem 0.9rem",
                      border: "1px solid var(--border)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.04em",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
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
            Features
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.3,
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
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

      {/* Verfügbarkeit */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1.5rem",
            }}
          >
            Verfügbarkeit
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            {["Web", "Android (Google Play Store)"].map((plat) => (
              <span
                key={plat}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  opacity: 0.75,
                }}
              >
                {plat}
              </span>
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
          Lersi entdecken
        </h2>
        <p style={{ fontSize: "0.9rem", opacity: 0.6, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Lernen, das Spaß macht — für Kinder, Eltern und Pädagogen gemeinsam.
        </p>
        <a
          href="https://www.lersi.de"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Zu lersi.de →
        </a>
      </section>
    </>
  );
}
