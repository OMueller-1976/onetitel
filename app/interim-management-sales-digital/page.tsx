import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Interim Management Sales & Digitale Vermarktung – Experte Oliver M. Müller",
  description:
    "Interim Manager für Sales und digitale Vermarktung: Vertriebsaufbau, Programmatic Advertising, KI-Automatisierung und Go-to-Market. BAFA-förderbar. Jetzt anfragen.",
  alternates: {
    canonical: "https://www.onetitel.de/interim-management-sales-digital",
  },
  openGraph: {
    url: "https://www.onetitel.de/interim-management-sales-digital",
    title: "Interim Management Sales & Digitale Vermarktung | OneTitel",
    description:
      "Ihr Interim Manager für Sales-Exzellenz und digitale Vermarktung. 15+ Jahre Erfahrung. BAFA-förderbar.",
  },
};

const DARK = "#0A0A0A";
const GRAY = "#FFFFFF";
const ACCENT = "#2D5A3D";

const einsatzfelder = [
  {
    nr: "01",
    titel: "Vertriebsaufbau & -optimierung",
    text: "Aufbau oder Restrukturierung von Vertriebsteams, Entwicklung von Sales-Playbooks, Einführung von CRM-Systemen und Optimierung der gesamten Sales-Pipeline.",
  },
  {
    nr: "02",
    titel: "Programmatic Advertising & Adtech",
    text: "Aufbau und Steuerung programmatischer Vermarktungsstrukturen, DSP-Anbindung, Data-Driven Targeting und Brand-Safety-Strategien. BVDW Fokusgruppen-Mitglied bis 2019.",
  },
  {
    nr: "03",
    titel: "KI-gestützte Sales-Optimierung",
    text: "Einsatz von Agentic AI und KI-Tools zur Leadgenerierung, Funnel-Optimierung und automatisierten Kundenansprache — skalierbar und messbar.",
  },
  {
    nr: "04",
    titel: "Go-to-Market Strategie",
    text: "Markteinführung neuer Produkte und digitaler Geschäftsmodelle: von der Zielgruppendefinition über Pricing bis zur Channel-Strategie.",
  },
  {
    nr: "05",
    titel: "Digital-Marketing-Strukturen",
    text: "Aufbau von Marketing-Automation, Content-Strategien, SEA/SEO-Strukturen und datengetriebener Kampagnensteuerung für nachhaltiges Wachstum.",
  },
  {
    nr: "06",
    titel: "Team-Führung & Coaching",
    text: "Führung und Entwicklung bestehender Sales- und Marketing-Teams, Change-Management bei digitaler Transformation und Kulturentwicklung.",
  },
];

const faqs = [
  {
    frage: "Was macht ein Interim Manager für Sales und Digitalvermarktung?",
    antwort:
      "Er übernimmt temporär operative Führungsverantwortung im Vertrieb oder digitalen Marketing. Er baut Strukturen auf, optimiert Prozesse und setzt Wachstumsstrategien direkt um — nicht als Berater, sondern als Teil des Teams mit Linienfunktion.",
  },
  {
    frage: "Wie schnell ist ein Interim Manager verfügbar?",
    antwort:
      "In der Regel innerhalb von 1–2 Wochen — deutlich schneller als ein klassischer Recruiting-Prozess. Das macht Interim Management besonders wertvoll in zeitkritischen Situationen.",
  },
  {
    frage: "Ist Interim Management über BAFA förderbar?",
    antwort:
      "Ja. Beratungsleistungen können über die BAFA gefördert werden — bis zu 3.500 Euro pro Beratung, maximal 5 Förderungen bis Ende 2026. OneTitel unterstützt beim Förderantrag.",
  },
];

