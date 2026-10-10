import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Sales, Consulting & Interim-Management",
  description:
    "OneTitel – Oliver M. Müller bietet Sales-Consulting, Interim-Management, Digital-Marketing und KI-Automatisierung. BAFA-förderbar. Kostenlose Erstberatung anfragen.",
  alternates: { canonical: "https://www.onetitel.de" },
  openGraph: {
    url: "https://www.onetitel.de",
    title: "OneTitel – Sales, Consulting & Interim-Management",
    description:
      "Oliver M. Müller: Sales-Consulting, Interim-Management und Digital-Marketing. BAFA-förderbar.",
  },
};

const services = [
  {
    title: "Sales — operativ im Tagesgeschäft",
    description:
      "Ich berate nicht nur, sondern übernehme operative Vertriebsverantwortung im Tagesgeschäft — von der Ansprache bis zum Abschluss. Durch bewährte Methoden und Hands-on-Umsetzung maximieren wir Ihre Verkaufsergebnisse und optimieren Ihre Kundenbindung nachhaltig.",
    bafa: false,
  },
  {
    title: "Interim-Management",
    description:
      "Interim Management bezeichnet den temporären Einsatz von Management-Kräften auf Zeit. Als externe, unabhängige Fachkraft übernehme ich für einen bestimmten Zeitraum Projekte oder fülle Lücken in Ihrer Organisation.",
    bafa: false,
  },
  {
    title: "Coaching",
    description:
      "Als Coach unterstütze ich dabei, Ihre Ziele zu definieren, Hindernisse zu überwinden und Ihre persönliche und berufliche Performance zu steigern. Mit einem ganzheitlichen Ansatz begleite ich auf Ihrem Weg zum Erfolg.",
    bafa: false,
  },
  {
    title: "Agiles Projekt-/Prozessmanagement",
    description:
      "Als erfahrene Product Owner verstehen wir die Bedürfnisse Ihres Unternehmens und setzen sie konsequent um. Mit agilen Methoden wie Scrum führen wir Ihre Projekte zum Erfolg.",
    bafa: false,
  },
  {
    title: "Consulting",
    description:
      "Entdecken Sie die transformative Kraft von Consulting mit OneTitel. Maßgeschneiderte Lösungen, um Ihre geschäftlichen Herausforderungen anzugehen und Ihren Erfolg zu maximieren.",
    bafa: false,
  },
  {
    title: "BAFA Beratungsförderung",
    description:
      "Förderung von Beratungskosten über die BAFA von bis zu 3.500 Euro. Bis 31. Dezember 2026 kann jedes förderfähige Unternehmen maximal fünf Beratungen gefördert bekommen.",
    bafa: true,
  },
  {
    title: "Forschungszulage (F&E-Zertifizierung)",
    description:
      "Für ein KI-gestütztes Projekt wurde OneTitel die Forschungszulage-Bescheinigung (BSFZ) nach dem Forschungszulagengesetz erteilt — die unabhängige, vom Bund beauftragte Prüfstelle bestätigt damit förderfähige Forschung und Entwicklung.",
    bafa: false,
  },
];

const stats = [
  { num: "20+", label: "Jahre Erfahrung" },
  { num: "€8 Mio.", label: "P&L-Verantwortung" },
  { num: "3", label: "Kernbereiche" },
  { num: "BAFA", label: "Förderbar" },
  { num: "100%", label: "Hands-on" },
];

const topics = [
  "Informationstechnologie",
  "Agentic AI / Automatisierung",
  "AI/KI Driven Sales-Optimization",
  "Consumer Electronic",
  "Retail und E-Commerce",
  "Programmatic Advertising",
  "Data-Driven Advertising",
  "Programmatic-Printing",
  "Social Selling",
  "Medien Monetarisierung",
  "Fachmedien",
  "Marketing-Automation",
  "B2B Leadgenerierung",
  "Dynamic Creatives (DCO)",
  "Datenstrategie",
];

