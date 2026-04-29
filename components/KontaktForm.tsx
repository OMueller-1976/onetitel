"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    branche: "",
    unternehmen: "",
    nachricht: "",
  });

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(242,240,235,0.3)",
    padding: "0.75rem 0",
    color: "var(--bg)",
    fontFamily: "'Jost', sans-serif",
    fontSize: "1.125rem",
    fontWeight: 300,
    outline: "none",
    marginBottom: "1.75rem",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    opacity: 0.5,
    marginBottom: "0.25rem",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simple mailto fallback — no SMTP
    const subject = encodeURIComponent(`Anfrage von ${form.vorname} ${form.nachname}`);
    const body = encodeURIComponent(
      `Name: ${form.vorname} ${form.nachname}\nE-Mail: ${form.email}\nBranche: ${form.branche}\nUnternehmen: ${form.unternehmen}\n\nNachricht:\n${form.nachricht}`
    );
    window.location.href = `mailto:info@onetitel.de?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: 300, marginBottom: "0.75rem" }}>
          Vielen Dank!
        </p>
        <p style={{ fontSize: "1.125rem", opacity: 0.6 }}>
          Ihr E-Mail-Programm sollte sich geöffnet haben. Alternativ schreiben Sie uns direkt an{" "}
          <a href="mailto:info@onetitel.de" style={{ color: "inherit" }}>
            info@onetitel.de
          </a>
          .
        </p>
      </div>
    );
  }

  return (
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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2rem" }}>
        <div>
          <label style={labelStyle}>E-Mail-Adresse *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Branche</label>
          <input
            type="text"
            value={form.branche}
            onChange={(e) => setForm({ ...form, branche: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <label style={labelStyle}>Unternehmen / Organisation</label>
      <input
        type="text"
        value={form.unternehmen}
        onChange={(e) => setForm({ ...form, unternehmen: e.target.value })}
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
        className="btn-white"
        style={{ marginTop: "0.5rem" }}
      >
        {status === "sending" ? "Wird geöffnet…" : "Absenden"}
      </button>
    </form>
  );
}
