import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "T-Shirt Trend – Print-on-Demand Merchandise Shop",
  description:
    "T-Shirt Trend ist ein Spreadshop-basierter Merchandise-Shop mit individuell gestalteten Print-on-Demand Produkten — europaweit geliefert, kein Mindestbestellwert.",
};

const sortiment = [
  {
    kategorie: "Männer",
    produkte: ["T-Shirts", "Pullover & Hoodies", "Langarmshirts", "Poloshirts", "Tank Tops", "Sportbekleidung", "Hosen & Shorts", "Jacken & Westen"],
  },
  {
    kategorie: "Frauen",
    produkte: ["T-Shirts", "Pullover & Hoodies", "Tops", "Poloshirts", "Langarmshirts", "Sportbekleidung"],
  },
  {
    kategorie: "Kinder & Babys",
    produkte: ["T-Shirts", "Hoodies", "Langarmshirts", "Baby-Produkte"],
  },
  {
    kategorie: "Accessoires",
    produkte: ["Caps & Mützen", "Taschen & Rucksäcke", "Tassen", "Sticker & Magnete", "Schürzen", "Buttons", "Kissen"],
  },
];

const highlights = [
  { label: "Individualisierbar", detail: "Eigene Designs auf Knopfdruck" },
  { label: "Print-on-Demand", detail: "Kein Mindestbestellwert" },
  { label: "Fulfillment", detail: "Via Spreadshirt" },
  { label: "Lieferung", detail: "Europaweit" },
];

export default function TshirtTrendPage() {
  return (
    <>
      {/* Hero — locker, hell */}
      <section
        style={{
          padding: "5rem 2rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/initiativen"
          style={{
            fontSize: "0.8rem",
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
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "1.25rem",
          }}
        >
          E-Commerce · Print-on-Demand
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
          }}
        >
          T-Shirt
          <br />
          Trend
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 300,
            opacity: 0.55,
            letterSpacing: "-0.01em",
            maxWidth: "600px",
            lineHeight: 1.4,
          }}
        >
          Dein Print-on-Demand Merchandise Shop
        </p>
      </section>

      {/* Highlights */}
      <section style={{ padding: "3rem 2rem", background: "var(--fg)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              background: "rgba(242,240,235,0.08)",
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                style={{ background: "rgba(242,240,235,0.03)", padding: "2rem" }}
              >
                <p style={{ fontSize: "0.75rem", opacity: 0.4, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", margin: "0 0 0.5rem" }}>
                  {h.label}
                </p>
                <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "var(--bg)", margin: 0 }}>
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ist T-Shirt Trend */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
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
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Der Shop
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 300,
                lineHeight: 1.65,
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}
            >
              T-Shirt Trend ist ein Spreadshop-basierter Merchandise-Shop mit individuell
              gestalteten Print-on-Demand Produkten. Kein Lager, kein Risiko — Produkte werden
              erst auf Bestellung gedruckt und direkt versendet.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, opacity: 0.6 }}>
              Fulfillment via Spreadshirt. Lieferung europaweit. Kein Mindestbestellwert.
            </p>
          </div>
        </div>
      </section>

      {/* Sortiment */}
      <section style={{ padding: "4rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2.5rem",
            }}
          >
            Sortiment
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "var(--border)",
            }}
          >
            {sortiment.map((kat) => (
              <div key={kat.kategorie} style={{ background: "#EBEBEB", padding: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    marginBottom: "1.25rem",
                  }}
                >
                  {kat.kategorie}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {kat.produkte.map((p) => (
                    <li
                      key={p}
                      style={{
                        fontSize: "0.83rem",
                        lineHeight: 1.9,
                        opacity: 0.65,
                        borderBottom: "1px solid var(--border)",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Jetzt shoppen
        </h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.6, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Entdecke individuelle Designs — Print-on-Demand, ohne Mindestbestellwert.
        </p>
        <a
          href="https://t-shirt-trend.myspreadshop.de"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Zum Shop →
        </a>
      </section>
    </>
  );
}
