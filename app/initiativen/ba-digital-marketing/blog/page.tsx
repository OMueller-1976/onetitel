import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – BA Digital Marketing",
  description:
    "Beiträge zu Digital Marketing, Programmatic Advertising, SEO, Social Media und der Digitalisierung in Deutschland.",
};

const DARK = "#2D2D2D";
const CREAM = "#FAFAFA";

const artikel = [
  {
    nr: "01",
    titel: "Herausforderungen der Digitalisierung in Deutschland",
    datum: "2024",
    teaser: `Eine der größten Herausforderungen der Digitalisierung in Deutschland ist der Ausbau der digitalen Infrastruktur. Während andere Länder bereits mit Glasfaser und 5G flächendeckend versorgt sind, kämpft Deutschland noch immer mit Funklöchern und langsamen Leitungen — besonders in ländlichen Regionen.`,
    text: `Die Digitalisierung betrifft nicht nur die Infrastruktur, sondern auch die Unternehmenskultur. Viele mittelständische Unternehmen haben noch keine kohärente Digital-Strategie entwickelt. Der Mangel an qualifizierten Fachkräften, bürokratische Hürden und eine traditionell konservative Investitionsmentalität bremsen die Transformation.

Hinzu kommt die Frage der Datensicherheit und des Datenschutzes. Die DSGVO hat zwar wichtige Weichen gestellt, doch ihre Umsetzung kostet Ressourcen — gerade für kleine Unternehmen, die keine eigene Rechtsabteilung haben.

Die Chance liegt dennoch auf der Hand: Deutschland hat eine starke industrielle Basis, qualifizierte Arbeitnehmer und eine stabile Infrastruktur. Wer jetzt in Digitalisierung investiert, sichert sich langfristige Wettbewerbsvorteile.`,
  },
  {
    nr: "02",
    titel: "Digitalisierung",
    datum: "2024",
    teaser: `Die Digitalisierung hat in den letzten Jahren weltweit an Bedeutung gewonnen und ist mittlerweile zu einem wichtigen Faktor für die Wettbewerbsfähigkeit von Unternehmen, Volkswirtschaften und Gesellschaften geworden.`,
    text: `Digitalisierung bedeutet mehr als die Einführung neuer Technologien. Es ist ein fundamentaler Wandel in der Art, wie Unternehmen arbeiten, kommunizieren und Werte schaffen. Vom Cloud-Computing über künstliche Intelligenz bis hin zu automatisierten Marketingprozessen — die digitale Transformation verändert jeden Bereich.

Besonders im Marketing hat die Digitalisierung die Spielregeln neu geschrieben. Programmatic Advertising, datengetriebenes Targeting und Echtzeit-Bidding haben den klassischen Mediaeinkauf revolutioniert. Budgets fließen dorthin, wo Wirkung messbar ist.

Die Herausforderung für Unternehmen: nicht jede Innovation ist relevant. Strategische Entscheidungen, welche Technologien tatsächlich zum Geschäftsmodell passen, werden wichtiger als je zuvor.`,
  },
  {
    nr: "03",
    titel: "Die wunderbare Welt der sozialen Medien",
    datum: "2024",
    teaser: `In der Landschaft des 21. Jahrhunderts hat sich ein Phänomen herauskristallisiert, das den wahren Wert der menschlichen Verbindung zeigt — und gleichzeitig die tiefgreifendsten Fragen über Aufmerksamkeit, Identität und Wahrheit aufwirft.`,
    text: `Soziale Medien sind keine neutrale Kommunikationsinfrastruktur. Sie sind Bühnen, Märkte und Informationsräume zugleich — und für Marken eine der wichtigsten Touchpoints im Customer Journey.

Plattformen wie Instagram, LinkedIn oder TikTok haben unterschiedliche Mechaniken, Algorithmen und Nutzererwartungen. Wer alle gleich bespielt, verliert. Wer versteht, wie Feeds, Engagement und Reichweite zusammenhängen, gewinnt.

Für das Digital Marketing bedeutet das: Social nicht als Kanal, sondern als Ökosystem denken. Content, Community und Commerce wachsen zusammen. Und der Business Angel, der diesen Wandel kennt, kann entscheidende Impulse setzen.`,
  },
  {
    nr: "04",
    titel: "Die Zukunft des Online-Marketings — Utopie oder Dystopie?",
    datum: "2023",
    teaser: `Ethik und Transparenz im Online-Marketing: In einer idealen Zukunft würden sich Online-Marketing-Branche und Nutzerinteressen annähern. Doch die Realität zeigt ein komplexes Spannungsfeld zwischen Personalisierung, Datenschutz und Vertrauen.`,
    text: `Das Ende des Third-Party-Cookies hat die Branche aufgeschreckt. Was lange als selbstverständlich galt — das präzise Retargeting auf Basis von Cross-Site-Tracking — ist nun Vergangenheit. Die Frage ist: Was kommt danach?

First-Party-Daten, Contextual Advertising und Privacy-Sandbox-Technologien sind die neuen Schlagworte. Wer seine Nutzerbeziehung gepflegt hat und echte Consent-Signale sammelt, ist im Vorteil.

Die Utopie: Marketing, das Nutzer wirklich nützt, weil es relevant, respektvoll und transparent ist. Die Dystopie: ein Datenwettbewerb, der durch neue Umgehungsstrategien weitergeht. Die Wahrheit liegt irgendwo dazwischen — und wer heute die Weichen stellt, prägt die Antwort.`,
  },
  {
    nr: "05",
    titel: "Online-Marketing-Künstler: Retargeting als Meisterwerk",
    datum: "2023",
    teaser: `Die Online-Marketing-Künstler beherrschen das Handwerk des Retargetings wie kein anderer. Der Schlüssel zum Erfolg liegt darin, die richtigen Nutzer zur richtigen Zeit mit der richtigen Botschaft anzusprechen — ohne dabei aufdringlich zu wirken.`,
    text: `Retargeting ist eine der effektivsten Disziplinen im Performance Marketing. Wer eine Website besucht, ein Produkt in den Warenkorb gelegt oder einen Artikel zu Ende gelesen hat, sendet klare Signale der Kaufintention.

Die Kunst liegt im Frequenz-Management. Zu selten: die Erinnerung verblasst. Zu häufig: der Nutzer fühlt sich verfolgt und reagiert negativ. Die Balance zu halten, ist die eigentliche kreative Leistung hinter den Kampagnenzahlen.

Dynamic Creative Optimization (DCO) ermöglicht es, Werbemittel in Echtzeit auf den Nutzerkontext zuzuschneiden. Kombiniert mit sauberen Audience-Segmenten und kontrollierter Attribution entsteht ein Retargeting-System, das wie ein stiller Verkäufer funktioniert — immer zur Stelle, nie aufdringlich.`,
  },
  {
    nr: "06",
    titel: "SEO-Zauberer und ihre Kristallkugel",
    datum: "2023",
    teaser: `SEO versus SEA ist ein bisschen wie ein Katz-und-Maus-Spiel, bei dem SEO versucht, organischen Traffic zu generieren — mit Methoden, die sich mit jedem Google-Update verschieben.`,
    text: `Wer SEO betreibt, lebt mit Unsicherheit. Google ändert seinen Algorithmus hunderte Male pro Jahr. Was gestern funktioniert hat, kann morgen abstraft werden. Und dennoch: Unternehmen, die organische Sichtbarkeit konsequent aufbauen, profitieren von einem der nachhaltigsten Traffic-Kanäle überhaupt.

SEA hingegen bietet Kontrolle und Geschwindigkeit. Budget rein, Kampagne läuft, Ergebnisse messbar. Der Preis: Abhängigkeit vom Bidding-System und steigende CPCs in umkämpften Märkten.

Die intelligente Lösung ist keine Entscheidung für eine Seite, sondern das Zusammenspiel beider Disziplinen. SEO baut Substanz, SEA liefert Impulse. Ein Business Angel mit Digital-Marketing-Hintergrund versteht diese Dynamik — und hilft Start-ups, ihre Ressourcen klug zu verteilen.`,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: DARK,
          color: "#fff",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            BA Digital Marketing · Blog
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Beiträge
          </h1>
        </div>
      </section>

      {/* Artikel-Grid */}
      <section style={{ padding: "5rem 2rem", background: CREAM }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Übersicht-Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1px",
              background: "#E0E0E0",
              marginBottom: "5rem",
            }}
          >
            {artikel.map((a) => (
              <div key={a.nr} style={{ background: CREAM, padding: "2.5rem" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#aaa",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {a.nr} · {a.datum}
                </span>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: DARK,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {a.titel}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    color: "#666",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {a.teaser}
                </p>
              </div>
            ))}
          </div>

          {/* Vollständige Artikel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {artikel.map((a) => (
              <article key={a.nr} style={{ maxWidth: "780px" }}>
                <div
                  style={{
                    borderTop: `3px solid ${DARK}`,
                    paddingTop: "2.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#aaa",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {a.nr} · {a.datum}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                      fontWeight: 300,
                      color: DARK,
                      letterSpacing: "-0.02em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {a.titel}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 400,
                      lineHeight: 1.75,
                      color: "#333",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {a.teaser}
                  </p>
                  {a.text.split("\n\n").map((absatz, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        color: "#555",
                        fontWeight: 300,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {absatz}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
