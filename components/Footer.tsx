import Link from "next/link";
import Container from "@/components/ui/Container";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/loesungen", label: "Service" },
  { href: "/interim-management", label: "Interim-Management" },
  { href: "/initiativen", label: "Initiativen & Ventures" },
  { href: "/medienberichte", label: "Medienberichte" },
  { href: "/beitraege", label: "Beiträge" },
  { href: "/kontakt", label: "Kontakt" },
];

const PARTNER_LINKS = [
  { href: "/pflegealltag", label: "PflegeAlltag App" },
  { href: "/lehreralltag", label: "LehrerAlltag App" },
  { href: "https://www.eritaj.de", label: "Eritaj" },
  { href: "https://www.lersi.de", label: "Lersi" },
  { href: "https://www.vaeterstrategie.de", label: "Väterstrategie" },
  { href: "https://www.canadaeuentry.com", label: "Canada EU Entry" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-ink text-offwhite">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-sans text-lg font-light uppercase tracking-[0.2em]">OneTitel</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-offwhite/50">
            Sales. Consulting. Interim-Management
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/80">
            Oliver M. Müller
            <br />
            Am Bruchborn 6
            <br />
            54570 Kirchweiler
            <br />
            <a href="mailto:info@onetitel.de" className="hover:text-offwhite">
              info@onetitel.de
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-offwhite/60">Seiten</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-offwhite/85 hover:text-offwhite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-offwhite/60">Weitere Partner</p>
          <ul className="mt-4 space-y-2">
            {PARTNER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-offwhite/85 hover:text-offwhite"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-offwhite/60">Social</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/oliver-m-mueller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-offwhite/85 hover:text-offwhite"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-offwhite/85 hover:text-offwhite"
              >
                XING
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-offwhite/10 py-6">
        <Container className="flex flex-col gap-3 text-xs text-offwhite/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} OneTitel – Oliver M. Müller</p>
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="hover:text-offwhite">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-offwhite">
              Datenschutz
            </Link>
            <CookieSettingsButton />
          </div>
        </Container>
      </div>
    </footer>
  );
}
