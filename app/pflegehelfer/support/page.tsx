import type { Metadata } from 'next'
import { Shell, Header, Sections, Footer, type Section } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Support PflegeHelfer | OneTitel',
  description: 'Support und häufige Fragen zur iOS-App PflegeHelfer.',
  alternates: { canonical: 'https://www.onetitel.de/pflegehelfer/support' },
}

const intro: Section[] = [{
  "title": "Kontakt",
  "blocks": [
    {
      "p": "Fragen, Fehler oder Wünsche? Schreiben Sie uns:"
    },
    {
      "p": "**E-Mail:** info@onetitel.de (Betreff: „PflegeHelfer“)\nWir antworten in der Regel innerhalb von 2 bis 3 Werktagen."
    },
    {
      "p": "Bitte schreiben Sie uns **keine Namen oder Gesundheitsdaten** der gepflegten Person. Nennen Sie stattdessen Ihr iPhone-Modell, die iOS-Version und die App-Version (*Mehr*, ganz unten bei „Version“) und beschreiben Sie, was passiert ist."
    }
  ]
}]
const faqs: Section[] = [
  {
    "title": "Ich bekomme keine Erinnerungen.",
    "blocks": [
      {
        "p": "Prüfen Sie in iOS *Einstellungen → Mitteilungen → PflegeHelfer*, ob Mitteilungen erlaubt sind, und ob ein Fokus oder der Energiesparmodus aktiv ist. iOS erlaubt maximal 64 geplante Mitteilungen; PflegeHelfer plant die nächsten 7 Tage und erneuert sie bei jedem App-Start."
      }
    ]
  },
  {
    "title": "Wie funktionieren Testphase und Abo?",
    "blocks": [
      {
        "p": "7 Tage kostenlos testen (wenn Sie dafür bei Apple berechtigt sind), danach 7,99 € pro Monat oder 69,99 € pro Jahr. Kündigung jederzeit in den Einstellungen Ihrer Apple-ID unter „Abonnements“ (in der App: *Mehr → Abo verwalten*), spätestens 24 Stunden vor Ende des Zeitraums."
      }
    ]
  },
  {
    "title": "Ich habe abonniert, aber die App ist gesperrt oder zeigt die Preise nicht.",
    "blocks": [
      {
        "p": "Tippen Sie in der Paywall oder unter *Mehr* auf „Käufe wiederherstellen“ (gleiche Apple-ID nötig) und prüfen Sie Ihre Internetverbindung."
      }
    ]
  },
  {
    "title": "Was passiert nach Ablauf des Abos?",
    "blocks": [
      {
        "p": "Ihre Daten bleiben erhalten. Die App wechselt in den Lesemodus: Ansehen und Exportieren sind möglich, neue Einträge nicht."
      }
    ]
  },
  {
    "title": "Kann ich Daten an Familie oder Vertretung weitergeben?",
    "blocks": [
      {
        "p": "Ja. Unter *Person* erstellen Sie Notfallblatt, Medikamentenplan und Übergabe als PDF. Unter *Mehr → Daten exportieren* erzeugen Sie eine Datei, die in PflegeHelfer auf einem anderen Gerät importiert werden kann (zusammenführen oder ersetzen)."
      }
    ]
  },
  {
    "title": "Wie sichere ich meine Daten oder wechsle das Gerät?",
    "blocks": [
      {
        "p": "Alle Daten liegen nur auf Ihrem Gerät. Nutzen Sie den Export (JSON) unter *Mehr → Daten* oder eine verschlüsselte iCloud-/Computer-Sicherung von iOS. Es gibt keinen Server und kein Konto, deshalb können wir Daten nicht wiederherstellen."
      }
    ]
  },
  {
    "title": "Wie lösche ich alle Daten?",
    "blocks": [
      {
        "p": "*Mehr → Alle Daten löschen*. Das ist endgültig. Auch das Löschen der App entfernt die Daten."
      }
    ]
  },
  {
    "title": "Ist PflegeHelfer ein Medizinprodukt?",
    "blocks": [
      {
        "p": "Nein. Die App gibt keine Diagnose-, Dosierungs- oder Therapieempfehlung, bewertet keine Werte und ersetzt keine ärztliche Beratung."
      }
    ]
  }
]

export default function Page() {
  return (
    <Shell>
      <Header title="Support" />
      <Sections sections={intro} />
      <Sections sections={[{ title: 'Häufige Fragen', blocks: [] }, ...faqs]} />
      <Footer />
    </Shell>
  )
}
