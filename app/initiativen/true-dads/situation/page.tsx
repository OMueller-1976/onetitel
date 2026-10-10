import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Die Situation – True Dads Deutschland",
  description:
    "Oliver Markus Müller über seinen persönlichen Weg durch Entfremdung, Ungerechtigkeit und den langen Kampf für das Recht seiner Kinder.",
};

const buecher = [
  { titel: "Die Grauzone des Umgangsrechts", jahr: "2025" },
  { titel: "Bindung statt Biologie: Väterrechte im Wandel", jahr: "2025" },
  { titel: "Ratgeber Familie & Erziehung", jahr: "2023" },
  { titel: "Leo und das Geheimnis der mutigen Freunde", jahr: "2023" },
  { titel: "Emma und die Magie des Zauberwaldes", jahr: "2023" },
];

const geschichte = [
  `Über 9 Jahre war ich nicht nur Partner, sondern vor allem Vater — für drei Kinder (Stiefkinder), die ich von klein auf begleitet, gefördert, geliebt und erzogen habe. Nicht weil ich musste. Sondern weil ich wollte. Weil sie meine Kinder waren — in jeder Geste, jedem Abend, jedem Schulprojekt, jeder Krankennacht.`,
  `Als die Beziehung zu ihrer Mutter endete, begann ein anderer Kampf. Nicht gegen einen Menschen — sondern gegen ein System, das soziale Väter schlicht nicht kennt. Kein § schützte zuverlässig, was wir füreinander waren. Die Kinder verloren einen Vater, der immer da war. Ich verlor Kinder, die mein Leben waren.`,
  `Was folgte, war ein langer, zermürbender Weg durch Jugendämter, Anwaltsbriefe und Gerichtstermine. Immer mit dem gleichen Ergebnis: Das System hat keine Kategorie für jemanden wie mich. Kein Blut, kein Recht. Kein Papier, kein Gehör.`,
  `Ich habe angefangen zu schreiben — nicht aus Wut, sondern aus dem Bedürfnis, dass andere nicht das Gleiche erleben müssen. Die Bücher, die dabei entstanden sind, richten sich an Betroffene, an Fachkräfte und an eine Gesellschaft, die gelebte Elternschaft endlich ernst nehmen muss.`,
  `True Dads Deutschland ist aus dieser Erfahrung entstanden. Es ist kein Protest. Es ist ein Angebot — an alle Väter, die kämpfen, und an alle Kinder, die ihren Vater vermissen.`,
];

const kurzprofil = [
  { label: "Jahrgang", wert: "1976" },
  { label: "Ausbildung", wert: "Systemischer Coach & Mediator" },
  { label: "Berufserfahrung", wert: "25+ Jahre Digital & Marketing" },
  { label: "Initiative", wert: "True Dads Deutschland (Gründer)" },
];

const stationen = [
  "Amazon Advertising",
  "AOL / Yahoo!",
  "WESER-KURIER Mediengruppe (Interim Manager)",
  "iq digital media marketing GmbH",
];

export default function SituationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-td-navy px-8 py-16 text-white">
        <Container>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            True Dads Deutschland · Persönlich
          </p>
          <h1 className="mb-4 text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Vom liebenden Vater
            <br />
            <span className="opacity-45">zum Fremden</span>
          </h1>
          <p className="text-lg italic text-white/65">
            Mein Weg durch Entfremdung und Ungerechtigkeit
          </p>
        </Container>
      </section>

      {/* Geschichte */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-td-navy">
            Meine Geschichte
          </p>

          {geschichte.map((absatz, i) => (
            <p
              key={i}
              className={
                "mb-6 text-xl leading-relaxed " +
                (i === 0 ? "font-normal text-[#222]" : "font-light text-[#444]")
              }
            >
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* Kurzprofil */}
      <section className="bg-white py-20">
        <Container className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-td-navy">
              Kurzprofil
            </p>
            <h2 className="text-2xl font-light tracking-tight text-td-navy md:text-3xl">
              Oliver Markus Müller
            </h2>
          </div>
          <div>
            <div className="mb-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {kurzprofil.map((item) => (
                <div key={item.label} className="bg-white p-6">
                  <p className="mb-1 text-xs uppercase tracking-wider text-[#888]">
                    {item.label}
                  </p>
                  <p className="text-lg text-[#222]">{item.wert}</p>
                </div>
              ))}
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888]">
              Berufliche Stationen
            </p>
            <ul className="mb-8 flex list-none flex-col gap-1.5 p-0">
              {stationen.map((station) => (
                <li key={station} className="flex gap-3 text-lg text-[#444]">
                  <span className="shrink-0 font-semibold text-td-navy">—</span>
                  {station}
                </li>
              ))}
            </ul>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888]">
              Bücher
            </p>
            <ul className="list-none p-0">
              {buecher.map((b) => (
                <li
                  key={b.titel}
                  className="flex justify-between gap-4 border-b border-border py-2.5 text-lg text-[#333]"
                >
                  <span>{b.titel}</span>
                  <span className="shrink-0 text-xl text-[#999]">{b.jahr}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Kontakt CTA */}
      <section className="bg-td-navy px-8 py-16 text-center">
        <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
          Du willst Dich austauschen?
        </h2>
        <p className="mb-8 text-lg text-white/65">
          Schreib uns:{" "}
          <a
            href="mailto:truedads@onetitel.de"
            className="font-semibold text-white underline underline-offset-4"
          >
            truedads@onetitel.de
          </a>
        </p>
        <Link
          href="/initiativen/true-dads/kontakt"
          className="inline-flex items-center bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-td-navy"
        >
          Zum Kontaktformular →
        </Link>
      </section>
    </>
  );
}
