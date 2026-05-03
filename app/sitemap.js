const TOOLS = [
  'lesson-plan-generator','unit-plan-creator','learning-objectives-writer',
  'differentiated-instruction-planner','cross-curricular-activity-generator',
  'quiz-mcq-generator','rubric-builder','essay-feedback-generator',
  'exit-ticket-creator','blooms-taxonomy-question-generator',
  'parent-email-writer','report-card-comment-generator','newsletter-draft-generator',
  'student-feedback-writer','iep-goal-writer','worksheet-generator',
  'reading-comprehension-creator','vocabulary-list-builder','classroom-story-generator',
  'text-simplifier','classroom-rules-generator','behavior-intervention-plan-writer',
  'seating-chart-suggestion-tool','student-interest-survey-creator','weekly-schedule-planner',
  'field-trip-permission-letter-writer','science-experiment-idea-generator',
  'discussion-prompt-generator','substitute-teacher-plan-writer',
  'professional-development-goal-writer',
]

export default function sitemap() {
  const base = 'https://gogyai.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ...TOOLS.map(s => ({ url: `${base}/${s}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 })),
  ]
}
