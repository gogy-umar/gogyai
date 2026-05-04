import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Discussion Prompt Generator — Free AI Tool for Teachers',
  description: 'Generate discussion prompts with facilitator tips and follow-up questions for any subject, format, and thinking level. Free AI discussion prompt generator for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/discussion-prompt-generator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 10th Grade English' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 10' },
  { name: 'topic', label: 'Topic or Text', type: 'text', placeholder: 'e.g. To Kill a Mockingbird — theme of justice', full: true },
  {
    name: 'format',
    label: 'Discussion Format',
    type: 'select',
    options: [
      { value: 'Socratic seminar', label: 'Socratic Seminar' },
      { value: 'think-pair-share', label: 'Think-Pair-Share' },
      { value: 'whole class discussion', label: 'Whole Class Discussion' },
      { value: 'structured debate', label: 'Structured Debate' },
    ],
    default: 'whole class discussion',
  },
  { name: 'num_prompts', label: 'Number of Prompts', type: 'number', placeholder: '5', default: '5' },
  {
    name: 'thinking_level',
    label: 'Thinking Level',
    type: 'select',
    options: [
      { value: 'recall and comprehension', label: 'Recall / Comprehension' },
      { value: 'analysis and interpretation', label: 'Analysis / Interpretation' },
      { value: 'synthesis and evaluation', label: 'Synthesis / Evaluation' },
      { value: 'mixed levels', label: 'Mixed Levels (progression)' },
    ],
    default: 'mixed levels',
  },
]

const PROMPT = `Generate {num_prompts} discussion prompts for the following:
Subject: {subject}
Grade Level: {grade}
Topic or Text: {topic}
Discussion Format: {format}
Thinking Level: {thinking_level}

For each prompt, provide:
1. The discussion prompt — open-ended, engaging, and genuinely discussable (no single "correct" answer)
2. A facilitator tip — specific guidance for how to introduce this prompt and manage the discussion
3. Two follow-up questions — to push thinking deeper if discussion stalls or needs extension

After the prompts, provide:
- Setup instructions: how to introduce and run a {format} discussion with this topic (2-3 sentences)
- Closure move: how to bring the discussion to a meaningful conclusion

Prompts should be appropriate for {grade} students and progress from accessible to more complex if "mixed levels" is selected.`

