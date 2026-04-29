"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DARK = "#2D2D2D";

const subLinks = [
  { href: "/initiativen/ba-digital-marketing", label: "Start" },
  { href: "/initiativen/ba-digital-marketing/blog", label: "Blog" },
  { href: "/initiativen/ba-digital-marketing/kontakt", label: "Kontakt" },
];

export default function BaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <nav
        style={{
          background: DARK,
          position: "sticky",
          top: "var(--header-h, 120px)",
          zIndex: 40,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo + Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
            <Link
              href="/initiativen/ba-digital-marketing"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                paddingRight: "2rem",
                marginRight: "1rem",
                borderRight: "1px solid rgba(255,255,255,0.15)",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              Business Angel
              <br />
              <span style={{ opacity: 0.55, fontWeight: 300 }}>Digital-Marketing</span>
            </Link>
            {subLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.8rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: active ? 500 : 300,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: active ? "#fff" : "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    borderBottom: active ? "2px solid #fff" : "2px solid transparent",
                    transition: "color 0.15s",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/oliver-m-mueller/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.7rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            LinkedIn →
          </a>
        </div>
      </nav>

      {children}
    </>
  );
}
