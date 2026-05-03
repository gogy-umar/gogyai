import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Student Interest Survey Creator — Free AI Tool for Teachers',
  description: 'Generate complete student interest surveys for beginning of year, learning styles, or goal setting. Free AI survey creator for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/student-interest-survey-creator' },
}

const FIELDS = [
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 6' },
  {
    name: 'purpose',
    label: 'Survey Purpose',
    type: 'select',
    options: [
      { value: 'beginning of year get-to-know-you', label: 'Beginning of Year / Get-to-Know-You' },
      { value: 'learning styles and preferences', label: 'Learning Styles and Preferences' },
      { value: 'goal setting and motivation', label: 'Goal Setting and Motivation' },
      { value: 'reading interests', label: 'Reading Interests and Habits' },
    ],
    default: 'beginning of year get-to-know-you',
  },
  { name: 'num_questions', label: 'Number of Questions', type: 'number', placeholder: '10', default: '10' },
  {
    name: 'format',
    label: 'Question Format',
    type: 'select',
    options: [
      { value: 'mixed', label: 'Mixed (open-ended + multiple choice)' },
      { value: 'open-ended', label: 'Open-Ended only' },
      { value: 'multiple choice', label: 'Multiple Choice only' },
    ],
    default: 'mixed',
  },
]

const PROMPT = `Create a complete student interest survey for the following:
Grade Level: {grade}
Purpose: {purpose}
Number of Questions: {num_questions}
Question Format: {format}

Requirements:
1. Survey title and a brief, student-friendly introduction (2-3 sentences) explaining why the survey matters
2. {num_questions} questions appropriate for {grade} students, formatted as {format}
   - Questions should feel conversational, not clinical
   - Avoid questions that could feel intrusive or require sharing personal difficulties
   - Focus on interests, preferences, strengths, and aspirations
   - For {purpose}: tailor questions specifically to that goal
3. A closing thank-you message from the teacher
4. After the survey: 3-4 teacher tips on how to use the survey responses to inform your teaching

Make the survey engaging, age-appropriate, and something students would actually enjoy completing.`

