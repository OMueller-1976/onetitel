'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = 'onetitel_consent_v1';

function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function pushConsent(consent: ConsentState) {
  if (typeof window === 'undefined') return;
  // Google Consent Mode v2
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
  });
  // gtag consent update
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      pushConsent(stored);
    }
  }, []);

  function saveConsent(state: ConsentState) {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
    pushConsent(state);
    setVisible(false);
  }

  function acceptAll() {
    saveConsent({ analytics: true, marketing: true });
  }

  function acceptNecessary() {
    saveConsent({ analytics: false, marketing: false });
  }

  function saveCustom() {
    saveConsent(consent);
  }

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
        zIndex: 9998, backdropFilter: 'blur(2px)'
      }} />

      {/* Banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        zIndex: 9999, background: '#0A0A0A', color: '#F5F5F5',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        boxShadow: '0 -4px 40px rgba(0,0,0,0.4)',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 400,
              letterSpacing: '-0.01em', marginBottom: '0.75rem', color: '#F5F5F5'
            }}>
              Diese Website verwendet Cookies
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.7 }}>
              Wir verwenden Cookies und ähnliche Technologien, um unsere Website
              zu betreiben, den Traffic zu analysieren und unsere Dienste zu
              verbessern. Technisch notwendige Cookies werden immer gesetzt.
              Für Analyse-Cookies (Google Analytics) und Marketing-Cookies
              (Google Tag Manager) benötigen wir Ihre Einwilligung gemäß DSGVO.
            </p>
          </div>

          {/* Detail-Toggle */}
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#F5F5F5', opacity: 0.5, fontSize: '0.85rem',
                textDecoration: 'underline', padding: 0, marginBottom: '1.5rem',
                display: 'block'
              }}>
              Einstellungen anpassen ↓
            </button>
          ) : (
            <div style={{
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '6px', overflow: 'hidden'
            }}>
              {/* Notwendig */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>
                    Technisch notwendig
                  </span>
                  <span style={{
                    fontSize: '0.75rem', opacity: 0.4,
                    letterSpacing: '0.05em', textTransform: 'uppercase'
                  }}>
                    Immer aktiv
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, margin: 0, lineHeight: 1.6 }}>
                  Essenzielle Cookies für den Betrieb der Website (Session,
                  Sicherheit, Grundfunktionen). Keine Abschaltung möglich.
                </p>
              </div>

              {/* Analytics */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>
                    Analyse (Google Analytics 4)
                  </span>
                  <label style={{ display: 'flex', alignItems: 'center',
                    gap: '0.5rem', cursor: 'pointer' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                      {consent.analytics ? 'An' : 'Aus'}
                    </span>
                    <div
                      onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                      style={{
                        width: 44, height: 24, borderRadius: 12, cursor: 'pointer',
                        background: consent.analytics ? '#F5F5F5' : 'rgba(255,255,255,0.2)',
                        position: 'relative', transition: 'background 0.2s',
                        flexShrink: 0
                      }}>
                      <div style={{
                        position: 'absolute', top: 3, width: 18, height: 18,
                        borderRadius: '50%', transition: 'left 0.2s',
                        left: consent.analytics ? 23 : 3,
                        background: consent.analytics ? '#0A0A0A' : '#888'
                      }} />
                    </div>
                  </label>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, margin: 0, lineHeight: 1.6 }}>
                  Google Analytics 4 (G-TG10ER8DT7) analysiert anonymisiert
                  die Nutzung unserer Website. IP-Anonymisierung ist aktiviert.
                  Anbieter: Google Ireland Ltd, Dublin.
                </p>
              </div>

              {/* Marketing */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>
                    Marketing (Google Tag Manager)
                  </span>
                  <label style={{ display: 'flex', alignItems: 'center',
                    gap: '0.5rem', cursor: 'pointer' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                      {consent.marketing ? 'An' : 'Aus'}
                    </span>
                    <div
                      onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                      style={{
                        width: 44, height: 24, borderRadius: 12, cursor: 'pointer',
                        background: consent.marketing ? '#F5F5F5' : 'rgba(255,255,255,0.2)',
                        position: 'relative', transition: 'background 0.2s',
                        flexShrink: 0
                      }}>
                      <div style={{
                        position: 'absolute', top: 3, width: 18, height: 18,
                        borderRadius: '50%', transition: 'left 0.2s',
                        left: consent.marketing ? 23 : 3,
                        background: consent.marketing ? '#0A0A0A' : '#888'
                      }} />
                    </div>
                  </label>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, margin: 0, lineHeight: 1.6 }}>
                  Google Tag Manager (GTM-PRMD9DWW) verwaltet Marketing-Tags
                  und Tracking-Pixel. Anbieter: Google Ireland Ltd, Dublin.
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
            alignItems: 'center', justifyContent: 'flex-end'
          }}>
            <Link href="/datenschutz" style={{
              fontSize: '0.8rem', opacity: 0.45, color: '#F5F5F5',
              textDecoration: 'underline', marginRight: 'auto'
            }}>
              Datenschutz
            </Link>

            <button onClick={acceptNecessary} style={{
              background: 'transparent', border: '1px solid rgba(255,255,255,0.25)',
              color: '#F5F5F5', padding: '0.75rem 1.25rem', cursor: 'pointer',
              fontFamily: "'Jost', sans-serif", fontSize: '0.85rem',
              fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'border-color 0.2s', borderRadius: '2px'
            }}>
              Nur notwendige
            </button>

            {showDetails && (
              <button onClick={saveCustom} style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#F5F5F5', padding: '0.75rem 1.25rem', cursor: 'pointer',
                fontFamily: "'Jost', sans-serif", fontSize: '0.85rem',
                fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: '2px'
              }}>
                Auswahl speichern
              </button>
            )}

            <button onClick={acceptAll} style={{
              background: '#F5F5F5', border: '1px solid #F5F5F5',
              color: '#0A0A0A', padding: '0.75rem 1.75rem', cursor: 'pointer',
              fontFamily: "'Jost', sans-serif", fontSize: '0.85rem',
              fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
              borderRadius: '2px', transition: 'opacity 0.2s'
            }}>
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
