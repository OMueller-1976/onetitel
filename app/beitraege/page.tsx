import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beiträge",
  description:
    "Kurze, prägnante Fachbeiträge zu Sales, Interim-Management, Digital-Marketing und KI-Automatisierung von Oliver M. Müller.",
};

const beitraege = [
  {
    datum: "24. Mai 2024",
    lesezeit: "2 Min. Lesezeit",
    titel: "Fachkräftemangel führt laut Studie in 2022 zu Besorgnis im Marketing-Sektor",
    teaser:
      "Laut einem Beitrag bei ADZINE vom 13.01.2022 ist der mögliche Fachkräftemangel eine der größten Sorgen im Marketing-Sektor. Hierbei wurde analysiert, welche Herausforderungen Unternehmen in der Branche bewegen.",
  },
  {
    datum: "24. Mai 2024",
    lesezeit: "2 Min. Lesezeit",
    titel: "Welche Rolle spielen definierte Ziele im Interim-Management?",
    teaser:
      "Definierte Ziele spielen eine zentrale Rolle im Interim Management. Sie dienen als Leitfaden und Richtschnur für den Interim Manager, um messbare Ergebnisse zu erzielen und den Auftrag erfolgreich abzuschließen.",
  },
  {
    datum: "24. Mai 2024",
    lesezeit: "2 Min. Lesezeit",
    titel: "Wie kann Interim-Management in der Praxis aussehen?",
    teaser:
      "Interim Management ist eine effektive Methode, um temporäre Managementanforderungen zu erfüllen, spezielle Projekte durchzuführen oder Übergangsphasen in einer Organisation erfolgreich zu managen.",
  },
];

export default function BeitraegePage() {
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
          Blog
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "0.5rem",
          }}
        >
          Beiträge
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            fontWeight: 300,
            opacity: 0.4,
            letterSpacing: "-0.01em",
          }}
        >
          Kurz. Prägnant. Effektiv.
        </p>
      </section>

      <section style={{ padding: "0 2rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {beitraege.map((b, i) => (
            <article
              key={i}
              style={{
                background: "var(--bg)",
                padding: "3rem",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "1rem",
                  fontSize: "0.8rem",
                  opacity: 0.45,
                  letterSpacing: "0.04em",
                }}
              >
                <span>{b.datum}</span>
                <span>·</span>
                <span>{b.lesezeit}</span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {b.titel}
              </h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.6, margin: 0 }}>
                {b.teaser}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
