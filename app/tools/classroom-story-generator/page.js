import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Classroom Story Generator — Free AI Tool for Teachers',
  description: 'Generate original, classroom-appropriate stories for any grade level with discussion questions. Free AI story generator for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/classroom-story-generator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 3' },
  {
    name: 'genre',
    label: 'Genre',
    type: 'select',
    options: [
      { value: 'adventure', label: 'Adventure' },
      { value: 'mystery', label: 'Mystery' },
      { value: 'realistic fiction', label: 'Realistic Fiction' },
      { value: 'fable', label: 'Fable / Moral tale' },
      { value: 'historical fiction', label: 'Historical Fiction' },
      { value: 'science fiction', label: 'Science Fiction' },
    ],
    default: 'realistic fiction',
  },
  { name: 'theme', label: 'Theme or Moral', type: 'text', placeholder: 'e.g. Perseverance, honesty, teamwork', full: true },
  { name: 'characters', label: 'Character Description', type: 'text', placeholder: 'e.g. A curious 10-year-old girl and her younger brother', full: true },
  { name: 'setting', label: 'Setting', type: 'text', placeholder: 'e.g. A small town with a mysterious old library' },
  {
    name: 'length',
    label: 'Story Length',
    type: 'select',
    options: [
      { value: 'short', label: 'Short (300–400 words)' },
      { value: 'medium', label: 'Medium (500–700 words)' },
    ],
    default: 'short',
  },
]

const PROMPT = `Write an original, classroom-appropriate story with the following details:
Grade Level: {grade}
Genre: {genre}
Theme/Moral: {theme}
Characters: {characters}
Setting: {setting}
Length: {length}

Requirements:
1. An engaging opening that hooks the reader immediately
2. A clear narrative arc: introduction, rising action, climax, resolution
3. Characters with distinct voices and believable motivations
4. Age-appropriate vocabulary and sentence complexity for {grade} students
5. The theme of {theme} woven naturally throughout — not stated explicitly until the end
6. A satisfying resolution that conveys the theme
7. After the story: 4–5 discussion questions that explore theme, character motivation, and personal connections

Make the story engaging, original, and appropriate for a classroom read-aloud or independent reading activity.`

