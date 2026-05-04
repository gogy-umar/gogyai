'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gogyai.com' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `https://gogyai.com${item.url}`,
      })),
    ],
  }

  const allItems = [{ name: 'Home', url: '/' }, ...items]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-brand-50 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-600">
            {allItems.map((item, i) => (
              <li key={item.url} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true">›</span>}
                {i === allItems.length - 1 ? (
                  <span className="text-slate-700 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.url} className="hover:text-brand-700 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
