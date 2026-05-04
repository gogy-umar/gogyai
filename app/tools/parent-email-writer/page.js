import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Parent Email Writer — Free AI Tool for Teachers',
  description: 'Generate professional parent emails with subject lines, ready to send. Free AI parent email writer for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/parent-email-writer' },
}

const FIELDS = [
  {
    name: 'purpose',
    label: 'Purpose',
    type: 'select',
    options: [
      { value: 'progress', label: 'Student Progress Update' },
      { value: 'behavior', label: 'Behavior Concern' },
      { value: 'achievement', label: 'Achievement / Celebration' },
      { value: 'meeting', label: 'Meeting Request' },
      { value: 'general', label: 'General Communication' },
    ],
    default: 'progress',
  },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 4' },
  {
    name: 'tone',
    label: 'Tone',
    type: 'select',
    options: [
      { value: 'formal', label: 'Formal' },
      { value: 'warm', label: 'Warm & Friendly' },
      { value: 'urgent', label: 'Urgent / Serious' },
    ],
    default: 'warm',
  },
  { name: 'key_points', label: 'Key Points to Include', type: 'textarea', placeholder: 'e.g. Student has been struggling with reading comprehension, missing assignments, would like to schedule a conference', full: true },
]

const PROMPT = `Write a professional teacher-to-parent email based on the following:
Purpose: {purpose}
Grade Level: {grade}
Tone: {tone}
Key Points: {key_points}

Format the email as follows:
1. SUBJECT LINE: (a clear, professional subject line)
2. SALUTATION: (e.g., Dear [Parent/Guardian Name],)
3. OPENING PARAGRAPH: Introduce the purpose of the email clearly and positively where appropriate
4. BODY: Address all key points in {key_points} — be specific, constructive, and professional. If discussing a concern, lead with a strength first.
5. CALL TO ACTION: A clear next step (reply, schedule a meeting, review materials, etc.)
6. CLOSING: Professional sign-off with placeholder for teacher name and contact info

Tone guidelines:
- Formal: Professional, clear, objective language appropriate for official school communications
- Warm & Friendly: Approachable, positive, relationship-building language while remaining professional
- Urgent / Serious: Direct, clear, and serious — but never threatening. Conveys importance without alarm.

Do not invent specific student names or parent names — use [Student Name] and [Parent/Guardian Name] as placeholders.`