export default function InterimManagementSalesDigitalPage() {
  return (
    <>
      {/* Hero — dunkel mit city-skyline */}
      <section
        style={{
          background: DARK,
          color: "#FFFFFF",
          padding: "7rem 2rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <Image
            src="/images/city-skyline.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.15 }}
            priority
          />
        </div>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
            }}
          >
            Interim Management · Spezialisierung
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "2rem",
            }}
          >
            Interim Management für Sales & Digitale Vermarktung
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "680px",
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            Temporäre Senior-Führung für Vertrieb, Digital-Marketing und KI-gestützte
            Wachstumsstrategien — einsatzbereit innerhalb weniger Tage.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 2rem",
                background: "#fff",
                color: DARK,
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Jetzt Erstgespräch vereinbaren
            </Link>
            <Link
              href="/interim-management"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              ← Was ist Interim Management?
            </Link>
          </div>
        </div>
      </section>

      {/* Leistungsprofil — weiß, 2-spaltig */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Das Leistungsprofil
            </h2>
            {[
              `Im Bereich Sales und digitale Vermarktung gibt es besonders häufig Situationen, in denen externe, erfahrene Führung gefragt ist: Märkte verändern sich schnell, Technologien entwickeln sich rasant, und gleichzeitig fehlt es intern oft an der Kombination aus strategischem Denken und operativer Umsetzungsstärke.`,
              `Als Interim Manager für Sales und Digitalvermarktung bringe ich nicht nur Konzepte mit — ich übernehme Verantwortung, führe Teams, verhandle mit Partnern und setze Maßnahmen direkt um. Mit 15+ Jahren Erfahrung aus Verlagen, Tech-Unternehmen und Digitalagenturen.`,
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "#444",
                  fontWeight: 300,
                  marginBottom: "1.25rem",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Referenz-Stationen */}
          <div
            style={{
              background: GRAY,
              padding: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "1.25rem",
              }}
            >
              Referenzkunden & Stationen
            </p>
            {[
              "WESER-KURIER Mediengruppe — Interim Manager Leitung Vermarktung Digital",
              "iq digital — Key Account Manager, Digital-Vermarktung",
              "AOL/Yahoo! — Digital Advertising",
              "Amazon Advertising",
              "OD Marketing",
            ].map((station, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ color: "#aaa", fontSize: "1rem", flexShrink: 0 }}>·</span>
                <span style={{ fontSize: "1.125rem", color: "#444", fontWeight: 300, lineHeight: 1.5 }}>
                  {station}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzfelder — dunkel, 6 Kacheln */}
      <section style={{ padding: "5rem 2rem", background: DARK }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "3rem",
            }}
          >
            Einsatzfelder im Überblick
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            {einsatzfelder.map((item) => (
              <div
                key={item.nr}
                style={{ background: "rgba(255,255,255,0.03)", padding: "2.5rem" }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {item.nr}
                </span>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.titel}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referenz Weser-Kurier — grauer Hintergrund */}
      <section style={{ padding: "5rem 2rem", background: GRAY }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Referenz: WESER-KURIER Mediengruppe
          </h2>
          <blockquote
            style={{
              borderLeft: `4px solid ${DARK}`,
              paddingLeft: "2rem",
              margin: 0,
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontStyle: "italic",
                lineHeight: 1.8,
                color: "#333",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              „Oliver M. Müller war von September 2019 bis Mai 2020 als Interim-Manager Leitung
              Vermarktung Digital tätig. Er hat die angestrebten Ziele erreicht, sehr viel positiv
              bewegt und somit maßgeblich zum weiteren Erfolg des Unternehmens beigetragen. Alle
              übertragenen Aufgaben wurden mit großer Sorgfalt und zu unserer vollsten Zufriedenheit
              erledigt."
            </p>
            <cite style={{ fontSize: "1rem", fontStyle: "normal", fontWeight: 500, color: DARK }}>
              — Tanja Bittner, Leiterin Vermarktung, WESER-KURIER Mediengruppe (BTAG)
            </cite>
          </blockquote>
        </div>
      </section>

      {/* FAQ — weiß */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Häufig gestellte Fragen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E0E0E0" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#fff", padding: "2rem 2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: DARK,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {faq.frage}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.75,
                    color: "#555",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {faq.antwort}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.frage,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.antwort,
              },
            })),
          }),
        }}
      />

      {/* CTA — dunkel */}
      <section
        style={{
          padding: "6rem 2rem",
          background: DARK,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "1.25rem",
            }}
          >
            Gemeinsam Wachstum gestalten
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            Vereinbaren Sie ein kostenloses Erstgespräch — ich freue mich darauf, Ihre Situation
            kennenzulernen und zu besprechen, wie ich Ihr Unternehmen voranbringen kann.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 2rem",
                background: "#fff",
                color: DARK,
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Kostenlose Erstberatung anfragen
            </Link>
            <Link
              href="/loesungen"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 2rem",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.875rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Mehr über OneTitel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
