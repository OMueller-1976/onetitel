import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung LehrerAlltag | OneTitel',
  description: 'Datenschutzerklärung der iOS-App LehrerAlltag von OneTitel / Oliver Markus Müller.',
  alternates: {
    canonical: 'https://www.onetitel.de/lehreralltag/datenschutz',
  },
  robots: { index: true, follow: true },
}

const h2: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '1.15rem',
  fontWeight: 700,
  color: '#0A0A0A',
  marginBottom: '12px',
  paddingBottom: '8px',
  borderBottom: '1px solid #E0E0E0',
  marginTop: 0,
}

const p: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  color: '#333',
  lineHeight: 1.75,
  marginBottom: '12px',
}

const li: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  color: '#333',
  lineHeight: 1.7,
  marginBottom: '6px',
}

const a: React.CSSProperties = {
  color: '#2F7D5B',
  textDecoration: 'underline',
}

export default function LehrerAlltagDatenschutz() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
          LehrerAlltag · iOS App
        </p>
        <h1 style={{ fontFamily: 'Jost, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0A0A0A', marginBottom: '8px' }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#999', marginBottom: '48px' }}>
          Stand: Oktober 2026
        </p>

        {/* 1 */}
        <section aria-labelledby="ds-1" style={{ marginBottom: '40px' }}>
          <h2 id="ds-1" style={h2}>1. Verantwortlicher</h2>
          <p style={p}>
            Oliver Markus Müller, OneTitel – Digital &amp; Business Solutions<br />
            Am Bruchborn 6, 54570 Kirchweiler, Deutschland<br />
            E-Mail: <a href="mailto:info@onetitel.de" style={a}>info@onetitel.de</a><br />
            USt-IdNr.: DE326064654
          </p>
        </section>

        {/* 2 */}
        <section aria-labelledby="ds-2" style={{ marginBottom: '40px' }}>
          <h2 id="ds-2" style={h2}>2. Das Wichtigste in Kürze</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {[
              'LehrerAlltag hat kein Benutzerkonto, keinen eigenen Server und kein Tracking.',
              'Alle Eingaben (Klassen, Schüler-Kürzel, Stundenplan, Aufgaben, Notizen, Leistungsnotizen, Fehlzeiten, Elterngespräche) werden ausschließlich auf Ihrem Gerät gespeichert. Wir haben keinen Zugriff darauf und erhalten sie nicht.',
              'Es sind keine Drittanbieter-SDKs für Werbung, Analyse oder Absturzberichte eingebunden.',
              'Der Mail-Assistent (PRO) arbeitet auf Ihrem Gerät. Er liest keine Postfächer, sondern nur Mail-Texte, die Sie selbst einfügen. Es wird nichts automatisch versendet.',
              'App-Store-Angabe zum Datenschutz: „Daten werden nicht erfasst".',
            ].map((item, i) => <li key={i} style={li}>{item}</li>)}
          </ul>
        </section>

        {/* 3 */}
        <section aria-labelledby="ds-3" style={{ marginBottom: '40px' }}>
          <h2 id="ds-3" style={h2}>3. Welche Daten die App auf Ihrem Gerät verarbeitet</h2>
          <p style={p}>Sie entscheiden selbst, was Sie eingeben. Dazu können gehören:</p>
          <ul style={{ paddingLeft: '20px', margin: '0 0 12px' }}>
            {[
              'Ihr Name bzw. Ihre Anrede, Bundesland und Schulstufe',
              'Klassen, Stundenplan, Aufgaben, Notizen, Stimmungseinträge',
              'Schüler-Kürzel oder Vornamen, Sitzplatz, optional Kontaktangaben der Eltern (Name, E-Mail), Leistungsnotizen, Fehlzeiten, Gesprächsnotizen, Notfall-Hinweise',
              'Einstellungen des Mail-Assistenten (Gesprächszeiten, Dauer, Puffer, Signatur) und Fälle aus eingefügten Mails',
            ].map((item, i) => <li key={i} style={li}>{item}</li>)}
          </ul>
          <p style={p}>
            Diese Angaben sind personenbezogene Daten von Schülerinnen und Schülern (Minderjährigen) und können besonders schützenswert sein. Sie werden nur lokal in einer geschützten Datei der App abgelegt (iOS-Dateischutz) und nicht an uns oder Dritte übertragen. Wir empfehlen, <strong>nur Vornamen oder Kürzel</strong> zu verwenden und keine Nachnamen, Adressen, Diagnosen oder sensiblen Vorfälle einzutragen.
          </p>
          <p style={p}>
            Da die Daten nicht zu uns gelangen, verarbeiten wir sie nicht selbst. Soweit wir überhaupt als Verantwortlicher anzusehen sind, ist Rechtsgrundlage Ihre eigene Nutzung der App (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </section>

        {/* 4 */}
        <section aria-labelledby="ds-4" style={{ marginBottom: '40px' }}>
          <h2 id="ds-4" style={h2}>4. Dienstliche Nutzung</h2>
          <p style={p}>
            Wenn Sie LehrerAlltag im Rahmen Ihres Dienstes nutzen, sind Sie bzw. Ihr Dienstherr oder Ihre Schule für die Zulässigkeit der Verarbeitung von Schülerdaten verantwortlich. Die Regeln dazu unterscheiden sich je nach Bundesland (Schulgesetz, Datenschutzverordnung der Schulen, Vorgaben der Schulaufsicht). Bitte klären Sie vorab mit Ihrer Schulleitung bzw. dem Datenschutzbeauftragten, ob und welche Daten Sie auf einem privaten Gerät verarbeiten dürfen. LehrerAlltag ersetzt weder Schulverwaltungssoftware noch amtliche Zeugnis-, Noten- oder Fehlzeitenführung.
          </p>
        </section>

        {/* 5 */}
        <section aria-labelledby="ds-5" style={{ marginBottom: '40px' }}>
          <h2 id="ds-5" style={h2}>5. Berechtigungen und Gerätefunktionen</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {[
              { label: 'Mitteilungen:', text: 'Erinnerungen werden lokal auf dem Gerät geplant und angezeigt. Es gibt keinen Push-Server und keine Übertragung an uns.' },
              { label: 'Kalender (optional, PRO):', text: 'Mit Ihrer Erlaubnis liest die App Ihre Kalendertermine, um freie Zeiten für Elterngespräche zu finden, und legt auf Ihren Wunsch Termine an. Die Termindaten werden nur auf dem Gerät ausgewertet und nicht übertragen.' },
              { label: 'E-Mail (optional, PRO):', text: 'Zum Versenden einer von Ihnen freigegebenen Antwort öffnet die App den System-E-Mail-Dialog. Gesendet wird erst, wenn Sie dort selbst auf „Senden" tippen. Der Versand läuft über Ihr eigenes E-Mail-Konto in iOS, nicht über uns.' },
              { label: 'Einfügen aus der Zwischenablage:', text: 'Mail-Texte werden nur eingefügt, wenn Sie die Einfügen-Taste betätigen.' },
              { label: 'Apple Intelligence (optional):', text: 'Auf unterstützten Geräten kann der Antwortentwurf mit dem Sprachmodell von iOS auf dem Gerät sprachlich geglättet werden. Die Verarbeitung findet auf dem Gerät statt.' },
              { label: 'Face ID / Touch ID / Code:', text: 'Die optionale App-Sperre nutzt die Systemfunktion von iOS. Biometrische Daten verlassen den sicheren Bereich Ihres Geräts nicht und sind für die App nicht lesbar.' },
              { label: 'Siri / Kurzbefehle (PRO):', text: 'Eingaben über Siri werden von iOS verarbeitet; die App legt die Notiz lokal ab.' },
              { label: 'Schlüsselbund (Keychain):', text: 'Dort wird das Datum des Testbeginns gespeichert, damit die 3-tägige Testphase nicht durch Neuinstallation erneut startet. Dieser Eintrag kann nach dem Löschen der App auf dem Gerät erhalten bleiben. Er enthält keine personenbezogenen Daten außer dem Datum.' },
              { label: 'Lokale Einstellungen (UserDefaults):', text: 'einfache App-Einstellungen und der gemerkte Kaufstatus.' },
            ].map((item, i) => (
              <li key={i} style={li}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>

        {/* 6 */}
        <section aria-labelledby="ds-6" style={{ marginBottom: '40px' }}>
          <h2 id="ds-6" style={h2}>6. Käufe</h2>
          <p style={p}>
            Der Kauf von „Basis" und „PRO" wird vollständig über Apple (App Store, StoreKit) abgewickelt. Apple verarbeitet Ihre Zahlungs- und Kontodaten als eigener Verantwortlicher nach der{' '}
            <a href="https://www.apple.com/legal/privacy/de-ww/" target="_blank" rel="noopener noreferrer" style={a}>Datenschutzerklärung von Apple</a>.
            Wir erhalten <strong>keine personenbezogenen Daten</strong> zu Ihrem Kauf. Die App prüft den Kaufstatus lokal über StoreKit.
          </p>
        </section>

        {/* 7 */}
        <section aria-labelledby="ds-7" style={{ marginBottom: '40px' }}>
          <h2 id="ds-7" style={h2}>7. Export und Teilen</h2>
          <p style={p}>
            Wenn Sie Daten exportieren (CSV, PDF, JSON) oder teilen, geschieht das nur auf Ihre Veranlassung über die iOS-Teilen-Funktion. Ab der Weitergabe sind Sie für Empfänger und Übertragungsweg verantwortlich. Geben Sie Daten Dritter nur weiter, wenn Sie dazu berechtigt sind. Exporte mit Schülerdaten nur über dienstlich zulässige Wege versenden.
          </p>
        </section>

        {/* 8 */}
        <section aria-labelledby="ds-8" style={{ marginBottom: '40px' }}>
          <h2 id="ds-8" style={h2}>8. Datensicherung durch das Betriebssystem</h2>
          <p style={p}>
            Je nach Ihren iOS-Einstellungen kann die App-Datei in einer verschlüsselten iCloud- oder Computer-Sicherung Ihres Geräts enthalten sein. Das wird von Apple gesteuert, nicht von uns.
          </p>
        </section>

        {/* 9 */}
        <section aria-labelledby="ds-9" style={{ marginBottom: '40px' }}>
          <h2 id="ds-9" style={h2}>9. Website und Kontakt</h2>
          <p style={p}>
            Beim Aufruf unserer Website und von Support-Seiten werden technisch notwendige Server-Protokolldaten verarbeitet (u. a. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Sicherheit und Fehlerbehebung). Die Website wird bei Vercel Inc. (USA) mit Rechenzentrum in der EU gehostet; Grundlage der Übermittlung sind EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Weitere Informationen finden Sie in der allgemeinen{' '}
            <a href="https://www.onetitel.de/datenschutz" style={a}>Datenschutzerklärung von onetitel.de</a>.
          </p>
          <p style={p}>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse und Ihre Nachricht zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Wir löschen die Korrespondenz, sobald die Anfrage erledigt ist und keine Aufbewahrungspflichten bestehen. Bitte senden Sie uns keine Schülerdaten.
          </p>
        </section>

        {/* 10 */}
        <section aria-labelledby="ds-10" style={{ marginBottom: '40px' }}>
          <h2 id="ds-10" style={h2}>10. Speicherdauer und Löschung</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={li}><strong>In der App:</strong> bis Sie die Daten selbst löschen. Unter <em>Einstellungen → Alle Daten löschen</em> werden alle Eingaben unwiderruflich entfernt. Auch das Löschen der App entfernt die Daten vom Gerät. Löschfristen für Schülerdaten richten sich nach den Vorgaben Ihrer Schule bzw. Ihres Bundeslandes; löschen Sie Daten rechtzeitig.</li>
            <li style={li}><strong>Support-Korrespondenz:</strong> bis zur Erledigung, danach Löschung (gesetzliche Aufbewahrungsfristen bleiben unberührt).</li>
          </ul>
        </section>

        {/* 11 */}
        <section aria-labelledby="ds-11" style={{ marginBottom: '40px' }}>
          <h2 id="ds-11" style={h2}>11. Ihre Rechte</h2>
          <p style={p}>
            Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf erteilter Einwilligungen (Art. 7 Abs. 3). Da wir App-Eingaben nicht erhalten, können wir dazu nur Auskunft über die oben genannten Verarbeitungen geben. Wenden Sie sich an:{' '}
            <a href="mailto:info@onetitel.de" style={a}>info@onetitel.de</a>
          </p>
        </section>

        {/* 12 */}
        <section aria-labelledby="ds-12" style={{ marginBottom: '40px' }}>
          <h2 id="ds-12" style={h2}>12. Beschwerderecht</h2>
          <p style={p}>
            Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist:<br />
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
            Hintere Bleiche 34, 55116 Mainz<br />
            <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer" style={a}>www.datenschutz.rlp.de</a>
          </p>
        </section>

        {/* 13 */}
        <section aria-labelledby="ds-13" style={{ marginBottom: '40px' }}>
          <h2 id="ds-13" style={h2}>13. Kinder</h2>
          <p style={p}>
            Die App richtet sich an erwachsene Lehrkräfte. Schülerinnen und Schüler nutzen die App nicht. Wir verarbeiten keine Daten von Kindern; was Lehrkräfte über Schüler eingeben, bleibt auf deren Gerät (siehe Abschnitte 3 und 4).
          </p>
        </section>

        {/* 14 */}
        <section aria-labelledby="ds-14" style={{ marginBottom: '48px' }}>
          <h2 id="ds-14" style={h2}>14. Änderungen</h2>
          <p style={p}>
            Wir passen diese Erklärung an, wenn sich die App oder die Rechtslage ändert, insbesondere wenn eine direkte Postfach-Anbindung hinzukommt. Die aktuelle Fassung finden Sie unter dieser Adresse.
          </p>
        </section>

        {/* Nav */}
        <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/lehreralltag" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>← LehrerAlltag</a>
          <a href="/lehreralltag/nutzungsbedingungen" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Nutzungsbedingungen</a>
          <a href="/lehreralltag/support" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Support</a>
          <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
        </div>
      </div>
    </main>
  )
}
