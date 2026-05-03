import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Differentiated Instruction Planner — Free AI Tool for Teachers',
  description: 'Generate differentiated activities for advanced, struggling, ELL, and mixed learners. Free AI differentiated instruction planner for K-12 teachers.',
  alternates: { canonical: 'https://gogyai.com/differentiated-instruction-planner' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 5th Grade Math' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 5' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. Multiplying fractions', full: true },
  {
    name: 'student_need',
    label: 'Student Need',
    type: 'select',
    options: [
      { value: 'advanced', label: 'Advanced / Gifted' },
      { value: 'struggling', label: 'Struggling / Below Grade Level' },
      { value: 'ell', label: 'English Language Learners (ELL)' },
      { value: 'mixed', label: 'Mixed (all groups)' },
    ],
    default: 'mixed',
  },
  { name: 'accommodation_type', label: 'Accommodation Type', type: 'text', placeholder: 'e.g. extended time, visual supports, tiered tasks' },
]

const PROMPT = `Create a differentiated instruction plan for the following lesson:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Student Need Focus: {student_need}
Accommodation Type: {accommodation_type}

For each learner group relevant to the student need selected, provide:
1. A specific differentiated activity tailored to that group's needs
2. The instructional rationale explaining why this approach supports the group
3. Materials or resources needed
4. How the activity connects to the core learning objective
5. A differentiated assessment or check-for-understanding

If "mixed" is selected, provide differentiated activities for all four groups: advanced, struggling, ELL, and students with accommodations.

Make each activity immediately usable in the classroom with clear instructions for the teacher.`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build a complete lesson plan to pair with your differentiated activities.' },
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write SMART IEP goals for students with specific learning needs.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Create measurable objectives that anchor your differentiated instruction.' },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Generate tiered worksheets to support differentiated practice.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Differentiated Instruction Planner — GogyAI',
    url: 'https://gogyai.com/differentiated-instruction-planner',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Differentiated Instruction Planner',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/differentiated-instruction-planner',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Differentiated Instruction Planner: Supporting Every Learner in the Classroom',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/differentiated-instruction-planner',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is differentiated instruction?', acceptedAnswer: { '@type': 'Answer', text: 'Differentiated instruction is an approach where teachers tailor learning activities, materials, and assessments to meet the diverse needs of students in the same classroom. It adjusts content, process, product, and environment based on student readiness, interest, and learning profile.' } },
      { '@type': 'Question', name: 'How does an AI differentiated instruction planner work?', acceptedAnswer: { '@type': 'Answer', text: 'You enter your subject, grade, topic, and student need focus. The AI generates specific differentiated activities for each learner group — advanced, struggling, ELL, or mixed — with instructional rationale, materials, and a formative check built in.' } },
      { '@type': 'Question', name: 'What are the four main groups in differentiated instruction?', acceptedAnswer: { '@type': 'Answer', text: 'The four groups commonly addressed are: advanced or gifted learners who need extension and enrichment; struggling or below-grade-level learners who need scaffolding; English Language Learners who need language support; and students with IEPs or 504s who require specific accommodations.' } },
      { '@type': 'Question', name: 'Is differentiated instruction the same as individualized instruction?', acceptedAnswer: { '@type': 'Answer', text: 'No. Differentiated instruction groups students by need and adjusts activities for clusters of learners. Individualized instruction tailors everything to a single student, as in an IEP. Differentiation is a practical classroom strategy; individualization is a legal and therapeutic framework.' } },
      { '@type': 'Question', name: 'Can I use this tool to plan for ELL students specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "English Language Learners (ELL)" as the student need and specify accommodation types such as visual supports, sentence frames, or bilingual glossaries. The AI generates activities with embedded language scaffolds appropriate for ELL learners.' } },
      { '@type': 'Question', name: 'How do I differentiate without creating entirely separate lessons?', acceptedAnswer: { '@type': 'Answer', text: 'The most practical approach is tiered tasks — the same core activity with varying levels of complexity or support. This tool generates tiered versions of your topic activities so all students work toward the same objective through appropriately challenging pathways.' } },
      { '@type': 'Question', name: 'Does differentiated instruction work for all subjects?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The principles apply across math, literacy, science, social studies, arts, and electives. The accommodation types and scaffolding strategies differ by subject, which is why specifying your subject and accommodation type in the form produces more relevant outputs.' } },
      { '@type': 'Question', name: 'Is the GogyAI differentiated instruction planner free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function DifferentiatedInstructionPlannerPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Differentiated Instruction Planner</h1>
        <p className="text-slate-500 mb-6">Generate targeted activities for every learner in your classroom — advanced, struggling, ELL, and mixed groups.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="differentiated-instruction-planner" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Differentiated Instruction Planner: Supporting Every Learner</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers what differentiated instruction is and how AI can help you plan it efficiently.</li>
            <li>K-12 teachers managing mixed-ability classrooms, ELL students, and learners with accommodations will benefit most.</li>
            <li>An AI differentiated instruction planner generates specific activities for each learner group with rationale, materials, and built-in checks.</li>
            <li>Differentiation is one of the most time-intensive parts of lesson planning — this tool compresses that drafting time significantly.</li>
            <li>AI outputs are strong starting frameworks; you must layer in your specific students&apos; IEP goals, language levels, and classroom dynamics.</li>
            <li>Never enter student names or identifying information into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Differentiated instruction is one of the most widely endorsed — and most exhausting — practices in education. The research behind it is solid: students learn better when instruction matches their readiness, interests, and learning profile. The problem isn&apos;t the theory; it&apos;s the planning time. Creating separate activity tiers for four learner groups while still preparing a coherent lesson can double preparation time. An AI differentiated instruction planner cuts that burden without cutting the practice.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide explains how differentiated instruction planning works, why it matters, and how to use AI to make it sustainable across a full teaching week.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is a Differentiated Instruction Planner?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A differentiated instruction planner is a tool that generates learner-specific activities from a single set of lesson inputs. Rather than planning one activity and hoping it works for everyone, you get targeted tasks for advanced learners, scaffolded tasks for struggling learners, language-supported tasks for ELL students, and accommodation-ready tasks for students with IEPs or 504s.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The AI version takes your subject, grade, topic, and student need focus and produces a complete differentiated activity set with instructional rationale — explaining not just what to do, but why each adaptation supports that specific learner group. That rationale is often the part most time-consuming to think through independently.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Differentiated Instruction Planning Matters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The average K-12 classroom contains students reading anywhere from two grade levels below to two grade levels above. In many schools, students with IEPs and ELL students are fully included in general education classrooms. A single lesson pitched at grade level serves approximately the middle of that range — and under-serves everyone else.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Differentiated instruction is the professional response to that reality. It doesn&apos;t mean writing four completely separate lessons — it means adjusting the complexity, scaffolding, and support while keeping all students working toward the same core objective. Done well, it closes achievement gaps. Done poorly, it creates a tracking system within the room. Done not at all, it leaves a significant portion of any classroom either bored or lost.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The planning burden has always been the practical obstacle. Research from the Gates Foundation and the Rand Corporation consistently shows that teachers cite time as the number one barrier to implementing differentiation. AI planning tools address exactly this constraint.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter your subject, grade level, topic, student need focus, and accommodation type. For mixed classrooms, select the &quot;Mixed (all groups)&quot; option and the AI generates activities for all four groups simultaneously — advanced, struggling, ELL, and students with accommodations. For targeted planning, select a specific group to get a more detailed set of activities for that cohort.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Each activity includes the instructional rationale — the pedagogical justification for why that particular adaptation supports that learner group. This makes the output immediately defensible in a lesson review or IEP meeting, not just useful in the moment.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The accommodation type field is flexible. You can enter specific accommodations (extended time, graphic organizers, sentence frames) or broader strategies (visual supports, movement breaks, tiered questioning). The AI uses your input to shape the activity design accordingly.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Differentiated Instruction Planner</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Okonkwo teaches 5th-grade math and has a class that includes four students reading the IEP, six ELL students at intermediate proficiency, three students who have already mastered the current unit concepts, and a broad middle group. He&apos;s teaching multiplying fractions and needs differentiated tasks for the same 45-minute period.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Subject:</strong> &quot;5th Grade Mathematics.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 5.&quot;</li>
          <li><strong>Topic:</strong> &quot;Multiplying fractions by whole numbers and mixed numbers.&quot;</li>
          <li><strong>Student Need:</strong> Mixed (all groups).</li>
          <li><strong>Accommodation Type:</strong> &quot;Visual models, sentence frames for ELL, tiered complexity, extended time.&quot;</li>
          <li>He clicks <strong>Generate</strong> and receives four sets of activities — one per group — each with rationale, materials, and a check-for-understanding question.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          The advanced group receives a real-world problem set that extends to multiplying fractions in recipe scaling. The struggling group receives a visual number line activity with step-by-step anchor charts. The ELL group receives a bilingual glossary and sentence frame cards. The IEP accommodation activity includes a graphic organizer with partially completed steps. Mr. Okonkwo adjusts the advanced extension to use a cooking context familiar to his students, prints the visual supports, and has all four versions ready in 12 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about accommodation types</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Entering &quot;visual supports and reduced task complexity&quot; produces more targeted activities than leaving the field blank or entering &quot;accommodations.&quot; The more you tell the AI about what specific supports your students need, the more classroom-ready the output.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use topic specificity to anchor all groups to the same objective</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          All differentiated activities should connect to the same core learning objective. Enter a topic narrow enough that all groups are working on the same concept — just at different entry points. &quot;Multiplying fractions by whole numbers — first lesson&quot; is more useful than &quot;fractions&quot; for generating coherent differentiation.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Run separate generations for depth</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          If one of your groups needs particular attention — say, your ELL students — run a second generation with ELL selected as the specific focus. You&apos;ll get a more detailed and varied set of language scaffolds than the mixed output provides for that one group.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This tool does not know your specific students&apos; IEP goals, language proficiency levels, or documented learning disabilities. The activities it generates are designed for typical learner profiles within each group — not individualized to a specific child. For students with IEPs, the generated activities are a starting framework that must be reviewed against each student&apos;s specific goals and legal mandates. For formally documented SMART goals tied to a student&apos;s present performance level, use the <Link href="/iep-goal-writer" className="text-brand-700 hover:underline">IEP Goal Writer</Link>.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool also does not replace the professional judgment of a special education teacher or an ELL specialist. Use those colleagues as reviewers when differentiated activities will be used in formal intervention settings. AI supports planning; it does not replace professional expertise. To build the broader lesson that frames these differentiated activities, the <Link href="/lesson-plan-generator" className="text-brand-700 hover:underline">Lesson Plan Generator</Link> provides a complete lesson structure you can embed the tiered tasks within.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter student names, IDs, diagnoses, or any personally identifying information into this tool. FERPA protections apply to student education records, and this tool is not a student records system. Accommodation types can be entered generically (e.g., &quot;extended time&quot;) without identifying which specific student holds that accommodation.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          GogyAI stores no personal information. Inputs are used only to generate your plan during the session and are not retained afterward. Browse <Link href="/" className="text-brand-700 hover:underline">GogyAI&apos;s complete teacher toolkit</Link> for the full range of planning, assessment, and special education support tools available free to educators.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What is differentiated instruction?', a: 'Differentiated instruction tailors learning activities, materials, and assessments to meet the diverse needs of students in the same classroom. It adjusts content, process, product, and environment based on student readiness, interest, and learning profile.' },
            { q: 'How does an AI differentiated instruction planner work?', a: 'Enter your subject, grade, topic, and student need focus. The AI generates specific activities for each learner group — advanced, struggling, ELL, or all groups — with instructional rationale, required materials, and a formative check for understanding.' },
            { q: 'What are the four main groups in differentiated instruction?', a: 'Advanced or gifted learners who need extension; struggling or below-grade-level learners who need scaffolding; English Language Learners who need language support; and students with IEPs or 504s who require documented accommodations.' },
            { q: 'Is differentiated instruction the same as individualized instruction?', a: 'No. Differentiated instruction groups students by need and adjusts activities for cohorts. Individualized instruction tailors everything to a single student, as in an IEP. Differentiation is a classroom strategy; individualization is a legal and therapeutic framework.' },
            { q: 'Can I use this tool for ELL students specifically?', a: 'Yes. Select "English Language Learners (ELL)" and specify accommodation types like visual supports or sentence frames. The AI generates activities with embedded language scaffolds for ELL learners.' },
            { q: 'How do I differentiate without creating entirely separate lessons?', a: 'Use tiered tasks — the same core activity with varying complexity or support levels. This tool generates tiered versions so all students work toward the same objective through appropriately challenging pathways.' },
            { q: 'Does differentiated instruction work for all subjects?', a: 'Yes. The principles apply across all subjects. Scaffolding strategies differ by subject, which is why specifying your subject and accommodation type in the form produces more relevant outputs.' },
            { q: 'Is the GogyAI differentiated instruction planner free?', a: 'Yes, completely free. No account or subscription required.' },
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
              <p className="text-sm text-slate-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ToolNav
        prev={{ slug: 'learning-objectives-writer', name: 'Learning Objectives Writer' }}
        next={{ slug: 'cross-curricular-activity-generator', name: 'Cross-Curricular Activity Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
