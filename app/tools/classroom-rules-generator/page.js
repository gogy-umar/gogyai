import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Classroom Rules Generator — Free AI Tool for Teachers',
  description: 'Generate age-appropriate classroom rules with student-friendly language and teacher rationale. Free AI classroom rules generator for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/classroom-rules-generator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 2' },
  {
    name: 'class_type',
    label: 'Class Type',
    type: 'select',
    options: [
      { value: 'elementary', label: 'Elementary (K-5)' },
      { value: 'middle school', label: 'Middle School (6-8)' },
      { value: 'high school', label: 'High School (9-12)' },
      { value: 'university', label: 'University / Higher Education' },
    ],
    default: 'elementary',
  },
  {
    name: 'environment',
    label: 'Classroom Environment',
    type: 'select',
    options: [
      { value: 'traditional', label: 'Traditional (teacher-led, desks)' },
      { value: 'collaborative', label: 'Collaborative (group work, flexible)' },
      { value: 'digital', label: 'Digital / Technology-focused' },
      { value: 'lab', label: 'Science Lab / Maker Space' },
    ],
    default: 'traditional',
  },
  { name: 'num_rules', label: 'Number of Rules', type: 'number', placeholder: '5', default: '5' },
]

const PROMPT = `Create a set of {num_rules} classroom rules for the following context:
Grade Level: {grade}
Class Type: {class_type}
Classroom Environment: {environment}

For each rule, provide:
1. The rule itself — written in positive, student-friendly language appropriate for {grade} students (what TO do, not what NOT to do)
2. A brief teacher rationale (1-2 sentences) explaining why this rule matters and how it supports learning

Guidelines:
- Rules should be broad enough to cover most situations but specific enough to be actionable
- Use age-appropriate vocabulary — simpler and more concrete for elementary, more nuanced for secondary
- Frame rules positively (e.g., "Respect others" rather than "Don't be mean")
- For {environment} classrooms, include at least one rule specific to that environment
- After the rules, provide 2-3 implementation tips for establishing these rules at the start of the year`

