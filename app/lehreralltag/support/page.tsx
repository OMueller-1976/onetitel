import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support LehrerAlltag | OneTitel',
  description: 'Support und häufige Fragen zur iOS-App LehrerAlltag.',
  alternates: {
    canonical: 'https://www.onetitel.de/lehreralltag/support',
  },
  robots: { index: true, follow: true },
}

const h2: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#0A0A0A',
  marginBottom: '10px',
  marginTop: 0,
}

const p: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  color: '#333',
  lineHeight: 1.75,
  marginBottom: '12px',
}

const a: React.CSSProperties = {
  color: '#2F7D5B',
  textDecoration: 'underline',
}

const faqs = [
  {
    q: 'Ich bekomme keine Erinnerungen.',
    a: 'Prüfen Sie in iOS Einstellungen → Mitteilungen → LehrerAlltag, ob Mitteilungen erlaubt sind, und ob ein Fokus oder der Energiesparmodus aktiv ist. In der App unter Einstellungen → Erinnerungen können Sie Mitteilungen erlauben oder die Systemeinstellungen öffnen. iOS erlaubt maximal 64 geplante Mitteilungen; LehrerAlltag plant die nächsten 7 Tage und erneuert sie bei jedem App-Start.',
  },
  {
    q: 'Wie funktionieren Testphase und Kauf?',
    a: '3 Tage alle Funktionen kostenlos. Danach „Basis" (einmalig 9,99 €). „PRO" (Vollfunktion) ist ein zusätzlicher Einmalkauf (19,99 €). Kein Abo.',
  },
  {
    q: 'Ich habe schon gekauft, aber die App ist gesperrt.',
    a: 'Tippen Sie in der Paywall oder unter Einstellungen auf „Käufe wiederherstellen". Sie müssen mit derselben Apple-ID angemeldet sein.',
  },
  {
    q: 'Wie funktioniert der Mail-Assistent?',
    a: 'Sie fügen eine Mail in den Assistenten ein. Die App erkennt das Anliegen, schlägt bei Terminanfragen 2–3 freie Zeiten aus Ihrem Kalender und Ihren Gesprächszeiten vor und entwirft eine Antwort. Sie prüfen und geben frei; gesendet wird erst, wenn Sie im Mail-Fenster selbst auf „Senden" tippen. Dafür muss auf dem iPhone ein E-Mail-Konto in der Apple-Mail-App eingerichtet sein. Kalenderzugriff ist optional; ohne ihn berücksichtigt die App nur Stundenplan und Gesprächszeiten.',
  },
  {
    q: 'Der Assistent schlägt keine Termine vor.',
    a: 'Prüfen Sie Mail-Assistent → Einstellungen: Gesprächszeiten (Wochentage und Uhrzeiten) müssen eingetragen sein. Der erste Vorschlag liegt frühestens 24 Stunden in der Zukunft.',
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
    q: 'Ersetzt die App Klassenbuch oder Notenverwaltung?',
    a: 'Nein. Notizen, Schnitte und Fehlzeiten sind Ihre eigenen Hilfsunterlagen. Verbindlich sind die amtlichen Unterlagen Ihrer Schule.',
  },
]

export default function LehrerAlltagSupport() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
          LehrerAlltag · iOS App
        </p>
        <h1 style={{ fontFamily: 'Jost, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0A0A0A', marginBottom: '32px' }}>
          Support
        </h1>

        {/* Contact box */}
        <div style={{ background: '#F5FAF7', border: '1px solid #D0EDE1', borderRadius: '12px', padding: '24px 28px', marginBottom: '48px' }}>
          <p style={{ ...p, marginBottom: '8px' }}>
            Fragen, Fehler oder Wünsche? Schreiben Sie uns:
          </p>
          <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '12px' }}>
            E-Mail:{' '}
            <a href="mailto:info@onetitel.de?subject=LehrerAlltag" style={a}>info@onetitel.de</a>
            {' '}(Betreff: „LehrerAlltag")
          </p>
          <p style={{ ...p, marginBottom: 0, color: '#555' }}>
            Wir antworten in der Regel innerhalb von 2 bis 3 Werktagen.
          </p>
          <p style={{ ...p, marginBottom: 0, color: '#555', marginTop: '8px' }}>
            Bitte schreiben Sie uns <strong>keine Namen oder Daten von Schülerinnen, Schülern oder Eltern</strong>. Nennen Sie stattdessen Ihr iPhone-Modell, die iOS-Version und die App-Version (<em>Einstellungen</em>, ganz unten bei „Version") und beschreiben Sie, was passiert ist.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{ ...h2, fontSize: '1.4rem', marginBottom: '24px' }}>Häufige Fragen</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <summary style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#0A0A0A',
                padding: '16px 20px',
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {faq.q}
                <span style={{ color: '#2F7D5B', fontSize: '1.2rem', flexShrink: 0, marginLeft: '12px' }}>＋</span>
              </summary>
              <div style={{ padding: '0 20px 20px', borderTop: '1px solid #E0E0E0' }}>
                <p style={{ ...p, marginBottom: 0, marginTop: '16px' }}>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Legal */}
        <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px' }}>
          <h2 style={{ ...h2, marginBottom: '16px' }}>Rechtliches</h2>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="/lehreralltag/datenschutz" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Datenschutz</a>
            <a href="/lehreralltag/nutzungsbedingungen" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Nutzungsbedingungen</a>
            <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
          </div>
        </div>
      </div>
    </main>
  )
}
