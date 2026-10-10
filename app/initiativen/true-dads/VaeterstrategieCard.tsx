'use client';

export default function VaeterstrategieCard() {
  return (
    <a
      href="https://www.vaeterstrategie.de"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-2xl no-underline"
    >
      <div className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-lg border border-border bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,0,0,0.12)] md:gap-8 md:p-10">
        {/* Icon / Initiale */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-td-navy text-xl tracking-wide text-white">
          VS
        </div>

        {/* Content */}
        <div>
          <div className="mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-td-navy">
              Empfehlung
            </span>
          </div>

          <h3 className="mb-1 text-xl font-medium tracking-tight text-ink md:text-2xl">
            VÄTERSTRATEGIE – Sabrina Schleifer
          </h3>

          <p className="mb-4 text-base italic text-td-navy">System. Klarheit. Kindeswohl.</p>

          <p className="mb-5 text-base leading-relaxed text-ink/75">
            Als System-Insiderin mit 15 Jahren Erfahrung in der Kinder- und
            Jugendhilfe begleitet Sabrina Schleifer Väter strategisch und
            verfahrensnah durch Trennung, Umgang und Sorgerecht — dort, wo
            Rechtsberatung und Therapie oft eine Lücke lassen.
            <br />
            <br />
            <strong className="font-medium">Fokus:</strong> Vaterrolle
            stärken, Bindung sichern, Kindeswohl wahren.
          </p>

          {/* Kontaktdaten */}
          <div className="mb-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/65">
            <span>📍 Hannover · bundesweit online</span>
            <span>📱 0155 / 6 322 122 6</span>
            <span>✉️ mail@vaeterstrategie.de</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-td-navy px-5 py-2.5 text-sm uppercase tracking-wider text-white">
              vaeterstrategie.de →
            </span>

            <a
              href="https://www.linkedin.com/in/sabrina-schleifer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-5 py-2.5 text-sm uppercase tracking-wider text-ink no-underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}
