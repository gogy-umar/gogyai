import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Behavior Intervention Plan Writer — Free AI Tool for Teachers',
  description: 'Generate structured behavior intervention plans with antecedents, interventions, reinforcement strategies, and monitoring. Free AI BIP writer for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/behavior-intervention-plan-writer' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 4' },
  { name: 'behavior', label: 'Behavior Description', type: 'textarea', placeholder: 'Describe the specific behavior you are addressing (e.g., student frequently calls out during instruction without raising hand, disrupting lessons approximately 10–15 times per class)...', full: true },
  {
    name: 'frequency',
    label: 'Behavior Frequency',
    type: 'select',
    options: [
      { value: 'occasional', label: 'Occasional (a few times per week)' },
      { value: 'frequent', label: 'Frequent (daily)' },
      { value: 'constant', label: 'Constant (multiple times per class)' },
    ],
    default: 'frequent',
  },
  { name: 'triggers', label: 'Possible Triggers', type: 'text', placeholder: 'e.g. Unstructured time, transitions, difficult tasks, peer interactions', full: true },
  { name: 'strategies_tried', label: 'Strategies Already Tried', type: 'text', placeholder: 'e.g. Verbal reminders, proximity, seat change', full: true },
]

const PROMPT = `Create a structured Behavior Intervention Plan (BIP) for the following:
Grade Level: {grade}
Target Behavior: {behavior}
Frequency: {frequency}
Possible Triggers/Antecedents: {triggers}
Strategies Already Tried: {strategies_tried}

Structure the BIP with these sections:
1. Behavior Definition — specific, observable, measurable description of the target behavior
2. Antecedent Analysis — likely triggers and setting events based on the provided information
3. Function of Behavior — hypothesized purpose the behavior serves (seeking attention, escaping task, sensory, etc.)
4. Intervention Strategies — 3-5 specific, evidence-based proactive strategies to reduce the behavior
5. Replacement Behavior — the specific appropriate behavior to teach in place of the target behavior
6. Reinforcement Plan — how and when to reinforce the replacement behavior
7. Response Protocol — how adults should respond when the target behavior occurs
8. Monitoring Plan — how progress will be tracked (what to measure, how often, who is responsible)

Note: This is a planning framework to inform professional discussion. Final BIPs for students with IEPs must follow district procedures and involve the IEP team.`

