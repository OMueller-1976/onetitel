"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/loesungen", label: "Service" },
  { href: "/interim-management", label: "Interim-Management" },
  { href: "/initiativen", label: "Initiativen & Ventures" },
  { href: "/medienberichte", label: "Medienberichte" },
  { href: "/beitraege", label: "Beiträge" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between gap-4 px-6 md:px-8">
        <Link href="/" className="flex shrink-0 flex-col leading-tight">
          <span className="font-sans text-xl font-light uppercase tracking-[0.25em] text-ink">
            OneTitel
          </span>
          <span className="text-[0.6rem] font-normal uppercase tracking-[0.15em] text-graphite">
            Sales. Consulting. Interim-Management
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[13px] font-medium transition-colors hover:text-ink ${
                  active ? "text-accent" : "text-graphite"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-accent px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Kostenlose Erstberatung
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex items-center justify-center rounded-sm border border-ink/20 p-2 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#0A0A0A" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-offwhite lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-base font-medium text-ink" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Kostenlose Erstberatung
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
