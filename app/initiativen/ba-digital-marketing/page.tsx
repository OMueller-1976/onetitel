import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BA Digital Marketing – Business Angel für Digital Marketing und AdTech",
  description:
    "Business Angel für Digital Marketing und AdTech — 25 Jahre Erfahrung, 15 Jahre Programmatic Advertising. Unterstützung für Start-ups als Minderheitsgesellschafter.",
};

const DARK = "#2D2D2D";
const CREAM = "#FAFAFA";

const wasIchBiete = [
  {
    titel: "Als Generalist und Medienexperte",
    text: "Mit technologischem Basiswissen berate ich junge Unternehmen und Projekte, liefere lösungsorientierten Support und bringe mein Netzwerk ein.",
  },
  {
    titel: "Beteiligung als Minderheitsgesellschafter",
    text: "Einbringung als Minderheitsgesellschafter gegen Tagessatz — in der Gründungsphase oder laufenden Umsetzung. Klare, flexible Konditionen.",
  },
  {
    titel: "Entfesselt Euer Unternehmenspotenzial",
    text: "Business Angel bieten nicht nur finanzielle Unterstützung, sondern auch wertvolles Wissen, branchenspezifische Einblicke und Zugang zu einem breiten Netzwerk.",
  },
];

const expertise = [
  {
    nr: "01",
    titel: "Podcast Host",
    text: `Host im Corporate Podcast-Format "Hör mir doch mal zu... der MARKETING Podcast" mit unterschiedlichen Gast-Speakern zu Themen rund um Marketing, Online-Marketing und Hyperpersonalisierung.`,
  },
  {
    nr: "02",
    titel: "Buch-Autor",
    text: `Herausgeber der Buchreihe "Die Digitale Utopie", darunter "Wie Online-Marketing das Paradies auf Erden schafft". Als E-Book auch auf Amazon erhältlich.`,
  },
  {
    nr: "03",
    titel: "BVDW Mitgliedschaft",
    text: `Bis 2019 Mitglied in der Fokusgruppe "Programmatic Advertising" des BVDW e. V. und Mitwirkender am Leitfaden "Daten-Strategie" im Programmatic Advertising.`,
  },
];

const blogVorschau = [
  {
    titel: "Herausforderungen der Digitalisierung in Deutschland",
    teaser: "Eine der größten Herausforderungen der Digitalisierung in Deutschland ist der Ausbau der digitalen Infrastruktur — und die Frage, wer die Transformation wirklich vorantreibt.",
  },
  {
    titel: "Die Zukunft des Online-Marketings – Utopie oder Dystopie?",
    teaser: "Ethik und Transparenz im Online-Marketing: In einer idealen Zukunft würden sich Online-Marketing-Branche und Nutzerinteressen annähern. Aber wohin geht die Reise wirklich?",
  },
  {
    titel: "SEO-Zauberer und ihre Kristallkugel",
    teaser: "SEO versus SEA ist ein bisschen wie ein Katz-und-Maus-Spiel, bei dem SEO versucht, organischen Traffic zu generieren — mit Methoden, die sich ständig verschieben.",
  },
];