const RELATED = [
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write SMART behavioral or social-emotional IEP goals to accompany the BIP.' },
  { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator', desc: 'Create clear classroom expectations that support positive behavior for all students.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Write encouraging, constructive feedback that supports the replacement behavior.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Communicate behavioral concerns and progress to parents professionally.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Behavior Intervention Plan Writer — GogyAI',
    url: 'https://gogyai.com/behavior-intervention-plan-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Behavior Intervention Plan Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/behavior-intervention-plan-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Behavior Intervention Plan Writer for Teachers: Structured BIPs as a Starting Framework',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/behavior-intervention-plan-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should a behavior intervention plan include?', acceptedAnswer: { '@type': 'Answer', text: 'An effective BIP includes a precise behavior definition, antecedent analysis (what triggers the behavior), a hypothesis about the behavior\'s function, proactive intervention strategies, a replacement behavior to teach, a reinforcement plan, a response protocol for when the behavior occurs, and a monitoring plan for tracking progress.' } },
      { '@type': 'Question', name: 'Can a teacher write a behavior intervention plan without a special education coordinator?', acceptedAnswer: { '@type': 'Answer', text: 'For informal classroom-level intervention, yes. General education teachers regularly develop informal behavioral support plans as part of their classroom management. For students with IEPs, a formal BIP requires the IEP team\'s involvement, including parents, specialists, and administration, and must follow district procedures.' } },
      { '@type': 'Question', name: 'What is the function of behavior in a BIP?', acceptedAnswer: { '@type': 'Answer', text: 'The function of behavior refers to the purpose the behavior serves for the student — typically attention-seeking, task avoidance, access to something desired, or sensory stimulation. Identifying function is critical because interventions must address WHY the behavior occurs, not just stop the behavior itself.' } },
      { '@type': 'Question', name: 'How is a BIP different from a classroom discipline plan?', acceptedAnswer: { '@type': 'Answer', text: 'A classroom discipline plan applies to all students and describes general consequences for rule violations. A BIP is individualized for one student and focuses on understanding and changing a specific behavior through proactive support, not just consequences. BIPs involve teaching replacement behaviors, not just responding to problematic ones.' } },
      { '@type': 'Question', name: 'Is an AI-generated BIP legally compliant for IEP purposes?', acceptedAnswer: { '@type': 'Answer', text: 'No. An AI-generated BIP is a planning framework — a starting point for professional discussion. Formal BIPs for students with IEPs must be developed through the IEP team process as required by IDEA, documented in district-approved formats, and signed by relevant stakeholders. Always involve your special education coordinator.' } },
      { '@type': 'Question', name: 'How do I track progress on a behavior intervention plan?', acceptedAnswer: { '@type': 'Answer', text: 'The monitoring plan section of the generated BIP addresses this specifically. Common methods include frequency counts (how many times the behavior occurred), interval recording (whether it occurred in a set time window), and teacher observation forms. Progress should be reviewed at least weekly and used to adjust the plan.' } },
      { '@type': 'Question', name: 'Is the GogyAI behavior intervention plan writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function BehaviorInterventionPlanWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Behavior Intervention Plan Writer</h1>
        <p className="text-slate-600 mb-6">Generate a structured BIP framework with antecedents, interventions, reinforcement strategies, and a monitoring plan.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="behavior-intervention-plan-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Behavior Intervention Plan Writer for Teachers: Structured BIPs as a Starting Framework</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI BIP writer to generate a structured behavior intervention framework for classroom use.</li>
            <li>General education teachers and special education teachers developing initial behavioral support plans will benefit most.</li>
            <li>The tool generates a BIP with behavior definition, antecedent analysis, function hypothesis, intervention strategies, replacement behavior, reinforcement plan, and monitoring approach.</li>
            <li>Use the output as a professional starting framework — formal BIPs for students with IEPs require the full IEP team process regardless of how the draft is created.</li>
            <li>Describe behaviors specifically and objectively — vague behavior descriptions produce generic, less useful plans.</li>
            <li>Never include real student names or identifying information in your inputs.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing a behavior intervention plan from scratch — organizing antecedent analysis, function hypothesis, intervention strategies, replacement behaviors, and a monitoring system — takes experienced practitioners 60–90 minutes even when they know the student well. An AI BIP writer structures that framework in seconds, giving teachers and support teams a professional starting point to refine rather than a blank page to fill.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what an effective BIP includes, how to use the tool effectively, and what professional processes must remain in place regardless of how any draft is created.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is a Behavior Intervention Plan?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A behavior intervention plan (BIP) is a structured, individualized document that identifies a specific student behavior, hypothesizes its function, and outlines proactive strategies, teaching of a replacement behavior, and a system for monitoring progress. It is not a list of consequences — it is a plan for changing behavior by teaching new skills and restructuring the environment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          BIPs emerged from applied behavior analysis (ABA) principles and are now standard practice in both special education (where they often accompany IEPs under IDEA) and general education classroom management at the Tier 2 and Tier 3 levels of a PBIS framework.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why BIP Writers Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Behavior intervention planning is specialized work. Most general education teachers receive limited training in functional behavior assessment and BIP writing. When a student's behavior is significantly impacting learning — for them or for classmates — teachers need a structured framework quickly, often while managing other students and competing demands.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI BIP writers provide that framework: the structure of a professionally sound BIP, organized in a way that guides thinking about function, replacement behaviors, and monitoring — all of which are areas general education teachers may not immediately think to include in an informal support plan.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You describe the specific behavior (as objectively and specifically as possible), its frequency, possible triggers or antecedents, and strategies already tried. The AI generates a structured BIP with eight sections: behavior definition, antecedent analysis, function hypothesis, intervention strategies, replacement behavior, reinforcement plan, response protocol, and monitoring approach.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The quality of the output depends heavily on the specificity of your behavior description. A behavior described as "disruptive" will produce a generic BIP. A behavior described as "student leaves their seat without permission during independent work periods, approximately 8–10 times per 45-minute class, occurring most frequently in the first and last 10 minutes of class" produces a targeted, useful framework.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the BIP Writer in Your School</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A 4th-grade teacher has a student who calls out frequently during whole-class instruction — approximately 10–15 times per lesson, often correctly answering questions but not waiting to be called on. Previous strategies (verbal reminders, private conversation) haven't produced lasting change. She wants to draft a framework to bring to her support team meeting.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>She enters Grade 4.</li>
          <li>Behavior: "Student calls out answers and comments during whole-class instruction without raising hand, approximately 10–15 times per 45-minute lesson. Answers are often academically correct. Behavior escalates when material is review-level or when the student finishes tasks early."</li>
          <li>Frequency: Constant (multiple times per class).</li>
          <li>Triggers: "Review content (material feels too easy), early task completion, competitive classroom activities."</li>
          <li>Strategies Tried: "Verbal reminders, non-verbal signals, private conversations, seat proximity."</li>
          <li>She generates the BIP and uses the function hypothesis section (attention and stimulation-seeking) to reframe her approach in the support team meeting.</li>
          <li>The team refines the replacement behavior section and agrees on a monitoring protocol — the AI's draft accelerates the meeting significantly.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Describe the behavior in observable, measurable terms</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Aggressive" is not observable. "Student pushes peers when transitioning to lunch, approximately 3–4 times per week, most often occurring in the hallway when the class is crowded" is observable and measurable. The more behavioral and specific your description, the more targeted the BIP framework.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Include what you've already tried</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The strategies-already-tried field is important. It prevents the AI from suggesting interventions you've already attempted and instead generates alternatives. The more specific you are about what hasn't worked, the more the output pushes toward a different approach.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated BIPs are planning frameworks, not formal behavioral assessments. A Functional Behavior Assessment (FBA) — which involves direct observation, data collection, and interview protocols — is required before any formal BIP for a student with an IEP. The AI cannot conduct an FBA; it can only structure intervention ideas based on the information you provide. For students who need formally documented behavioral goals as part of an IEP, the <Link href="/iep-goal-writer" className="text-brand-700 underline">IEP Goal Writer</Link> generates SMART behavior goals with short-term objectives and progress monitoring guidance.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For students with significant behavioral challenges, including those with emotional or behavioral disabilities, the BIP process must involve specialists. Use the AI output as a preliminary thinking tool, not as a replacement for the full multidisciplinary process. For class-wide behavioral expectations that support all students, the <Link href="/classroom-rules-generator" className="text-brand-700 underline">Classroom Rules Generator</Link> creates positively-framed rules with rationale and implementation strategies.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Never include real student names, IDs, disability diagnoses, or other identifying information in your inputs. Describe behaviors generically: "a 4th-grade student" rather than a name. GogyAI stores no personal information — inputs are used solely to generate the BIP framework. Find all free special education and classroom management tools at <Link href="/" className="text-brand-700 underline">GogyAI&apos;s full collection of free tools</Link>.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA requires that student behavioral records — including formal BIPs — be treated as education records with all associated privacy protections. Any AI-generated draft must be kept within your school's document management system and shared only with authorized personnel.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What should a behavior intervention plan include?', a: 'An effective BIP includes a behavior definition, antecedent analysis, function hypothesis, proactive intervention strategies, a replacement behavior to teach, a reinforcement plan, a response protocol for when the behavior occurs, and a monitoring system for tracking progress.' },
            { q: 'Can a teacher write a BIP without a special education coordinator?', a: 'For informal classroom-level intervention, yes. For students with IEPs, a formal BIP requires the IEP team — including parents, specialists, and administration. Always involve your special ed coordinator for students with behavioral IEP goals.' },
            { q: 'What is the function of behavior in a BIP?', a: 'The function is the purpose the behavior serves — typically attention-seeking, task avoidance, access to something desired, or sensory stimulation. Interventions must address WHY the behavior occurs to be effective, not just stop the behavior.' },
            { q: 'How is a BIP different from a classroom discipline plan?', a: 'A discipline plan applies to all students and describes consequences. A BIP is individualized and focuses on teaching replacement behaviors through proactive support — not just responding to problematic behaviors with consequences.' },
            { q: 'Is an AI-generated BIP legally compliant for IEP purposes?', a: 'No. An AI BIP is a planning framework. Formal BIPs for students with IEPs must go through the full IEP team process as required by IDEA, documented in district-approved formats, and signed by relevant stakeholders.' },
            { q: 'How do I track progress on a behavior intervention plan?', a: 'The monitoring section of the generated BIP addresses this. Common methods include frequency counts, interval recording, and teacher observation forms. Review progress at least weekly and adjust the plan based on data.' },
            { q: 'Is the GogyAI BIP writer free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'classroom-rules-generator', name: 'Classroom Rules Generator' }}
        next={{ slug: 'seating-chart-suggestion-tool', name: 'Seating Chart Suggestion Tool' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
