import type { Metadata } from 'next'
import { Shell, Header, Sections, Footer, type Section } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung PflegeHelfer | OneTitel',
  description: 'Datenschutzerklärung der iOS-App PflegeHelfer von OneTitel / Oliver Markus Müller.',
  alternates: { canonical: 'https://www.onetitel.de/pflegehelfer/datenschutz' },
}

const sections: Section[] = [
  {
    "title": "1. Verantwortlicher",
    "blocks": [
      {
        "p": "Oliver Markus Müller, OneTitel – Digital & Business Solutions\nAm Bruchborn 6, 54570 Kirchweiler, Deutschland\nE-Mail: info@onetitel.de\nUSt-IdNr.: DE326064654"
      }
    ]
  },
  {
    "title": "2. Das Wichtigste in Kürze",
    "blocks": [
      {
        "ul": [
          "PflegeHelfer hat **kein Benutzerkonto**, **keinen eigenen Server** und **kein Tracking**.",
          "Alle Eingaben (Person, Medikamente, Routinen, Atem- und Sauerstoff-Einträge, Geräte und Versorgung, Notizen) werden **ausschließlich auf Ihrem Gerät** gespeichert. Wir haben keinen Zugriff darauf und erhalten sie nicht.",
          "Es sind **keine Drittanbieter-SDKs** für Werbung, Analyse oder Absturzberichte eingebunden.",
          "App-Store-Angabe zum Datenschutz: „Daten werden nicht erfasst“."
        ]
      }
    ]
  },
  {
    "title": "3. Welche Daten die App auf Ihrem Gerät verarbeitet",
    "blocks": [
      {
        "p": "Sie entscheiden selbst, was Sie eingeben. Dazu können gehören:"
      },
      {
        "ul": [
          "Name oder Kürzel der gepflegten Person, Geburtsjahr, Hinweise, Notfallkontakte, Ärztinnen und Ärzte, Pflegedienst",
          "Medikamente (Name, Stärke, Einnahmezeiten, Vorrat) und deren Abhak-Verlauf",
          "Routinen und Erledigt-Status",
          "Atem- und Sauerstoff-Einträge (z. B. selbst gemessene Sättigung, Sauerstoff-Nutzungszeiten) und Notizen",
          "Geräte und Versorgung (Gerätename, Hotline, Kundennummer, Wartungs- und Bestellzeiten)",
          "Ihre Einstellungen (z. B. Mutmacher-Mitteilung, App-Sperre)"
        ]
      },
      {
        "p": "Diese Angaben können **Gesundheitsdaten** im Sinne des Art. 9 DSGVO sein. Sie werden nur lokal in einer geschützten Datei der App abgelegt (iOS-Dateischutz) und nicht an uns oder Dritte übertragen. Wir empfehlen, nur das Nötige einzutragen. PflegeHelfer wertet die Angaben nicht aus, bewertet keine Messwerte und gibt keine Empfehlungen."
      },
      {
        "p": "Rechtsgrundlage für die Verarbeitung auf Ihrem Gerät ist Ihre eigene Nutzung der App (Art. 6 Abs. 1 lit. b DSGVO, soweit wir überhaupt Verantwortlicher sind). Da die Daten nicht zu uns gelangen, verarbeiten wir sie nicht selbst."
      }
    ]
  },
  {
    "title": "4. Pflege von Angehörigen und Weitergabe",
    "blocks": [
      {
        "p": "PflegeHelfer richtet sich an Familien und Menschen, die privat pflegen. Bei der privaten Pflege von Angehörigen gilt die Verarbeitung im Regelfall als ausschließlich persönliche oder familiäre Tätigkeit (Art. 2 Abs. 2 lit. c DSGVO). Wenn Sie Daten an andere Familienmitglieder, Vertretungen oder einen Pflegedienst weitergeben (siehe Abschnitt 7), tragen Sie die Verantwortung dafür, dass die betroffene Person bzw. ihre Vertretung damit einverstanden ist."
      }
    ]
  },
  {
    "title": "5. Berechtigungen und Gerätefunktionen",
    "blocks": [
      {
        "ul": [
          "**Mitteilungen:** Erinnerungen (Medikamente, Routinen, Vorräte, Geräte-Wartung, optional die tägliche Mutmacher-Mitteilung) werden lokal auf dem Gerät geplant und angezeigt. Es gibt keinen Push-Server und keine Übertragung an uns.",
          "**Face ID / Touch ID / Code:** Die optionale App-Sperre nutzt die Systemfunktion von iOS. Biometrische Daten verlassen den sicheren Bereich Ihres Geräts nicht und sind für die App nicht lesbar.",
          "**Lokale Einstellungen (UserDefaults):** einfache App-Einstellungen (z. B. Bestätigung der Bedingungen, Einführung gesehen)."
        ]
      }
    ]
  },
  {
    "title": "6. Abonnement",
    "blocks": [
      {
        "p": "Das Abonnement von PflegeHelfer (monatlich oder jährlich, mit 7 Tagen kostenloser Testphase für berechtigte Neukundinnen und Neukunden) wird vollständig über Apple (App Store, StoreKit) abgewickelt. Apple verarbeitet Ihre Zahlungs- und Kontodaten als eigener Verantwortlicher nach der [Datenschutzerklärung von Apple](https://www.apple.com/legal/privacy/de-ww/). Wir erhalten **keine personenbezogenen Daten** zu Ihrem Abonnement. Die App prüft den Abo-Status lokal über StoreKit. Es gibt keinen eigenen Server zur Kaufprüfung."
      }
    ]
  },
  {
    "title": "7. Export und Teilen",
    "blocks": [
      {
        "p": "Wenn Sie Daten exportieren (z. B. Übergabe-PDF, Notfallblatt, Medikamentenplan oder JSON-Datei zum Import auf einem anderen Gerät) oder teilen, geschieht das nur auf Ihre Veranlassung über die iOS-Teilen-Funktion. Ab dem Moment der Weitergabe sind Sie für den Empfänger und den Übertragungsweg verantwortlich. Bitte geben Sie Daten Dritter nur weiter, wenn Sie dazu berechtigt sind."
      }
    ]
  },
  {
    "title": "8. Datensicherung durch das Betriebssystem",
    "blocks": [
      {
        "p": "Je nach Ihren iOS-Einstellungen kann die App-Datei in einer verschlüsselten iCloud- oder Computer-Sicherung Ihres Geräts enthalten sein. Das wird von Apple gesteuert, nicht von uns."
      }
    ]
  },
  {
    "title": "9. Website und Kontakt",
    "blocks": [
      {
        "p": "Beim Aufruf unserer Website und von Support-Seiten werden technisch notwendige Server-Protokolldaten verarbeitet (u. a. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Sicherheit und Fehlerbehebung). Die Website wird bei Vercel Inc. (USA) mit Rechenzentrum in der EU gehostet; Grundlage der Übermittlung sind EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Weitere Informationen finden Sie in der allgemeinen [Datenschutzerklärung von onetitel.de](https://www.onetitel.de/datenschutz)."
      },
      {
        "p": "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse und Ihre Nachricht zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Wir löschen die Korrespondenz, sobald die Anfrage erledigt ist und keine Aufbewahrungspflichten bestehen. Bitte senden Sie uns keine Gesundheitsdaten Dritter."
      }
    ]
  },
  {
    "title": "10. Speicherdauer und Löschung",
    "blocks": [
      {
        "ul": [
          "**In der App:** bis Sie die Daten selbst löschen. Unter *Mehr → Alle Daten löschen* werden alle Eingaben unwiderruflich entfernt. Auch das Löschen der App entfernt die Daten vom Gerät.",
          "**Support-Korrespondenz:** bis zur Erledigung, danach Löschung (gesetzliche Aufbewahrungsfristen bleiben unberührt)."
        ]
      }
    ]
  },
  {
    "title": "11. Ihre Rechte",
    "blocks": [
      {
        "p": "Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf erteilter Einwilligungen (Art. 7 Abs. 3). Da wir App-Eingaben nicht erhalten, können wir dazu nur Auskunft über die oben genannten Verarbeitungen geben. Wenden Sie sich an: info@onetitel.de"
      }
    ]
  },
  {
    "title": "12. Beschwerderecht",
    "blocks": [
      {
        "p": "Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist:\nDer Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz\nHintere Bleiche 34, 55116 Mainz\nwww.datenschutz.rlp.de"
      }
    ]
  },
  {
    "title": "13. Kinder",
    "blocks": [
      {
        "p": "Die App richtet sich an Erwachsene. Wir verarbeiten keine Daten von Kindern."
      }
    ]
  },
  {
    "title": "14. Änderungen",
    "blocks": [
      {
        "p": "Wir passen diese Erklärung an, wenn sich die App oder die Rechtslage ändert. Die aktuelle Fassung finden Sie unter dieser Adresse."
      }
    ]
  }
]

export default function Page() {
  return (
    <Shell>
      <Header title="Datenschutzerklärung" stand="Stand: Oktober 2026" />
      <Sections sections={sections} />
      <Footer />
    </Shell>
  )
}
