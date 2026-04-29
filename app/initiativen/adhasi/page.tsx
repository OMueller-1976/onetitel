import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADHASI – Struktur und Unterstützung für Menschen mit ADHS",
  description:
    "ADHASI ist ein App-Projekt zur digitalen Unterstützung von Menschen mit ADHS — für mehr Struktur, Selbstorganisation und Fokus im Alltag.",
};

const features = [
  {
    title: "Tagesstruktur & Aufgaben-Planer",
    description:
      "Speziell auf ADHS-Bedürfnisse zugeschnittene Tagesplanung — übersichtlich, flexibel und ohne kognitive Überlastung.",
  },
  {
    title: "Sanftes Erinnerungssystem",
    description:
      "Nudges statt Lärm: Erinnerungen, die unterstützen ohne zu überfordern — kein Notification-Overload.",
  },
  {
    title: "Fortschritts-Tracking",
    description:
      "Positive Verstärkung durch sichtbaren Fortschritt — kleine Erfolge sichtbar machen, Motivation aufbauen.",
  },
  {
    title: "Ressourcen & Selbsthilfe",
    description:
      "Kuratierte Materialien, Strategien und Werkzeuge für den Alltag mit ADHS — wissenschaftlich fundiert und praxisnah.",
  },
  {
    title: "Community & Vernetzung",
    description:
      "Austausch mit Gleichgesinnten — für Betroffene, Angehörige und Fachkräfte.",
  },
];

export default function AdhasiPage() {
  return (
    <>
      {/* Hero — ruhig, vertrauensvoll */}
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
          HealthTech · In Entwicklung
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
          ADHASI
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
          Struktur und Unterstützung für Menschen mit ADHS
        </p>
      </section>

      {/* Was ist ADHASI */}
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
              Das Projekt
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
              ADHASI ist ein App-Projekt zur Unterstützung von Menschen mit
              Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) im Alltag. Der Ansatz: digitale
              Werkzeuge für mehr Struktur, Selbstorganisation und Fokus — ohne Stress, ohne Druck.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["Erwachsene mit ADHS", "Jugendliche", "Angehörige", "Therapeuten"].map((tag) => (
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
              ))}
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
            Geplante Features
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

      {/* Status */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
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
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: "1rem",
                }}
              >
                Projektstatus
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  border: "1px solid var(--border)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                In Entwicklung
              </div>
            </div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, opacity: 0.7 }}>
              ADHASI befindet sich in aktiver Entwicklung. Ein Early Access ist in Planung —
              tragen Sie sich ein und erfahren Sie als Erste, wann die App verfügbar ist.
            </p>
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
          Auf dem Laufenden bleiben
        </h2>
        <p style={{ fontSize: "1.05rem", opacity: 0.6, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Early Access, Updates und Launch-Informationen — direkt in Ihr Postfach.
        </p>
        <Link href="/kontakt" className="btn-primary">
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
