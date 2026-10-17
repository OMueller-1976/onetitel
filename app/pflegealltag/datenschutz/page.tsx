import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz PflegeAlltag | OneTitel',
  description: 'Datenschutzerklärung der iOS-App PflegeAlltag von OneTitel / Oliver Markus Müller.',
  robots: { index: false, follow: false },
}

export default function PflegeAlltagDatenschutz() {
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
          Datenschutzerklärung
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
            title: '1. Verantwortlicher',
            content: `Oliver Markus Müller, OneTitel – Digital & Business Solutions
Am Bruchborn 6, 54570 Kirchweiler, Deutschland
E-Mail: info@onetitel.de
USt-IdNr.: DE326064654`,
          },
          {
            title: '2. Das Wichtigste in Kürze',
            content: null,
            bullets: [
              'PflegeAlltag hat kein Benutzerkonto, keinen eigenen Server und kein Tracking.',
              'Alle Eingaben (Routinen, Klienten-Karten, Notizen, Tagebücher, Medikamenten-Erinnerungen) werden ausschließlich auf Ihrem Gerät gespeichert. Wir haben keinen Zugriff darauf und erhalten sie nicht.',
              'Es sind keine Drittanbieter-SDKs für Werbung, Analyse oder Absturzberichte eingebunden.',
              'App-Store-Angabe zum Datenschutz: „Daten werden nicht erfasst".',
            ],
          },
          {
            title: '3. Welche Daten die App auf Ihrem Gerät verarbeitet',
            content: `Sie entscheiden selbst, was Sie eingeben. Dazu können gehören: Ihr Vorname und Ihre Rolle (beruflich oder Angehörige), Angaben zu Klienten oder pflegebedürftigen Personen (Vorname oder Kürzel, Vorlieben, Hinweise, Notfallprofil, Termine), Medikamenten-Erinnerungen und deren Abhak-Verlauf, Trink- und Vitalwerte-Einträge, Notizen, Stimmungseinträge, Routinen und Einstellungen.

Diese Angaben können Gesundheitsdaten im Sinne des Art. 9 DSGVO sein. Sie werden nur lokal in einer geschützten Datei der App abgelegt (iOS-Dateischutz) und nicht an uns oder Dritte übertragen. Wir empfehlen, nur Vornamen oder Kürzel zu verwenden und keine Nachnamen, Adressen oder Diagnosen einzutragen.

Rechtsgrundlage für die Verarbeitung auf Ihrem Gerät ist Ihre eigene Nutzung der App (Art. 6 Abs. 1 lit. b DSGVO, soweit wir überhaupt Verantwortlicher sind). Da die Daten nicht zu uns gelangen, verarbeiten wir sie nicht selbst.`,
          },
          {
            title: '4. Berufliche Nutzung',
            content: `Wenn Sie PflegeAlltag im Rahmen Ihrer Tätigkeit für einen Arbeitgeber oder eine Einrichtung nutzen, sind Sie bzw. Ihr Arbeitgeber für die Zulässigkeit der Verarbeitung von Daten Dritter verantwortlich. Bitte beachten Sie die Datenschutz- und Schweigepflichtregeln Ihrer Einrichtung (u. a. Art. 9 DSGVO, § 203 StGB) und klären Sie vorab, ob die Nutzung einer privaten App erlaubt ist. PflegeAlltag ersetzt keine Pflegedokumentation.

Bei der privaten Pflege von Angehörigen gilt die Verarbeitung im Regelfall als ausschließlich persönliche oder familiäre Tätigkeit (Art. 2 Abs. 2 lit. c DSGVO).`,
          },
          {
            title: '5. Berechtigungen und Gerätefunktionen',
            content: null,
            bullets: [
              'Mitteilungen: Erinnerungen werden lokal auf dem Gerät geplant und angezeigt. Es gibt keinen Push-Server und keine Übertragung an uns.',
              'Face ID / Touch ID / Code: Die optionale App-Sperre nutzt die Systemfunktion von iOS. Biometrische Daten verlassen den sicheren Bereich Ihres Geräts nicht und sind für die App nicht lesbar.',
              'Schlüsselbund (Keychain): Dort wird das Datum des Testbeginns gespeichert, damit die 3-tägige Testphase nicht durch Neuinstallation erneut startet. Dieser Eintrag kann nach dem Löschen der App auf dem Gerät erhalten bleiben. Er enthält keine personenbezogenen Daten außer dem Datum.',
              'Lokale Einstellungen (UserDefaults): einfache App-Einstellungen und der gemerkte Kaufstatus.',
            ],
          },
          {
            title: '6. Käufe',
            content: `Der Kauf von „Basis" und „PRO" wird vollständig über Apple (App Store, StoreKit) abgewickelt. Apple verarbeitet Ihre Zahlungs- und Kontodaten als eigener Verantwortlicher nach der Datenschutzerklärung von Apple (https://www.apple.com/legal/privacy/de-ww/). Wir erhalten keine personenbezogenen Daten zu Ihrem Kauf. Die App prüft den Kaufstatus lokal über StoreKit.`,
          },
          {
            title: '7. Export und Teilen',
            content: `Wenn Sie Daten exportieren (z. B. Übergabe-PDF oder JSON-Datei) oder teilen, geschieht das nur auf Ihre Veranlassung über die iOS-Teilen-Funktion. Ab dem Moment der Weitergabe sind Sie für den Empfänger und den Übertragungsweg verantwortlich. Bitte geben Sie Daten Dritter nur weiter, wenn Sie dazu berechtigt sind.`,
          },
          {
            title: '8. Datensicherung durch das Betriebssystem',
            content: `Je nach Ihren iOS-Einstellungen kann die App-Datei in einer verschlüsselten iCloud- oder Computer-Sicherung Ihres Geräts enthalten sein. Das wird von Apple gesteuert, nicht von uns.`,
          },
          {
            title: '9. Website und Kontakt',
            content: `Beim Aufruf unserer Website und von Support-Seiten werden technisch notwendige Server-Protokolldaten verarbeitet (u. a. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Sicherheit und Fehlerbehebung). Die Website wird bei Vercel Inc. (USA) mit Rechenzentrum in der EU gehostet; Grundlage der Übermittlung sind EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Weitere Informationen finden Sie in der allgemeinen Datenschutzerklärung von onetitel.de (https://www.onetitel.de/datenschutz).

Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse und Ihre Nachricht zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Wir löschen die Korrespondenz, sobald die Anfrage erledigt ist und keine Aufbewahrungspflichten bestehen. Bitte senden Sie uns keine Gesundheitsdaten Dritter.`,
          },
          {
            title: '10. Speicherdauer und Löschung',
            content: null,
            bullets: [
              'In der App: bis Sie die Daten selbst löschen. Unter Einstellungen → Alle Daten löschen werden alle Eingaben unwiderruflich entfernt. Auch das Löschen der App entfernt die Daten vom Gerät.',
              'Support-Korrespondenz: bis zur Erledigung, danach Löschung (gesetzliche Aufbewahrungsfristen bleiben unberührt).',
            ],
          },
          {
            title: '11. Ihre Rechte',
            content: `Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf erteilter Einwilligungen (Art. 7 Abs. 3). Da wir App-Eingaben nicht erhalten, können wir dazu nur Auskunft über die oben genannten Verarbeitungen geben. Wenden Sie sich an: info@onetitel.de`,
          },
          {
            title: '12. Beschwerderecht',
            content: `Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist:\n\nDer Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz\nHintere Bleiche 34, 55116 Mainz\nwww.datenschutz.rlp.de`,
          },
          {
            title: '13. Kinder',
            content: 'Die App richtet sich an Erwachsene. Wir verarbeiten keine Daten von Kindern.',
          },
          {
            title: '14. Änderungen',
            content: 'Wir passen diese Erklärung an, wenn sich die App oder die Rechtslage ändert. Die aktuelle Fassung finden Sie unter dieser Adresse.',
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
                whiteSpace: 'pre-line',
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
          <a href="/pflegealltag/nutzungsbedingungen" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Nutzungsbedingungen</a>
          <a href="/pflegealltag/support" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Support</a>
          <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
        </div>
      </div>
    </main>
  )
}