const referenzLogos = ["Amazon", "Weser Kurier", "Rundschau", "iq digital", "OD Marketing", "AOL/Yahoo!", "BVDW"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-offwhite">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-accent" />
        <Container className="relative py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            Sales-Consulting &amp; Interim-Management
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Sales, Consulting und Coaching mit OneTitel
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-graphite">
            Als erfahrener Berater begleite ich Ihr Unternehmen durch anspruchsvolle
            Veränderungsprozesse — inklusive operativer Vertriebstätigkeit im Tagesgeschäft, nicht
            nur Strategie auf dem Papier. Mit frischen Perspektiven und innovativen Lösungen helfe
            ich dabei, neue Wachstumschancen zu identifizieren.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/kontakt">Kostenlose Beratung vereinbaren</PrimaryButton>
            <SecondaryButton href="/loesungen">Unsere Leistungen</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* EXPERTISE / AI */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-border bg-offwhite p-10">
              <h2 className="font-serif text-2xl font-bold text-ink md:text-3xl">Expertise</h2>
              <p className="mt-4 text-lg leading-relaxed text-graphite">
                Als erfahrener Berater begleite ich Ihr Unternehmen auch durch anspruchsvolle
                Veränderungsprozesse und Krisen. Mit frischen Perspektiven und innovativen
                Lösungen helfe ich dabei, Lösungen und neue Wachstumschancen zu identifizieren.
              </p>
              <div className="mt-6">
                <PrimaryButton href="/kontakt">Kostenlose Beratung vereinbaren</PrimaryButton>
              </div>
            </div>
            <div className="bg-ink p-10 text-offwhite">
              <h2 className="font-serif text-2xl font-bold md:text-3xl">AI/KI Automatisierung</h2>
              <p className="mt-4 text-lg leading-relaxed text-offwhite/75">
                Kompetenzen im Bereich Agentic AI sowie KI-basierter Vertriebsoptimierung mit
                Fokus auf Leadgenerierung und Funnel-Performance. Einsatz intelligenter
                Automatisierung, datengetriebener Analysen und KI-gestützter
                Entscheidungsprozesse zur Identifikation hochwertiger Zielkunden.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ERFOLG / REFERENZEN */}
      <section className="grid min-h-[420px] overflow-hidden sm:grid-cols-2">
        <div className="relative min-h-[260px]">
          <Image src="/images/consulting-photo.jpg" alt="Expertise" fill className="object-cover grayscale" />
        </div>
        <div className="flex flex-col justify-center bg-ink p-10 text-offwhite md:p-14">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Erfolg</h2>
          <p className="mt-4 text-lg leading-relaxed text-offwhite/75">
            Als proaktiver und ausgewiesener Experte im Vertrieb und für digitales Marketing
            biete ich meine Expertise sowie Erfahrungen aus unterschiedlichen Branchen. Diese
            Expertise bringe ich ebenfalls im Bereich Existenzgründung und Start-ups ein.
          </p>
          <Link
            href="/medienberichte"
            className="mt-6 inline-flex w-fit items-center justify-center rounded-sm border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Referenzen
          </Link>
        </div>
      </section>

      {/* INTERIM-MANAGEMENT / STATS */}
      <section className="bg-ink py-16 text-offwhite md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent">Beratung &amp; Vertrieb</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl">
                Interim-Management und Beratung für Sales und Digital-Marketing
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-offwhite/70">
                Herausragende Transformationen geschehen nicht von selbst — sie brauchen
                kompetente Impulse. Als Interim Manager bringe ich Erfahrung, Unparteilichkeit
                und eine Hands-on-Mentalität mit, die Ihre Organisation nach vorne bringt.
              </p>
              <Link
                href="/loesungen"
                className="mt-7 inline-flex w-fit items-center justify-center rounded-sm border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
              >
                Mehr erfahren
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 bg-white/[0.04] p-6">
                  <div className="font-serif text-2xl font-bold tracking-tight text-accent sm:text-3xl break-words">
                    {stat.num}
                  </div>
                  <div className="mt-2 text-xs tracking-wide text-offwhite/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Leistungen" title="Unser Angebot" />
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex h-full flex-col bg-offwhite p-8">
                {s.bafa && (
                  <Image
                    src="/images/bafa-logo.png"
                    alt="BAFA"
                    width={110}
                    height={62}
                    className="mb-3 opacity-70"
                  />
                )}
                <h3 className="font-serif text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THEMENFELDER */}
      <section className="relative overflow-hidden bg-ink py-16 text-offwhite md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 md:block">
          <Image src="/images/city-skyline.jpg" alt="" fill className="object-cover opacity-30" />
        </div>
        <Container className="relative">
          <SectionHeading eyebrow="Fachgebiete" title="Themenfelder" light />
          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {topics.map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg text-offwhite/80">
                <span className="text-accent">·</span> {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* STRATEGIE / AUSFÜHRUNG */}
      <section className="border-y border-border py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">Strategie</h3>
              <p className="mt-3 text-lg leading-relaxed text-graphite">
                Unsere Strategie vereint fundierte Analyse, leidenschaftliches Engagement und
                praxisnahe Umsetzung. Durch Aneignung von Branchenkenntnissen entwickeln wir
                maßgeschneiderte Strategien, die perfekt auf Ihre Bedürfnisse abgestimmt sind.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">Ausführung</h3>
              <p className="mt-3 text-lg leading-relaxed text-graphite">
                Wir sind nicht nur Theoretiker, sondern Praktiker mit einer ausgeprägten
                Hands-on-Mentalität. Als Experte bringe ich mich ein, packe mit an und setze
                Ideen in die Tat um. Diese praxisnahe Herangehensweise ermöglicht es, flexibel
                und effizient auf Veränderungen zu reagieren.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* KUNDEN-LOGOS */}
      <section className="overflow-hidden border-b border-border py-14">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-accent">
          Kunden &amp; Referenzen
        </p>
        <div className="mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16">
            {[...Array(2)].map((_, i) =>
              referenzLogos.map((logo) => (
                <span
                  key={logo + i}
                  className="shrink-0 whitespace-nowrap text-xl font-semibold uppercase tracking-wide text-graphite/50"
                >
                  {logo}
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-b border-border py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Kundenmeinungen</p>
          <blockquote className="mt-6 text-lg italic leading-relaxed text-graphite">
            „Oliver M. Müller war von September 2019 bis Mai 2020 als Interim-Manager Leitung
            Vermarktung Digital für unser Unternehmen tätig, hat proaktiv die Leitung der
            Vermarktung Digital übernommen und hat uns bei der Konzeptionierung eines geplanten
            Relaunches für das Medium WESER-KURIER unterstützt. […] Herr Müller hat in diesem
            Zeitraum die angestrebten Ziele erreicht, sehr viel positiv bewegt und somit
            maßgeblich zum weiteren Erfolg des Unternehmens beigetragen."
          </blockquote>
          <p className="mt-6 text-lg font-semibold tracking-wide text-ink">Tanja Bittner</p>
          <p className="mt-1 text-sm text-graphite/70">
            Leiterin Vermarktung, WESER-KURIER Mediengruppe (BTAG)
          </p>
        </Container>
      </section>

      <CtaBanner
        headline="Bereit für das nächste Level?"
        body="Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns gemeinsam herausfinden, wie OneTitel Ihrem Unternehmen helfen kann."
        primary={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
      />
    </>
  );
}
