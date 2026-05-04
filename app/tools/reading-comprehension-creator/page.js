import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Reading Comprehension Creator — Free AI Tool for Teachers',
  description: 'Generate original reading passages with comprehension questions and answer keys for any grade level. Free AI reading comprehension creator for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/reading-comprehension-creator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 4' },
  {
    name: 'reading_level',
    label: 'Reading Level',
    type: 'select',
    options: [
      { value: 'at grade', label: 'At Grade Level' },
      { value: 'below grade', label: 'Below Grade Level' },
      { value: 'above grade', label: 'Above Grade Level' },
    ],
    default: 'at grade',
  },
  { name: 'topic', label: 'Topic or Theme', type: 'text', placeholder: 'e.g. The water cycle', full: true },
  {
    name: 'length',
    label: 'Passage Length',
    type: 'select',
    options: [
      { value: 'short', label: 'Short (150–200 words)' },
      { value: 'medium', label: 'Medium (250–350 words)' },
      { value: 'long', label: 'Long (400–500 words)' },
    ],
    default: 'medium',
  },
  {
    name: 'question_types',
    label: 'Question Types',
    type: 'select',
    options: [
      { value: 'mixed', label: 'Mixed (literal, inferential, vocabulary)' },
      { value: 'literal', label: 'Literal / Recall only' },
      { value: 'inferential', label: 'Inferential / Critical thinking' },
      { value: 'vocabulary', label: 'Vocabulary focused' },
    ],
    default: 'mixed',
  },
]

const PROMPT = `Create an original reading comprehension resource with the following details:
Grade Level: {grade}
Reading Level: {reading_level}
Topic/Theme: {topic}
Passage Length: {length}
Question Types: {question_types}

Structure the resource as follows:
1. Original, engaging passage on the topic — written at {reading_level} level for {grade} students, {length} in length. Use clear paragraphs, age-appropriate vocabulary, and an engaging opening sentence.
2. 6–8 comprehension questions based on the passage:
   - Include {question_types} question types
   - Mix question formats: multiple choice, short answer, and one extended response
   - Questions should progress from literal recall to higher-order thinking
3. Answer Key with model answers for all questions

The passage should be factually accurate, classroom-appropriate, and interesting enough that students will want to read it.`

