'use client'
import { useState } from 'react'

function inline(text) {
  const parts = []
  const re = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g
  let last = 0, m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[2]) parts.push(<strong key={m.index}><em>{m[2]}</em></strong>)
    else if (m[3]) parts.push(<strong key={m.index}>{m[3]}</strong>)
    else if (m[4]) parts.push(<em key={m.index}>{m[4]}</em>)
    else if (m[5]) parts.push(
      <code key={m.index} className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded text-xs font-mono">
        {m[5]}
      </code>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length ? parts : text
}

function parseContentLines(lines) {
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const sub = line.match(/^###?\s+(.+)/)
    if (sub) { blocks.push({ type: 'sub', text: sub[1] }); i++; continue }
    if (/^[-*+]\s/.test(line)) {
      const items = []
      while (i < lines.length && /^[-*+]\s/.test(lines[i]))
        items.push(lines[i].replace(/^[-*+]\s+/, '')), i++
      blocks.push({ type: 'ul', items }); continue
    }
    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i]))
        items.push(lines[i].replace(/^\d+\.\s+/, '')), i++
      blocks.push({ type: 'ol', items }); continue
    }
    blocks.push({ type: 'p', text: line }); i++
  }
  return blocks
}

function SectionContent({ lines }) {
  const blocks = parseContentLines(lines)
  if (!blocks.length) return null
  return (
    <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
      {blocks.map((b, i) => {
        if (b.type === 'sub') return (
          <p key={i} className="font-semibold text-slate-800 pt-1">{inline(b.text)}</p>
        )
        if (b.type === 'ul') return (
          <ul key={i} className="list-disc pl-5 space-y-1">
            {b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}
          </ul>
        )
        if (b.type === 'ol') return (
          <ol key={i} className="list-decimal pl-5 space-y-1">
            {b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}
          </ol>
        )
        return <p key={i}>{inline(b.text)}</p>
      })}
    </div>
  )
}

function groupSections(text) {
  const raw = text.split('\n')
  const hasH2 = raw.some(l => /^##\s/.test(l.trim()))
  const hasH3 = raw.some(l => /^###\s/.test(l.trim()))
  const sections = []
  let cur = null

  for (const line of raw) {
    const t = line.trim()
    if (!t) continue

    if (/^#\s/.test(t)) {
      if (cur) sections.push(cur)
      cur = { type: 'title', label: t.replace(/^#\s+/, ''), lines: [] }
      continue
    }
    if (/^##\s/.test(t)) {
      if (cur) sections.push(cur)
      cur = { type: 'section', label: t.replace(/^##\s+/, ''), lines: [] }
      continue
    }
    if (/^###\s/.test(t) && !hasH2) {
      if (cur) sections.push(cur)
      cur = { type: 'section', label: t.replace(/^###\s+/, ''), lines: [] }
      continue
    }
    if (!hasH2 && !hasH3 && /^\*\*[^*\n]+\*\*:?\s*$/.test(t)) {
      if (cur) sections.push(cur)
      cur = { type: 'section', label: t.replace(/^\*\*(.+?)\*\*:?\s*$/, '$1'), lines: [] }
      continue
    }
    if (!cur) cur = { type: 'section', label: '', lines: [] }
    cur.lines.push(t)
  }
  if (cur) sections.push(cur)
  return sections.filter(s => s.label || s.lines.length)
}

function ResultSections({ text }) {
  const sections = groupSections(text)
  return (
    <div className="space-y-3">
      {sections.map((sec, idx) => {
        if (sec.type === 'title') return (
          <h2 key={idx} className="text-base font-bold text-slate-900 pb-1 border-b border-slate-200">
            {inline(sec.label)}
          </h2>
        )
        return (
          <div key={idx} className="rounded-lg border border-slate-200 overflow-hidden">
            {sec.label && (
              <div className="bg-brand-800 px-3 py-2 sm:px-4">
                <span className="text-white font-semibold text-xs sm:text-sm leading-snug">
                  {inline(sec.label)}
                </span>
              </div>
            )}
            <div className="px-3 py-3 sm:px-4 sm:py-4 bg-white">
              <SectionContent lines={sec.lines} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ToolOutput({ output, onRegenerate, loading }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!output && !loading) return null

  return (
    <div className="mt-6 rounded-2xl border border-brand-100 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-brand-50 border-b border-brand-100">
        <h3 className="font-semibold text-brand-800 text-sm">Generated Output</h3>
        <div className="flex gap-2">
          {output && (
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-1.5 sm:px-4 rounded-lg border border-brand-100 text-brand-700 hover:bg-brand-100 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
          {onRegenerate && (
            <button
              onClick={onRegenerate}
              disabled={loading}
              className="text-xs px-3 py-1.5 sm:px-4 rounded-lg bg-brand-800 text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Generating…' : 'Regenerate'}
            </button>
          )}
        </div>
      </div>

      <div className="p-3 sm:p-5">
        {loading ? (
          <div className="flex items-center gap-3 text-slate-600 py-3 text-sm">
            <span className="w-5 h-5 border-2 border-brand-600 border-t-transparent rounded-full animate-spin inline-block shrink-0" />
            Generating your content…
          </div>
        ) : (
          <ResultSections text={output} />
        )}
      </div>
    </div>
  )
}
