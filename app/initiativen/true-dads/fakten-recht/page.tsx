import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Fakten & Recht – True Dads Deutschland",
  description:
    "Rechtlicher Überblick zum Umgangsrecht, Statistiken zu Sorgerecht und Entfremdung sowie Definitionen zentraler Begriffe des Familienrechts.",
};

const stats = [
  { zahl: "15.168", label: "Sorgerechtsfälle vor Familiengerichten", detail: "Deutschland 2024" },
  { zahl: "7.395", label: "Vollständige Sorgerechtsentzüge", detail: "Deutschland 2024" },
  { zahl: "7.773", label: "Teilweise Sorgerechtsentzüge", detail: "Deutschland 2024" },
  { zahl: "10%", label: "Aller Trennungsfälle als hochkonflikthaft eingestuft", detail: "Schätzung Fachverbände" },
  { zahl: "~5%", label: "Wechselmodell-Umsetzung", detail: "Deutschland gesamt" },
];

const definitionen = [
  {
    titel: "Bindung",
    text: `Bindung bezeichnet in der Entwicklungspsychologie (nach Bowlby/Ainsworth) die tiefe, dauerhafte emotionale Verbindung zwischen einem Kind und seinen primären Bezugspersonen. Diese Bindung ist entscheidend für die psychische Gesundheit, das Selbstwertgefühl und die Beziehungsfähigkeit des Kindes im späteren Leben. Sie entsteht durch kontinuierliche Fürsorge, Verlässlichkeit und emotionale Responsivität — unabhängig von biologischer Abstammung.`,
  },
  {
    titel: "Kindeswohl",
    text: `Der unbestimmte Rechtsbegriff "Kindeswohl" (§§ 1626, 1671 BGB) umfasst alle Aspekte der körperlichen, geistigen und seelischen Entwicklung des Kindes. Die Rechtsprechung konkretisiert ihn durch Faktoren wie: Kontinuität der Bindungen, Erziehungsfähigkeit der Eltern, Wille des Kindes (ab ca. 14 Jahren bindend) sowie die Förderung des Umgangs mit dem jeweils anderen Elternteil.`,
  },
  {
    titel: "Kindeswohlgefährdung",
    text: `§ 1666 BGB definiert eine Kindeswohlgefährdung als eine gegenwärtige, erhebliche Gefahr für das körperliche, geistige oder seelische Wohl des Kindes. Gezielte Elterliche Entfremdung (PAS/PA) wird von führenden Bindungsforschern und einem wachsenden Teil der Rechtsprechung als seelische Kindeswohlgefährdung eingestuft — auch wenn dies gesetzlich noch nicht explizit kodifiziert ist.`,
  },
];

const ueberblick = [
  `Das deutsche Familienrecht unterscheidet zwischen dem biologischen Elternteil und dem sozialen Elternteil. Während leibliche Eltern durch §§ 1684 und 1685 BGB klare Rechte und Pflichten bezüglich des Umgangs haben, stehen soziale Väter — also Männer, die ein Kind über Jahre hinweg tatsächlich erzogen und betreut haben — rechtlich auf deutlich schwächerem Boden.`,
  `§ 1685 BGB gewährt engen Bezugspersonen zwar ein Umgangsrecht, knüpft dies jedoch an die Voraussetzung, dass der Umgang dem Kindeswohl dient. Diese Formulierung gibt Gerichten erheblichen Ermessensspielraum — und führt in der Praxis häufig dazu, dass der Kontakt des sozialen Vaters zum Kind trotz langer gemeinsamer Geschichte unterbrochen wird.`,
  `Das Europäische Menschenrechtsgericht (EGMR) hat in der Entscheidung Kuppinger ./. Deutschland (2015) die Bundesrepublik wegen der Verletzung von Art. 8 EMRK (Recht auf Achtung des Familienlebens) gerügt. Familienbehörden und Gerichte müssen demnach effektiver handeln, wenn ein Elternteil den Umgang systematisch verhindert.`,
  `Trotz dieser Rechtsprechung bleibt die Durchsetzung von Umgangsrechten in der Praxis schwierig. Zwangsmittel gegen den betreuenden Elternteil werden von Gerichten selten und zurückhaltend eingesetzt — mit dem Argument, Zwang zum Schutz des Kindes zu vermeiden, obwohl der anhaltende Kontaktabbruch selbst eine Gefährdung darstellt.`,
];

