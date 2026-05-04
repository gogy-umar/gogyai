import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Worksheet Generator — Free AI Tool for Teachers',
  description: 'Generate complete, ready-to-print worksheets with instructions, questions, and answer keys. Free AI worksheet generator for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/worksheet-generator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 5th Grade Math' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 5' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. Multiplying fractions', full: true },
  {
    name: 'type',
    label: 'Worksheet Type',
    type: 'select',
    options: [
      { value: 'practice', label: 'Practice' },
      { value: 'review', label: 'Review' },
      { value: 'introduction', label: 'Introduction' },
      { value: 'enrichment', label: 'Enrichment / Challenge' },
    ],
    default: 'practice',
  },
  { name: 'num_questions', label: 'Number of Questions', type: 'number', placeholder: '10', default: '10' },
]

const PROMPT = `Create a complete, classroom-ready worksheet with the following details:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Worksheet Type: {type}
Number of Questions: {num_questions}

Structure the worksheet as follows:
1. Worksheet Title and clear student instructions (2-3 sentences)
2. {num_questions} questions appropriate for the topic and grade level
   - For practice/review: a mix of problem types (fill-in, short answer, calculation, word problem)
   - For introduction: scaffolded from simple to more complex
   - For enrichment: challenging extension problems that push thinking
3. Answer Key at the end with full solutions

Make the worksheet immediately usable in the classroom. Difficulty, vocabulary, and question format must be appropriate for {grade} students working on {type} of {topic}.`

const RELATED = [
  { name: 'Quiz / MCQ Generator', slug: 'quiz-mcq-generator', desc: 'Create quizzes with multiple-choice questions and automatic answer keys.' },
  { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator', desc: 'Generate original passages with comprehension questions for any grade.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write the measurable objectives your worksheet is designed to assess.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build a rubric to grade the written responses in your worksheet.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Worksheet Generator — GogyAI',
    url: 'https://gogyai.com/worksheet-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Worksheet Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/worksheet-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Worksheet Generator for Teachers: Save Hours on Resource Creation',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/worksheet-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I use an AI worksheet generator?', acceptedAnswer: { '@type': 'Answer', text: 'Enter your subject, grade level, topic, worksheet type (practice, review, introduction, or enrichment), and the number of questions. The AI generates a complete worksheet with student instructions, questions, and a full answer key in seconds.' } },
      { '@type': 'Question', name: 'Can the worksheet generator create an answer key?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every worksheet generated includes a complete answer key at the end. For math problems, it shows full working solutions. For other subjects, it provides model answers.' } },
      { '@type': 'Question', name: 'Is an AI worksheet generator accurate for math?', acceptedAnswer: { '@type': 'Answer', text: 'AI worksheet generators are reliable for standard math topics at K-12 level. Always check answer key calculations before distributing, particularly for multi-step problems or topics at the edge of the AI\'s training data.' } },
      { '@type': 'Question', name: 'Can I generate differentiated worksheets at different levels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Generate the same topic three times — once as introduction, once as practice, once as enrichment. This produces a natural tiered set for differentiated instruction.' } },
      { '@type': 'Question', name: 'What subjects work best with an AI worksheet generator?', acceptedAnswer: { '@type': 'Answer', text: 'Math, science, language arts, social studies, and foreign language all produce strong results. Topics with clear factual content and standard question formats yield the best worksheets. Highly creative or subjective tasks work less well.' } },
      { '@type': 'Question', name: 'How is an AI worksheet different from a worksheet found online?', acceptedAnswer: { '@type': 'Answer', text: 'An AI-generated worksheet is created specifically for your topic, grade, and type — not repurposed from someone else\'s curriculum. It matches your exact specifications rather than requiring you to adapt a generic resource.' } },
      { '@type': 'Question', name: 'Is the GogyAI worksheet generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account, subscription, or credit card required.' } },
    ],
  },
}

