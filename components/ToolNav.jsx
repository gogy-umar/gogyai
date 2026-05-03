import Link from 'next/link'

export default function ToolNav({ prev, next }) {
  return (
    <nav className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 flex gap-4">
      {prev ? (
        <Link href={`/${prev.slug}`} className="flex-1 bg-brand-50 border border-brand-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-sm transition-all">
          <p className="text-xs text-slate-400 mb-1">← Previous</p>
          <p className="font-semibold text-brand-800 text-sm">{prev.name}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={`/${next.slug}`} className="flex-1 bg-brand-50 border border-brand-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-sm transition-all text-right">
          <p className="text-xs text-slate-400 mb-1">Next →</p>
          <p className="font-semibold text-brand-800 text-sm">{next.name}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
