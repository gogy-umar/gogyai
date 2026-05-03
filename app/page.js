import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'GogyAI — Free AI Tools for Teachers | Lesson Plans, Quizzes, Rubrics & More',
  description: '30+ free AI-powered tools built for K-12 teachers. Generate lesson plans, quizzes, rubrics, IEP goals, parent emails and more in seconds. No login required.',
  alternates: { canonical: 'https://gogyai.com' },
}

const FEATURED_TOOLS = [
  { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator', desc: 'Generate complete, standards-aligned lesson plans in seconds — ready to teach.' },
  { name: 'Quiz / MCQ Generator', slug: 'quiz-mcq-generator', desc: 'Create quizzes with multiple-choice questions and answer keys instantly.' },
  { name: 'Rubric Builder', slug: 'rubric-builder', desc: 'Build clear, detailed grading rubrics for any subject or assignment type.' },
  { name: 'Parent Email Writer', slug: 'parent-email-writer', desc: 'Write professional, empathetic parent communication emails in one click.' },
  { name: 'Report Card Comments', slug: 'report-card-comment-generator', desc: 'Generate three personalised comment options per student, instantly.' },
  { name: 'IEP Goal Writer', slug: 'iep-goal-writer', desc: 'Write measurable, SMART IEP goals that meet compliance requirements.' },
]

const CATEGORIES = [
  {
    name: 'Lesson Planning',
    slug: 'lesson-planning',
    count: 5,
    desc: 'Plan engaging lessons faster with AI assistance.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    tools: ['Lesson Plan Generator', 'Unit Plan Creator', 'Learning Objectives Writer', 'Differentiated Instruction Planner', 'Cross-Curricular Activity Generator'],
    slugs: ['lesson-plan-generator', 'unit-plan-creator', 'learning-objectives-writer', 'differentiated-instruction-planner', 'cross-curricular-activity-generator'],
  },
  {
    name: 'Assessment & Quiz',
    slug: 'assessment-quiz',
    count: 5,
    desc: 'Create assessments and quizzes for any topic in moments.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    tools: ['Quiz / MCQ Generator', 'Rubric Builder', 'Essay Feedback Generator', 'Exit Ticket Creator', "Bloom's Taxonomy Question Generator"],
    slugs: ['quiz-mcq-generator', 'rubric-builder', 'essay-feedback-generator', 'exit-ticket-creator', 'blooms-taxonomy-question-generator'],
  },
  {
    name: 'Communication',
    slug: 'communication',
    count: 5,
    desc: 'Write parent emails, feedback and newsletters effortlessly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tools: ['Parent Email Writer', 'Report Card Comment Generator', 'Newsletter Draft Generator', 'Student Feedback Writer', 'IEP Goal Writer'],
    slugs: ['parent-email-writer', 'report-card-comment-generator', 'newsletter-draft-generator', 'student-feedback-writer', 'iep-goal-writer'],
  },
  {
    name: 'Content & Resources',
    slug: 'content-resources',
    count: 5,
    desc: 'Generate worksheets, stories and reading materials instantly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    tools: ['Worksheet Generator', 'Reading Comprehension Creator', 'Vocabulary List Builder', 'Classroom Story Generator', 'Text Simplifier'],
    slugs: ['worksheet-generator', 'reading-comprehension-creator', 'vocabulary-list-builder', 'classroom-story-generator', 'text-simplifier'],
  },
  {
    name: 'Classroom Management',
    slug: 'classroom-management',
    count: 10,
    desc: 'Organise your classroom and manage student behaviour with ease.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tools: ['Classroom Rules Generator', 'Behavior Intervention Plan Writer', 'Seating Chart Suggestion Tool', 'Student Interest Survey Creator', 'Weekly Schedule Planner', 'Field Trip Permission Letter Writer', 'Science Experiment Idea Generator', 'Discussion Prompt Generator', 'Substitute Teacher Plan Writer', 'Professional Development Goal Writer'],
    slugs: ['classroom-rules-generator', 'behavior-intervention-plan-writer', 'seating-chart-suggestion-tool', 'student-interest-survey-creator', 'weekly-schedule-planner', 'field-trip-permission-letter-writer', 'science-experiment-idea-generator', 'discussion-prompt-generator', 'substitute-teacher-plan-writer', 'professional-development-goal-writer'],
  },
]

const TESTIMONIALS = [
  {
    quote: "GogyAI has completely changed how I prepare for the week. I used to spend Sunday evenings writing lesson plans — now it takes me 10 minutes. The quality is genuinely impressive.",
    name: 'Sarah M.',
    role: 'Grade 5 Teacher, Texas',
    initials: 'SM',
  },
  {
    quote: "The IEP Goal Writer alone is worth bookmarking this site. It saves me at least two hours every IEP season and the language it produces meets every compliance standard my district requires.",
    name: 'James R.',
    role: 'Special Education Teacher, Ohio',
    initials: 'JR',
  },
  {
    quote: "I was sceptical about AI tools but GogyAI proved me wrong. The quiz generator creates differentiated questions I can actually use straight away. My students love the variety.",
    name: 'Priya K.',
    role: 'Secondary Science Teacher, UK',
    initials: 'PK',
  },
]

const BENEFITS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save 5+ Hours Every Week',
    desc: 'Teachers report saving an average of 5 to 8 hours each week by letting GogyAI handle repetitive planning and paperwork tasks.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Curriculum-Aligned Output',
    desc: 'Every tool is built around real teaching standards. Specify your grade level and subject and get content that fits your curriculum — not generic filler.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Works for Every Country',
    desc: 'GogyAI supports teachers in the US, UK, Australia, Canada, India and beyond. Enter your curriculum or standards and the AI adapts accordingly.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'No Account, No Data Collection',
    desc: 'There is no sign-up, no email required and nothing is stored. Your inputs stay in your browser session and are never used to train AI models.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Fully Editable Output',
    desc: "AI gives you a strong first draft — you make it yours. Copy any output and edit it in your favourite word processor or paste it directly into your school's system.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Free Forever — No Hidden Fees',
    desc: 'Every single tool on GogyAI is permanently free. No freemium limits, no credit system, no premium tier. Teachers deserve tools that do not cost them money.',
  },
]

