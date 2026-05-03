'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Breadcrumbs from './Breadcrumbs'

const CATEGORIES = [
  {
    name: 'Lesson Planning',
    tools: [
      { name: 'Lesson Plan Generator', slug: 'lesson-plan-generator' },
      { name: 'Unit Plan Creator', slug: 'unit-plan-creator' },
      { name: 'Learning Objectives Writer', slug: 'learning-objectives-writer' },
      { name: 'Differentiated Instruction Planner', slug: 'differentiated-instruction-planner' },
      { name: 'Cross-Curricular Activity Generator', slug: 'cross-curricular-activity-generator' },
    ],
  },
  {
    name: 'Assessment & Quiz',
    tools: [
      { name: 'Quiz / MCQ Generator', slug: 'quiz-mcq-generator' },
      { name: 'Rubric Builder', slug: 'rubric-builder' },
      { name: 'Essay Feedback Generator', slug: 'essay-feedback-generator' },
      { name: 'Exit Ticket Creator', slug: 'exit-ticket-creator' },
      { name: "Bloom's Taxonomy Question Generator", slug: 'blooms-taxonomy-question-generator' },
    ],
  },
  {
    name: 'Communication',
    tools: [
      { name: 'Parent Email Writer', slug: 'parent-email-writer' },
      { name: 'Report Card Comment Generator', slug: 'report-card-comment-generator' },
      { name: 'Newsletter Draft Generator', slug: 'newsletter-draft-generator' },
      { name: 'Student Feedback Writer', slug: 'student-feedback-writer' },
      { name: 'IEP Goal Writer', slug: 'iep-goal-writer' },
    ],
  },
  {
    name: 'Content & Resources',
    tools: [
      { name: 'Worksheet Generator', slug: 'worksheet-generator' },
      { name: 'Reading Comprehension Creator', slug: 'reading-comprehension-creator' },
      { name: 'Vocabulary List Builder', slug: 'vocabulary-list-builder' },
      { name: 'Classroom Story Generator', slug: 'classroom-story-generator' },
      { name: 'Text Simplifier', slug: 'text-simplifier' },
    ],
  },
  {
    name: 'Classroom Management',
    tools: [
      { name: 'Classroom Rules Generator', slug: 'classroom-rules-generator' },
      { name: 'Behavior Intervention Plan Writer', slug: 'behavior-intervention-plan-writer' },
      { name: 'Seating Chart Suggestion Tool', slug: 'seating-chart-suggestion-tool' },
      { name: 'Student Interest Survey Creator', slug: 'student-interest-survey-creator' },
      { name: 'Weekly Schedule Planner', slug: 'weekly-schedule-planner' },
      { name: 'Field Trip Permission Letter Writer', slug: 'field-trip-permission-letter-writer' },
      { name: 'Science Experiment Idea Generator', slug: 'science-experiment-idea-generator' },
      { name: 'Discussion Prompt Generator', slug: 'discussion-prompt-generator' },
      { name: 'Substitute Teacher Plan Writer', slug: 'substitute-teacher-plan-writer' },
      { name: 'Professional Development Goal Writer', slug: 'professional-development-goal-writer' },
    ],
  },
]

function getBreadcrumbs(pathname) {
  if (pathname === '/') return []
  const allTools = CATEGORIES.flatMap(c => c.tools)
  const tool = allTools.find(t => t.slug === pathname.slice(1))
  if (tool) {
    return [
      { name: 'Tools', url: '/#tools' },
      { name: tool.name, url: pathname },
    ]
  }
  const pageNames = {
    '/about': 'About',
    '/contact': 'Contact',
    '/privacy-policy': 'Privacy Policy',
    '/terms-of-service': 'Terms of Service',
    '/disclaimer': 'Disclaimer',
  }
  if (pageNames[pathname]) {
    return [{ name: pageNames[pathname], url: pathname }]
  }
  return []
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [openCategories, setOpenCategories] = useState({})
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname)
  const isHome = pathname === '/'

  const toggleCategory = (catName) => {
    setOpenCategories(prev => ({ ...prev, [catName]: !prev[catName] }))
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo.svg" alt="GogyAI" width={120} height={30} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-700 font-medium hover:text-brand-700 transition-colors">Home</Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(o => !o)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                className="flex items-center gap-1 text-slate-700 font-medium hover:text-brand-700 transition-colors py-2"
              >
                All Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl w-[720px] p-4 grid grid-cols-2 gap-x-6 gap-y-4 z-50 max-h-[80vh] overflow-y-auto">
                  {CATEGORIES.map(cat => (
                    <div key={cat.name}>
                      <p className="text-xs font-bold text-brand-800 uppercase tracking-wide mb-2">{cat.name}</p>
                      <ul className="space-y-1">
                        {cat.tools.map(tool => (
                          <li key={tool.slug}>
                            <Link
                              href={`/${tool.slug}`}
                              className="text-sm text-slate-600 hover:text-brand-700 transition-colors block py-0.5"
                            >
                              {tool.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block text-slate-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className="border-t border-slate-100 mt-2 pt-2 space-y-1">
            {CATEGORIES.map(cat => (
              <div key={cat.name}>
                <button
                  onClick={() => toggleCategory(cat.name)}
                  className="w-full flex items-center justify-between py-2.5 text-left"
                >
                  <span className="text-sm font-bold text-brand-800 uppercase tracking-wide">{cat.name}</span>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${openCategories[cat.name] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openCategories[cat.name] && (
                  <ul className="pl-3 pb-2 space-y-0.5 border-l-2 border-brand-100 ml-1">
                    {cat.tools.map(tool => (
                      <li key={tool.slug}>
                        <Link
                          href={`/${tool.slug}`}
                          className="text-sm text-slate-600 hover:text-brand-700 py-1.5 block"
                          onClick={() => setMenuOpen(false)}
                        >
                          {tool.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 mt-2 pt-2 space-y-1">
            <Link href="/about" className="block text-slate-700 font-medium py-2" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-slate-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}

      {/* Breadcrumbs — hidden on homepage */}
      {!isHome && <Breadcrumbs items={breadcrumbs} />}
    </header>
  )
}
