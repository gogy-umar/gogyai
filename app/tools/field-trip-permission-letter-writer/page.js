import ToolForm from '@/components/ToolForm'
import Link from 'next/link'
import ToolNav from '@/components/ToolNav'

export const metadata = {
  title: 'Field Trip Permission Letter Writer — Free AI Tool for Teachers',
  description: 'Generate professional field trip permission letters with all details, parent signature lines, and emergency contact sections. Free AI letter writer for teachers. No login required.',
  alternates: { canonical: 'https://gogyai.com/field-trip-permission-letter-writer' },
}

const FIELDS = [
  { name: 'destination', label: 'Destination', type: 'text', placeholder: 'e.g. Natural History Museum' },
  { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g. Grade 5' },
  { name: 'date', label: 'Trip Date', type: 'text', placeholder: 'e.g. Friday, May 16, 2025' },
  { name: 'learning_goals', label: 'Learning Goals', type: 'text', placeholder: 'e.g. Explore fossils and prehistoric ecosystems to extend our Earth Science unit', full: true },
  { name: 'cost', label: 'Cost', type: 'text', placeholder: 'e.g. $12.00 per student (includes admission and bus)' },
  { name: 'requirements', label: 'Special Requirements', type: 'text', placeholder: 'e.g. Pack a lunch, wear comfortable shoes, permission to be photographed', full: true },
  { name: 'school_name', label: 'School Name', type: 'text', placeholder: 'e.g. Lincoln Elementary School' },
]

const PROMPT = `Write a professional field trip permission letter for the following trip:
Destination: {destination}
Grade Level: {grade}
Date: {date}
Learning Goals: {learning_goals}
Cost: {cost}
Special Requirements: {requirements}
School Name: {school_name}

The letter should include:
1. School letterhead placeholder (School Name + "Field Trip Permission Form")
2. Date line
3. Greeting ("Dear Parent/Guardian,")
4. Introduction paragraph — what the trip is and why students are going (reference learning goals)
5. Trip details section: Date, Destination, Departure/Return times (leave blank for teacher to fill), Cost, What to bring/wear
6. Special requirements and notes ({requirements})
7. Chaperone request section (ask if any parents can volunteer to chaperone)
8. Cut-and-return permission slip with:
   - Student name line
   - Grade/Teacher line
   - Permission statement: "I give permission for my child to attend the field trip to {destination} on {date}"
   - Parent/guardian signature and date
   - Emergency contact name and phone number
   - Medical information (allergies, medications): blank field
   - Permission to be photographed (yes/no checkbox)
   - Payment enclosed checkbox + amount
9. Teacher contact information placeholder
10. Professional closing`

const RELATED = [
  { name: 'Newsletter Draft Generator', slug: 'newsletter-draft-generator', desc: 'Announce the field trip in your class newsletter before the letter goes home.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Follow up with parents who haven\'t returned permission slips via email.' },
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Plan the pre-trip and post-trip lessons that frame the field trip experience.' },
  { name: 'Science Experiment Idea Generator', slug: 'science-experiment-idea-generator', desc: 'Connect your field trip to hands-on classroom science activities.' },
]

const schemas = {
  webPage: {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Field Trip Permission Letter Writer — GogyAI',
    url: 'https://gogyai.com/field-trip-permission-letter-writer',
  },
  software: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'AI Field Trip Permission Letter Writer',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: 'https://gogyai.com/field-trip-permission-letter-writer',
  },
  article: {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'AI Field Trip Permission Letter Writer: Professional Letters Done in Minutes',
    author: { '@type': 'Organization', name: 'GogyAI' },
    publisher: { '@type': 'Organization', name: 'GogyAI', url: 'https://gogyai.com' },
    url: 'https://gogyai.com/field-trip-permission-letter-writer',
  },
  faq: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should a field trip permission letter include?', acceptedAnswer: { '@type': 'Answer', text: 'A complete permission letter includes the trip destination, date, educational purpose, cost, departure and return times, what students should bring, chaperone request, and a cut-and-return permission slip with parent signature line, emergency contact, medical information, and payment section.' } },
      { '@type': 'Question', name: 'How far in advance should a field trip permission letter go home?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three weeks minimum for local trips requiring payment. Four to six weeks for longer trips or those requiring significant parent arrangements. Giving families ample time increases return rates significantly — families need time to arrange childcare for siblings, request time off work, or budget for trip costs.' } },
      { '@type': 'Question', name: 'What medical information should a field trip permission letter collect?', acceptedAnswer: { '@type': 'Answer', text: 'The letter should include an open field for parents to list allergies, medications (including dosage and administration schedule), and any medical conditions the teacher or chaperones should know about. This information must be kept confidential and shared only with adults who need it for student safety.' } },
      { '@type': 'Question', name: 'Do I need administrator approval before sending a field trip permission letter?', acceptedAnswer: { '@type': 'Answer', text: 'In most schools, yes. Field trips typically require administrative approval before letters go home — the destination, transportation, supervision ratio, and cost all need to be cleared. Generate the letter as a planning document first, get approval, then distribute. Your school\'s field trip request process governs this.' } },
      { '@type': 'Question', name: 'How do I handle students who cannot afford the field trip cost?', acceptedAnswer: { '@type': 'Answer', text: 'Many schools have confidential funds to cover field trip costs for families with financial hardship. Add a note in the letter (or provide separately) that families can contact the teacher or school office confidentially if cost is a barrier. No student should be excluded from a field trip due to inability to pay.' } },
      { '@type': 'Question', name: 'Can I use an AI permission letter as-is or should I review it?', acceptedAnswer: { '@type': 'Answer', text: 'Always review before distributing. The generated letter needs your specific departure and return times, accurate cost details, any school-specific language required by district policy, and your contact information filled in. Some districts have required legal language for permission slips — check with your school office.' } },
      { '@type': 'Question', name: 'Is the GogyAI field trip permission letter writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account or credit card required.' } },
    ],
  },
}

export default function FieldTripPermissionLetterWriterPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-800 mb-2">AI Field Trip Permission Letter Writer</h1>
        <p className="text-slate-600 mb-6">Generate a complete, professional permission letter with parent signature line, emergency contact section, and payment slip.</p>
        <ToolForm fields={FIELDS} promptTemplate={PROMPT} toolSlug="field-trip-permission-letter-writer" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">AI Field Trip Permission Letter Writer: Professional Letters Done in Minutes</h2>

        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-7 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-brand-800 mb-2">Quick Summary</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>This guide explains how to use an AI field trip permission letter writer to generate professional, complete permission letters for any school trip.</li>
            <li>Teachers at all grade levels planning school trips will benefit — from first-time trip planners to experienced teachers tired of rebuilding the same document each year.</li>
            <li>The tool generates a complete letter with trip details, chaperone request, permission slip, emergency contact, medical information field, and payment section.</li>
            <li>Always get administrative approval before the letter goes home, and check for district-required legal language in permission slips.</li>
            <li>Send permission letters 2–3 weeks in advance for local trips; 4–6 weeks for trips requiring significant family arrangements.</li>
            <li>Never store student medical information from permission slips in any external system — keep paper forms with the trip documentation at school.</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Every field trip requires the same documentation: a letter explaining the educational purpose, all the logistical details, a permission slip parents can sign, emergency contact collection, and a payment mechanism. Building this from scratch every time is unnecessary. An AI field trip permission letter writer generates the complete document from your trip details in seconds.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This guide covers what belongs in a complete permission letter, how to use the tool effectively, and what to review before anything goes home.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an AI Field Trip Permission Letter Writer?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          An AI field trip permission letter writer generates a complete, professional letter — including trip details, educational rationale, chaperone request, and a cut-and-return permission slip — from your trip specifications. It handles the structure and professional language; you fill in specific times and verify compliance with your school's requirements.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Permission Letter Writers Matter for Educators</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A field trip permission letter is a legal document as well as a communication piece. Missing the emergency contact section, unclear cost information, or an unsigned permission slip can create liability issues and delay trips. AI generators apply a complete, professionally structured template — reducing the chance of accidentally omitting required elements.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For teachers who run multiple field trips per year, generating a letter in minutes rather than rebuilding from a previous year's template saves time and reduces the risk of carrying forward outdated information from a prior trip.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How This Tool Works</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You enter the destination, grade, date, learning goals, cost, special requirements, and school name. The AI generates a complete professional letter with all standard sections — including a cut-and-return slip with parent signature, emergency contact lines, medical information field, and payment checkbox. Departure and return times are left as blanks for you to fill in.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The learning goals field is worth completing thoughtfully. A well-articulated educational purpose builds parent confidence in the trip and, when reviewed by administrators, demonstrates curriculum alignment. Don't just write "fun" — connect the trip explicitly to what students are studying.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Step-by-Step: Using the Permission Letter Writer</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Adeyemi is planning a trip to the Natural History Museum for his 5th-grade class as part of their Earth Science unit on prehistoric life. He needs a letter that goes home Friday.
        </p>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
          <li>Destination: Natural History Museum.</li>
          <li>Grade: Grade 5. Date: Specific trip date.</li>
          <li>Learning Goals: "Observe fossil specimens to deepen understanding of Earth's prehistoric ecosystems — connecting directly to our current unit on geological time and life on Earth."</li>
          <li>Cost: $14.00 (admission and transportation).</li>
          <li>Requirements: "Bag lunch, comfortable shoes, sunscreen, no electronic devices."</li>
          <li>School Name: Lincoln Elementary School.</li>
          <li>He generates the letter, adds departure (8:15am) and return (2:30pm) times, confirms cost accuracy, and checks it against his district's permission slip requirements.</li>
          <li>He submits it to his principal for approval Wednesday, receives approval Thursday, and sends it home Friday — two weeks before the trip.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How to Get the Best Results</h2>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Always check district-required language</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Many districts require specific legal language in field trip permission slips — liability statements, media release wording, or transportation consent language. Check with your school office before distributing any permission letter and add required district language to the generated draft.
        </p>

        <h3 className="text-base font-semibold text-slate-700 mt-5 mb-2">Include the educational purpose clearly</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Parents who understand why their child is going on a trip are more likely to return permission slips promptly and participate as chaperones. The learning goals you enter are transformed into an explanation parents can read and value — not just logistical information.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitations and What This Tool Cannot Do</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The generated letter uses a general template. Your district may have required formatting, specific consent language, or mandatory sections not included in the generated version. It is a starting draft — administrative review before distribution is essential, and the <Link href="/parent-email-writer" className="text-brand-700 underline">Parent Email Writer</Link> can help you follow up with families who haven&apos;t returned permission slips.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The tool cannot generate district-specific waiver or liability language, which varies by location and legal jurisdiction. This language must come from your district's existing templates or legal department — while you prepare the logistical documents, the <Link href="/lesson-plan-generator" className="text-brand-700 underline">Lesson Plan Generator</Link> can help you build the pre-trip and post-trip lessons that frame the field trip experience.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Data Privacy and Classroom Use</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Permission letter inputs contain no student data. Enter trip information only — not student names or medical information. GogyAI stores no personal information. Student medical information collected via permission slips must be stored securely at school, shared only with adults who need it for student safety on the trip, and handled according to FERPA and your district's health record policies. See <Link href="/" className="text-brand-700 underline">GogyAI&apos;s complete teacher toolkit</Link> for more free tools to support every stage of trip planning.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            { q: 'What should a field trip permission letter include?', a: 'Trip destination, date, educational purpose, cost, departure/return times, what to bring, chaperone request, and a cut-and-return slip with parent signature, emergency contact, medical information field, and payment section.' },
            { q: 'How far in advance should a permission letter go home?', a: '2–3 weeks for local trips. 4–6 weeks for longer trips requiring significant family arrangements. More lead time significantly increases return rates.' },
            { q: 'What medical information should a permission letter collect?', a: 'An open field for allergies, medications (including dosage and schedule), and any medical conditions trip supervisors should know. Keep this information confidential and share only with adults who need it for student safety.' },
            { q: 'Do I need administrator approval before the letter goes home?', a: 'In most schools, yes. Get administrative approval for destination, transportation, supervision ratio, and cost before distributing. Check your school\'s field trip request process.' },
            { q: 'How do I handle students who cannot afford the trip cost?', a: 'Many schools have confidential funds for families with financial hardship. Add a note that families can contact the teacher or school office confidentially if cost is a barrier. No student should miss a trip due to inability to pay.' },
            { q: 'Should I review the AI letter before distributing?', a: 'Always. Add departure/return times, verify cost details, check for district-required legal language, and add your contact information before the letter goes home.' },
            { q: 'Is the GogyAI field trip permission letter writer free?', a: 'Yes, completely free. No account or credit card required.' },
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
        prev={{ slug: 'weekly-schedule-planner', name: 'Weekly Schedule Planner' }}
        next={{ slug: 'science-experiment-idea-generator', name: 'Science Experiment Idea Generator' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
    </>
  )
}
