import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'IEP Goal Writer — Free AI Tool for Special Education Teachers',
  description: 'Generate SMART IEP goals with measurable criteria and conditions. Free AI IEP goal writer for special education teachers. Must be reviewed by qualified professionals.',
  alternates: { canonical: 'https://gogyai.com/iep-goal-writer' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 3' },
  {
    name: 'area',
    label: 'Goal Area',
    type: 'select',
    options: [
      { value: 'reading', label: 'Reading / Literacy' },
      { value: 'math', label: 'Mathematics' },
      { value: 'writing', label: 'Writing' },
      { value: 'behavior', label: 'Behavior / Self-Regulation' },
      { value: 'communication', label: 'Communication / Speech-Language' },
      { value: 'social', label: 'Social Skills' },
    ],
    default: 'reading',
  },
  { name: 'current_performance', label: 'Current Performance Level', type: 'textarea', placeholder: 'e.g. Student currently reads at a Grade 1 level with 85% accuracy on decodable text. Struggles with vowel teams and multisyllabic words.' },
  { name: 'target_skill', label: 'Target Skill', type: 'text', placeholder: 'e.g. Read grade-level text with improved fluency and comprehension', full: true },
]

const PROMPT = `Write a SMART IEP goal for the following student:
Grade Level: {grade}
Goal Area: {area}
Current Performance Level: {current_performance}
Target Skill: {target_skill}

Produce the following:

1. SMART IEP GOAL (1 complete goal statement):
   - Specific: Names the exact skill or behavior
   - Measurable: Includes a clear metric (percentage accuracy, frequency, rate, score)
   - Achievable: Appropriate stretch from current performance level
   - Relevant: Directly connected to the student's educational needs
   - Time-bound: Includes a timeframe (typically "by [end of IEP period]" or "within X months")
   Format: "By [timeframe], [student] will [observable behavior] as measured by [assessment method], with [criterion for mastery], across [number] of [consecutive trials/sessions/opportunities]."

2. SHORT-TERM OBJECTIVES / BENCHMARKS (2-3 stepping-stone objectives that build toward the annual goal)

3. PROGRESS MONITORING NOTE: Suggest how progress toward this goal can be measured and tracked

4. CONDITION STATEMENT: Describe the conditions under which the behavior will be demonstrated (e.g., "given a grade-level reading passage," "when presented with a social situation")

5. IMPORTANT REMINDER: Note that this AI-generated goal is a drafting aid only and must be reviewed, individualized, and approved by qualified special education professionals before inclusion in any student's IEP.`

