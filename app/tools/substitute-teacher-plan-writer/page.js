import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Substitute Teacher Plan Writer — Free AI Tool for Teachers',
  description: 'Generate complete substitute teacher plans with period-by-period instructions, classroom rules, and emergency procedures. Free AI sub plan writer for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/substitute-teacher-plan-writer' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 7' },
  { name: 'subjects', label: 'Subjects / Periods', type: 'text', placeholder: 'e.g. Period 1: Math, Period 2: Science, Period 3: ELA, Lunch 12-12:30, Period 4: Social Studies', full: true },
  { name: 'num_periods', label: 'Number of Periods', type: 'number', placeholder: '4', default: '4' },
  { name: 'behavior_notes', label: 'Behavior Notes', type: 'text', placeholder: 'e.g. 3rd period tends to talk excessively, seating chart is in top desk drawer', full: true },
  { name: 'materials', label: 'Available Materials / Activities', type: 'textarea', placeholder: 'e.g. Independent reading (books in classroom library), math review worksheet in top file, science textbook pages 45-52 reading + questions...', full: true },
  {
    name: 'emergency_format',
    label: 'Include Emergency Procedures',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes — include emergency section' },
      { value: 'no', label: 'No — emergency info provided separately' },
    ],
    default: 'yes',
  },
]

const PROMPT = `Create a complete substitute teacher plan for the following:
Grade Level: {grade}
Subjects/Schedule: {subjects}
Number of Periods: {num_periods}
Behavior Notes: {behavior_notes}
Available Materials/Activities: {materials}
Include Emergency Section: {emergency_format}

Structure the sub plan as follows:
1. Welcome Note — brief, warm introduction to the classroom and what to expect
2. Class Schedule — clear period-by-period breakdown with times (use the schedule provided)
3. Period-by-Period Instructions — for each period:
   - Period name/subject and time
   - Activity or lesson to run (using the materials provided)
   - Step-by-step instructions the sub can follow
   - What a successful period looks like
4. Classroom Rules and Expectations — 5 clear rules appropriate for {grade}
5. Important Student Information — where seating charts are, any accommodation notes (general — no specific student names)
6. Classroom Procedures — bathroom, sharpening pencils, getting materials, transitions
7. If students finish early — 2-3 independent activities they can do
{emergency_format === 'yes' ? '8. Emergency Procedures — fire drill, lockdown, and medical emergency basic response (teacher to fill in specific school procedures)' : ''}
9. Contact Information — [Teacher name] can be reached at: ___ | Main office: ___
10. Thank-you note from the teacher`

