import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leitfaden Jugendämter – True Dads Deutschland",
  description:
    "True Dads Deutschland erarbeitet einen praxisnahen Leitfaden für Jugendämter — bindungspsychologisch fundiert, rechtlich verankert.",
};

const NAVY = "#1B3A6B";

const kapitel = [
  {
    nr: "01",
    titel: "Grundlagen der Bindungspsychologie",
    text: "Einführung in die wichtigsten Erkenntnisse der Bindungsforschung (Bowlby, Ainsworth, Brisch) und ihre Relevanz für den Umgang mit sozialen Vätern.",
  },
  {
    nr: "02",
    titel: "Rechtlicher Rahmen",
    text: "Überblick über §§ 1684, 1685, 1666 BGB sowie relevante Rechtsprechung (OLG Karlsruhe, EGMR Kuppinger ./. Deutschland).",
  },
  {
    nr: "03",
    titel: "Erkennen von Entfremdungsdynamiken",
    text: "Praxisorientierte Kriterien zur Identifikation gezielter Kontaktverweigerung und elterlicher Entfremdung — ohne Vorverurteilung.",
  },
  {
    nr: "04",
    titel: "Handlungsempfehlungen für Fachkräfte",
    text: "Konkrete Schritte für Jugendamts-Mitarbeitende: Von der ersten Falleinschätzung bis zur Empfehlung gerichtlicher Maßnahmen.",
  },
  {
    nr: "05",
    titel: "Umgang mit hochkonflikthaften Trennungen",
    text: "Deeskalationsstrategien, Mediationsangebote und klare Grenzen der Neutralitätspflicht bei evidenter Kindeswohlgefährdung.",
  },
];

export default function LeitfadenPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: NAVY, color: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.25rem",
            }}
          >
            True Dads Deutschland · Leitfaden
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Arbeitsentwurf
            <br />
            <span style={{ opacity: 0.45 }}>für Jugendämter</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "600px",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            True Dads Deutschland erarbeitet einen praxisnahen Leitfaden für Jugendämter,
            der bindungspsychologische Erkenntnisse mit dem rechtlichen Rahmen verknüpft.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            Ziel des Leitfadens
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#333",
              marginBottom: "1.5rem",
            }}
          >
            Fachkräfte in Jugendämtern stehen täglich vor hochkomplexen Situationen — mit
            wenig Zeit, unklaren Informationen und großer Verantwortung. Unser Leitfaden soll
            eine evidenzbasierte Grundlage schaffen, die Entscheidungen in Fällen mit sozialen
            Vätern und Kontaktverweigerung transparenter und kindeswohlorientierter macht.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#555", fontWeight: 300 }}>
            Der Leitfaden verknüpft aktuelle Erkenntnisse der Bindungspsychologie mit dem
            geltenden Familienrecht und gibt konkrete Handlungsempfehlungen — ohne dabei
            einseitig zu sein oder Schuldzuweisungen vorzunehmen.
          </p>
        </div>
      </section>

      {/* Kapitelstruktur */}
      <section style={{ padding: "5rem 2rem", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 300,
              color: NAVY,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Geplante Kapitelstruktur
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E0E0E0" }}>
            {kapitel.map((k) => (
              <div
                key={k.nr}
                style={{
                  background: "#fff",
                  padding: "2rem 2.5rem",
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr 3fr",
                  gap: "1.5rem",
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: NAVY, letterSpacing: "0.08em" }}>
                  {k.nr}
                </span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#1a1a1a", margin: 0 }}>
                  {k.titel}
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "#555", margin: 0, fontWeight: 300 }}>
                  {k.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status / Platzhalter */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              border: `1px solid ${NAVY}`,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#2D5A3D",
                display: "inline-block",
              }}
            />
            In Erarbeitung
          </div>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Der vollständige Leitfaden wird in Kürze veröffentlicht.
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", marginBottom: "2.5rem", fontWeight: 300 }}>
            Möchtest Du informiert werden, wenn der Leitfaden verfügbar ist?
            Hinterlasse uns eine kurze Nachricht — wir melden uns, sobald er fertig ist.
          </p>
          <Link
            href="/initiativen/true-dads/kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 2rem",
              background: NAVY,
              color: "#fff",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </>
  );
}
