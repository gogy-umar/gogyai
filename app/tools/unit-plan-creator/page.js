import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Unit Plan Creator — Free AI Tool for Teachers',
  description: 'Generate a complete week-by-week unit plan with AI. Free unit plan creator for teachers covering any subject, grade, and theme. No login required.',
  alternates: { canonical: 'https://gogyai.com/unit-plan-creator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. High School Biology' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 10' },
  { name: 'theme', label: 'Unit Theme / Title', type: 'text', placeholder: 'e.g. Genetics and Heredity', full: true },
  { name: 'weeks', label: 'Number of Weeks', type: 'number', placeholder: '3', default: '3' },
  { name: 'goals', label: 'Key Standards or Goals', type: 'textarea', placeholder: 'e.g. Students will understand Mendelian genetics and apply Punnett squares', full: true },
]

const PROMPT = `Create a detailed unit plan with the following details:
Subject: {subject}
Grade Level: {grade}
Unit Theme/Title: {theme}
Duration: {weeks} weeks
Key Standards/Goals: {goals}

For each week provide:
- Week number and focus/theme
- 3-4 lesson titles with brief descriptions
- Key vocabulary introduced
- Major activities or projects
- Assessment checkpoint (formative or summative)
- Key skills developed that week

Also include:
- Unit essential questions (2-3)
- Final summative assessment description
- Suggested resources and materials
- Differentiation suggestions for the unit`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build individual lesson plans for each week of your unit.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write precise objectives for each lesson in your unit.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Create rubrics for the summative assessments in your unit.' },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: 'Generate discussion prompts for each unit topic.' },
]

const schemas = {
  webPage: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Unit Plan Creator — GogyAI', url: 'https://gogyai.com/unit-plan-creator' },
  software: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AI Unit Plan Creator', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url: 'https://gogyai.com/unit-plan-creator' },
  article: { '@context': 'https://schema.org', '@type': 'Article', headline: 'AI Unit Plan Creator for Teachers: Plan Entire Units in Minutes', author: { '@type': 'Organization', name: 'GogyAI' }, publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' }, url: 'https://gogyai.com/unit-plan-creator' },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should a unit plan include?', acceptedAnswer: { '@type': 'Answer', text: 'A strong unit plan includes essential questions, weekly lesson focus areas, key vocabulary, major activities, formative and summative assessments, and differentiation strategies. The AI unit plan creator generates all of these from your inputs.' } },
      { '@type': 'Question', name: 'How long does it take to create a unit plan with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Generating a unit plan with AI takes under 15 seconds. Reviewing and customizing the output for your specific class and standards typically takes 10–20 minutes — far less than building from scratch.' } },
      { '@type': 'Question', name: 'Can the AI unit plan creator align to Common Core or NGSS?', acceptedAnswer: { '@type': 'Answer', text: 'The AI writes educationally sound unit plans but does not automatically attach standard codes. Paste your relevant standards into the Key Standards field and the AI will incorporate them into the plan objectives. You add the specific codes after generation.' } },
      { '@type': 'Question', name: 'Is a unit plan the same as a curriculum map?', acceptedAnswer: { '@type': 'Answer', text: 'No. A curriculum map covers an entire course or year and shows how units connect. A unit plan is the detailed design for one specific unit — typically 2–6 weeks. This tool generates individual unit plans; multiple unit plans combine to form a curriculum map.' } },
      { '@type': 'Question', name: 'How many weeks can I plan with the AI unit plan creator?', acceptedAnswer: { '@type': 'Answer', text: 'The tool works best for units of 1–8 weeks. For longer units, consider splitting the theme into two connected units and generating each separately for more detailed output.' } },
      { '@type': 'Question', name: 'Does the unit plan creator work for project-based learning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Specify a project-based theme in the Unit Theme field and mention PBL in the goals. The AI will structure activities around inquiry, investigation, and a culminating project.' } },
      { '@type': 'Question', name: 'Is the GogyAI unit plan creator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription needed.' } },
    ],
  },
}

