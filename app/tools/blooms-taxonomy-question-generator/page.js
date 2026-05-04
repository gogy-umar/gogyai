import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: "Bloom's Taxonomy Question Generator — Free AI Tool for Teachers",
  description: "Generate questions at every Bloom's Taxonomy cognitive level. Free AI question generator for K-12 teachers. No login required.",
  alternates: { canonical: 'https://gogyai.com/blooms-taxonomy-question-generator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. High School Biology' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 10' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. Cellular respiration', full: true },
  { name: 'blooms_levels', label: "Bloom's Levels", type: 'text', placeholder: 'e.g. Remember, Apply, Evaluate' },
  { name: 'questions_per_level', label: 'Questions per Level', type: 'number', placeholder: '2', default: '2' },
]

const PROMPT = `Generate questions organized by Bloom's Taxonomy levels for the following:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Bloom's Levels to include: {blooms_levels}
Number of Questions per Level: {questions_per_level}

For each Bloom's level specified:
1. State the level name and its cognitive focus (1 sentence)
2. List {questions_per_level} questions at that level, each with:
   - The question itself (clearly written for the specified grade level)
   - The Bloom's action verb used
   - A brief explanation of WHY this question targets that level (1 sentence)
   - A suggested format for responses (written, discussion, multiple choice, etc.)

Bloom's level guidance:
- Remember: recall, define, list, identify, name
- Understand: explain, describe, summarize, classify, compare
- Apply: use, solve, demonstrate, calculate, implement
- Analyze: break down, differentiate, examine, contrast, investigate
- Evaluate: judge, defend, critique, justify, assess
- Create: design, produce, develop, construct, compose

Make each question clear, appropriately challenging for the grade level, and directly relevant to the topic.`