const RELATED = [
  { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator', desc: 'Add comprehension questions to any story your students read.' },
  { name: 'Vocabulary List Builder', slug: 'vocabulary-list-builder', desc: 'Build a vocabulary list from the language in your generated story.' },
  { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator', desc: 'Generate richer discussion questions for deeper literary analysis.' },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Create a story-based worksheet with written response questions.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Classroom Story Generator — GogyAI',
    url: 'https://gogyai.com/classroom-story-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Classroom Story Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/classroom-story-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Classroom Story Generator for Teachers: Original Stories Built for Your Lesson',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/classroom-story-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I generate a story for my classroom using AI?', acceptedAnswer: { '@type': 'Answer', text: 'Enter the grade level, genre, theme or moral you want the story to convey, a brief character description, the setting, and the length. The AI generates an original story with a narrative arc and discussion questions at the end.' } },
      { '@type': 'Question', name: 'Are AI-generated stories appropriate for all grade levels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The tool adjusts vocabulary, sentence complexity, and narrative sophistication to match the specified grade level. Specify the grade carefully — Grade 2 and Grade 8 will produce substantially different stories even on the same theme.' } },
      { '@type': 'Question', name: 'Can I use AI stories as mentor texts for student writing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the strongest uses. Generate stories with specific structural or literary features you want students to study and imitate. The story is original, so there are no copyright concerns when using it as a classroom writing model.' } },
      { '@type': 'Question', name: 'Can the AI generate stories for social-emotional learning topics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Enter your SEL theme — perseverance, empathy, conflict resolution, self-regulation — in the theme field. The AI weaves it naturally into the narrative without being heavy-handed. This works particularly well for fable and realistic fiction genres.' } },
      { '@type': 'Question', name: 'Are AI classroom stories original and copyright-free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every generated story is original content created for your specific inputs. It is not excerpted from or derived from published works. You may use it freely in your classroom.' } },
      { '@type': 'Question', name: 'How can I use AI stories for diverse representation?', acceptedAnswer: { '@type': 'Answer', text: 'Specify character backgrounds, cultural contexts, and settings in the character and setting fields. The AI incorporates these details. Review the output to ensure cultural accuracy and adjust details that need your own knowledge to be done well.' } },
      { '@type': 'Question', name: 'Is the GogyAI classroom story generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function ClassroomStoryGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Classroom Story Generator</h1>
        <p className="text-slate-600 mb-6">Generate original, classroom-appropriate stories with discussion questions — tailored to your grade level, genre, and theme.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="classroom-story-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Classroom Story Generator for Teachers: Original Stories Built for Your Lesson</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI classroom story generator to create original, grade-appropriate stories for read-alouds, literacy instruction, and social-emotional learning.</li>
            <li>Elementary and middle school teachers, reading specialists, and SEL coordinators will benefit most.</li>
            <li>The tool generates original stories — with narrative arc, characters, and a theme — at your specified grade level, genre, and length, plus discussion questions.</li>
            <li>Teachers save significant time finding or creating stories that match their specific theme, grade level, and instructional objective simultaneously.</li>
            <li>Review stories for cultural accuracy when specifying diverse settings or characters — AI can miss nuances that require lived experience.</li>
            <li>No student data should be entered; all inputs are about story specifications, not individual students.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Finding a story that matches your theme, your grade level, your SEL objective, and the time you have for a read-aloud — all at once — is almost impossible with existing published resources. An AI classroom story generator creates exactly that story, in seconds, because you specified exactly what you needed.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers where AI storytelling works best for teachers, how to specify stories that produce genuinely useful classroom content, and what to review before using any generated story with students.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Classroom Story Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI classroom story generator creates original, age-appropriate stories based on your specifications — grade level, genre, theme or moral, characters, setting, and length — along with discussion questions for classroom use. The stories are original content, not excerpts from published works.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because AI language models can generate coherent narrative prose, calibrate vocabulary and complexity to grade level, and embed thematic content naturally within a story structure. The result is a usable classroom resource that didn't exist before you requested it.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Classroom Story Generators Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Stories are among the most powerful teaching tools available — for literacy, for SEL, for cultural learning, for building empathy. But finding the right story at the right level with the right theme requires extensive searching, and often the best option still doesn't quite fit. AI story generators eliminate that gap.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For SEL instruction specifically, the ability to generate a story built around a specific social skill — handling conflict, managing anxiety, showing empathy — is particularly valuable. Rather than finding a published story that approximately matches and hoping students make the connection, you can generate a story where the theme is exactly what you're teaching.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You specify the grade level, genre, theme or moral, character description, setting, and length. The AI generates an original story with a complete narrative arc — opening, rising action, climax, resolution — and weaves your specified theme throughout without stating it explicitly until the ending. Discussion questions follow the story.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Genre choice significantly shapes the output. Adventure and mystery generate plot-driven narratives with external conflict. Realistic fiction produces character-driven stories with relatable everyday situations. Fables produce shorter, morality-focused tales with clear lessons. Historical fiction places characters in specific time periods — specify the era in the setting field for best results.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Story Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Rivera teaches 3rd grade and is doing an SEL unit on perseverance. She wants a short realistic fiction story she can read aloud Monday morning — characters her students can relate to, a challenge they face, and a resolution that shows what pushing through difficulty looks like.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade Level: Grade 3.</li>
          <li>Genre: Realistic Fiction.</li>
          <li>Theme: "Perseverance — not giving up when something is hard."</li>
          <li>Characters: "A 9-year-old boy who wants to learn to ride a bike but keeps falling off."</li>
          <li>Setting: "A neighborhood street on a warm Saturday morning."</li>
          <li>Length: Short (300–400 words).</li>
          <li>She generates the story, reads it through, and finds it handles the theme well — the climax (the boy's final attempt after three falls) is emotionally resonant without being heavy-handed.</li>
          <li>She adjusts one line where the character's older sister gives advice to match how the character would naturally talk, then copies the story into her read-aloud materials for Monday.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Give your characters specific, concrete details</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "A student" produces a generic character. "A curious 10-year-old girl who loves drawing but struggles with reading" produces a character with an internal life. Specific character details create stories with emotional depth that students connect to more naturally.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">State the theme as a complete idea, not just a word</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          "Honesty" produces a story that demonstrates honesty. "Honesty — specifically about telling the truth even when you're afraid of the consequences" produces a story that engages with a specific moral dilemma. Longer theme statements yield more purposeful narratives.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use as mentor texts for student writing</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Generated stories are original content — there are no copyright concerns when using them as classroom writing models. Generate stories with specific structural elements (strong opening hooks, dialogue, descriptive language) that you want students to study and imitate in their own writing.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI stories can lack the nuance, cultural specificity, and emotional complexity of skilled human authors — particularly for stories exploring cultural identity, trauma, or sensitive historical events. For these topics, AI can generate a usable first draft, but careful teacher review and often significant revision is required. For leveled informational passages paired with comprehension questions, the <Link href="/reading-comprehension-creator" className="text-brand-700 underline">Reading Comprehension Creator</Link> generates nonfiction reading activities at any grade level.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Character voice consistency across longer stories can be uneven. The tool works best for short and medium length stories. For extended narratives or chapter book content, generate individual scenes and connect them yourself. To support students&apos; engagement with the story&apos;s vocabulary, pair this with the <Link href="/vocabulary-list-builder" className="text-brand-700 underline">Vocabulary List Builder</Link> to generate a targeted word list with definitions and usage sentences.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Story inputs contain no student data. Do not include real student names or identifying information in character descriptions — use fictional characters only. GogyAI stores no personal information; your inputs are used solely to generate your story.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Generated stories are original content and carry no copyright restrictions for classroom use. For any student-facing materials, review for age-appropriateness before distributing. Explore <Link href="/" className="text-brand-700 underline">the full GogyAI toolkit</Link> — 30 free tools for literacy, lesson planning, assessment, and classroom management.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I generate a story for my classroom using AI?', a: 'Enter grade level, genre, theme, character description, setting, and length. The AI generates an original story with a complete narrative arc and discussion questions at the end.' },
            { q: 'Are AI-generated stories appropriate for all grade levels?', a: 'Yes. The tool adjusts vocabulary and narrative complexity to match the specified grade. Specifying the grade carefully — Grade 2 vs. Grade 8 — produces substantially different stories even on the same theme.' },
            { q: 'Can I use AI stories as mentor texts for student writing?', a: 'Yes — this is one of the strongest uses. Generate stories with specific structural or literary features you want students to study. The stories are original, so there are no copyright concerns.' },
            { q: 'Can the AI generate stories for social-emotional learning topics?', a: 'Yes. Enter your SEL theme in the theme field — perseverance, empathy, conflict resolution. The AI weaves it into the narrative naturally. Fable and realistic fiction genres work best for SEL content.' },
            { q: 'Are AI classroom stories copyright-free?', a: 'Yes. Every generated story is original content created for your inputs. It is not derived from published works. You may use it freely in your classroom.' },
            { q: 'How can I use AI stories for diverse representation?', a: 'Specify character backgrounds and cultural settings in the character and setting fields. Review the output for cultural accuracy — the AI incorporates details well but can miss nuances that require lived experience.' },
            { q: 'Is the GogyAI classroom story generator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'vocabulary-list-builder', name: 'Vocabulary List Builder' }}
        next={{ slug: 'text-simplifier', name: 'Text Simplifier' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
