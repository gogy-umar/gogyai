import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Vocabulary List Builder — Free AI Tool for Teachers',
  description: 'Generate organized vocabulary lists with definitions, examples, and usage sentences for any subject and grade level. Free AI vocabulary builder for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/vocabulary-list-builder' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 8th Grade Science' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 8' },
  { name: 'topic', label: 'Topic or Text Title', type: 'text', placeholder: 'e.g. Cell biology — organelles', full: true },
  { name: 'num_words', label: 'Number of Words', type: 'number', placeholder: '10', default: '10' },
  {
    name: 'include',
    label: 'Include',
    type: 'select',
    options: [
      { value: 'all', label: 'Definitions + Examples + Sentences' },
      { value: 'definitions', label: 'Definitions only' },
      { value: 'definitions_examples', label: 'Definitions + Examples' },
      { value: 'definitions_sentences', label: 'Definitions + Sentences' },
    ],
    default: 'all',
  },
]

const PROMPT = `Create a complete vocabulary list for the following:
Subject: {subject}
Grade Level: {grade}
Topic or Text: {topic}
Number of Words: {num_words}
Include: {include}

For each vocabulary word, provide:
1. The vocabulary word (in bold)
2. Part of speech
3. Definition — clear and appropriate for {grade} students
4. Example — real-world context that connects to {topic}
5. Usage sentence — a model sentence showing correct use in context

Select the most important and high-utility vocabulary words for this topic and grade level. Prioritize words students will encounter repeatedly in {subject} and that transfer across contexts. Format the list clearly with numbered entries.`

