import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "True Dads Deutschland – Für das Recht des Kindes auf beide Elternteile",
  description:
    "True Dads Deutschland ist eine unabhängige, überparteiliche Initiative zur Stärkung sozial-familiärer Väter und zum Abbau von Diskriminierung im Umgangsrecht.",
};

const ursachen = [
  {
    title: "Narzisstische Züge",
    description:
      "Ein Elternteil nutzt das Kind als Machtmittel oder Druckmittel im Konflikt mit dem anderen Elternteil.",
  },
  {
    title: "Gatekeeping",
    description:
      "Systematische Kontrolle oder Blockade des Umgangs durch den betreuenden Elternteil — oft subtil, selten offen.",
  },
  {
    title: "Triangulation",
    description:
      "Das Kind wird in den Elternkonflikt hineingezogen und instrumentalisiert, um Einfluss oder Loyalität zu erzwingen.",
  },
  {
    title: "Wiederverarbeitung eigener Verletzungen",
    description:
      "Eigene Beziehungstraumata des betreuenden Elternteils werden auf die Eltern-Kind-Beziehung übertragen.",
  },
];

const folgen = [
  "Ängste und Depressionen",
  "Bindungsstörungen in späteren Beziehungen",
  "Schulversagen und soziale Isolation",
  "Identitätsverlust durch fehlende Vaterfigur",
  "Erhöhtes Risiko für psychische Erkrankungen im Erwachsenenalter",
];

const paragraphen = [
  {
    para: "§ 1684 BGB",
    titel: "Recht des Kindes auf Umgang",
    text: "Das Kind hat das Recht auf Umgang mit jedem Elternteil; jeder Elternteil ist zum Umgang mit dem Kind verpflichtet und berechtigt.",
  },
  {
    para: "§ 1626 Abs. 3 BGB",
    titel: "Umgang als Kindeswohl",
    text: "Zum Wohl des Kindes gehört in der Regel der Umgang mit beiden Elternteilen. Gleiches gilt für den Umgang mit anderen Personen, zu denen das Kind Bindungen besitzt, wenn deren Aufrechterhaltung für seine Entwicklung förderlich ist.",
  },
  {
    para: "§ 1685 BGB",
    titel: "Umgangsrecht für enge Bezugspersonen",
    text: "Großeltern und Geschwister haben ein Recht auf Umgang mit dem Kind, wenn dieser dem Wohl des Kindes dient.",
  },
];

