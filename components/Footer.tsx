import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        padding: "4rem 2rem 2rem",
        marginTop: "6rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(242,240,235,0.15)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 300,
                fontSize: "1.4rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              OneTitel
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: 0.5,
                marginBottom: "1.5rem",
              }}
            >
              Sales. Consulting. Interim-Management
            </div>
            <p style={{ fontSize: "1.25rem", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
              Oliver M. Müller<br />
              Am Bruchborn 6<br />
              54570 Kirchweiler<br />
              <a
                href="mailto:info@onetitel.de"
                style={{ color: "inherit", textDecoration: "none", opacity: 1 }}
              >
                info@onetitel.de
              </a>
            </p>
          </div>

          {/* Pages */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Seiten
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/", label: "Start" },
                { href: "/loesungen", label: "Service" },
                { href: "/medienberichte", label: "Medienberichte" },
                { href: "/beitraege", label: "Beiträge" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "1.25rem",
                      color: "inherit",
                      opacity: 0.7,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Weitere Partner
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "https://www.eritaj.de", label: "Eritaj" },
                { href: "https://www.lersi.de", label: "Lersi" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      fontSize: "1.25rem",
                      color: "inherit",
                      opacity: 0.7,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Social
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a
                  href="https://www.linkedin.com/in/oliver-m-mueller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.25rem", color: "inherit", opacity: 0.7, textDecoration: "none" }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.25rem", color: "inherit", opacity: 0.7, textDecoration: "none" }}
                >
                  XING
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", opacity: 0.4, margin: 0 }}>
            © {new Date().getFullYear()} OneTitel – Oliver M. Müller
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "/impressum", label: "Impressum" },
              { href: "/datenschutz", label: "Datenschutz" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.8rem",
                  color: "inherit",
                  opacity: 0.4,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
