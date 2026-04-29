import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
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
        Datenschutz
      </h1>

      <div style={{ fontSize: "1.125rem", lineHeight: 1.9, opacity: 0.75 }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", opacity: 1 }}>
          1. Datenschutz auf einen Blick
        </h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          2. Verantwortlicher
        </h2>
        <p>
          Oliver M. Müller<br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          E-Mail: <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>info@onetitel.de</a>
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          3. Datenerfassung auf dieser Website
        </h2>
        <p>
          <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
          werden Ihre Angaben aus dem Anfrageformular zur Bearbeitung der Anfrage bei uns gespeichert.
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          4. Analyse-Tools und Werbung
        </h2>
        <p>
          Diese Website kann Google Analytics nutzen, um anonymisierte Nutzungsstatistiken zu erheben.
          Sie können der Datenerfassung jederzeit widersprechen.
        </p>

        <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.5rem", marginTop: "2rem", opacity: 1 }}>
          5. Ihre Rechte
        </h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an:{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>info@onetitel.de</a>
        </p>
      </div>
    </section>
  );
}