const RELATED = [
  { name: 'Behavior Intervention Plan Writer', slug: 'behavior-intervention-plan-writer', desc: 'Create a structured plan when a specific student behavior needs intervention.' },
  { name: 'Student Interest Survey Creator', slug: 'student-interest-survey-creator', desc: 'Learn about your students to build classroom community alongside your rules.' },
  { name: 'Seating Chart Suggestion Tool', slug: 'seating-chart-suggestion-tool', desc: 'Arrange your classroom to support the environment your rules describe.' },
  { name: 'Weekly Schedule Planner', slug: 'weekly-schedule-planner', desc: 'Plan a weekly schedule that reinforces consistent classroom routines.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Classroom Rules Generator — GogyAI',
    url: 'https://gogyai.com/classroom-rules-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Classroom Rules Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/classroom-rules-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Classroom Rules Generator: Age-Appropriate Rules That Actually Work',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/classroom-rules-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How many classroom rules should a teacher have?', acceptedAnswer: { '@type': 'Answer', text: 'Research on classroom management consistently recommends 3–7 rules — enough to cover the most important behaviors without overwhelming students. Five rules is the most common and effective number. Fewer rules are remembered better; more rules become difficult to enforce consistently.' } },
      { '@type': 'Question', name: 'Should classroom rules be positive or negative?', acceptedAnswer: { '@type': 'Answer', text: 'Positive rules consistently outperform prohibitive ones. "Be respectful" is more memorable and actionable than "Don\'t be rude." Positive rules tell students what TO do, which is more constructive and less punitive in how it frames expectations.' } },
      { '@type': 'Question', name: 'How do I create classroom rules with student input?', acceptedAnswer: { '@type': 'Answer', text: 'Generate a draft set of rules using this tool, then facilitate a class discussion where students review, discuss, and vote on the final wording. This co-creation process significantly increases student buy-in and rule adherence without starting from scratch.' } },
      { '@type': 'Question', name: 'Do classroom rules need to be different for middle school vs. elementary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Elementary rules are more concrete and specific ("Use walking feet in the hall"). Middle and high school rules are broader and more autonomy-focused ("Be responsible for your own learning"). The tool adjusts language complexity and framing automatically when you specify grade level.' } },
      { '@type': 'Question', name: 'How do I introduce classroom rules at the start of the year?', acceptedAnswer: { '@type': 'Answer', text: 'The generated rules include implementation tips. Research supports spending 2–3 full class periods explicitly teaching, practicing, and role-playing rules during the first week — not just reading them aloud. The more explicitly rules are taught as procedures, the more consistently students follow them.' } },
      { '@type': 'Question', name: 'Can I use AI to create rules for a virtual or hybrid classroom?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "Digital / Technology-focused" as the environment. The generated rules will include expectations around technology use, video participation, and digital communication appropriate for your grade level.' } },
      { '@type': 'Question', name: 'Is the GogyAI classroom rules generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function ClassroomRulesGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Classroom Rules Generator</h1>
        <p className="text-slate-600 mb-6">Generate age-appropriate classroom rules with student-friendly language and rationale for each rule.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="classroom-rules-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Classroom Rules Generator: Age-Appropriate Rules That Actually Work</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI classroom rules generator to create age-appropriate, positively framed rules with rationale for any classroom type.</li>
            <li>New teachers setting up their first classroom and experienced teachers refreshing their management approach will both benefit.</li>
            <li>The tool generates rules in student-friendly language with a teacher rationale for each, plus implementation tips for the start of the year.</li>
            <li>Use the generated rules as a starting draft — co-creating the final wording with students significantly increases adherence.</li>
            <li>Rules without consistent enforcement have no effect — the implementation tips address this directly.</li>
            <li>No student data should be entered; grade level and classroom type are all the tool needs.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          The research on classroom rules is clear: five or fewer positively framed expectations, explicitly taught and consistently enforced, predict more orderly and productive classrooms than extensive rule lists posted on the wall and never discussed again. An AI classroom rules generator gives you a strong starting draft — and the rationale behind each rule — in seconds.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what effective classroom rules look like, how to use the tool, and how to move from generated rules to genuine classroom community.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Classroom Rules Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI classroom rules generator creates a set of positively framed, age-appropriate classroom expectations — along with a rationale for each rule and implementation tips — based on your grade level, class type, and classroom environment. It replaces the blank page when you're setting up a new classroom or rethinking your management approach.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools draw on established classroom management research — the positive behavioral framing, the connection to environment, and the accompanying rationale all reflect what research shows about effective rule design. The generator produces a research-informed starting point; you customize it to your specific students and context.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Classroom Rules Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Writing effective classroom rules requires balancing several competing demands simultaneously: rules must be specific enough to be actionable but broad enough to cover a range of situations; positive in framing but clear about expectations; developmentally appropriate but rigorous enough to matter. This is harder than it sounds, particularly for new teachers who haven't yet internalized what classroom management research recommends.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI generators apply that research automatically. The positive framing, the developmentally appropriate language calibration, and the connection to specific environments are built into the output — not things you have to remember and apply separately.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You specify grade level, class type, environment, and the number of rules you want. The AI generates rules in student-friendly language — positive and actionable — with a brief rationale for each explaining why it matters and how it supports learning. Implementation tips for the first week of school follow.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The environment selector shapes the specificity of the rules. A lab environment generates safety-specific expectations. A digital classroom generates technology use norms. A collaborative environment generates group work and communication expectations that a traditional classroom wouldn't need.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Classroom Rules Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Chen is a first-year 5th-grade teacher setting up a collaborative classroom — group tables, student-led projects, flexible seating. She wants five rules that set clear expectations for how students work together and treat their shared space.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade Level: Grade 5.</li>
          <li>Class Type: Elementary (K-5).</li>
          <li>Environment: Collaborative.</li>
          <li>Number of Rules: 5.</li>
          <li>She generates the rules and reads them through.</li>
          <li>She likes four of the five. The fifth — "Manage your materials responsibly" — feels too vague for 5th graders. She revises it to "Return materials to their place when you're finished."</li>
          <li>On the first day of school, she presents the draft rules to her class, facilitates a 15-minute discussion about what each rule looks like in practice, and has students vote on the final wording for two of the rules. Students leave feeling ownership over the expectations.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use generated rules as a draft, not a final product</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The strongest classroom rules emerge from teacher expertise and student input together. Use the AI's output as a well-researched starting point, then refine the language with your class. Co-created rules have dramatically higher student buy-in than rules handed down from the front of the room.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Read the rationale — then share it with students</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The rationale for each rule isn't just for your reference. Sharing the "why" with students — at age-appropriate levels — builds understanding rather than compliance. Students who understand why a rule exists follow it more consistently than those who follow it because they have to.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated rules do not account for your school's existing behavioral framework. Many schools use PBIS (Positive Behavioral Interventions and Supports), Restorative Practices, or other structured management systems. Your classroom rules must align with your school's system — adjust the generated rules to fit within that framework rather than replacing it. For students who consistently challenge those rules, the <Link href="/behavior-intervention-plan-writer" className="text-brand-700 underline">Behavior Intervention Plan Writer</Link> generates individualized intervention frameworks with replacement behaviors and monitoring strategies.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Rules are necessary but not sufficient for effective classroom management. The implementation tips generated alongside the rules address this — but the teacher's consistent follow-through, relationship-building with students, and responsive adjustment throughout the year are what actually make rules function. To build the student relationships that underpin effective management, the <Link href="/student-interest-survey-creator" className="text-brand-700 underline">Student Interest Survey Creator</Link> generates surveys that surface student preferences, goals, and what they want their teacher to know about them.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Classroom rules inputs contain no student data. Do not include student names or identifying information in your inputs. GogyAI stores no personal information. See all 30 free tools for classroom management, planning, and communication at <Link href="/" className="text-brand-700 underline">GogyAI&apos;s free AI tools for teachers</Link>.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Generated rules are general classroom management frameworks. They do not constitute legal behavioral documentation. For formal behavioral plans with legal implications (IEPs, 504 plans), follow your district's designated processes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How many classroom rules should a teacher have?', a: 'Research recommends 3–7 rules. Five is the most common and effective number — enough to cover major behaviors without overwhelming students. Fewer rules are remembered better and enforced more consistently.' },
            { q: 'Should classroom rules be positive or negative?', a: 'Positive rules consistently outperform prohibitive ones. "Be respectful" is more actionable than "Don\'t be rude." Positive rules tell students what TO do — which is more constructive and less punitive.' },
            { q: 'How do I create classroom rules with student input?', a: 'Generate a draft using this tool, then facilitate a class discussion where students review and vote on the final wording. Co-creation significantly increases student buy-in without starting from scratch.' },
            { q: 'Do classroom rules need to be different for middle vs. elementary school?', a: 'Yes. Elementary rules are more concrete ("Use walking feet"). Secondary rules are broader and more autonomy-focused ("Be responsible for your learning"). The tool adjusts language automatically when you specify grade level.' },
            { q: 'How do I introduce classroom rules at the start of the year?', a: 'The generated rules include implementation tips. Research supports spending 2–3 class periods explicitly teaching and practicing rules in the first week — not just posting them on the wall.' },
            { q: 'Can I use AI to create rules for a virtual or hybrid classroom?', a: 'Yes. Select "Digital / Technology-focused" as the environment. Generated rules will include technology use expectations and digital communication norms appropriate for your grade level.' },
            { q: 'Is the GogyAI classroom rules generator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'text-simplifier', name: 'Text Simplifier' }}
        next={{ slug: 'behavior-intervention-plan-writer', name: 'Behavior Intervention Plan Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
