import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Lesson Plan Generator — Free AI Tool for Teachers',
  description: 'Generate complete, detailed lesson plans in seconds with AI. Free lesson plan generator for K-12 and higher ed teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/lesson-plan-generator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 7th Grade Science' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 7' },
  { name: 'topic', label: 'Lesson Topic', type: 'text', placeholder: 'e.g. Photosynthesis', full: true },
  { name: 'duration', label: 'Duration (minutes)', type: 'number', placeholder: '60', default: '60' },
  {
    name: 'learning_style',
    label: 'Learning Style Focus',
    type: 'select',
    options: [
      { value: 'mixed', label: 'Mixed (recommended)' },
      { value: 'visual', label: 'Visual' },
      { value: 'auditory', label: 'Auditory' },
      { value: 'kinesthetic', label: 'Kinesthetic' },
    ],
    default: 'mixed',
  },
  { name: 'students', label: 'Number of Students', type: 'number', placeholder: '25', default: '25' },
]

const PROMPT = `Create a detailed, classroom-ready lesson plan with the following details:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Duration: {duration} minutes
Learning Style Focus: {learning_style}
Class Size: {students} students

Structure the lesson plan with these sections:
1. Learning Objectives (3-4 measurable SMART objectives)
2. Materials & Resources needed
3. Introduction / Hook (first 5-10 minutes to engage students)
4. Main Instructional Activities (with timing for each activity)
5. Guided Practice
6. Independent Practice or Group Work
7. Formative Assessment Strategy
8. Closure / Wrap-up
9. Homework or Extension Activity (optional)
10. Differentiation Notes (for advanced and struggling learners)

Make it specific, practical, and immediately usable in the classroom. Use {learning_style} learning strategies throughout.`

const RELATED = [
  { name: 'Unit Plan Creator', slug: 'unit-plan-creator', desc: 'Plan an entire multi-week unit from your lesson topics.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write precise, measurable SMART objectives for any lesson.' },
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Adapt your lesson activities for every learner in the room.' },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: 'Create quick formative checks to close your lesson.' },
]

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Lesson Plan Generator — GogyAI',
  url: 'https://gogyai.com/lesson-plan-generator',
}
const softwareSchema = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: 'AI Lesson Plan Generator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://gogyai.com/lesson-plan-generator',
}
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'AI Lesson Plan Generator for Teachers: The Complete Guide',
  author: { '@type': 'Organization', name: 'GogyAI' },
  publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
  url: 'https://gogyai.com/lesson-plan-generator',
}
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question', name: 'How do I use an AI lesson plan generator?',
      acceptedAnswer: { '@type': 'Answer', text: 'Enter your subject, grade level, topic, lesson duration, and class size into the form. The AI generates a complete lesson plan with objectives, activities, and assessment ideas in seconds. Review and adapt the output before use.' },
    },
    {
      '@type': 'Question', name: 'Are AI-generated lesson plans aligned to curriculum standards?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI lesson plans are not automatically aligned to specific state or national standards. They are strong starting frameworks. You should reference your curriculum standards and adjust the objectives and activities accordingly.' },
    },
    {
      '@type': 'Question', name: 'How accurate is an AI lesson plan generator for teachers?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI generators produce structurally sound lesson plans reliably. Content accuracy depends on how specific your inputs are. The more detail you provide about your topic and class context, the more targeted the output. Always review before classroom use.' },
    },
    {
      '@type': 'Question', name: 'Can I use an AI lesson plan generator for special education?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the differentiation notes section of the generated plan is specifically useful for special education contexts. For students with IEPs, use the separate Differentiated Instruction Planner and IEP Goal Writer tools for more targeted support.' },
    },
    {
      '@type': 'Question', name: 'Is it okay for teachers to use AI to write lesson plans?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Using AI to draft lesson plans is a legitimate professional practice — similar to using a template or collaborating with a colleague. The teacher reviews, customizes, and takes ownership of the final plan. AI is a starting point, not a replacement for professional judgment.' },
    },
    {
      '@type': 'Question', name: 'Does an AI lesson plan generator work for elementary school?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Specify the exact grade level (e.g., Grade 2) and the tool adapts the complexity, activity types, and timing accordingly. Elementary-level plans tend to include more varied activities and shorter instruction blocks, which the AI accounts for when given the right grade input.' },
    },
    {
      '@type': 'Question', name: 'How is an AI lesson plan generator different from a lesson plan template?',
      acceptedAnswer: { '@type': 'Answer', text: 'A template gives you blank fields to fill in. An AI generator fills in the content — objectives, activities, timing, assessment ideas — based on your specific topic and context. The result is a complete draft, not an empty structure.' },
    },
    {
      '@type': 'Question', name: 'Is the GogyAI lesson plan generator free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, the GogyAI lesson plan generator is completely free to use. No account, subscription, or credit card is required. You can generate as many lesson plans as you need.' },
    },
  ],
}

