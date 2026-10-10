import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Über uns – True Dads Deutschland",
  description:
    "Mission und Vision von True Dads Deutschland — für ein Rechtssystem, das soziale Väter und das Recht der Kinder auf beide Elternteile schützt.",
};

const vision = [
  {
    nr: "01",
    title: "Recht auf Bindung",
    text: "Ausweitung und Stärkung des § 1685 BGB, um sozialen Vätern ein verlässliches und durchsetzbares Umgangsrecht zu sichern.",
  },
  {
    nr: "02",
    title: "Verbindliche Leitlinien",
    text: "Entwicklung klarer, verbindlicher Vorgaben für Jugendämter im Umgang mit sozialen Vätern und Fällen gezielter Kontaktverweigerung.",
  },
  {
    nr: "03",
    title: "Kindeswohl zuerst",
    text: "Gezielte Elterliche Entfremdung muss gesetzlich als Kindeswohlgefährdung anerkannt und entsprechend geahndet werden.",
  },
  {
    nr: "04",
    title: "Gleichbehandlung",
    text: "Strukturelle Diskriminierung sozialer Väter in Gerichtsverfahren und Behördenentscheidungen muss systematisch beendet werden.",
  },
  {
    nr: "05",
    title: "Unterstützungsangebote",
    text: "Mehr öffentlich geförderte Beratungsstellen und Selbsthilfegruppen für betroffene Väter und deren Kinder.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-td-navy px-8 py-16 text-white">
        <Container>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            True Dads Deutschland · Über uns
          </p>
          <h1 className="text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Das sind wir
          </h1>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <Container className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-light tracking-tight text-td-navy md:text-3xl">
            Unsere Mission
          </h2>
          <div>
            <p className="mb-7 text-lg font-light leading-relaxed text-[#333]">
              In Deutschland verlieren jedes Jahr tausende Kinder den Kontakt zu ihrem sozialen
              Vater — nicht durch sein Versagen, sondern durch ein System, das gelebte
              Elternschaft nicht ausreichend schützt. Gerichte, Jugendämter und Gesetze spiegeln
              noch immer ein überholtes Bild von Familie wider, das biologische Abstammung über
              gelebte Fürsorge stellt.
            </p>
            <p className="mb-7 text-lg leading-relaxed text-[#555]">
              True Dads Deutschland ist aus der persönlichen Betroffenheit entstanden. Wir
              kennen die Ohnmacht, die Bürokratie und den Schmerz — und wir wissen, dass wir
              damit nicht allein sind. Deshalb machen wir das Schweigen sichtbar und schaffen
              einen Raum für Fakten, Recht und Solidarität.
            </p>

            {/* Ziel-Box */}
            <div className="border-l-4 border-td-navy bg-white py-7 px-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-td-navy">
                Unser Ziel
              </p>
              <p className="text-xl italic leading-relaxed text-[#333]">
                „Eine Gesellschaft und ein Rechtssystem, das gelebte Verantwortung, Fürsorge und
                kontinuierliche Elternschaft als gleichwertig zu biologischen Verbindungen
                anerkennt — und die Diskriminierung sozialer Väter beendet."
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-2xl font-light tracking-tight text-td-navy md:text-3xl">
            Unsere Vision — 5 Forderungen
          </h2>
          <div className="flex flex-col gap-4">
            {vision.map((v) => (
              <div
                key={v.nr}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-l-4 border-td-navy bg-white px-6 py-8 md:grid-cols-[3rem_1fr_3fr] md:gap-6 md:px-10"
              >
                <span className="text-sm font-bold tracking-wider text-td-navy">{v.nr}</span>
                <h3 className="text-lg font-semibold tracking-tight text-[#1a1a1a]">{v.title}</h3>
                <p className="col-span-2 text-lg leading-relaxed text-[#555] md:col-span-1">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-td-navy px-8 py-16 text-center">
        <p className="mb-8 text-xl leading-relaxed text-white/70">
          Gemeinsam können wir das System verändern.
        </p>
        <Link
          href="/initiativen/true-dads/kontakt"
          className="inline-flex items-center border border-white/50 px-8 py-3 text-sm uppercase tracking-wider text-white"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
