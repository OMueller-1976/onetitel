import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support PflegeAlltag | OneTitel',
  description: 'Support und häufige Fragen zur iOS-App PflegeAlltag.',
  alternates: {
    canonical: 'https://www.onetitel.de/pflegealltag/support',
  },
}

export default function PflegeAlltagSupport() {
  const faqs = [
    {
      q: 'Ich bekomme keine Erinnerungen.',
      a: 'Prüfen Sie in iOS Einstellungen → Mitteilungen → PflegeAlltag, ob Mitteilungen erlaubt sind, und ob ein Fokus oder der Energiesparmodus aktiv ist. In der App unter Einstellungen → Erinnerungen können Sie Mitteilungen erlauben oder die Systemeinstellungen öffnen. iOS erlaubt maximal 64 geplante Mitteilungen; PflegeAlltag plant die nächsten 7 Tage und erneuert sie bei jedem App-Start.',
    },
    {
      q: 'Wie funktionieren Testphase und Kauf?',
      a: '3 Tage alle Funktionen kostenlos. Danach „Basis" (einmalig 9,99 €). „PRO" (Vollfunktion) ist ein zusätzlicher Einmalkauf (19,99 €). Kein Abo.',
    },
    {
      q: 'Ich habe schon gekauft, aber die App ist gesperrt.',
      a: 'Tippen Sie in der Paywall oder unter Einstellungen auf „Käufe wiederherstellen". Sie müssen mit derselben Apple-ID angemeldet sein. Die Funktion finden Sie auch unter Einstellungen → Zugang.',
    },
    {
      q: 'Wie sichere ich meine Daten oder wechsle das Gerät?',
      a: 'Alle Daten liegen nur auf Ihrem Gerät. Nutzen Sie den Export (JSON) unter Einstellungen → Daten oder eine verschlüsselte iCloud-/Computer-Sicherung von iOS. Es gibt keinen Server und kein Konto, deshalb können wir Daten nicht wiederherstellen.',
    },
    {
      q: 'Wie lösche ich alle Daten?',
      a: 'Einstellungen → Alle Daten löschen. Das ist endgültig. Auch das Löschen der App entfernt die Daten.',
    },
    {
      q: 'Ist PflegeAlltag ein Medizinprodukt?',
      a: 'Nein. Die App gibt keine Diagnose- oder Dosierungsempfehlung und ersetzt keine Pflegedokumentation.',
    },
  ]

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '13px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '16px',
        }}>
          PflegeAlltag · iOS App
        </p>
        <h1 style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          color: '#0A0A0A',
          marginBottom: '16px',
        }}>
          Support
        </h1>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '1rem',
          color: '#333',
          lineHeight: 1.7,
          marginBottom: '8px',
        }}>
          Fragen, Fehler oder Wünsche? Schreiben Sie uns:
        </p>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '1rem',
          fontWeight: 600,
          marginBottom: '8px',
        }}>
          <a href="mailto:info@onetitel.de?subject=PflegeAlltag" style={{ color: '#0A0A0A' }}>
            info@onetitel.de
          </a>
          {' '}(Betreff: „PflegeAlltag")
        </p>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.95rem',
          color: '#6B6B6B',
          marginBottom: '48px',
          lineHeight: 1.6,
        }}>
          Wir antworten in der Regel innerhalb von 2 bis 3 Werktagen.
          Bitte schreiben Sie uns <strong>keine Namen oder Gesundheitsdaten</strong> von Klienten oder pflegebedürftigen Personen.
          Nennen Sie stattdessen Ihr iPhone-Modell, die iOS-Version und die App-Version
          (<em>Einstellungen</em>, ganz unten bei „Version") und beschreiben Sie, was passiert ist.
        </p>

        <h2 style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#0A0A0A',
          marginBottom: '32px',
        }}>
          Häufige Fragen
        </h2>

        {faqs.map((faq, i) => (
          <div key={i} style={{
            marginBottom: '32px',
            paddingBottom: '32px',
            borderBottom: i < faqs.length - 1 ? '1px solid #E0E0E0' : 'none',
          }}>
            <h3 style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#0A0A0A',
              marginBottom: '10px',
            }}>
              {faq.q}
            </h3>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.95rem',
              color: '#333',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {faq.a}
            </p>
          </div>
        ))}

        <div style={{
          background: '#F0F0F0',
          padding: '24px',
          borderRadius: '4px',
          marginBottom: '48px',
        }}>
          <h3 style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#0A0A0A',
            marginBottom: '12px',
          }}>
            Rechtliches
          </h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/pflegealltag/datenschutz" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Datenschutz</a>
            <a href="/pflegealltag/nutzungsbedingungen" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Nutzungsbedingungen</a>
            <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
          </div>
        </div>

        <a href="/pflegealltag" style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.9rem',
          color: '#0A0A0A',
          textDecoration: 'underline',
        }}>
          ← Zurück zu PflegeAlltag
        </a>
      </div>
    </main>
  )
}
