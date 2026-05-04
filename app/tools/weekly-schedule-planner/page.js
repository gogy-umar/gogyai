import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Weekly Schedule Planner — Free AI Tool for Teachers',
  description: 'Generate a draft weekly classroom schedule with time blocks and subject rotation. Free AI weekly schedule planner for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/weekly-schedule-planner' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 3' },
  { name: 'subjects', label: 'Subject Areas', type: 'textarea', placeholder: 'e.g. Math, Reading/ELA, Writing, Science, Social Studies, Morning Meeting', full: true },
  { name: 'school_hours', label: 'Daily School Hours', type: 'text', placeholder: 'e.g. 8:00am – 3:00pm (7 hours)' },
  { name: 'special_classes', label: 'Special Classes / Fixed Periods', type: 'text', placeholder: 'e.g. PE Monday/Wednesday 10-10:45, Art Thursday 1:30-2:15, Lunch 12-12:30', full: true },
  {
    name: 'focus',
    label: 'Instructional Focus',
    type: 'select',
    options: [
      { value: 'balanced', label: 'Balanced (all subjects equal weight)' },
      { value: 'literacy-heavy', label: 'Literacy / ELA heavy' },
      { value: 'math-heavy', label: 'Math heavy' },
      { value: 'test prep', label: 'Test Prep / Review period' },
    ],
    default: 'balanced',
  },
]

