import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Rubric Builder — Free AI Tool for Teachers',
  description: 'Generate complete scoring rubrics with criteria, performance levels, and descriptors. Free AI rubric builder for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/rubric-builder' },
}

const FIELDS = [
  { name: 'assignment_type', label: 'Assignment Type', type: 'text', placeholder: 'e.g. Persuasive essay, Science lab report, Oral presentation' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 9' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. English Language Arts' },
  { name: 'num_criteria', label: 'Number of Criteria', type: 'number', placeholder: '4', default: '4' },
  {
    name: 'scale',
    label: 'Scoring Scale',
    type: 'select',
    options: [
      { value: '4-point', label: '4-Point Scale (1–4)' },
      { value: '5-point', label: '5-Point Scale (1–5)' },
      { value: 'percentage', label: 'Percentage (0–100%)' },
    ],
    default: '4-point',
  },
]

const PROMPT = `Build a complete scoring rubric for the following assignment:
Assignment Type: {assignment_type}
Grade Level: {grade}
Subject: {subject}
Number of Criteria: {num_criteria}
Scoring Scale: {scale}

For each criterion:
1. Name the criterion clearly
2. Provide descriptors for each performance level on the {scale} scale
3. Make descriptors specific, observable, and distinguishable from adjacent levels
4. Progress clearly from lowest to highest performance

Performance level labels to use:
- For 4-point: 1=Beginning, 2=Developing, 3=Proficient, 4=Exemplary
- For 5-point: 1=Beginning, 2=Developing, 3=Approaching, 4=Proficient, 5=Exemplary
- For percentage: Below 60%=Beginning, 60-69%=Developing, 70-79%=Approaching, 80-89%=Proficient, 90-100%=Exemplary

After the rubric, provide:
- A brief usage note for teachers on how to apply this rubric
- One suggestion for sharing it with students as a pre-assignment guide`

