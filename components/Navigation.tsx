'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/loesungen', label: 'Service' },
  { href: '/medienberichte', label: 'Medienberichte' },
  { href: '/beitraege', label: 'Beiträge' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/initiativen', label: 'Initiativen & Ventures' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü schließen bei Route-Wechsel
  useEffect(() => { setOpen(false); }, [pathname]);
  // Scroll sperren wenn Menü offen
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--bg)', borderBottom: '1px solid var(--border)'
    }}>
      {/* Social Bar — nur Desktop */}
      <div
        className="social-bar"
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '0.375rem 2rem',
          display: 'flex', justifyContent: 'flex-end', gap: '1.5rem'
        }}
      >
        {[
          { href: 'https://www.linkedin.com/in/oliver-m-mueller/', label: 'LinkedIn' },
          { href: 'https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles', label: 'XING' },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>
            {s.label}
          </a>
        ))}
      </div>

      {/* Logo Row */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '1rem 1.5rem', position: 'relative'
      }}>
        <Link href="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: 'clamp(1.2rem, 4vw, 2rem)', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--fg)', lineHeight: 1
          }}>
            OneTitel
          </div>
          <div style={{
            fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--muted)', marginTop: '0.2rem', fontWeight: 400
          }}>
            Sales. Consulting. Interim-Management
          </div>
        </Link>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-burger"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          style={{
            position: 'absolute', right: '1.25rem',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            gap: '5px', padding: '8px', zIndex: 60
          }}>
          <span style={{
            width: 24, height: 2, background: 'var(--fg)', display: 'block',
            transition: 'transform 0.25s, opacity 0.25s',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none'
          }} />
          <span style={{
            width: 24, height: 2, background: 'var(--fg)', display: 'block',
            transition: 'opacity 0.25s',
            opacity: open ? 0 : 1
          }} />
          <span style={{
            width: 24, height: 2, background: 'var(--fg)', display: 'block',
            transition: 'transform 0.25s, opacity 0.25s',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none'
          }} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="mobile-nav-links" style={{
        display: 'flex', justifyContent: 'center',
        flexWrap: 'wrap', borderTop: '1px solid var(--border)', padding: '0.4rem 1rem'
      }}>
        {navLinks.map(link => {
          const active = pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} style={{
              padding: '0.35rem 0.75rem', fontSize: '0.75rem',
              fontWeight: active ? 500 : 400, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: active ? 'var(--accent)' : 'var(--fg)',
              textDecoration: 'none'
            }}>
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, top: 0,
          background: 'var(--fg)', zIndex: 55,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          gap: '0.25rem', padding: '2rem'
        }}>
          {/* Close X */}
          <button onClick={() => setOpen(false)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--bg)', fontSize: '1.5rem', lineHeight: 1
            }}>
            ✕
          </button>

          {/* Logo im Overlay */}
          <div style={{
            position: 'absolute', top: '1.5rem', left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: '1.2rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--bg)',
            whiteSpace: 'nowrap'
          }}>
            OneTitel
          </div>

          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--bg)', textDecoration: 'none',
                fontSize: 'clamp(1.4rem, 5vw, 2rem)',
                fontWeight: 200, letterSpacing: '-0.01em',
                padding: '0.6rem 0', opacity: 0.9,
                textAlign: 'center', width: '100%',
                borderBottom: i < navLinks.length - 1
                  ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}>
              {link.label}
            </Link>
          ))}

          {/* Social Links im Overlay */}
          <div style={{
            marginTop: '2rem', display: 'flex', gap: '2rem'
          }}>
            {[
              { href: 'https://www.linkedin.com/in/oliver-m-mueller/', label: 'LinkedIn' },
              { href: 'https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles', label: 'XING' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  color: 'var(--bg)', textDecoration: 'none', opacity: 0.5,
                  fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase'
                }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