const PROMPT = `Create a draft weekly classroom schedule for the following:
Grade Level: {grade}
Subject Areas to include: {subjects}
Daily School Hours: {school_hours}
Fixed/Special Classes: {special_classes}
Instructional Focus: {focus}

Produce a schedule formatted as a table: Monday through Friday, with time blocks for each subject area.

Requirements:
1. Block the fixed classes first ({special_classes})
2. Schedule {focus} instructional priorities during peak cognitive windows (late morning for most grades)
3. Place transitions and lighter activities after lunch / mid-afternoon
4. Include transition time between major subjects (5-10 minutes)
5. For elementary grades: include movement or brain break time
6. Show start and end times for each block
7. Add scheduling rationale notes below the table explaining 3-4 key decisions
8. Include 2-3 tips for maintaining schedule consistency throughout the year`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Plan the detailed lesson for each subject block in your schedule.' },
  { name: 'Unit Plan Creator', slug: 'unit-plan-creator', desc: 'Map out what each subject covers across the weeks of your schedule.' },
  { name: 'Substitute Teacher Plan Writer', slug: 'substitute-teacher-plan-writer', desc: 'Create a sub plan that mirrors your weekly schedule for coverage days.' },
  { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator', desc: 'Create routines and expectations that support your schedule\'s transitions.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Weekly Schedule Planner — GogyAI',
    url: 'https://gogyai.com/weekly-schedule-planner',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Weekly Schedule Planner',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/weekly-schedule-planner',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Weekly Schedule Planner for Teachers: Build a Schedule That Works All Year',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/weekly-schedule-planner',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How should I schedule subjects in an elementary classroom?', acceptedAnswer: { '@type': 'Answer', text: 'Place high-cognitive demand subjects (math and literacy) in the late morning hours when student attention is strongest — typically 9:00–11:30 for most elementary students. Schedule science and social studies after lunch. Keep transition times short and predictable.' } },
      { '@type': 'Question', name: 'How long should each subject block be in elementary school?', acceptedAnswer: { '@type': 'Answer', text: 'Reading/ELA typically receives 90 minutes (including whole-group, small-group, and independent work). Math receives 60–75 minutes. Science and social studies receive 30–45 minutes each. Specials (PE, art, music) are typically set by the school, usually 45 minutes.' } },
      { '@type': 'Question', name: 'How do I fit all subjects into a school day?', acceptedAnswer: { '@type': 'Answer', text: 'Prioritize your curriculum requirements, then work backwards. Most elementary schedules integrate science and social studies into literacy blocks through informational text, rather than treating them as fully separate subjects. The AI schedule accounts for this approach when you list all your subject areas.' } },
      { '@type': 'Question', name: 'Should I use block scheduling or traditional period scheduling?', acceptedAnswer: { '@type': 'Answer', text: 'Block scheduling (longer periods, fewer transitions) works well for secondary and for project-based learning. Traditional period scheduling (shorter, more frequent transitions) works better for elementary where variety maintains engagement. The tool generates a schedule appropriate for your grade level.' } },
      { '@type': 'Question', name: 'When is the best time to schedule math in the school day?', acceptedAnswer: { '@type': 'Answer', text: 'Research on cognitive performance and time-of-day suggests late morning (9:30–11:30) produces the best sustained attention for complex problem-solving. Scheduling math in this window is supported by findings on circadian rhythm and academic performance across age groups.' } },
      { '@type': 'Question', name: 'How do I build brain breaks into my classroom schedule?', acceptedAnswer: { '@type': 'Answer', text: 'Include movement or brain break time in the special classes field or mention it in your subjects list. For elementary grades, 5-10 minute brain breaks after every 45-60 minutes of instruction improve subsequent task engagement. The schedule will incorporate these as mini-transitions.' } },
      { '@type': 'Question', name: 'Is the GogyAI weekly schedule planner free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function WeeklySchedulePlannerPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Weekly Schedule Planner</h1>
        <p className="text-slate-600 mb-6">Generate a structured weekly classroom schedule with time blocks, subject rotation, and scheduling rationale.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="weekly-schedule-planner" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Weekly Schedule Planner for Teachers: Build a Schedule That Works All Year</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI weekly schedule planner to generate a time-blocked classroom schedule that accounts for fixed specials, instructional priorities, and grade-appropriate transitions.</li>
            <li>Elementary teachers and teachers new to self-contained classroom scheduling will benefit most.</li>
            <li>The tool generates a Monday–Friday schedule with time blocks, subject rotation, scheduling rationale, and tips for maintaining schedule consistency.</li>
            <li>Cognitive load research shows specific time-of-day advantages for high-demand subjects — the generated schedule accounts for this.</li>
            <li>Use the output as a starting framework and adjust for school-specific constraints, assemblies, and non-standard weeks.</li>
            <li>No student data should be entered — subject areas and school hours are all the tool needs.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Your classroom schedule is the architecture everything else runs on. A poorly sequenced schedule — math right after lunch when attention is lowest, high transitions during prime learning windows — costs you instructional time every single day. An AI weekly schedule planner generates a time-blocked draft that accounts for cognitive load research, your fixed constraints, and your instructional priorities.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what research says about scheduling for learning, how to use the tool to generate a practical starting framework, and how to adjust it for your specific school's realities.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Weekly Schedule Planner?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI weekly schedule planner generates a time-blocked Monday-through-Friday schedule based on your grade level, subject areas, school hours, fixed classes, and instructional priorities. It applies scheduling principles grounded in cognitive load research — placing high-demand subjects in peak attention windows and lower-demand activities in post-lunch dips — and produces a draft you customize to your situation.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Weekly Schedule Planners Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Elementary teachers who manage self-contained classrooms make dozens of scheduling decisions that compound over a 180-day year. Scheduling math at 8:00am when students are still arriving, or reading workshop at 1:30pm when post-lunch attention drops, isn't a small inconvenience — it's instructional time lost at scale. Schedule design is an evidence-based practice with measurable effects on student learning time.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For new teachers, the complexity of fitting curriculum mandates, specials, lunch, transitions, and mandated instructional minutes into a coherent week is genuinely overwhelming. An AI weekly schedule planner structures that puzzle into a workable draft framework.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter your grade, subjects, school hours, fixed classes, and whether you want a balanced schedule or a literacy- or math-heavy emphasis. The AI blocks fixed classes first, then schedules your subject areas in time windows optimized for the cognitive demands of each subject — placing your instructional priorities in the late morning peak and lighter activities after lunch.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output includes a formatted weekly schedule table, rationale notes explaining key scheduling decisions, and tips for maintaining schedule consistency across different weeks. This rationale is particularly useful when explaining your schedule choices to administrators or parents.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Weekly Schedule Planner</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Rivera teaches 3rd grade in a self-contained classroom, 8:00am–3:00pm. She has fixed PE on Monday and Wednesday at 10:00am, Art on Thursday at 1:30pm, and lunch from 12:00–12:30. She wants a literacy-heavy schedule with Math, Reading, Writing, Science, Social Studies, and a Morning Meeting.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade Level: Grade 3.</li>
          <li>Subjects: Math, Reading, Writing, Science, Social Studies, Morning Meeting.</li>
          <li>School Hours: 8:00am – 3:00pm.</li>
          <li>Special Classes: PE Monday/Wednesday 10:00-10:45, Art Thursday 1:30-2:15, Lunch 12:00-12:30.</li>
          <li>Focus: Literacy / ELA heavy.</li>
          <li>She generates the schedule and receives a Monday–Friday table with time blocks, transition notes, and three scheduling rationale points.</li>
          <li>She adjusts the Wednesday Science block — her school has a science lab available Wednesday afternoons that she forgot to mention — and moves it to 1:45pm post-lunch.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Include all fixed constraints in the special classes field</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Lunch, recess, pullout sessions, resource room, and specials all constrain your available time. The more comprehensively you list these in the special classes field, the more realistic the generated schedule will be as a working document.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Read the scheduling rationale</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The rationale section explains why specific subjects are placed in specific time windows. Understanding these decisions helps you make informed adjustments — and helps you explain your schedule to administrators, coaches, or parents who ask.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool generates a generic draft based on established scheduling principles. It cannot account for school-specific non-standard days, assemblies, testing weeks, or district mandates for minimum instructional minutes per subject. Treat the output as a starting framework and adjust for your school's specific calendar, then use the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> to fill each subject block with detailed instruction.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For secondary schools with period-based scheduling driven by the master schedule, this tool is less applicable — secondary schedule is typically set institutionally, not by individual teachers. It is most useful for self-contained elementary teachers who build their own daily schedule — and pairs naturally with the <Link href="/substitute-teacher-plan-writer" className="text-brand-700 underline">Substitute Teacher Plan Writer</Link> for coverage days.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Weekly schedule inputs contain no student data. Do not include student names or identifying information. GogyAI stores no personal information — inputs are used solely to generate your schedule. Browse <Link href="/" className="text-brand-700 underline">GogyAI&apos;s suite of free educator tools</Link> for more classroom planning resources.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How should I schedule subjects in an elementary classroom?', a: 'Place high-cognitive demand subjects (math and literacy) in late morning — typically 9:00–11:30 — when student attention is strongest. Schedule lighter activities after lunch. Keep transitions short and predictable.' },
            { q: 'How long should each subject block be in elementary school?', a: 'Reading/ELA typically receives 90 minutes (whole-group + small-group + independent). Math receives 60–75 minutes. Science and social studies receive 30–45 minutes each. Specials are typically school-set at 45 minutes.' },
            { q: 'How do I fit all subjects into a school day?', a: 'Prioritize curriculum requirements first. Many elementary schedules integrate science and social studies into literacy blocks through informational text. The AI accounts for this approach when you list all subject areas.' },
            { q: 'Should I use block scheduling or traditional period scheduling?', a: 'Block scheduling works well for secondary and project-based learning. Traditional shorter-period scheduling works better for elementary. The tool generates a schedule appropriate to your grade level.' },
            { q: 'When is the best time to schedule math in the school day?', a: 'Cognitive research suggests late morning (9:30–11:30) produces the best sustained attention for complex problem-solving. The AI schedule reflects this by defaulting to morning placement for high-demand subjects.' },
            { q: 'How do I build brain breaks into my schedule?', a: 'Mention brain breaks or movement time in your subjects list. For elementary grades, 5-10 minute movement breaks after 45-60 minutes of instruction improve subsequent engagement. The schedule incorporates these as mini-transitions.' },
            { q: 'Is the GogyAI weekly schedule planner free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'student-interest-survey-creator', name: 'Student Interest Survey Creator' }}
        next={{ slug: 'field-trip-permission-letter-writer', name: 'Field Trip Permission Letter Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
