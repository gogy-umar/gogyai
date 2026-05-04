import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Exit Ticket Creator — Free AI Tool for Teachers',
  description: 'Generate ready-to-use exit tickets to close any lesson. Free AI exit ticket creator for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/exit-ticket-creator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 6th Grade Math' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 6' },
  { name: 'lesson_topic', label: 'Lesson Topic', type: 'text', placeholder: 'e.g. Adding and subtracting integers', full: true },
  {
    name: 'ticket_type',
    label: 'Exit Ticket Type',
    type: 'select',
    options: [
      { value: 'question', label: 'Question (knowledge check)' },
      { value: 'reflection', label: 'Reflection (metacognitive)' },
      { value: 'rating', label: 'Rating / Self-assessment' },
      { value: 'drawing-prompt', label: 'Drawing Prompt' },
    ],
    default: 'question',
  },
]

const PROMPT = `Create 2-3 ready-to-use exit ticket options for the following lesson:
Subject: {subject}
Grade Level: {grade}
Lesson Topic: {lesson_topic}
Exit Ticket Type: {ticket_type}

For each exit ticket option, provide:
1. A clear title (e.g., "Exit Ticket Option A")
2. The exit ticket prompt or task itself — written directly to students, ready to display or print
3. What the teacher should look for in student responses (assessment notes)
4. How to use responses to inform the next lesson (follow-up guidance)

Exit ticket type guidelines:
- Question: A specific question or short problem that checks understanding of the lesson's core objective
- Reflection: A metacognitive prompt asking students to reflect on their learning process (e.g., "What was the muddiest point?")
- Rating: A self-assessment scale with a brief written component
- Drawing Prompt: A visual task where students draw, label, or diagram a concept

Keep each exit ticket brief — designed to be completed in 3-5 minutes at the end of class.`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build the lesson plan that your exit ticket closes out.' },
  { name: 'Quiz & MCQ Generator', slug: 'quiz-mcq-generator', desc: 'Generate a full quiz when you need more than a quick exit check.' },
  { name: "Bloom's Taxonomy Question Generator", slug: 'blooms-taxonomy-question-generator', desc: "Write exit ticket questions at specific Bloom's cognitive levels." },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Create scoring criteria for more extended exit tasks.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Exit Ticket Creator — GogyAI',
    url: 'https://gogyai.com/exit-ticket-creator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Exit Ticket Creator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/exit-ticket-creator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Exit Ticket Creator for Teachers: Formative Checks That Actually Inform Instruction',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/exit-ticket-creator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is an exit ticket in education?', acceptedAnswer: { '@type': 'Answer', text: "An exit ticket is a brief formative assessment given at the end of a lesson — typically taking 3–5 minutes — that checks student understanding of the lesson's core objective. Students complete it before leaving the room (or before the class transitions), and the teacher reviews responses to inform the next day's instruction." } },
      { '@type': 'Question', name: 'How do exit tickets improve teaching?', acceptedAnswer: { '@type': 'Answer', text: "Exit tickets close the feedback loop between teaching and learning. They tell you whether students understood what you thought you taught — which is often different from what they actually learned. Research consistently shows that regular formative assessment, including exit tickets, improves student achievement more than summative assessment alone." } },
      { '@type': 'Question', name: 'What are the different types of exit tickets?', acceptedAnswer: { '@type': 'Answer', text: 'Common exit ticket types include: knowledge check questions (did students get the concept?); reflection prompts (what was the muddiest point?); rating scales (rate your understanding 1-5 and explain); and drawing prompts (diagram or sketch the concept). Each type assesses a different dimension of learning.' } },
      { '@type': 'Question', name: 'How long should an exit ticket take?', acceptedAnswer: { '@type': 'Answer', text: 'Exit tickets are designed for 3–5 minutes maximum. They are brief by design — enough to get a signal about understanding without consuming significant instructional time. If responses consistently take longer than 5 minutes, the prompt is too complex for a closing check.' } },
      { '@type': 'Question', name: 'What should I do with exit ticket responses?', acceptedAnswer: { '@type': 'Answer', text: 'Review them before the next class. Sort responses into three groups: students who clearly understood, students who partially understood, and students who are still confused. Use this grouping to plan your opening the next day — whether that is a quick re-teach, targeted small group work, or moving forward. The generated output includes follow-up guidance for each ticket.' } },
      { '@type': 'Question', name: 'Can exit tickets be digital?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Exit ticket prompts generated here can be posted in any LMS, Google Form, Padlet, or digital response tool. The prompt text is the same whether delivered on paper or screen — copy it directly into your preferred platform.' } },
      { '@type': 'Question', name: 'Should exit tickets be graded?', acceptedAnswer: { '@type': 'Answer', text: "Exit tickets are most effective as formative, ungraded checks. When students know they won't be graded, they're more likely to be honest about confusion, which gives you more accurate data. Grading exit tickets shifts the purpose from assessment for learning to assessment of learning, which undermines their diagnostic value." } },
      { '@type': 'Question', name: 'Is the GogyAI exit ticket creator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function ExitTicketCreatorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Exit Ticket Creator</h1>
        <p className="text-slate-600 mb-6">Generate 2-3 ready-to-use exit ticket options to close any lesson — with assessment notes and follow-up guidance.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="exit-ticket-creator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Exit Ticket Creator for Teachers: Formative Checks That Actually Inform Instruction</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers what exit tickets are, why they are one of the most effective formative assessment tools, and how to generate them with AI.</li>
            <li>Teachers at all grade levels who want fast, reliable closing checks for their lessons will benefit.</li>
            <li>An AI exit ticket creator generates 2-3 complete, ready-to-use exit ticket options with student-facing prompts, assessment notes, and follow-up guidance.</li>
            <li>Exit tickets take 3–5 minutes of class time and provide data that directly informs the next lesson&apos;s opening.</li>
            <li>AI exit tickets are ready to use immediately — copy into your LMS, display on screen, or print.</li>
            <li>No student names or identifying information should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          The last 5 minutes of a lesson are some of the most valuable minutes in a school day — and among the most commonly wasted. When a class ends with packing up, a bell, and a homework reminder, the teacher walks away with no data about what just happened pedagogically. Did students understand the main concept? Is there a common misconception forming? Is tomorrow&apos;s lesson a go, or does the class need a re-teach? An exit ticket answers those questions before they become problems.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI exit ticket creator generates ready-to-use prompts in seconds, so the question is never &quot;what should I ask?&quot; — it&apos;s &quot;what did the answers tell me?&quot;
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Exit Ticket Creator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI exit ticket creator takes your subject, grade level, lesson topic, and preferred ticket type and generates 2–3 complete exit ticket options. Each option includes the student-facing prompt (ready to display or print), teacher assessment notes (what to look for in responses), and follow-up guidance (how to use responses to plan the next lesson).
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Getting three options lets you choose the ticket that best fits where your lesson landed — or vary ticket types week to week to keep the routine engaging. The assessment notes and follow-up guidance turn each ticket from a data-collection exercise into an actionable instructional tool.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Exit Tickets Are One of the Most Effective Formative Assessment Tools</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Dylan Wiliam&apos;s influential meta-analysis of formative assessment research found that the most effective formative practices are those that close the loop between teaching and learning — giving teachers actionable data that changes what they do next. Exit tickets do exactly this: they turn every lesson ending into a data point that shapes the next lesson&apos;s opening.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The brevity of exit tickets is a feature, not a limitation. Three to five minutes of well-targeted assessment provides more actionable information than a longer end-of-unit test, because the information arrives while the teacher can still do something about it. An exit ticket that reveals a common misconception about adding integers gives the teacher 12 hours to adjust tomorrow&apos;s opening — that&apos;s leverage that a unit test score never provides.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter your subject, grade level, and lesson topic. Select an exit ticket type: a direct knowledge-check question, a metacognitive reflection prompt, a self-assessment rating scale, or a drawing prompt. The AI generates three options, each with a student-facing prompt, teacher assessment notes, and follow-up guidance. All three are ready to use immediately — copy, display, or print without reformatting.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The drawing prompt option is particularly useful for subjects with visual content — science diagrams, math models, geographic maps — where a written response would take significantly longer than a quick labeled sketch. Drawing prompts also vary the cognitive demand and keep the exit ticket routine from feeling monotonous.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Exit Ticket Creator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Johnson teaches 6th-grade math and has just finished a lesson on adding and subtracting integers. She wants to find out before tomorrow whether students have the sign rules down before she moves to multiplying integers.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Subject:</strong> &quot;6th Grade Mathematics.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 6.&quot;</li>
          <li><strong>Lesson Topic:</strong> &quot;Adding and subtracting positive and negative integers using sign rules.&quot;</li>
          <li><strong>Exit Ticket Type:</strong> Question.</li>
          <li>She clicks <strong>Generate</strong> and receives three exit ticket options in seconds.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          She selects Option B, which asks students to solve two integer problems and explain the sign rule they used in one sentence. She displays it on her projector with 5 minutes left in class. That evening she reviews 24 responses and sorts them — 17 students are solid, 5 have a consistent error with subtracting negative numbers, and 2 seem completely confused. She opens the next class with a 7-minute targeted review of negative subtraction before moving on. This is the feedback loop at its most functional.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Align the ticket type to your lesson&apos;s objective</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A knowledge-check question is most useful when your objective was to learn a specific fact, procedure, or concept. A reflection prompt is most useful when your objective was for students to develop metacognitive awareness or grapple with a complex idea. Match the ticket type to what you actually want to know.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific in the lesson topic field</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          &quot;Fractions&quot; generates a generic fraction question. &quot;Adding fractions with unlike denominators — finding the least common denominator&quot; generates a question that targets the specific skill students practiced today. Specificity produces exit tickets that actually tell you whether students hit the day&apos;s objective.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Read responses before planning the next lesson</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          An exit ticket that sits unread in a stack defeats its purpose. Even a quick 5-minute scan — sorting into &quot;got it,&quot; &quot;sort of,&quot; and &quot;confused&quot; — gives you the information you need to open the next lesson productively. The generated follow-up guidance gives you a starting point for what to do with each pile.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Exit tickets generated by AI are calibrated to general grade-level content knowledge. They may reference terminology or concepts slightly outside what you covered in a specific lesson. Always review the generated prompt to ensure it aligns with exactly what students practiced — not a broader topic area. For a more comprehensive assessment with multiple questions and an answer key, the <Link href="/quiz-mcq-generator" className="text-brand-700 underline">Quiz MCQ Generator</Link> creates full multiple-choice quizzes at any difficulty level.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool generates text-based prompts. Drawing prompts describe what students should draw — the actual drawing medium (paper, whiteboard, digital tool) is something you provide in the classroom. The AI cannot create the graphic organizer or visual template that a drawing prompt might benefit from; that supplementary material is yours to design. To plan the full lesson this exit ticket checks at the close, the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> builds a complete plan with objectives, activities, and built-in formative assessment.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to generate exit tickets. Enter only your subject, grade, lesson topic, and type. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Discover <Link href="/" className="text-brand-700 underline">the full GogyAI toolkit</Link> — 30 free tools for lesson planning, assessment, communication, and classroom management.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is an exit ticket in education?', a: "An exit ticket is a brief formative assessment at the end of a lesson — typically 3–5 minutes — that checks student understanding of the lesson's core objective. Teachers review responses to inform the next day's instruction." },
            { q: 'How do exit tickets improve teaching?', a: "Exit tickets close the feedback loop between teaching and learning. They tell you whether students understood what you thought you taught. Research consistently links regular formative assessment to improved student achievement." },
            { q: 'What are the different types of exit tickets?', a: 'Knowledge check questions, reflection prompts, self-assessment rating scales, and drawing prompts. Each type assesses a different dimension of learning and suits different lesson goals and subject areas.' },
            { q: 'How long should an exit ticket take?', a: 'Three to five minutes maximum. Brevity is by design — enough to get a signal about understanding without consuming significant instructional time.' },
            { q: 'What should I do with exit ticket responses?', a: 'Review before the next class. Sort into groups: understood, partially understood, confused. Use this to plan your opening — a re-teach, small group work, or moving forward. Generated output includes follow-up guidance.' },
            { q: 'Can exit tickets be digital?', a: 'Yes. Copy the prompt text into your LMS, Google Form, Padlet, or any digital response tool. The prompt works the same whether delivered on paper or screen.' },
            { q: 'Should exit tickets be graded?', a: "Exit tickets are most effective as ungraded formative checks. When students know they won't be graded, they're more honest about confusion — giving you more accurate data for the next lesson." },
            { q: 'Is the GogyAI exit ticket creator free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'essay-feedback-generator', name: 'Essay Feedback Generator' }}
        next={{ slug: 'blooms-taxonomy-question-generator', name: "Bloom's Taxonomy Question Generator" }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
