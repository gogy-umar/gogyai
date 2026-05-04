import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Student Feedback Writer — Free AI Tool for Teachers',
  description: 'Generate personalized, constructive student feedback for any assignment. Free AI student feedback writer for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/student-feedback-writer' },
}

const FIELDS = [
  { name: 'assignment_type', label: 'Assignment Type', type: 'text', placeholder: 'e.g. Math problem set, Science lab report, Oral presentation' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 7' },
  {
    name: 'performance_level',
    label: 'Performance Level',
    type: 'select',
    options: [
      { value: 'excellent', label: 'Excellent / Outstanding' },
      { value: 'good', label: 'Good / Above Average' },
      { value: 'satisfactory', label: 'Satisfactory / Meeting Expectations' },
      { value: 'needs-improvement', label: 'Needs Improvement / Below Grade Level' },
    ],
    default: 'good',
  },
  { name: 'strengths', label: 'Strengths', type: 'textarea', placeholder: 'e.g. Clear thesis statement, strong use of supporting examples, good organization' },
  { name: 'areas_to_improve', label: 'Areas to Improve', type: 'textarea', placeholder: 'e.g. Transitions between paragraphs need work, conclusion does not connect back to thesis' },
  {
    name: 'tone',
    label: 'Feedback Tone',
    type: 'select',
    options: [
      { value: 'encouraging', label: 'Encouraging' },
      { value: 'direct', label: 'Direct & Clear' },
      { value: 'balanced', label: 'Balanced (recommended)' },
    ],
    default: 'balanced',
  },
]

const PROMPT = `Write personalized, constructive student feedback for the following:
Assignment Type: {assignment_type}
Grade Level: {grade}
Performance Level: {performance_level}
Strengths: {strengths}
Areas to Improve: {areas_to_improve}
Feedback Tone: {tone}

Structure the feedback as follows:

1. OPENING (1 sentence): Acknowledge the student's effort and establish a supportive tone

2. STRENGTHS (2-3 sentences): Highlight the specific strengths provided — be concrete and specific. Explain why each strength is valuable, not just that it exists.

3. AREAS FOR GROWTH (2-3 sentences): Address the improvement areas constructively. For each area:
   - Name the issue specifically
   - Explain its impact
   - Offer one actionable suggestion for improvement

4. PRIORITY ACTION (1-2 sentences): Identify the single most important next step the student should take to improve

5. ENCOURAGING CLOSE (1 sentence): End with a genuine, specific, forward-looking statement

Tone guidelines:
- Encouraging: Warm, positive-focused, growth-oriented — suitable for students who need confidence building
- Direct & Clear: Honest, specific, no filler — suitable for students who prefer unvarnished feedback
- Balanced: Combines clear honesty with supportive language — professional and motivating

Write the feedback directly to the student using "you" language. Do not use [Student Name] — the teacher will address the student personally.`

const RELATED = [
  { name: 'Essay Feedback Generator', slug: 'essay-feedback-generator', desc: 'Generate in-depth essay feedback with direct references to the student text.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build a rubric to align your feedback to consistent scoring criteria.' },
  { name: 'Report Card Comment Generator', slug: 'report-card-comment-generator', desc: 'Generate formal report card comments alongside your student feedback.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: "Write a parent email to accompany feedback you're sharing at home." },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Student Feedback Writer — GogyAI',
    url: 'https://gogyai.com/student-feedback-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Student Feedback Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/student-feedback-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Student Feedback Writer: Constructive, Personalized Feedback for Every Student',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/student-feedback-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What makes student feedback effective?', acceptedAnswer: { '@type': 'Answer', text: 'Effective feedback is specific (referencing actual work), timely (given while revision is possible), actionable (tells students what to do next, not just what was wrong), and growth-oriented (focused on improvement trajectory, not fixed ability). Research by John Hattie identifies feedback as one of the highest-impact influences on student learning.' } },
      { '@type': 'Question', name: 'How specific should student feedback be?', acceptedAnswer: { '@type': 'Answer', text: 'As specific as possible. "Good job" is useless. "Your use of the topic sentence in paragraph three clearly connected your evidence to your argument — do the same in paragraph one, which currently lacks that connection" is actionable. Specificity is what separates feedback that improves learning from feedback that gets ignored.' } },
      { '@type': 'Question', name: 'How do I balance positive and critical feedback?', acceptedAnswer: { '@type': 'Answer', text: 'The "sandwich" approach (positive-negative-positive) is popular but often produces generic, unmemorable feedback. More effective is the "strengths first, then growth" structure — which this tool uses. Strengths are named specifically so students know what to keep doing, then growth areas are named with clear action steps so students know exactly what to improve.' } },
      { '@type': 'Question', name: 'What tone should I use for struggling students?', acceptedAnswer: { '@type': 'Answer', text: "For students who are struggling academically or who have low confidence, the Encouraging tone is most effective. It leads with genuine strengths (even small ones), frames growth areas as 'the next step' rather than deficits, and closes with forward-looking confidence. Be specific even in encouraging tone — generic praise rings hollow to students who know they're struggling." } },
      { '@type': 'Question', name: 'How much feedback should I give on each assignment?', acceptedAnswer: { '@type': 'Answer', text: "Research suggests students can act on 2-3 specific improvement points effectively. More than that and they tend to become overwhelmed and act on none. This tool generates structured feedback with a single priority next step — which is intentional. Less feedback, more clearly prioritized, produces more improvement than comprehensive criticism." } },
      { '@type': 'Question', name: 'Should feedback be given before or after grading?', acceptedAnswer: { '@type': 'Answer', text: "Ideally, feedback comes before the final grade — on drafts, practice versions, or with revision opportunities built in. When students receive feedback alongside a final grade, they often read the grade, process the emotion, and skip the feedback. Consider separating the two: feedback first, then grade once revision is complete." } },
      { '@type': 'Question', name: 'How do I make sure students actually read my feedback?', acceptedAnswer: { '@type': 'Answer', text: "Create a structured response to feedback. Require students to write one sentence summarizing the most important thing they learned from the feedback, or identify one specific change they will make in their next assignment. This 'feedback loop closure' requires students to engage with the content rather than just receiving it." } },
      { '@type': 'Question', name: 'Is the GogyAI student feedback writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function StudentFeedbackWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Student Feedback Writer</h1>
        <p className="text-slate-600 mb-6">Generate personalized, constructive feedback for any assignment — with strengths, improvement areas, and a clear priority next step.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="student-feedback-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Student Feedback Writer: Constructive, Personalized Feedback for Every Student</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers what makes student feedback effective and how AI can help you produce quality feedback at scale.</li>
            <li>Teachers who provide written feedback on assignments across any subject or grade level will benefit most.</li>
            <li>The AI student feedback writer generates five-section structured feedback — specific to the strengths and areas you identify — in seconds.</li>
            <li>Feedback that takes 5–8 minutes per student to write carefully can be drafted in under 90 seconds with AI.</li>
            <li>Always review and personalize — add the student&apos;s name and any specific reference to their work before sharing.</li>
            <li>Do not enter student names or personally identifying information into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          John Hattie&apos;s synthesis of over 800 meta-analyses of educational research placed feedback as one of the highest-impact influences on student achievement — ahead of class size, homework, and most instructional methods. The catch is that not all feedback is equal. Generic feedback (&quot;nice work&quot; or &quot;needs more detail&quot;) produces no measurable learning gain. Specific, actionable feedback tied to clear standards produces the improvement the research predicts.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Writing specific, actionable feedback for 30 students on every assignment is one of the most demanding tasks in teaching. An AI student feedback writer handles the structure and language; you provide the specific observations that make it genuine and useful.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Student Feedback Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI student feedback writer takes your observations about a student&apos;s performance — their strengths and areas to improve — and produces a structured, professional feedback response. The output includes an opening acknowledgment, specific strength comments explaining their value, growth area guidance with actionable strategies, a single priority next step, and an encouraging close. All in a coherent paragraph structure written directly to the student.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The three tone options (encouraging, direct, balanced) allow you to match the feedback style to the student&apos;s needs and your relationship with them. Encouraging tone prioritizes confidence and growth framing; direct tone prioritizes clarity and specificity; balanced tone combines both, which is appropriate for most classroom feedback contexts.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Personalized Feedback Matters for Student Growth</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The mechanism by which feedback improves learning is well understood: it closes the gap between what students produced and what they were aiming for by making that gap specific and actionable. &quot;Your essay needs a better conclusion&quot; doesn&apos;t close that gap — it names it. &quot;Your conclusion restates the introduction word-for-word rather than synthesizing the argument — try connecting your evidence to the broader question you opened with&quot; gives the student the specific revision move they need.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Personalized feedback also communicates to students that their teacher has engaged with their specific work — not just assigned a grade. This relational signal matters for motivation, particularly for students who are struggling. When students feel genuinely seen by a teacher, they are more willing to take the risk of engaging with difficult material.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter the assignment type, grade level, and performance level. In the strengths and areas to improve fields, describe your actual observations — what the student did well, what needs work — in your own words. Select a tone. The AI transforms your observations into structured, student-facing feedback language.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The strengths and areas to improve fields are the engine of the output. Specific inputs produce specific feedback; vague inputs produce generic feedback. You bring the observational knowledge; the AI brings the constructive framing and language.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Student Feedback Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Martinez teaches 7th-grade English Language Arts and has just graded a set of argumentative essays. For one student who is above average but whose essays consistently trail off at the conclusion, she wants to write feedback that acknowledges genuine strengths while targeting the persistent weakness.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Assignment Type:</strong> &quot;5-paragraph argumentative essay.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 7.&quot;</li>
          <li><strong>Performance Level:</strong> Good / Above Average.</li>
          <li><strong>Strengths:</strong> &quot;Clear thesis statement that takes a specific position. Strong supporting examples in body paragraphs 2 and 3 with relevant details. Good topic sentences throughout.&quot;</li>
          <li><strong>Areas to Improve:</strong> &quot;Conclusion only restates the introduction rather than synthesizing the argument. Body paragraph 1 evidence is too general — needs a specific example. Needs stronger transition sentences between paragraphs.&quot;</li>
          <li><strong>Tone:</strong> Balanced.</li>
          <li>She clicks <strong>Generate</strong> and receives a complete feedback response.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          She reads the output, adds the student&apos;s name to the opening, adjusts one sentence to reference a specific passage she remembers from the essay, and pastes it into the LMS comments field. Total time: under 3 minutes for a feedback response that genuinely targets this student&apos;s specific situation.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Enter specific, not categorical observations</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          &quot;Good introduction&quot; produces generic feedback. &quot;Opening hook uses a surprising statistic that immediately establishes relevance&quot; produces specific feedback the student can recognize as belonging to their work. The difference between useful and useless AI feedback is the specificity of your input.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Match tone to the student&apos;s profile</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Use Encouraging for students who are below grade level or who struggle with motivation. Use Direct for confident students who benefit from clear, unvarnished information. Use Balanced for most students — it provides the clear specificity of direct feedback with the motivational support of encouraging tone.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This tool generates feedback based on your descriptions — it cannot read the actual student assignment. For essay feedback that references specific passages from student writing, use the <Link href="/essay-feedback-generator" className="text-brand-700 underline">Essay Feedback Generator</Link>, which accepts the full essay text and generates feedback with direct references to the student&apos;s writing. This tool is for generating feedback from teacher observations across any assignment type.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI also doesn&apos;t know the individual student&apos;s history, learning needs, or emotional state. For students with IEPs or significant learning differences, review the tone and language of any generated feedback against their specific needs and any documented communication guidelines in their support plan. For standardized scoring that makes your assessment criteria visible to both you and your students, the <Link href="/rubric-builder" className="text-brand-700 underline">Rubric Builder</Link> generates analytic rubrics for any assignment type.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter student names or identifying information into this tool. Describe strengths and growth areas using general observational language. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Add the student&apos;s name to the feedback after generating, in your LMS or word processor. Explore <Link href="/" className="text-brand-700 underline">GogyAI&apos;s complete teacher toolkit</Link> for all 30 free tools covering assessment, feedback, planning, and communication.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What makes student feedback effective?', a: 'Effective feedback is specific, timely, actionable, and growth-oriented. Research by John Hattie identifies feedback as one of the highest-impact influences on student learning — but only when it is specific and actionable, not generic.' },
            { q: 'How specific should student feedback be?', a: '"Good job" is useless. Feedback that names a specific element of the work and explains what to do next is actionable. Specificity is what separates feedback that improves learning from feedback that gets ignored.' },
            { q: 'How do I balance positive and critical feedback?', a: '"Strengths first, then growth" is more effective than the generic sandwich approach. Strengths are named specifically so students know what to keep doing; growth areas are paired with clear action steps.' },
            { q: 'What tone should I use for struggling students?', a: "Use the Encouraging tone for students with low confidence. Lead with genuine strengths, frame growth areas as 'next steps,' and close with forward-looking confidence. Be specific even in encouraging tone — generic praise rings hollow." },
            { q: 'How much feedback should I give on each assignment?', a: "Students can act on 2-3 specific improvement points effectively. More than that and they often become overwhelmed and act on none. This tool generates a single priority next step intentionally — less feedback, more clearly prioritized, produces more improvement." },
            { q: 'Should feedback be given before or after grading?', a: "Ideally, feedback comes before the final grade — on drafts with revision opportunities. When students receive feedback alongside a final grade, they often skip the feedback. Consider separating the two for maximum learning impact." },
            { q: 'How do I make sure students actually read my feedback?', a: "Create a structured response requirement. Ask students to write one sentence summarizing the most important thing they learned from the feedback, or identify one specific change for their next assignment. This requires active engagement with the content." },
            { q: 'Is the GogyAI student feedback writer free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'newsletter-draft-generator', name: 'Newsletter Draft Generator' }}
        next={{ slug: 'iep-goal-writer', name: 'IEP Goal Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
