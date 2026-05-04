export const metadata = {
  title: 'Privacy Policy — GogyAI',
  description: 'GogyAI privacy policy — what data we collect (none from students), how API keys are stored, and your rights under GDPR and COPPA.',
  alternates: { canonical: 'https://gogyai.com/privacy-policy' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — GogyAI',
  url: 'https://gogyai.com/privacy-policy',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">Privacy Policy</h1>
        <p className="text-slate-600 text-sm mb-8">Last updated: May 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Data We Collect</h2>
          <p className="text-slate-600 leading-relaxed">GogyAI collects no personally identifiable information from users. We do not require any account registration. <strong>We collect zero student data.</strong> Form inputs you enter into our tools are sent to our server solely to generate AI responses and are not stored, logged, or linked to any user identity.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Cookies</h2>
          <p className="text-slate-600 leading-relaxed">We use minimal, essential cookies required for the site to function. We use Google AdSense to display ads, which may set its own cookies for ad personalization. You can opt out via Google's ad settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">API Key Storage (BYOK)</h2>
          <p className="text-slate-600 leading-relaxed">If you choose to enter your own Gemini API key, it is stored exclusively in your browser's <code>localStorage</code>. This key is never transmitted to GogyAI servers. You can remove it at any time via the "Remove" button in the tool interface.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Third-Party Services</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li><strong>Supabase</strong> — used for prompt caching (no user data)</li>
            <li><strong>Google Gemini API</strong> — AI generation (prompts only, no personal data)</li>
            <li><strong>Groq API</strong> — fallback AI generation</li>
            <li><strong>Google AdSense</strong> — display advertising</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">GDPR & COPPA</h2>
          <p className="text-slate-600 leading-relaxed">GogyAI does not collect personal data and therefore has minimal GDPR obligations. We do not knowingly collect any data from children under 13 (COPPA). Teachers using this platform should not enter any student personal data into our tools.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Contact</h2>
          <p className="text-slate-600 leading-relaxed">For privacy questions, contact us via the <a href="/contact" className="text-brand-700 underline">Contact page</a>.</p>
        </section>
      </div>
    </>
  )
}
