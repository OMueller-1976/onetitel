"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/loesungen", label: "Service" },
  { href: "/initiativen", label: "Initiativen & Ventures" },
  { href: "/medienberichte", label: "Medienberichte" },
  { href: "/beitraege", label: "Beiträge" },
  { href: "/kontakt", label: "Kontakt" },
];

const externalLinks: { href: string; label: string }[] = [];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Social bar */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "0.375rem 2rem",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1.5rem",
        }}
      >
        <a
          href="https://www.linkedin.com/in/oliver-m-mueller/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          XING
        </a>
      </div>

      {/* Logo row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.25rem 2rem",
          position: "relative",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", textAlign: "center", display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
          <Image
            src="/images/logo-symbol.webp"
            alt=""
            width={36}
            height={36}
            style={{ opacity: 0.12, flexShrink: 0 }}
          />
          <div>
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--fg)",
              lineHeight: 1,
            }}
          >
            OneTitel
          </div>
          <div
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: "0.2rem",
              fontWeight: 400,
            }}
          >
            Sales. Consulting. Interim-Management
          </div>
          </div>
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            position: "absolute",
            right: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "4px",
            padding: "4px",
          }}
          className="mobile-menu-btn"
          aria-label="Menü"
        >
          <span style={{ width: 22, height: 1, background: "var(--fg)", display: "block" }} />
          <span style={{ width: 22, height: 1, background: "var(--fg)", display: "block" }} />
          <span style={{ width: 22, height: 1, background: "var(--fg)", display: "block" }} />
        </button>
      </div>

      {/* Nav links */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0",
          borderTop: "1px solid var(--border)",
          padding: "0.5rem 2rem",
        }}
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.375rem 1rem",
                fontSize: "0.75rem",
                fontWeight: active ? 500 : 400,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: active ? "var(--accent)" : "var(--fg)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        {externalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.375rem 1rem",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
