"use client";

import { useState } from "react";

const NAVY = "#1B3A6B";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid rgba(27,58,107,0.25)`,
  padding: "0.75rem 0",
  color: "#1a1a1a",
  fontFamily: "'Jost', sans-serif",
  fontSize: "1.125rem",
  fontWeight: 300,
  outline: "none",
  marginBottom: "1.75rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: NAVY,
  fontWeight: 600,
  opacity: 0.7,
  marginBottom: "0.25rem",
};

export default function TrueDadsKontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", nachricht: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`True Dads Kontakt: ${form.vorname} ${form.nachname}`);
    const body = encodeURIComponent(
      `Name: ${form.vorname} ${form.nachname}\nE-Mail: ${form.email}\n\nNachricht:\n${form.nachricht}`
    );
    window.location.href = `mailto:truedads@onetitel.de?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: NAVY, color: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.25rem",
            }}
          >
            True Dads Deutschland · Kontakt
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Kontakt aufnehmen
          </h1>
        </div>
      </section>

      {/* Kontakt-Inhalt */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Links: Kontaktinfos */}
          <div>
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 300,
                color: NAVY,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Schreib uns
            </h2>
            <div
              style={{
                borderLeft: `3px solid ${NAVY}`,
                paddingLeft: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", margin: "0 0 0.35rem", fontWeight: 600 }}>
                E-Mail
              </p>
              <a
                href="mailto:truedads@onetitel.de"
                style={{
                  fontSize: "1.125rem",
                  color: NAVY,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                truedads@onetitel.de
              </a>
            </div>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#666", fontWeight: 300 }}>
              Ob persönliche Betroffenheit, Kooperationsanfragen oder Rückmeldung zum
              Leitfaden — wir freuen uns über jede Nachricht.
            </p>
          </div>

          {/* Rechts: Formular */}
          <div>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 300, color: NAVY, marginBottom: "0.75rem" }}>
                  Vielen Dank!
                </p>
                <p style={{ fontSize: "1.125rem", color: "#666", fontWeight: 300 }}>
                  Dein E-Mail-Programm sollte sich geöffnet haben. Alternativ schreib uns direkt:{" "}
                  <a href="mailto:truedads@onetitel.de" style={{ color: NAVY, fontWeight: 500 }}>
                    truedads@onetitel.de
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2rem" }}>
                  <div>
                    <label style={labelStyle}>Vorname *</label>
                    <input
                      required
                      type="text"
                      value={form.vorname}
                      onChange={(e) => setForm({ ...form, vorname: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Nachname *</label>
                    <input
                      required
                      type="text"
                      value={form.nachname}
                      onChange={(e) => setForm({ ...form, nachname: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <label style={labelStyle}>E-Mail-Adresse *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />

                <label style={labelStyle}>Nachricht</label>
                <textarea
                  value={form.nachricht}
                  onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    fontFamily: "'Jost', sans-serif",
                  }}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    marginTop: "0.5rem",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.85rem 2rem",
                    background: NAVY,
                    color: "#fff",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  {status === "sending" ? "Wird geöffnet…" : "Absenden"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
