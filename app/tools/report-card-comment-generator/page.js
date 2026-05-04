import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Report Card Comment Generator — Free AI Tool for Teachers',
  description: 'Generate professional report card comments in short, medium, and detailed lengths. Free AI tool for K-12 teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/report-card-comment-generator' },
}

const FIELDS = [
  {
    name: 'performance',
    label: 'Performance Level',
    type: 'select',
    options: [
      { value: 'excellent', label: 'Excellent / Outstanding' },
      { value: 'good', label: 'Good / Above Average' },
      { value: 'satisfactory', label: 'Satisfactory / Meeting Expectations' },
      { value: 'needs-improvement', label: 'Needs Improvement / Below Grade Level' },
    ],
    default: 'good',
  },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Mathematics' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 3' },
  { name: 'strength', label: 'Key Strength', type: 'text', placeholder: 'e.g. Strong problem-solving, enthusiastic participation' },
  { name: 'growth_area', label: 'Growth Area', type: 'text', placeholder: 'e.g. Needs to show work when solving multi-step problems' },
  {
    name: 'tone',
    label: 'Tone',
    type: 'select',
    options: [
      { value: 'formal', label: 'Formal' },
      { value: 'warm', label: 'Warm & Encouraging' },
    ],
    default: 'warm',
  },
]

const PROMPT = `Generate 3 report card comment options for the following student profile:
Performance Level: {performance}
Subject: {subject}
Grade Level: {grade}
Key Strength: {strength}
Growth Area: {growth_area}
Tone: {tone}

Provide three comment options:

OPTION 1 — SHORT (1-2 sentences): Suitable for report cards with tight character limits. Include one strength and one growth area.

OPTION 2 — MEDIUM (3-4 sentences): Suitable for standard report cards. Include performance context, strength, growth area, and a forward-looking note.

OPTION 3 — DETAILED (5-7 sentences): Suitable for report cards with space for extended comments. Include specific skill observations, learning behaviors, strength, growth area, suggested home support, and an encouraging close.

Guidelines:
- Write in third person (e.g., "[Student] demonstrates...")
- Use [Student] as a placeholder for the student's name
- Be specific to the subject and grade level
- For "needs-improvement" performance, maintain a constructive and encouraging tone — focus on growth trajectory and specific support strategies
- Avoid generic filler phrases; make each sentence informative for parents`

const RELATED = [
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Follow up report cards with a personalized parent email.' },
  { name: 'Student Feedback Writer', slug: 'student-feedback-writer', desc: 'Write student-facing feedback to accompany report card grades.' },
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write SMART goals for students with IEPs alongside their report comments.' },
  { name: 'Newsletter Draft Generator', slug: 'newsletter-draft-generator', desc: 'Draft a classroom newsletter to send home with report cards.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Report Card Comment Generator — GogyAI',
    url: 'https://gogyai.com/report-card-comment-generator',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Report Card Comment Generator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/report-card-comment-generator',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Report Card Comment Generator: Write Meaningful, Professional Comments Faster',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/report-card-comment-generator',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should a good report card comment include?', acceptedAnswer: { '@type': 'Answer', text: "A strong report card comment includes: the student's current performance level in the subject; a specific strength or skill that is developing well; an area for growth with a constructive framing; and ideally a forward-looking note or suggestion for home support. The best comments are specific to the student — not generic phrases that could apply to any child." } },
      { '@type': 'Question', name: 'How long should a report card comment be?', acceptedAnswer: { '@type': 'Answer', text: 'Comment length depends on your school\'s report card format. Short comments (1-2 sentences) work within strict character limits. Medium comments (3-4 sentences) are standard. Detailed comments (5-7 sentences) work in open-ended narrative sections. This generator produces all three lengths so you can choose the right fit.' } },
      { '@type': 'Question', name: 'How do I write a report card comment for a struggling student?', acceptedAnswer: { '@type': 'Answer', text: 'Lead with what the student is doing — not just what they\'re failing at. Even a struggling student has something genuine to note positively: effort, participation, curiosity, improvement in one area. Then describe the growth area constructively: "Continued practice with..." rather than "Has not mastered..." Maintain a growth-oriented, partnership tone throughout.' } },
      { '@type': 'Question', name: 'Should report card comments mention specific grades or test scores?', acceptedAnswer: { '@type': 'Answer', text: 'Generally no — grades and scores are already visible on the report card. Comments should add context and narrative that numbers cannot convey: learning behaviors, specific skills, growth trajectory, and home support suggestions. Comments that simply restate the grade (e.g., "received a B in math") add no informational value.' } },
      { '@type': 'Question', name: 'Can I use the same comment template for multiple students?', acceptedAnswer: { '@type': 'Answer', text: 'Using a common structure is fine — specificity comes from the strength and growth area fields you enter for each student. Two students at the same performance level in the same subject will generate different comments based on their individual strengths and growth areas. The goal is comments that are recognizable as belonging to a specific child.' } },
      { '@type': 'Question', name: 'How do I avoid generic report card comment language?', acceptedAnswer: { '@type': 'Answer', text: 'Specificity is the antidote to generic language. Enter a specific strength ("strong mental math skills, particularly with multiplication") rather than a generic one ("good at math"). The AI uses your input to generate specific language — vague inputs produce vague comments.' } },
      { '@type': 'Question', name: 'Is it appropriate to use AI for report card comments?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Using AI to draft report card comments is a legitimate professional practice, comparable to using a comment bank. The teacher reviews, personalizes, and takes professional ownership of every comment before it goes home. AI compresses drafting time; the teacher ensures each comment is accurate, fair, and appropriate for the individual student." } },
      { '@type': 'Question', name: 'Is the GogyAI report card comment generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or subscription required.' } },
    ],
  },
}

export default function ReportCardCommentGeneratorPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Report Card Comment Generator</h1>
        <p className="text-slate-600 mb-6">Generate three comment options — short, medium, and detailed — tailored to each student&apos;s performance, strength, and growth area.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="report-card-comment-generator" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Report Card Comment Generator: Write Meaningful, Professional Comments Faster</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide covers what makes report card comments effective and how AI can help you write them faster without sacrificing quality.</li>
            <li>Teachers at any grade level who write report card comments — especially when managing 25+ students across multiple subjects — will benefit most.</li>
            <li>The generator produces three comment lengths (short, medium, detailed) for each student profile, so you choose the format that fits your report card.</li>
            <li>Report card comments that take 5–8 minutes per student can be drafted in under 90 seconds with AI.</li>
            <li>Always personalize with the student&apos;s name and review for accuracy before finalizing.</li>
            <li>Do not enter student names into this tool — use [Student] placeholder descriptions only.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Report card season is among the highest-stress periods in the teaching year. A typical elementary teacher with 28 students writing comments in three subjects needs 84 thoughtful, specific, non-repetitive comments. A secondary teacher with 150 students faces an even larger undertaking. The comments matter — they are often the primary written communication a parent receives about their child&apos;s school year — yet the volume makes genuine thoughtfulness difficult under time pressure.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI report card comment generator compresses the drafting phase dramatically, producing three length options from your specific inputs about each student&apos;s strength and growth area. Your professional knowledge of the student shapes the inputs; the AI handles the construction.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Report Card Comment Generator?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI report card comment generator takes a student&apos;s performance level, subject, grade, key strength, growth area, and preferred tone, and produces three comment options — short (1-2 sentences), medium (3-4 sentences), and detailed (5-7 sentences). Each version is calibrated to its length: the short comment conveys one strength and one growth area; the detailed comment adds learning behaviors, home support suggestions, and a motivating close.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The three-option structure is practical because report card formats vary. Short comments fit systems with character limits. Medium comments suit standard printed report cards. Detailed comments work in systems with open narrative sections. Teachers choose the format that matches their system without regenerating.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Report Card Comments Matter</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Report card comments are often the only written narrative communication many families receive about their child&apos;s academic progress and learning behaviors. Grades communicate performance level; comments communicate what that grade means in terms of specific skills, growth, and next steps. A parent who reads a meaningful comment gains information they can act on at home; a parent who reads a generic comment gains nothing beyond what the grade already told them.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Research on family engagement consistently shows that specific, actionable communication — including report card comments that suggest home support strategies — strengthens the home-school partnership and positively affects student outcomes. The quality of the comment is not cosmetic; it has functional consequences for student learning and family engagement.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Select the student&apos;s performance level, enter the subject and grade, describe the key strength and growth area in your own words, and choose a tone. The AI generates three comment options using your specific inputs. The strength and growth area fields are the most important — the more specific they are, the more specific and useful the comments.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For needs-improvement performance levels, the AI maintains a constructive, growth-oriented tone throughout — describing what the student is working toward and what will support their growth, rather than cataloging deficits. This tone is both more professional and more useful for families.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Report Card Comment Generator</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ms. Brown teaches 3rd-grade and is writing report card comments for mathematics. She has a student who is performing well overall but needs to develop her written explanation of problem-solving steps — a skill her class just started working on this term.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li><strong>Performance Level:</strong> Good / Above Average.</li>
          <li><strong>Subject:</strong> &quot;Mathematics.&quot;</li>
          <li><strong>Grade Level:</strong> &quot;Grade 3.&quot;</li>
          <li><strong>Key Strength:</strong> &quot;Strong mental math and enthusiastic participation in group problem-solving.&quot;</li>
          <li><strong>Growth Area:</strong> &quot;Developing the ability to explain her problem-solving process in writing — currently solves correctly but struggles to document steps.&quot;</li>
          <li><strong>Tone:</strong> Warm &amp; Encouraging.</li>
          <li>She clicks <strong>Generate</strong> and receives three comment options immediately.</li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-4">
          She selects the medium option, replaces [Student] with the student&apos;s first name, and adds one sentence about the student&apos;s specific enthusiasm for geometry — something she noticed this term. Total time: 2 minutes per student. Across 28 students in three subjects, she saves over 10 hours compared to writing from scratch.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Enter specific strengths, not general ones</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          &quot;Good at math&quot; produces generic comments. &quot;Strong mental math with multiplication facts, particularly enjoys challenge problems&quot; produces specific, informative comments that parents recognize as describing their child. The strength field is where your knowledge of the student makes the biggest difference.
        </p>
        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Frame growth areas constructively before entering</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Enter growth areas in constructive language: &quot;developing written explanation of mathematical reasoning&quot; rather than &quot;can&apos;t explain her work.&quot; The AI amplifies the language you provide — constructive input produces constructive output.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          AI report card comments are built from your inputs, not from direct observation of the student. The output quality depends entirely on the quality and specificity of the strength and growth area descriptions you enter. If you enter vague inputs, review the output critically and add specificity manually. For communicating about the same student progress directly with families via email, the <Link href="/parent-email-writer" className="text-brand-700 underline">Parent Email Writer</Link> generates professional messages for any communication purpose.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool also does not have knowledge of your school&apos;s grading language conventions, required phrases, or prohibited language. Some districts have specific comment bank language or forbidden terms (e.g., prohibiting the word &quot;lazy&quot;). Review generated comments against your school&apos;s communication guidelines before use. For feedback that goes directly to students rather than families, the <Link href="/student-feedback-writer" className="text-brand-700 underline">Student Feedback Writer</Link> generates structured, student-facing comments on any assignment type.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Do not enter student names into this tool. Use the [Student] placeholder system — fill in the name in your word processor or LMS after generating. FERPA protections apply to report card records. GogyAI stores no personal information. Inputs are used only during your session and are not retained. Visit <Link href="/" className="text-brand-700 underline">GogyAI&apos;s full collection of free tools</Link> for all 30 communication, assessment, and planning tools available free to teachers.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What should a good report card comment include?', a: "A good report card comment includes the student's current performance level, a specific strength, an area for growth framed constructively, and ideally a forward-looking note or home support suggestion. The best comments are specific — not generic phrases that could apply to any student." },
            { q: 'How long should a report card comment be?', a: 'Comment length depends on your school\'s format. Short (1-2 sentences) for tight character limits, medium (3-4 sentences) for standard cards, detailed (5-7 sentences) for narrative sections. This generator provides all three so you choose the right fit.' },
            { q: 'How do I write a comment for a struggling student?', a: "Lead with what the student is doing, not just what they're failing at. Even a struggling student has something genuine to note. Then describe the growth area constructively: 'Continued practice with...' rather than 'Has not mastered...' Maintain a growth-oriented tone throughout." },
            { q: 'Should report card comments mention specific grades or test scores?', a: "Generally no — grades are already on the card. Comments should add context that numbers can't convey: learning behaviors, specific skills, growth trajectory, and home support suggestions." },
            { q: 'Can I use the same comment structure for multiple students?', a: "Using a common structure is fine — specificity comes from the strength and growth area inputs you enter for each student. Two students at the same level generate different comments when their inputs differ." },
            { q: 'How do I avoid generic comment language?', a: 'Enter specific strengths and growth areas. "Strong mental math with multiplication" generates specific language; "good at math" generates generic language. The AI uses your input — specificity in, specificity out.' },
            { q: 'Is it appropriate to use AI for report card comments?', a: "Yes. Using AI to draft comments is comparable to using a comment bank. The teacher reviews, personalizes, and takes ownership of every comment before it goes home. AI compresses drafting time; the teacher ensures accuracy and fairness." },
            { q: 'Is the GogyAI report card comment generator free?', a: 'Yes, completely free. No account or subscription required.' },
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
        prev={{ slug: 'parent-email-writer', name: 'Parent Email Writer' }}
        next={{ slug: 'newsletter-draft-generator', name: 'Newsletter Draft Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
