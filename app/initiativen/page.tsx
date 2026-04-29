import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Initiativen & Ventures – OneTitel",
  description:
    "Initiativen und digitale Eigenentwicklungen von Oliver M. Müller — von Väterrechten über Programmatic Advertising bis zur Kinder-Lern-App.",
};

const initiativen = [
  {
    href: "/initiativen/true-dads",
    title: "True Dads Deutschland",
    description: "Unabhängige Initiative für Väterrechte und Umgangsrecht",
  },
  {
    href: "/initiativen/ba-digital-marketing",
    title: "BA Digital Marketing",
    description: "Business Angel und Beratung im Digital-Marketing",
  },
];

const ventures = [
  {
    href: "/initiativen/eritaj",
    title: "ERITAJ",
    description: "Erbrecht & Nachlassplanung",
  },
  {
    href: "/initiativen/onematic",
    title: "ONEmatic",
    description: "Programmatic Advertising Platform",
  },
  {
    href: "/initiativen/lersi",
    title: "Lersi App",
    description: "Lern-App für Kinder & Eltern",
  },
  {
    href: "/initiativen/adhasi",
    title: "ADHASI App",
    description: "App für Menschen mit ADHS",
  },
  {
    href: "/initiativen/tshirt-trend",
    title: "T-Shirt Trend Shop",
    description: "Print-on-Demand Merchandise",
  },
];

export default function InitiativenPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "1rem",
          }}
        >
          Ventures &amp; Initiativen
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
          Initiativen &amp;
          <br />
          <span style={{ opacity: 0.35 }}>Ventures</span>
        </h1>
      </section>

      {/* Two-column grid */}
      <section style={{ padding: "1rem 2rem 6rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            alignItems: "start",
          }}
        >
          {/* LEFT — Initiativen */}
          <div style={{ background: "var(--bg)", padding: "3rem" }}>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "2rem",
              }}
            >
              Initiativen
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {initiativen.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    padding: "2.5rem",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        color: "var(--bg)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h2>
                    <span style={{ fontSize: "1.2rem", opacity: 0.4, flexShrink: 0 }}>→</span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      lineHeight: 1.7,
                      opacity: 0.55,
                      margin: 0,
                      color: "var(--bg)",
                    }}
                  >
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — Ventures */}
          <div style={{ background: "var(--bg)", padding: "3rem" }}>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "2rem",
              }}
            >
              Ventures
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {ventures.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    background: "#EBEBEB",
                    border: "1px solid var(--border)",
                    padding: "1.75rem 2rem",
                    textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: "var(--fg)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <span style={{ fontSize: "1.2rem", opacity: 0.35, flexShrink: 0 }}>→</span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      opacity: 0.5,
                      margin: 0,
                      color: "var(--fg)",
                    }}
                  >
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
