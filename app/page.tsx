import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OneTitel – Sales, Consulting und Interim-Management",
  description:
    "Oliver M. Müller – Experte für Sales, Digital-Marketing, KI-Automatisierung und Interim-Management. Maßgeschneiderte Lösungen für nachhaltiges Wachstum.",
  openGraph: {
    title: "OneTitel – Sales, Consulting und Interim-Management",
    description:
      "Oliver M. Müller – Experte für Sales, Digital-Marketing, KI-Automatisierung und Interim-Management.",
    url: "https://www.onetitel.de",
  },
};

const services = [
  {
    title: "Coaching",
    description:
      "Als Coach unterstütze ich dabei, Ihre Ziele zu definieren, Hindernisse zu überwinden und Ihre persönliche und berufliche Performance zu steigern. Mit einem ganzheitlichen Ansatz begleite ich auf Ihrem Weg zum Erfolg.",
  },
  {
    title: "Interim-Management",
    description:
      "Interim Management bezeichnet den temporären Einsatz von Management-Kräften auf Zeit. Als externe, unabhängige Fachkraft übernehme ich für einen bestimmten Zeitraum Projekte oder fülle Lücken in Ihrer Organisation.",
  },
  {
    title: "Sales",
    description:
      "Maßgeschneiderte Lösungen helfen Ihnen, Ihre Verkaufsziele zu erreichen und Ihren Umsatz zu steigern. Durch innovative Strategien und bewährte Methoden maximieren wir Ihre Verkaufsergebnisse und optimieren Ihre Kundenbindung.",
  },
  {
    title: "Agiles Projekt-/Prozessmanagement",
    description:
      "Als erfahrene Product Owner verstehen wir die Bedürfnisse Ihres Unternehmens und setzen sie konsequent um. Mit agilen Methoden wie Scrum führen wir Ihre Projekte zum Erfolg.",
  },
  {
    title: "Consulting",
    description:
      "Entdecken Sie die transformative Kraft von Consulting mit OneTitel. Maßgeschneiderte Lösungen, um Ihre geschäftlichen Herausforderungen anzugehen und Ihren Erfolg zu maximieren.",
  },
  {
    title: "BAFA Beratungsförderung",
    description:
      "Förderung von Beratungskosten über die BAFA von bis zu 3.500 Euro. Bis 31. Dezember 2026 kann jedes förderfähige Unternehmen maximal fünf Beratungen gefördert bekommen.",
  },
];

