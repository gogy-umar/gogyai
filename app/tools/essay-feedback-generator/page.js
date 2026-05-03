import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Essay Feedback Generator — Free AI Tool for Teachers',
  description: 'Generate constructive essay feedback with strengths and improvement areas. Free AI essay feedback generator for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/essay-feedback-generator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 10' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. English Language Arts' },
  { name: 'assignment_description', label: 'Assignment Description', type: 'text', placeholder: 'e.g. Five-paragraph argumentative essay on a current events topic' },
  { name: 'student_essay', label: 'Student Essay', type: 'textarea', placeholder: 'Paste the student essay here...', full: true },
  {
    name: 'focus',
    label: 'Feedback Focus',
    type: 'select',
    options: [
      { value: 'structure', label: 'Structure & Organization' },
      { value: 'grammar', label: 'Grammar & Mechanics' },
      { value: 'content', label: 'Content & Argument' },
      { value: 'all', label: 'All Areas (comprehensive)' },
    ],
    default: 'all',
  },
]

const PROMPT = `Provide constructive teacher feedback on the following student essay:
Grade Level: {grade}
Subject: {subject}
Assignment Description: {assignment_description}
Feedback Focus: {focus}

Student Essay:
{student_essay}

Structure your feedback as follows:

1. OVERALL IMPRESSION (2-3 sentences summarizing the essay's current level and core strength)

2. STRENGTHS (3-4 specific strengths with direct references to the essay — what the student is doing well)

3. AREAS FOR IMPROVEMENT (3-4 specific, actionable improvement suggestions, each with:
   - What needs to improve
   - Why it matters
   - A concrete strategy for how to improve it)

4. PRIORITY NEXT STEP (The single most important revision the student should make first, with a specific example from their essay)

5. ENCOURAGEMENT CLOSE (1-2 sentences that are genuine, specific, and motivating)

Focus specifically on the {focus} dimension(s) of writing. Be constructive and specific — reference actual phrases or passages from the student's writing wherever possible. Avoid generic praise or generic criticism.`

