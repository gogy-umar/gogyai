import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Seating Chart Suggestion Tool — Free AI Tool for Teachers',
  description: 'Get strategic seating arrangement recommendations with rationale and tips. Free AI seating chart suggestion tool for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/seating-chart-suggestion-tool' },
}

const FIELDS = [
  { name: 'num_students', label: 'Number of Students', type: 'number', placeholder: '28', default: '28' },
  {
    name: 'layout',
    label: 'Seating Layout',
    type: 'select',
    options: [
      { value: 'rows', label: 'Rows (traditional)' },
      { value: 'groups', label: 'Groups / Clusters (4-6 desks)' },
      { value: 'U-shape', label: 'U-Shape / Horseshoe' },
      { value: 'flexible', label: 'Flexible (mixed areas)' },
    ],
    default: 'rows',
  },
  { name: 'considerations', label: 'Special Considerations', type: 'textarea', placeholder: 'e.g. 2 students need front-row seating (vision), 1 student on the autism spectrum needs quiet area, 3 pairs of students who distract each other, 1 student with hearing aids (left ear)...', full: true },
  {
    name: 'learning_focus',
    label: 'Primary Learning Focus',
    type: 'select',
    options: [
      { value: 'direct instruction', label: 'Direct Instruction / Lecture' },
      { value: 'collaborative learning', label: 'Collaborative / Group Work' },
      { value: 'independent work', label: 'Independent Work / Testing' },
      { value: 'discussion', label: 'Discussion / Debate' },
    ],
    default: 'direct instruction',
  },
]

const PROMPT = `Provide strategic seating arrangement recommendations for the following classroom:
Number of Students: {num_students}
Layout: {layout}
Special Considerations: {considerations}
Primary Learning Focus: {learning_focus}

Provide:
1. Strategic Arrangement Recommendations — specific guidance for how to organize students within the {layout} layout, addressing all special considerations listed
2. Priority Seating Zones — which zones or positions should receive specific student types and why (e.g., students needing more support near the teacher, students who distract each other separated)
3. Rationale — explain the reasoning behind key recommendations, grounded in classroom management and learning principles
4. Implementation Tips — 3-5 practical tips for introducing and adjusting the seating arrangement with students
5. Adjustment Triggers — specific signs that the seating arrangement needs to be revisited

Note: Provide strategy and rationale — the teacher applies this to their specific class and students.`

