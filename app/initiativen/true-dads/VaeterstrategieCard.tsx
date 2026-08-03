'use client';

export default function VaeterstrategieCard() {
  return (
    <a
      href="https://www.vaeterstrategie.de"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="vaeterstrategie-card"
        style={{
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          background: '#FFFFFF',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.2s, transform 0.2s',
          maxWidth: '720px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(1.25rem, 3vw, 2rem)',
          alignItems: 'start',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(0,0,0,0.12)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Icon / Initiale */}
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: '#1B3A6B', color: '#FFFFFF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', fontWeight: 400,
          flexShrink: 0, letterSpacing: '0.02em',
        }}>
          VS
        </div>

        {/* Content */}
        <div>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{
              fontSize: '0.7rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#1B3A6B',
              fontWeight: 500,
            }}>
              Empfehlung
            </span>
          </div>

          <h3 style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 500, letterSpacing: '-0.01em',
            marginBottom: '0.25rem', color: '#0A0A0A',
          }}>
            VÄTERSTRATEGIE – Sabrina Schleifer
          </h3>

          <p style={{
            fontSize: '0.95rem', fontWeight: 400,
            color: '#1B3A6B', marginBottom: '1rem',
            fontStyle: 'italic',
          }}>
            System. Klarheit. Kindeswohl.
          </p>

          <p style={{
            fontSize: '1rem', lineHeight: 1.75,
            color: '#0A0A0A', opacity: 0.75,
            marginBottom: '1.25rem',
          }}>
            Als System-Insiderin mit 15 Jahren Erfahrung in der Kinder- und
            Jugendhilfe begleitet Sabrina Schleifer Väter strategisch und
            verfahrensnah durch Trennung, Umgang und Sorgerecht — dort, wo
            Rechtsberatung und Therapie oft eine Lücke lassen.
            <br /><br />
            <strong style={{ fontWeight: 500 }}>Fokus:</strong> Vaterrolle
            stärken, Bindung sichern, Kindeswohl wahren.
          </p>

          {/* Kontaktdaten */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2rem',
            fontSize: '0.875rem', opacity: 0.65, marginBottom: '1.5rem',
          }}>
            <span>📍 Hannover · bundesweit online</span>
            <span>📱 0155 / 6 322 122 6</span>
            <span>✉️ mail@vaeterstrategie.de</span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.25rem',
              background: '#1B3A6B', color: '#FFFFFF',
              borderRadius: '3px', fontSize: '0.8rem',
              fontWeight: 400, letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              vaeterstrategie.de →
            </span>

            <a
              href="https://www.linkedin.com/in/sabrina-schleifer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                border: '1px solid #E0E0E0',
                color: '#0A0A0A', borderRadius: '3px',
                fontSize: '0.8rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}