const RELATED = [
  { name: 'Quiz & MCQ Generator', slug: 'quiz-mcq-generator', desc: 'Generate quizzes to pair with rubric-assessed assignments.' },
  { name: 'Essay Feedback Generator', slug: 'essay-feedback-generator', desc: 'Generate structured written feedback aligned to your rubric criteria.' },
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build the lesson plan that leads to the assignment your rubric assesses.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Generate personalized student feedback based on rubric performance levels.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Rubric Builder — GogyAI',
    url: 'https://gogyai.com/rubric-builder',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Rubric Builder',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/rubric-builder',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Rubric Builder for Teachers: Design Fair, Clear Scoring Rubrics',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/rubric-builder',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is a rubric and why should teachers use one?', acceptedAnswer: { '@type': 'Answer', text: 'A rubric is a scoring guide that defines quality standards for an assignment through criteria and performance level descriptors. Rubrics benefit teachers by making grading faster and more consistent. They benefit students by clarifying expectations before the work begins, which research consistently links to improved performance.' } },
      { '@type': 'Question', name: 'What is the difference between analytic and holistic rubrics?', acceptedAnswer: { '@type': 'Answer', text: 'An analytic rubric assesses each criterion separately — content, organization, mechanics, for example — and provides a score for each. A holistic rubric assesses the overall quality of work in a single score. This generator creates analytic rubrics, which are more informative for feedback and growth.' } },
      { '@type': 'Question', name: 'How many criteria should a rubric have?', acceptedAnswer: { '@type': 'Answer', text: 'Most effective rubrics have 3–6 criteria. Fewer than 3 may miss important dimensions; more than 6 can become unwieldy to use and hard for students to track. The default of 4 criteria covers most assignments well. Adjust based on the complexity of the task.' } },
      { '@type': 'Question', name: 'Which scoring scale should I choose?', acceptedAnswer: { '@type': 'Answer', text: 'The 4-point scale is the most common in K-12 education and aligns to standards-based grading systems. The 5-point scale offers more nuance between proficiency levels. The percentage scale is useful when scores must convert directly to letter grades. Choose the scale that matches your school\'s grading system.' } },
      { '@type': 'Question', name: 'Should I share the rubric with students before the assignment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the clearest research-backed practices in assessment design. Students who see the rubric before working understand the targets more clearly and produce higher-quality work. The generated rubric includes a note on pre-assignment distribution.' } },
      { '@type': 'Question', name: 'Can I use this rubric builder for project-based learning assessments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Enter the assignment type as your PBL product (e.g., "research presentation," "engineering design prototype," "documentary video") and adjust the number of criteria to cover all relevant dimensions of the project.' } },
      { '@type': 'Question', name: 'How do I make rubric descriptors more specific?', acceptedAnswer: { '@type': 'Answer', text: 'After generating, review each descriptor and replace vague words like "good" or "adequate" with observable, specific language. "Uses three or more supporting pieces of evidence" is better than "uses evidence." The AI provides strong starting language; specificity improves with your subject knowledge.' } },
      { '@type': 'Question', name: 'Is the GogyAI rubric builder free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function RubricBuilderPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Rubric Builder</h1>
        <p className="text-slate-500 mb-6">Generate a complete scoring rubric with criteria, performance levels, and clear descriptors for any assignment.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="rubric-builder" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Rubric Builder for Teachers: Design Fair, Clear Scoring Rubrics</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers what rubrics are, why they matter, and how AI can help you build them efficiently.</li>
            <li>Teachers who assess essays, projects, presentations, and lab reports will benefit most.</li>
            <li>An AI rubric builder generates a complete analytic rubric with criteria, performance level labels, and specific descriptors from your assignment type and settings.</li>
            <li>Rubrics shared before an assignment consistently improve student performance — they define the target, not just measure it.</li>
            <li>AI rubrics are strong starting drafts — review descriptors for specificity and alignment to your grading practices before use.</li>
            <li>No student information should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing a rubric from scratch is one of those tasks that seems like it should take 15 minutes and regularly takes an hour. Getting the criteria right — not too many, not too few — and then writing four performance level descriptors per criterion that are genuinely distinguishable from each other requires careful attention to both the assignment and the grade-level standards. An AI rubric builder handles the structural drafting, giving you a complete, formatted rubric to refine rather than blank cells to fill.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide explains how rubrics work in effective assessment practice, how this tool generates them, and how to refine the output for your classroom.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Rubric Builder?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI rubric builder takes your assignment type, grade level, subject, number of criteria, and scoring scale, and generates a complete analytic rubric. Each criterion is named, and each performance level (Beginning, Developing, Proficient, Exemplary) is described with specific, observable language that makes scoring decisions defensible and consistent.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI identifies the relevant assessment dimensions for your assignment type — an essay rubric includes content, organization, evidence use, and mechanics; a science lab report rubric includes procedure accuracy, data recording, analysis, and conclusion writing. The criteria selection is informed by common assessment frameworks for each assignment type at the specified grade level.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Rubrics Matter for Teaching and Learning</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Rubrics are among the most consistently evidence-supported tools in assessment design. Research by Jonsson and Svingby (2007) found that well-designed rubrics improve the reliability of teacher scoring and, when shared with students in advance, consistently improve the quality of student work. The mechanism is straightforward: students perform better on tasks when they understand what quality looks like before they begin.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For teachers, rubrics protect grading consistency — especially important for subjective assignments like writing and presentations, where implicit biases and fatigue can affect scores. A rubric externalizes the standard, making it visible to teacher and student alike.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Rubrics also facilitate feedback. Instead of writing the same comments on twenty essays, a teacher can point to a specific descriptor and explain what moving to the next performance level would require. This is faster and more actionable for students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter your assignment type, grade level, subject, number of criteria, and scoring scale. The AI generates an analytic rubric with named criteria, performance levels labeled according to your scale, and specific descriptors for each cell. The output also includes a usage note for teachers and a suggestion for sharing the rubric with students as a pre-assignment guide.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The scoring scale option determines both the range and the labels. The 4-point scale (Beginning to Exemplary) is the most common in K-12 and maps cleanly to standards-based grading. The percentage scale converts directly to letter grades, which is useful in grading systems that require numerical scores.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Rubric Builder</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Patel teaches 9th-grade English Language Arts and is assigning a five-paragraph persuasive essay. She wants a rubric that she can share with students the day the assignment is introduced, and that she can use consistently across all 30 essays.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Assignment Type:</strong> &quot;Five-paragraph persuasive essay.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 9.&quot;</li>
          <li><strong>Subject:</strong> &quot;English Language Arts.&quot;</li>
          <li><strong>Number of Criteria:</strong> 4.</li>
          <li><strong>Scoring Scale:</strong> 4-Point Scale.</li>
          <li>She clicks <strong>Generate</strong> and receives a rubric with four criteria: Argument &amp; Claim, Evidence &amp; Support, Organization, and Conventions. Each criterion has four performance level descriptors.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          She reviews the Conventions criterion and updates the Proficient descriptor to match her school&apos;s specific grammar expectations. She adds the rubric to the assignment handout and introduces it on day one. On grading day, she moves through the rubrics in about 4 minutes per essay instead of 8 — a 50% time saving on a 30-essay grading session.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the assignment type</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          &quot;Essay&quot; generates generic criteria. &quot;Five-paragraph argumentative essay on a historical event — students must include primary source evidence&quot; generates criteria that include evidence sourcing as a distinct dimension. The assignment description drives the criteria selection.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Replace vague descriptor language after generation</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Review generated descriptors for language like &quot;somewhat&quot; or &quot;generally.&quot; Replace these with observable indicators: &quot;uses 2 pieces of evidence&quot; instead of &quot;uses some evidence.&quot; Specificity is what makes a rubric both useful for grading and clear for students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI rubrics are built on general knowledge of assessment practices for each assignment type — they are not aligned to your specific curriculum standards or assignment prompt. After generation, match the criteria language to your actual assignment requirements and adjust any descriptors that reference content you haven&apos;t covered. Once you&apos;re grading work against the rubric, the <Link href="/essay-feedback-generator" className="text-brand-700 hover:underline">Essay Feedback Generator</Link> produces structured, specific written comments to accompany the rubric score.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool generates text rubrics, not formatted tables. You will need to format the output into a table in your word processor or LMS before use. The structure is provided; the formatting is yours to apply. To plan the lesson that introduces the assignment and rubric, the <Link href="/lesson-plan-generator" className="text-brand-700 hover:underline">Lesson Plan Generator</Link> builds a complete lesson with objectives, activities, and assessment built in.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to build a rubric. Enter only your assignment type, grade, subject, and settings. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Explore <Link href="/" className="text-brand-700 hover:underline">all free tools on GogyAI</Link> for the complete set of assessment, planning, and communication tools available to educators at no cost.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is a rubric and why should teachers use one?', a: 'A rubric is a scoring guide defining quality standards through criteria and performance descriptors. It makes grading faster and more consistent for teachers, and clarifies expectations for students before work begins — both linked to improved outcomes.' },
            { q: 'What is the difference between analytic and holistic rubrics?', a: 'Analytic rubrics assess each criterion separately, providing a score per dimension. Holistic rubrics give one overall quality score. This generator creates analytic rubrics, which are more informative for feedback and student growth.' },
            { q: 'How many criteria should a rubric have?', a: 'Most effective rubrics use 3–6 criteria. The default of 4 covers most assignments well. Fewer than 3 may miss important dimensions; more than 6 becomes difficult to use consistently.' },
            { q: 'Which scoring scale should I choose?', a: 'The 4-point scale is most common in K-12 and aligns to standards-based grading. The 5-point scale adds nuance between levels. The percentage scale converts directly to letter grades. Choose the scale that matches your school\'s grading system.' },
            { q: 'Should I share the rubric with students before the assignment?', a: 'Yes — this is a clear research-backed practice. Students who see the rubric before working understand targets more clearly and produce higher-quality work.' },
            { q: 'Can I use this for project-based learning assessments?', a: 'Yes. Enter your PBL product as the assignment type (e.g., "engineering design prototype" or "documentary video") and adjust criteria count to cover all relevant dimensions.' },
            { q: 'How do I make descriptors more specific?', a: 'Replace vague words like "good" or "adequate" with observable, specific language. "Uses three or more pieces of evidence" is better than "uses evidence." Specificity improves with your subject knowledge applied after generation.' },
            { q: 'Is the GogyAI rubric builder free?', a: 'Yes, completely free. No account or subscription required.' },
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
              <p className="text-sm text-slate-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ToolNav
        prev={{ slug: 'quiz-mcq-generator', name: 'Quiz & MCQ Generator' }}
        next={{ slug: 'essay-feedback-generator', name: 'Essay Feedback Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