export default function BaHomePage() {
  return (
    <>
      {/* Hero — cremeweiß, zentriert */}
      <section
        style={{
          background: CREAM,
          padding: "7rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        <Link
          href="/initiativen"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.4,
            textDecoration: "none",
            color: "inherit",
            display: "inline-block",
            marginBottom: "3rem",
          }}
        >
          ← Initiativen &amp; Ventures
        </Link>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: DARK,
            maxWidth: "800px",
            margin: "0 auto 1.5rem",
          }}
        >
          Business Angel für
          <br />
          Digital Marketing und AdTech
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#777",
            letterSpacing: "0.04em",
          }}
        >
          — die Antriebskraft der Innovation —
        </p>
      </section>

      {/* Business Angel Engagement — 2-spaltig */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "480px" }}>
        {/* Linke Spalte — dunkel */}
        <div
          style={{
            background: DARK,
            color: "#fff",
            padding: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1.5rem",
              }}
            >
              Engagement
            </p>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}
            >
              Business Angel Digital Marketing Engagement
            </h2>
            {[
              `Ein Business Angel (BA) ist ein Experte, der Existenzgründer unterstützt. Für Start-ups ist es oftmals wichtig, einen erfahrenen Experten einzubinden, ob für mögliche Investoren oder zur Aneignung von Fachwissen.`,
              `Ich unterstütze im Bereich Digital-Marketing und bringe mich in Verrechnung eines Tagessatzes als Minderheitsgesellschafter ein, ob in der Gründungsphase oder laufenden Umsetzung.`,
              `Mit 25 Jahren Berufserfahrung, 15 Jahren im Bereich Digital-Marketing, darunter Advertising, Vermarktung, AdTech, Marketing-Automation, Tagging, Monetarisierung oder Data-Driven Advertising, unterstütze ich junge Unternehmen als Gesellschafter oder proaktiv und interimistisch.`,
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "1.25rem",
                  fontWeight: 300,
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <Link
            href="/initiativen/ba-digital-marketing/kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.8rem 1.75rem",
              background: "#fff",
              color: DARK,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              alignSelf: "flex-start",
              marginTop: "1.5rem",
            }}
          >
            Kontakt aufnehmen →
          </Link>
        </div>

        {/* Rechte Spalte — Bild */}
        <div style={{ position: "relative", minHeight: "400px" }}>
          <Image
            src="/images/hero-consulting.jpg"
            alt="Business Angel Consulting"
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </section>

      {/* Was ich biete — 3 Kacheln */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2.5rem",
            }}
          >
            Leistungen
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "#E0E0E0",
            }}
          >
            {wasIchBiete.map((item) => (
              <div key={item.titel} style={{ background: "#fff", padding: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: DARK,
                    letterSpacing: "-0.01em",
                    marginBottom: "1rem",
                    borderTop: `3px solid ${DARK}`,
                    paddingTop: "1.25rem",
                  }}
                >
                  {item.titel}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#555", margin: 0, fontWeight: 300 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise — dunkel */}
      <section style={{ padding: "5rem 2rem", background: DARK }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "2.5rem",
            }}
          >
            Expertise
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {expertise.map((item) => (
              <div
                key={item.nr}
                style={{ background: "rgba(255,255,255,0.03)", padding: "2.5rem" }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.nr}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    marginBottom: "1rem",
                  }}
                >
                  {item.titel}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0, fontWeight: 300 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Die Macht eines Business Angels */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: DARK,
              fontWeight: 600,
              opacity: 0.5,
              marginBottom: "2rem",
            }}
          >
            Business Angel
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              color: DARK,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            Die Macht eines Business Angels
          </h2>
          {[
            `Stellt Euch vor, Ihr habt einen erfahrenen Partner an Eurer Seite, der nicht nur die Spielregeln des Marktes versteht, sondern auch die Erfahrung und das Netzwerk hat, um Euer Unternehmen auf die Überholspur zu bringen. Das ist die Macht eines Business Angels.`,
            `Business Angels sind nicht einfach nur Geldgeber. Sie sind Mentoren, Strategen und Türöffner. Mit ihrem fundierten Wissen und ihren wertvollen Kontakten helfen sie Start-ups, die richtigen Entscheidungen zur richtigen Zeit zu treffen — und die häufigsten Fehler junger Unternehmen zu vermeiden.`,
            `Im Bereich Digital Marketing und AdTech bedeutet das konkret: Zugang zu erprobten Go-to-Market-Strategien, Einblicke in Programmatic-Ökosysteme, DSP-Strategien, Data-Driven Advertising und die richtigen Ansprechpartner bei Publishern, Agenturen und Vermarktern.`,
            `Ob in der Frühphase oder im Wachstum — ein Business Angel bringt das mit, was kein Investor allein kaufen kann: echte Erfahrung, gelebtes Scheitern und nachhaltigen Erfolg. Ich freue mich auf den Kontakt und die Zusendung eines Pitch-Decks!`,
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: i === 0 ? "#222" : "#555",
                fontWeight: i === 0 ? 400 : 300,
                marginBottom: "1.5rem",
              }}
            >
              {p}
            </p>
          ))}
          <Link
            href="/initiativen/ba-digital-marketing/kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 2rem",
              background: DARK,
              color: "#fff",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Pitch-Deck einsenden →
          </Link>
        </div>
      </section>

      {/* Blog-Vorschau */}
      <section style={{ padding: "5rem 2rem", background: CREAM }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: DARK,
                letterSpacing: "-0.02em",
              }}
            >
              Beiträge
            </h2>
            <Link
              href="/initiativen/ba-digital-marketing/blog"
              style={{ fontSize: "0.78rem", color: DARK, opacity: 0.5, textDecoration: "none", letterSpacing: "0.04em" }}
            >
              Alle Beiträge →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "#E0E0E0",
            }}
          >
            {blogVorschau.map((artikel) => (
              <div key={artikel.titel} style={{ background: CREAM, padding: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: DARK,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {artikel.titel}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    color: "#666",
                    marginBottom: "1.25rem",
                    fontWeight: 300,
                  }}
                >
                  {artikel.teaser}
                </p>
                <Link
                  href="/initiativen/ba-digital-marketing/blog"
                  style={{ fontSize: "0.78rem", color: DARK, fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em" }}
                >
                  Mehr lesen →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
