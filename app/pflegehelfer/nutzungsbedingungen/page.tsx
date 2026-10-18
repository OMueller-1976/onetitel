import type { Metadata } from 'next'
import { Shell, Header, Sections, Footer, type Section } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen PflegeHelfer | OneTitel',
  description: 'Nutzungsbedingungen der iOS-App PflegeHelfer von OneTitel / Oliver Markus Müller.',
  alternates: { canonical: 'https://www.onetitel.de/pflegehelfer/nutzungsbedingungen' },
}

const sections: Section[] = [
  {
    "title": "1. Anbieter und Geltung",
    "blocks": [
      {
        "p": "Anbieter der App ist Oliver Markus Müller, OneTitel – Digital & Business Solutions, Am Bruchborn 6, 54570 Kirchweiler, Deutschland (info@onetitel.de). Mit dem Laden und Nutzen der App gelten diese Bedingungen zusammen mit der [Apple-Standardlizenzvereinbarung (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Bei Widersprüchen gilt für das Verhältnis zu Apple die EULA."
      }
    ]
  },
  {
    "title": "2. Leistung",
    "blocks": [
      {
        "p": "PflegeHelfer ist ein Organisationswerkzeug für die private und häusliche Pflege, vor allem für pflegende Angehörige: Medikamentenplan mit Erinnerungen, Routinen, Personenprofil mit Notfallblatt, Atem- und Sauerstoff-Tagebuch, Geräte und Versorgung sowie Übergabe per PDF oder Datei. Alle Daten bleiben auf Ihrem Gerät. Es gibt kein Benutzerkonto. Pro Abonnement kann eine pflegebedürftige Person angelegt werden."
      }
    ]
  },
  {
    "title": "3. Abonnement, Testphase, Preise",
    "blocks": [
      {
        "ul": [
          "**Abonnement:** Die Vollfunktion ist ein automatisch verlängerndes Abonnement: **7,99 € pro Monat** oder **69,99 € pro Jahr**.",
          "**Testphase:** Neue Abonnentinnen und Abonnenten, die dafür nach den Regeln von Apple berechtigt sind, erhalten **7 Tage kostenlos**. Danach beginnt das gewählte Abonnement, sofern es nicht mindestens 24 Stunden vor Ende der Testphase gekündigt wird.",
          "**Abrechnung und Verlängerung:** Die Zahlung wird bei Bestätigung des Kaufs bzw. nach der Testphase Ihrer Apple-ID belastet. Das Abonnement verlängert sich automatisch um den gleichen Zeitraum, wenn es nicht mindestens 24 Stunden vor Ablauf des laufenden Zeitraums gekündigt wird.",
          "**Kündigung und Verwaltung:** In den Einstellungen Ihrer Apple-ID unter „Abonnements“ (in der App: *Mehr → Abo verwalten*). Eine Kündigung wirkt zum Ende des bezahlten Zeitraums.",
          "**Nach Ablauf:** Ihre Daten bleiben erhalten. Die App wechselt in einen **Lesemodus**: Sie können Einträge ansehen und exportieren (PDF, Datei), aber keine neuen Einträge anlegen oder ändern, bis Sie wieder abonnieren.",
          "Preise inkl. gesetzlicher Umsatzsteuer; in anderen Ländern gelten die im App Store angezeigten Preise. Käufe können über „Käufe wiederherstellen“ auf anderen Geräten derselben Apple-ID erneut freigeschaltet werden. Familienfreigabe richtet sich nach den Einstellungen von Apple."
        ]
      }
    ]
  },
  {
    "title": "4. Widerruf und Erstattung",
    "blocks": [
      {
        "p": "Der Kauf erfolgt über Apple. Widerrufsrecht und Erstattungen richten sich nach den Bedingungen von Apple und der Apple-Erstattungsseite (reportaproblem.apple.com). Als Verbraucher haben Sie bei digitalen Inhalten und Diensten grundsätzlich ein 14-tägiges Widerrufsrecht; es erlischt, wenn die Ausführung mit Ihrer ausdrücklichen Zustimmung begonnen hat und Sie bestätigt haben, dass Sie dadurch Ihr Widerrufsrecht verlieren. Apple weist hierauf beim Kauf hin."
      }
    ]
  },
  {
    "title": "5. Wichtige Hinweise zur Nutzung",
    "blocks": [
      {
        "ul": [
          "**Kein Medizinprodukt.** PflegeHelfer stellt keine Diagnose, gibt keine Dosierungs-, Therapie- oder Behandlungsempfehlung, berechnet keine Dosen, nennt keine Normbereiche und löst keine Grenzwert-Alarme. Werte (z. B. Sauerstoffsättigung) werden nur von Ihnen eingetragen und nicht bewertet. Medikamenten-, Atem- und Geräte-Funktionen dienen nur der Erinnerung und der eigenen Aufzeichnung nach ärztlicher Anweisung.",
          "**Sauerstoff und Geräte.** Anweisungen von Ärztinnen, Ärzten, Herstellern und Versorgern gehen der App immer vor. Sicherheitshinweise in der App ersetzen nicht deren Anleitungen.",
          "**Keine Pflegedokumentation und keine Beratung.** Die App ersetzt weder eine Pflegedokumentation noch ärztliche, pflegerische oder rechtliche Beratung. Texte und Hinweise sind allgemeine Informationen, freibleibend und ohne Gewähr auf Vollständigkeit, Richtigkeit und Aktualität.",
          "**Erinnerungen** sind eine Unterstützung. Mitteilungen können durch iOS-Einstellungen (z. B. Fokus, Energiesparmodus, deaktivierte Mitteilungen) verzögert werden oder ausbleiben. Verlassen Sie sich bei sicherheitsrelevanten Aufgaben, insbesondere bei Medikamenten, nicht allein auf die App.",
          "**Notfall.** Bei einem medizinischen Notfall wählen Sie den Notruf **112**."
        ]
      }
    ]
  },
  {
    "title": "6. Pflichten der Nutzerinnen und Nutzer",
    "blocks": [
      {
        "ul": [
          "Sie sind für die Inhalte verantwortlich, die Sie eingeben, und für die Rechtmäßigkeit der Verarbeitung Daten Dritter (Einwilligung der gepflegten Person oder ihrer Vertretung).",
          "Geben Sie Daten der gepflegten Person nur weiter (PDF, Datei), wenn sie oder ihre Vertretung damit einverstanden ist.",
          "Sichern Sie Ihr Gerät (Code, Face ID) und aktivieren Sie bei Bedarf die App-Sperre.",
          "Da es kein Konto und keinen Server gibt, sind Datensicherungen Ihre Aufgabe (z. B. über den Export oder die Geräte-Sicherung). Beim Verlust des Geräts oder Löschen der App können Daten unwiederbringlich verloren gehen."
        ]
      }
    ]
  },
  {
    "title": "7. Nutzungsrechte",
    "blocks": [
      {
        "p": "Sie erhalten ein einfaches, nicht übertragbares Recht, die App auf Ihren Apple-Geräten gemäß der Apple-EULA zu nutzen. Inhalte, Gestaltung und Texte der App sind urheberrechtlich geschützt."
      }
    ]
  },
  {
    "title": "8. Haftung und Haftungsausschluss",
    "blocks": [
      {
        "p": "**Reines Hilfswerkzeug.** PflegeHelfer speichert Eingaben ausschließlich lokal auf Ihrem Apple-Gerät. Wir haben darauf keinen Zugriff und keinen Einfluss. Für die Sicherheit Ihres Geräts, Datensicherungen, den Schutz der Daten Dritter sowie die Einhaltung von ärztliche Anweisungen sowie Datenschutzvorgaben sind allein Sie verantwortlich."
      },
      {
        "p": "**Freistellung.** Soweit gesetzlich zulässig, ist unsere Haftung für Schäden aus der Nutzung der App ausgeschlossen, insbesondere für Datenverlust, unbefugten Zugriff auf Ihr Gerät, ausgebliebene oder verspätete Erinnerungen, fehlerhafte oder veraltete Inhalte sowie für Entscheidungen, die Sie auf Grundlage der App treffen. Sie stellen uns von Ansprüchen Dritter frei, die daraus entstehen, dass Sie in der App Daten Dritter ohne die erforderliche Rechtsgrundlage verarbeiten."
      },
      {
        "p": "**Gesetzliche Grenzen.** Unberührt bleibt die Haftung für Vorsatz und grobe Fahrlässigkeit, für die Verletzung von Leben, Körper und Gesundheit, nach dem Produkthaftungsgesetz sowie bei Verletzung wesentlicher Vertragspflichten (hier beschränkt auf den vorhersehbaren, vertragstypischen Schaden). Zwingende Verbraucherrechte bleiben unberührt."
      }
    ]
  },
  {
    "title": "9. Änderungen der App und der Bedingungen",
    "blocks": [
      {
        "p": "Wir können die App weiterentwickeln, Funktionen ändern oder einstellen, soweit das für Sie zumutbar ist. Laufende Abonnements bleiben im bei Abschluss beschriebenen Umfang erhalten. Änderungen dieser Bedingungen werden in der App oder auf dieser Seite bekannt gemacht."
      }
    ]
  },
  {
    "title": "10. Schlussbestimmungen",
    "blocks": [
      {
        "p": "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Verbraucherschutzvorschriften des Aufenthaltsstaats entzogen werden. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die EU-Plattform zur Online-Streitbeilegung finden Sie unter https://ec.europa.eu/consumers/odr. Sollten einzelne Regelungen unwirksam sein, bleibt der Rest wirksam."
      }
    ]
  }
]

export default function Page() {
  return (
    <Shell>
      <Header title="Nutzungsbedingungen" stand="Stand: Oktober 2026" />
      <Sections sections={sections} />
      <Footer />
    </Shell>
  )
}
