import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Text Simplifier — Free AI Tool for Teachers',
  description: 'Simplify complex texts to any reading level for ELL students, struggling readers, or lower grades. Free AI text simplifier for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/text-simplifier' },
}

const FIELDS = [
  { name: 'original_text', label: 'Original Text', type: 'textarea', placeholder: 'Paste the text you want to simplify here...', full: true },
  { name: 'target_grade', label: 'Target Grade Level', type: 'text', placeholder: 'e.g. Grade 4' },
  {
    name: 'goal',
    label: 'Simplification Goal',
    type: 'select',
    options: [
      { value: 'ELL students', label: 'ELL / English Language Learners' },
      { value: 'struggling readers', label: 'Struggling Readers' },
      { value: 'a lower grade level', label: 'Lower Grade Level Access' },
      { value: 'students with special needs', label: 'Special Needs / Processing Differences' },
    ],
    default: 'ELL students',
  },
]

const PROMPT = `Simplify the following text for {goal} at a {target_grade} reading level.

ORIGINAL TEXT:
{original_text}

Requirements for the simplified version:
1. Preserve ALL key information and meaning from the original — do not omit important facts or ideas
2. Replace complex vocabulary with simpler synonyms appropriate for {target_grade}
3. Break long, complex sentences into shorter, clearer ones
4. Replace passive voice with active voice where possible
5. Add brief context or explanation where concepts may be unfamiliar to {goal}
6. Maintain a respectful, age-appropriate tone
7. Keep the same general structure (paragraphs, sequences) as the original

After the simplified text, provide:
- A brief note on key changes made and why
- 3-5 vocabulary words from the simplified text that may still need pre-teaching`

