export const metadata = {
  title: 'Terms of Service — GogyAI',
  description: 'GogyAI terms of service — acceptable use policy, disclaimers, intellectual property, and availability.',
  alternates: { canonical: 'https://gogyai.com/terms-of-service' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service — GogyAI',
  url: 'https://gogyai.com/terms-of-service',
}

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: May 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Acceptable Use</h2>
          <p className="text-slate-600 leading-relaxed">GogyAI tools are provided for legitimate educational purposes only. You agree not to use the tools to generate harmful, illegal, or deceptive content. You must review all AI-generated content before distributing it to students or parents.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">No Liability for AI Output</h2>
          <p className="text-slate-600 leading-relaxed">GogyAI provides AI-generated content on an "as is" basis. We make no warranties about the accuracy, completeness, or suitability of any generated content. Teachers are solely responsible for reviewing and approving all content before use in educational settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Intellectual Property</h2>
          <p className="text-slate-600 leading-relaxed">Content you generate using GogyAI tools belongs to you. The GogyAI platform, code, design, and brand assets are the property of GogyAI. You may not reproduce or redistribute the GogyAI platform or brand without permission.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Service Availability</h2>
          <p className="text-slate-600 leading-relaxed">We strive to keep GogyAI available at all times, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the service at any time without notice.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Changes to Terms</h2>
          <p className="text-slate-600 leading-relaxed">We may update these terms at any time. Continued use of GogyAI after changes constitutes acceptance of the new terms.</p>
        </section>
      </div>
    </>
  )
}