const RELATED = [
  { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator', desc: 'Generate reading passages that use your vocabulary words in context.' },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Create vocabulary practice worksheets with fill-in-the-blank and matching exercises.' },
  { name: 'Classroom Story Generator', slug: 'classroom-story-generator', desc: 'Generate stories that naturally incorporate target vocabulary.' },
  { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer', desc: 'Write objectives that assess vocabulary acquisition across your unit.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Vocabulary List Builder — GogyAI',
    url: 'https://gogyai.com/vocabulary-list-builder',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Vocabulary List Builder',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/vocabulary-list-builder',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Vocabulary List Builder for Teachers: Complete Word Lists with Definitions and Examples',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/vocabulary-list-builder',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I build a vocabulary list for my class using AI?', acceptedAnswer: { '@type': 'Answer', text: 'Enter your subject, grade level, topic or text title, the number of words, and what to include (definitions, examples, sentences, or all three). The AI generates a prioritized vocabulary list with complete entries for each word.' } },
      { '@type': 'Question', name: 'Does the AI choose the right vocabulary words for my topic?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for well-defined academic topics. The AI selects high-utility words that appear frequently in the subject area and transfer across contexts. Review the list and replace any words that don\'t match your specific text or unit focus.' } },
      { '@type': 'Question', name: 'Can I use the vocabulary list builder for content-area vocabulary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — and this is where it adds the most value. Science, social studies, history, and math all have specialized vocabulary that the AI handles well. Providing a specific topic (e.g., "cell organelles" rather than just "biology") significantly improves word selection.' } },
      { '@type': 'Question', name: 'What is the best number of vocabulary words to teach per week?', acceptedAnswer: { '@type': 'Answer', text: 'Research in vocabulary instruction suggests 8–12 words per week for deep learning, with 3–5 sessions of varied practice. Generating 10 words per run is a reliable default. For ELL students or below-grade readers, 5–7 words allows more thorough coverage.' } },
      { '@type': 'Question', name: 'Can I generate vocabulary lists for fiction or literature?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Enter the text title and grade level. The AI selects high-utility words relevant to the themes and literary level of the text. For specific novels, adding the author and genre helps the AI target vocabulary from that text more accurately.' } },
      { '@type': 'Question', name: 'Does the vocabulary list builder work for ELL students?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Set the grade level to match your ELL students\' language proficiency rather than their enrolled grade. Including usage sentences is especially helpful for ELL students who need to see words in context to internalize meaning.' } },
      { '@type': 'Question', name: 'Is the GogyAI vocabulary list builder free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function VocabularyListBuilderPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Vocabulary List Builder</h1>
        <p className="text-slate-600 mb-6">Generate organized vocabulary lists with definitions, examples, and usage sentences for any subject or text.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="vocabulary-list-builder" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Vocabulary List Builder for Teachers: Complete Word Lists with Definitions and Examples</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI vocabulary list builder to generate complete word lists with definitions, examples, and sentences for any subject or text.</li>
            <li>ELA teachers, content-area teachers, reading specialists, and teachers working with ELL students will benefit most.</li>
            <li>The tool selects high-utility vocabulary words for your topic and grade, then generates definitions, real-world examples, and usage sentences for each.</li>
            <li>Teachers save 20–45 minutes compared to manually selecting and writing entries for a vocabulary list.</li>
            <li>Review the word selection against your specific text — AI selects topic words well but may miss words unique to a specific book or passage.</li>
            <li>No student data should be entered; topic and grade level are all the tool needs.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing quality vocabulary entries takes longer than most teachers budget for — a 10-word list with definitions, examples, and sentences takes 30–45 minutes to prepare well. An AI vocabulary list builder produces the same output in seconds, leaving you time to review and refine rather than create from nothing.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what makes a vocabulary list effective, how to use the tool to get the most relevant word selection, and where to apply your own expertise before distributing anything to students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Vocabulary List Builder?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI vocabulary list builder is a tool that selects the most important vocabulary words for a given topic and grade level, then generates complete entries — definitions, examples, and usage sentences — for each word. It replaces the manual process of choosing words, looking up appropriate definitions, and writing examples.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because AI language models have deep familiarity with academic vocabulary across subjects and can calibrate word choice, definition language, and example complexity to match a specified grade level reliably.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Vocabulary List Builders Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research in reading education is consistent: explicit vocabulary instruction is one of the most high-impact practices available to teachers. But designing quality vocabulary lists — selecting the right words, writing grade-appropriate definitions, creating meaningful examples — is time-intensive. Many teachers settle for dictionary definitions copied into a handout, which research shows is far less effective than contextualized examples.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI vocabulary builders change that equation. They generate contextualized definitions and real-world examples automatically, making high-quality vocabulary instruction accessible without the preparation time it normally requires.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You specify the subject, grade level, topic or text title, number of words, and what to include. The AI selects high-utility vocabulary words — prioritizing terms that appear frequently in the subject area and transfer across contexts — and generates a complete entry for each: part of speech, grade-appropriate definition, real-world example, and usage sentence.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The "include" selector lets you choose what appears in each entry. For younger grades or ELL students, include all three elements — definitions, examples, and sentences — to provide maximum context. For a quick review list, definitions only may be sufficient.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Vocabulary List Builder in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Patel teaches 8th-grade science and is starting a unit on cell biology. She needs a vocabulary list of 12 key terms — organelles, functions, and related concepts — with definitions and sentences appropriate for 8th graders.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>She enters "8th Grade Science" for subject, "Grade 8" for grade level.</li>
          <li>Topic: "Cell biology — organelles, cell membrane, nucleus, and cell functions."</li>
          <li>Number of Words: 12.</li>
          <li>Include: Definitions + Examples + Sentences (all).</li>
          <li>She generates the list and receives 12 entries in about 12 seconds.</li>
          <li>She reviews the list: 10 words are exactly what she wanted. She replaces "chromatin" (which her curriculum doesn't cover yet) with "cytoplasm" and adjusts the definition of "organelle" to match the textbook's phrasing.</li>
          <li>She copies the list into her unit handout template.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          Total preparation time: 9 minutes including review and two edits. Building the same list manually would have taken 35–40 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Be specific about the topic angle</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Biology" produces generic life science terms. "Cell biology — focusing on the organelles of eukaryotic cells" produces precise, targeted vocabulary. The more specific your topic, the more the AI can prioritize words that actually matter for your unit.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always review the word selection against your actual materials</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI selects high-utility topic words — but it cannot know which words appear in your specific textbook, passage, or novel. Cross-reference the generated list against your teaching materials and swap out words that don't appear in your students' actual reading.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use sentences as model writing exemplars</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated usage sentences can serve double duty: distribute them as model sentences for students to analyze syntactically, or use them to teach academic writing patterns alongside vocabulary content.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI vocabulary list builders select words based on topic frequency and grade-level utility, not based on the specific words in a particular textbook or novel. For literature-based vocabulary lists, you'll need to review the output and replace words that don't appear in the actual text students are reading. For a complete reading activity that pairs a leveled passage with comprehension questions on the same topic, the <Link href="/reading-comprehension-creator" className="text-brand-700 underline">Reading Comprehension Creator</Link> generates both passage and questions from the same input.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool does not generate visual supports such as word maps, graphic organizers, or illustrations. These are effective vocabulary instruction tools — but you'll need to create or source them separately. For reading materials that are too complex for your students' current level, the <Link href="/text-simplifier" className="text-brand-700 underline">Text Simplifier</Link> reduces linguistic complexity while preserving all key content — useful for making the same passage accessible to below-grade readers.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Vocabulary list inputs contain no student data. Do not include student names or identifying information in your inputs. GogyAI stores no personal information — your inputs are used solely to generate your vocabulary list.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          FERPA applies to student records, not curriculum materials. Vocabulary list creation falls well within standard educational tool use. Check your district's AI tool policy if integrating into formal curriculum development. Find all free reading and literacy tools at <Link href="/" className="text-brand-700 underline">GogyAI — free tools for teachers</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I build a vocabulary list for my class using AI?', a: 'Enter your subject, grade level, topic, number of words, and what to include. The AI generates a prioritized list with definitions, examples, and usage sentences for each word in seconds.' },
            { q: 'Does the AI choose the right vocabulary words for my topic?', a: 'Yes, for well-defined academic topics. Review the list and replace any words that don\'t match your specific text or unit focus — the AI selects by topic frequency, not by what\'s in your specific materials.' },
            { q: 'Can I use the vocabulary list builder for content-area vocabulary?', a: 'Yes — science, social studies, history, and math all produce strong word selections. Providing a specific topic angle (e.g., "cell organelles" rather than "biology") significantly improves the relevance of word selection.' },
            { q: 'What is the best number of vocabulary words to teach per week?', a: 'Research suggests 8–12 words per week for deep learning with multiple practice encounters. For ELL students or below-grade readers, 5–7 words allows more thorough coverage.' },
            { q: 'Can I generate vocabulary lists for fiction or literature?', a: 'Yes. Enter the text title and grade level. For specific novels, adding the author and genre helps the AI target vocabulary more accurately. Review against the actual text to ensure word alignment.' },
            { q: 'Does the vocabulary list builder work for ELL students?', a: 'Yes. Set the grade level to match your ELL students\' language proficiency. Including usage sentences is especially helpful for ELL students who need to see words in context.' },
            { q: 'Is the GogyAI vocabulary list builder free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'reading-comprehension-creator', name: 'Reading Comprehension Creator' }}
        next={{ slug: 'classroom-story-generator', name: 'Classroom Story Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
