import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Learning Objectives Writer — Free AI Tool for Teachers',
  description: 'Generate measurable SMART learning objectives with Bloom\'s Taxonomy action verbs. Free AI tool for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/learning-objectives-writer' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Middle School Math' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 6' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. Solving one-step equations', full: true },
  {
    name: 'blooms_level',
    label: "Bloom's Taxonomy Level",
    type: 'select',
    options: [
      { value: 'mixed', label: 'Mixed levels (recommended)' },
      { value: 'remember', label: 'Remember' },
      { value: 'understand', label: 'Understand' },
      { value: 'apply', label: 'Apply' },
      { value: 'analyze', label: 'Analyze' },
      { value: 'evaluate', label: 'Evaluate' },
      { value: 'create', label: 'Create' },
    ],
    default: 'mixed',
  },
  { name: 'count', label: 'Number of Objectives', type: 'number', placeholder: '4', default: '4' },
]

const PROMPT = `Write {count} measurable learning objectives for the following:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Bloom's Taxonomy Level(s): {blooms_level}

Each objective must:
- Start with a measurable action verb from Bloom's Taxonomy
- Be specific, measurable, achievable, relevant, and time-bound (SMART)
- Be written from the student's perspective ("Students will be able to...")
- Include the condition and criterion for mastery where appropriate

After each objective, note:
- The Bloom's level it targets
- One suggested assessment activity that would measure this objective

Format clearly as a numbered list.`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Use your objectives as the foundation for a complete lesson plan.' },
  { name: "Bloom's Taxonomy Question Generator", slug: 'blooms-taxonomy-question-generator', desc: 'Generate questions that align to your specific Bloom\'s objectives.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build rubrics to assess the objectives you wrote.' },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: 'Create quick checks to measure whether objectives were met.' },
]

const schemas = {
  webPage: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Learning Objectives Writer — GogyAI', url: 'https://gogyai.com/learning-objectives-writer' },
  software: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AI Learning Objectives Writer', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url: 'https://gogyai.com/learning-objectives-writer' },
  article: { '@context': 'https://schema.org', '@type': 'Article', headline: "AI Learning Objectives Writer: Write SMART Objectives with Bloom's Taxonomy", author: { '@type': 'Organization', name: 'GogyAI' }, publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' }, url: 'https://gogyai.com/learning-objectives-writer' },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: "What is Bloom's Taxonomy and why does it matter for objectives?", acceptedAnswer: { '@type': 'Answer', text: "Bloom's Taxonomy is a framework that classifies learning into six cognitive levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. Writing objectives at specific Bloom's levels ensures you're targeting the right depth of thinking for your students and your instructional goals." } },
      { '@type': 'Question', name: 'What makes a learning objective measurable?', acceptedAnswer: { '@type': 'Answer', text: 'A measurable objective uses an action verb that describes observable student behavior (e.g., "identify," "calculate," "compare") rather than vague terms like "understand" or "know." It specifies what evidence will demonstrate learning.' } },
      { '@type': 'Question', name: 'How many learning objectives should a lesson have?', acceptedAnswer: { '@type': 'Answer', text: 'Most single lessons work best with 2–4 objectives. More than 4 often means the lesson is covering too much ground. For a longer unit or project, 5–6 objectives can work if they span multiple class periods.' } },
      { '@type': 'Question', name: 'Can I use AI-generated objectives on an IEP?', acceptedAnswer: { '@type': 'Answer', text: 'AI learning objectives are a drafting starting point, not IEP-ready documents. IEP goals require specific legal language, measurable baseline data, and review by qualified special education professionals. Use the IEP Goal Writer tool for that purpose.' } },
      { '@type': 'Question', name: "What's the difference between a learning objective and a learning outcome?", acceptedAnswer: { '@type': 'Answer', text: "Learning objectives describe what teachers plan to teach. Learning outcomes describe what students actually demonstrate. In practice, many educators use the terms interchangeably — both should be written in measurable, observable terms." } },
      { '@type': 'Question', name: 'Does the objectives writer work for higher education?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Specify the course level (e.g., "undergraduate introductory," "graduate seminar") in the subject field. The AI adjusts the cognitive complexity and verb choices to match post-secondary expectations.' } },
      { '@type': 'Question', name: 'Is the GogyAI learning objectives writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free with no account required.' } },
    ],
  },
}

