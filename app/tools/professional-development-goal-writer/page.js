import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Professional Development Goal Writer — Free AI Tool for Teachers',
  description: 'Generate SMART professional development goals with action steps, resources, and success metrics for teachers and school leaders. Free AI PD goal writer. No login required.',
  alternates: { canonical: 'https://gogyai.com/professional-development-goal-writer' },
}

const FIELDS = [
  {
    name: 'role',
    label: 'Your Role',
    type: 'select',
    options: [
      { value: 'classroom teacher', label: 'Classroom Teacher' },
      { value: 'instructional coach', label: 'Instructional Coach' },
      { value: 'school administrator', label: 'School Administrator / Principal' },
      { value: 'curriculum designer', label: 'Curriculum Designer / Specialist' },
    ],
    default: 'classroom teacher',
  },
  { name: 'growth_area', label: 'Growth Area', type: 'text', placeholder: 'e.g. Differentiated instruction, student engagement, data-driven teaching, technology integration', full: true },
  {
    name: 'pd_time',
    label: 'PD Time Available',
    type: 'select',
    options: [
      { value: '1-2 hours per week', label: '1-2 hours per week' },
      { value: '3-4 hours per week', label: '3-4 hours per week' },
      { value: 'several hours per month', label: 'Several hours per month' },
      { value: 'intensive (summer or extended leave)', label: 'Intensive (summer/extended)' },
    ],
    default: '1-2 hours per week',
  },
  {
    name: 'timeframe',
    label: 'Timeframe',
    type: 'select',
    options: [
      { value: 'one semester', label: 'One Semester' },
      { value: 'one school year', label: 'One School Year' },
      { value: 'two years', label: 'Two Years' },
    ],
    default: 'one school year',
  },
  { name: 'school_priority', label: 'School / District Priority Focus', type: 'text', placeholder: 'e.g. Literacy across content areas, PBIS implementation, equity and inclusion, MTSS framework', full: true },
]

const PROMPT = `Write professional development goals for the following educator:
Role: {role}
Growth Area: {growth_area}
PD Time Available: {pd_time}
Timeframe: {timeframe}
School/District Priority: {school_priority}

Provide:
1. SMART Goal Statement — specific, measurable, achievable, relevant, and time-bound. Should connect both the individual growth area and the school priority.

2. Rationale — why this goal matters for this educator's practice and for students (2-3 sentences)

3. Action Steps — 4-6 specific, sequential steps for achieving the goal, matched to the {pd_time} available:
   - Each step should be concrete and achievable
   - Include a suggested timeline for each step
   - Vary the type: reading/research, professional learning community, classroom experimentation, observation, coaching

4. Recommended Resources — 4-5 specific types of resources (books, research, professional organizations, frameworks) relevant to {growth_area}

5. Success Metrics — 3 observable indicators that will show the goal has been achieved (what will be different in the classroom or school?)

6. Mid-Point Check-In Questions — 3 reflective questions to assess progress halfway through the {timeframe}

Format as a professional document appropriate for a teacher evaluation portfolio or professional growth plan.`

