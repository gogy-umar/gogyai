import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Cross-Curricular Activity Generator — Free AI Tool for Teachers',
  description: 'Generate engaging cross-curricular activities that connect two subjects. Free AI tool for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/cross-curricular-activity-generator' },
}

const FIELDS = [
  { name: 'primary_subject', label: 'Primary Subject', type: 'text', placeholder: 'e.g. English Language Arts' },
  { name: 'secondary_subject', label: 'Secondary Subject', type: 'text', placeholder: 'e.g. History' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 7' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. The American Civil War', full: true },
  { name: 'duration', label: 'Duration (minutes)', type: 'number', placeholder: '45', default: '45' },
]

const PROMPT = `Create a cross-curricular classroom activity that connects the following two subjects:
Primary Subject: {primary_subject}
Secondary Subject: {secondary_subject}
Grade Level: {grade}
Topic / Theme: {topic}
Duration: {duration} minutes

Structure the activity with:
1. Activity Title and Overview (2-3 sentences)
2. Connection Explanation — how the two subjects reinforce each other in this activity
3. Learning Objectives (one per subject, measurable)
4. Materials and Resources needed
5. Step-by-Step Instructions (with time allocations totaling {duration} minutes)
6. Discussion Questions that span both subjects
7. Assessment Idea — how to evaluate student learning in both subjects
8. Extension or Enrichment option for advanced learners
9. Differentiation Note for struggling learners or ELL students

Make the activity engaging, practical, and immediately usable in a real classroom.`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build a full lesson plan around your cross-curricular activity.' },
  { name: 'Unit Plan Creator', slug: 'unit-plan-creator', desc: 'Sequence cross-curricular activities into a complete multi-week unit.' },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: 'Generate discussion questions that span your two subjects.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Create a rubric to assess student performance across both subject areas.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Cross-Curricular Activity Generator — GogyAI',
    url: 'https://gogyai.com/cross-curricular-activity-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Cross-Curricular Activity Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/cross-curricular-activity-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Cross-Curricular Activity Generator: Connecting Subjects for Deeper Learning',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/cross-curricular-activity-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is a cross-curricular activity?', acceptedAnswer: { '@type': 'Answer', text: 'A cross-curricular activity intentionally connects content or skills from two or more subjects within a single task. For example, analyzing primary source documents in history while applying literacy skills, or graphing population data in math while studying a science topic. The connection is explicit and purposeful, not incidental.' } },
      { '@type': 'Question', name: 'Why are cross-curricular activities beneficial for students?', acceptedAnswer: { '@type': 'Answer', text: 'Cross-curricular activities help students transfer knowledge between contexts — one of the highest-level cognitive skills in Bloom\'s Taxonomy. They also help students see the relevance of school subjects by demonstrating how knowledge connects in the real world. Research consistently links cross-curricular learning to improved retention and engagement.' } },
      { '@type': 'Question', name: 'What subject combinations work best for cross-curricular activities?', acceptedAnswer: { '@type': 'Answer', text: 'Math and science pair naturally through data analysis. History and English through primary source analysis and argumentative writing. Art and any humanities subject through visual analysis. Music and math through rhythm and pattern. Science and creative writing through narrative lab reports. The most effective combinations share a natural methodological or thematic bridge.' } },
      { '@type': 'Question', name: 'How do I assess a cross-curricular activity?', acceptedAnswer: { '@type': 'Answer', text: 'Assess each subject dimension separately unless your school supports interdisciplinary grading. Create one rubric criterion for each subject skill being evaluated. The generator includes an assessment idea that addresses both subjects — you can expand this using the Rubric Builder tool.' } },
      { '@type': 'Question', name: 'Can cross-curricular activities be used for project-based learning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — project-based learning is one of the most natural contexts for cross-curricular work. Projects naturally draw on multiple subject areas, and planning them as cross-curricular from the start ensures both subjects are assessed and both teachers are involved in the design.' } },
      { '@type': 'Question', name: 'How long should a cross-curricular activity be?', acceptedAnswer: { '@type': 'Answer', text: 'A single session cross-curricular activity works well at 45-90 minutes. Extended cross-curricular projects can span multiple weeks. This tool generates activities at your specified duration — use the Unit Plan Creator for multi-session cross-curricular units.' } },
      { '@type': 'Question', name: 'Do I need to co-plan with a colleague for cross-curricular activities?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. Self-contained teachers can implement cross-curricular activities independently. For departmentalized settings, sharing the generated activity with your colleague in the secondary subject helps align timing and assessment. The activity output is designed to be shared easily.' } },
      { '@type': 'Question', name: 'Is the GogyAI cross-curricular activity generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function CrossCurricularActivityGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Cross-Curricular Activity Generator</h1>
        <p className="text-slate-600 mb-6">Create engaging activities that connect two subjects — with instructions, materials, and an assessment idea built in.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="cross-curricular-activity-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Cross-Curricular Activity Generator: Connecting Subjects for Deeper Learning</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains what cross-curricular activities are and how AI can help you design them quickly.</li>
            <li>Teachers planning integrated units, project-based learning, or team-taught courses will benefit most.</li>
            <li>An AI cross-curricular activity generator creates a complete activity — with objectives for each subject, instructions, materials, and assessment — from two subject inputs and a topic.</li>
            <li>Cross-curricular activities improve knowledge transfer and student engagement by showing how subjects connect in the real world.</li>
            <li>AI-generated activities are strong starting frameworks — review for curriculum alignment before use.</li>
            <li>No student information should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          The division of school into separate subject periods is an organizational convenience, not a reflection of how knowledge actually works. History informs literature. Math makes science precise. Art embeds history. When students encounter these connections intentionally — through a well-designed cross-curricular activity — their engagement and retention improve. The obstacle is always planning time. Designing an activity that genuinely honors two subject areas, with appropriate objectives, materials, and assessment for both, takes significantly more preparation than a single-subject lesson.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI cross-curricular activity generator compresses that design process — giving you a complete, structured activity that treats both subjects with rigor.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is a Cross-Curricular Activity Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A cross-curricular activity generator takes two subjects, a grade level, a topic, and a duration, and produces a complete integrated classroom activity. The output includes a purposeful connection between the two subjects — not a superficial combination, but an activity where both disciplines are genuinely engaged — along with learning objectives for each subject, step-by-step instructions, materials, discussion questions, and an assessment idea.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI identifies the natural methodological bridge between your two subjects and the topic. History and English Language Arts share primary source analysis. Math and science share data collection and graphing. These bridges are where cross-curricular activities are most powerful — the AI locates and builds through them.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Cross-Curricular Teaching Matters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on learning transfer consistently shows that students who encounter concepts in multiple contexts are better able to apply them in new situations. A student who analyzes rhetorical techniques in a history speech is more likely to use those techniques in their own persuasive writing than a student who studied rhetoric only in English class. The transfer happens because the learning is contextualized, not isolated.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Cross-curricular activities also address the persistent student question: &quot;Why do we have to learn this?&quot; When a math skill appears inside a genuine science investigation, or when writing skills appear inside a meaningful historical inquiry, the answer to that question becomes self-evident in the activity itself.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter your primary subject, secondary subject, grade level, topic or theme, and the duration available. The AI generates a complete activity with a title, an explicit connection explanation, measurable objectives for each subject, materials, timed step-by-step instructions, discussion questions, and an assessment idea. Extension and differentiation notes round out the output.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The connection explanation section is particularly useful for sharing the activity with a departmental colleague or administrator — it articulates the pedagogical rationale for why the two subjects belong together in this activity, which supports buy-in and collaborative planning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Cross-Curricular Activity Generator</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Chen teaches 7th-grade English Language Arts and wants to create an activity that connects her narrative writing unit with the history class her students attend simultaneously. Both classes are covering the Civil War period and she has 45 minutes for the activity.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Primary Subject:</strong> &quot;English Language Arts — narrative writing.&quot;</li>
          <li><strong>Secondary Subject:</strong> &quot;US History — Civil War.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 7.&quot;</li>
          <li><strong>Topic:</strong> &quot;Perspectives of soldiers and civilians during the American Civil War.&quot;</li>
          <li><strong>Duration:</strong> 45 minutes.</li>
          <li>She clicks <strong>Generate</strong> and receives a complete activity: students read a short primary source soldier&apos;s letter, analyze its historical context (history objective), then write a first-person narrative response from a civilian perspective using the same voice and era (ELA objective).</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          The output includes discussion questions that span both disciplines, a rubric assessment idea with criteria for historical accuracy and narrative craft, and a differentiation note for ELL students. Ms. Chen shares the activity with the history teacher, who uses it on the same day in his class — making it a genuine cross-departmental learning experience.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Choose subjects with a natural methodological bridge</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The best cross-curricular activities aren&apos;t artificial combinations — they find where two subjects genuinely overlap in method or content. If you choose subjects that share a natural connection (history + ELA, math + science, art + social studies), the AI output will be more coherent and the activity will feel integrated, not forced.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the topic to anchor both subjects</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A specific topic like &quot;the water cycle and technical writing&quot; produces a more useful activity than &quot;science and writing.&quot; The topic is the common ground where both subjects meet — make it concrete enough that the AI can find the connection point.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Cross-curricular activities generated by AI reflect general curriculum knowledge — they are not aligned to your specific school&apos;s curriculum map or pacing guide. If your school is at a different point in either subject than the AI assumes, the activity may need content adjustments. Always check that the activity fits where both classes actually are in their curricula.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool also generates single activities, not integrated unit plans. For a multi-week cross-curricular unit, use this tool to generate individual activity sessions and sequence them using the <Link href="/unit-plan-creator" className="text-brand-700 underline">Unit Plan Creator</Link>. For detailed daily lessons within the unit, the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> builds out each session with full objectives, activities, and assessment.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to use this tool. Inputs are subject, grade, topic, and duration — no identifying information. GogyAI stores no personal information and does not retain your inputs after the session. Find all free planning tools at <Link href="/" className="text-brand-700 underline">free AI tools library on GogyAI</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is a cross-curricular activity?', a: 'A cross-curricular activity intentionally connects content or skills from two or more subjects within a single task. The connection is explicit and purposeful — both subjects contribute meaningfully to the learning, not just one subject with a token reference to another.' },
            { q: 'Why are cross-curricular activities beneficial for students?', a: "Cross-curricular activities help students transfer knowledge between contexts — one of the highest-level cognitive skills. They also show students the relevance of school subjects by demonstrating how knowledge connects in the real world, improving both engagement and retention." },
            { q: 'What subject combinations work best?', a: 'Math and science pair through data analysis. History and English through primary source analysis and writing. Art and humanities through visual analysis. Music and math through rhythm and pattern. The most effective pairs share a natural methodological or thematic bridge.' },
            { q: 'How do I assess a cross-curricular activity?', a: <>Assess each subject dimension separately unless your school supports interdisciplinary grading. Create rubric criteria for each subject skill. The generator includes an assessment idea for both subjects — expand it using the <Link href="/rubric-builder" className="text-brand-700 underline">Rubric Builder</Link>.</> },
            { q: 'Can cross-curricular activities be used for project-based learning?', a: 'Yes — PBL is one of the most natural contexts for cross-curricular work. Projects naturally draw on multiple subject areas, and planning them as cross-curricular from the start ensures both subjects are genuinely assessed.' },
            { q: 'How long should a cross-curricular activity be?', a: <>A single session works well at 45–90 minutes. Extended cross-curricular projects can span multiple weeks. Use the <Link href="/unit-plan-creator" className="text-brand-700 underline">Unit Plan Creator</Link> for multi-session cross-curricular units.</> },
            { q: 'Do I need to co-plan with a colleague?', a: 'Not always. Self-contained teachers can implement cross-curricular activities independently. For departmentalized settings, sharing the output with your colleague in the secondary subject helps align timing and assessment.' },
            { q: 'Is the GogyAI cross-curricular activity generator free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'differentiated-instruction-planner', name: 'Differentiated Instruction Planner' }}
        next={{ slug: 'quiz-mcq-generator', name: 'Quiz & MCQ Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
