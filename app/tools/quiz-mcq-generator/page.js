import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Quiz & MCQ Generator — Free AI Tool for Teachers',
  description: 'Generate complete quizzes with multiple choice questions, true/false, and answer keys. Free AI quiz generator for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/quiz-mcq-generator' },
}

const FIELDS = [
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. 8th Grade Science' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 8' },
  { name: 'topic', label: 'Topic', type: 'text', placeholder: 'e.g. The water cycle', full: true },
  { name: 'num_questions', label: 'Number of Questions', type: 'number', placeholder: '10', default: '10' },
  {
    name: 'difficulty',
    label: 'Difficulty',
    type: 'select',
    options: [
      { value: 'easy', label: 'Easy' },
      { value: 'medium', label: 'Medium' },
      { value: 'hard', label: 'Hard' },
      { value: 'mixed', label: 'Mixed (recommended)' },
    ],
    default: 'mixed',
  },
  {
    name: 'question_type',
    label: 'Question Type',
    type: 'select',
    options: [
      { value: 'mcq', label: 'Multiple Choice (MCQ)' },
      { value: 'true-false', label: 'True / False' },
      { value: 'mixed', label: 'Mixed (MCQ + True/False)' },
    ],
    default: 'mcq',
  },
]

const PROMPT = `Create a complete quiz on the following:
Subject: {subject}
Grade Level: {grade}
Topic: {topic}
Number of Questions: {num_questions}
Difficulty: {difficulty}
Question Type: {question_type}

Format:
- For MCQ questions: provide the question and four labeled answer options (A, B, C, D)
- For True/False questions: provide the statement clearly
- If difficulty is "mixed," distribute questions across easy, medium, and hard
- Number all questions sequentially

After all questions, provide a clearly labeled ANSWER KEY with the correct answer for each question number.

Make questions accurate, unambiguous, and appropriate for the grade level. Avoid trick questions unless the difficulty is "hard."`