const praxisprobleme = [
  `In der gerichtlichen Praxis zeigt sich ein grundlegendes Problem: Auch wenn der Anspruch auf Umgang rechtlich anerkannt ist, scheitert seine Durchsetzung oft an der mangelnden Bereitschaft der Behörden, konsequent zu handeln. Jugendämter agieren häufig defensiv und stützen den Elternteil, der faktisch die Kontrolle über den Umgang ausübt.`,
  `Die Entscheidung des EGMR im Fall Kuppinger ./. Deutschland (Az. 26062/07) aus dem Jahr 2015 hat Deutschlands Umgangsrechtspraxis international kritisiert. Das Gericht stellte fest, dass Deutschland durch untätiges Abwarten trotz klarer Umgangsbeschlüsse das Recht auf Familienleben verletzt hatte.`,
  `True Dads Deutschland fordert daher klare Handlungspflichten für Jugendämter, verbindliche Fristen für Gerichtsverfahren und niedrigschwelligen Zugang zu Mediation — damit betroffene Väter nicht jahrelang warten müssen, bis ihr Kind sie wieder kennt.`,
];

export default function FaktenRechtPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-td-navy px-8 py-16 text-white">
        <Container>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            True Dads Deutschland · Fakten &amp; Recht
          </p>
          <h1 className="text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Fakten und Recht
          </h1>
        </Container>
      </section>

      {/* Umgangsrecht Überblick */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-td-navy">
            Umgangsrecht — Überblick
          </p>

          {ueberblick.map((absatz, i) => (
            <p key={i} className="mb-6 text-xl font-light leading-relaxed text-[#444]">
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* Statistiken */}
      <section className="bg-td-navy py-20">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-light tracking-tight text-white md:text-4xl">
            Fakten &amp; Zahlen
          </h2>
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.zahl} className="bg-white/[0.04] p-8 text-center">
                <div className="mb-3 text-3xl font-extralight leading-none tracking-tight text-white md:text-5xl">
                  {s.zahl}
                </div>
                <p className="mb-1 text-lg leading-snug text-white/70">{s.label}</p>
                <p className="text-xs tracking-wide text-white/35">{s.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Definitionen */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-3xl font-light tracking-tight text-td-navy md:text-4xl">
            Zentrale Begriffe
          </h2>
          <div className="flex flex-col gap-6">
            {definitionen.map((d) => (
              <div key={d.titel} className="border-l-4 border-td-navy bg-white px-10 py-8">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-td-navy">
                  {d.titel}
                </h3>
                <p className="text-lg font-light leading-relaxed text-[#444]">{d.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Praxisprobleme */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h2 className="mb-6 text-2xl font-light tracking-tight text-td-navy md:text-3xl">
            Strukturelle Hürden in der Praxis
          </h2>
          {praxisprobleme.map((absatz, i) => (
            <p key={i} className="mb-5 text-xl font-light leading-relaxed text-[#444]">
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-td-navy px-8 py-16 text-center">
        <h2 className="mb-5 text-3xl font-light tracking-tight text-white md:text-4xl">
          Das Ziel von True Dads
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-xl leading-relaxed text-white/65">
          Ein Rechtssystem, das gelebte Elternschaft schützt. Jede Unterschrift bringt uns näher.
        </p>
        <Link
          href="/initiativen/true-dads/kontakt"
          className="mr-4 inline-flex items-center border border-white/50 px-8 py-3 text-sm uppercase tracking-wider text-white"
        >
          Kontakt aufnehmen
        </Link>
        <Link
          href="/initiativen/true-dads/leitfaden"
          className="inline-flex items-center border border-white/40 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white"
        >
          Zum Leitfaden
        </Link>
      </section>
    </>
  );
}
