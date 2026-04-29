import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

const h2Style: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 500,
  marginBottom: "0.5rem",
  marginTop: "2.5rem",
  opacity: 1,
  letterSpacing: "-0.01em",
};

const h3Style: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 500,
  marginBottom: "0.3rem",
  marginTop: "1.5rem",
  opacity: 1,
};

export default function DatenschutzPage() {
  return (
    <section style={{ padding: "5rem 2rem 6rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 200,
          letterSpacing: "-0.03em",
          marginBottom: "3rem",
        }}
      >
        Datenschutzerklärung
      </h1>

      <div style={{ fontSize: "1.125rem", lineHeight: 1.9, opacity: 0.75 }}>

        {/* 1. Verantwortlicher */}
        <h2 style={h2Style}>1. Verantwortlicher</h2>
        <p>
          Oliver M. Müller<br />
          OneTitel – Digital &amp; Business Solutions<br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          E-Mail:{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>
            info@onetitel.de
          </a>
        </p>

        {/* 2. Allgemeines */}
        <h2 style={h2Style}>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
          möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies auf freiwilliger Basis. Diese Daten
          werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p>
          Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), soweit nicht anders angegeben.
        </p>

        {/* 3. Hosting / Vercel */}
        <h2 style={h2Style}>3. Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104,
          USA gehostet. Vercel verarbeitet beim Aufruf der Seite automatisch Verbindungsdaten
          (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Uhrzeit) in sog. Server-Logs.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einem sicheren und stabilen Betrieb der Website). Daten werden gelöscht,
          sobald sie für den Zweck ihrer Erhebung nicht mehr benötigt werden.
        </p>
        <p>
          Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>

        {/* 4. Google Tag Manager */}
        <h2 style={h2Style}>4. Google Tag Manager</h2>
        <p>
          Diese Website verwendet den Google Tag Manager (GTM) der Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Irland. GTM ist ein Tool, mit dem Marketer
          Website-Tags über eine Oberfläche verwalten können. GTM selbst setzt keine Cookies und
          erhebt keine personenbezogenen Daten. Es löst jedoch andere Tags aus, die ihrerseits
          Daten erheben können.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{" "}
          <a
            href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Google Tag Manager Nutzungsrichtlinien
          </a>
        </p>

        {/* 5. Google Analytics */}
        <h2 style={h2Style}>5. Google Analytics (GA4)</h2>
        <p>
          Diese Website nutzt Google Analytics 4 (GA4) der Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland. GA4 verwendet Cookies und ähnliche Technologien, um
          das Nutzerverhalten zu analysieren und Berichte über die Website-Aktivität zu erstellen.
        </p>
        <p>
          Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (inkl.
          Ihrer IP-Adresse) werden an einen Server von Google übertragen. Die IP-Adresse wird vor
          der Übertragung innerhalb der EU/EWR anonymisiert (IP-Anonymisierung).
        </p>
        <p>
          Sie können der Datenerhebung durch GA4 widersprechen, indem Sie das Google Analytics
          Opt-out Browser-Add-on installieren:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            tools.google.com/dlpage/gaoptout
          </a>
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
          Websiteanalyse zur Verbesserung des Angebots). Weitere Informationen:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            policies.google.com/privacy
          </a>
        </p>

        {/* 6. Kontaktformular */}
        <h2 style={h2Style}>6. Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
          Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage und für den Fall
          von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Vertragserfüllung /
          vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht,
          sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        {/* 7. Cookies */}
        <h2 style={h2Style}>7. Cookies</h2>
        <p>
          Diese Website setzt technisch notwendige Cookies, die für den Betrieb der Seite
          erforderlich sind. Darüber hinaus werden durch Google Analytics und Google Tag Manager
          Analyse-Cookies gesetzt (siehe Abschnitte 4 und 5).
        </p>
        <p>
          Sie können Cookies in Ihrem Browser deaktivieren oder löschen. Beachten Sie, dass die
          Website dann möglicherweise nicht vollständig funktioniert.
        </p>

        {/* 8. Ihre Rechte */}
        <h2 style={h2Style}>8. Ihre Rechte (Art. 15–21 DSGVO)</h2>
        <p>Sie haben das Recht auf:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", lineHeight: 2 }}>
          <li>
            <strong>Auskunft</strong> (Art. 15 DSGVO) – Welche Daten wir über Sie gespeichert
            haben.
          </li>
          <li>
            <strong>Berichtigung</strong> (Art. 16 DSGVO) – Korrektur unrichtiger Daten.
          </li>
          <li>
            <strong>Löschung</strong> (Art. 17 DSGVO) – Löschung Ihrer Daten, sofern keine
            Aufbewahrungspflicht besteht.
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO).
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO).
          </li>
          <li>
            <strong>Widerspruch</strong> (Art. 21 DSGVO) – Gegen die Verarbeitung auf Basis
            berechtigter Interessen.
          </li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>
            info@onetitel.de
          </a>
        </p>

        {/* 9. Aufsichtsbehörde */}
        <h2 style={h2Style}>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          Zuständige Behörde für Rheinland-Pfalz ist:
        </p>
        <p>
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
          Rheinland-Pfalz<br />
          Hintere Bleiche 34<br />
          55116 Mainz<br />
          Tel.: +49 6131 8920-0<br />
          E-Mail:{" "}
          <a href="mailto:poststelle@datenschutz.rlp.de" style={{ color: "inherit" }}>
            poststelle@datenschutz.rlp.de
          </a>
          <br />
          Website:{" "}
          <a
            href="https://www.datenschutz.rlp.de"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            www.datenschutz.rlp.de
          </a>
        </p>

        {/* 10. Aktualität */}
        <h2 style={h2Style}>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung hat den Stand April 2025. Wir behalten uns vor, diese
          Erklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht
          oder um Änderungen unserer Leistungen umzusetzen.
        </p>

      </div>
    </section>
  );
}
