import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Science Experiment Idea Generator — Free AI Tool for Teachers',
  description: 'Generate 3 science experiment ideas with materials, procedures, and expected results for any grade and topic. Free AI science experiment generator for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/science-experiment-idea-generator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 6' },
  { name: 'topic', label: 'Science Topic or Unit', type: 'text', placeholder: 'e.g. States of matter, density, chemical reactions', full: true },
  { name: 'materials', label: 'Available Materials', type: 'textarea', placeholder: 'e.g. Beakers, water, vinegar, baking soda, food coloring, balloons, rulers, graph paper...', full: true },
  { name: 'time', label: 'Time Available', type: 'text', placeholder: 'e.g. 45 minutes' },
  {
    name: 'safety',
    label: 'Safety Level',
    type: 'select',
    options: [
      { value: 'classroom-safe', label: 'Classroom-safe (no lab required)' },
      { value: 'standard lab', label: 'Standard lab setup' },
      { value: 'outdoor', label: 'Outdoor / field-based' },
    ],
    default: 'classroom-safe',
  },
]

const PROMPT = `Generate 3 science experiment ideas for the following:
Grade Level: {grade}
Science Topic: {topic}
Available Materials: {materials}
Time Available: {time}
Safety Level: {safety}

For each experiment, provide:
1. Experiment Title
2. Learning Objective — what scientific concept will students observe or test?
3. Materials List — using the available materials listed (substitute as needed, flag any additional needed)
4. Procedure — step-by-step instructions (5-8 clear steps)
5. Hypothesis Prompt — a question students should answer before starting ("Before you begin, predict: ___")
6. Expected Results — what students should observe and why (the science behind it)
7. Discussion Questions — 2-3 questions to deepen understanding after the experiment
8. Safety Notes — any precautions specific to this experiment

Order experiments from simplest to most complex. All experiments must be appropriate for {grade} students at {safety} safety level within {time}.`

