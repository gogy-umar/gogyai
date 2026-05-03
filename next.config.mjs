/** @type {import('next').NextConfig} */

const TOOL_SLUGS = [
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

const slugPattern = TOOL_SLUGS.join('|')

const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  compress: true,
  poweredByHeader: false,

  async rewrites() {
    return [
      {
        source: `/:slug(${slugPattern})`,
        destination: '/tools/:slug',
      },
    ]
  },

  async redirects() {
    return TOOL_SLUGS.map(slug => ({
      source: `/tools/${slug}`,
      destination: `/${slug}`,
      permanent: true,
    }))
  },
}

export default nextConfig
