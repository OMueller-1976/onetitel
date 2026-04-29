import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Initiativen & Ventures – ERITAJ, Lersi, True Dads, BA Digital Marketing",
  description:
    "Initiativen und Ventures von Oliver M. Müller: ERITAJ (Erbrecht), Lersi App, ONEmatic, ADHASI, True Dads Deutschland und BA Digital Marketing.",
  alternates: { canonical: "https://www.onetitel.de/initiativen" },
  openGraph: {
    url: "https://www.onetitel.de/initiativen",
    title: "Initiativen & Ventures | OneTitel",
  },
};

const initiativen = [
  {
    href: "/initiativen/true-dads",
    title: "True Dads Deutschland",
    description: "Unabhängige Initiative für Väterrechte und Umgangsrecht in Deutschland.",
  },
  {
    href: "/initiativen/ba-digital-marketing",
    title: "BA Digital Marketing",
    description: "Business Angel und Beratung im Bereich Digital-Marketing und Performance.",
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
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            opacity: 0.55,
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          Gesellschaftliche Initiativen und unternehmerische Projekte im Entstehen.
        </p>
      </section>

      {/* Two-column card layout */}
      <section style={{ padding: "1rem 2rem 6rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — Initiativen */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "2px solid #0A0A0A",
              }}
            >
              Initiativen
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {initiativen.map((item) => (
                <div
                  key={item.href}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    padding: "2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.75rem",
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      opacity: 0.6,
                      margin: 0,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <Link href={item.href} className="btn-outline">
                    Mehr erfahren
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Ventures */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "2px solid #0A0A0A",
              }}
            >
              Ventures
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ventures.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#FFFFFF",
                    border: "1px solid #E0E0E0",
                    borderRadius: "6px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                    padding: "1.25rem 1.5rem",
                    textDecoration: "none",
                    transition: "box-shadow 0.15s, border-color 0.15s",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        color: "var(--fg)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.5, color: "var(--fg)" }}>
                      {item.description}
                    </div>
                  </div>
                  <span style={{ fontSize: "1.2rem", opacity: 0.35, flexShrink: 0, marginLeft: "1rem" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