const RELATED = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Build a complete lesson plan around your chosen science experiment.' },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Create a lab worksheet with hypothesis, observations, and analysis questions.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write precise objectives for the scientific skills the experiment develops.' },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: 'Generate deeper discussion questions for post-experiment analysis.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Science Experiment Idea Generator — GogyAI',
    url: 'https://gogyai.com/science-experiment-idea-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Science Experiment Idea Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/science-experiment-idea-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Science Experiment Idea Generator: Three Lab-Ready Ideas for Any Topic',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/science-experiment-idea-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I find science experiments that use materials I already have?', acceptedAnswer: { '@type': 'Answer', text: 'List your available materials in the materials field. The AI prioritizes experiments that use what you have listed and flags any additional materials needed. Providing a specific, detailed materials list produces the most practical experiment suggestions.' } },
      { '@type': 'Question', name: 'Are AI-generated science experiments scientifically accurate?', acceptedAnswer: { '@type': 'Answer', text: 'For standard K-12 science topics, yes. The AI generates experiments that demonstrate real scientific principles with accurate expected results. Always do a teacher run-through of any experiment before doing it with students — this catches setup issues and confirms the expected results for your specific materials.' } },
      { '@type': 'Question', name: 'Can I generate science experiments without a lab?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "Classroom-safe" as the safety level. The AI generates experiments requiring only basic, safe materials — water, paper, household items — that can be done at student desks without a formal lab setup.' } },
      { '@type': 'Question', name: 'What is the best way to structure a science experiment for students?', acceptedAnswer: { '@type': 'Answer', text: 'The scientific method structure — question, hypothesis, materials, procedure, results, analysis, conclusion — is the standard framework. The generated experiments follow this structure, including a hypothesis prompt students answer before starting and discussion questions for post-experiment analysis.' } },
      { '@type': 'Question', name: 'How do I adapt a science experiment for different ability levels?', acceptedAnswer: { '@type': 'Answer', text: 'The tool generates three experiments ordered from simplest to most complex. Assign different experiments to different groups, or run the simpler version as a whole-class demonstration and the more complex version as a small-group investigation for advanced students.' } },
      { '@type': 'Question', name: 'Can AI generate experiments for STEM and engineering challenges?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Specify an engineering challenge in the topic field (e.g., "build a bridge that holds the most weight using index cards and tape") and the available materials. The AI will generate design-build-test challenges appropriate for your grade and materials.' } },
      { '@type': 'Question', name: 'Is the GogyAI science experiment idea generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function ScienceExperimentIdeaGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Science Experiment Idea Generator</h1>
        <p className="text-slate-600 mb-6">Generate 3 lab-ready experiment ideas with materials, procedures, hypothesis prompts, and expected results.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="science-experiment-idea-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Science Experiment Idea Generator: Three Lab-Ready Ideas for Any Topic</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI science experiment generator to get three complete experiment ideas — with procedures, hypothesis prompts, and expected results — for any grade level and science topic.</li>
            <li>Elementary and middle school science teachers and STEM educators will benefit most.</li>
            <li>The tool generates experiments using your available materials, appropriate for your safety level and time constraints.</li>
            <li>Always do a teacher run-through of any experiment before doing it with students — this verifies results with your specific materials and identifies setup issues.</li>
            <li>Verify safety information independently for any experiment involving heat, chemicals, or electrical components.</li>
            <li>No student data is needed — topic and materials are all the tool requires.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Finding a science experiment that matches your topic, works with materials you actually have, fits your class period, and is appropriate for your safety situation — all at once — takes more searching than the experiment itself often takes to run. An AI science experiment generator solves all four constraints simultaneously: you describe your situation, it generates three ideas.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers how to get the most relevant experiment suggestions, what to verify before running anything in class, and how to use the three-experiment format to differentiate for your students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Science Experiment Idea Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI science experiment idea generator takes your grade level, topic, available materials, time, and safety constraints and generates three complete experiment proposals — each with a learning objective, materials list, step-by-step procedure, hypothesis prompt, expected results, discussion questions, and safety notes.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Three options matter because the first isn't always the right fit. Having a range ordered by complexity gives you options: a simple demonstration, a standard investigation, and an advanced or extension challenge — all on the same topic.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Science Experiment Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Hands-on science investigation is one of the highest-impact instructional practices in science education, yet it's consistently underdone — not because teachers don't value it, but because finding and planning experiments takes time teachers don't have. When every experiment requires searching three websites, checking available materials, and adapting a procedure for your grade level, the path of least resistance is a textbook lesson.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI experiment generators remove that search and adaptation time, making hands-on investigation more accessible on a week-to-week basis. For teachers with budget and supply constraints, the ability to generate experiments specifically designed around what's in your supply closet is particularly practical.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter your science topic, available materials, time constraint, and safety level. The AI generates three experiments — ordered from simplest to most complex — that use your available materials and fit within your constraints. Each experiment follows the scientific method structure: hypothesis, procedure, expected results, and post-experiment discussion.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The materials list you provide matters significantly. "Beakers, water, food coloring, vegetable oil, corn syrup" will produce density-related liquid layer experiments. "Index cards, tape, scissors, pennies" will produce structural engineering challenges. The more specific your materials list, the more targeted the suggestions.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Science Experiment Generator</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Patel teaches 6th-grade science and is starting a unit on density. She has 45 minutes of lab time on Thursday and access to water, vegetable oil, corn syrup, food coloring, various liquids, plastic cups, and rulers — all classroom-safe materials.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade Level: Grade 6. Topic: Density and liquid layers.</li>
          <li>Materials: Water, vegetable oil, corn syrup, food coloring, dish soap, plastic cups, rulers, spoons.</li>
          <li>Time: 45 minutes. Safety: Classroom-safe.</li>
          <li>She generates three experiments: a simple density demonstration with two liquids, a layered liquid column with 4 liquids, and a floating/sinking investigation with small objects.</li>
          <li>She runs the middle experiment (layered column) as the class activity, uses the simple one as a teacher demonstration to open the lesson, and assigns the third as a design extension for early finishers.</li>
          <li>She does a 10-minute teacher run-through the day before to verify the layer order with her specific brands of oil and syrup.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">List your materials specifically, not generally</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Lab supplies" produces generic suggestions. A specific list of what's actually in your supply closet produces experiments you can actually run Thursday. The more detailed your materials list, the more practical the output.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always do a teacher run-through first</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Variables in specific brands, temperatures, and quantities affect results in ways the AI cannot predict. Run every experiment yourself before doing it with students. This takes 10–20 minutes and prevents the frustration of an experiment that doesn't produce the expected results in front of 28 students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated safety notes are general guidance based on the materials described. For experiments involving heat, open flame, concentrated chemicals, or electrical components, verify safety requirements against your school's safety guidelines and OSHA standards — do not rely solely on AI safety notes, and use the <Link href="/worksheet-generator" className="text-brand-700 underline">Worksheet Generator</Link> to create a structured lab recording sheet for student observations and results.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Highly specialized or advanced experiments — AP Chemistry, advanced physics, or biology requiring living organisms — may produce suggestions that need significant expert review. Use the AI output as a starting point and consult subject-matter resources for verification, or use the <Link href="/unit-plan-creator" className="text-brand-700 underline">Unit Plan Creator</Link> to map how experiments sequence across a full science unit.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Science experiment inputs contain no student data. Topic, materials, and grade level contain no personal information. GogyAI stores no personal information — inputs are used solely to generate experiment ideas. Explore <Link href="/" className="text-brand-700 underline">GogyAI&apos;s free AI tools for teachers</Link> to find more science and lesson planning resources.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I find science experiments that use materials I already have?', a: 'List your available materials in detail. The AI prioritizes experiments using what you have and flags any additional materials needed. A specific, detailed materials list produces the most practical suggestions.' },
            { q: 'Are AI-generated science experiments scientifically accurate?', a: 'For standard K-12 science topics, yes. Always do a teacher run-through before class — this confirms expected results with your specific materials and catches any setup issues.' },
            { q: 'Can I generate experiments without a lab?', a: 'Yes. Select "Classroom-safe" as the safety level. The AI generates experiments requiring only basic, safe materials that can be done at student desks.' },
            { q: 'What is the best structure for a science experiment?', a: 'The scientific method: question, hypothesis, materials, procedure, results, analysis, conclusion. Generated experiments follow this structure including a hypothesis prompt and post-experiment discussion questions.' },
            { q: 'How do I adapt an experiment for different ability levels?', a: 'The tool generates three experiments ordered simplest to most complex. Assign different experiments to different groups, or use the simplest as a class demonstration and the complex version as a small-group challenge for advanced students.' },
            { q: 'Can AI generate STEM engineering challenges?', a: 'Yes. Specify an engineering challenge in the topic field (e.g., "build the strongest paper bridge") and your materials. The AI generates design-build-test challenges appropriate for your grade.' },
            { q: 'Is the GogyAI science experiment idea generator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'field-trip-permission-letter-writer', name: 'Field Trip Permission Letter Writer' }}
        next={{ slug: 'discussion-prompt-generator', name: 'Discussion Prompt Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
