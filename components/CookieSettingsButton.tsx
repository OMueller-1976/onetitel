'use client';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('onetitel_consent_v1');
        window.location.reload();
      }}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: '0.8rem', color: 'inherit', opacity: 0.4,
        textDecoration: 'none', letterSpacing: '0.04em',
        fontFamily: "'Jost', sans-serif", padding: 0,
      }}
    >
      Cookie-Einstellungen
    </button>
  );
}
