import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "True Dads Deutschland – Väter bleiben Väter!",
  description:
    "True Dads Deutschland setzt sich für das Recht des Kindes auf seinen sozialen Vater ein — unabhängig, überparteilich, faktenbasiert.",
};

const NAVY = "#1B3A6B";

const paragraphen = [
  {
    para: "§ 1684 BGB",
    text: "Garantiert das Recht des Kindes auf Umgang mit jedem Elternteil — und die Pflicht jedes Elternteils zum Umgang.",
  },
  {
    para: "§ 1626 Abs. 3 BGB",
    text: "Umgang mit beiden Elternteilen gehört zum Kindeswohl. Das Gesetz schützt diese Bindung ausdrücklich.",
  },
  {
    para: "§ 1685 BGB",
    text: "Umgangsrecht für enge Bezugspersonen — schützt auch soziale Eltern, die nicht biologisch verwandt sind.",
  },
];

const stats = [
  { zahl: "20%", label: "Kinder erleben Entfremdung vom Vater", quelle: "pairfam-Studie" },
  { zahl: "1 von 5", label: "Kinder in 10 Jahren Kontaktabbruch zum Vater", quelle: "Langzeitstudie" },
  { zahl: "15.168", label: "Sorgerechtsfälle vor Familiengerichten (2024)", quelle: "Statistisches Bundesamt" },
  { zahl: "<5%", label: "Wechselmodell-Umsetzung in Deutschland", quelle: "BMJV" },
];

const hintergruende = [
  {
    nr: "01",
    title: "Prävalenz in Deutschland",
    text: "Laut der pairfam-Langzeitstudie verlieren rund 20 % der Kinder den regelmäßigen Kontakt zu ihrem Vater — verglichen mit 9 % zur Mutter.",
  },
  {
    nr: "02",
    title: "Psychologische Ursachen",
    text: "Narzisstische Züge, Gatekeeping und Triangulation sind häufige Mechanismen, durch die ein Elternteil gezielt den Kontakt zum anderen verhindert.",
  },
  {
    nr: "03",
    title: "Wirkung auf Kinder",
    text: "Betroffene Kinder zeigen erhöhte Raten von Ängsten, Depressionen und Bindungsstörungen — mit langfristigen Folgen bis ins Erwachsenenalter.",
  },
  {
    nr: "04",
    title: "Forschungslage",
    text: "Führende Bindungsforscher bezeichnen gezielte Elterliche Entfremdung als eine Form der psychologischen Kindesmisshandlung.",
  },
];

export default function TrueDadsHomePage() {
  return (
    <>
      {/* Hero — navy */}
      <section
        style={{
          background: NAVY,
          color: "#fff",
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
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "2.5rem",
            }}
          >
            ← Initiativen &amp; Ventures
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
            }}
          >
            Initiative · Väterrechte
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "1.25rem",
            }}
          >
            True Dads Deutschland
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Väter bleiben Väter!
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "680px",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            Eine unabhängige, überparteiliche Initiative, die das Bewusstsein für die Bedeutung
            sozial-familiärer Väter stärken, ihre rechtliche Stellung ausbauen und
            Diskriminierung im Umgangsrecht abbauen will.
          </p>
          <a
            href="https://omm-default.wixsite.com/true-dads"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 2rem",
              background: "#fff",
              color: NAVY,
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #fff",
              transition: "background 0.2s",
            }}
          >
            Petition unterzeichnen →
          </a>
        </div>
      </section>

      {/* Section 2 — Die Initiative */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: NAVY,
            }}
          >
            Die Initiative
          </h2>
          <div>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#333",
                marginBottom: "1.5rem",
              }}
            >
              In Deutschland verlieren jedes Jahr tausende Kinder den Kontakt zu ihrem sozialen
              Vater — nicht, weil er sie im Stich lässt, sondern weil Gesetze, Behörden und
              Gerichte ihre Bindung nicht ausreichend schützen.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#555" }}>
              True Dads Deutschland setzt sich dafür ein, dass soziale Väter rechtlich gestärkt,
              in ihrem Engagement unterstützt und in ihrer Rolle sichtbar wertgeschätzt werden.
              Das Kindeswohl steht dabei immer im Mittelpunkt — denn ein Kind braucht beide
              Elternteile.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Rechtlicher Rahmen */}
      <section style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: NAVY,
              marginBottom: "2.5rem",
            }}
          >
            Der rechtliche Rahmen
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {paragraphen.map((p) => (
              <div
                key={p.para}
                style={{
                  background: "#fff",
                  borderLeft: `4px solid ${NAVY}`,
                  padding: "2rem 2rem 2rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: NAVY,
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.para}
                </p>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "#444", margin: 0 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          {/* Zitat OLG Karlsruhe */}
          <div
            style={{
              background: "#fff",
              borderLeft: `4px solid ${NAVY}`,
              padding: "2rem 2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: NAVY,
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              OLG Karlsruhe, 12.07.2013 · Az. 16 UF 138/13
            </p>
            <blockquote
              style={{
                fontStyle: "italic",
                fontSize: "1.2rem",
                lineHeight: 1.75,
                color: "#333",
                margin: 0,
                fontWeight: 300,
              }}
            >
              „Der Kontaktabbruch zu einer sozial engen Bezugsperson kann für das Kind eine
              erhebliche seelische Belastung darstellen, die dem Kindeswohl widerspricht."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 4 — Statistiken */}
      <section style={{ padding: "5rem 2rem", background: NAVY }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Zahlen &amp; Fakten
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.zahl}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 200,
                    letterSpacing: "-0.03em",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.zahl}
                </div>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.55, color: "rgba(255,255,255,0.7)", margin: "0 0 0.5rem" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.05em" }}>
                  {s.quelle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Hintergründe der Entfremdung */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: NAVY,
              marginBottom: "2.5rem",
            }}
          >
            Mögliche Hintergründe für gezielte Entfremdung
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {hintergruende.map((h) => (
              <div
                key={h.nr}
                style={{
                  background: "#FFFFFF",
                  padding: "2.5rem",
                  borderTop: `3px solid ${NAVY}`,
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: NAVY,
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {h.nr}
                </span>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {h.title}
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "#555", margin: 0 }}>
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section
        style={{
          padding: "5rem 2rem",
          background: NAVY,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "1.25rem",
          }}
        >
          Unterstütze die Initiative
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "2.5rem",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
          }}
        >
          Jede Unterschrift ist ein Zeichen — für Kinder und Väter, die nicht vergessen werden wollen.
        </p>
        <a
          href="https://omm-default.wixsite.com/true-dads"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.85rem 2rem",
            background: "#fff",
            color: NAVY,
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Jetzt Petition unterschreiben →
        </a>
      </section>
    </>
  );
}
