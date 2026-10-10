import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Leitfaden Jugendämter – True Dads Deutschland",
  description:
    "True Dads Deutschland erarbeitet einen praxisnahen Leitfaden für Jugendämter — bindungspsychologisch fundiert, rechtlich verankert.",
};

const kapitel = [
  {
    nr: "01",
    titel: "Grundlagen der Bindungspsychologie",
    text: "Einführung in die wichtigsten Erkenntnisse der Bindungsforschung (Bowlby, Ainsworth, Brisch) und ihre Relevanz für den Umgang mit sozialen Vätern.",
  },
  {
    nr: "02",
    titel: "Rechtlicher Rahmen",
    text: "Überblick über §§ 1684, 1685, 1666 BGB sowie relevante Rechtsprechung (OLG Karlsruhe, EGMR Kuppinger ./. Deutschland).",
  },
  {
    nr: "03",
    titel: "Erkennen von Entfremdungsdynamiken",
    text: "Praxisorientierte Kriterien zur Identifikation gezielter Kontaktverweigerung und elterlicher Entfremdung — ohne Vorverurteilung.",
  },
  {
    nr: "04",
    titel: "Handlungsempfehlungen für Fachkräfte",
    text: "Konkrete Schritte für Jugendamts-Mitarbeitende: Von der ersten Falleinschätzung bis zur Empfehlung gerichtlicher Maßnahmen.",
  },
  {
    nr: "05",
    titel: "Umgang mit hochkonflikthaften Trennungen",
    text: "Deeskalationsstrategien, Mediationsangebote und klare Grenzen der Neutralitätspflicht bei evidenter Kindeswohlgefährdung.",
  },
];

export default function LeitfadenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-td-navy px-8 py-16 text-white">
        <Container>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            True Dads Deutschland · Leitfaden
          </p>
          <h1 className="mb-4 text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Arbeitsentwurf
            <br />
            <span className="opacity-45">für Jugendämter</span>
          </h1>
          <p className="max-w-xl text-xl font-light leading-relaxed text-white/65">
            True Dads Deutschland erarbeitet einen praxisnahen Leitfaden für Jugendämter,
            der bindungspsychologische Erkenntnisse mit dem rechtlichen Rahmen verknüpft.
          </p>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-td-navy">
            Ziel des Leitfadens
          </p>
          <p className="mb-6 text-lg font-light leading-relaxed text-[#333]">
            Fachkräfte in Jugendämtern stehen täglich vor hochkomplexen Situationen — mit
            wenig Zeit, unklaren Informationen und großer Verantwortung. Unser Leitfaden soll
            eine evidenzbasierte Grundlage schaffen, die Entscheidungen in Fällen mit sozialen
            Vätern und Kontaktverweigerung transparenter und kindeswohlorientierter macht.
          </p>
          <p className="text-lg font-light leading-relaxed text-[#555]">
            Der Leitfaden verknüpft aktuelle Erkenntnisse der Bindungspsychologie mit dem
            geltenden Familienrecht und gibt konkrete Handlungsempfehlungen — ohne dabei
            einseitig zu sein oder Schuldzuweisungen vorzunehmen.
          </p>
        </div>
      </section>

      {/* Kapitelstruktur */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-2xl font-light tracking-tight text-td-navy md:text-3xl">
            Geplante Kapitelstruktur
          </h2>
          <div className="flex flex-col gap-px bg-border">
            {kapitel.map((k) => (
              <div
                key={k.nr}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-4 bg-white px-6 py-8 md:grid-cols-[3rem_1fr_3fr] md:gap-6 md:px-10"
              >
                <span className="text-sm font-bold tracking-wider text-td-navy">{k.nr}</span>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{k.titel}</h3>
                <p className="col-span-2 text-lg font-light leading-relaxed text-[#555] md:col-span-1">
                  {k.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Status / Platzhalter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <div className="mb-8 inline-flex items-center gap-2 border border-td-navy px-5 py-2 text-xs font-semibold uppercase tracking-wider text-td-navy">
            <span className="inline-block h-2 w-2 rounded-full bg-truedads" />
            In Erarbeitung
          </div>
          <h2 className="mb-4 text-2xl font-light tracking-tight text-[#1a1a1a] md:text-3xl">
            Der vollständige Leitfaden wird in Kürze veröffentlicht.
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed text-[#666]">
            Möchtest Du informiert werden, wenn der Leitfaden verfügbar ist?
            Hinterlasse uns eine kurze Nachricht — wir melden uns, sobald er fertig ist.
          </p>
          <Link
            href="/initiativen/true-dads/kontakt"
            className="inline-flex items-center bg-td-navy px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </>
  );
}
