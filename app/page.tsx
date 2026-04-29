import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "Sales, Consulting & Interim-Management",
  description:
    "OneTitel – Oliver M. Müller bietet Sales-Consulting, Interim-Management, Digital-Marketing und KI-Automatisierung. BAFA-förderbar. Kostenlose Erstberatung anfragen.",
  alternates: { canonical: "https://www.onetitel.de" },
  openGraph: {
    url: "https://www.onetitel.de",
    title: "OneTitel – Sales, Consulting & Interim-Management",
    description:
      "Oliver M. Müller: Sales-Consulting, Interim-Management und Digital-Marketing. BAFA-förderbar.",
  },
};

const services = [
  {
    title: "Coaching",
    description:
      "Als Coach unterstütze ich dabei, Ihre Ziele zu definieren, Hindernisse zu überwinden und Ihre persönliche und berufliche Performance zu steigern. Mit einem ganzheitlichen Ansatz begleite ich auf Ihrem Weg zum Erfolg.",
    bafa: false,
  },
  {
    title: "Interim-Management",
    description:
      "Interim Management bezeichnet den temporären Einsatz von Management-Kräften auf Zeit. Als externe, unabhängige Fachkraft übernehme ich für einen bestimmten Zeitraum Projekte oder fülle Lücken in Ihrer Organisation.",
    bafa: false,
  },
  {
    title: "Sales",
    description:
      "Maßgeschneiderte Lösungen helfen Ihnen, Ihre Verkaufsziele zu erreichen und Ihren Umsatz zu steigern. Durch innovative Strategien und bewährte Methoden maximieren wir Ihre Verkaufsergebnisse und optimieren Ihre Kundenbindung.",
    bafa: false,
  },
  {
    title: "Agiles Projekt-/Prozessmanagement",
    description:
      "Als erfahrene Product Owner verstehen wir die Bedürfnisse Ihres Unternehmens und setzen sie konsequent um. Mit agilen Methoden wie Scrum führen wir Ihre Projekte zum Erfolg.",
    bafa: false,
  },
  {
    title: "Consulting",
    description:
      "Entdecken Sie die transformative Kraft von Consulting mit OneTitel. Maßgeschneiderte Lösungen, um Ihre geschäftlichen Herausforderungen anzugehen und Ihren Erfolg zu maximieren.",
    bafa: false,
  },
  {
    title: "BAFA Beratungsförderung",
    description:
      "Förderung von Beratungskosten über die BAFA von bis zu 3.500 Euro. Bis 31. Dezember 2026 kann jedes förderfähige Unternehmen maximal fünf Beratungen gefördert bekommen.",
    bafa: true,
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

const referenzLogos = [
  "Amazon",
  "Weser Kurier",
  "Rundschau",
  "iq digital",
  "OD Marketing",
  "AOL/Yahoo!",
  "BVDW",
];

export default function Home() {
  return (
    <>
      <ScrollRevealProvider />

      {/* Hero */}
      <section
        style={{
          padding: "5rem 2rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
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
            gridTemplateColumns: "1fr auto 1fr",
            gap: "2rem",
            marginTop: "3rem",
            alignItems: "stretch",
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
            <p style={{ fontSize: "1.2rem", lineHeight: 1.65, opacity: 0.75, marginBottom: "2rem" }}>
              Als erfahrener Berater begleite ich Ihr Unternehmen auch durch anspruchsvolle
              Veränderungsprozesse und Krisen. Mit frischen Perspektiven und innovativen Lösungen
              helfe ich dabei, Lösungen und neue Wachstumschancen zu identifizieren.
            </p>
            <Link href="/kontakt" className="btn-outline">
              Kostenlose Beratung vereinbaren
            </Link>
          </div>

          {/* Animated down-arrow */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#E0E0E0",
              borderRadius: "12px",
              width: "72px",
            }}
          >
            <span
              className="animate-bounce-down"
              style={{ fontSize: "3rem", opacity: 0.4, lineHeight: 1 }}
            >
              ↓
            </span>
          </div>

          {/* AI card */}
          <div
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              padding: "3rem",
              borderRadius: "2px",
            }}
          >
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
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.75, margin: 0 }}>
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

      {/* Erfolg / Referenzen — 2-spaltig */}
      <section
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: "420px",
          overflow: "hidden",
        }}
      >
        {/* Linke Spalte: Consulting-Foto */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/consulting-photo.jpg"
            alt="Expertise"
            fill
            style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          />
        </div>

        {/* Rechte Spalte: Erfolg-Card */}
        <div
          style={{
            background: "#0A0A0A",
            color: "#F5F5F5",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Erfolg
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, opacity: 0.75, marginBottom: "2rem" }}>
            Als proaktiver und ausgewiesener Experte im Vertrieb und für digitales Marketing
            biete ich meine Expertise sowie Erfahrungen aus unterschiedlichen Branchen.
            Diese Expertise bringe ich ebenfalls im Bereich Existenzgründung und Start-ups ein.
          </p>
          <Link href="/medienberichte" className="btn-white" style={{ alignSelf: "flex-start" }}>
            Referenzen
          </Link>
        </div>
      </section>

      {/* Divider section */}
      <section
        className="reveal reveal-delay-1"
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
                fontSize: "0.75rem",
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
            <p style={{ fontSize: "1.2rem", lineHeight: 1.65, opacity: 0.6, marginBottom: "2rem" }}>
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
                  <div style={{ fontSize: "0.8rem", opacity: 0.5, letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="reveal"
        style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
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
              {s.bafa && (
                <Image
                  src="/images/bafa-logo.png"
                  alt="BAFA"
                  width={120}
                  height={67}
                  style={{ marginBottom: "0.75rem", opacity: 0.6 }}
                />
              )}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.65, opacity: 0.65, margin: 0 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Themenfelder — dunkel mit Starburst + Stadtfoto */}
      <section
        className="reveal reveal-delay-1"
        style={{
          background: "#0A0A0A",
          color: "#F5F5F5",
          padding: "5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Stadtfoto oben rechts */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "200px",
          }}
        >
          <Image
            src="/images/city-skyline.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.4 }}
          />
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Themenfelder
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {topics.map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: "1.125rem",
                    opacity: 0.75,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ opacity: 0.4 }}>·</span> {t}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Strategie / Ausführung */}
      <section
        className="reveal"
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
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
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
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
              Wir sind nicht nur Theoretiker, sondern Praktiker mit einer ausgeprägten
              Hands-on-Mentalität. Als Experte bringe ich mich ein, packe mit an und setze Ideen in
              die Tat um. Diese praxisnahe Herangehensweise ermöglicht es, flexibel und effizient
              auf Veränderungen zu reagieren.
            </p>
          </div>
        </div>
      </section>

      {/* Kunden-Logos Marquee */}
      <section
        style={{
          padding: "4rem 0",
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "2rem",
          }}
        >
          Kunden &amp; Referenzen
        </p>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="animate-marquee"
            style={{
              display: "flex",
              gap: "4rem",
              width: "max-content",
              alignItems: "center",
            }}
          >
            {[...Array(2)].map((_, i) =>
              referenzLogos.map((logo) => (
                <span
                  key={logo + i}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    opacity: 0.35,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    flexShrink: 0,
                  }}
                >
                  {logo}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="reveal reveal-delay-2"
        style={{
          padding: "5rem 2rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
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
          <p style={{ fontSize: "1.25rem", fontWeight: 500, letterSpacing: "0.05em", margin: 0 }}>
            Tanja Bittner
          </p>
          <p style={{ fontSize: "0.875rem", opacity: 0.5, margin: "0.25rem 0 0" }}>
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
        <p style={{ fontSize: "1.2rem", opacity: 0.6, marginBottom: "2.5rem", lineHeight: 1.7 }}>
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
