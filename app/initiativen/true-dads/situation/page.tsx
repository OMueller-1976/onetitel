import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Die Situation – True Dads Deutschland",
  description:
    "Oliver Markus Müller über seinen persönlichen Weg durch Entfremdung, Ungerechtigkeit und den langen Kampf für das Recht seiner Kinder.",
};

const NAVY = "#1B3A6B";

const buecher = [
  { titel: "Die Grauzone des Umgangsrechts", jahr: "2025" },
  { titel: "Bindung statt Biologie: Väterrechte im Wandel", jahr: "2025" },
  { titel: "Ratgeber Familie & Erziehung", jahr: "2023" },
  { titel: "Leo und das Geheimnis der mutigen Freunde", jahr: "2023" },
  { titel: "Emma und die Magie des Zauberwaldes", jahr: "2023" },
];

export default function SituationPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: NAVY,
          color: "#fff",
          padding: "4rem 2rem",
        }}
      >
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
            True Dads Deutschland · Persönlich
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
            Vom liebenden Vater
            <br />
            <span style={{ opacity: 0.45 }}>zum Fremden</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              fontStyle: "italic",
            }}
          >
            Mein Weg durch Entfremdung und Ungerechtigkeit
          </p>
        </div>
      </section>

      {/* Geschichte */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 600,
              marginBottom: "2.5rem",
            }}
          >
            Meine Geschichte
          </p>

          {[
            `Über 9 Jahre war ich nicht nur Partner, sondern vor allem Vater — für drei Kinder (Stiefkinder), die ich von klein auf begleitet, gefördert, geliebt und erzogen habe. Nicht weil ich musste. Sondern weil ich wollte. Weil sie meine Kinder waren — in jeder Geste, jedem Abend, jedem Schulprojekt, jeder Krankennacht.`,
            `Als die Beziehung zu ihrer Mutter endete, begann ein anderer Kampf. Nicht gegen einen Menschen — sondern gegen ein System, das soziale Väter schlicht nicht kennt. Kein § schützte zuverlässig, was wir füreinander waren. Die Kinder verloren einen Vater, der immer da war. Ich verlor Kinder, die mein Leben waren.`,
            `Was folgte, war ein langer, zermürbender Weg durch Jugendämter, Anwaltsbriefe und Gerichtstermine. Immer mit dem gleichen Ergebnis: Das System hat keine Kategorie für jemanden wie mich. Kein Blut, kein Recht. Kein Papier, kein Gehör.`,
            `Ich habe angefangen zu schreiben — nicht aus Wut, sondern aus dem Bedürfnis, dass andere nicht das Gleiche erleben müssen. Die Bücher, die dabei entstanden sind, richten sich an Betroffene, an Fachkräfte und an eine Gesellschaft, die gelebte Elternschaft endlich ernst nehmen muss.`,
            `True Dads Deutschland ist aus dieser Erfahrung entstanden. Es ist kein Protest. Es ist ein Angebot — an alle Väter, die kämpfen, und an alle Kinder, die ihren Vater vermissen.`,
          ].map((absatz, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: i === 0 ? "#222" : "#444",
                fontWeight: i === 0 ? 400 : 300,
                marginBottom: "1.5rem",
              }}
            >
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* Kurzprofil */}
      <section style={{ padding: "5rem 2rem", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
                  color: NAVY,
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                Kurzprofil
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                  fontWeight: 300,
                  color: NAVY,
                  letterSpacing: "-0.02em",
                }}
              >
                Oliver Markus Müller
              </h2>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  background: "#E0E0E0",
                  marginBottom: "2rem",
                }}
              >
                {[
                  { label: "Jahrgang", wert: "1976" },
                  { label: "Ausbildung", wert: "Systemischer Coach & Mediator" },
                  { label: "Berufserfahrung", wert: "25+ Jahre Digital & Marketing" },
                  { label: "Initiative", wert: "True Dads Deutschland (Gründer)" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "#F5F5F5", padding: "1.5rem" }}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", margin: "0 0 0.35rem" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "1.125rem", color: "#222", fontWeight: 400, margin: 0 }}>
                      {item.wert}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Berufliche Stationen
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {[
                  "Amazon Advertising",
                  "AOL / Yahoo!",
                  "WESER-KURIER Mediengruppe (Interim Manager)",
                  "iq digital media marketing GmbH",
                ].map((station) => (
                  <li key={station} style={{ fontSize: "1.125rem", color: "#444", display: "flex", gap: "0.75rem" }}>
                    <span style={{ color: NAVY, fontWeight: 600, flexShrink: 0 }}>—</span>
                    {station}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Bücher
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {buecher.map((b) => (
                  <li
                    key={b.titel}
                    style={{
                      fontSize: "1.125rem",
                      color: "#333",
                      padding: "0.6rem 0",
                      borderBottom: "1px solid #E0E0E0",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <span>{b.titel}</span>
                    <span style={{ fontSize: "1.25rem", color: "#999", flexShrink: 0 }}>{b.jahr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        style={{
          padding: "4rem 2rem",
          background: NAVY,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Du willst Dich austauschen?
        </h2>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>
          Schreib uns:{" "}
          <a
            href="mailto:truedads@onetitel.de"
            style={{ color: "#fff", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            truedads@onetitel.de
          </a>
        </p>
        <Link
          href="/initiativen/true-dads/kontakt"
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
          Zum Kontaktformular →
        </Link>
      </section>
    </>
  );
}
