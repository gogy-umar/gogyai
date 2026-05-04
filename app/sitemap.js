export const dynamic = 'force-static'

const BASE = 'https://gogyai.com'
const LAST_MOD = '2025-05-01'

const TOOLS = [
  'lesson-plan-generator',
  'unit-plan-creator',
  'learning-objectives-writer',
  'differentiated-instruction-planner',
  'cross-curricular-activity-generator',
  'quiz-mcq-generator',
  'rubric-builder',
  'essay-feedback-generator',
  'exit-ticket-creator',
  'blooms-taxonomy-question-generator',
  'parent-email-writer',
  'report-card-comment-generator',
  'newsletter-draft-generator',
  'student-feedback-writer',
  'iep-goal-writer',
  'worksheet-generator',
  'reading-comprehension-creator',
  'vocabulary-list-builder',
  'classroom-story-generator',
  'text-simplifier',
  'classroom-rules-generator',
  'behavior-intervention-plan-writer',
  'seating-chart-suggestion-tool',
  'student-interest-survey-creator',
  'weekly-schedule-planner',
  'field-trip-permission-letter-writer',
  'science-experiment-idea-generator',
  'discussion-prompt-generator',
  'substitute-teacher-plan-writer',
  'professional-development-goal-writer',
]

export default function sitemap() {
  return [
    ...TOOLS.map(slug => ({
      url: `${BASE}/${slug}`,
      lastModified: LAST_MOD,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    { url: BASE,                          lastModified: LAST_MOD, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE}/about`,               lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,             lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy-policy`,      lastModified: LAST_MOD, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/terms-of-service`,    lastModified: LAST_MOD, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/disclaimer`,          lastModified: LAST_MOD, changeFrequency: 'yearly',  priority: 0.5 },
  ]
}
