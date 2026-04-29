import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fakten & Recht – True Dads Deutschland",
  description:
    "Rechtlicher Überblick zum Umgangsrecht, Statistiken zu Sorgerecht und Entfremdung sowie Definitionen zentraler Begriffe des Familienrechts.",
};

const NAVY = "#1B3A6B";

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

export default function FaktenRechtPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: NAVY, color: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.25rem",
            }}
          >
            True Dads Deutschland · Fakten &amp; Recht
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Fakten und Recht
          </h1>
        </div>
      </section>

      {/* Umgangsrecht Überblick */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            Umgangsrecht — Überblick
          </p>

          {[
            `Das deutsche Familienrecht unterscheidet zwischen dem biologischen Elternteil und dem sozialen Elternteil. Während leibliche Eltern durch §§ 1684 und 1685 BGB klare Rechte und Pflichten bezüglich des Umgangs haben, stehen soziale Väter — also Männer, die ein Kind über Jahre hinweg tatsächlich erzogen und betreut haben — rechtlich auf deutlich schwächerem Boden.`,
            `§ 1685 BGB gewährt engen Bezugspersonen zwar ein Umgangsrecht, knüpft dies jedoch an die Voraussetzung, dass der Umgang dem Kindeswohl dient. Diese Formulierung gibt Gerichten erheblichen Ermessensspielraum — und führt in der Praxis häufig dazu, dass der Kontakt des sozialen Vaters zum Kind trotz langer gemeinsamer Geschichte unterbrochen wird.`,
            `Das Europäische Menschenrechtsgericht (EGMR) hat in der Entscheidung Kuppinger ./. Deutschland (2015) die Bundesrepublik wegen der Verletzung von Art. 8 EMRK (Recht auf Achtung des Familienlebens) gerügt. Familienbehörden und Gerichte müssen demnach effektiver handeln, wenn ein Elternteil den Umgang systematisch verhindert.`,
            `Trotz dieser Rechtsprechung bleibt die Durchsetzung von Umgangsrechten in der Praxis schwierig. Zwangsmittel gegen den betreuenden Elternteil werden von Gerichten selten und zurückhaltend eingesetzt — mit dem Argument, Zwang zum Schutz des Kindes zu vermeiden, obwohl der anhaltende Kontaktabbruch selbst eine Gefährdung darstellt.`,
          ].map((absatz, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#444",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* Statistiken */}
      <section style={{ padding: "5rem 2rem", background: NAVY }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Fakten &amp; Zahlen
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.zahl}
                style={{ background: "rgba(255,255,255,0.04)", padding: "2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 200,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.zahl}
                </div>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "0 0 0.35rem" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.04em" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definitionen */}
      <section style={{ padding: "5rem 2rem", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              color: NAVY,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Zentrale Begriffe
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {definitionen.map((d) => (
              <div
                key={d.titel}
                style={{
                  background: "#fff",
                  borderLeft: `4px solid ${NAVY}`,
                  padding: "2rem 2.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: NAVY,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.titel}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#444", margin: 0, fontWeight: 300 }}>
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praxisprobleme */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 300,
              color: NAVY,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Strukturelle Hürden in der Praxis
          </h2>
          {[
            `In der gerichtlichen Praxis zeigt sich ein grundlegendes Problem: Auch wenn der Anspruch auf Umgang rechtlich anerkannt ist, scheitert seine Durchsetzung oft an der mangelnden Bereitschaft der Behörden, konsequent zu handeln. Jugendämter agieren häufig defensiv und stützen den Elternteil, der faktisch die Kontrolle über den Umgang ausübt.`,
            `Die Entscheidung des EGMR im Fall Kuppinger ./. Deutschland (Az. 26062/07) aus dem Jahr 2015 hat Deutschlands Umgangsrechtspraxis international kritisiert. Das Gericht stellte fest, dass Deutschland durch untätiges Abwarten trotz klarer Umgangsbeschlüsse das Recht auf Familienleben verletzt hatte.`,
            `True Dads Deutschland fordert daher klare Handlungspflichten für Jugendämter, verbindliche Fristen für Gerichtsverfahren und niedrigschwelligen Zugang zu Mediation — damit betroffene Väter nicht jahrelang warten müssen, bis ihr Kind sie wieder kennt.`,
          ].map((absatz, i) => (
            <p
              key={i}
              style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: "1.25rem" }}
            >
              {absatz}
            </p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 2rem", background: NAVY, textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Das Ziel von True Dads
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "560px",
            margin: "0 auto 2rem",
            lineHeight: 1.65,
          }}
        >
          Ein Rechtssystem, das gelebte Elternschaft schützt. Jede Unterschrift bringt uns näher.
        </p>
        <a
          href="https://omm-default.wixsite.com/true-dads"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.85rem 2rem",
            background: "#fff",
            color: NAVY,
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Petition unterschreiben →
        </a>
        <Link
          href="/initiativen/true-dads/leitfaden"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.85rem 2rem",
            background: "transparent",
            color: "#fff",
            fontSize: "0.82rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          Zum Leitfaden
        </Link>
      </section>
    </>
  );
}
