'use client'
import { useState } from 'react'

export default function BYOKModal({ onClose, onSave }) {
  const [key, setKey] = useState('')

  function handleSave() {
    if (!key.trim()) return
    localStorage.setItem('gemini_api_key', key.trim())
    onSave()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Free AI limit reached</h2>
        <p className="text-slate-600 mb-4">
          Our free AI limit is reached for now. Enter your free Gemini API key to continue.
        </p>
        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-brand-700 font-medium underline mb-4"
        >
          Get your free Gemini API key →
        </a>
        <label htmlFor="gemini-api-key" className="block text-sm font-medium text-slate-700 mb-1">
          Gemini API Key
        </label>
        <input
          id="gemini-api-key"
          name="gemini-api-key"
          type="password"
          value={key}
          onChange={e => setKey(e.target.value)}
          placeholder="Paste your Gemini API key here"
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 mb-4"
        />
        <p className="text-xs text-slate-600 mb-4">
          🔒 Your key is stored only in your browser. We never see it.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-brand-800 text-white font-semibold py-3 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Save &amp; Continue
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-slate-300 text-slate-600 font-semibold py-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}
