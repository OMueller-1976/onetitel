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

export default function TrueDadsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Sub-Navigation */}
      <nav className="sticky top-[var(--header-h,120px)] z-40 border-t border-white/10 bg-td-navy">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 overflow-x-auto px-3 md:px-8">
          <div className="flex flex-nowrap items-center overflow-x-auto">
            {subLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "whitespace-nowrap border-b-2 px-4 py-3 text-[0.7rem] uppercase tracking-wider transition-colors " +
                    (active
                      ? "border-white font-semibold text-white"
                      : "border-transparent font-normal text-white/65 hover:text-white")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[0.72rem] uppercase tracking-wider text-white/60 hover:text-white"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[0.72rem] uppercase tracking-wider text-white/60 hover:text-white"
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