const RELATED = [
  { name: 'Bloom\'s Taxonomy Question Generator', slug: 'blooms-taxonomy-question-generator', desc: 'Generate questions at each level of Bloom\'s Taxonomy for deeper discussion.' },
  { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator', desc: 'Generate a reading passage to anchor your discussion.' },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: 'Create exit tickets that capture individual thinking after a class discussion.' },
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build a lesson plan that centers on your discussion activity.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Discussion Prompt Generator — GogyAI',
    url: 'https://gogyai.com/discussion-prompt-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Discussion Prompt Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/discussion-prompt-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Discussion Prompt Generator for Teachers: Questions That Make Students Think',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/discussion-prompt-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What makes a good classroom discussion prompt?', acceptedAnswer: { '@type': 'Answer', text: 'An effective discussion prompt is genuinely open-ended — no single correct answer — specific enough to anchor discussion to the text or topic, at a thinking level that requires interpretation or evaluation rather than simple recall, and interesting enough that students have something to say from their own perspective.' } },
      { '@type': 'Question', name: 'How is a Socratic seminar different from a regular class discussion?', acceptedAnswer: { '@type': 'Answer', text: 'In a Socratic seminar, students drive the dialogue — they speak directly to each other rather than through the teacher. The teacher\'s role is to facilitate, not to evaluate. Students must come prepared with text evidence, and the discussion aims for collaborative meaning-making rather than arriving at a predetermined answer.' } },
      { '@type': 'Question', name: 'How many discussion prompts do I need for a class period?', acceptedAnswer: { '@type': 'Answer', text: 'For a 45-60 minute discussion, 3-5 prompts is usually the right range. A productive discussion dwells on fewer prompts deeply rather than moving quickly through many. Generate 5-7 and be prepared to use 3-4 in practice — having extras means you can skip prompts that the discussion naturally resolves.' } },
      { '@type': 'Question', name: 'How do I use think-pair-share discussion prompts effectively?', acceptedAnswer: { '@type': 'Answer', text: 'Give students 2-3 minutes to write their initial thinking, then 3-4 minutes to discuss with a partner. When sharing out, cold-call partners to report what their partner said (not what they said themselves) — this incentivizes genuine listening. The generated prompts include facilitator tips specific to the think-pair-share format.' } },
      { '@type': 'Question', name: 'Can I use AI discussion prompts for structured debate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "Structured Debate" as the format. The AI generates prompts phrased as debatable propositions — with two defensible positions — along with setup instructions for structuring argument and counter-argument time.' } },
      { '@type': 'Question', name: 'How do I handle a discussion where only a few students participate?', acceptedAnswer: { '@type': 'Answer', text: 'The facilitator tips for each prompt include specific strategies for broadening participation. General approaches: wait time (silence after a prompt, at least 10 seconds), think-pair-share before whole-class discussion, fishbowl structure, and cold-calling with "add on" rather than new response requirements.' } },
      { '@type': 'Question', name: 'Is the GogyAI discussion prompt generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function DiscussionPromptGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Discussion Prompt Generator</h1>
        <p className="text-slate-600 mb-6">Generate open-ended discussion prompts with facilitator tips and follow-up questions for any subject, format, and thinking level.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="discussion-prompt-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Discussion Prompt Generator for Teachers: Questions That Make Students Think</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI discussion prompt generator to create open-ended, thinking-level-appropriate prompts for any subject, format, and grade.</li>
            <li>Secondary ELA, social studies, and humanities teachers who use discussion as a core instructional strategy will benefit most — but it works for any subject.</li>
            <li>The tool generates discussion prompts with facilitator tips and follow-up questions, plus setup and closure instructions for your chosen format.</li>
            <li>The best discussion prompts are genuinely open-ended — no single correct answer — and specific enough to anchor conversation to your topic or text.</li>
            <li>Generate more prompts than you'll use; a productive discussion dwells deeply on 3-4 rather than racing through 8-10.</li>
            <li>No student data is needed — topic and grade are all the tool requires.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          A mediocre discussion question — one with a predictable answer, too easy a recall question, or too abstract to anchor — produces silence or surface-level responses. A good discussion prompt produces 25 students with something different and defensible to say. The difference between the two is precision: the right scope, the right thinking level, the right angle on the topic. An AI discussion prompt generator produces that precision quickly.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what makes discussion prompts effective, how to use the tool across different discussion formats, and how to facilitate the discussions the prompts generate.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Discussion Prompt Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI discussion prompt generator creates open-ended questions — calibrated to your topic, thinking level, and discussion format — along with facilitator tips for each prompt, follow-up questions to deepen engagement, and setup and closure instructions for the discussion. It replaces the blank page when you need quality discussion questions quickly.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because effective discussion prompt design follows identifiable principles: open-endedness, appropriate cognitive demand, connection to the specific text or topic, and built-in pathways for multiple perspectives. AI applies these principles across virtually any subject and topic.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Discussion Prompt Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on academic discourse consistently shows that quality classroom discussion — where students genuinely engage with each other's ideas — produces stronger comprehension, critical thinking, and retention than lecture alone. But generating the prompts that drive quality discussion is harder than it looks. Teachers who run discussions frequently know that the difference between a flat and a rich discussion often traces directly to how well the opening prompt was constructed.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI generators are particularly useful for teachers who run discussions across many different texts or topics — not just the familiar anchor texts they've taught for years. For a new novel, a recent primary source, or a current event, having AI generate initial discussion prompts gives teachers a professional starting set to refine.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter the subject, grade, topic or text, discussion format, number of prompts, and thinking level. The AI generates prompts appropriate to that format — open-ended and debatable for Socratic seminars, structured positions for debate, accessible entry points for think-pair-share — along with a facilitator tip and two follow-up questions for each.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The thinking level selector matters: "recall and comprehension" produces questions confirming students understand the text; "analysis and interpretation" produces questions about meaning and method; "synthesis and evaluation" produces questions asking students to judge, compare, and apply. "Mixed levels" produces a progression from accessible to complex — useful for discussions where you want every student to enter but extend thinking as the conversation develops.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Discussion Prompt Generator</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Rivera teaches 10th-grade English. Her class finished reading the first three chapters of To Kill a Mockingbird and she wants to run a Socratic seminar on justice and perspective — 5 prompts at the analysis level for 55 minutes on Friday.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Subject: 10th Grade English. Grade: Grade 10.</li>
          <li>Topic: "To Kill a Mockingbird — chapters 1-3, focusing on perspective, social class, and childhood innocence."</li>
          <li>Format: Socratic Seminar.</li>
          <li>Number of Prompts: 5.</li>
          <li>Thinking Level: Analysis / Interpretation.</li>
          <li>She generates the prompts and reviews them. One prompt — "What does Scout's perspective reveal that adult characters cannot see?" — immediately feels like the discussion opener she's been trying to articulate for three years.</li>
          <li>She selects 4 of the 5 prompts, sequences them from accessible to complex, and prepares to use the fifth as an extension if the discussion finishes early.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the text or topic angle</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "To Kill a Mockingbird" produces general literary discussion prompts. "To Kill a Mockingbird — Atticus Finch's decision to defend Tom Robinson and what it costs his family" produces prompts about a specific moral tension. The more precisely you describe the angle or aspect you want students to discuss, the sharper the generated prompts.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Read the facilitator tips before the discussion, not during</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Each generated prompt comes with a specific tip for how to introduce it and manage the discussion it produces. These tips are most valuable when internalized before class — not read during the discussion. A one-minute review of facilitator tips in the morning makes you significantly more effective in the room.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI generates prompts based on the topic you describe, not on a reading of the actual text. For specific novels, articles, or primary sources, review the generated prompts against the actual text to ensure they're grounded in specific content students have read. A prompt that references something not actually in the assigned pages will derail a discussion immediately — use the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> to build the full lesson structure around your discussion activity.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Discussion facilitation itself is a complex, responsive skill that AI cannot perform. The prompts are a starting tool; the quality of the discussion depends on the teacher's ability to listen, redirect, invite quiet voices, and manage the pace of conversation in real time — pair with the <Link href="/blooms-taxonomy-question-generator" className="text-brand-700 underline">Bloom&apos;s Taxonomy Question Generator</Link> to scaffold thinking levels across the full discussion.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Discussion prompt inputs contain no student data. Topic and grade contain no personal information. GogyAI stores no personal information — inputs are used solely to generate discussion prompts. Discover <Link href="/" className="text-brand-700 underline">all 30 free AI teaching tools on GogyAI</Link> to support every part of your instructional practice.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What makes a good classroom discussion prompt?', a: 'An effective prompt is genuinely open-ended (no single correct answer), specific enough to anchor discussion to the text or topic, at a thinking level requiring interpretation rather than recall, and interesting enough that students have different and defensible things to say.' },
            { q: 'How is a Socratic seminar different from a regular class discussion?', a: 'In a Socratic seminar, students speak directly to each other, not through the teacher. The teacher facilitates rather than evaluates. Students need text evidence, and the goal is collaborative meaning-making rather than arriving at a predetermined answer.' },
            { q: 'How many discussion prompts do I need for a class period?', a: 'For a 45-60 minute discussion, 3-5 prompts is ideal. Generate 5-7 and be prepared to use 3-4 — a productive discussion dwells deeply on fewer prompts rather than racing through many.' },
            { q: 'How do I use think-pair-share prompts effectively?', a: 'Give 2-3 minutes to write individual thinking, then 3-4 minutes for partner discussion. When sharing out, have partners report what their partner said — this incentivizes genuine listening.' },
            { q: 'Can I use AI prompts for structured debate?', a: 'Yes. Select "Structured Debate" as the format. The AI generates propositions with two defensible positions and setup instructions for argument and counter-argument time.' },
            { q: 'How do I handle a discussion where only a few students participate?', a: 'The facilitator tips address participation strategies. General approaches: extend wait time to at least 10 seconds, use think-pair-share before whole-class sharing, and use fishbowl or cold-calling with "add on" rather than new response requirements.' },
            { q: 'Is the GogyAI discussion prompt generator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'science-experiment-idea-generator', name: 'Science Experiment Idea Generator' }}
        next={{ slug: 'substitute-teacher-plan-writer', name: 'Substitute Teacher Plan Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
