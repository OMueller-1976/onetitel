import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PflegeAlltag – App für Pflege und Betreuung | OneTitel',
  description: 'Routinen, Erinnerungen und Klienten-Karten für Pflege und Betreuung. Beruflich oder für Angehörige. Alle Daten bleiben auf Deinem iPhone.',
  alternates: {
    canonical: 'https://www.onetitel.de/pflegealltag',
  },
}

export default function PflegeAlltag() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: '#0A0A0A',
        color: '#FFFFFF',
        padding: '80px 24px 72px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#999',
            marginBottom: '20px',
            fontFamily: 'Jost, sans-serif',
          }}>
            iOS App von OneTitel
          </p>
          <h1 style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            PflegeAlltag
          </h1>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: '#CCCCCC',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}>
            Routinen, Erinnerungen und Klienten-Karten für Pflege und Betreuung.
            Beruflich oder für Angehörige. Alle Daten bleiben auf Deinem iPhone.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#"
              aria-label="PflegeAlltag im App Store laden (bald verfügbar)"
              style={{
                display: 'inline-block',
                background: '#FFFFFF',
                color: '#0A0A0A',
                padding: '14px 32px',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                borderRadius: '4px',
                opacity: 0.5,
                cursor: 'default',
              }}
            >
              App Store – bald verfügbar
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            color: '#0A0A0A',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            Was PflegeAlltag kann
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                title: 'Routinen',
                text: 'Vorlagen für Früh-, Spät- und Nachtdienst, Touren und den Alltag zu Hause. Mit Fortschrittsanzeige.',
              },
              {
                title: 'Erinnerungen',
                text: 'Mitteilungen direkt aus der Benachrichtigung abhaken oder 10 Minuten verschieben. Lokal auf dem Gerät.',
              },
              {
                title: 'Klienten-Karten',
                text: 'Vorlieben, Rituale, Hinweise und Notfallprofil – übersichtlich auf einer Karte. Bei Angehörigen: eine Person.',
              },
              {
                title: 'Notizen & Übergabe',
                text: 'Schnelle Notizen, Gedankenparker und strukturierte Übergabe – exportierbar als PDF (PRO).',
              },
              {
                title: 'Ratgeber',
                text: 'Pflegeleistungen, Pflegegrad, Entlastung und geplante Pflegereform – mit Quellen und Stand.',
              },
              {
                title: 'Datenschutz by Design',
                text: 'Kein Konto, kein Tracking, keine Werbung. Alle Daten bleiben auf Deinem Gerät, optional mit Face ID gesperrt.',
              },
            ].map((f) => (
              <div key={f.title} style={{
                padding: '28px',
                border: '1px solid #E0E0E0',
                borderRadius: '4px',
              }}>
                <h3 style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginBottom: '10px',
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.95rem',
                  color: '#6B6B6B',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO Features */}
      <section style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            PRO – Vollfunktion
          </h2>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '1rem',
            color: '#CCCCCC',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}>
            Einmalkauf, kein Abo.
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 48px',
            textAlign: 'left',
            display: 'inline-block',
          }}>
            {[
              'Medikamenten-Erinnerungen nach ärztlichem Plan mit Abhak-Verlauf',
              'Trink- und Vitalwerte-Tagebuch mit Verlauf',
              'Intervall-Timer und Touren-Planer',
              'Übergabe als PDF',
              'Kompletter Ratgeber und Kommunikations-Trainer',
            ].map((item) => (
              <li key={item} style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '1rem',
                color: '#EEEEEE',
                padding: '8px 0',
                borderBottom: '1px solid #222',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}>
                <span style={{ color: '#999', flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            color: '#0A0A0A',
            marginBottom: '48px',
          }}>
            Preise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}>
            {[
              { name: 'Test', price: 'Kostenlos', sub: '3 Tage, alle Funktionen' },
              { name: 'Basis', price: '9,99 €', sub: 'Einmalkauf, kein Abo' },
              { name: 'PRO', price: '19,99 €', sub: 'Einmalkauf, setzt Basis voraus' },
            ].map((p) => (
              <div key={p.name} style={{
                padding: '32px 24px',
                border: '1px solid #E0E0E0',
                borderRadius: '4px',
              }}>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#999',
                  marginBottom: '8px',
                }}>
                  {p.name}
                </p>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginBottom: '8px',
                }}>
                  {p.price}
                </p>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.9rem',
                  color: '#6B6B6B',
                  margin: 0,
                }}>
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.85rem',
            color: '#999',
            lineHeight: 1.6,
          }}>
            Alle Preise inkl. gesetzlicher MwSt. Kauf und Zahlung über Apple App Store.
            Kein Abonnement, keine automatische Verlängerung.
          </p>
        </div>
      </section>

      {/* Legal Footer */}
      <section style={{ background: '#F0F0F0', padding: '48px 24px' }}>
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <a href="/pflegealltag/datenschutz" style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.9rem',
            color: '#0A0A0A',
            textDecoration: 'underline',
          }}>
            Datenschutz
          </a>
          <a href="/pflegealltag/nutzungsbedingungen" style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.9rem',
            color: '#0A0A0A',
            textDecoration: 'underline',
          }}>
            Nutzungsbedingungen
          </a>
          <a href="/pflegealltag/support" style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.9rem',
            color: '#0A0A0A',
            textDecoration: 'underline',
          }}>
            Support
          </a>
          <a href="/impressum" style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.9rem',
            color: '#0A0A0A',
            textDecoration: 'underline',
          }}>
            Impressum
          </a>
        </div>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.8rem',
          color: '#999',
          textAlign: 'center',
          marginTop: '24px',
        }}>
          PflegeAlltag ist kein Medizinprodukt und gibt keine Diagnose- oder Dosierungsempfehlungen.
        </p>
      </section>
    </main>
  )
}
