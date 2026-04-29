import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – True Dads Deutschland",
  description:
    "Mission und Vision von True Dads Deutschland — für ein Rechtssystem, das soziale Väter und das Recht der Kinder auf beide Elternteile schützt.",
};

const NAVY = "#1B3A6B";

const vision = [
  {
    nr: "01",
    title: "Recht auf Bindung",
    text: "Ausweitung und Stärkung des § 1685 BGB, um sozialen Vätern ein verlässliches und durchsetzbares Umgangsrecht zu sichern.",
  },
  {
    nr: "02",
    title: "Verbindliche Leitlinien",
    text: "Entwicklung klarer, verbindlicher Vorgaben für Jugendämter im Umgang mit sozialen Vätern und Fällen gezielter Kontaktverweigerung.",
  },
  {
    nr: "03",
    title: "Kindeswohl zuerst",
    text: "Gezielte Elterliche Entfremdung muss gesetzlich als Kindeswohlgefährdung anerkannt und entsprechend geahndet werden.",
  },
  {
    nr: "04",
    title: "Gleichbehandlung",
    text: "Strukturelle Diskriminierung sozialer Väter in Gerichtsverfahren und Behördenentscheidungen muss systematisch beendet werden.",
  },
  {
    nr: "05",
    title: "Unterstützungsangebote",
    text: "Mehr öffentlich geförderte Beratungsstellen und Selbsthilfegruppen für betroffene Väter und deren Kinder.",
  },
];

export default function UeberUnsPage() {
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
            True Dads Deutschland · Über uns
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Das sind wir
          </h1>
        </div>
      </section>

      {/* Mission */}
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
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: NAVY,
            }}
          >
            Unsere Mission
          </h2>
          <div>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#333",
                marginBottom: "1.75rem",
              }}
            >
              In Deutschland verlieren jedes Jahr tausende Kinder den Kontakt zu ihrem sozialen
              Vater — nicht durch sein Versagen, sondern durch ein System, das gelebte
              Elternschaft nicht ausreichend schützt. Gerichte, Jugendämter und Gesetze spiegeln
              noch immer ein überholtes Bild von Familie wider, das biologische Abstammung über
              gelebte Fürsorge stellt.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#555",
                marginBottom: "1.75rem",
              }}
            >
              True Dads Deutschland ist aus der persönlichen Betroffenheit entstanden. Wir
              kennen die Ohnmacht, die Bürokratie und den Schmerz — und wir wissen, dass wir
              damit nicht allein sind. Deshalb machen wir das Schweigen sichtbar und schaffen
              einen Raum für Fakten, Recht und Solidarität.
            </p>

            {/* Ziel-Box */}
            <div
              style={{
                background: "#FFFFFF",
                borderLeft: `4px solid ${NAVY}`,
                padding: "1.75rem 2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: NAVY,
                  marginBottom: "0.75rem",
                }}
              >
                Unser Ziel
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "#333", margin: 0, fontStyle: "italic" }}>
                „Eine Gesellschaft und ein Rechtssystem, das gelebte Verantwortung, Fürsorge und
                kontinuierliche Elternschaft als gleichwertig zu biologischen Verbindungen
                anerkennt — und die Diskriminierung sozialer Väter beendet."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: NAVY,
              marginBottom: "2.5rem",
            }}
          >
            Unsere Vision — 5 Forderungen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {vision.map((v) => (
              <div
                key={v.nr}
                style={{
                  background: "#fff",
                  borderLeft: `4px solid ${NAVY}`,
                  padding: "2rem 2.5rem",
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr 3fr",
                  gap: "1.5rem",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: NAVY,
                    letterSpacing: "0.08em",
                  }}
                >
                  {v.nr}
                </span>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "#555", margin: 0 }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "4rem 2rem",
          background: NAVY,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "2rem",
            lineHeight: 1.65,
          }}
        >
          Gemeinsam können wir das System verändern.
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
          Petition unterzeichnen →
        </a>
      </section>
    </>
  );
}