const RELATED = [
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build a rubric to align your feedback to scoring criteria.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Generate personalized performance feedback for any assignment type.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write objectives that anchor the standards your feedback addresses.' },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: 'Create quick checks to see if students applied your feedback.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Essay Feedback Generator — GogyAI',
    url: 'https://gogyai.com/essay-feedback-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Essay Feedback Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/essay-feedback-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Essay Feedback Generator for Teachers: Constructive, Specific, and Fast',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/essay-feedback-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is it appropriate for teachers to use AI to generate essay feedback?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Using AI to draft a first pass of feedback is a legitimate professional practice, similar to using a feedback template or a rubric as a guide. The teacher reviews, personalizes, and takes ownership of all feedback before it goes to students. AI accelerates the drafting; the teacher provides the professional judgment and final voice.' } },
      { '@type': 'Question', name: 'How accurate is AI-generated essay feedback?', acceptedAnswer: { '@type': 'Answer', text: 'AI feedback is generally accurate for common writing dimensions — thesis clarity, evidence use, paragraph organization, and mechanical errors. It is less reliable for nuanced content-area argumentation or highly subjective stylistic judgments. Always review the feedback for accuracy and relevance before sharing with students.' } },
      { '@type': 'Question', name: 'Will AI feedback be generic or specific to the student essay?', acceptedAnswer: { '@type': 'Answer', text: 'When the full essay is pasted in, the AI generates feedback specific to the text — referencing actual phrases, paragraphs, and examples from the student\'s writing. Generic feedback results from not pasting the essay or from very short inputs. The more complete the essay, the more specific the feedback.' } },
      { '@type': 'Question', name: 'What feedback focus should I choose?', acceptedAnswer: { '@type': 'Answer', text: '"All areas" provides comprehensive feedback across structure, content, and mechanics. Choose a specific focus when you want feedback aligned to a particular skill your class is working on — for example, "Structure & Organization" if your current unit is on paragraph writing, or "Grammar & Mechanics" after a grammar mini-lesson.' } },
      { '@type': 'Question', name: 'Can students use this tool directly?', acceptedAnswer: { '@type': 'Answer', text: 'This tool is designed for teacher use — specifically for teachers generating feedback to share with students. If your school or district has approved AI writing tools for student use, check those policies before directing students to use this tool on their own work.' } },
      { '@type': 'Question', name: 'How do I give feedback that students actually act on?', acceptedAnswer: { '@type': 'Answer', text: 'The most actionable feedback identifies a specific problem, explains why it matters, and gives a concrete revision strategy. The AI generates feedback in this format. After generation, you can prioritize the one or two most important pieces and have students revise before the final submission — which research consistently shows improves learning more than end-of-assignment feedback alone.' } },
      { '@type': 'Question', name: 'Is student data secure when I paste essays?', acceptedAnswer: { '@type': 'Answer', text: 'GogyAI does not store the essay text you paste or any other inputs after the session. However, you should follow your school or district\'s AI use policy regarding student work. Consider anonymizing essays by removing student names before pasting, which protects student privacy and is a best practice for any AI workflow involving student content.' } },
      { '@type': 'Question', name: 'Is the GogyAI essay feedback generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function EssayFeedbackGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Essay Feedback Generator</h1>
        <p className="text-slate-500 mb-6">Generate constructive, specific essay feedback — strengths, improvement areas, and a priority next step — in seconds.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="essay-feedback-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Essay Feedback Generator for Teachers: Constructive, Specific, and Fast</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers how AI essay feedback generators work and how to use them responsibly in your teaching practice.</li>
            <li>ELA teachers, writing coaches, and any teacher who assigns written work at any grade level will benefit.</li>
            <li>An AI essay feedback generator produces structured, constructive feedback — specific to the pasted essay — including strengths, improvement areas, and a priority next step.</li>
            <li>Writing feedback that takes 8–12 minutes per essay can be drafted in under 90 seconds with AI.</li>
            <li>Always review and personalize AI-generated feedback before sharing with students — it is a starting draft, not a finished product.</li>
            <li>Anonymize student essays before pasting — remove student names before using this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing feedback is one of the highest-leverage things a teacher can do — and one of the most time-consuming. A thoughtful, specific set of comments on a student essay takes between 8 and 15 minutes to write carefully. For a class of 30 students, that&apos;s a 4–7 hour grading session for a single assignment. Multiply that by the number of writing assignments in a school year and feedback becomes the single largest driver of teacher overtime.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI essay feedback generator doesn&apos;t replace the teacher&apos;s judgment — it compresses the drafting phase. The AI reads the essay, generates a structured feedback draft with specific references to the student&apos;s writing, and gives the teacher a professional starting point to refine and personalize.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Essay Feedback Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI essay feedback generator takes a pasted student essay alongside grade level, subject, assignment description, and feedback focus, and produces a structured feedback response. The output includes an overall impression, specific strengths with direct references to the essay, actionable improvement areas with strategies, a single priority next step, and a motivating closing.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The key distinction from a generic feedback template is specificity: when the full essay is provided, the AI references actual phrases and passages from the student&apos;s writing, not abstract general guidance. &quot;Your thesis statement in the opening paragraph — &#39;Technology has both benefits and drawbacks&#39; — is too broad to support effectively&quot; is more useful to a student than &quot;your thesis needs improvement.&quot;
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Quality Essay Feedback Matters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on feedback consistently shows that the most effective feedback is specific, timely, and actionable. Dylan Wiliam&apos;s research on formative assessment found that feedback that tells students what to do next — rather than just grading them — improves learning outcomes more than any other single teaching intervention. The challenge is that writing that kind of feedback at scale is deeply time-consuming.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          When feedback is generic or delayed, students often read the score, glance at the comments, and move on without processing the improvement guidance. When it is specific, early, and includes a concrete revision task, students engage with it. The AI helps teachers produce the specific, structured feedback that students actually benefit from — without the 10-minute-per-essay investment.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Paste the student&apos;s essay text into the essay field after removing the student&apos;s name. Enter the grade level, subject, and a brief description of the assignment. Select your feedback focus — all areas for comprehensive feedback, or a specific dimension if your unit targets one skill. The AI generates a five-section feedback response that you review, adjust, and send.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The feedback focus field is particularly useful for aligning AI output to your instructional priorities. If your class just finished a unit on paragraph organization, selecting &quot;Structure &amp; Organization&quot; ensures the feedback emphasizes what you&apos;ve been teaching — reinforcing the lesson while assessing the writing.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Essay Feedback Generator</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Thompson teaches 10th-grade English and has assigned a current events argumentative essay. He has 28 essays to review over the weekend. He uses the feedback generator to draft comments for each essay, reviewing and personalizing the output rather than writing every comment from scratch.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>He removes the student&apos;s name from the essay and copies the text.</li>
          <li><strong>Grade Level:</strong> &quot;Grade 10.&quot;</li>
          <li><strong>Subject:</strong> &quot;English Language Arts.&quot;</li>
          <li><strong>Assignment Description:</strong> &quot;Five-paragraph argumentative essay — students must take a position on a current events issue and support it with three pieces of evidence.&quot;</li>
          <li>He pastes the anonymized essay text into the essay field.</li>
          <li><strong>Feedback Focus:</strong> All Areas.</li>
          <li>He clicks <strong>Generate</strong> and receives a structured five-section feedback response in about 12 seconds.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI feedback identifies that the student has a strong hook but a thesis statement that doesn&apos;t take a clear position, and that body paragraph three lacks a topic sentence. Mr. Thompson adds a sentence connecting to a class discussion example the student referenced, adjusts the encouraging close to reflect his knowledge of the student&apos;s progress, and pastes the final comment into his LMS. Total time: 3 minutes per essay instead of 10 — across 28 essays, he saves over 3 hours.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Paste the complete essay text</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The quality of AI feedback is directly proportional to the completeness of the essay provided. A full essay produces specific, referenced feedback. A short excerpt or summary produces generic guidance. Paste the full text every time.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Personalize the encouraging close</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated encouragement is competent but generic. The one change that makes AI feedback feel genuinely teacher-written is a personalized closing that references something you know about the student — their progress, their topic choice, or a specific strength that stood out to you. One added sentence transforms the feel of the feedback entirely.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Focus on the priority next step</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Students who receive long lists of improvements are often overwhelmed and act on none of them. The generated feedback includes a single priority next step — consider assigning a specific revision task based on that step before the final submission. Revision-based feedback produces more learning than end-of-assignment comments alone.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI feedback does not know your rubric criteria, your unit&apos;s specific learning objectives, or your school&apos;s writing standards unless you describe them in the assignment description field. The more context you provide, the more aligned the output. Generic assignment descriptions produce feedback that may emphasize dimensions you&apos;re not currently assessing. To build a formal rubric that defines exactly which dimensions to assess, use the <Link href="/rubric-builder" className="text-brand-700 hover:underline">Rubric Builder</Link> to generate analytic criteria before grading.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI also cannot assess whether a student&apos;s factual claims are accurate unless those claims involve well-established facts. For content-area essays in history, science, or social studies, verify any feedback that comments on the accuracy of the student&apos;s facts before sharing it. For feedback based on teacher observations across any assignment type — without pasting student text — the <Link href="/student-feedback-writer" className="text-brand-700 hover:underline">Student Feedback Writer</Link> generates structured comments from your own notes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Always remove student names and identifying information before pasting essay text into this tool. FERPA protections apply to student work as part of education records. GogyAI does not store essay text or other inputs after the session ends. As a best practice, follow your district&apos;s AI use policy for any workflow involving student-produced content. See <Link href="/" className="text-brand-700 hover:underline">GogyAI — free tools for teachers</Link> for the full set of assessment and feedback tools available at no cost.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'Is it appropriate for teachers to use AI to generate essay feedback?', a: "Yes. Drafting feedback with AI is a legitimate professional practice, comparable to using a rubric guide. The teacher reviews, personalizes, and takes ownership of all feedback before it reaches students. AI accelerates drafting; the teacher provides professional judgment." },
            { q: 'How accurate is AI-generated essay feedback?', a: "Generally accurate for common writing dimensions — thesis clarity, evidence use, paragraph organization, and mechanics. Less reliable for nuanced content argumentation. Always review for accuracy before sharing with students." },
            { q: 'Will the feedback be generic or specific to the essay?', a: "When the full essay is pasted, the AI generates feedback with direct references to actual phrases and passages from the student's writing. Specificity comes from providing the complete essay text." },
            { q: 'What feedback focus should I choose?', a: '"All areas" gives comprehensive feedback. Choose a specific focus to align with your current instructional unit — "Structure & Organization" if teaching paragraph writing, or "Grammar & Mechanics" after a grammar lesson.' },
            { q: 'Can students use this tool directly?', a: "This tool is designed for teacher use. Check your school's AI policy before directing students to use any AI tool on their own work." },
            { q: 'How do I give feedback students actually act on?', a: "The most actionable feedback identifies a specific problem, explains why it matters, and gives a concrete revision strategy. The AI structures feedback this way. Pair it with a revision task before final submission for maximum learning impact." },
            { q: 'Is student essay data secure?', a: "GogyAI does not store pasted essay text after the session. Anonymize essays by removing student names before pasting — this protects student privacy and is a best practice for any AI workflow involving student content." },
            { q: 'Is the GogyAI essay feedback generator free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'rubric-builder', name: 'Rubric Builder' }}
        next={{ slug: 'exit-ticket-creator', name: 'Exit Ticket Creator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
