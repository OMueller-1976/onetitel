import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import VaeterstrategieCard from "./VaeterstrategieCard";

export const metadata: Metadata = {
  title: "True Dads Deutschland – Väter bleiben Väter!",
  description:
    "True Dads Deutschland setzt sich für das Recht des Kindes auf seinen sozialen Vater ein — unabhängig, überparteilich, faktenbasiert.",
};

const paragraphen = [
  {
    para: "§ 1684 BGB",
    text: "Garantiert das Recht des Kindes auf Umgang mit jedem Elternteil — und die Pflicht jedes Elternteils zum Umgang.",
  },
  {
    para: "§ 1626 Abs. 3 BGB",
    text: "Umgang mit beiden Elternteilen gehört zum Kindeswohl. Das Gesetz schützt diese Bindung ausdrücklich.",
  },
  {
    para: "§ 1685 BGB",
    text: "Umgangsrecht für enge Bezugspersonen — schützt auch soziale Eltern, die nicht biologisch verwandt sind.",
  },
];

const stats = [
  { zahl: "20%", label: "Kinder erleben Entfremdung vom Vater", quelle: "pairfam-Studie" },
  { zahl: "1 von 5", label: "Kinder in 10 Jahren Kontaktabbruch zum Vater", quelle: "Langzeitstudie" },
  { zahl: "15.168", label: "Sorgerechtsfälle vor Familiengerichten (2024)", quelle: "Statistisches Bundesamt" },
  { zahl: "<5%", label: "Wechselmodell-Umsetzung in Deutschland", quelle: "BMJV" },
];

const hintergruende = [
  {
    nr: "01",
    title: "Prävalenz in Deutschland",
    text: "Laut der pairfam-Langzeitstudie verlieren rund 20 % der Kinder den regelmäßigen Kontakt zu ihrem Vater — verglichen mit 9 % zur Mutter.",
  },
  {
    nr: "02",
    title: "Psychologische Ursachen",
    text: "Narzisstische Züge, Gatekeeping und Triangulation sind häufige Mechanismen, durch die ein Elternteil gezielt den Kontakt zum anderen verhindert.",
  },
  {
    nr: "03",
    title: "Wirkung auf Kinder",
    text: "Betroffene Kinder zeigen erhöhte Raten von Ängsten, Depressionen und Bindungsstörungen — mit langfristigen Folgen bis ins Erwachsenenalter.",
  },
  {
    nr: "04",
    title: "Forschungslage",
    text: "Führende Bindungsforscher bezeichnen gezielte Elterliche Entfremdung als eine Form der psychologischen Kindesmisshandlung.",
  },
];