const RELATED = [
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build a rubric to score extended response questions alongside your quiz.' },
  { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator', desc: 'Generate quick formative checks for the end of any lesson.' },
  { name: "Bloom's Taxonomy Question Generator", slug: 'blooms-taxonomy-question-generator', desc: "Write questions at specific Bloom's cognitive levels for deeper assessment." },
  { name: 'Worksheet Generator', slug: 'worksheet-generator', desc: 'Create practice worksheets that reinforce the same quiz content.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Quiz & MCQ Generator — GogyAI',
    url: 'https://gogyai.com/quiz-mcq-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Quiz & MCQ Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/quiz-mcq-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Quiz & MCQ Generator for Teachers: The Complete Guide',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/quiz-mcq-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I generate a quiz with an AI tool?', acceptedAnswer: { '@type': 'Answer', text: 'Enter your subject, grade level, topic, number of questions, difficulty level, and question type. The AI generates a complete quiz with all questions and a labeled answer key. Review the output for accuracy before distributing to students.' } },
      { '@type': 'Question', name: 'Are AI-generated quiz questions accurate?', acceptedAnswer: { '@type': 'Answer', text: 'AI-generated questions are generally accurate for well-established topics at standard grade levels. Accuracy decreases for highly specialized, recent, or nuanced content. Always review each question against your teaching materials before use — treat the output as a first draft, not a final assessment.' } },
      { '@type': 'Question', name: 'Can I generate True/False questions as well as MCQ?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select "True / False" or "Mixed" in the question type field. The Mixed option generates a blend of multiple choice and true/false questions, which is useful for quizzes that test both recall and comprehension.' } },
      { '@type': 'Question', name: 'How do I adjust the difficulty of generated quiz questions?', acceptedAnswer: { '@type': 'Answer', text: 'Select the difficulty level — easy, medium, hard, or mixed. Mixed distributes questions across all three levels, which is useful for a diagnostic quiz or a quiz that stretches the full class range. For a review quiz, easy or mixed tends to work best.' } },
      { '@type': 'Question', name: 'Can AI-generated quizzes be used for summative assessments?', acceptedAnswer: { '@type': 'Answer', text: 'AI-generated quizzes are most appropriate as formative checks, practice tests, or review quizzes. For high-stakes summative assessments, use the AI output as a starting framework and carefully review and rewrite questions to ensure alignment to your specific standards and taught content.' } },
      { '@type': 'Question', name: 'How do I avoid questions that are too easy or all the same?', acceptedAnswer: { '@type': 'Answer', text: 'Select "Mixed" difficulty and be specific in the topic field. Instead of "World War II," enter "Causes of World War II — focusing on the Treaty of Versailles and the rise of fascism." Specific topics produce questions with genuine variation in what students must recall and reason about.' } },
      { '@type': 'Question', name: 'Can I use this tool to generate practice tests for standardized exams?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with caution. AI can generate MCQ practice questions in the format of standardized tests. However, the item quality will not match professionally validated test items. Use AI-generated practice questions as supplementary preparation, not as official test preparation materials.' } },
      { '@type': 'Question', name: 'Is the GogyAI quiz generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function QuizMcqGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Quiz &amp; MCQ Generator</h1>
        <p className="text-slate-600 mb-6">Generate a complete quiz — multiple choice, true/false, or mixed — with an answer key, in seconds.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="quiz-mcq-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Quiz &amp; MCQ Generator for Teachers: The Complete Guide</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers how AI quiz generators work and how to use them effectively for formative and practice assessment.</li>
            <li>K-12 teachers who need quick, accurate quizzes for review, formative checks, or practice testing will benefit most.</li>
            <li>An AI quiz generator creates a complete set of MCQ or true/false questions with a labeled answer key from your topic and settings.</li>
            <li>Quiz generation that once took 30-45 minutes can be completed in under 5 minutes with AI.</li>
            <li>Always review AI-generated questions for accuracy against your teaching materials before distributing to students.</li>
            <li>No student names or identifying information should be entered into this tool.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Writing a 10-question multiple choice quiz is one of those tasks that sounds quick but rarely is. Each question requires a clear stem, one unambiguously correct answer, and three plausible distractors — all while avoiding common item-writing errors like double negatives, trick phrasing, or distractors that are obviously wrong. For a unit review quiz, that&apos;s 40 answer options to write before you&apos;ve even formatted the document. An AI quiz generator handles the construction; you handle the review.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide explains what AI quiz generators do well, where to be cautious, and how to get the most useful output from this tool.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Quiz Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI quiz generator takes your subject, grade level, topic, and settings — number of questions, difficulty, and type — and produces a complete, formatted quiz with an answer key. It handles every element: question stems, answer options, distractor quality, and answer labeling. The output is ready to copy into your quiz platform or print directly.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The difference between a generic AI quiz and a useful one comes down to topic specificity and your review. AI is excellent at generating structurally sound questions; the teacher ensures those questions align with what was actually taught.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why AI Quiz Generation Matters for Teachers</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Assessment creation is consistently underestimated in the teaching workload. A quality 10-question MCQ quiz — with well-written distractors, appropriate difficulty spread, and a clean answer key — takes an experienced teacher 30 to 45 minutes to write carefully. For teachers who quiz regularly (weekly review quizzes, unit checks, practice tests), that time compounds quickly across a school year.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI quiz generators compress the drafting phase to under five minutes. The remaining teacher time is spent reviewing, not building from scratch — which is a fundamentally different and more productive use of expertise.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You specify the subject, grade level, topic, number of questions, difficulty, and question type. The AI generates the complete quiz formatted with numbered questions, labeled answer options (A, B, C, D for MCQ), and a clearly labeled answer key at the end. Mixed difficulty distributes questions across easy, medium, and hard — useful for quizzes that serve the full range of your class.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The mixed question type option combines multiple choice and true/false, which is useful for keeping quiz formats engaging and varying the cognitive demand — true/false tests recognition while MCQ tests discrimination among options.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Quiz Generator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Adeyemi teaches 8th-grade Earth Science and needs a 10-question review quiz before his unit test on the water cycle. He wants a mix of easy and medium questions, all multiple choice, to help students identify gaps before the summative assessment.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Subject:</strong> &quot;8th Grade Earth Science.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 8.&quot;</li>
          <li><strong>Topic:</strong> &quot;The water cycle — evaporation, condensation, precipitation, and runoff.&quot;</li>
          <li><strong>Number of Questions:</strong> 10.</li>
          <li><strong>Difficulty:</strong> Mixed.</li>
          <li><strong>Question Type:</strong> Multiple Choice (MCQ).</li>
          <li>He clicks <strong>Generate</strong> and receives a complete 10-question quiz with labeled options and an answer key in about 10 seconds.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          He reviews each question against his teaching materials, replaces one question that uses terminology he hasn&apos;t introduced yet, adjusts one distractor that is too obviously wrong, and posts the quiz to his LMS. Total time: 8 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Narrow the topic to match what was taught</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          &quot;Biology&quot; generates generic questions. &quot;Cell division — mitosis phases, specifically what was covered in the first two class sessions&quot; generates questions directly aligned to your taught content. The more you describe the scope of your topic, the more useful the questions.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Review distractors critically</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI distractors are sometimes too obviously wrong or, occasionally, accidentally ambiguous. Read each set of four options as a student would — if the wrong answers are immediately dismissible, the question isn&apos;t testing much. Strengthen weak distractors before use.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Use mixed difficulty for diagnostic value</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A quiz that only contains hard questions doesn&apos;t tell you much about where students are — everyone struggles. Mixed difficulty lets you see who has mastered the basics, who is approaching grade-level mastery, and who is ready for extension.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated quizzes reflect general curriculum knowledge, not your specific unit&apos;s taught content. Questions may cover aspects of a topic you haven&apos;t reached yet, or miss the specific angle you emphasized in class. Always review against your lesson materials before use.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool does not generate questions with images, diagrams, or data tables. For science assessments that require graph interpretation or labeled diagrams, you&apos;ll need to add those elements manually. The AI provides the question text and answer structure; visuals are your responsibility. For quick end-of-lesson checks that don&apos;t require a full quiz structure, the <Link href="/exit-ticket-creator" className="text-brand-700 underline">Exit Ticket Creator</Link> generates targeted formative prompts students can answer in three to five minutes.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI quiz questions are not psychometrically validated items. They are not suitable as sole instruments for high-stakes decisions. Use them as formative checks, review tools, and practice materials. When you need a scoring guide for open-ended assessments rather than a quiz, the <Link href="/rubric-builder" className="text-brand-700 underline">Rubric Builder</Link> generates analytic rubrics with criteria and performance descriptors for any assignment type.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          No student data is needed to generate a quiz. Enter only your subject, topic, and settings. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Visit <Link href="/" className="text-brand-700 underline">GogyAI&apos;s suite of free educator tools</Link> to find all 30 assessment, planning, and communication tools available free to teachers.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'How do I generate a quiz with an AI tool?', a: 'Enter your subject, grade level, topic, number of questions, difficulty, and question type. The AI generates a complete quiz with an answer key. Review for accuracy against your teaching materials before distributing.' },
            { q: 'Are AI-generated quiz questions accurate?', a: 'Generally accurate for well-established topics at standard grade levels. Accuracy decreases for highly specialized or recent content. Always review each question before use — treat output as a first draft.' },
            { q: 'Can I generate True/False questions?', a: 'Yes. Select "True / False" or "Mixed" in the question type field. The Mixed option generates a blend of MCQ and true/false questions, testing both recognition and discrimination.' },
            { q: 'How do I adjust the difficulty of generated questions?', a: 'Select the difficulty level — easy, medium, hard, or mixed. Mixed distributes questions across all three levels, useful for diagnostic quizzes or stretching the full class range.' },
            { q: 'Can AI-generated quizzes be used for summative assessments?', a: 'Best used as formative checks, practice tests, or review quizzes. For high-stakes summative assessments, use AI output as a starting framework and carefully review and rewrite questions for alignment to your standards.' },
            { q: 'How do I avoid questions that are too easy or all the same?', a: 'Select "Mixed" difficulty and be specific in the topic field. Specific topics produce questions with genuine variation rather than repeated surface-level recall.' },
            { q: 'Can I use this for standardized exam practice?', a: 'Yes, with caution. AI can generate MCQ practice questions in standardized formats, but item quality will not match professionally validated test items. Use as supplementary preparation only.' },
            { q: 'Is the GogyAI quiz generator free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'cross-curricular-activity-generator', name: 'Cross-Curricular Activity Generator' }}
        next={{ slug: 'rubric-builder', name: 'Rubric Builder' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
