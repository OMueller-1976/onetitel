import type { Metadata } from 'next'

// Sobald die App im App Store verfügbar ist, URL hier eintragen
const APP_STORE_URL = ''

export const metadata: Metadata = {
  title: 'LehrerAlltag – Die iPhone-App für Lehrkräfte | OneTitel',
  description:
    'Stundenplan, Klassen, Elterngespräche und Entlastung für Lehrkräfte an Grundschule und Mittelstufe. Alle Daten bleiben auf Deinem iPhone. 3 Tage kostenlos testen.',
  alternates: {
    canonical: 'https://www.onetitel.de/lehreralltag',
  },
  openGraph: {
    url: 'https://www.onetitel.de/lehreralltag',
    title: 'LehrerAlltag – Die iPhone-App für Lehrkräfte | OneTitel',
    description:
      'Stundenplan, Klassen, Elterngespräche und Entlastung für Lehrkräfte an Grundschule und Mittelstufe. Alle Daten bleiben auf Deinem iPhone.',
    locale: 'de_DE',
    type: 'website',
  },
}

const ACCENT = '#2F7D5B'
const ACCENT_LIGHT = '#5FC796'
const AMBER = '#D99A1E'

export default function LehrerAlltag() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LehrerAlltag',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS 17+',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basis',
        price: '9.99',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        name: 'PRO',
        price: '19.99',
        priceCurrency: 'EUR',
      },
    ],
    description:
      'Stundenplan, Klassen, Elterngespräche und Entlastung für Lehrkräfte. Alle Daten bleiben auf dem iPhone.',
    inLanguage: 'de',
    publisher: {
      '@type': 'Organization',
      name: 'OneTitel',
      url: 'https://www.onetitel.de',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main lang="de">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section
          style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '80px 24px 72px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: ACCENT_LIGHT,
                marginBottom: '20px',
                fontFamily: 'Jost, sans-serif',
              }}
            >
              iOS App von OneTitel
            </p>
            <h1
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              LehrerAlltag
            </h1>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                color: '#CCCCCC',
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              Dein Schulalltag an einem Ort. Ohne Konto, ohne Tracking.
            </p>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '1rem',
                color: '#AAAAAA',
                lineHeight: 1.6,
                marginBottom: '40px',
                maxWidth: '560px',
                margin: '0 auto 40px',
              }}
            >
              Stundenplan, Aufgaben, Klassen, Elterngespräche und Entlastung.
              Für Lehrkräfte an Grundschule und Mittelstufe, bundesweit.
            </p>

            {/* TODO: App-Icon / Screenshot-Platzhalter */}
            <div
              aria-label="App-Screenshot-Platzhalter (TODO: Screenshot einfügen, iPhone 6,9 Zoll)"
              style={{
                width: '160px',
                height: '240px',
                background: '#1A1A1A',
                border: '2px dashed #444',
                borderRadius: '24px',
                margin: '0 auto 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '32px' }}>📱</span>
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '10px',
                  color: '#666',
                  textAlign: 'center',
                  padding: '0 12px',
                }}
              >
                TODO: Screenshot iPhone 6,9″
              </span>
            </div>

            {APP_STORE_URL ? (
              <a
                href={APP_STORE_URL}
                aria-label="LehrerAlltag im App Store laden"
                style={{
                  display: 'inline-block',
                  background: ACCENT,
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                Im App Store laden
              </a>
            ) : (
              <span
                aria-label="Bald im App Store verfügbar"
                style={{
                  display: 'inline-block',
                  background: '#222',
                  color: '#999',
                  padding: '14px 32px',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '4px',
                  cursor: 'default',
                }}
              >
                Bald im App Store
              </span>
            )}
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.8rem',
                color: '#666',
                marginTop: '16px',
              }}
            >
              Nur für iPhone · iOS 17 oder neuer
            </p>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────────── */}
        <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '48px',
                textAlign: 'center',
              }}
            >
              Das kann die App
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { icon: '📅', title: 'Stundenplan', text: 'Mit Erinnerung vor der Stunde.' },
                {
                  icon: '✅',
                  title: 'Aufgaben',
                  text: 'Mit Fristen, Notizen und Parkplatz für Gedanken.',
                },
                {
                  icon: '👥',
                  title: 'Klassen',
                  text: 'Schüler-Kürzel und Sitzplan übersichtlich verwalten.',
                },
                {
                  icon: '⏱️',
                  title: 'Unterrichts-Timer',
                  text: 'Zufallsauswahl und Gruppen einteilen.',
                },
                {
                  icon: '✉️',
                  title: 'Textbausteine',
                  text: 'Für Elternmails und Rückmeldungen.',
                },
                {
                  icon: '💬',
                  title: 'GFK-Kompass',
                  text: 'Gewaltfreie Kommunikation in Beispielen.',
                },
                {
                  icon: '🌿',
                  title: 'Entlastung',
                  text: 'Atemübung, Stimmungs-Check, Feierabend-Ritual.',
                },
                {
                  icon: '📖',
                  title: 'Ratgeber',
                  text: 'Mit Quellen und Stand – bundesweit.',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  style={{
                    padding: '24px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '4px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{ fontSize: '1.5rem', flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        marginBottom: '4px',
                        marginTop: 0,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontSize: '0.9rem',
                        color: '#6B6B6B',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRO: Mail-Assistent ──────────────────────────────────── */}
        <section style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '72px 24px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: AMBER,
                marginBottom: '12px',
                fontWeight: 600,
              }}
            >
              PRO
            </p>
            <h2
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Mail-Assistent
            </h2>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '1rem',
                color: '#CCCCCC',
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              Du fügst eine Elternmail ein. LehrerAlltag erkennt das Anliegen, schlägt Dir bei
              einer Terminanfrage 2 bis 3 freie Zeiten aus Deinem Kalender vor und entwirft die
              Antwort. Du prüfst und gibst frei. Gesendet wird erst, wenn Du selbst auf „Senden"
              tippst. Alles läuft auf Deinem iPhone.
            </p>

            {/* Drei Schritte */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '24px',
                marginBottom: '48px',
              }}
              role="list"
              aria-label="Drei Schritte des Mail-Assistenten"
            >
              {[
                { step: '1', icon: '📋', label: 'Mail einfügen' },
                { step: '2', icon: '📆', label: 'Termine vorschlagen lassen' },
                { step: '3', icon: '✅', label: 'Prüfen und freigeben' },
              ].map((s) => (
                <div
                  key={s.step}
                  role="listitem"
                  style={{
                    background: '#111',
                    border: '1px solid #222',
                    borderRadius: '4px',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.7rem',
                      color: AMBER,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    Schritt {s.step}
                  </p>
                  <span style={{ fontSize: '2rem' }} aria-hidden="true">
                    {s.icon}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.9rem',
                      color: '#EEEEEE',
                      marginTop: '8px',
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: AMBER,
                marginBottom: '16px',
              }}
            >
              Weitere PRO-Funktionen
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Noten und Leistung (eigene Notizen, gewichteter Schnitt, CSV)',
                'Anwesenheit mit Monatsübersicht und CSV',
                'Elterngespräche mit Protokoll und PDF',
                'Vorbereitung und Korrekturplan',
                'Aufsicht und Mehrarbeit als Konto mit CSV',
                'Klassenfahrt (Packliste, Einverständnisse, PDF)',
                'Notfallblatt als PDF',
                'Konfliktgespräch (Mediation)',
                'Coaching-Fragen',
                'Siri-Kurzbefehle',
                'Kompletter Ratgeber',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.95rem',
                    color: '#EEEEEE',
                    padding: '8px 0',
                    borderBottom: '1px solid #1A1A1A',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: ACCENT_LIGHT, flexShrink: 0 }} aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Datenschutz ─────────────────────────────────────────── */}
        <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Deine Daten bleiben bei Dir
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {[
                'Kein Konto',
                'Kein Tracking',
                'Keine Werbung',
                'Keine Drittanbieter-SDKs',
                'Alle Eingaben nur auf Deinem Gerät',
                'Optional mit Face ID oder Code gesperrt',
                'App-Store-Angabe: „Daten werden nicht erfasst"',
              ].map((point) => (
                <div
                  key={point}
                  style={{
                    padding: '16px 20px',
                    background: '#F7FAF8',
                    border: `1px solid ${ACCENT}33`,
                    borderRadius: '4px',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.9rem',
                    color: '#0A0A0A',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: ACCENT }} aria-hidden="true">
                    ✓
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                color: '#6B6B6B',
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              Bitte nur Vornamen oder Kürzel von Schülern eintragen und die
              Datenschutzregeln Deiner Schule beachten.{' '}
              <a
                href="/lehreralltag/datenschutz"
                style={{ color: ACCENT, textDecoration: 'underline' }}
              >
                Zur Datenschutzerklärung
              </a>
            </p>
          </div>
        </section>

        {/* ── Preise ──────────────────────────────────────────────── */}
        <section style={{ background: '#F5F5F5', padding: '72px 24px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '48px',
              }}
            >
              Preise
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                marginBottom: '24px',
              }}
            >
              {[
                {
                  name: 'Test',
                  price: '3 Tage kostenlos',
                  sub: 'Alle Funktionen',
                  highlight: false,
                },
                {
                  name: 'Basis',
                  price: '9,99 €',
                  sub: 'Einmalkauf · alle Funktionen oben',
                  highlight: false,
                },
                {
                  name: 'PRO',
                  price: '19,99 €',
                  sub: 'Einmalkauf · Mail-Assistent, alle Exporte (CSV, PDF)',
                  highlight: true,
                },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    padding: '32px 24px',
                    background: '#FFFFFF',
                    border: p.highlight ? `2px solid ${ACCENT}` : '1px solid #E0E0E0',
                    borderRadius: '4px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: p.highlight ? ACCENT : '#999',
                      marginBottom: '8px',
                      fontWeight: p.highlight ? 700 : 400,
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      marginBottom: '8px',
                    }}
                  >
                    {p.price}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.85rem',
                      color: '#6B6B6B',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.sub}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                color: '#999',
                lineHeight: 1.6,
              }}
            >
              Kein Abo, keine automatische Verlängerung. Nach der Testphase bleiben Deine Daten
              erhalten und exportierbar. PRO setzt Basis voraus. Alle Preise inkl. gesetzlicher
              MwSt. · Kauf über Apple App Store.
            </p>
          </div>
        </section>

        {/* ── Wichtig ─────────────────────────────────────────────── */}
        <section style={{ background: '#FFFFFF', padding: '48px 24px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div
              role="note"
              style={{
                border: '1px solid #E0E0E0',
                borderLeft: `4px solid ${AMBER}`,
                borderRadius: '4px',
                padding: '24px 28px',
                background: '#FFFDF5',
              }}
            >
              <p
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: AMBER,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                Wichtig
              </p>
              <p
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.95rem',
                  color: '#333',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                LehrerAlltag ersetzt weder Klassenbuch, Notenverwaltung noch amtliche Unterlagen
                und ist keine Rechtsberatung. Der Mail-Assistent macht Vorschläge, Du entscheidest
                und gibst jede Antwort selbst frei.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section style={{ background: '#F5F5F5', padding: '72px 24px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Häufige Fragen
            </h2>
            <div>
              {[
                {
                  q: 'Brauche ich ein Konto?',
                  a: 'Nein. Es gibt kein Konto und keinen Server.',
                },
                {
                  q: 'Wo liegen meine Daten?',
                  a: 'Nur auf Deinem iPhone. Sicherung über Export oder verschlüsselte iOS-Sicherung.',
                },
                {
                  q: 'Was passiert nach den 3 Tagen?',
                  a: 'Du kaufst Basis (9,99 €) einmalig. Ohne Kauf bleiben Deine Daten erhalten und exportierbar.',
                },
                {
                  q: 'Liest die App meine E-Mails?',
                  a: 'Nein. Du fügst Mail-Texte selbst ein. Zum Antworten öffnet sich der Mail-Dialog von iOS, Du sendest selbst.',
                },
                {
                  q: 'Für welche Bundesländer und Schulformen?',
                  a: 'Bundesweit, für Grundschule und Mittelstufe. Rechtliche Hinweise im Ratgeber sind allgemein, Landesrecht und Dienstvorschriften können abweichen.',
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom: '1px solid #E0E0E0',
                    padding: '0',
                  }}
                >
                  <summary
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      padding: '20px 0',
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {faq.q}
                    <span style={{ color: ACCENT, fontSize: '1.2rem' }} aria-hidden="true">+</span>
                  </summary>
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.95rem',
                      color: '#333',
                      lineHeight: 1.7,
                      padding: '0 0 20px',
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer der Seite ───────────────────────────────────── */}
        <section style={{ background: '#F0F0F0', padding: '48px 24px' }}>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            {[
              { href: '/lehreralltag/datenschutz', label: 'Datenschutz' },
              { href: '/lehreralltag/nutzungsbedingungen', label: 'Nutzungsbedingungen' },
              { href: '/lehreralltag/support', label: 'Support' },
              { href: '/impressum', label: 'Impressum' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.9rem',
                  color: '#0A0A0A',
                  textDecoration: 'underline',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.8rem',
              color: '#999',
              textAlign: 'center',
            }}
          >
            © 2026 Oliver Markus Müller, OneTitel
          </p>
        </section>
      </main>
    </>
  )
}