const RELATED = [
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Plan differentiated activities for students working toward IEP goals.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Write supportive feedback for students with IEPs on their assignments.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write measurable objectives that complement IEP goal language.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Draft a professional parent email for IEP meeting coordination.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'IEP Goal Writer — GogyAI',
    url: 'https://gogyai.com/iep-goal-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI IEP Goal Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/iep-goal-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI IEP Goal Writer: Writing SMART Goals for Special Education',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/iep-goal-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can AI write IEP goals?', acceptedAnswer: { '@type': 'Answer', text: 'AI can generate structurally correct SMART IEP goal drafts that provide a strong starting framework. However, AI-generated IEP goals must be reviewed, individualized, and formally approved by a qualified IEP team — including special education teachers, related service providers, administrators, and parents — before inclusion in any student\'s IEP. AI output is a professional drafting aid, not a legally compliant IEP document.' } },
      { '@type': 'Question', name: 'What makes an IEP goal SMART?', acceptedAnswer: { '@type': 'Answer', text: 'A SMART IEP goal is Specific (names the exact skill), Measurable (includes a metric — percentage, frequency, rate), Achievable (an appropriate stretch from current performance), Relevant (connected to educational needs), and Time-bound (includes a timeframe for mastery). Every word in an IEP goal should be intentional and defensible.' } },
      { '@type': 'Question', name: 'What areas can IEP goals cover?', acceptedAnswer: { '@type': 'Answer', text: 'IEP goals can address any area that affects a student\'s ability to access their education: reading, mathematics, writing, behavior and self-regulation, communication and speech-language, social skills, motor skills, adaptive behavior, and transition planning. Goals must be directly linked to the student\'s disability-related educational needs.' } },
      { '@type': 'Question', name: 'What is the difference between an IEP goal and a short-term objective?', acceptedAnswer: { '@type': 'Answer', text: 'An annual IEP goal describes the skill level the student is expected to reach by the end of the IEP period (typically one year). Short-term objectives or benchmarks are the measurable stepping stones that track progress toward that annual goal — typically documented at 3-month intervals. This tool generates both the annual goal and 2-3 short-term objectives.' } },
      { '@type': 'Question', name: 'Who should review AI-generated IEP goals?', acceptedAnswer: { '@type': 'Answer', text: 'Every AI-generated IEP goal must be reviewed by the full IEP team before use in any official document. This includes: the special education teacher of record, relevant related service providers (speech-language pathologist, OT, PT, school psychologist), the general education teacher (where applicable), school administration, and the student\'s parents or guardians. IDEA (Individuals with Disabilities Education Act) requires IEP goals to reflect the student\'s unique needs as determined by the team, not an AI tool.' } },
      { '@type': 'Question', name: 'How do I measure progress on an IEP goal?', acceptedAnswer: { '@type': 'Answer', text: 'Progress monitoring for IEP goals should be systematic and data-based. Common methods include: curriculum-based measurement (CBM) probes for reading and math; behavior observation data sheets for behavior goals; speech-language assessments for communication goals; and rubric-scored writing samples for writing goals. Progress should be reported to parents at least as often as report cards are issued.' } },
      { '@type': 'Question', name: 'Can I use AI-generated IEP goals without specialist review?', acceptedAnswer: { '@type': 'Answer', text: 'No. Using AI-generated IEP goals without qualified professional review is not legally or ethically appropriate. IEPs are legal documents under IDEA, and every goal must reflect the specific student\'s individualized needs as documented by assessment and professional judgment. AI-generated goals are starting drafts that require expert review, modification, and team approval before any official use.' } },
      { '@type': 'Question', name: 'Is the GogyAI IEP goal writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function IepGoalWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI IEP Goal Writer</h1>
        <p className="text-slate-600 mb-6">Generate SMART IEP goals with measurable criteria, conditions, and short-term objectives as a professional drafting starting point.</p>

        {/* Prominent professional review disclaimer */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6">
          <p className="font-semibold text-amber-800 mb-1">Important: Professional Review Required</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            AI-generated IEP goals are a drafting aid only. Every goal generated by this tool must be reviewed, individualized, and formally approved by a qualified IEP team — including special education teachers, related service providers, administrators, and parents/guardians — before inclusion in any student&apos;s IEP. IEPs are legal documents under IDEA. Do not use AI-generated goals in official documents without full team review.
          </p>
        </div>

        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="iep-goal-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI IEP Goal Writer: Writing SMART Goals for Special Education</h2>

        {/* Article-level disclaimer */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-7 text-sm text-amber-800 leading-relaxed">
          <p className="font-semibold mb-2">Professional Review Requirement — Please Read</p>
          <p>
            AI-generated IEP goals produced by this tool are drafting aids for qualified special education professionals. They are <strong>not</strong> ready-to-use IEP documents. Every goal must be reviewed and approved by the complete IEP team — special education teacher of record, related service providers, general education teacher (where applicable), school administration, and parents/guardians — before inclusion in any student&apos;s IEP. IEPs are legal documents governed by the Individuals with Disabilities Education Act (IDEA). Using AI-generated goals without qualified professional review and individualization is not legally or professionally appropriate.
          </p>
        </div>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains what SMART IEP goals are, how they are structured, and how AI can serve as a drafting aid for special education professionals.</li>
            <li>Special education teachers, IEP case managers, and related service providers who write goals regularly will benefit most.</li>
            <li>The AI IEP goal writer generates a complete SMART goal, short-term objectives, progress monitoring notes, and condition statements from your inputs.</li>
            <li>All AI-generated goals must be reviewed and approved by the full IEP team before use in any official document — this is a legal and professional requirement.</li>
            <li>Do not enter student names, ID numbers, or identifying information into this tool.</li>
            <li>AI output is a professional starting draft — not a legally compliant, finalized IEP goal.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing effective IEP goals is one of the most technically demanding tasks in special education. A well-written SMART goal must simultaneously reflect the student&apos;s current performance, target an achievable stretch within a meaningful timeframe, name an observable and measurable behavior, specify the conditions under which it will be demonstrated, and define mastery criteria precisely enough to drive data collection. Getting all of those elements right, for every goal, across every student on a caseload, is a significant professional undertaking.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI IEP goal writer serves as a professional drafting assistant — generating the structural scaffolding of a SMART goal that the special education professional then reviews, individualizes, and refines with their specific knowledge of the student and the IEP team&apos;s collaborative input. The AI handles the framework; the professional handles the legal and individualization requirements that no AI tool can fulfill.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI IEP Goal Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI IEP goal writer takes a student&apos;s grade level, goal area, current performance description, and target skill, and generates a complete SMART goal statement with all required components: the timeframe, observable behavior, measurement method, mastery criterion, and trial specifications. It also generates 2–3 short-term objectives as benchmarks, a progress monitoring suggestion, and a condition statement.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output is a structured professional draft — correctly formatted, clearly written, and grounded in IDEA-aligned goal-writing conventions. It is the equivalent of a first draft from an experienced colleague: useful as a starting point, but requiring review and individualization before it can function as an official document.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why SMART IEP Goal Writing Matters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          IEP goals are not just administrative requirements — they are the operational heart of a student&apos;s special education program. Well-written goals drive everything downstream: what skills are taught, how progress is measured, what services are delivered, and how the effectiveness of those services is evaluated. A vague goal produces vague programming and unmeasurable outcomes. A SMART goal produces coherent instruction and defensible data.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          IDEA requires annual goals that are measurable and describe what the student can reasonably be expected to accomplish in one year. Courts and due process hearing officers have consistently held that goals must be specific, measurable, and connected to the student&apos;s documented present levels of performance. The quality of IEP goals is a legal standard, not just a professional one.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For special education teachers carrying caseloads of 15–25 students, each requiring multiple annual goals across multiple areas, the volume of goal-writing work is substantial. A drafting tool that produces structurally sound goals for professional review can meaningfully compress the time investment in goal construction without reducing the quality of the final product.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter the student&apos;s grade level, select the goal area (reading, math, writing, behavior, communication, or social skills), describe the student&apos;s current performance in specific terms, and enter the target skill. The AI generates a complete SMART goal with all structural components, two to three short-term objectives, and supplementary notes for the IEP professional.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The current performance level field is the most important input. Specific, data-informed descriptions of present levels (e.g., &quot;reads at a Grade 1 level with 85% accuracy on decodable text; struggles with vowel teams and multisyllabic words&quot;) produce SMART goals calibrated to the student&apos;s actual starting point. Vague present levels produce goals that cannot be properly anchored to the student&apos;s documented needs.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the IEP Goal Writer as a Professional Drafting Tool</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Adeyemi is a special education case manager with 18 students on his caseload. He is preparing for IEP season and uses the tool to generate first-draft goals that he then reviews and refines before presenting to each student&apos;s IEP team.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Grade Level:</strong> &quot;Grade 3.&quot;</li>
          <li><strong>Goal Area:</strong> Reading / Literacy.</li>
          <li><strong>Current Performance Level:</strong> &quot;Student currently reads at a Grade 1.5 level with 82% accuracy on decodable passages. Phonemic awareness is strong but student consistently struggles with vowel digraphs and r-controlled vowels. Oral reading fluency is 42 words per minute on Grade 2 passages.&quot;</li>
          <li><strong>Target Skill:</strong> &quot;Read Grade 2 level text with improved accuracy and fluency toward Grade 3 level by end of IEP period.&quot;</li>
          <li>He clicks <strong>Generate</strong> and receives a complete SMART goal with short-term objectives and progress monitoring guidance.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          He reviews the generated goal, adjusts the mastery criterion from 90% to 95% to match his district&apos;s standards, changes the progress monitoring tool to the specific CBM probe set his school uses, and removes a short-term objective that doesn&apos;t align with the student&apos;s specific phonics sequence. He brings the revised goal to the IEP meeting for team review. The drafting phase took 4 minutes instead of 20.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use specific, data-based present levels</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The best IEP goals are anchored in present levels that include specific assessment data — reading levels, accuracy percentages, fluency rates, behavior frequency counts. The more data you include in the current performance field, the more accurately calibrated the generated goal will be to the student&apos;s actual starting point.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Review short-term objectives for instructional sequence alignment</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated short-term objectives reflect general developmental and skill sequences. Review them against your specific instructional program&apos;s scope and sequence — particularly for structured literacy, math intervention, and communication programs that have specific skill hierarchies. Adjust the objective sequence to match what you will actually teach.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always take generated goals to the team</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated goals are a starting point for professional discussion, not a replacement for it. Presenting a well-structured draft goal to the IEP team is efficient — it gives the team something concrete to react to and improve, rather than starting from a blank page. The team&apos;s review, the parents&apos; input, and the related service providers&apos; expertise are all legally required parts of the goal-writing process.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This tool does not produce legally compliant IEP documents. AI-generated goals must not be used in any official IEP without full team review, individualization, and professional approval. IDEA requires IEP goals to reflect the unique needs of the individual student as determined by the team — a legal standard that an AI tool cannot meet without human professional oversight. For planning classroom activities that serve the full range of learners including those with IEPs, the <Link href="/differentiated-instruction-planner" className="text-brand-700 underline">Differentiated Instruction Planner</Link> generates tiered activities aligned to any lesson objective.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool does not know your district&apos;s specific IEP goal format, your state&apos;s required language conventions, or your school&apos;s progress monitoring tools. Generated goals follow general SMART goal conventions and will require adjustment to meet local format requirements. Check your district&apos;s IEP writing guidelines before finalizing any generated goal.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For behavior goals, the tool generates goals aligned with general behavior intervention frameworks. For students with significant behavioral needs requiring a Functional Behavior Assessment (FBA) or <Link href="/behavior-intervention-plan-writer" className="text-brand-700 underline">Behavior Intervention Plan</Link>, work with your school psychologist or behavior specialist — AI-generated behavior goals cannot substitute for that professional assessment process.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Student Confidentiality</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          IEP documents are among the most sensitive records a school holds — protected by both FERPA and IDEA. Do not enter student names, ID numbers, diagnoses, school names, or any identifying information into this tool. Describe present performance levels using observational and assessment language only — the same information you would include in an anonymized case study. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Find the full range of special education and classroom planning tools at the <Link href="/" className="text-brand-700 underline">free AI tools library on GogyAI</Link>.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Check your school district&apos;s AI use policy before incorporating any AI tool into IEP-related workflows. Many districts have specific guidance on AI tools in special education contexts, given the sensitivity of student records and the legal requirements of IDEA.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'Can AI write IEP goals?', a: "AI can generate structurally correct SMART IEP goal drafts that provide a strong starting framework. However, AI-generated goals must be reviewed, individualized, and formally approved by a qualified IEP team before inclusion in any student's IEP. AI output is a professional drafting aid, not a legally compliant IEP document." },
            { q: 'What makes an IEP goal SMART?', a: 'A SMART IEP goal is Specific (names the exact skill), Measurable (includes a metric), Achievable (an appropriate stretch from current performance), Relevant (connected to educational needs), and Time-bound (includes a timeframe). Every word should be intentional and defensible.' },
            { q: 'What areas can IEP goals cover?', a: "IEP goals can address reading, math, writing, behavior and self-regulation, communication and speech-language, social skills, motor skills, adaptive behavior, and transition planning — any area affecting a student's ability to access their education." },
            { q: 'What is the difference between an IEP goal and a short-term objective?', a: "An annual IEP goal describes the skill level expected by the end of the IEP period (typically one year). Short-term objectives are measurable stepping stones tracking progress toward that annual goal — typically documented at 3-month intervals." },
            { q: 'Who should review AI-generated IEP goals?', a: "The full IEP team: the special education teacher of record, relevant related service providers, the general education teacher (where applicable), school administration, and parents/guardians. IDEA requires goals to reflect the student's unique needs as determined by the team." },
            { q: 'How do I measure progress on an IEP goal?', a: "Progress monitoring should be systematic and data-based. Common methods include CBM probes for reading and math, behavior observation data sheets, speech-language assessments, and rubric-scored writing samples. Progress must be reported to parents at least as frequently as report cards." },
            { q: 'Can I use AI-generated IEP goals without specialist review?', a: "No. Using AI-generated IEP goals without qualified professional review is not legally or ethically appropriate. IEPs are legal documents under IDEA, and every goal must reflect the specific student's individualized needs as documented by assessment and professional judgment." },
            { q: 'Is the GogyAI IEP goal writer free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'student-feedback-writer', name: 'Student Feedback Writer' }}
        next={{ slug: 'worksheet-generator', name: 'Worksheet Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
