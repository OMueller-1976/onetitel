"use client";

import { useState } from "react";

const DARK = "#2D2D2D";
const CREAM = "#FAFAFA";

export default function KontaktPage() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Kontaktanfrage von ${vorname} ${nachname}`);
    const body = encodeURIComponent(
      `Vorname: ${vorname}\nNachname: ${nachname}\nE-Mail: ${email}\n\n${nachricht}`
    );
    window.location.href = `mailto:BA@onetitel.de?subject=${subject}&body=${body}`;
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    fontSize: "1.125rem",
    fontFamily: "inherit",
    fontWeight: 300,
    color: DARK,
    background: "#fff",
    border: "1px solid #D0D0D0",
    borderRadius: 0,
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#888",
    marginBottom: "0.4rem",
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: DARK,
          color: "#fff",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            BA Digital Marketing · Kontakt
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Kontakt aufnehmen
          </h1>
        </div>
      </section>

      {/* Kontakt-Inhalt */}
      <section style={{ padding: "5rem 2rem", background: CREAM }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Linke Spalte — Kontaktinfos */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#aaa",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Kontaktdaten
            </p>

            <div style={{ marginBottom: "2.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: "0.5rem",
                }}
              >
                Adresse
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: DARK, fontWeight: 300, margin: 0 }}>
                Am Bruchborn 6<br />
                54570 Kirchweiler<br />
                Deutschland
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: "0.5rem",
                }}
              >
                E-Mail
              </p>
              <a
                href="mailto:BA@onetitel.de"
                style={{ fontSize: "1.125rem", color: DARK, textDecoration: "none", fontWeight: 400 }}
              >
                BA@onetitel.de
              </a>
            </div>

            <div
              style={{
                borderTop: `3px solid ${DARK}`,
                paddingTop: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: "#555",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Gerne auch ein Pitch-Deck als Anhang per E-Mail. Ich freue mich auf Eure Anfragen und melde mich zeitnah zurück.
              </p>
            </div>
          </div>

          {/* Rechte Spalte — Formular */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#aaa",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Nachricht senden
            </p>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Vorname</label>
                  <input
                    type="text"
                    required
                    value={vorname}
                    onChange={(e) => setVorname(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Nachname</label>
                  <input
                    type="text"
                    required
                    value={nachname}
                    onChange={(e) => setNachname(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>E-Mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Nachricht</label>
                <textarea
                  required
                  rows={6}
                  value={nachricht}
                  onChange={(e) => setNachricht(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.85rem 2.5rem",
                  background: DARK,
                  color: "#fff",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Absenden →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
