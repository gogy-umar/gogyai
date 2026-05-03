import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://gogyai.com'),
  title: { default: 'GogyAI — Free AI Tools for Teachers', template: '%s | GogyAI' },
  description: 'Free AI-powered tools for teachers worldwide. Generate lesson plans, quizzes, rubrics, parent emails and more. No login required.',
  openGraph: { siteName: 'GogyAI', type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
  verification: { google: 'WKECbAufAMcoa4I0SF1Eh-9m_mPrYCaxEJoVb7dfpmc' },
}

const siteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite',
  name: 'GogyAI', url: 'https://gogyai.com',
  description: 'Free AI tools for teachers worldwide',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://gogyai.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'GogyAI', url: 'https://gogyai.com', logo: 'https://gogyai.com/logo.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* AdSense script removed — add back when ready for ads */}
      </body>
    </html>
  )
}
