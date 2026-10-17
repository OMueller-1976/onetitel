import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen LehrerAlltag | OneTitel',
  description: 'Nutzungsbedingungen der iOS-App LehrerAlltag von OneTitel / Oliver Markus Müller.',
  alternates: {
    canonical: 'https://www.onetitel.de/lehreralltag/nutzungsbedingungen',
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

export default function LehrerAlltagNutzungsbedingungen() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
          LehrerAlltag · iOS App
        </p>
        <h1 style={{ fontFamily: 'Jost, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0A0A0A', marginBottom: '8px' }}>
          Nutzungsbedingungen
        </h1>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#999', marginBottom: '48px' }}>
          Stand: Oktober 2026
        </p>

        {/* 1 */}
        <section aria-labelledby="nb-1" style={{ marginBottom: '40px' }}>
          <h2 id="nb-1" style={h2}>1. Anbieter und Geltung</h2>
          <p style={p}>
            Anbieter der App ist Oliver Markus Müller, OneTitel – Digital &amp; Business Solutions, Am Bruchborn 6, 54570 Kirchweiler, Deutschland (<a href="mailto:info@onetitel.de" style={a}>info@onetitel.de</a>). Mit dem Laden und Nutzen der App gelten diese Bedingungen zusammen mit der{' '}
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" style={a}>Apple-Standardlizenzvereinbarung (EULA)</a>.
            Bei Widersprüchen gilt für das Verhältnis zu Apple die EULA.
          </p>
        </section>

        {/* 2 */}
        <section aria-labelledby="nb-2" style={{ marginBottom: '40px' }}>
          <h2 id="nb-2" style={h2}>2. Leistung</h2>
          <p style={p}>
            LehrerAlltag ist ein persönliches Organisationswerkzeug für Lehrkräfte an Grundschulen und in der Mittelstufe: Stundenplan, Aufgaben, Klassen, Notizen, Unterrichtswerkzeuge, Textbausteine, Elterngespräche, Entlastung, ein Ratgeber und in PRO ein Mail-Assistent. Alle Daten bleiben auf Ihrem Gerät. Es gibt kein Benutzerkonto.
          </p>
        </section>

        {/* 3 */}
        <section aria-labelledby="nb-3" style={{ marginBottom: '40px' }}>
          <h2 id="nb-3" style={h2}>3. Testphase, Preise, Freischaltungen</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={li}><strong>Testphase:</strong> Nach der ersten Nutzung können Sie alle Funktionen <strong>3 Tage kostenlos</strong> testen. Die Testphase ist eine zeitliche Sperre in der App, kein Abonnement und keine Zahlungspflicht.</li>
            <li style={li}><strong>Basis:</strong> Nach der Testphase benötigen Sie die Freischaltung „Basis" als <strong>Einmalkauf (9,99 €)</strong>.</li>
            <li style={li}><strong>PRO:</strong> Die Freischaltung „PRO" (Vollfunktion) ist ein <strong>zusätzlicher Einmalkauf (19,99 €)</strong> und setzt „Basis" voraus.</li>
            <li style={li}>Es gibt <strong>keine Abonnements</strong> und keine automatische Verlängerung.</li>
            <li style={li}>Preise inkl. gesetzlicher Umsatzsteuer; in anderen Ländern gelten die im App Store angezeigten Preise.</li>
            <li style={li}>Die Zahlung wird von Apple abgewickelt. Käufe können über „Käufe wiederherstellen" auf anderen Geräten derselben Apple-ID erneut freigeschaltet werden. Familienfreigabe richtet sich nach den Einstellungen von Apple.</li>
            <li style={li}>Nach Ablauf der Testphase ohne Kauf bleiben Ihre Daten erhalten und können exportiert werden. Die weitere Nutzung der App erfordert „Basis".</li>
          </ul>
        </section>

        {/* 4 */}
        <section aria-labelledby="nb-4" style={{ marginBottom: '40px' }}>
          <h2 id="nb-4" style={h2}>4. Widerruf und Erstattung</h2>
          <p style={p}>
            Der Kauf erfolgt über Apple. Widerrufsrecht und Erstattungen richten sich nach den Bedingungen von Apple und der Apple-Erstattungsseite (reportaproblem.apple.com). Als Verbraucher haben Sie bei digitalen Inhalten grundsätzlich ein 14-tägiges Widerrufsrecht; es erlischt, wenn die Ausführung mit Ihrer ausdrücklichen Zustimmung begonnen hat und Sie bestätigt haben, dass Sie dadurch Ihr Widerrufsrecht verlieren. Apple weist hierauf beim Kauf hin.
          </p>
        </section>

        {/* 5 */}
        <section aria-labelledby="nb-5" style={{ marginBottom: '40px' }}>
          <h2 id="nb-5" style={h2}>5. Wichtige Hinweise zur Nutzung</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ ...li, marginBottom: '12px' }}>
              <strong>Keine amtliche Verwaltung.</strong> LehrerAlltag ersetzt weder Schulverwaltungssoftware noch amtliche Notenlisten, Klassenbuch, Zeugnisse oder Fehlzeitenführung. Leistungsnotizen und Schnitte sind eigene Hilfsrechnungen; verbindlich sind allein Ihre amtlichen Unterlagen und die Vorgaben Ihres Bundeslandes.
            </li>
            <li style={{ ...li, marginBottom: '12px' }}>
              <strong>Mail-Assistent (PRO).</strong> Der Assistent erkennt Anliegen in eingefügten Mails anhand einfacher Regeln, schlägt Termine aus Ihrem Kalender vor und entwirft Antworten. Er kann sich irren. <strong>Sie prüfen jede Antwort und geben sie selbst frei;</strong> es wird nichts automatisch gesendet. Bei Konflikten, Beschwerden oder sensiblen Anliegen ersetzt der Entwurf nicht Ihr Urteil und ggf. die Rücksprache mit der Schulleitung.
            </li>
            <li style={{ ...li, marginBottom: '12px' }}>
              <strong>Ratgeber.</strong> Die Inhalte (u. a. Kommunikation, Datenschutz, Aufsichtspflicht) dienen der allgemeinen Information, nennen Quellen und Stand und sind keine Rechtsberatung. Landesrecht und Dienstvorschriften unterscheiden sich. Bitte prüfen Sie verbindliche Auskünfte bei Schulleitung, Schulaufsicht, Personalrat oder Rechtsberatung.
            </li>
            <li style={{ ...li, marginBottom: '12px' }}>
              <strong>Entlastung, Coaching, Konfliktgespräch.</strong> Diese Funktionen sind Anregungen zur Selbstreflexion. Sie ersetzen keine Therapie, Supervision oder Beratung. Bei starker Belastung nutzen Sie professionelle Hilfe, z. B. die TelefonSeelsorge (<strong>0800 111 0 111</strong>, kostenfrei).
            </li>
            <li style={{ ...li, marginBottom: '12px' }}>
              <strong>Erinnerungen</strong> sind eine Unterstützung. Mitteilungen können durch iOS-Einstellungen (z. B. Fokus, Energiesparmodus, deaktivierte Mitteilungen) verzögert werden oder ausbleiben. Verlassen Sie sich bei wichtigen Fristen nicht allein auf die App.
            </li>
            <li style={li}>
              <strong>Notfall.</strong> Bei einem Notfall wählen Sie den Notruf <strong>112</strong>. Das Notfallblatt der App ersetzt keine offiziellen Notfallunterlagen der Schule.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section aria-labelledby="nb-6" style={{ marginBottom: '40px' }}>
          <h2 id="nb-6" style={h2}>6. Pflichten der Nutzerinnen und Nutzer</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={li}>Sie sind für die Inhalte verantwortlich, die Sie eingeben, und für die Rechtmäßigkeit der Verarbeitung von Schülerdaten (Vorgaben von Schulleitung, Schulgesetz, Datenschutzregeln Ihres Landes).</li>
            <li style={li}>Verwenden Sie nach Möglichkeit nur Vornamen oder Kürzel.</li>
            <li style={li}>Sichern Sie Ihr Gerät (Code, Face ID) und aktivieren Sie bei Bedarf die App-Sperre.</li>
            <li style={li}>Da es kein Konto und keinen Server gibt, sind Datensicherungen Ihre Aufgabe (z. B. über den Export oder die Geräte-Sicherung). Beim Verlust des Geräts oder Löschen der App können Daten unwiederbringlich verloren gehen.</li>
          </ul>
        </section>

        {/* 7 */}
        <section aria-labelledby="nb-7" style={{ marginBottom: '40px' }}>
          <h2 id="nb-7" style={h2}>7. Nutzungsrechte</h2>
          <p style={p}>
            Sie erhalten ein einfaches, nicht übertragbares Recht, die App auf Ihren Apple-Geräten gemäß der Apple-EULA zu nutzen. Inhalte, Gestaltung und Texte der App sind urheberrechtlich geschützt.
          </p>
        </section>

        {/* 8 */}
        <section aria-labelledby="nb-8" style={{ marginBottom: '40px' }}>
          <h2 id="nb-8" style={h2}>8. Haftung und Haftungsausschluss</h2>
          <p style={{ ...p, marginBottom: '16px' }}>
            <strong>Reines Hilfswerkzeug.</strong> LehrerAlltag speichert Eingaben ausschließlich lokal auf Ihrem Apple-Gerät. Wir haben darauf keinen Zugriff und keinen Einfluss. Für die Sicherheit Ihres Geräts, Datensicherungen, den Schutz der Daten Dritter sowie die Einhaltung von Schul-, Datenschutz- und Dienstvorgaben sind allein Sie verantwortlich.
          </p>
          <p style={{ ...p, marginBottom: '16px' }}>
            <strong>Freistellung.</strong> Soweit gesetzlich zulässig, ist unsere Haftung für Schäden aus der Nutzung der App ausgeschlossen, insbesondere für Datenverlust, unbefugten Zugriff auf Ihr Gerät, ausgebliebene oder verspätete Erinnerungen, fehlerhafte Vorschläge oder Entwürfe des Mail-Assistenten, fehlerhafte oder veraltete Inhalte sowie für Entscheidungen, die Sie auf Grundlage der App treffen. Sie stellen uns von Ansprüchen Dritter frei, die daraus entstehen, dass Sie in der App Daten Dritter ohne die erforderliche Rechtsgrundlage verarbeiten.
          </p>
          <p style={p}>
            <strong>Gesetzliche Grenzen.</strong> Unberührt bleibt die Haftung für Vorsatz und grobe Fahrlässigkeit, für die Verletzung von Leben, Körper und Gesundheit, nach dem Produkthaftungsgesetz sowie bei Verletzung wesentlicher Vertragspflichten (hier beschränkt auf den vorhersehbaren, vertragstypischen Schaden). Zwingende Verbraucherrechte bleiben unberührt.
          </p>
        </section>

        {/* 9 */}
        <section aria-labelledby="nb-9" style={{ marginBottom: '40px' }}>
          <h2 id="nb-9" style={h2}>9. Änderungen der App und der Bedingungen</h2>
          <p style={p}>
            Wir können die App weiterentwickeln, Funktionen ändern oder einstellen, soweit das für Sie zumutbar ist. Bereits gekaufte Freischaltungen bleiben im bei Kauf beschriebenen Umfang erhalten. Änderungen dieser Bedingungen werden in der App oder auf dieser Seite bekannt gemacht.
          </p>
        </section>

        {/* 10 */}
        <section aria-labelledby="nb-10" style={{ marginBottom: '48px' }}>
          <h2 id="nb-10" style={h2}>10. Schlussbestimmungen</h2>
          <p style={p}>
            Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Verbraucherschutzvorschriften des Aufenthaltsstaats entzogen werden. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die EU-Plattform zur Online-Streitbeilegung finden Sie unter{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={a}>https://ec.europa.eu/consumers/odr</a>.
            Sollten einzelne Regelungen unwirksam sein, bleibt der Rest wirksam.
          </p>
        </section>

        {/* Nav */}
        <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/lehreralltag" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>← LehrerAlltag</a>
          <a href="/lehreralltag/datenschutz" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Datenschutz</a>
          <a href="/lehreralltag/support" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Support</a>
          <a href="/impressum" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' }}>Impressum</a>
        </div>
      </div>
    </main>
  )
}
