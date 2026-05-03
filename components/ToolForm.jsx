'use client'
import { useState } from 'react'
import ToolOutput from './ToolOutput'
import BYOKModal from './BYOKModal'

export default function ToolForm({ fields, promptTemplate, toolSlug }) {
  const [values, setValues] = useState(
    Object.fromEntries(fields.map(f => [f.name, f.default ?? '']))
  )
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showBYOK, setShowBYOK] = useState(false)
  const [usingOwnKey, setUsingOwnKey] = useState(false)

  function buildPrompt() {
    let p = promptTemplate
    Object.entries(values).forEach(([k, v]) => {
      p = p.replaceAll(`{${k}}`, v)
    })
    return p
  }

  async function generate() {
    setLoading(true)
    setOutput('')
    const prompt = buildPrompt()
    const byokKey = localStorage.getItem('gemini_api_key')

    if (byokKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${byokKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
          }
        )
        const data = await res.json()
        setOutput(data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No output returned.')
        setLoading(false)
        return
      } catch {
        // fall through to server
      }
    }

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, toolSlug }),
    })
    const data = await res.json()

    if (data.rateLimited) {
      setShowBYOK(true)
      setLoading(false)
      return
    }
    setOutput(data.output ?? data.error ?? 'Something went wrong.')
    setLoading(false)
  }

  function handleChange(name, value) {
    setValues(v => ({ ...v, [name]: value }))
  }

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mt-4">
        {usingOwnKey && (
          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-4 text-sm text-green-700">
            <span>Using your API key</span>
            <button
              onClick={() => { localStorage.removeItem('gemini_api_key'); setUsingOwnKey(false) }}
              className="font-medium hover:underline"
            >
              Remove
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {fields.map(field => (
            <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
              <label htmlFor={`field-${field.name}`} className="block text-sm font-medium text-slate-700 mb-1">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={`field-${field.name}`}
                  name={field.name}
                  rows={4}
                  value={values[field.name]}
                  onChange={e => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder ?? ''}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                />
              ) : field.type === 'select' ? (
                <select
                  id={`field-${field.name}`}
                  name={field.name}
                  value={values[field.name]}
                  onChange={e => handleChange(field.name, e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  {field.options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={`field-${field.name}`}
                  name={field.name}
                  type={field.type ?? 'text'}
                  value={values[field.name]}
                  onChange={e => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder ?? ''}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-brand-800 text-white font-semibold py-3 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50 text-base"
        >
          {loading ? 'Generating…' : 'Generate'}
        </button>
      </div>

      <ToolOutput output={output} onRegenerate={generate} loading={loading} />

      {showBYOK && (
        <BYOKModal
          onClose={() => setShowBYOK(false)}
          onSave={() => setUsingOwnKey(true)}
        />
      )}
    </>
  )
}
