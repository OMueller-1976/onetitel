import type { Metadata } from "next";
import KontaktForm from "@/components/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt – Kostenlose Erstberatung anfragen",
  description:
    "Kontaktieren Sie Oliver M. Müller für eine kostenlose Erstberatung zu Sales-Consulting, Interim-Management oder Digital-Marketing. BAFA-förderfähig.",
  alternates: { canonical: "https://www.onetitel.de/kontakt" },
  openGraph: {
    url: "https://www.onetitel.de/kontakt",
    title: "Kontakt – Kostenlose Erstberatung | OneTitel",
  },
};

export default function KontaktPage() {
  return (
    <>
      <section style={{ padding: "5rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
          }}
        >
          Kontakt
          <br />
          <span style={{ opacity: 0.3 }}>aufnehmen</span>
        </h1>
      </section>

      <section
        style={{
          padding: "0 2rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Form */}
        <div
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "3rem",
            borderRadius: "2px",
          }}
        >
          <KontaktForm />
        </div>

        {/* Contact info */}
        <div style={{ paddingTop: "1rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1.5rem",
            }}
          >
            Direkt erreichbar
          </p>
          <a
            href="mailto:info@onetitel.de"
            style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--fg)",
              textDecoration: "none",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            info@onetitel.de
          </a>

          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1rem",
            }}
          >
            Anschrift
          </p>
          <address
            style={{
              fontSize: "1.125rem",
              fontStyle: "normal",
              lineHeight: 1.8,
              opacity: 0.65,
            }}
          >
            Oliver M. Müller<br />
            Am Bruchborn 6<br />
            54570 Kirchweiler
          </address>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/oliver-m-mueller/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              XING
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