const RELATED = [
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Generate practice worksheets for any subject and grade level.' },
  { name: 'Vocabulary List Builder', slug: 'vocabulary-list-builder', desc: 'Build a vocabulary list from the words in your reading passage.' },
  { name: 'Bloom\'s Taxonomy Question Generator', slug: 'blooms-taxonomy-question-generator', desc: 'Generate questions at every level of Bloom\'s for deeper comprehension work.' },
  { name: 'Text Simplifier', slug: 'text-simplifier', desc: 'Simplify a complex passage for struggling readers or ELL students.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Reading Comprehension Creator — GogyAI',
    url: 'https://gogyai.com/reading-comprehension-creator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Reading Comprehension Creator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/reading-comprehension-creator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Reading Comprehension Creator for Teachers: Original Passages at Any Level',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/reading-comprehension-creator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I create a reading comprehension worksheet with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Enter the grade level, reading level (below, at, or above grade), topic or theme, passage length, and question types you want. The AI generates an original passage with comprehension questions and a full answer key in seconds.' } },
      { '@type': 'Question', name: 'Can I generate reading passages for ELL students?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Set the reading level to "below grade" and specify the grade. For additional ELL support, use the Text Simplifier tool to further adapt the passage to your students\' specific language proficiency level.' } },
      { '@type': 'Question', name: 'Are AI-generated reading passages original?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The AI generates original passages — not excerpts from published texts. Each generation produces unique content based on your topic and specifications. The passages are not copied from any source.' } },
      { '@type': 'Question', name: 'What topics work best for AI reading comprehension passages?', acceptedAnswer: { '@type': 'Answer', text: 'Science topics (habitats, weather, space, human body), social studies topics (communities, history, geography), and general knowledge topics all produce strong, factually reliable passages. Fiction and narrative themes also work well for literary skill practice.' } },
      { '@type': 'Question', name: 'How many comprehension questions does the tool generate?', acceptedAnswer: { '@type': 'Answer', text: 'The tool generates 6–8 questions per passage, mixing multiple choice, short answer, and extended response formats. You can reduce or remove questions that don\'t fit your lesson focus before printing.' } },
      { '@type': 'Question', name: 'Does the reading comprehension creator include an answer key?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A complete answer key with model answers is included at the end of every generated resource. Extended response answers include key points that should appear in a strong student response.' } },
      { '@type': 'Question', name: 'Can I use AI-generated passages for standardized test preparation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Generating passages at your target test reading level with mixed literal and inferential questions closely mimics standardized reading assessment formats. This makes the tool particularly useful for test prep rotations.' } },
      { '@type': 'Question', name: 'Is the GogyAI reading comprehension creator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function ReadingComprehensionCreatorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Reading Comprehension Creator</h1>
        <p className="text-slate-600 mb-6">Generate original reading passages with comprehension questions and answer keys for any grade level.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="reading-comprehension-creator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Reading Comprehension Creator for Teachers: Original Passages at Any Level</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI reading comprehension creator to generate original passages and questions for any grade or reading level.</li>
            <li>Elementary and middle school ELA teachers, reading specialists, and content-area teachers building literacy skills will benefit most.</li>
            <li>The tool creates original, topic-specific reading passages paired with comprehension questions and an answer key — at your specified grade and reading level.</li>
            <li>Teachers save 45–90 minutes compared to finding, adapting, and writing questions for an existing text.</li>
            <li>Verify factual content in science and social studies passages before distributing — AI is reliable but not infallible.</li>
            <li>No student data should be entered; topic and grade level are sufficient inputs.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Finding a reading passage that matches your topic, your students' reading level, and your comprehension objectives at the same time is nearly impossible. Most teachers compromise — too easy, too hard, or off-topic. An AI reading comprehension creator eliminates that compromise by generating exactly what you specified.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers how to use the tool effectively, which question types produce the most instructional value, and where to apply your own judgment before anything reaches students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Reading Comprehension Creator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI reading comprehension creator generates an original passage on a topic you specify — written at the reading level you choose — along with comprehension questions and a complete answer key. It replaces the time-consuming process of finding, printing, adapting, and writing questions for existing texts.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because AI language models can generate coherent, factually grounded prose at specified complexity levels and produce questions across the full spectrum from literal recall to critical analysis. The result is a custom resource that didn't exist before you requested it.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Reading Comprehension Creators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Content-area teachers — science, social studies, history — regularly need students to practice reading comprehension within their subject matter. But finding published reading comprehension resources that cover the specific topic being taught, at the right level, is an enormous time investment. AI generators solve this mismatch completely.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For reading specialists and ELA teachers managing differentiated reading groups, the ability to generate the same passage at three different reading levels creates leveled resource sets in minutes — something that would require sourcing and adapting three separate texts by hand.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You specify grade level, reading level (below, at, or above grade), topic, passage length, and question types. The AI generates an original passage — factually grounded, age-appropriate, and written at the specified complexity. It then produces 6–8 comprehension questions and a model answer key.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Question type selection matters: "mixed" produces the most instructional value, spanning literal recall, inference, and vocabulary. "Inferential" pushes critical thinking but assumes students can handle above-surface-level reading. Choose based on your lesson's reading objective, not just the topic.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Reading Comprehension Creator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Okonkwo teaches 4th-grade science and is working on a unit about ecosystems. He wants a reading comprehension activity on food chains — at grade level, medium length — with mixed question types to pair with that week's lab.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>He enters "Grade 4" for grade level.</li>
          <li>Reading Level: At Grade Level.</li>
          <li>Topic: "Food chains in a forest ecosystem — producers, consumers, and decomposers."</li>
          <li>Passage Length: Medium (250–350 words).</li>
          <li>Question Types: Mixed.</li>
          <li>He generates the resource and receives an engaging passage about a forest food chain starting with oak trees, followed by 7 comprehension questions.</li>
          <li>He scans the passage for factual accuracy — all correct. He removes one question that overlaps with what the lab already covers, then copies the resource into his document template.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          Total preparation time: 12 minutes, including review. Finding and adapting a comparable published resource would typically take 45–60 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Specify the angle, not just the topic</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "The water cycle" produces a generic passage. "The water cycle — focused on evaporation and condensation, for students who already know precipitation" produces something targeted. The more you describe the specific angle or aspect of the topic, the more useful the passage.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Generate leveled versions for differentiation</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Run the same topic three times — below grade, at grade, above grade — with the same question types. You get three versions of the same passage that a differentiated classroom can use simultaneously, with consistent questions for class discussion.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use inferential questions for discussion, not just assessment</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated inferential questions are often strong discussion starters. Don't limit their use to individual assessment — they work equally well as Socratic seminar prompts or think-pair-share activities.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated passages are original but not published. They cannot be cited as authoritative sources. For research-based literacy activities, pair AI passages with verified sources — use the AI passage for comprehension practice and direct students to real sources for further reading. To support comprehension of the passage, pair it with a targeted word list from the <Link href="/vocabulary-list-builder" className="text-brand-700 underline">Vocabulary List Builder</Link>, which generates definitions, examples, and usage sentences for any topic.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Factual content in science and social studies passages is generally accurate but should be verified, especially for recent events, specific statistics, or nuanced historical claims. AI occasionally produces plausible-sounding errors — always read the passage before distributing. For creative, original stories that engage students with themes and characters, the <Link href="/classroom-story-generator" className="text-brand-700 underline">Classroom Story Generator</Link> produces original classroom narratives at any grade level.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not include student names, assessment data, or any identifying information in your inputs. Topic and grade level contain no personal data. GogyAI stores no personal information — inputs are used solely to generate your resource.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA governs student education records, not general curriculum resource creation. Check your district's AI use policy if you plan to use this tool as part of formal curriculum or assessment development. Browse <Link href="/" className="text-brand-700 underline">all free tools on GogyAI</Link> for the complete set of reading, writing, and content creation tools available to educators at no cost.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I create a reading comprehension worksheet with AI?', a: 'Enter grade level, reading level, topic, passage length, and question types. The AI generates an original passage with comprehension questions and a full answer key in seconds.' },
            { q: 'Can I generate reading passages for ELL students?', a: <>Yes. Set the reading level to &quot;below grade&quot; for your students&apos; grade. For additional ELL adaptation, use the <Link href="/text-simplifier" className="text-brand-700 underline">Text Simplifier</Link> to further reduce language complexity while keeping the same topic.</> },
            { q: 'Are AI-generated reading passages original?', a: 'Yes. The AI generates original passages — not excerpts from published texts. Each generation produces unique content based on your specifications.' },
            { q: 'What topics work best for AI reading comprehension passages?', a: 'Science topics, social studies, geography, and general knowledge all produce strong passages. Fiction and narrative themes work well for literary skill practice. Current events produce less reliable results.' },
            { q: 'How many comprehension questions does the tool generate?', a: 'The tool generates 6–8 questions per passage, mixing multiple choice, short answer, and extended response. Remove or adjust questions that don\'t fit your lesson objective before printing.' },
            { q: 'Does the reading comprehension creator include an answer key?', a: 'Yes. A complete answer key with model answers is included. Extended response answers include key points that should appear in a strong student response.' },
            { q: 'Can I use AI-generated passages for standardized test preparation?', a: 'Yes. Generating passages at your target test reading level with mixed literal and inferential questions mimics standardized reading assessment formats closely — useful for test prep rotations.' },
            { q: 'Is the GogyAI reading comprehension creator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'worksheet-generator', name: 'Worksheet Generator' }}
        next={{ slug: 'vocabulary-list-builder', name: 'Vocabulary List Builder' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
