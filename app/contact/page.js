import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact GogyAI',
  description: 'Get in touch with the GogyAI team. We respond within 1–2 business days.',
  alternates: { canonical: 'https://gogyai.com/contact' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact GogyAI',
  url: 'https://gogyai.com/contact',
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-800 mb-3">Contact Us</h1>
        <p className="text-slate-600 mb-8">
          Have a question, suggestion, or found a bug? We'd love to hear from you. We typically respond within 1–2 business days.
        </p>
        <ContactForm />
      </div>
    </>
  )
}
