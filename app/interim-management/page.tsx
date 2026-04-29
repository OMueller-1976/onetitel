import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interim Management – Was ist das? Definition, Vorteile & Einsatzgebiete",
  description:
    "Interim Management einfach erklärt: Definition, Aufgaben, Vorteile und typische Einsatzgebiete. Wann lohnt sich ein Interim Manager? Jetzt informieren.",
  alternates: { canonical: "https://www.onetitel.de/interim-management" },
  openGraph: {
    url: "https://www.onetitel.de/interim-management",
    title: "Interim Management – Definition, Vorteile & Einsatzgebiete | OneTitel",
    description:
      "Was ist Interim Management? Alles über Definition, Aufgaben, Kosten und Einsatzgebiete. Oliver M. Müller – erfahrener Interim Manager.",
  },
};

const DARK = "#0A0A0A";
const GRAY = "#EBEBEB";
const ACCENT = "#2D5A3D";

const einsatzfelder = [
  {
    nr: "01",
    titel: "Führungsvakanz",
    text: "Eine Schlüsselposition wird plötzlich frei — durch Kündigung, Krankheit oder unerwarteten Weggang. Ein Interim Manager überbrückt die Lücke sofort.",
  },
  {
    nr: "02",
    titel: "Restrukturierung",
    text: "Tiefgreifende Veränderungsprozesse brauchen erfahrene Führung ohne interne politische Abhängigkeiten. Interim Manager agieren unparteiisch.",
  },
  {
    nr: "03",
    titel: "Wachstumsphasen",
    text: "Beim Markteintritt, Expansion oder starkem Wachstum fehlt oft das spezifische Know-how intern. Interim Manager bringen Erfahrung aus vergleichbaren Situationen mit.",
  },
  {
    nr: "04",
    titel: "Digitale Transformation",
    text: "Die Einführung neuer Technologien, CRM-Systeme oder digitaler Vermarktungsstrukturen erfordert spezialisiertes Transformations-Know-how.",
  },
  {
    nr: "05",
    titel: "Projektleitung",
    text: "Für klar definierte Projekte mit Laufzeit und messbaren Zielen bietet Interim Management eine saubere, kosteneffiziente Lösung.",
  },
  {
    nr: "06",
    titel: "Krisenmanagement",
    text: "In wirtschaftlichen oder operativen Krisen sind erfahrene Interim Manager mit Krisenerfahrung oft der entscheidende Faktor für die Stabilisierung.",
  },
];

const vorteile = [
  {
    titel: "Geschwindigkeit",
    text: "Interim Manager sind innerhalb weniger Tage einsatzbereit. Keine langen Recruiting-Prozesse, kein Onboarding über Monate — sofortiger Impact.",
  },
  {
    titel: "Expertise auf Zeit",
    text: "Sie bekommen Senior-Level-Kompetenz mit nachgewiesener Erfolgsbilanz, ohne langfristige Personalkosten. Bezahlt wird nur die tatsächliche Einsatzzeit.",
  },
  {
    titel: "Unabhängigkeit",
    text: "Als externe Kraft ist der Interim Manager frei von internen Seilschaften, politischen Rücksichten und persönlichen Karriereinteressen — das ermöglicht objektive Entscheidungen.",
  },
];

const vergleich = [
  { kriterium: "Rolle", interim: "Operative Führung", beratung: "Strategische Beratung" },
  { kriterium: "Verantwortung", interim: "Volle Linienfunktion", beratung: "Empfehlung, kein Mandat" },
  { kriterium: "Umsetzung", interim: "Selbst", beratung: "Übergabe an Kunden" },
  { kriterium: "Verweildauer", interim: "6–18 Monate", beratung: "Projektbezogen" },
  { kriterium: "Integration", interim: "Teil des Teams", beratung: "Externer Dienstleister" },
  { kriterium: "Kosten", interim: "Tagessatz", beratung: "Projektpauschale / Tagessatz" },
];