const FAQS = [
  {
    q: 'Are all the AI tools on GogyAI really free?',
    a: 'Yes — every tool on GogyAI is completely free to use. There are no subscription plans, no credits to buy and no hidden paywalls. We believe teachers deserve free access to quality AI tools.',
  },
  {
    q: 'Do I need to create an account or log in?',
    a: 'No account is needed. You can use every tool immediately without signing up, providing an email address or logging in. Just visit a tool page, fill in the details and generate.',
  },
  {
    q: 'What subjects and grade levels are supported?',
    a: 'All subjects and all grade levels are supported — from kindergarten to university. Simply type your subject, grade level and topic into the form and the AI tailors its output accordingly.',
  },
  {
    q: 'How does GogyAI generate content?',
    a: 'GogyAI uses state-of-the-art large language models (LLMs) to generate content based on the details you provide. The AI understands educational context, curriculum language and professional writing standards for teachers.',
  },
  {
    q: 'Can I edit or customise the generated content?',
    a: 'Absolutely. Every output is plain text that you can copy and paste into any word processor, Google Doc, or your school\'s learning management system. The AI gives you an excellent starting draft — you have full control to refine it.',
  },
  {
    q: 'Is GogyAI suitable for international teachers?',
    a: 'Yes. GogyAI works for teachers in any country. You can specify your curriculum (e.g. Common Core, National Curriculum, CBSE, Australian Curriculum) and the AI will align its output to those standards.',
  },
  {
    q: 'How many times can I use the tools?',
    a: 'There is a fair-use daily limit to keep the service free for everyone. The vast majority of teachers never hit this limit in normal daily use. If you need unlimited generations, you can bring your own free Gemini API key.',
  },
  {
    q: 'Is my data private and secure?',
    a: 'GogyAI does not store your inputs or outputs. Nothing you type is used to train AI models or shared with third parties. Your session data stays in your browser and is discarded when you leave.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-brand-100 mb-6">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Trusted by teachers worldwide — 100% free
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Free AI Tools for Teachers —<br className="hidden sm:block" /> Save Hours Every Week
            </h1>
            <p className="text-brand-100 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              30+ AI-powered tools built for educators. Generate lesson plans, quizzes, rubrics, parent emails and more in seconds — no login, no cost, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#tools" className="bg-white text-brand-800 font-semibold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors text-base">
                Explore All Tools
              </a>
              <a href="#how-it-works" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors text-base">
                How It Works
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-brand-200">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                No sign-up required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                Works on any device
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                Results in seconds
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero.svg"
              alt="Teacher using AI tools to create lesson plans and quizzes"
              width={520}
              height={420}
              priority
              className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-900 text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: '30+', label: 'Free AI Tools' },
            { stat: '5 Subjects', label: 'Categories Covered' },
            { stat: '0', label: 'Sign-ups Needed' },
            { stat: '< 10 sec', label: 'Average Generation Time' },
          ].map(item => (
            <div key={item.stat}>
              <p className="text-2xl sm:text-3xl font-bold text-white">{item.stat}</p>
              <p className="text-brand-300 text-sm mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">How It Works</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">GogyAI is designed to get you from idea to finished content in three simple steps — no technical knowledge required.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose a Tool',
                desc: 'Browse 30+ free AI tools organised by category — lesson planning, assessments, communication, content creation and classroom management.',
              },
              {
                step: '2',
                title: 'Fill in Your Details',
                desc: 'Enter your subject, grade level, topic and any specific requirements. The more detail you provide, the more tailored the output will be.',
              },
              {
                step: '3',
                title: 'Get Results Instantly',
                desc: 'Your AI-generated content appears in under 10 seconds. Copy it, edit it, and use it — no formatting required.',
              },
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center px-2">
                <div className="w-14 h-14 rounded-full bg-brand-800 text-white text-xl font-bold flex items-center justify-center mb-4 shrink-0">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section id="tools" className="py-16 px-4 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">30+ Free Tools Across 5 Categories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Every tool is purpose-built for teachers. Pick a category below or click any tool to start generating content immediately.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(cat => (
              <div key={cat.name} id={cat.slug} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                <div className="text-brand-700 mb-3">{cat.icon}</div>
                <h3 className="font-bold text-slate-800 mb-1">{cat.name}</h3>
                <p className="text-xs text-slate-400 mb-1">{cat.count} tools</p>
                <p className="text-xs text-slate-500 mb-4">{cat.desc}</p>
                <ul className="space-y-1">
                  {cat.tools.map((tool, i) => (
                    <li key={tool}>
                      <Link href={`/${cat.slugs[i]}`} className="text-sm text-brand-700 hover:text-brand-900 hover:underline">
                        {tool}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GogyAI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Why Teachers Choose GogyAI</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">GogyAI is built from the ground up for educators — not generic users. Here is why thousands of teachers use it every day.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(item => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-800 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Most Popular Tools</h2>
            <p className="text-slate-500 max-w-xl mx-auto">These are the tools teachers reach for most. Each one is free, instant and requires no account.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_TOOLS.map(tool => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-brand-700 transition-colors">{tool.name}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{tool.desc}</p>
                <span className="inline-flex items-center gap-1 text-brand-700 text-sm font-medium">
                  Use Tool
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">What Teachers Are Saying</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Real feedback from educators who use GogyAI to reclaim their time and focus more on teaching.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 flex flex-col">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Editorial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">AI Tools Designed Specifically for Educators</h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
            <p>
              GogyAI was built with one goal in mind: give teachers back the time they spend on administrative and planning tasks so they can focus on what actually matters — their students. Unlike general-purpose AI chatbots, every tool on GogyAI is specifically designed around the real workflows and language teachers use every day.
            </p>
            <p>
              Whether you teach kindergarten or high school, English or mathematics, GogyAI adapts to your subject, grade level and curriculum. The lesson plan generator, for example, produces fully structured plans complete with learning objectives, materials lists, activity breakdowns and assessment strategies — not a rough outline you have to rewrite from scratch.
            </p>
            <p>
              Our assessment tools go beyond simple quiz generation. The Bloom's Taxonomy Question Generator helps teachers write questions at every cognitive level — from knowledge recall to higher-order analysis and evaluation. The Rubric Builder creates detailed, criterion-based scoring guides that are ready to share with students on day one of an assignment.
            </p>
            <p>
              Communication tools handle the professional writing tasks that drain teacher energy at the end of a long day. Parent emails, report card comments, IEP goals and student feedback letters all follow the professional tone and precise language that schools and parents expect — generated in seconds and fully editable.
            </p>
            <p>
              GogyAI will always be free. We do not believe teachers should pay out of pocket for tools that help them do their jobs. All 30+ tools are available without a subscription, without a credit card, and without even creating an account.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know before using GogyAI for the first time.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-brand-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-brand-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Saving Time Today</h2>
          <p className="text-brand-100 mb-8 text-lg">Join thousands of teachers who use GogyAI to plan faster, assess smarter and communicate better — completely free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tools" className="bg-white text-brand-800 font-semibold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors text-base">
              Browse All 30+ Tools
            </a>
            <Link href="/lesson-plan-generator" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors text-base">
              Try Lesson Plan Generator
            </Link>
          </div>
          <p className="mt-6 text-brand-300 text-sm">No account required. No credit card. Free forever.</p>
        </div>
      </section>
    </>
  )
}