export default function LearningObjectivesWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Learning Objectives Writer</h1>
        <p className="text-slate-600 mb-6">Write precise, measurable SMART learning objectives with the right Bloom&apos;s Taxonomy action verbs.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="learning-objectives-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Learning Objectives Writer: SMART Objectives with Bloom&apos;s Taxonomy</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to write measurable learning objectives using AI and Bloom&apos;s Taxonomy.</li>
            <li>Useful for teachers at all levels who need precise, standard-aligned objectives for lessons or units.</li>
            <li>An AI learning objectives writer generates SMART objectives with appropriate Bloom&apos;s action verbs for your specific topic and grade.</li>
            <li>Well-written objectives anchor lesson design, assessment, and instructional alignment — all in one sentence.</li>
            <li>AI objectives are strong starting drafts that may need adjustment to match your specific curriculum standards or assessment format.</li>
            <li>No student information is required or should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Bad learning objectives are invisible problems. When an objective says "students will understand photosynthesis," you can't assess it, you can't align an activity to it, and you can't tell whether students achieved it. An AI learning objectives writer solves this at the source — generating objectives with the measurable action verbs and cognitive clarity that effective lesson design requires.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Learning Objectives Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A learning objectives writer takes your topic, grade level, and Bloom&apos;s Taxonomy level and produces a set of SMART objectives — specific, measurable, achievable, relevant, and time-bound. Each objective uses a precise action verb (identify, analyze, construct, evaluate) that signals what students will do to demonstrate learning.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools emerged because objective writing is a high-leverage but often rushed part of lesson planning. Research on instructional alignment consistently shows that clear objectives improve both teaching coherence and student achievement. The AI makes that clarity accessible without requiring the teacher to memorize verb taxonomies.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Learning Objectives Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Learning objectives aren&apos;t just administrative compliance items — they are the architectural blueprint of a lesson. A well-written objective determines which activities belong in the lesson, how long to spend on each one, and what assessment will tell you whether students got there. Vague objectives produce incoherent lessons; precise objectives produce alignment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Instructional coaches and administrators use objective quality as one of the first indicators of lesson planning rigor during walkthroughs and instructional audits. Getting this right matters beyond the individual classroom.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter your subject, grade, topic, Bloom&apos;s level target, and how many objectives you need. The AI generates a numbered list of objectives — each starting with a Bloom&apos;s action verb at the right cognitive level, written from the student&apos;s perspective. Each objective also includes its Bloom&apos;s level and a suggested assessment activity.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mixed mode generates objectives across multiple Bloom&apos;s levels — useful for lessons that move from recall to application within a single class period, which is common in well-designed direct instruction.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Learning Objectives Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Patel teaches 6th-grade math and is starting a unit on solving one-step equations. She wants objectives that move students from recall to application within the first two lessons.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Subject: "6th Grade Mathematics." Grade: "Grade 6."</li>
          <li>Topic: "Solving one-step equations using inverse operations."</li>
          <li>Bloom&apos;s Level: Mixed.</li>
          <li>Number of Objectives: 4.</li>
          <li>She generates and receives four objectives ranging from "Students will be able to identify the inverse operation needed to isolate a variable" (Remember/Understand) to "Students will be able to solve real-world word problems by writing and solving one-step equations" (Apply).</li>
          <li>She keeps three as written and adjusts the fourth to reference a specific district benchmark, then posts them to her classroom wall and lesson plan.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Specify prerequisite knowledge in the topic field</h3>
        <p className="text-slate-700 leading-relaxed mb-4">Adding "students already know how to use variables" or "first lesson in this unit" to the topic description dramatically improves objective relevance. The AI calibrates its starting point accordingly.</p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Target a specific Bloom&apos;s level for assessment alignment</h3>
        <p className="text-slate-700 leading-relaxed mb-4">If your unit assessment is an analysis task, select Analyze as the Bloom&apos;s level. Your lesson objectives should build toward that level — the AI will generate objectives at and below Analyze to scaffold toward it.</p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated objectives don&apos;t include standard codes automatically. You must match the objective language to your relevant standards (CCSS, NGSS, state-specific) after generation. The AI also doesn&apos;t know your students&apos; current performance level — the objectives are written at grade level unless you specify otherwise. Once your objectives are set, use the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> to build a complete lesson around them. To create questions that assess each objective at the right cognitive level, the <Link href="/blooms-taxonomy-question-generator" className="text-brand-700 underline">Bloom&apos;s Taxonomy Question Generator</Link> produces questions matched to the same Bloom&apos;s level.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to use this tool. GogyAI stores no personal information. Your inputs are used only to generate your objectives and are not retained after the session. Discover <Link href="/" className="text-brand-700 underline">all 30 free AI teaching tools on GogyAI</Link> covering lesson planning, assessment, communication, and classroom management.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: "What is Bloom's Taxonomy and why does it matter for objectives?", a: "Bloom's Taxonomy classifies learning into six cognitive levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. Writing objectives at specific levels ensures you're targeting the right depth of thinking for your lesson and assessment." },
            { q: 'What makes a learning objective measurable?', a: 'A measurable objective uses an observable action verb (identify, calculate, compare) rather than vague terms like "understand." It describes what evidence will show that learning occurred.' },
            { q: 'How many learning objectives should a lesson have?', a: 'Most single lessons work best with 2–4 objectives. More than 4 often means the lesson covers too much ground.' },
            { q: 'Can I use AI-generated objectives on an IEP?', a: <>AI objectives are drafting starting points only. IEP goals require specific legal language and review by qualified special education professionals. Use the <Link href="/iep-goal-writer" className="text-brand-700 underline">IEP Goal Writer</Link> for that purpose.</> },
            { q: "What's the difference between a learning objective and a learning outcome?", a: 'Learning objectives describe what teachers plan to teach. Learning outcomes describe what students actually demonstrate. Both should use measurable, observable terms.' },
            { q: 'Does the objectives writer work for higher education?', a: 'Yes. Specify the course level (e.g., "undergraduate introductory") in the subject field and the AI adjusts complexity and verb choices.' },
            { q: 'Is the GogyAI learning objectives writer free?', a: 'Yes, completely free with no account required.' },
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
        prev={{ slug: 'unit-plan-creator', name: 'Unit Plan Creator' }}
        next={{ slug: 'differentiated-instruction-planner', name: 'Differentiated Instruction Planner' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