const RELATED = [
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Apply objective-writing skills to craft measurable PD goals for your team.' },
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Practice lesson planning as you develop goals around instructional improvement.' },
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Build differentiation skills — a common PD focus area for teachers at all levels.' },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: 'Use discussion prompts in PLC sessions centered on your PD goal topic.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Professional Development Goal Writer — GogyAI',
    url: 'https://gogyai.com/professional-development-goal-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Professional Development Goal Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/professional-development-goal-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Professional Development Goal Writer for Teachers: SMART Goals with Real Action Steps',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/professional-development-goal-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is a SMART professional development goal for teachers?', acceptedAnswer: { '@type': 'Answer', text: 'A SMART PD goal is Specific (identifies a precise skill or practice area), Measurable (can be observed or quantified), Achievable (realistic given available time and resources), Relevant (connected to student outcomes and school priorities), and Time-bound (has a clear deadline or endpoint). Generic goals like "improve teaching" are not SMART goals.' } },
      { '@type': 'Question', name: 'How do I write a professional development goal for my teacher evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'Connect your goal to a specific teaching standard or student outcome, make it measurable by identifying what will be observable in your practice when the goal is achieved, and align it with your school\'s identified priorities. Use the SMART format. The generated goal includes a statement that can be used directly in evaluation documentation with minor customization.' } },
      { '@type': 'Question', name: 'What are good professional development goal examples for teachers?', acceptedAnswer: { '@type': 'Answer', text: 'Strong examples include: "By the end of the school year, I will implement at least one evidence-based differentiation strategy per week, as evidenced by lesson plan documentation and a 10% increase in formative assessment proficiency rates." The specificity of measurement and the connection to student outcomes is what makes a PD goal strong.' } },
      { '@type': 'Question', name: 'How do I align my PD goals with school priorities?', acceptedAnswer: { '@type': 'Answer', text: 'Enter your school\'s current priority focus in the school priority field. The AI generates a goal that connects your individual growth area to the school-level initiative — so the goal serves both your professional development and your school\'s strategic direction simultaneously.' } },
      { '@type': 'Question', name: 'How many professional development goals should a teacher have?', acceptedAnswer: { '@type': 'Answer', text: '1-3 goals per year is the research-supported range. More than three dilutes focus and makes meaningful progress unlikely. One deep, well-supported goal produces more professional growth than five surface-level goals spread across disconnected areas.' } },
      { '@type': 'Question', name: 'Can instructional coaches use this tool for their own PD goals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "Instructional Coach" as the role. The generated goals are framed around coaching practice — facilitating teacher learning, analyzing coaching impact, and building capacity across a school — rather than individual classroom practice.' } },
      { '@type': 'Question', name: 'Is the GogyAI professional development goal writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function ProfessionalDevelopmentGoalWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Professional Development Goal Writer</h1>
        <p className="text-slate-600 mb-6">Generate SMART PD goals with action steps, resources, success metrics, and mid-point check-in questions for teachers and school leaders.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="professional-development-goal-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Professional Development Goal Writer for Teachers: SMART Goals with Real Action Steps</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI professional development goal writer to generate SMART PD goals with action steps, resources, and success metrics aligned to your role and school priorities.</li>
            <li>Classroom teachers, instructional coaches, and administrators who need to develop or document professional growth goals will benefit most.</li>
            <li>The tool generates a complete PD goal document — SMART statement, rationale, action steps with timeline, recommended resources, success metrics, and mid-point check-in questions.</li>
            <li>Aim for 1-3 goals per year — one deep, focused goal produces more growth than five surface-level goals across disconnected areas.</li>
            <li>Use the generated goal as a starting draft; align it to your school's specific evaluation framework and adjust the success metrics to fit observable evidence in your specific context.</li>
            <li>No student data is needed — your role, growth area, and school priority are all the tool requires.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Most professional development goals written for annual evaluations are vague enough to mean almost anything — "I will improve student engagement" tells no one, including the teacher who wrote it, what will actually change or how they'll know when it does. A SMART professional development goal is specific enough to hold itself accountable. Writing one well is harder than it looks.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what makes a PD goal genuinely SMART, how to use the tool to generate goals that connect individual growth to school priorities, and how to use the action steps to turn a document into actual professional learning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Professional Development Goal Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI professional development goal writer generates a complete SMART PD goal document — including the goal statement, rationale, action steps with timelines, recommended resources, success metrics, and mid-point reflection questions — based on your role, growth area, time availability, and school priorities.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools are valuable because PD goal writing requires balancing specificity, measurability, alignment to school priorities, and honest self-assessment of what's achievable — simultaneously. AI generators apply that structure automatically, producing a professionally framed starting document that educators customize to their specific context.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why PD Goal Writers Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Professional growth goals are often treated as compliance documents — something to write in September and file. This happens partly because the goal-writing process itself is underpowered: vague goals produce vague action, which produces no change. When goals are specific, measurable, and connected to real action steps and success criteria, they actually drive growth.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI PD goal writers help shift goals from compliance to tools for genuine professional development by forcing specificity in the goal statement and concreteness in the action steps. A goal with six action steps and a mid-point check-in is structurally more likely to produce growth than one filed and forgotten.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter your role, the specific growth area you want to address, how much time you have for PD, your timeframe, and your school's current priority focus. The AI generates a complete PD goal document — SMART goal statement, rationale connecting the goal to student impact, 4-6 action steps with suggested timelines, recommended resources, observable success metrics, and reflective questions for a mid-point check-in.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The school priority field is important because it connects your individual development to the school's strategic direction — making the goal more defensible in evaluation conversations and more likely to receive institutional support. A goal that serves both your growth and your school's direction is easier to resource and harder to deprioritize.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the PD Goal Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Chen is a 3rd-year classroom teacher preparing her annual professional growth goals for her evaluation. Her school has a literacy initiative, and she knows her greatest opportunity for growth is in small-group reading instruction — specifically, how she runs her guided reading groups.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Role: Classroom Teacher.</li>
          <li>Growth Area: "Guided reading instruction — specifically running differentiated small groups more effectively and using running records to inform group placement and instruction."</li>
          <li>PD Time: 1-2 hours per week.</li>
          <li>Timeframe: One School Year.</li>
          <li>School Priority: "Literacy across content areas — district initiative to improve K-5 reading proficiency."</li>
          <li>She generates the PD goal and receives a SMART statement, 5 action steps with timelines, 4 resource recommendations, and 3 success metrics.</li>
          <li>She adjusts one success metric — changes "student reading level improvement" to the specific assessment tool her school uses — and submits the goal to her evaluator.</li>
          <li>She schedules the mid-point check-in for February and blocks 90 minutes on her calendar for three of the action steps for the following month.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the growth area</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Student engagement" produces a generic goal. "Using high-leverage questioning techniques to increase student-generated discussion in whole-class instruction" produces a specific, actionable one. The more precisely you describe what you want to get better at, the more targeted and useful the generated goal and action steps will be.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Actually use the action steps and check-in questions</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A SMART goal that gets filed is still a compliance document. Put the action steps in your calendar. Conduct the mid-point check-in. The generator builds a structure for real professional growth — but only if you use it as one.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated PD goals need to be aligned to your specific evaluation framework. Different districts use different frameworks — Danielson, Marzano, TPEP, or district-specific rubrics — and your goal statement should reference the specific domain or standard relevant to your growth area. The AI generates a professionally framed SMART goal; you align the language to your district's framework — and the <Link href="/learning-objectives-writer" className="text-brand-700 underline">Learning Objectives Writer</Link> can help you articulate measurable classroom-level outcomes that align with your PD goal.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Success metrics in the generated goal may need to be adjusted to use your school's specific assessment tools and data systems. Replace generic metrics with the specific tools and data sources your evaluator will recognize and accept as evidence — and use the <Link href="/discussion-prompt-generator" className="text-brand-700 underline">Discussion Prompt Generator</Link> to create structured PLC discussion questions around your PD goal topic.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          PD goal inputs contain no student data. Growth area, role, and school priority contain no personal information. GogyAI stores no personal information — inputs are used solely to generate your professional development goal document.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated document is your professional development plan — a work document, not a student record. It is appropriate to share with your evaluator, coach, or PLC team as a professional growth planning tool. Visit <Link href="/" className="text-brand-700 underline">GogyAI — free tools for teachers</Link> to explore more resources for professional development and instructional planning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is a SMART professional development goal for teachers?', a: 'A SMART goal is Specific (precise skill area), Measurable (observable or quantifiable), Achievable (realistic given available time), Relevant (connected to student outcomes and school priorities), and Time-bound (has a clear endpoint). "Improve teaching" is not a SMART goal.' },
            { q: 'How do I write a professional development goal for my teacher evaluation?', a: 'Connect the goal to a specific teaching standard, make it measurable by identifying observable changes in practice, and align it with school priorities. Use SMART format. The generated goal includes a statement suitable for evaluation documentation with minor customization.' },
            { q: 'What are good professional development goal examples for teachers?', a: '"By the end of the school year, I will implement at least one evidence-based differentiation strategy per week, as evidenced by lesson plan documentation and a 10% increase in formative assessment proficiency rates." Specificity and connection to student outcomes make a goal strong.' },
            { q: 'How do I align my PD goals with school priorities?', a: 'Enter your school\'s priority focus. The AI generates a goal connecting your individual growth area to the school-level initiative — so one goal serves both personal professional development and the school\'s strategic direction.' },
            { q: 'How many professional development goals should a teacher have?', a: '1-3 per year. More than three dilutes focus. One deep, well-supported goal produces more growth than five surface-level goals across disconnected areas.' },
            { q: 'Can instructional coaches use this tool for their PD goals?', a: 'Yes. Select "Instructional Coach" as the role. Goals are framed around coaching practice — facilitating teacher learning, analyzing coaching impact, building capacity — rather than individual classroom practice.' },
            { q: 'Is the GogyAI professional development goal writer free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'substitute-teacher-plan-writer', name: 'Substitute Teacher Plan Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