const RELATED = [
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: "Write SMART objectives that align to your Bloom's question levels." },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: "Use Bloom's-targeted questions as exit ticket prompts." },
  { name: 'Quiz & MCQ Generator', slug: 'quiz-mcq-generator', desc: "Generate a full quiz from your Bloom's-level question set." },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: "Create higher-order discussion prompts from your Evaluate and Create level questions." },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: "Bloom's Taxonomy Question Generator — GogyAI",
    url: 'https://gogyai.com/blooms-taxonomy-question-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: "AI Bloom's Taxonomy Question Generator",
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/blooms-taxonomy-question-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: "AI Bloom's Taxonomy Question Generator: Write Questions at Every Cognitive Level",
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/blooms-taxonomy-question-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: "What are the six levels of Bloom's Taxonomy?", acceptedAnswer: { '@type': 'Answer', text: "The six levels of Bloom's Revised Taxonomy (2001) are, from lowest to highest cognitive demand: Remember (recall facts), Understand (explain concepts), Apply (use knowledge in new situations), Analyze (break down information), Evaluate (make judgments), and Create (produce something new). Questions at higher levels require more complex thinking than lower levels." } },
      { '@type': 'Question', name: "Why does it matter which Bloom's level a question targets?", acceptedAnswer: { '@type': 'Answer', text: "Questions at different Bloom's levels develop different cognitive skills. A classroom that only asks Remember-level questions (recall) is only developing the lowest level of thinking. Deliberately including higher levels — Apply, Analyze, Evaluate, Create — builds the critical thinking and problem-solving skills that matter beyond school." } },
      { '@type': 'Question', name: "What Bloom's levels should I use for a lesson?", acceptedAnswer: { '@type': 'Answer', text: "Most effective lessons include a progression from lower to higher levels. Start with Remember or Understand questions to check foundational knowledge, then move to Apply or Analyze to deepen engagement, and use Evaluate or Create for extension or discussion. You don't need all six levels in every lesson — target the levels that match your specific objective." } },
      { '@type': 'Question', name: "What are good action verbs for each Bloom's level?", acceptedAnswer: { '@type': 'Answer', text: "Remember: define, recall, list, name, identify. Understand: explain, describe, summarize, classify. Apply: solve, use, calculate, demonstrate. Analyze: compare, contrast, differentiate, examine. Evaluate: judge, critique, justify, defend. Create: design, produce, develop, construct. Using the right verb in a question ensures it genuinely targets the intended level." } },
      { '@type': 'Question', name: "How many questions should I write per Bloom's level?", acceptedAnswer: { '@type': 'Answer', text: "Two questions per level is a practical starting point for most uses — enough to see patterns in student responses without overwhelming a single assessment. Adjust based on your purpose: a comprehensive unit assessment might use three to four per level; a quick formative check might use one per level." } },
      { '@type': 'Question', name: "Can Bloom's Taxonomy questions be used for all subjects?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Bloom's Taxonomy applies universally. The action verbs and cognitive levels work in science (analyze experimental data), math (apply formulas, evaluate solutions), social studies (evaluate historical decisions), ELA (create original arguments), arts (evaluate artistic choices), and every other subject area." } },
      { '@type': 'Question', name: "How is Bloom's Taxonomy different from Webb's Depth of Knowledge?", acceptedAnswer: { '@type': 'Answer', text: "Both frameworks classify cognitive complexity, but differently. Bloom's focuses on the type of cognitive process (remember vs. create). Webb's Depth of Knowledge (DOK) focuses on the complexity and context of a task — how many steps, how much reasoning, how extended the thinking. Many teachers use both frameworks in combination." } },
      { '@type': 'Question', name: "Is the GogyAI Bloom's taxonomy question generator free?", acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function BloomsTaxonomyQuestionGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Bloom&apos;s Taxonomy Question Generator</h1>
        <p className="text-slate-600 mb-6">Generate questions at every Bloom&apos;s cognitive level — with action verbs, explanations, and suggested response formats.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="blooms-taxonomy-question-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Bloom&apos;s Taxonomy Question Generator: Write Questions at Every Cognitive Level</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains Bloom&apos;s Taxonomy and how AI can help you generate questions at the specific cognitive levels your lesson requires.</li>
            <li>Teachers who want to build higher-order thinking into assessments, discussions, and practice will benefit most.</li>
            <li>The generator creates questions organized by Bloom&apos;s level, each with the action verb used, a rationale, and a suggested response format.</li>
            <li>Most classrooms over-rely on Remember-level questions. This tool makes it easy to build Analyze, Evaluate, and Create-level questions into daily instruction.</li>
            <li>AI questions are strong starting points — review for grade-level appropriateness and alignment to your specific unit before use.</li>
            <li>No student information should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          A classroom that only asks &quot;What is the definition of photosynthesis?&quot; is developing recall. A classroom that asks &quot;Why would photosynthesis rates differ between plants in a rainforest and a desert, and what evidence would you use to support your prediction?&quot; is developing scientific reasoning. The difference is Bloom&apos;s Taxonomy — and the difference is significant for what students are actually learning to do with knowledge.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The challenge is that writing good higher-order questions is harder than writing recall questions. Bloom&apos;s Taxonomy Question Generator makes it possible to generate questions across all six cognitive levels for any topic in minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is a Bloom&apos;s Taxonomy Question Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A Bloom&apos;s Taxonomy question generator takes your subject, grade level, topic, desired cognitive levels, and number of questions per level, and produces a complete set of questions organized by level. Each question is labeled with the Bloom&apos;s action verb it uses and includes a brief explanation of why the question targets that cognitive level — making the output immediately useful for both classroom use and professional discussion.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generator can target any subset of the six levels — you don&apos;t have to generate all six at once. If your lesson objective is at the Apply level and you want questions that scaffold from Understand to Apply, enter just those two levels and get a focused set of questions.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Bloom&apos;s Taxonomy Matters for Question Design</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Bloom&apos;s Taxonomy, revised in 2001 by Anderson and Krathwohl, classifies learning into six cognitive levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. Each level demands progressively more complex thinking from students. Questions at higher levels do not replace lower-level questions — they build on them. A student can&apos;t analyze a concept they don&apos;t understand, and can&apos;t evaluate evidence they can&apos;t apply.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on classroom questioning consistently shows that most teacher-generated questions fall in the Remember and Understand categories — not from intent, but from time pressure. Writing Apply, Analyze, Evaluate, and Create questions requires more cognitive effort to construct. AI generators address exactly this constraint.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Instructional coaches often use Bloom&apos;s level distribution as a metric of lesson rigor during walkthroughs. A lesson that includes only lower-order questions is flagged for improvement. This tool gives teachers the means to build higher-order questions into any lesson quickly.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter your subject, grade level, topic, which Bloom&apos;s levels you want (e.g., &quot;Remember, Apply, Evaluate&quot;), and how many questions per level. The AI generates a structured output organized by level — each level begins with a brief description of its cognitive focus, followed by the specified number of questions, each labeled with its action verb and explained.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The suggested response format for each question (written response, class discussion, multiple choice) helps you plan how you&apos;ll use the question in your lesson structure — a higher-order Evaluate question works well as a discussion anchor, while a Remember question works well as a quick oral check.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Question Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Williams teaches 10th-grade Biology and is planning a class discussion on cellular respiration. She wants questions that move students from baseline recall through analysis, with one strong evaluation question for the closing discussion. She doesn&apos;t want all six levels — just the three that fit her 50-minute plan.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Subject:</strong> &quot;High School Biology.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 10.&quot;</li>
          <li><strong>Topic:</strong> &quot;Cellular respiration — ATP production through glycolysis, Krebs cycle, and electron transport chain.&quot;</li>
          <li><strong>Bloom&apos;s Levels:</strong> &quot;Remember, Analyze, Evaluate.&quot;</li>
          <li><strong>Questions per Level:</strong> 2.</li>
          <li>She clicks <strong>Generate</strong> and receives six questions — two per level — each labeled, explained, and formatted.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          She opens class with the two Remember questions as oral checks during warm-up. The two Analyze questions structure her small group activity. She closes with the Evaluate question as a class discussion: &quot;Justify whether it would be beneficial or harmful for organisms to run cellular respiration at maximum efficiency at all times.&quot; Students leave having moved from recall to genuine scientific reasoning within a single lesson period.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Target levels that match your lesson objective</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Don&apos;t generate all six levels just because they exist. Match the levels to your lesson&apos;s objective. If today&apos;s objective is &quot;apply the quadratic formula,&quot; generate Remember and Apply questions — you don&apos;t need Evaluate questions for a procedural skill lesson. Targeted generation produces more useful questions.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use the action verb labels to check alignment</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated output labels each question with its Bloom&apos;s action verb. Review these labels to confirm the question actually does what the level claims. Occasionally the AI uses a higher-level label for a question that is really lower-order in practice. The labels help you audit this quickly.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated questions reflect general curriculum knowledge of your topic — they are not specifically aligned to the exact angle or depth you covered in class. A question at the Analyze level for cellular respiration may analyze a dimension you haven&apos;t covered yet. Review each question against your taught content before use. To write SMART learning objectives at each Bloom&apos;s level before generating questions, the <Link href="/learning-objectives-writer" className="text-brand-700 underline">Learning Objectives Writer</Link> creates measurable objectives your questions can then be matched to.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool generates text questions only — questions that require data tables, graphs, or images cannot be fully generated here. For science or math questions requiring visual data, the AI provides the question stem and you supply the visual component. For open-ended prompts at the Analysis and Evaluation levels that work best in discussion rather than written assessment, the <Link href="/discussion-prompt-generator" className="text-brand-700 underline">Discussion Prompt Generator</Link> creates facilitated discussion prompts for any topic.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to use this tool. Enter only your subject, grade, topic, and level settings. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Find every free planning and assessment tool at <Link href="/" className="text-brand-700 underline">GogyAI&apos;s library of AI tools for educators</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: "What are the six levels of Bloom's Taxonomy?", a: "Remember (recall facts), Understand (explain concepts), Apply (use knowledge in new situations), Analyze (break down information), Evaluate (make judgments), and Create (produce something new). Higher levels require more complex thinking." },
            { q: "Why does the Bloom's level of a question matter?", a: "Questions at different levels develop different cognitive skills. A classroom that only asks Remember-level questions only develops recall. Including Apply, Analyze, Evaluate, and Create levels builds critical thinking and problem-solving skills that matter beyond school." },
            { q: "What Bloom's levels should I use for a lesson?", a: "Start with Remember or Understand to check foundations, move to Apply or Analyze for engagement, use Evaluate or Create for extension. You don't need all six levels in every lesson — target the levels that match your specific objective." },
            { q: "What are good action verbs for each level?", a: "Remember: define, recall, list. Understand: explain, summarize, classify. Apply: solve, demonstrate, calculate. Analyze: compare, differentiate, examine. Evaluate: judge, critique, justify. Create: design, produce, construct. Using the right verb ensures a question genuinely targets its intended level." },
            { q: "How many questions per level should I generate?", a: "Two per level is a practical starting point. A comprehensive unit assessment might use three to four per level; a quick formative check might use one per level." },
            { q: "Can Bloom's questions be used for all subjects?", a: "Yes. The cognitive levels apply universally — in science, math, ELA, social studies, arts, and every other subject area." },
            { q: "How is Bloom's Taxonomy different from Webb's Depth of Knowledge?", a: "Bloom's focuses on the type of cognitive process. Webb's DOK focuses on the complexity and context of a task — how many steps, how extended the thinking. Many teachers use both frameworks together." },
            { q: "Is the GogyAI Bloom's taxonomy question generator free?", a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'exit-ticket-creator', name: 'Exit Ticket Creator' }}
        next={{ slug: 'parent-email-writer', name: 'Parent Email Writer' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
