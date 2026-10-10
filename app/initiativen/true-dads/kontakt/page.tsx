"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const inputClass =
  "mb-7 w-full border-0 border-b border-td-navy/25 bg-transparent py-3 text-base font-light text-ink outline-none";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wider text-td-navy/70";

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
      <section className="bg-td-navy px-8 py-16 text-white">
        <Container>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            True Dads Deutschland · Kontakt
          </p>
          <h1 className="text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Kontakt aufnehmen
          </h1>
        </Container>
      </section>

      {/* Kontakt-Inhalt */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Links: Kontaktinfos */}
          <div>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-td-navy">
              Schreib uns
            </h2>
            <div className="mb-8 border-l-[3px] border-td-navy pl-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#888]">
                E-Mail
              </p>
              <a
                href="mailto:truedads@onetitel.de"
                className="text-lg font-medium tracking-tight text-td-navy no-underline"
              >
                truedads@onetitel.de
              </a>
            </div>
            <p className="text-lg font-light leading-relaxed text-[#666]">
              Ob persönliche Betroffenheit, Kooperationsanfragen oder Rückmeldung zum
              Leitfaden — wir freuen uns über jede Nachricht.
            </p>
          </div>

          {/* Rechts: Formular */}
          <div>
            {status === "sent" ? (
              <div className="py-12 text-center">
                <p className="mb-3 text-xl font-light text-td-navy">Vielen Dank!</p>
                <p className="text-lg font-light text-[#666]">
                  Dein E-Mail-Programm sollte sich geöffnet haben. Alternativ schreib uns direkt:{" "}
                  <a href="mailto:truedads@onetitel.de" className="font-medium text-td-navy">
                    truedads@onetitel.de
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Vorname *</label>
                    <input
                      required
                      type="text"
                      value={form.vorname}
                      onChange={(e) => setForm({ ...form, vorname: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Nachname *</label>
                    <input
                      required
                      type="text"
                      value={form.nachname}
                      onChange={(e) => setForm({ ...form, nachname: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <label className={labelClass}>E-Mail-Adresse *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />

                <label className={labelClass}>Nachricht</label>
                <textarea
                  value={form.nachricht}
                  onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                  rows={5}
                  className={`${inputClass} resize-y`}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center bg-td-navy px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
                >
                  {status === "sending" ? "Wird geöffnet…" : "Absenden"}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