const RELATED = [
  { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator', desc: 'Create classroom expectations alongside the community-building work of a survey.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Use survey insights to write more personalized student feedback.' },
  { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner', desc: 'Apply learning style information from surveys to differentiate instruction.' },
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Incorporate student interests from surveys into engaging lesson plans.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Student Interest Survey Creator — GogyAI',
    url: 'https://gogyai.com/student-interest-survey-creator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Student Interest Survey Creator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/student-interest-survey-creator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Student Interest Survey Creator: Build Relationships That Drive Learning',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/student-interest-survey-creator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What questions should I ask on a student interest survey?', acceptedAnswer: { '@type': 'Answer', text: 'Effective interest surveys ask about hobbies, learning preferences, goals, strengths, how students like to be recognized, what makes school hard or easy, and what they want their teacher to know. Avoid clinical questions about home life or difficulties — keep the focus on strengths, interests, and preferences.' } },
      { '@type': 'Question', name: 'When should teachers use a student interest survey?', acceptedAnswer: { '@type': 'Answer', text: 'Most teachers use interest surveys in the first week of school to build early relationships. Additional surveys at semester breaks, after a long absence, or when transitioning to a new unit (reading interests before a book choice unit) add value throughout the year.' } },
      { '@type': 'Question', name: 'How do I use student interest survey results in my teaching?', acceptedAnswer: { '@type': 'Answer', text: 'Reference interests when choosing read-aloud books, creating examples in lessons, assigning choice projects, forming interest-based groups, or writing personalized feedback. The generated survey includes teacher tips for using responses — reading them before distributing the survey helps you plan what to do with the data.' } },
      { '@type': 'Question', name: 'Are student interest surveys appropriate for high school?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The questions shift in tone — more autonomy-focused, more goal-oriented, less about favorite colors and more about academic identity and aspirations. Specifying your grade level adjusts the survey accordingly. High school students often appreciate being asked these questions sincerely.' } },
      { '@type': 'Question', name: 'How is a student interest survey different from a learning styles inventory?', acceptedAnswer: { '@type': 'Answer', text: 'A general interest survey covers hobbies, relationships, and preferences broadly. A learning styles survey focuses specifically on how students prefer to receive and process information. Select the "Learning Styles and Preferences" purpose for a survey oriented toward instructional planning.' } },
      { '@type': 'Question', name: 'Can I give an interest survey online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Copy the generated questions into Google Forms, Microsoft Forms, or a similar tool for online administration. Online surveys are particularly useful for getting responses before the school year starts — you can analyze them before your students walk in on day one.' } },
      { '@type': 'Question', name: 'Is the GogyAI student interest survey creator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function StudentInterestSurveyCreatorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Student Interest Survey Creator</h1>
        <p className="text-slate-500 mb-6">Generate a complete student interest survey — with questions students enjoy answering and tips on using the results.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="student-interest-survey-creator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Student Interest Survey Creator: Build Relationships That Drive Learning</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI student interest survey creator to generate age-appropriate surveys for relationship building, learning style discovery, and goal setting.</li>
            <li>K-12 teachers starting a new school year or semester, and teachers wanting to build stronger student-teacher relationships, will benefit most.</li>
            <li>The tool generates complete surveys — title, introduction, questions, closing — with teacher tips on using the responses in your teaching practice.</li>
            <li>Student interest surveys are most powerful when teachers visibly act on what they learn — referencing interests in lessons, book choices, and examples.</li>
            <li>Keep surveys focused on strengths and preferences; avoid questions that could feel intrusive about home life or personal difficulties.</li>
            <li>Do not collect or store sensitive student data in any external tool — use paper or your district's approved digital platform.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Students learn more from teachers they feel genuinely know them. That relationship doesn't build itself — it requires intentional effort, starting before you know who's in your room on day one. An AI student interest survey creator generates the questions that start that relationship, at the right level for your grade, in minutes.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what makes student interest surveys effective, how to use the tool for different purposes, and — critically — how to use the data you collect to change what happens in your classroom.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Student Interest Survey Creator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI student interest survey creator generates a complete, ready-to-distribute survey — title, student introduction, age-appropriate questions, closing message — along with teacher tips on how to use the responses in your instruction. It adjusts tone, vocabulary, and question focus to the specific grade level and purpose you choose.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These tools work because student interest survey design follows predictable principles: questions should feel conversational rather than clinical, focus on strengths rather than deficits, and cover the categories of information most useful for instructional planning. AI applies these principles automatically across any grade level and purpose.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Student Interest Surveys Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on student-teacher relationships and motivation consistently points to the same finding: students who feel known and valued by their teachers show higher engagement, better attendance, and stronger academic performance. Interest surveys are not a soft nicety — they are a documented high-impact practice when the information gathered is actually used.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For differentiated instruction specifically, interest data is operationally useful. Knowing that a student loves basketball means you can frame a math problem in that context. Knowing a student reads fantasy novels suggests a reading choice during independent reading. Interest surveys give you the raw material for hundreds of small personalization decisions throughout the year.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You select the grade level, survey purpose, number of questions, and format (open-ended, multiple choice, or mixed). The AI generates a complete survey with a student-friendly introduction, questions calibrated to your specifications, and a closing message. Teacher implementation tips follow.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Survey purpose selection significantly shapes the output. Beginning-of-year surveys cover broad interests, social preferences, and personal fun facts. Learning styles surveys focus on how students prefer to receive and process information. Goal-setting surveys ask about academic aspirations, challenges, and support needs. Reading interest surveys target book preferences for literacy planning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Survey Creator in Your Classroom</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Okonkwo is a new 6th-grade ELA teacher. He wants to distribute an interest survey in the first week of school — 10 mixed questions that help him understand his students' reading habits, interests, and what they want him to know about them as learners.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Grade Level: Grade 6.</li>
          <li>Purpose: Beginning of Year / Get-to-Know-You.</li>
          <li>Number of Questions: 10.</li>
          <li>Format: Mixed.</li>
          <li>He generates the survey and reads through it.</li>
          <li>He adjusts one question — "What's your favorite school subject?" — to "What's one school subject where you feel most confident?" (more strength-based and specific).</li>
          <li>He copies the survey into Google Forms and sends the link home with his back-to-school email so students can complete it before the first day.</li>
          <li>On day one, he already knows several students' sports, favorite books, and what they find hardest about school — and references three of those things by name in his introduction.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always follow up on what you learn</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A survey that teachers administer but never reference tells students their answers didn't matter. The most powerful thing you can do after collecting surveys is publicly reference what you learned — "I know several of you love soccer, so today's word problem is about goal averages" — within the first two weeks. Students notice.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Keep it brief enough to feel manageable</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          10 questions is usually the right ceiling for a paper survey. More than 15 questions and students start rushing or disengaging before the end. If you want more data, run shorter surveys at different points in the year rather than one long survey at the start.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI-generated surveys ask questions that work for most students at the specified grade level, but cannot account for your specific classroom culture, recent school events, or sensitive topics that may not be appropriate given your student population. Review all questions before distributing with cultural responsiveness in mind, and consider using the <Link href="/seating-chart-suggestion-tool" className="text-brand-700 hover:underline">Seating Chart Suggestion Tool</Link> to put what you learn about student social connections to work in your classroom arrangement.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Surveys collect information but don't analyze it. The teacher's observation and relationship-building work is still required to understand what the answers actually mean for individual students — the <Link href="/classroom-story-generator" className="text-brand-700 hover:underline">Classroom Story Generator</Link> is one way to apply interest data directly in your instruction.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This tool generates survey questions — it does not collect or store any student responses. Distribute the generated survey on paper or through your district's approved digital platform (Google Workspace for Education, Microsoft 365, etc.). Never enter student response data into any external AI tool.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Student interest data — particularly responses about home life, learning challenges, or personal preferences — should be treated as sensitive. Store paper surveys securely and share digital responses only with authorized personnel. Under FERPA, this information becomes part of a student's education record when kept in a teacher's files. Visit <Link href="/" className="text-brand-700 hover:underline">GogyAI&apos;s full collection of free tools</Link> to explore more ways to build student-teacher connections.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What questions should I ask on a student interest survey?', a: 'Ask about hobbies, learning preferences, goals, strengths, how students like to be recognized, and what they want their teacher to know. Avoid clinical questions about home difficulties — keep the focus on strengths and preferences.' },
            { q: 'When should teachers use a student interest survey?', a: 'Most effectively in the first week of school. Additional surveys at semester breaks or before specific units (reading interests before book choice) add value throughout the year.' },
            { q: 'How do I use student interest survey results in my teaching?', a: 'Reference interests when choosing examples, read-alouds, and projects. Use learning style data to vary instruction. The generated survey includes teacher tips for applying responses — read them before distributing.' },
            { q: 'Are student interest surveys appropriate for high school?', a: 'Yes. The tool shifts tone and focus for secondary grades — more goal-oriented and autonomy-focused. High school students often appreciate being asked sincere questions about their academic identity and aspirations.' },
            { q: 'How is an interest survey different from a learning styles inventory?', a: 'An interest survey covers broad hobbies and preferences. A learning styles survey focuses specifically on how students prefer to receive and process information. Select the "Learning Styles and Preferences" purpose for an instruction-focused survey.' },
            { q: 'Can I give an interest survey online?', a: 'Yes. Copy the generated questions into Google Forms or Microsoft Forms. Online surveys are useful for sending home before the year starts — you can analyze responses before students arrive on day one.' },
            { q: 'Is the GogyAI student interest survey creator free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'seating-chart-suggestion-tool', name: 'Seating Chart Suggestion Tool' }}
        next={{ slug: 'weekly-schedule-planner', name: 'Weekly Schedule Planner' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
