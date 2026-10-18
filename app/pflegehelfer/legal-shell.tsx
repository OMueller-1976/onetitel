import type { ReactNode } from 'react'

const font = 'Jost, sans-serif'
const linkStyle = { fontFamily: font, fontSize: '0.9rem', color: '#0A0A0A', textDecoration: 'underline' } as const

/** Mini-Markdown: **fett**, *kursiv*, [Text](URL) */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) parts.push(<strong key={k++}>{tok.slice(2, -2)}</strong>)
    else if (tok.startsWith('[')) {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)!
      parts.push(<a key={k++} href={mm[2]} style={{ color: '#0A0A0A' }}>{mm[1]}</a>)
    } else parts.push(<em key={k++}>{tok.slice(1, -1)}</em>)
    last = m.index + tok.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export type Block = { p: string } | { ul: string[] }
export type Section = { title: string; blocks: Block[] }

export function Header({ title, stand }: { title: string; stand?: string }) {
  return (
    <>
      <p style={{ fontFamily: font, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
        PflegeHelfer · iOS App
      </p>
      <h1 style={{ fontFamily: font, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0A0A0A', marginBottom: '8px' }}>
        {title}
      </h1>
      {stand && <p style={{ fontFamily: font, fontSize: '0.9rem', color: '#999', marginBottom: '48px' }}>{stand}</p>}
    </>
  )
}

export function Footer() {
  return (
    <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <a href="/pflegehelfer" style={linkStyle}>← PflegeHelfer</a>
      <a href="/pflegehelfer/datenschutz" style={linkStyle}>Datenschutz</a>
      <a href="/pflegehelfer/nutzungsbedingungen" style={linkStyle}>Nutzungsbedingungen</a>
      <a href="/pflegehelfer/support" style={linkStyle}>Support</a>
      <a href="/impressum" style={linkStyle}>Impressum</a>
    </div>
  )
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>{children}</div>
    </main>
  )
}

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <div key={s.title} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: font, fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid #E0E0E0' }}>
            {s.title}
          </h2>
          {s.blocks.map((b, i) =>
            'p' in b ? (
              <p key={i} style={{ fontFamily: font, fontSize: '0.95rem', color: '#333', lineHeight: 1.75, marginBottom: '12px', whiteSpace: 'pre-line' }}>
                <Inline text={b.p} />
              </p>
            ) : (
              <ul key={i} style={{ paddingLeft: '20px', margin: '0 0 12px' }}>
                {b.ul.map((li, j) => (
                  <li key={j} style={{ fontFamily: font, fontSize: '0.95rem', color: '#333', lineHeight: 1.7, marginBottom: '8px' }}>
                    <Inline text={li} />
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      ))}
    </>
  )
}