const RELATED = [
  { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator', desc: 'Create classroom expectations that complement your seating arrangement.' },
  { name: 'Student Interest Survey Creator', slug: 'student-interest-survey-creator', desc: 'Learn student preferences that can inform collaborative grouping decisions.' },
  { name: 'Behavior Intervention Plan Writer', slug: 'behavior-intervention-plan-writer', desc: 'Create support plans for students who need specialized seating considerations.' },
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Plan instruction that works with your seating groups and arrangement.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Seating Chart Suggestion Tool — GogyAI',
    url: 'https://gogyai.com/seating-chart-suggestion-tool',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Seating Chart Suggestion Tool',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/seating-chart-suggestion-tool',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Seating Chart Suggestion Tool: Strategic Arrangements for Better Learning',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/seating-chart-suggestion-tool',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the best seating arrangement for classroom learning?', acceptedAnswer: { '@type': 'Answer', text: 'No single arrangement works best for every situation. Rows work well for direct instruction and independent work. Groups support collaborative learning. U-shape facilitates whole-class discussion. Flexible arrangements allow multiple activities simultaneously. The best arrangement matches your primary instructional mode.' } },
      { '@type': 'Question', name: 'How often should teachers change the seating chart?', acceptedAnswer: { '@type': 'Answer', text: 'Most teachers benefit from changing seating every 4–6 weeks. This prevents social patterns from calcifying, gives students experience working with different peers, and lets you respond to behavior and learning patterns that emerge. Start of each unit or marking period is a natural trigger.' } },
      { '@type': 'Question', name: 'How do I seat students with special needs?', acceptedAnswer: { '@type': 'Answer', text: 'Include specific accommodations in the special considerations field. Students with vision needs near the board, hearing needs near the teacher or away from noise sources, sensory sensitivities in quieter zones, and students who need proximity for behavioral support — all of these can be addressed in the generated recommendations.' } },
      { '@type': 'Question', name: 'Should students choose their own seats?', acceptedAnswer: { '@type': 'Answer', text: 'Student choice in seating can build autonomy and ownership. However, strategic teacher-assigned seating consistently produces better academic and behavioral outcomes, particularly at elementary and middle school levels. A middle-ground approach: assign strategic zones and allow student choice within those zones.' } },
      { '@type': 'Question', name: 'How do I handle students who distract each other in a seating chart?', acceptedAnswer: { '@type': 'Answer', text: 'List the problematic pairings in the special considerations field. The recommendations will address separation strategies. For group arrangements, the tool will suggest physical distance between specific students without requiring you to specify their names — use descriptors like "students A and B who cannot work productively together."' } },
      { '@type': 'Question', name: 'What seating arrangement is best for discussions and Socratic seminars?', acceptedAnswer: { '@type': 'Answer', text: 'U-shape and circle arrangements are best for discussion-based instruction — every student can see every other student, which is critical for peer-to-peer dialogue. For Socratic seminars, a concentric circle (inner fishbowl + outer observers) works well. Select "Discussion / Debate" as the learning focus for recommendations specific to this mode.' } },
      { '@type': 'Question', name: 'Is the GogyAI seating chart suggestion tool free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function SeatingChartSuggestionToolPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Seating Chart Suggestion Tool</h1>
        <p className="text-slate-600 mb-6">Get strategic seating arrangement recommendations with rationale, implementation tips, and adjustment guidance.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="seating-chart-suggestion-tool" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Seating Chart Suggestion Tool: Strategic Arrangements for Better Learning</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI seating chart suggestion tool to get strategic seating recommendations based on your class size, layout, and student considerations.</li>
            <li>Elementary and secondary teachers managing complex classroom environments — including students with accommodation needs — will benefit most.</li>
            <li>The tool provides seating strategy recommendations, zone priorities, rationale, and implementation tips — not a literal student-by-student chart.</li>
            <li>Effective seating charts reflect instructional goals, behavior management needs, and student accommodation requirements simultaneously.</li>
            <li>Change seating every 4–6 weeks to prevent social calcification and respond to emerging learning patterns.</li>
            <li>Do not enter real student names — describe needs in general terms (e.g., "one student who needs front-row seating").</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Where students sit shapes everything that happens in your classroom — who they talk to, how much of the board they can see, whether disruptive pairings form, and how easily you can reach the students who need proximity support. Seating is not a logistical detail; it is a pedagogical decision. An AI seating chart suggestion tool helps you make that decision strategically.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers the principles behind effective seating arrangements, how to use the tool to address complex classroom situations, and when to revisit and adjust your setup.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Seating Chart Suggestion Tool?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI seating chart suggestion tool generates strategic recommendations for how to organize your classroom — which students should sit where based on instructional goals, behavioral considerations, and accommodation needs — along with the rationale behind each recommendation. It doesn't produce a printable chart with names in boxes; it produces the strategic thinking that should inform how you place those names.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The distinction matters. The AI has no knowledge of your specific students. What it provides is a principled framework — grounded in classroom management research — that you apply with your knowledge of your class.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Seating Arrangement Matters for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research consistently shows that seating arrangement affects student engagement, on-task behavior, and academic outcomes. Students seated in rows during direct instruction show higher on-task rates. Students in groups during collaborative learning produce better social learning outcomes. Students seated near teachers who need proximity support show reduced behavioral incidents. These aren't small effects — they're documented, replicable findings.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For teachers managing 28–32 students with varying needs — accommodation requirements, behavioral considerations, social dynamics — making a seating decision that optimizes for all of these simultaneously is genuinely complex. An AI tool structures that complexity into a principled framework.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter the number of students, the layout type, special considerations for specific students (described generically, not by name), and the primary learning focus. The AI generates seating zone priorities, specific arrangement strategies, rationale for key decisions, implementation tips, and signals that indicate the arrangement needs adjustment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The special considerations field drives the most useful output. The more specifically you describe the needs — hearing accommodations, behavioral separation requirements, vision needs, students who work well together versus pairs to separate — the more targeted the recommendations.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Seating Chart Tool in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Patel has 30 students in a 7th-grade science class she's rearranging for the new semester. She runs a mix of direct instruction and lab work. She has three students who need front seating for vision or hearing, one student who escalates significantly when sitting near two specific peers, and a general goal of maximizing engagement during her whole-class portions.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Students: 30.</li>
          <li>Layout: Groups (for lab work compatibility).</li>
          <li>Considerations: "3 students need front seating (2 vision, 1 hearing aid on right side). 1 student needs to be separated from 2 specific peers — they escalate when near each other. 2 students work well together and benefit from being paired. Room has lab station along the back wall."</li>
          <li>Learning Focus: Collaborative Learning.</li>
          <li>She generates the recommendations and applies the zone priorities to her actual class list.</li>
          <li>The framework gives her the rationale she needs to explain her seating decisions to students who ask why they're placed where they are.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Describe needs specifically without using student names</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Use descriptions like "one student who needs front-left seating for hearing (left ear)" or "two students who cannot productively work near each other" — specific enough to drive targeted recommendations, but without identifying information. The AI works with needs, not identities.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Match layout to your most frequent instructional mode</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          If you lecture 60% of the time, don't set up groups — the students in the back corner of each group will check out. Choose the layout that fits how you spend most instructional time, then adjust temporarily for activities that need a different configuration.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool cannot produce a literal seating chart with student names placed in specific desks. It provides strategic frameworks that the teacher applies with their knowledge of specific students. For a printable chart with names, use the recommendations to inform a seating tool like Google Sheets, Canva, or a dedicated classroom layout app. To collect data about student preferences and learning styles before finalizing seating, the <Link href="/student-interest-survey-creator" className="text-brand-700 underline">Student Interest Survey Creator</Link> generates surveys that surface how students prefer to learn and work.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Seating recommendations cannot account for social dynamics, personality conflicts, or emergent group chemistry that only appear over time. The adjustment triggers section of the output helps identify when a change is needed — but your ongoing observation is the most important signal. For behavioral expectations that govern how students interact within their groups, the <Link href="/classroom-rules-generator" className="text-brand-700 underline">Classroom Rules Generator</Link> creates environment-specific rules with implementation guidance.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter student names, IDs, disability diagnoses, or other identifying information. Describe accommodation needs in general terms. GogyAI stores no personal information — inputs are used solely to generate seating recommendations.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Accommodation requirements specified in a student's IEP or 504 plan — including seating accommodations — are education records protected by FERPA. The descriptions you enter here should reflect those needs in general terms, not copy specific record language. Explore <Link href="/" className="text-brand-700 underline">all 30 free AI teaching tools on GogyAI</Link> for the full set of classroom management, planning, and communication tools.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is the best seating arrangement for classroom learning?', a: 'No single arrangement works best in all situations. Rows work for direct instruction. Groups support collaborative learning. U-shape facilitates discussion. The best arrangement matches your primary instructional mode.' },
            { q: 'How often should teachers change the seating chart?', a: 'Every 4–6 weeks is a useful default. This prevents social patterns from calcifying and lets you respond to behavior and learning patterns. Start of each unit or marking period is a natural trigger for review.' },
            { q: 'How do I seat students with special needs?', a: 'Include specific accommodation needs in the special considerations field — vision, hearing, sensory, behavioral proximity requirements. The recommendations address each consideration with specific zone and position guidance.' },
            { q: 'Should students choose their own seats?', a: 'Student choice builds autonomy but strategic teacher-assigned seating produces better academic and behavioral outcomes at most levels. A middle-ground: assign strategic zones and allow choice within those zones.' },
            { q: 'How do I handle students who distract each other?', a: 'List the problematic pairings in special considerations (without names). The recommendations will address separation strategies appropriate to your layout type.' },
            { q: 'What arrangement is best for discussions and Socratic seminars?', a: 'U-shape and circle arrangements work best — all students can see each other. For Socratic seminars, a concentric circle fishbowl setup is effective. Select "Discussion / Debate" as the learning focus for relevant recommendations.' },
            { q: 'Is the GogyAI seating chart suggestion tool free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'behavior-intervention-plan-writer', name: 'Behavior Intervention Plan Writer' }}
        next={{ slug: 'student-interest-survey-creator', name: 'Student Interest Survey Creator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