const RELATED = [
  { name: 'Report Card Comment Generator', slug: 'report-card-comment-generator', desc: 'Generate professional report card comments to share alongside parent emails.' },
  { name: 'Newsletter Draft Generator', slug: 'newsletter-draft-generator', desc: 'Create a complete classroom newsletter for broader parent communication.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Write personalized feedback to share directly with students.' },
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write SMART IEP goals for students with specific learning needs.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Parent Email Writer — GogyAI',
    url: 'https://gogyai.com/parent-email-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Parent Email Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/parent-email-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Parent Email Writer for Teachers: Professional, Clear, and Ready to Send',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/parent-email-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How should teachers communicate with parents professionally?', acceptedAnswer: { '@type': 'Answer', text: 'Professional parent communication is clear, specific, respectful, and solution-focused. Lead with a strength before raising a concern. Be specific about what you observed and what the next step is. Avoid educational jargon parents may not recognize. Keep emails concise and end with a clear action item.' } },
      { '@type': 'Question', name: 'What should a parent email include?', acceptedAnswer: { '@type': 'Answer', text: 'A professional parent email should include: a clear subject line that signals the purpose; a salutation using the parent or guardian name; an opening that establishes purpose and positive intent; a body that addresses specific points clearly; a call to action; and a professional close with teacher contact information.' } },
      { '@type': 'Question', name: 'How do I write a parent email about a behavior concern?', acceptedAnswer: { '@type': 'Answer', text: 'Begin with a positive observation about the student before raising the concern. Describe the specific behavior factually, without judgment. Explain the impact on learning and the classroom. Outline the steps already taken. Request collaboration from home. Propose a specific next step — a meeting, a phone call, or a shared strategy.' } },
      { '@type': 'Question', name: 'When should a teacher contact parents by email versus phone?', acceptedAnswer: { '@type': 'Answer', text: 'Email works well for progress updates, celebration emails, routine communication, and meeting requests. Phone calls are better for urgent concerns, sensitive conversations about behavior or academic struggles, or any situation where tone or nuance matters significantly. For the most serious matters — safety, legal, or IEP-related — follow your school\'s formal communication protocols.' } },
      { '@type': 'Question', name: 'How do I handle parent communication that might be contentious?', acceptedAnswer: { '@type': 'Answer', text: 'For sensitive communications, the warm or formal tone options help calibrate language appropriately. For genuinely contentious situations — legal disputes, formal complaints — do not rely on AI-generated text. Draft with a colleague or administrator and review before sending. AI works best for routine professional communication, not adversarial correspondence.' } },
      { '@type': 'Question', name: 'Should I use student names in the email?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in the actual email you send. The AI generates the email with [Student Name] and [Parent/Guardian Name] as placeholders — fill these in before sending. Do not paste emails with real student names into AI tools — enter the context using general descriptions instead.' } },
      { '@type': 'Question', name: 'How quickly should teachers respond to parent emails?', acceptedAnswer: { '@type': 'Answer', text: 'Most schools expect teacher responses to parent emails within 24-48 school hours. Setting a consistent response window (e.g., "I respond to emails by the end of the next school day") in your opening-of-year communication helps manage expectations on both sides.' } },
      { '@type': 'Question', name: 'Is the GogyAI parent email writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function ParentEmailWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Parent Email Writer</h1>
        <p className="text-slate-600 mb-6">Generate a professional, ready-to-send parent email with a subject line — for any purpose and tone.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="parent-email-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Parent Email Writer for Teachers: Professional, Clear, and Ready to Send</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers professional parent communication and how AI can help you write clear, effective emails in less time.</li>
            <li>Teachers at all grade levels who write regular progress updates, behavior emails, achievement messages, and meeting requests will benefit.</li>
            <li>An AI parent email writer generates a complete, formatted email — with subject line and clear next step — based on your purpose, tone, and key points.</li>
            <li>Parent emails that once took 10-15 minutes to draft carefully can be completed in under 2 minutes with AI.</li>
            <li>Always personalize the output with the student and parent names, and review before sending.</li>
            <li>Never enter real student names into the key points field — use descriptions only.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Parent communication is one of the most time-consuming and highest-stakes forms of professional writing a teacher does. A well-written email builds trust, strengthens the home-school connection, and demonstrates professional care. A poorly written one — too vague, too alarming, or missing a clear next step — creates confusion or anxiety that requires more follow-up work to resolve. The quality of the writing matters as much as the content.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI parent email writer gives teachers a complete, well-structured draft that they personalize and send — ensuring professional quality without the blank-page drafting time.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Parent Email Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI parent email writer takes your purpose, grade level, tone, and key points, and produces a complete, formatted email ready to review and send. The output includes a subject line, appropriate salutation, purpose-driven opening, body paragraphs addressing your key points, a clear call to action, and a professional close — with [Student Name] and [Parent/Guardian Name] placeholders you fill in before sending.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tone selector adjusts register and language: formal for official or serious communication, warm for relationship-building and celebration emails, and urgent for situations requiring immediate attention. All three tones are professional — the AI doesn&apos;t produce alarmist or unprofessional language at any setting.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Professional Parent Communication Matters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on family engagement in education consistently shows that strong home-school communication is one of the most powerful levers for student success. Students whose parents receive regular, specific communication from teachers — not just problem-focused messages, but progress updates, celebrations, and partnership requests — show higher attendance, better academic outcomes, and stronger behavior in school.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The professional quality of teacher-to-parent communication also affects how families perceive the school. A clearly written, respectful email signals professional competence. A rushed, vague, or misspelled email signals the opposite. Every email is, in a small way, a representation of professional standards.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The practical obstacle is time. Teachers who communicate regularly with parents consistently report it as one of the most time-consuming parts of the job. An AI email writer doesn&apos;t reduce the importance of the communication — it reduces the drafting time, allowing more frequent outreach with less administrative burden.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Select your purpose — progress update, behavior concern, achievement, meeting request, or general — and your tone. Enter the grade level and your key points in natural language: what you want the parent to know, what the concern or celebration is, what you want them to do. The AI organizes these points into a structured, professional email.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The key points field drives the specificity of the output. The more detail you provide — the specific behavior, the specific assignment pattern, the specific achievement — the more specific and useful the email. Generic key points produce generic emails.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Parent Email Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Garcia teaches 4th grade and needs to contact a parent whose child has been missing homework assignments for three weeks. He wants to open a constructive dialogue — not alarm the parent — and set up a brief phone conference.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Purpose:</strong> Student Progress Update.</li>
          <li><strong>Grade Level:</strong> &quot;Grade 4.&quot;</li>
          <li><strong>Tone:</strong> Warm &amp; Friendly.</li>
          <li><strong>Key Points:</strong> &quot;Student is engaged and participates well in class. Has been missing homework for the past 3 weeks — 6 of 9 assignments not submitted. Would like to understand if there are any challenges at home or with the assignments. Requesting a brief 10-minute phone call this week.&quot;</li>
          <li>He clicks <strong>Generate</strong> and receives a complete email with subject line.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          The subject line reads: &quot;Checking In About [Student Name]&apos;s Homework — Quick Chat This Week?&quot; The email opens with a genuine positive observation, addresses the missing assignment pattern factually and non-judgmentally, and closes with a specific request for a 10-minute call with two time options. Mr. Garcia fills in the names, adds his actual time availability, and sends it. Total time: 3 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Lead with a positive in behavior or concern emails</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Including at least one genuine positive observation in your key points ensures the AI leads the email constructively. &quot;Student is genuinely curious and asks great questions&quot; followed by the concern produces a more collaborative tone than leading with the problem alone.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the next step you want</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Emails without clear calls to action produce ambiguous parent responses. Specifying in the key points what you want — &quot;I need a 15-minute phone call&quot; or &quot;Please sign and return the form&quot; — ensures the AI generates a direct, actionable request at the close.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This tool is not appropriate for legally sensitive, adversarial, or crisis communications. For situations involving formal complaints, safety concerns, or IEP disputes, work with your administrator or school counselor before drafting any written communication. AI is appropriate for professional routine communications — not for communications that may become legal documents. For formal written records about student performance that go home as part of report card cycles, the <Link href="/report-card-comment-generator" className="text-brand-700 underline">Report Card Comment Generator</Link> produces professional, growth-oriented comments for any subject and performance level.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI also doesn&apos;t know the specific history of your relationship with a family, cultural communication preferences, or language access needs. For families who communicate in a language other than English, use a translation service to translate the generated email rather than generating directly in the language, so you can review the content first. For class-wide communications that update all families at once, the <Link href="/newsletter-draft-generator" className="text-brand-700 underline">Newsletter Draft Generator</Link> produces a complete formatted newsletter from your announcements and upcoming events.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter student names or parent names into this tool. Use general descriptions of the situation in the key points field. GogyAI stores no personal information. Inputs are used only during your session and are not retained. FERPA protections apply to any communication involving student information — follow your district&apos;s AI use policy for email workflows. See <Link href="/" className="text-brand-700 underline">GogyAI&apos;s free AI tools for teachers</Link> for all 30 communication, planning, and assessment tools built for educators.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How should teachers communicate with parents professionally?', a: 'Professional parent communication is clear, specific, respectful, and solution-focused. Lead with a strength before raising a concern. Be specific about observations and next steps. Avoid educational jargon. Keep emails concise and end with a clear action item.' },
            { q: 'What should a parent email include?', a: 'A clear subject line, salutation, purpose-driven opening, body addressing specific points, a call to action, and a professional close with contact information.' },
            { q: 'How do I write a parent email about a behavior concern?', a: 'Begin with a positive observation. Describe the behavior factually, without judgment. Explain the impact. Outline steps already taken. Request home collaboration. Propose a specific next step.' },
            { q: 'When should I use email versus phone for parent contact?', a: 'Email works well for progress updates, celebration, routine communication, and meeting requests. Phone calls are better for urgent concerns, sensitive conversations, or situations where tone matters significantly.' },
            { q: 'How do I handle contentious parent communications?', a: 'For sensitive situations, use the formal tone. For genuinely contentious matters — legal disputes, formal complaints — draft with a colleague or administrator and review before sending. AI is best for routine professional communication.' },
            { q: 'Should I use student names in the email?', a: 'Yes, in the email you send — fill in the [Student Name] and [Parent/Guardian Name] placeholders before sending. Never paste real names into the AI tool input fields.' },
            { q: 'How quickly should teachers respond to parent emails?', a: 'Most schools expect responses within 24-48 school hours. Setting a consistent response window in your opening-of-year communication helps manage expectations.' },
            { q: 'Is the GogyAI parent email writer free?', a: 'Yes, completely free. No account or subscription required.' },
          ].map(item => (
            <div key={item.q} className="border-b border-slate-100 pb-4">
              <p className="font-semibold text-slate-800 mb-1">{item.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RELATED.map(tool => (
            <Link key={tool.slug} href={`/${tool.slug}`} className="block bg-brand-50 border border-brand-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-sm transition-all">
              <p className="font-semibold text-brand-800 mb-1">{tool.name}</p>
              <p className="text-sm text-slate-600">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ToolNav
        prev={{ slug: 'blooms-taxonomy-question-generator', name: "Bloom's Taxonomy Question Generator" }}
        next={{ slug: 'report-card-comment-generator', name: 'Report Card Comment Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