const RELATED = [
  { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator', desc: 'Generate comprehension questions for the simplified text.' },
  { name: 'Vocabulary List Builder', slug: 'vocabulary-list-builder', desc: 'Build a vocabulary list from the challenging words in the original text.' },
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Plan differentiated activities that work alongside your simplified texts.' },
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write reading-level goals for students who regularly need simplified texts.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Text Simplifier — GogyAI',
    url: 'https://gogyai.com/text-simplifier',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Text Simplifier for Teachers',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/text-simplifier',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Text Simplifier for Teachers: Make Any Reading Accessible to Every Student',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/text-simplifier',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I simplify a text for ELL students using AI?', acceptedAnswer: { '@type': 'Answer', text: 'Paste the original text, set the target grade level to match your ELL students\' reading proficiency, and select "ELL / English Language Learners" as the goal. The AI simplifies vocabulary and sentence structure while preserving all the key information.' } },
      { '@type': 'Question', name: 'Does text simplification remove important information?', acceptedAnswer: { '@type': 'Answer', text: 'The tool is instructed to preserve all key information and meaning. Simplification focuses on vocabulary and sentence structure, not content reduction. Always read the simplified version to verify that critical ideas from the original are still present.' } },
      { '@type': 'Question', name: 'Can I simplify textbook passages for struggling readers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Paste the passage, set the target grade level 1–2 grades below your enrolled grade, and select "Struggling Readers." The AI simplifies language while keeping the subject-matter content intact.' } },
      { '@type': 'Question', name: 'Is AI text simplification appropriate for special education students?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — with teacher review. Select "Special Needs / Processing Differences" as the goal. The AI produces shorter sentences, clearer language, and reduced complexity. For students with specific reading disabilities, supplement the simplified text with your school\'s reading specialist guidance.' } },
      { '@type': 'Question', name: 'How long can the original text be?', acceptedAnswer: { '@type': 'Answer', text: 'Best results come from passages of 150–600 words. For longer texts, simplify section by section. Very long texts may produce truncated output due to AI context limits.' } },
      { '@type': 'Question', name: 'Can I use AI to simplify historical primary sources?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the most valuable use cases. Primary sources with archaic language are often inaccessible to below-grade readers. AI simplification makes the content accessible while keeping students working with the original ideas. Pair the simplified version with the original for analysis.' } },
      { '@type': 'Question', name: 'Does text simplification help with FERPA compliance?', acceptedAnswer: { '@type': 'Answer', text: 'Text simplification tool inputs should never include student names or identifying information. Paste curriculum content — textbook passages, articles, primary sources — not student-written work.' } },
      { '@type': 'Question', name: 'Is the GogyAI text simplifier free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function TextSimplifierPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Text Simplifier</h1>
        <p className="text-slate-600 mb-6">Simplify any text to the reading level your students need — for ELL learners, struggling readers, or below-grade access.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="text-simplifier" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Text Simplifier for Teachers: Make Any Reading Accessible to Every Student</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how an AI text simplifier works and how teachers use it to make curriculum content accessible to ELL students, struggling readers, and students with processing differences.</li>
            <li>ELA teachers, content-area teachers, ESL specialists, and special education teachers will benefit most.</li>
            <li>The tool simplifies any pasted text to a target reading level while preserving all key information and meaning.</li>
            <li>Teachers eliminate hours of manual rewriting — a passage that takes 30–45 minutes to simplify by hand takes under a minute with AI.</li>
            <li>Always read the simplified output to verify that critical content is preserved — AI occasionally drops a specific detail.</li>
            <li>Paste curriculum text only — never paste student-written work containing names or identifying information.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Every content-area teacher has faced the same problem: a reading that is perfect for your curriculum but completely inaccessible to a third of your class. Rewriting it yourself takes an hour you don't have. An AI text simplifier does that rewriting in seconds — preserving the academic content while making the language accessible to the students who need it.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers how to use the text simplifier effectively, which types of text produce the best results, and what to verify before any simplified version reaches students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Text Simplifier?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI text simplifier takes a complex passage and rewrites it at a specified reading level — reducing vocabulary complexity, shortening sentences, switching passive constructions to active voice, and adding context where concepts may be unfamiliar. The goal is maximum accessibility with minimum loss of content.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools are particularly valuable because they work on any text — textbook passages, articles, primary sources, science readings, mathematical word problems — not just content created for that purpose. The teacher selects the text; the AI handles the linguistic adaptation.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Text Simplifiers Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          In any classroom with diverse reading abilities — and most classrooms are exactly that — content-area texts frequently leave below-grade readers unable to access the ideas, not because the ideas are too complex but because the language is. Text simplification separates the reading challenge from the content challenge, allowing students to engage with grade-level concepts at their accessible reading level.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For ELL students specifically, simplified text is an evidence-based scaffolding strategy. The UNESCO Institute for Education and Common Sense Media's research on language acquisition both emphasize comprehensible input — material that is slightly above but not far beyond a learner's current language level. AI simplification makes calibrating to that level practical at scale.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You paste the text you want simplified, set the target grade level, and choose the simplification goal — ELL students, struggling readers, lower grade access, or special needs. The AI rewrites the text with shorter sentences, simpler vocabulary, and active voice, while preserving all the key information and meaning.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output includes the simplified text and a brief note on the key changes made, plus 3–5 vocabulary words from the simplified text that may still need pre-teaching. This note is useful for identifying what additional scaffolding students might need alongside the simplified text.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Text Simplifier in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Adeyemi teaches 7th-grade social studies. His unit on the Industrial Revolution uses a primary source excerpt — a factory inspector's 1832 report — that is completely inaccessible to his four ELL students and two below-grade readers. He wants a simplified version that keeps the historical content but uses language those students can process.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>He pastes the 250-word excerpt into the Original Text field.</li>
          <li>Target Grade Level: Grade 5 (matching his ELL students' reading proficiency).</li>
          <li>Goal: ELL / English Language Learners.</li>
          <li>He generates the simplified version in about 8 seconds.</li>
          <li>He reads both versions side by side. The key details — working conditions, children's ages, factory hours — are all preserved. The archaic vocabulary has been replaced with modern equivalents.</li>
          <li>He notes the tool flagged "industry" and "conditions" as words still needing pre-teaching — he adds them to his vocabulary warm-up for that day.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          He now has two versions of the same document for his class discussion: the original for grade-level students, the simplified version for students who need it — same ideas, different access points.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Set the target grade level to the student's reading level, not their enrolled grade</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A 7th-grade ELL student reading at a 4th-grade level needs text simplified to Grade 4, not Grade 7. Set the target grade to the student's actual reading proficiency level, not their school grade. This is the most common miscalibration teachers make with text simplification.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Paste sections, not entire books or chapters</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Text simplification works best on focused passages of 150–600 words. For longer texts, simplify the specific sections you'll use with students rather than the entire document. This also forces you to identify which parts of the text most need accessibility support.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always compare original and simplified side by side</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI occasionally drops a specific detail or softens a nuance. Read both versions critically. For primary sources, pay particular attention to historical specifics — dates, names, statistics — that must be preserved exactly.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Text simplification reduces linguistic complexity but cannot provide the comprehension scaffolding that comes from teacher explanation, visual supports, and background knowledge building. Simplified text works best as part of a broader differentiation strategy, not as a standalone solution. For complete reading activities that pair leveled passages with comprehension questions, the <Link href="/reading-comprehension-creator" className="text-brand-700 underline">Reading Comprehension Creator</Link> generates both passage and questions at your specified grade level.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Very technical content — advanced mathematics, specialized legal language, highly technical scientific writing — may lose essential precision when simplified. For technical content, simplify the explanatory language around the technical terms rather than replacing the terms themselves. For practice worksheets that accompany a simplified passage, the <Link href="/worksheet-generator" className="text-brand-700 underline">Worksheet Generator</Link> creates topic-specific questions with answer keys.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Paste curriculum text only — textbook passages, articles, primary sources. Never paste student-written work containing names, IDs, or any identifying information. GogyAI stores no personal information; your inputs are used solely to generate the simplified text.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA governs student education records. Curriculum materials — textbook passages, published articles — are not student records. If a student has shared their own writing with you, do not paste it into any external AI tool without your district's explicit guidance on that use case. Browse <Link href="/" className="text-brand-700 underline">GogyAI&apos;s library of AI tools for educators</Link> for the complete set of free literacy, planning, and assessment tools.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I simplify a text for ELL students using AI?', a: 'Paste the original text, set the target grade to match your ELL students\' reading proficiency (not their enrolled grade), and select "ELL / English Language Learners." The AI simplifies vocabulary and sentence structure while preserving all the key information.' },
            { q: 'Does text simplification remove important information?', a: 'The tool is instructed to preserve all key information. Simplification targets vocabulary and sentence structure, not content. Always read the simplified version to verify critical ideas from the original are still present.' },
            { q: 'Can I simplify textbook passages for struggling readers?', a: 'Yes. Paste the passage, set the target grade level 1–2 grades below enrolled grade, and select "Struggling Readers." The AI simplifies language while keeping subject-matter content intact.' },
            { q: 'Is AI text simplification appropriate for special education students?', a: 'Yes — with teacher review. Select "Special Needs / Processing Differences." The AI produces shorter sentences and reduced complexity. Supplement with your school\'s reading specialist guidance for students with specific learning disabilities.' },
            { q: 'How long can the original text be?', a: 'Best results come from 150–600 word passages. For longer texts, simplify section by section. Very long texts may produce truncated output due to AI context limits.' },
            { q: 'Can I use AI to simplify historical primary sources?', a: 'Yes — one of the most valuable use cases. AI simplification makes primary source content accessible to below-grade readers while keeping the original ideas. Pair the simplified version with the original for analysis work.' },
            { q: 'Should I paste student-written work into the text simplifier?', a: 'No. Paste curriculum content only — textbook passages, articles, primary sources. Student-written work containing names or identifying information should not be entered into any AI tool.' },
            { q: 'Is the GogyAI text simplifier free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'classroom-story-generator', name: 'Classroom Story Generator' }}
        next={{ slug: 'classroom-rules-generator', name: 'Classroom Rules Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