export default function InterimManagementPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "6rem 2rem 5rem", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1.5rem",
            }}
          >
            Wissensseite
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "2rem",
            }}
          >
            Was ist Interim Management?
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              opacity: 0.6,
              maxWidth: "680px",
            }}
          >
            Die temporäre Besetzung von Führungspositionen durch erfahrene externe Experten —
            flexibel, schnell und ergebnisorientiert.
          </p>
        </div>
      </section>

      {/* Definition — 2-spaltig */}
      <section style={{ padding: "5rem 2rem", background: "#fff", borderTop: "1px solid #E0E0E0" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
              Definition: Interim Management
            </h2>
            {[
              `Interim Management bezeichnet den zeitlich befristeten Einsatz externer Führungskräfte oder Spezialisten in Unternehmen. Im Gegensatz zu klassischen Unternehmensberatern übernehmen Interim Manager nicht nur strategische Empfehlungen, sondern tragen operative Verantwortung und setzen Maßnahmen direkt um.`,
              `Der Begriff stammt aus dem Englischen ('interim' = vorübergehend, überbrückend) und hat sich seit den 1970er Jahren — zunächst in den Niederlanden und Großbritannien — als eigenständige Managementdisziplin etabliert.`,
              `In Deutschland ist Interim Management heute eine anerkannte und stark wachsende Branche. Laut dem DDIM (Dachgesellschaft Deutsches Interim Management) werden jährlich mehrere Tausend Interim Manager eingesetzt.`,
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

          {/* Fakten-Box */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "#D0D0D0",
            }}
          >
            {[
              { zahl: "Ø 6–18 Monate", label: "Typische Einsatzdauer" },
              { zahl: "Sofort", label: "Verfügbarkeit ab Vertragsschluss" },
              { zahl: "BAFA", label: "Beratungskosten teilweise förderbar" },
              { zahl: "100%", label: "Operative Verantwortung" },
            ].map((item) => (
              <div
                key={item.label}
                style={{ background: GRAY, padding: "2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 200,
                    letterSpacing: "-0.03em",
                    color: DARK,
                    marginBottom: "0.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {item.zahl}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.4 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wann sinnvoll — dunkel, 6 Kacheln */}
      <section style={{ padding: "5rem 2rem", background: DARK, color: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
              color: "#fff",
            }}
          >
            Wann macht Interim Management Sinn?
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

      {/* Vorteile — grauer Hintergrund, 3 Kacheln */}
      <section style={{ padding: "5rem 2rem", background: GRAY }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}
          >
            Vorteile von Interim Management
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "#D0D0D0",
            }}
          >
            {vorteile.map((v) => (
              <div key={v.titel} style={{ background: GRAY, padding: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: DARK,
                    marginBottom: "1rem",
                    borderTop: `3px solid ${DARK}`,
                    paddingTop: "1.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.titel}
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
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergleich — weiß, Tabelle */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Interim Management vs. Unternehmensberatung
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #0A0A0A" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 1rem 0.75rem 0",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                  }}
                >
                  Kriterium
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: DARK,
                  }}
                >
                  Interim Management
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 0 0.75rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                  }}
                >
                  Unternehmensberatung
                </th>
              </tr>
            </thead>
            <tbody>
              {vergleich.map((row, i) => (
                <tr
                  key={row.kriterium}
                  style={{ borderBottom: "1px solid #E0E0E0", background: i % 2 === 0 ? "#F9F9F9" : "#fff" }}
                >
                  <td
                    style={{
                      padding: "1rem 1rem 1rem 0",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#666",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {row.kriterium}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      fontSize: "1.125rem",
                      color: DARK,
                      fontWeight: 400,
                    }}
                  >
                    {row.interim}
                  </td>
                  <td
                    style={{
                      padding: "1rem 0 1rem 1rem",
                      fontSize: "1.125rem",
                      color: "#666",
                      fontWeight: 300,
                    }}
                  >
                    {row.beratung}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Kosten & BAFA — dunkel */}
      <section style={{ padding: "5rem 2rem", background: DARK, color: "#F5F5F5" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              color: "#fff",
            }}
          >
            Was kostet Interim Management?
          </h2>
          {[
            `Interim Manager werden in der Regel auf Basis eines Tagessatzes vergütet, der je nach Branche, Hierarchieebene und Spezialisierung zwischen 800 und 2.500 Euro liegt. Hinzu kommen ggf. Reisekosten und Spesen.`,
            `Wichtig: Für Beratungsleistungen im Rahmen eines Interim-Mandats kann eine Förderung über die BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle) beantragt werden — bis zu 3.500 Euro pro Beratung, maximal 5 Beratungen bis Ende 2026.`,
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.7)",
                fontWeight: 300,
                marginBottom: "1.25rem",
              }}
            >
              {p}
            </p>
          ))}
          <div
            style={{
              borderLeft: `4px solid ${ACCENT}`,
              paddingLeft: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 400,
                margin: 0,
              }}
            >
              <strong style={{ color: "#fff" }}>BAFA-Förderung:</strong> Förderfähige Unternehmen
              können Beratungskosten zu 50% (bis 3.500 €) gefördert bekommen. OneTitel unterstützt
              Sie beim Antrag.
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Was ist Interim Management? Definition, Vorteile & Einsatzgebiete",
            author: {
              "@type": "Person",
              name: "Oliver M. Müller",
              url: "https://www.onetitel.de",
            },
            publisher: {
              "@type": "Organization",
              name: "OneTitel",
              url: "https://www.onetitel.de",
            },
            datePublished: "2026-04-29",
            url: "https://www.onetitel.de/interim-management",
            description:
              "Interim Management einfach erklärt: Definition, Aufgaben, Vorteile und Einsatzgebiete.",
          }),
        }}
      />

      {/* Über den Autor / CTA */}
      <section style={{ padding: "5rem 2rem", background: GRAY }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Oliver M. Müller — Ihr Interim Manager
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#444",
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            Mit über 15 Jahren Erfahrung in Sales, Digital-Marketing und Unternehmensberatung
            steht Oliver M. Müller als erfahrener Interim Manager zur Verfügung. Sein Schwerpunkt
            liegt auf Sales-Exzellenz, digitaler Vermarktung und KI-gestützter Wachstumsstrategie.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/kontakt" className="btn-primary">
              Kostenlose Erstberatung anfragen
            </Link>
            <Link
              href="/interim-management-sales-digital"
              style={{
                fontSize: "0.875rem",
                color: DARK,
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Interim Management für Sales & Digitalvermarktung →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
