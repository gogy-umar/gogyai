'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Col 1: Brand */}
            <div>
              <Link href="/">
                <Image src="/logo.svg" alt="GogyAI" width={110} height={28} className="brightness-0 invert mb-3" />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Free AI-powered tools for teachers worldwide.
              </p>
              <p className="text-sm text-slate-400 mt-4">© {year} GogyAI</p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wide mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>

            {/* Col 3: Categories */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wide mb-3">Categories</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#lesson-planning" className="hover:text-white transition-colors">Lesson Planning</Link></li>
                <li><Link href="/#assessment-quiz" className="hover:text-white transition-colors">Assessment &amp; Quiz</Link></li>
                <li><Link href="/#communication" className="hover:text-white transition-colors">Communication</Link></li>
                <li><Link href="/#content-resources" className="hover:text-white transition-colors">Content &amp; Resources</Link></li>
                <li><Link href="/#classroom-management" className="hover:text-white transition-colors">Classroom Management</Link></li>
              </ul>
            </div>

            {/* Col 4: Popular Tools */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wide mb-3">Popular Tools</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/lesson-plan-generator" className="hover:text-white transition-colors">Lesson Plan Generator</Link></li>
                <li><Link href="/quiz-mcq-generator" className="hover:text-white transition-colors">Quiz Generator</Link></li>
                <li><Link href="/rubric-builder" className="hover:text-white transition-colors">Rubric Builder</Link></li>
                <li><Link href="/parent-email-writer" className="hover:text-white transition-colors">Parent Email Writer</Link></li>
                <li><Link href="/report-card-comment-generator" className="hover:text-white transition-colors">Report Card Comments</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
            Made for teachers worldwide 🌍
          </div>
        </div>
      </footer>

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  )
}