export default function LessonPlanGeneratorPage() {
  return (
    <>
      {/* Tool Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Lesson Plan Generator</h1>
        <p className="text-slate-600 mb-6">Generate a complete, detailed lesson plan in seconds. Fill in your details below.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="lesson-plan-generator" />
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">

        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Lesson Plan Generator for Teachers: The Complete Guide</h2>

        {/* Quick Summary */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers how AI lesson plan generators work and how to use them effectively in your teaching practice.</li>
            <li>K-12 teachers, curriculum designers, and instructional coaches who want to reduce lesson planning time will benefit most.</li>
            <li>An AI lesson plan generator creates a complete structured lesson plan — objectives, activities, timing, and assessment — from a brief description of your topic and class.</li>
            <li>Most teachers report cutting lesson planning time from 30–60 minutes to under 10 minutes per plan.</li>
            <li>AI output is a strong first draft, not a finished product — teacher review and curriculum alignment are always required.</li>
            <li>No student names or identifying information should ever be entered into this tool.</li>
          </ul>
        </div>

        {/* Opening */}
        <p className="text-slate-700 leading-relaxed mb-4">
          The average teacher spends 10 hours per week on lesson planning and preparation — time that could be in the classroom, with students, or simply recovered as part of a sustainable career. An AI lesson plan generator doesn't eliminate professional judgment; it eliminates the blank page.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide explains exactly what an AI lesson plan generator does, why it has become a legitimate tool in modern teaching practice, and how to get the best results from it in your specific classroom context.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Lesson Plan Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI lesson plan generator is a tool that takes your inputs — subject, grade level, topic, duration, and class context — and produces a complete structured lesson plan in seconds. It handles the scaffolding: objectives, activities, timing, materials, and assessment ideas, all organized into a ready-to-review framework.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools emerged because AI language models trained on vast educational content can recognize and replicate the structure of effective lesson design. They don't replace your curriculum knowledge — they give you a structured starting point that you customize to your students, your standards, and your teaching style.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Lesson Plan Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A well-structured lesson plan takes an experienced teacher 30–60 minutes to write from scratch. A new teacher can spend significantly longer. Over a 180-day school year, lesson planning accounts for hundreds of hours of a teacher's professional time — time that competes with grading, parent communication, student support, and professional development.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI lesson plan generators don't eliminate that professional investment — they compress the drafting phase. Teachers who use them report spending 5–10 minutes reviewing and refining an AI draft instead of 45 minutes building from scratch. The savings compound: a five-subject teacher who uses an AI generator for half their planning reclaims roughly 90 minutes per week.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Instructional coaches and curriculum designers use these tools to prototype lesson frameworks quickly during curriculum mapping sessions, giving teams something concrete to critique rather than starting from zero.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You provide four key inputs: subject, grade level, lesson topic, and duration. The AI uses these to generate a complete lesson structure — including a hook to open the lesson, sequenced activities with timing, guided and independent practice, formative assessment, and differentiation notes. It works because lesson planning follows recognizable patterns that AI can reliably apply.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The learning style selector adjusts how activities are framed. A kinesthetic-focused plan for Grade 4 science generates hands-on experiments and movement-based tasks; a visual plan generates diagram-based activities and visual note-taking prompts. Mixed mode, the default, balances all three.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output is plain text — ready to copy into your lesson plan document, LMS, or planning platform. You review it, align it to your specific standards, adjust for your students' prior knowledge, and use it. The AI has done the structural scaffolding; you bring the classroom context it cannot know.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Lesson Plan Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Rivera teaches 8th-grade Earth Science at a public middle school with 28 students. She has a new unit on tectonic plates starting Monday and needs a lesson for the first class — 55 minutes, covering plate boundaries, with a class that learns best through hands-on models.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Subject:</strong> She enters "8th Grade Earth Science."</li>
          <li><strong>Grade Level:</strong> "Grade 8."</li>
          <li><strong>Topic:</strong> "Introduction to tectonic plate boundaries — convergent, divergent, and transform."</li>
          <li><strong>Duration:</strong> 55 minutes.</li>
          <li><strong>Learning Style:</strong> Kinesthetic.</li>
          <li><strong>Students:</strong> 28.</li>
          <li>She clicks <strong>Generate</strong> and receives a complete plan in about 8 seconds.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output includes a hook where students act out plate movements with their hands, a group model-building activity using clay, a diagram labeling task, and an exit ticket asking students to identify one real-world example of each boundary type. Ms. Rivera replaces the clay activity with foam pieces she has in her supply closet, adds a reference to the California coast as a local example of a transform boundary, and posts it to her school's LMS — total revision time: 7 minutes.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific with your topic</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Photosynthesis" produces a decent plan. "The light-dependent reactions of photosynthesis for AP Biology students who have already covered cellular respiration" produces a genuinely useful one. The more context you give about what students already know and where this lesson sits in your unit, the more targeted the output.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use the differentiation notes</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Every generated plan includes differentiation notes for advanced and struggling learners. These are often the most underused sections. Read them — they frequently contain extension ideas and scaffolding strategies that would take time to develop independently.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Regenerate rather than edit heavily</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          If the output misses what you needed, regenerate with a more specific topic before spending time rewriting. Changing "Fractions" to "Adding fractions with unlike denominators — first lesson, Grade 5, students struggle with equivalent fractions" will produce a substantially better result than editing the first output.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI lesson plan generators do not know your specific students. They cannot account for a student with a severe math anxiety, a class that had a disruptive week, or the fact that your Grade 3 students are reading two years above level. The generated plan is a structural framework built on general grade-level expectations — your classroom knowledge must be layered on top. For lessons that need to reach all learners, pair this with the <Link href="/differentiated-instruction-planner" className="text-brand-700 underline">Differentiated Instruction Planner</Link> to generate tiered activities for struggling, advanced, and ELL students.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool also does not align automatically to specific state standards (TEKS, CCSS, NGSS, etc.). Objectives are written as educationally sound SMART goals, but standard codes must be added by the teacher. For IB, AP, or specialized curriculum frameworks, treat the output as a starting scaffold that needs framework-specific adjustment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Highly specialized or advanced content — graduate-level seminars, specific vocational training, or culturally specific pedagogy — may produce generic output. In those cases, use the structure from the AI but write the specific content manually. To plan a sequence of lessons into a complete unit, the <Link href="/unit-plan-creator" className="text-brand-700 underline">Unit Plan Creator</Link> generates a week-by-week framework you can then expand with individual lesson plans.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter real student names, IDs, or any identifying student information into this tool. Lesson plan inputs (subject, topic, grade) contain no personal data. GogyAI stores no personal information — your inputs are used solely to generate your plan and are not retained. If you use your own API key (BYOK), it is stored only in your browser's local storage and is never transmitted to GogyAI.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA requires schools to protect student education records. While lesson planning inputs typically contain no student data, check your district's AI use policy before integrating any AI tool into formal school workflows. Most districts have guidance on approved tools — knowing where this tool stands in that framework helps you use it confidently. Browse <Link href="/" className="text-brand-700 underline">GogyAI's free AI tools for teachers</Link> to discover all 30 tools covering lesson planning, assessment, communication, and classroom management.
        </p>

        {/* Section 10 — FAQ */}
        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'How do I use an AI lesson plan generator?',
              a: 'Enter your subject, grade level, topic, lesson duration, and class size into the form above. Click Generate. The AI produces a complete lesson plan with objectives, activities, and assessment ideas in seconds. Review the output, align it to your standards, and adapt it for your class before use.',
            },
            {
              q: 'Are AI-generated lesson plans aligned to curriculum standards?',
              a: 'Not automatically. AI lesson plans are written as educationally sound frameworks with measurable objectives, but standard codes (CCSS, NGSS, TEKS, etc.) are not appended. You add your relevant standards to the plan after generation.',
            },
            {
              q: 'How accurate is an AI lesson plan generator for teachers?',
              a: 'Structurally, very reliable. Activity types, timing distributions, and pedagogical sequence (hook → instruction → practice → assessment) are consistently sound. Content accuracy improves significantly with more specific topic inputs. Always review before classroom use.',
            },
            {
              q: 'Can I use an AI lesson plan generator for special education?',
              a: <>Yes. The differentiation notes in each plan include support suggestions for struggling learners. For students with IEPs, pair this tool with the <Link href="/differentiated-instruction-planner" className="text-brand-700 underline">Differentiated Instruction Planner</Link> and <Link href="/iep-goal-writer" className="text-brand-700 underline">IEP Goal Writer</Link> for more targeted accommodation planning.</>,
            },
            {
              q: 'Is it okay for teachers to use AI to write lesson plans?',
              a: "Yes. Using AI to draft lesson plans is a professional practice comparable to using a template, a textbook teacher guide, or a colleague's plan as a starting point. The teacher reviews, customizes, and takes professional ownership of the final plan.",
            },
            {
              q: 'Does an AI lesson plan generator work for elementary school?',
              a: "Yes. Specify the grade level precisely (e.g., Grade 2, not just 'elementary'). The AI adjusts activity complexity, attention span considerations, and instructional pacing for younger learners automatically.",
            },
            {
              q: 'How is an AI lesson plan generator different from a lesson plan template?',
              a: 'A template gives you an empty structure to fill in. An AI generator produces the content — objectives, activities, timing, and assessment ideas — specific to your topic and class. You start with a complete draft, not blank fields.',
            },
            {
              q: 'Is the GogyAI lesson plan generator free?',
              a: 'Yes, completely free. No account, subscription, or credit card required. Generate as many lesson plans as you need.',
            },
          ].map(item => (
            <div key={item.q} className="border-b border-slate-100 pb-4">
              <p className="font-semibold text-slate-800 mb-1">{item.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Related Tools */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RELATED.map(tool => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="block bg-brand-50 border border-brand-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-brand-800 mb-1">{tool.name}</p>
              <p className="text-sm text-slate-600">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <ToolNav
        next={{ slug: 'unit-plan-creator', name: 'Unit Plan Creator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
