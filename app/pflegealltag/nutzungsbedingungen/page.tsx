import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen PflegeAlltag | OneTitel',
  description: 'Nutzungsbedingungen der iOS-App PflegeAlltag von OneTitel / Oliver Markus Müller.',
  robots: { index: false, follow: false },
}

export default function PflegeAlltagNutzungsbedingungen() {
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
          marginBottom: '8px',
        }}>
          Nutzungsbedingungen
        </h1>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.9rem',
          color: '#999',
          marginBottom: '48px',
        }}>
          Stand: Oktober 2026
        </p>

        {[
          {
            title: '1. Anbieter und Geltung',
            content: `Anbieter der App ist Oliver Markus Müller, OneTitel – Digital & Business Solutions, Am Bruchborn 6, 54570 Kirchweiler, Deutschland (info@onetitel.de). Mit dem Laden und Nutzen der App gelten diese Bedingungen zusammen mit der Apple-Standardlizenzvereinbarung (EULA) (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Bei Widersprüchen gilt für das Verhältnis zu Apple die EULA.`,
          },
          {
            title: '2. Leistung',
            content: `PflegeAlltag ist ein persönliches Organisationswerkzeug für Pflege- und Betreuungskräfte sowie pflegende Angehörige: Routinen, Erinnerungen, Klienten-Karten, Notizen, Tagebücher, Werkzeuge und ein Ratgeber. Alle Daten bleiben auf Ihrem Gerät. Es gibt kein Benutzerkonto.`,
          },
          {
            title: '3. Testphase, Preise, Freischaltungen',
            content: null,
            bullets: [
              'Testphase: Nach der ersten Nutzung können Sie alle Funktionen 3 Tage kostenlos testen. Die Testphase ist eine zeitliche Sperre in der App, kein Abonnement und keine Zahlungspflicht.',
              'Basis: Nach der Testphase benötigen Sie die Freischaltung „Basis" als Einmalkauf (9,99 €).',
              'PRO: Die Freischaltung „PRO" (Vollfunktion) ist ein zusätzlicher Einmalkauf (19,99 €) und setzt „Basis" voraus.',
              'Es gibt keine Abonnements und keine automatische Verlängerung.',
              'Preise inkl. gesetzlicher Umsatzsteuer; in anderen Ländern gelten die im App Store angezeigten Preise.',
              'Die Zahlung wird von Apple abgewickelt. Käufe können über „Käufe wiederherstellen" auf anderen Geräten derselben Apple-ID erneut freigeschaltet werden. Familienfreigabe richtet sich nach den Einstellungen von Apple.',
              'Nach Ablauf der Testphase ohne Kauf bleiben Ihre Daten erhalten und können exportiert werden. Die weitere Nutzung der App erfordert „Basis".',
            ],
          },
          {
            title: '4. Widerruf und Erstattung',
            content: `Der Kauf erfolgt über Apple. Widerrufsrecht und Erstattungen richten sich nach den Bedingungen von Apple und der Apple-Erstattungsseite (reportaproblem.apple.com). Als Verbraucher haben Sie bei digitalen Inhalten grundsätzlich ein 14-tägiges Widerrufsrecht; es erlischt, wenn die Ausführung mit Ihrer ausdrücklichen Zustimmung begonnen hat und Sie bestätigt haben, dass Sie dadurch Ihr Widerrufsrecht verlieren. Apple weist hierauf beim Kauf hin.`,
          },
          {
            title: '5. Wichtige Hinweise zur Nutzung',
            content: null,
            bullets: [
              'Kein Medizinprodukt. PflegeAlltag stellt keine Diagnose, gibt keine Dosierungs-, Therapie- oder Behandlungsempfehlung und bewertet keine Messwerte. Medikamenten- und Tagebuchfunktionen dienen nur der Erinnerung und der eigenen Aufzeichnung nach ärztlichem Plan.',
              'Keine Pflegedokumentation. Die App ersetzt weder die gesetzlich oder vertraglich vorgeschriebene Pflegedokumentation noch ärztliche, pflegerische oder rechtliche Beratung.',
              'Ratgeber. Die Inhalte dienen der allgemeinen Information, nennen ihre Quellen und den Stand. Gesetze und Leistungen ändern sich. Insbesondere Inhalte zur geplanten Pflegereform beschreiben Entwurfsstände, die nicht beschlossen sind. Bitte prüfen Sie verbindliche Auskünfte bei der Pflegekasse, dem Pflegestützpunkt oder einer Beratungsstelle.',
              'Erinnerungen sind eine Unterstützung. Mitteilungen können durch iOS-Einstellungen (z. B. Fokus, Energiesparmodus, deaktivierte Mitteilungen) verzögert werden oder ausbleiben. Verlassen Sie sich bei sicherheitsrelevanten Aufgaben nicht allein auf die App.',
              'Notfall. Bei einem medizinischen Notfall wählen Sie den Notruf 112.',
            ],
          },
          {
            title: '6. Pflichten der Nutzerinnen und Nutzer',
            content: null,
            bullets: [
              'Sie sind für die Inhalte verantwortlich, die Sie eingeben, und für die Rechtmäßigkeit der Verarbeitung Daten Dritter (Einwilligung, Schweigepflicht, Vorgaben Ihres Arbeitgebers).',
              'Verwenden Sie nach Möglichkeit nur Vornamen oder Kürzel.',
              'Sichern Sie Ihr Gerät (Code, Face ID) und aktivieren Sie bei Bedarf die App-Sperre.',
              'Da es kein Konto und keinen Server gibt, sind Datensicherungen Ihre Aufgabe (z. B. über den Export oder die Geräte-Sicherung). Beim Verlust des Geräts oder Löschen der App können Daten unwiederbringlich verloren gehen.',
            ],
          },
          {
            title: '7. Nutzungsrechte',
            content: `Sie erhalten ein einfaches, nicht übertragbares Recht, die App auf Ihren Apple-Geräten gemäß der Apple-EULA zu nutzen. Inhalte, Gestaltung und Texte der App sind urheberrechtlich geschützt.`,
          },
          {
            title: '8. Haftung',
            content: `Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper und Gesundheit sowie nach dem Produkthaftungsgesetz. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vorhersehbaren, vertragstypischen Schaden. Die Haftung für Datenverlust ist auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger Datensicherung entstanden wäre. Gesetzliche Rechte von Verbrauchern bleiben unberührt.`,
          },
          {
            title: '9. Änderungen der App und der Bedingungen',
            content: `Wir können die App weiterentwickeln, Funktionen ändern oder einstellen, soweit das für Sie zumutbar ist. Bereits gekaufte Freischaltungen bleiben im bei Kauf beschriebenen Umfang erhalten. Änderungen dieser Bedingungen werden in der App oder auf dieser Seite bekannt gemacht.`,
          },
          {
            title: '10. Schlussbestimmungen',
            content: `Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Verbraucherschutzvorschriften des Aufenthaltsstaats entzogen werden. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die EU-Plattform zur Online-Streitbeilegung finden Sie unter https://ec.europa.eu/consumers/odr. Sollten einzelne Regelungen unwirksam sein, bleibt der Rest wirksam.`,
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#0A0A0A',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '1px solid #E0E0E0',
            }}>
              {section.title}
            </h2>
            {section.content && section.content.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.95rem',
                color: '#333',
                lineHeight: 1.75,
                marginBottom: '12px',
              }}>
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {section.bullets.map((b, i) => (
                  <li key={i} style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.95rem',
                    color: '#333',
                    lineHeight: 1.7,
                    marginBottom: '8px',
                  }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div style={{
          borderTop: '1px solid #E0E0E0',
          paddingTop: '32px',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          <a href="/pflegealltag" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>← PflegeAlltag</a>
          <a href="/pflegealltag/datenschutz" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Datenschutz</a>
          <a href="/pflegealltag/support" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Support</a>
          <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
        </div>
      </div>
    </main>
  )
}