export default function UnitPlanCreatorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Unit Plan Creator</h1>
        <p className="text-slate-500 mb-6">Generate a complete week-by-week unit plan for any subject and grade level.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="unit-plan-creator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Unit Plan Creator for Teachers: Plan Entire Units in Minutes</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers how to use AI to design complete, week-by-week unit plans for any subject and grade.</li>
            <li>Best suited for classroom teachers, curriculum designers, and instructional coaches planning multi-week instruction.</li>
            <li>An AI unit plan creator generates lesson focus areas, assessments, key vocabulary, and activities organized by week.</li>
            <li>Teachers typically reduce unit planning time from several hours to under 30 minutes including review.</li>
            <li>AI output requires teacher review for standard alignment, cultural relevance, and school-specific context.</li>
            <li>Do not input student names or identifying information when using this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Unit planning is where most of a teacher's deep curriculum thinking happens — and it's also where many teachers spend the most time staring at a blank page. An AI unit plan creator handles the structural scaffolding so you can focus on the pedagogical decisions that actually require your expertise.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what AI unit planning tools do well, where they fall short, and how to use them to build units your students will actually engage with.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Unit Plan Creator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI unit plan creator takes your subject, grade level, unit theme, duration, and key learning goals, then generates a structured week-by-week plan with lesson focus areas, assessments, vocabulary, and activities. It does in seconds what would take a teacher 2–3 hours to draft from scratch.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because unit planning follows recognizable instructional design patterns: essential questions, skill progression, formative checks at key intervals, and a culminating assessment. AI language models trained on educational content can apply these patterns reliably across virtually any subject area.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Unit Plan Creators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A complete unit plan for a 3-week unit typically takes an experienced teacher 2–4 hours to draft. For department teams doing collaborative planning, this multiplies quickly. AI unit plan creators compress that drafting phase to minutes, giving teams a structured proposal to react to rather than a blank template to fill.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For new teachers, unit planning tools provide a professional framework that would otherwise require years of experience to internalize. The essential questions, backward design structure, and embedded assessments in a good AI-generated unit plan model quality instructional design automatically.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You input your subject, grade, unit theme, number of weeks, and key standards or goals. The AI generates a week-by-week plan: each week has a focus, lesson titles, key vocabulary, activities, and an assessment checkpoint. It also produces unit-level essential questions and a final summative assessment description.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output is a complete framework that you customize — adjusting lesson titles to match your textbook, adding your specific standard codes, and replacing generic resources with the materials you actually have. The AI builds the house; you furnish it with your classroom context.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Unit Plan Creator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Adeyemi teaches 10th-grade World History and needs a 4-week unit on World War I. He has state standards requiring students to analyze causes, key events, and global consequences of the war.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>He enters "World History, Grade 10" for subject and grade.</li>
          <li>Unit Theme: "World War I — Causes, Course, and Consequences."</li>
          <li>Duration: 4 weeks.</li>
          <li>Goals: "Analyze the causes of WWI (MAIN), trace major events, evaluate the Treaty of Versailles, connect to WWII origins."</li>
          <li>He generates the plan and receives a week-by-week structure in 10 seconds.</li>
          <li>He reviews: Week 1 covers nationalism and alliance systems, Week 2 covers major battles, Week 3 covers the home front and global dimensions, Week 4 covers the armistice and peace process — all logically sequenced.</li>
          <li>He adds his state standard codes, replaces the suggested textbook with his district's adopted resource, and adjusts Week 3 to include primary source analysis, which his school's literacy initiative requires.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Include your key standards in the goals field</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Pasting your relevant standard language into the goals field dramatically improves how well the AI structures the unit's learning progression. You don't need to paste code numbers — just the skill language from the standard.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Name a specific culminating task if you have one</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          If your unit ends in a specific project, essay, or performance task, mention it in the goals field. The AI will backward-design the unit's weekly sequence to build toward that task, producing much more coherent scaffolding.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI unit plans are not curriculum maps. They don't show how one unit connects to the previous or next unit in a year-long sequence. For full-year curriculum mapping, use AI-generated units as building blocks within a larger framework you design. To build out individual lessons within the unit, the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> creates detailed daily plans from any topic or objective.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Suggested resources will be generic. The AI can't know whether your school has a specific textbook, a maker space, or restricted internet access. All resource suggestions require your substitution with what's actually available. To write precise, measurable objectives for your unit's learning goals, the <Link href="/learning-objectives-writer" className="text-brand-700 underline">Learning Objectives Writer</Link> generates SMART objectives with Bloom's Taxonomy action verbs.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Unit planning inputs contain no student data. Do not include student names or individual student information in your inputs. GogyAI stores no personal information — your inputs are used solely to generate your plan. Explore <Link href="/" className="text-brand-700 underline">GogyAI's full collection of free tools</Link> for lesson planning, assessment, communication, and classroom management tools built for educators.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What should a unit plan include?', a: 'A strong unit plan includes essential questions, weekly lesson focus areas, key vocabulary, major activities, formative and summative assessments, and differentiation strategies. The AI unit plan creator generates all of these from your inputs.' },
            { q: 'How long does it take to create a unit plan with AI?', a: 'Generating takes under 15 seconds. Reviewing and customizing typically takes 10–20 minutes — far less than building from scratch.' },
            { q: 'Can the AI unit plan creator align to Common Core or NGSS?', a: 'Paste your relevant standard language into the Key Standards field and the AI incorporates it into the plan objectives. Add specific standard codes yourself after generation.' },
            { q: 'Is a unit plan the same as a curriculum map?', a: 'No. A curriculum map covers an entire course or year. A unit plan designs one specific unit — typically 2–6 weeks. Multiple unit plans combine to form a curriculum map.' },
            { q: 'How many weeks can I plan with the AI unit plan creator?', a: 'Best for 1–8 week units. For longer units, split the theme into two connected units and generate each separately.' },
            { q: 'Does the unit plan creator work for project-based learning?', a: 'Yes. Specify a PBL theme and mention project-based learning in your goals. The AI will structure activities around inquiry and a culminating project.' },
            { q: 'Is the GogyAI unit plan creator free?', a: 'Yes, completely free. No account or subscription needed.' },
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
        prev={{ slug: 'lesson-plan-generator', name: 'Lesson Plan Generator' }}
        next={{ slug: 'learning-objectives-writer', name: 'Learning Objectives Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