export default function TrueDadsHomePage() {
  return (
    <>
      {/* Hero — navy */}
      <section className="bg-td-navy px-5 py-16 text-white md:py-24">
        <Container>
          <Link
            href="/initiativen"
            className="mb-10 inline-block text-sm uppercase tracking-widest text-white/45"
          >
            ← Initiativen &amp; Ventures
          </Link>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
            Initiative · Väterrechte
          </p>
          <h1 className="mb-5 text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            True Dads Deutschland
          </h1>
          <p className="mb-6 text-xl font-semibold tracking-tight text-white md:text-2xl">
            Väter bleiben Väter!
          </p>
          <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-xl">
            Eine unabhängige, überparteiliche Initiative, die das Bewusstsein für die Bedeutung
            sozial-familiärer Väter stärken, ihre rechtliche Stellung ausbauen und
            Diskriminierung im Umgangsrecht abbauen will.
          </p>
          <Link
            href="/initiativen/true-dads/kontakt"
            className="inline-flex items-center border-2 border-white/50 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            Kontakt aufnehmen
          </Link>
        </Container>
      </section>

      {/* Section 2 — Die Initiative */}
      <section className="bg-white py-20">
        <Container className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-light tracking-tight text-td-navy md:text-4xl">
            Die Initiative
          </h2>
          <div>
            <p className="mb-6 text-lg font-light leading-relaxed text-[#333]">
              In Deutschland verlieren jedes Jahr tausende Kinder den Kontakt zu ihrem sozialen
              Vater — nicht, weil er sie im Stich lässt, sondern weil Gesetze, Behörden und
              Gerichte ihre Bindung nicht ausreichend schützen.
            </p>
            <p className="text-lg leading-relaxed text-[#555]">
              True Dads Deutschland setzt sich dafür ein, dass soziale Väter rechtlich gestärkt,
              in ihrem Engagement unterstützt und in ihrer Rolle sichtbar wertgeschätzt werden.
              Das Kindeswohl steht dabei immer im Mittelpunkt — denn ein Kind braucht beide
              Elternteile.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 3 — Rechtlicher Rahmen */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-3xl font-light tracking-tight text-td-navy md:text-4xl">
            Der rechtliche Rahmen
          </h2>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paragraphen.map((p) => (
              <div key={p.para} className="border-l-4 border-td-navy bg-white py-8 pl-7 pr-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-td-navy">
                  {p.para}
                </p>
                <p className="text-lg leading-relaxed text-[#444]">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Zitat OLG Karlsruhe */}
          <div className="border-l-4 border-td-navy bg-white px-10 py-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-td-navy">
              OLG Karlsruhe, 12.07.2013 · Az. 16 UF 138/13
            </p>
            <blockquote className="text-xl font-light italic leading-relaxed text-[#333]">
              „Der Kontaktabbruch zu einer sozial engen Bezugsperson kann für das Kind eine
              erhebliche seelische Belastung darstellen, die dem Kindeswohl widerspricht."
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Section 4 — Statistiken */}
      <section className="bg-td-navy py-20">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-light tracking-tight text-white md:text-4xl">
            Zahlen &amp; Fakten
          </h2>
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.zahl} className="bg-white/[0.04] px-6 py-10 text-center">
                <div className="mb-3 text-4xl font-extralight leading-none tracking-tight text-white md:text-6xl">
                  {s.zahl}
                </div>
                <p className="mb-2 text-lg leading-snug text-white/70">{s.label}</p>
                <p className="text-xs tracking-wide text-white/35">{s.quelle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5 — Hintergründe der Entfremdung */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-3xl font-light tracking-tight text-td-navy md:text-4xl">
            Mögliche Hintergründe für gezielte Entfremdung
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hintergruende.map((h) => (
              <div key={h.nr} className="border-t-[3px] border-td-navy bg-white p-10">
                <span className="mb-3 block text-xs font-bold tracking-wider text-td-navy">
                  {h.nr}
                </span>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-[#1a1a1a]">
                  {h.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#555]">{h.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6 — Empfohlene Anlaufstellen */}
      <section className="border-t border-border bg-white py-16 md:py-20">
        <Container>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink/40">
            Empfohlene Anlaufstellen
          </p>
          <h2 className="mb-10 text-3xl font-light tracking-tight text-ink md:text-4xl">
            Unterstützung &amp; Beratung für Väter
          </h2>

          <VaeterstrategieCard />

          <p className="mt-5 text-sm italic text-ink/40">
            * Diese Empfehlung erfolgt ohne kommerzielle Vereinbarung —
            wir empfehlen diese Anlaufstelle aufgrund ihrer fachlichen Expertise.
          </p>
        </Container>
      </section>

      {/* Section 7 — CTA */}
      <section className="bg-td-navy py-16 text-center md:py-20">
        <Container className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
            Unterstütze die Initiative
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/75">
            Jedes Bewusstsein, das wir schaffen, ist ein Zeichen —
            für Kinder und Väter, die nicht vergessen werden wollen.
          </p>
          <Link
            href="/initiativen/true-dads/kontakt"
            className="inline-flex items-center border border-white/50 px-8 py-3.5 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            Kontakt aufnehmen
          </Link>
        </Container>
      </section>
    </>
  );
}
