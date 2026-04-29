import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Service – Lösungen",
  description:
    "Sales-Consulting, Digital-Marketing, Interim-Management und agiles Projektmanagement — maßgeschneiderte Lösungen für Ihr Unternehmen.",
};

const leistungen = [
  {
    title: "Sales und Sales-Consulting",
    description:
      "Wir bieten umfassende Unterstützung im Vertrieb und Sales-Consulting, um Ihre Verkaufsstrategien zu optimieren und Umsätze zu steigern. Unser Team analysiert Ihre Vertriebsprozesse, identifiziert Potenziale und entwickelt maßgeschneiderte Lösungen, die Ihre Verkaufsziele erreichen und übertreffen.",
  },
  {
    title: "Digital-Marketing Consulting",
    description:
      "In der digitalen Welt sind wir Ihr Partner für effektives Digital-Marketing. Wir entwickeln und implementieren Strategien, die Ihre Online-Präsenz stärken, Zielgruppen gezielt ansprechen und Ihre digitale Reichweite maximieren. Unsere Beratung umfasst SEO, Content-Marketing, Social Media und weitere digitale Kanäle.",
  },
  {
    title: "Interim-Management",
    description:
      "Bei personellen Engpässen oder in Übergangsphasen bieten wir Ihnen erfahrene Interim-Manager, die schnell und effizient Führungsaufgaben übernehmen. Unsere Experten bringen umfangreiche Erfahrung mit und sorgen dafür, dass Ihre Geschäftsprozesse reibungslos weiterlaufen.",
  },
  {
    title: "Zertifiziertes Systemisches Coaching",
    description:
      "Unsere Zertifizierung als systemische Coaches ermöglicht es uns, tiefere Einblicke in Ihre Organisationsstrukturen zu gewinnen und nachhaltige Veränderungen zu bewirken. Wir begleiten Sie bei der Entwicklung von Führungskräften, Teamentwicklung und der Implementierung von Change-Management-Prozessen.",
  },
];

const gründe = [
  "Eine Führungskraft verlässt das Unternehmen überraschend und es wird eine temporäre Lösung benötigt, bis eine geeignete Nachfolge gefunden wird.",
  "Es gibt ein spezifisches Projekt oder eine Initiative, die spezielle Fähigkeiten oder Erfahrungen erfordert, die intern nicht verfügbar sind.",
  "Bei großen Veränderungsprozessen oder Restrukturierungen kann ein Interim Manager mit spezifischer Erfahrung in diesen Bereichen wertvolle Unterstützung leisten.",
  "Bei finanziellen oder betrieblichen Krisen können Interim Manager aufgrund ihrer Erfahrung und Unparteilichkeit eine effektive Lösung sein.",
];

export default function LoesungenPage() {
  return (
    <>
      {/* Hero mit Stadtbild */}
      <section
        style={{
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/city-skyline.jpg"
          alt="Stadtbild"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 20%, var(--bg) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "5rem 2rem 3rem",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1rem",
            }}
          >
            Service
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}
          >
            Lösungen
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              opacity: 0.6,
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
              maxWidth: "600px",
            }}
          >
            Die richtigen Entscheidungen treffen.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.65, maxWidth: "680px" }}>
            Interim Manager haben in der Regel einen hohen Grad an Erfahrung und sind sofort
            einsatzbereit. Sie sind oft Experten in ihrem Fachgebiet und können schnell und effizient
            Ergebnisse liefern. Nach Beendigung ihres Einsatzes verlassen sie das Unternehmen wieder.
          </p>
        </div>
      </section>

      {/* Gründe */}
      <section style={{ padding: "4rem 2rem", background: "var(--fg)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2rem",
            }}
          >
            Wann macht Interim Management Sinn?
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {gründe.map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    opacity: 0.3,
                    fontWeight: 500,
                    flexShrink: 0,
                    paddingTop: "0.2rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "1rem", lineHeight: 1.65, opacity: 0.7, margin: 0 }}>
                  {g}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "1rem",
          }}
        >
          Unser Leistungsangebot
        </p>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >
          Drei zentrale Bereiche
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {leistungen.map((l) => (
            <div
              key={l.title}
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {l.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.65, margin: 0 }}>
                {l.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Agiles PM */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Agiles Projektmanagement
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}
              >
                Scrum Master
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
                Als erfahrene Scrum Master moderieren wir Ihre Scrum-Prozesse, beseitigen Hindernisse
                und fördern eine offene Kommunikation im Team. Unser Ziel ist es, ein effizientes
                und motiviertes Arbeitsumfeld zu schaffen.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}
              >
                Product Owner
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.7, margin: 0 }}>
                In der Rolle des Product Owners verantworten wir die Produktvision und das
                Backlog-Management. Wir priorisieren Anforderungen, sorgen für klare Zielsetzungen
                und stellen sicher, dass das Entwicklungsteam die Kundenanforderungen optimal umsetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Jetzt Beratung anfragen
        </h2>
        <Link href="/kontakt" className="btn-primary">
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