const topics = [
  "Informationstechnologie",
  "Agentic AI / Automatisierung",
  "AI/KI Driven Sales-Optimization",
  "Consumer Electronic",
  "Retail und E-Commerce",
  "Programmatic Advertising",
  "Data-Driven Advertising",
  "Programmatic-Printing",
  "Social Selling",
  "Medien Monetarisierung",
  "Fachmedien",
  "Marketing-Automation",
  "B2B Leadgenerierung",
  "Dynamic Creatives (DCO)",
  "Datenstrategie",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "5rem 2rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/logo-symbol.webp"
          alt=""
          width={200}
          height={200}
          style={{
            position: "absolute",
            top: "2rem",
            right: "0",
            opacity: 0.10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <h1 className="display" style={{ marginBottom: "2.5rem", maxWidth: "900px" }}>
          Sales, Consulting
          <br />
          <span style={{ opacity: 0.35 }}>und Coaching</span>
          <br />
          mit OneTitel
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {/* Expertise card */}
          <div
            style={{
              background: "#EBEBEB",
              padding: "3rem",
              borderRadius: "2px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Expertise
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.65, opacity: 0.75, marginBottom: "2rem" }}>
              Als erfahrener Berater begleite ich Ihr Unternehmen auch durch anspruchsvolle
              Veränderungsprozesse und Krisen. Mit frischen Perspektiven und innovativen Lösungen
              helfe ich dabei, Lösungen und neue Wachstumschancen zu identifizieren.
            </p>
            <Link href="/kontakt" className="btn-outline">
              Kostenlose Beratung vereinbaren
            </Link>
          </div>

          {/* AI card */}
          <div
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              padding: "3rem",
              borderRadius: "2px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/hero-consulting.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", opacity: 0.15, mixBlendMode: "luminosity" }}
            />
            <h2
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                fontWeight: 300,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                color: "var(--bg)",
              }}
            >
              AI/KI Automatisierung
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.75, margin: 0 }}>
              Kompetenzen im Bereich Agentic AI sowie KI-basierter Vertriebsoptimierung mit Fokus
              auf Leadgenerierung und Funnel-Performance. Einsatz intelligenter Automatisierung,
              datengetriebener Analysen und KI-gestützter Entscheidungsprozesse zur Identifikation
              hochwertiger Zielkunden. Verbindung von fundierter Vertriebsexpertise mit modernen
              KI-Technologien zur Entwicklung skalierbarer, effizienter und messbarer
              Wachstumsstrategien.
            </p>
          </div>
        </div>
      </section>

      {/* Divider section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
              Beratung & Vertrieb
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--bg)",
                marginBottom: "1.5rem",
              }}
            >
              Interim-Management und Beratung für Sales und Digital-Marketing
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.65, opacity: 0.6, marginBottom: "2rem" }}>
              Herausragende Transformationen geschehen nicht von selbst — sie brauchen kompetente
              Impulse. Als Interim Manager bringe ich Erfahrung, Unparteilichkeit und eine
              Hands-on-Mentalität mit, die Ihre Organisation nach vorne bringt.
            </p>
            <Link href="/loesungen" className="btn-white">
              Mehr erfahren
            </Link>
          </div>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "rgba(242,240,235,0.1)",
              }}
            >
              {[
                { num: "15+", label: "Jahre Erfahrung" },
                { num: "3", label: "Kernbereiche" },
                { num: "BAFA", label: "Förderbar" },
                { num: "100%", label: "Hands-on" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "2rem",
                    background: "rgba(242,240,235,0.04)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 200,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                      color: "var(--bg)",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.5, letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image banner */}
      <section
        style={{
          position: "relative",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/hero-consulting.jpg"
          alt="Interim-Management und Beratung"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            padding: "0 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            <p
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              Interim-Management und Beratung
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "0.75rem",
            }}
          >
            Leistungen
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Unser Angebot
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, opacity: 0.65, margin: 0 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategie / Ausführung */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#EBEBEB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Strategie
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
              Unsere Strategie vereint fundierte Analyse, leidenschaftliches Engagement und
              praxisnahe Umsetzung. Durch Aneignung von Branchenkenntnissen entwickeln wir
              maßgeschneiderte Strategien, die perfekt auf Ihre Bedürfnisse abgestimmt sind.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Ausführung
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
              Wir sind nicht nur Theoretiker, sondern Praktiker mit einer ausgeprägten
              Hands-on-Mentalität. Als Experte bringe ich mich ein, packe mit an und setze Ideen in
              die Tat um. Diese praxisnahe Herangehensweise ermöglicht es, flexibel und effizient
              auf Veränderungen zu reagieren.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "2rem",
          }}
        >
          Themenfelder
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {topics.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.4rem 0.9rem",
                border: "1px solid var(--border)",
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                color: "var(--muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section
        style={{
          padding: "5rem 2rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2rem",
            }}
          >
            Kundenmeinungen
          </p>
          <blockquote
            style={{
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              lineHeight: 1.9,
              opacity: 0.75,
              margin: "0 0 2.5rem",
              fontWeight: 300,
            }}
          >
            „Oliver M. Müller war von September 2019 bis Mai 2020 als Interim-Manager Leitung
            Vermarktung Digital für unser Unternehmen tätig, hat proaktiv die Leitung der
            Vermarktung Digital übernommen und hat uns bei der Konzeptionierung eines geplanten
            Relaunches für das Medium WESER-KURIER unterstützt. […] Herr Müller hat in diesem
            Zeitraum die angestrebten Ziele erreicht, sehr viel positiv bewegt und somit maßgeblich
            zum weiteren Erfolg des Unternehmens beigetragen."
          </blockquote>
          <p style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "0.05em", margin: 0 }}>
            Tanja Bittner
          </p>
          <p style={{ fontSize: "0.75rem", opacity: 0.5, margin: "0.25rem 0 0" }}>
            Leiterin Vermarktung, WESER-KURIER Mediengruppe (BTAG)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Bereit für das
          <br />
          nächste Level?
        </h2>
        <p style={{ fontSize: "1.05rem", opacity: 0.6, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns gemeinsam
          herausfinden, wie OneTitel Ihrem Unternehmen helfen kann.
        </p>
        <Link href="/kontakt" className="btn-primary">
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