export default function WorksheetGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Worksheet Generator</h1>
        <p className="text-slate-600 mb-6">Generate a complete, ready-to-print worksheet with questions and answer key in seconds.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="worksheet-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Worksheet Generator for Teachers: Save Hours on Resource Creation</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how AI worksheet generators work and how to use them to create customized classroom resources in minutes.</li>
            <li>K-12 teachers who spend significant time creating or searching for worksheets will benefit most.</li>
            <li>An AI worksheet generator creates complete, topic-specific worksheets — with student instructions, questions, and answer keys — from your specifications.</li>
            <li>Teachers report saving 30–90 minutes per worksheet compared to creating from scratch or adapting generic resources.</li>
            <li>Always review generated math solutions and factual content before distributing to students.</li>
            <li>Never enter student names or personal data into the tool — topic and grade level are all you need.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Creating a quality worksheet from scratch takes 30 to 90 minutes — longer if you need differentiated versions. Searching for one online takes almost as long, then requires adapting it to your topic, your grade level, and your students. An AI worksheet generator eliminates both problems by creating exactly what you specified, in seconds.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers how AI worksheet generators work, where they produce reliable results, and what to watch for before you hand anything to students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Worksheet Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI worksheet generator is a tool that takes your subject, grade level, topic, and preferences and produces a complete classroom worksheet — student instructions, numbered questions, and a full answer key — without you having to design anything from scratch.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because worksheet design follows predictable patterns: the question format, difficulty progression, and vocabulary all map to grade level and topic in ways AI can apply reliably. The generator handles the structural work; you bring the classroom judgment.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Worksheet Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The average teacher creates or heavily adapts 2–5 worksheets per week. Across a school year, that adds up to hundreds of hours of resource creation that competes with grading, planning, and student support. AI worksheet generators compress that time dramatically — from an hour's work to under five minutes.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For teachers who need differentiated materials, the time savings multiply. Generating a standard, below-level, and above-level version of the same worksheet — something that would take 2–3 hours by hand — takes three generator runs and 15 minutes of review.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You choose your subject, grade level, topic, worksheet type, and the number of questions. The worksheet type — practice, review, introduction, or enrichment — is the most important selector. An introduction worksheet builds from simple to complex; a practice worksheet reinforces a skill with varied problem types; a review worksheet covers multiple related concepts; an enrichment worksheet pushes beyond grade expectations.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI generates clear student-facing instructions, then produces the requested number of questions — calibrated to the grade level and type — followed by a complete answer key. The output is ready to copy, paste into a document template, and print.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Worksheet Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Chen teaches 5th-grade math at an urban elementary school. Her class is working on multiplying fractions and she needs a practice worksheet for independent work — 12 questions, with a mix of straight computation and word problems.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>She enters "5th Grade Math" for subject, "Grade 5" for grade level.</li>
          <li>Topic: "Multiplying fractions, including mixed numbers."</li>
          <li>Worksheet Type: Practice.</li>
          <li>Number of Questions: 12.</li>
          <li>She clicks Generate and receives the full worksheet in about 10 seconds.</li>
          <li>She reviews the answer key — checks three multi-step problems by hand.</li>
          <li>She finds one answer is simplified incorrectly and corrects it before copying the worksheet into her school's document template.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          Total time from generation to ready-to-print: 8 minutes, including her review. The same worksheet built from scratch would have taken her 45 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about where students are in the learning sequence</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Fractions" produces a generic worksheet. "Multiplying fractions by whole numbers — first lesson, students know fraction basics but haven't multiplied yet" produces a well-scaffolded introduction. Add context about prior knowledge and you get questions that actually match where your students are.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use worksheet type strategically</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Introduction worksheets sequence from simple to complex — ideal for the first lesson on a topic. Practice worksheets mix problem types — ideal for consolidation. Review worksheets span multiple concepts — ideal for test prep. Choose the type that matches your instructional moment, not just the topic.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always verify the answer key</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI is reliable for most K-12 math and factual content, but occasionally produces errors in multi-step calculations or edge cases. Check the answer key before distributing — especially for math worksheets. For language arts and social studies, scan for any factual claims that need verification.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI worksheet generators do not produce formatted, print-ready layouts. The output is text — you'll need to paste it into your preferred document template (Google Docs, Word, Canva, etc.) and apply your school's formatting preferences. The content is done; the design is yours to handle.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Worksheets requiring diagrams, graphs, number lines, or geometric figures cannot be generated as images. The AI will describe what a diagram should contain, but visual elements require you to add them manually. For text-based assessment with multiple questions and an answer key, the <Link href="/quiz-mcq-generator" className="text-brand-700 underline">Quiz MCQ Generator</Link> creates complete quizzes with no visual formatting requirements.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For highly specialized vocational, AP, or IB content — particularly at the edges of what K-12 covers — review the output carefully. The AI works best within standard curriculum scope and sequence. For language arts content that combines a reading passage with comprehension questions, the <Link href="/reading-comprehension-creator" className="text-brand-700 underline">Reading Comprehension Creator</Link> generates leveled passages tailored to your topic and grade.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Worksheet inputs — subject, grade, topic — contain no student data. Do not include student names or any identifying information in your inputs. GogyAI stores no personal information, and your inputs are used only to generate your worksheet.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA applies to student education records, not to general curriculum resources. Worksheet generation with topic and grade inputs falls well within standard educational tool use. Check your district's AI tool policy if you're integrating this into formal curriculum development workflows. Discover every free resource creation tool at <Link href="/" className="text-brand-700 underline">GogyAI&apos;s suite of free educator tools</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I use an AI worksheet generator?', a: 'Enter your subject, grade level, topic, worksheet type, and number of questions. Click Generate. The tool produces a complete worksheet with student instructions, questions, and an answer key in seconds. Review the answer key before distributing.' },
            { q: 'Can the worksheet generator create an answer key?', a: 'Yes. Every generated worksheet includes a full answer key. Math worksheets include worked solutions. Language arts and other subjects include model answers.' },
            { q: 'Is an AI worksheet generator accurate for math?', a: 'Reliable for standard K-12 math topics. Multi-step calculations and edge cases should be checked. Always verify the answer key before handing a math worksheet to students.' },
            { q: 'Can I generate differentiated worksheets at different levels?', a: 'Yes. Generate the same topic using introduction, practice, and enrichment types. This produces a natural three-tier set for differentiated instruction without additional work.' },
            { q: 'What subjects work best with an AI worksheet generator?', a: 'Math, science, language arts, social studies, and foreign language all produce strong results. Topics with clear factual content and standard question formats yield the most reliable worksheets.' },
            { q: 'How is an AI worksheet different from a worksheet found online?', a: 'An AI worksheet is created specifically for your topic, grade, and type — not adapted from someone else\'s curriculum. It matches your exact specifications rather than requiring you to modify a generic resource.' },
            { q: 'Is the GogyAI worksheet generator free?', a: 'Yes, completely free. No account, subscription, or credit card required. Generate as many worksheets as you need.' },
          ].map(item => (
            <div key={item.q} className="border-b border-slate-100 pb-4">
              <p className="font-semibold text-slate-800 mb-1">{item.q}</p>
              <p className="text-slate-700 text-sm leading-relaxed">{item.a}</p>
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
              <p className="text-sm text-slate-700">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ToolNav
        prev={{ slug: 'iep-goal-writer', name: 'IEP Goal Writer' }}
        next={{ slug: 'reading-comprehension-creator', name: 'Reading Comprehension Creator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