export default function TrueDadsPage() {
  return (
    <>
      {/* Hero — schwarz */}
      <section
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
          padding: "5rem 2rem 5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link
            href="/initiativen"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.4,
              textDecoration: "none",
              color: "inherit",
              display: "inline-block",
              marginBottom: "3rem",
            }}
          >
            ← Initiativen &amp; Ventures
          </Link>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.35,
              marginBottom: "1.25rem",
            }}
          >
            Initiative · Väterrechte &amp; Familienrecht
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1.75rem",
              color: "var(--bg)",
            }}
          >
            Väter bleiben
            <br />
            <span style={{ opacity: 0.35 }}>Väter.</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              opacity: 0.55,
              letterSpacing: "-0.01em",
              maxWidth: "620px",
              lineHeight: 1.6,
            }}
          >
            True Dads Deutschland ist eine unabhängige, überparteiliche Initiative
            zur Stärkung sozial-familiärer Väter und zum Abbau von Diskriminierung
            im Umgangsrecht.
          </p>
        </div>
      </section>

      {/* Was ist True Dads */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            Die Initiative
          </p>
          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}
            >
              True Dads Deutschland setzt sich für das Recht des Kindes auf beide Elternteile ein.
              Die Initiative kämpft für mehr Gerechtigkeit im deutschen Familienrecht — überparteilich,
              faktenbasiert und mit dem Kindeswohl im Mittelpunkt.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, opacity: 0.6 }}>
              Väter, die nach einer Trennung den Kontakt zu ihren Kindern verlieren, stehen oft
              vor einem System, das strukturell benachteiligt. True Dads macht dieses Schweigen
              sichtbar — und gibt Vätern und Kindern eine Stimme.
            </p>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section style={{ padding: "4rem 2rem", background: "var(--fg)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.35,
              marginBottom: "2.5rem",
            }}
          >
            Zahlen &amp; Fakten
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "rgba(242,240,235,0.08)",
            }}
          >
            {[
              {
                zahl: "20%",
                label: "der Kinder erleben Kontaktabbruch zum Vater",
                quelle: "pairfam-Studie",
              },
              {
                zahl: "9%",
                label: "erleben Kontaktabbruch zur Mutter",
                quelle: "pairfam-Studie",
              },
              {
                zahl: "1 von 5",
                label: "Kindern verliert innerhalb von 10 Jahren den Vater",
                quelle: "Langzeitstudie",
              },
            ].map((s) => (
              <div
                key={s.zahl}
                style={{ background: "rgba(242,240,235,0.03)", padding: "2.5rem" }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 200,
                    letterSpacing: "-0.03em",
                    color: "var(--bg)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.zahl}
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, opacity: 0.6, margin: "0 0 0.5rem" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "0.65rem", opacity: 0.35, margin: 0, letterSpacing: "0.05em" }}>
                  Quelle: {s.quelle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rechtlicher Hintergrund */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
            marginBottom: "2.5rem",
          }}
        >
          Rechtlicher Hintergrund
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {paragraphen.map((p) => (
            <div
              key={p.para}
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "160px 1fr 2fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  opacity: 0.55,
                }}
              >
                {p.para}
              </span>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {p.titel}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, opacity: 0.6, margin: 0 }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ursachen der Entfremdung */}
      <section style={{ padding: "5rem 2rem", background: "#EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2.5rem",
            }}
          >
            Ursachen der Entfremdung
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1px",
              background: "var(--border)",
            }}
          >
            {ursachen.map((u, i) => (
              <div key={i} style={{ background: "#EBEBEB", padding: "2.5rem" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.3,
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {u.title}
                </h3>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.75, opacity: 0.65, margin: 0 }}>
                  {u.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Folgen für Kinder */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
            >
              Folgen für Kinder
            </p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, opacity: 0.6 }}>
              Elterliche Entfremdung gilt in der Fachliteratur als Form
              der{" "}
              <strong style={{ fontWeight: 500 }}>psychologischen Kindesmisshandlung</strong>.
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {folgen.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.3,
                    fontWeight: 500,
                    flexShrink: 0,
                    paddingTop: "0.15rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.75 }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OLG Karlsruhe Urteil */}
      <section
        style={{
          padding: "5rem 2rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "2rem",
            }}
          >
            Rechtsprechung
          </p>
          <blockquote
            style={{
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.9,
              opacity: 0.75,
              margin: "0 0 2rem",
              fontWeight: 300,
              borderLeft: "2px solid var(--border)",
              paddingLeft: "2rem",
            }}
          >
            „Die Verweigerung des Umgangs durch den betreuenden Elternteil ohne triftigen Grund
            stellt eine Kindeswohlgefährdung dar. Das Gericht kann in solchen Fällen
            Zwangsmaßnahmen anordnen, um den Umgang zu sichern. Der Umgangsboykott ist keine
            hinzunehmende Folge der Trennung, sondern eine schwerwiegende Verletzung der
            Kindesrechte."
          </blockquote>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em", margin: 0 }}>
            OLG Karlsruhe, Beschluss vom 12.07.2013
          </p>
          <p style={{ fontSize: "0.75rem", opacity: 0.5, margin: "0.25rem 0 0" }}>
            Az. 16 UF 138/13
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "var(--fg)",
          color: "var(--bg)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--bg)",
          }}
        >
          Petition jetzt unterstützen
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.55,
            marginBottom: "2.5rem",
            lineHeight: 1.7,
            maxWidth: "500px",
            margin: "0 auto 2.5rem",
          }}
        >
          Jede Unterschrift zählt. Stärke die Rechte von Vätern und Kindern.
        </p>
        <a
          href="https://omm-default.wixsite.com/true-dads"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.75rem",
            background: "var(--bg)",
            color: "var(--fg)",
            fontSize: "0.8rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid var(--bg)",
          }}
        >
          Zur Initiative →
        </a>
      </section>
    </>
  );
}
