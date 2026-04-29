"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subLinks = [
  { href: "/initiativen/true-dads", label: "Start" },
  { href: "/initiativen/true-dads/ueber-uns", label: "Über uns" },
  { href: "/initiativen/true-dads/situation", label: "Situation" },
  { href: "/initiativen/true-dads/fakten-recht", label: "Fakten & Recht" },
  { href: "/initiativen/true-dads/leitfaden", label: "Leitfaden" },
  { href: "/initiativen/true-dads/kontakt", label: "Kontakt" },
];

const NAVY = "#1B3A6B";

export default function TrueDadsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Petition Banner */}
      <div
        style={{
          background: NAVY,
          color: "#fff",
          textAlign: "center",
          padding: "0.6rem 1.5rem",
          fontSize: "0.82rem",
          letterSpacing: "0.02em",
          lineHeight: 1.5,
        }}
      >
        Bitte unterstützt unsere Petition mit einer virtuellen Unterschrift —{" "}
        <a
          href="https://omm-default.wixsite.com/true-dads"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Jetzt unterschreiben →
        </a>
      </div>

      {/* Sub-Navigation */}
      <nav
        style={{
          background: NAVY,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "sticky",
          top: "var(--header-h, 120px)",
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(0.5rem, 3vw, 2rem)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            overflowX: "auto",
            alignItems: "center",
          }}
        >
          {/* Nav links */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {subLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.7rem 1rem",
                    fontSize: "0.7rem",
                    fontWeight: active ? 600 : 400,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: active ? "#fff" : "rgba(255,255,255,0.65)",
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

          {/* Social icons (placeholder) */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
            >
              FB
            </a>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
}