const RELATED = [
  { name: 'Weekly Schedule Planner', slug: 'weekly-schedule-planner', desc: 'Create the weekly schedule that your sub plan should mirror.' },
  { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator', desc: 'Generate the classroom rules to include in your sub plan.' },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Create review worksheets that work perfectly for sub days.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Follow up with parents after an absence that generated concerns.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Substitute Teacher Plan Writer — GogyAI',
    url: 'https://gogyai.com/substitute-teacher-plan-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Substitute Teacher Plan Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/substitute-teacher-plan-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Substitute Teacher Plan Writer: Complete Sub Folders in Minutes',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/substitute-teacher-plan-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should a substitute teacher plan include?', acceptedAnswer: { '@type': 'Answer', text: 'A complete sub plan includes a welcome note, period-by-period schedule with activities, step-by-step instructions for each activity, classroom rules, seating chart location, key procedures (bathroom, transitions, emergencies), contact information for the teacher and office, and early-finisher activities.' } },
      { '@type': 'Question', name: 'How do I write a sub plan quickly when I\'m unexpectedly absent?', acceptedAnswer: { '@type': 'Answer', text: 'Use the AI sub plan writer to generate the complete structure in minutes. Enter your schedule, a note about behavior, and what materials or activities are available. The AI handles the structure — you fill in or verify the specific details from wherever you are.' } },
      { '@type': 'Question', name: 'What activities work best for substitute teacher days?', acceptedAnswer: { '@type': 'Answer', text: 'Self-explanatory review activities work best: independent reading, review worksheets on content already taught, textbook reading with questions, and silent drawing or journaling prompts. Activities requiring new instruction or complex facilitation rarely go well with subs who don\'t know the content.' } },
      { '@type': 'Question', name: 'Should I leave a seating chart for a substitute?', acceptedAnswer: { '@type': 'Answer', text: 'Always. A seating chart is the single most important management tool you can leave. It lets the sub use student names immediately, which is the most effective tool for de-escalating behavior. Keep it with your sub folder in a consistent, labeled location.' } },
      { '@type': 'Question', name: 'How detailed should a substitute teacher plan be?', acceptedAnswer: { '@type': 'Answer', text: 'More detailed than you think is necessary. A sub who has never been in your room cannot infer the things you take for granted — where bathroom passes are, what to do if a student refuses a task, what the lunch procedure is. Write as if the sub has never been in a school before.' } },
      { '@type': 'Question', name: 'How do I handle IEP accommodations in a sub plan?', acceptedAnswer: { '@type': 'Answer', text: 'Include a general accommodations section without student names — "one student receives extended time on tasks" or "one student may use noise-canceling headphones during independent work." Specific IEP details are confidential and should be shared through your school\'s official SPED communication process, not in a general sub folder.' } },
      { '@type': 'Question', name: 'Is the GogyAI substitute teacher plan writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function SubstituteTeacherPlanWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Substitute Teacher Plan Writer</h1>
        <p className="text-slate-600 mb-6">Generate a complete sub folder — period-by-period instructions, classroom rules, procedures, and emergency information.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="substitute-teacher-plan-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Substitute Teacher Plan Writer: Complete Sub Folders in Minutes</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI substitute teacher plan writer to generate a complete sub folder — welcome note, period-by-period instructions, rules, procedures, and emergency section.</li>
            <li>Teachers at all grade levels will benefit — especially those who haven't prepared a reusable sub folder yet.</li>
            <li>The tool generates a complete, professional sub plan document from your schedule, available activities, and behavior notes.</li>
            <li>A sub plan is only as good as the activities in it — plan for independent, self-explanatory tasks that don't require new instruction.</li>
            <li>Prepare your sub folder before you need it; an unexpected absence that requires building a sub plan from scratch at 5am is far more stressful than reviewing an already-generated one.</li>
            <li>Never include specific student names or detailed IEP information in a general sub folder — use role descriptors and keep IEP specifics in official school channels.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Every teacher needs a sub folder. Most teachers know this. Many don't have one until they're sick at 5am trying to write instructions in a fever. An AI substitute teacher plan writer generates the complete document in minutes — not because you're planning to be absent, but because you're prepared if you are.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what a complete substitute teacher plan needs, how to use the tool to generate it quickly, and what makes the difference between a day that goes smoothly in your absence and one that doesn't.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Substitute Teacher Plan Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI substitute teacher plan writer generates a complete sub folder document — including a welcome note, period-by-period activity instructions, classroom rules, procedures, early-finisher activities, and emergency information — from your schedule and available materials. It handles the professional structure and language; you verify and add school-specific details.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools are particularly useful for building a standing sub folder — a document you update periodically and keep ready — rather than building from scratch on the day you need it.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Sub Plan Writers Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A poor substitute teacher day has cascading effects: lost instructional time, student behavioral incidents, a stressed and confused substitute, and a difficult re-entry for the teacher returning the next day. Much of this is preventable with clear, detailed instructions — instructions that take significant time to write well. AI sub plan writers provide that detail without the time investment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For teachers who rarely miss days and thus rarely write sub plans, AI generators are especially valuable — the structure and completeness of a good sub folder is something that takes experience to internalize. The generator applies professional standards automatically.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter your grade, schedule (subjects and times), number of periods, behavior notes, available materials or planned activities, and whether to include emergency procedures. The AI generates a complete sub folder document with all standard sections, step-by-step activity instructions for each period, and professional language appropriate for a substitute who doesn't know your classroom.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The materials field drives the quality of the period-by-period instructions. Describe what's available and what you want students to do — "review worksheet for chapter 5 in top file drawer, students work independently for 30 minutes, then check answers as a class using answer key in the same folder" — and the AI structures this into a clear, sequential instruction set.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Sub Plan Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Okonkwo teaches 7th grade and has been meaning to create a standing sub folder for months. On a Sunday afternoon, he takes 15 minutes to generate one that will cover any unexpected absence for the next month.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade: Grade 7. Subjects: Period 1 Math (8:00-8:50), Period 2 Science (9:00-9:50), Period 3 ELA (10:00-10:50), Lunch 11:00-11:30, Period 4 Social Studies (11:30-12:20).</li>
          <li>Behavior Notes: "Period 3 tends to talk — use seating chart strictly. Seating chart is in the red folder on my desk."</li>
          <li>Materials: "Math: review worksheet (ch. 4-5) in blue folder. Science: textbook pp. 88-95 read and answer questions 1-8. ELA: independent reading (books in classroom library) + reading log. Social Studies: current events worksheet in green folder."</li>
          <li>Emergency Procedures: Yes.</li>
          <li>He generates the plan, reads through it, adds his office extension and the school nurse's name, and saves it as a PDF in his cloud drive — accessible from anywhere.</li>
          <li>He prints one copy and puts it in the red folder with the seating chart. It's ready the next time he needs it.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Plan activities that are independent and self-explanatory</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A substitute cannot teach your content. Design sub days around activities students can do independently with minimal explanation: review worksheets, independent reading, textbook reading with provided questions. Save new instruction for when you return. The clearer the activity is to a stranger, the better the sub day goes.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Update your sub folder at the start of each month</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A sub folder built in September is outdated by November — different units, different students' needs, potentially different seating. A 15-minute monthly refresh (updating the activities section and re-checking behavior notes) keeps your folder current and genuinely useful year-round.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated sub plan uses placeholder language for school-specific emergency procedures. Your school's fire drill routes, lockdown procedures, and medical emergency protocols must be filled in by you — these vary by building and cannot be generated generically. Use the <Link href="/weekly-schedule-planner" className="text-brand-700 underline">Weekly Schedule Planner</Link> to ensure your sub plan mirrors the schedule your substitute will be following.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI cannot know your specific students, ongoing behavioral situations, or individualized accommodation needs. The behavior notes and accommodation sections require your direct knowledge — the AI provides the structure; you fill in the specifics, and the <Link href="/classroom-rules-generator" className="text-brand-700 underline">Classroom Rules Generator</Link> can help you articulate clear expectations for the rules section of your sub folder.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not include student names in your sub plan inputs. Use role descriptors — "one student who requires extended time" or "two students in the front row who tend to distract each other." GogyAI stores no personal information. Student-specific information belongs in sealed, labeled envelopes within the sub folder, not in a general AI-generated document.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          IEP accommodations and 504 plans are FERPA-protected education records. Share these with substitutes through your school's official SPED communication process — not through a general sub folder accessible in your desk drawer. <Link href="/" className="text-brand-700 underline">Explore all free tools on GogyAI</Link> to find more resources for classroom management and lesson planning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What should a substitute teacher plan include?', a: 'A welcome note, period-by-period schedule with step-by-step activity instructions, classroom rules, seating chart location, key procedures, contact information for teacher and office, early-finisher activities, and emergency procedures.' },
            { q: 'How do I write a sub plan quickly when I\'m unexpectedly absent?', a: 'Use the AI sub plan writer — enter your schedule, behavior notes, and available materials. The AI generates the structure in minutes. Fill in school-specific emergency procedures and contact information from wherever you are.' },
            { q: 'What activities work best for substitute teacher days?', a: 'Self-explanatory review activities: independent reading, review worksheets on content already taught, textbook reading with provided questions. Avoid activities requiring new instruction — subs cannot teach your content.' },
            { q: 'Should I leave a seating chart for a substitute?', a: 'Always. A seating chart lets the sub use student names immediately — the most effective behavior management tool available to someone who doesn\'t know your class.' },
            { q: 'How detailed should a substitute teacher plan be?', a: 'Write as if the sub has never been in a school before. Specify where bathroom passes are, what to do if a student refuses, what the lunch procedure is. Details teachers take for granted are unknowns to a substitute.' },
            { q: 'How do I handle IEP accommodations in a sub plan?', a: 'Include general accommodation notes without student names ("one student receives extended time"). Specific IEP details are confidential — share them through your school\'s official SPED communication process, not in a general sub folder.' },
            { q: 'Is the GogyAI substitute teacher plan writer free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'discussion-prompt-generator', name: 'Discussion Prompt Generator' }}
        next={{ slug: 'professional-development-goal-writer', name: 'Professional Development Goal Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
