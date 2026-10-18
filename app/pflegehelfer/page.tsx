import type { Metadata } from 'next'
import { Shell, Header, Sections, Footer, type Section } from './legal-shell'

export const metadata: Metadata = {
  title: 'PflegeHelfer – Pflege zu Hause | OneTitel',
  description: 'PflegeHelfer: iOS-App für die Pflege zu Hause. Medikamente, Routinen, Notfallblatt und Übergabe. Alle Daten bleiben auf Ihrem iPhone.',
  alternates: { canonical: 'https://www.onetitel.de/pflegehelfer' },
}

const sections: Section[] = [
  {
    title: 'Pflege zu Hause, geteilt',
    blocks: [
      { p: 'PflegeHelfer unterstützt Familien, die einen Angehörigen zu Hause pflegen: Medikamente, Tagesablauf, Notfallinformationen und Übergabe an einem Ort.' },
      {
        ul: [
          'Medikamentenplan mit Erinnerungen, Vorrat und Hinweis bei knappem Bestand',
          'Routinen mit Vorlagen für Morgen, Abend, Trinken, Bewegung und Wochenaufgaben',
          'Person: Notfallkontakte, Ärztinnen und Ärzte, Pflegedienst, wichtige Hinweise',
          'Notfallblatt, Medikamentenplan und Übergabe als PDF, auch als Datei für ein anderes Gerät',
          'Atem und Sauerstoff: eigenes Tagebuch und Sauerstoff-Zähler (nur Aufzeichnung, keine Bewertung)',
          'Geräte und Versorgung: Hotline, Kundennummer, Vorräte, Wartung, Nachbestellung',
        ],
      },
    ],
  },
  {
    title: 'Datenschutz',
    blocks: [{ p: 'Kein Konto, kein Tracking, keine Werbung. Alle Daten bleiben auf Ihrem Gerät, auf Wunsch mit Face ID oder Code gesperrt.' }],
  },
  {
    title: 'Preis',
    blocks: [{ p: '7 Tage kostenlos testen, danach 7,99 € pro Monat oder 69,99 € pro Jahr. Das Abo verlängert sich automatisch, wenn es nicht mindestens 24 Stunden vor Ablauf in den Einstellungen Ihrer Apple-ID gekündigt wird. Ein Abo gilt für eine pflegebedürftige Person.' }],
  },
  {
    title: 'Wichtig',
    blocks: [{ p: 'PflegeHelfer ist kein Medizinprodukt, stellt keine Diagnose, berechnet keine Dosierung, bewertet keine Messwerte und ersetzt keine ärztliche oder pflegerische Beratung. Im Notfall: 112.' }],
  },
]

export default function Page() {
  return (
    <Shell>
      <Header title="PflegeHelfer" />
      <Sections sections={sections} />
      <Footer />
    </Shell>
  )
}
