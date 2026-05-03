# GogyAI — Master Build Prompt v2.0
**Domain:** gogyai.com | **Stack:** Next.js 14 + Tailwind + Supabase + Gemini + Groq
**Read progress.md first every session. Update it after every completed task.**

---

## COMPANION FILES
- `article-instructions.md` — Full article writing rules (read before writing any article)
- `progress.md` — Task tracker (read at session start, update after each task)

---

## PROJECT OVERVIEW
- **Purpose:** Free AI tools website for global teachers — all tools free, AI-powered, each with SEO article
- **Audience:** Global teachers — K-12, higher ed, admins, instructional coaches, curriculum designers
- **Monetization:** Google AdSense
- **Colors:** Blue (#1E40AF primary) and White — professional, clean
- **Font:** Inter via `next/font/google` — NO external Google Fonts link tags ever

---

## CRITICAL RULES (apply everywhere, no exceptions)
1. **NO Google Fonts `<link>` tags** — use `next/font/google` only (see layout.jsx spec)
2. **100/100 PageSpeed** — no render-blocking resources, no layout shift, lazy-load images
3. **NO `console.log` in production code**
4. **Zero hydration errors** — mark all client components `'use client'`
5. **All images** use Next.js `<Image>` with explicit `width` and `height`
6. **Every page** gets unique meta title, meta description, canonical tag, and schema
7. **Responsive** — works on 320px mobile through 1440px desktop

---

## TECH STACK

| Layer | Tool |
|---|---|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS |
| Font | `next/font/google` → Inter |
| Database | Supabase (free tier) |
| Primary AI | Google Gemini 1.5 Flash |
| Fallback AI | Groq Llama 3 |
| User fallback | BYOK (browser localStorage) |
| Hosting | Hostinger Node.js / Vercel |

---

## FOLDER STRUCTURE

```
/gogyai
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── sitemap.js
│   ├── robots.js
│   ├── about/page.jsx
│   ├── contact/page.jsx
│   ├── privacy-policy/page.jsx
│   ├── terms-of-service/page.jsx
│   ├── disclaimer/page.jsx
│   ├── api/generate/route.js
│   └── tools/
│       ├── lesson-plan-generator/page.jsx        (T01)
│       ├── unit-plan-creator/page.jsx             (T02)
│       ├── learning-objectives-writer/page.jsx    (T03)
│       ├── differentiated-instruction-planner/page.jsx (T04)
│       ├── cross-curricular-activity-generator/page.jsx (T05)
│       ├── quiz-mcq-generator/page.jsx            (T06)
│       ├── rubric-builder/page.jsx                (T07)
│       ├── essay-feedback-generator/page.jsx      (T08)
│       ├── exit-ticket-creator/page.jsx           (T09)
│       ├── blooms-taxonomy-question-generator/page.jsx (T10)
│       ├── parent-email-writer/page.jsx           (T11)
│       ├── report-card-comment-generator/page.jsx (T12)
│       ├── newsletter-draft-generator/page.jsx    (T13)
│       ├── student-feedback-writer/page.jsx       (T14)
│       ├── iep-goal-writer/page.jsx               (T15)
│       ├── worksheet-generator/page.jsx           (T16)
│       ├── reading-comprehension-creator/page.jsx (T17)
│       ├── vocabulary-list-builder/page.jsx       (T18)
│       ├── classroom-story-generator/page.jsx     (T19)
│       ├── text-simplifier/page.jsx               (T20)
│       ├── classroom-rules-generator/page.jsx     (T21)
│       ├── behavior-intervention-plan-writer/page.jsx (T22)
│       ├── seating-chart-suggestion-tool/page.jsx (T23)
│       ├── student-interest-survey-creator/page.jsx (T24)
│       ├── weekly-schedule-planner/page.jsx       (T25)
│       ├── field-trip-permission-letter-writer/page.jsx (T26)
│       ├── science-experiment-idea-generator/page.jsx (T27)
│       ├── discussion-prompt-generator/page.jsx   (T28)
│       ├── substitute-teacher-plan-writer/page.jsx (T29)
│       └── professional-development-goal-writer/page.jsx (T30)
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Breadcrumbs.jsx
│   ├── ToolForm.jsx
│   ├── ToolOutput.jsx
│   ├── BYOKModal.jsx
│   └── AdSlot.jsx
├── lib/
│   ├── gemini.js
│   ├── groq.js
│   └── supabase.js
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.png
├── .env.local
├── next.config.mjs
└── tailwind.config.js
```

---

## ENVIRONMENT VARIABLES — `.env.local`

```bash
GEMINI_API_KEY=your_gemini_key_here
GROQ_API_KEY=your_groq_key_here
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_SITE_URL=https://gogyai.com
```

---

## SUPABASE TABLES

Run once in Supabase SQL editor:

```sql
CREATE TABLE prompt_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_hash text UNIQUE NOT NULL,
  tool_slug text NOT NULL,
  output text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE api_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  api_name text NOT NULL,
  date date DEFAULT CURRENT_DATE,
  call_count integer DEFAULT 1,
  UNIQUE(api_name, date)
);

CREATE OR REPLACE FUNCTION increment_api_usage(api text)
RETURNS void AS $$
BEGIN
  INSERT INTO api_usage (api_name, date, call_count)
  VALUES (api, CURRENT_DATE, 1)
  ON CONFLICT (api_name, date)
  DO UPDATE SET call_count = api_usage.call_count + 1;
END;
$$ LANGUAGE plpgsql;
```

---

## FONT SETUP — CRITICAL

**`app/layout.jsx` only — nowhere else:**

```jsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

**`tailwind.config.js`:**

```js
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6',
          600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

---

## PAGE SPEED RULES (target 100/100)

- `next/font` only — zero external font HTTP requests
- Above-fold images: `<Image priority />` | Below-fold: `<Image loading="lazy" />`
- AdSense script: `<Script strategy="lazyOnload" />` via `next/script`
- No inline `style` objects causing layout shift
- Tailwind purges unused CSS automatically in production
- `compress: true` in next.config.mjs

**`next.config.mjs`:**
```js
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  compress: true,
  poweredByHeader: false,
}
export default nextConfig
```

---

## AI API FILES

### `lib/gemini.js`
```js
export async function callGemini(prompt, apiKey) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  )
  if (res.status === 429) throw { isRateLimit: true }
  if (!res.ok) throw new Error('Gemini error')
  const data = await res.json()
  return data.candidates[0].content.parts[0].text
}
```

### `lib/groq.js`
```js
export async function callGroq(prompt, apiKey) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    }),
  })
  if (res.status === 429) throw { isRateLimit: true }
  if (!res.ok) throw new Error('Groq error')
  const data = await res.json()
  return data.choices[0].message.content
}
```

### `lib/supabase.js`
```js
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
```

### `app/api/generate/route.js`
```js
import { supabase } from '@/lib/supabase'
import { callGemini } from '@/lib/gemini'
import { callGroq } from '@/lib/groq'

export async function POST(req) {
  const { prompt, toolSlug } = await req.json()
  const hash = Buffer.from(prompt).toString('base64').slice(0, 64)

  const { data: cached } = await supabase
    .from('prompt_cache').select('output').eq('prompt_hash', hash).single()
  if (cached) return Response.json({ output: cached.output, cached: true })

  try {
    const output = await callGemini(prompt, process.env.GEMINI_API_KEY)
    await supabase.from('prompt_cache').insert({ prompt_hash: hash, tool_slug: toolSlug, output })
    await supabase.rpc('increment_api_usage', { api: 'gemini' })
    return Response.json({ output })
  } catch (e) {
    if (!e.isRateLimit) return Response.json({ error: 'AI error' }, { status: 500 })
  }

  try {
    const output = await callGroq(prompt, process.env.GROQ_API_KEY)
    await supabase.from('prompt_cache').insert({ prompt_hash: hash, tool_slug: toolSlug, output })
    await supabase.rpc('increment_api_usage', { api: 'groq' })
    return Response.json({ output })
  } catch (e) {
    if (!e.isRateLimit) return Response.json({ error: 'AI error' }, { status: 500 })
  }

  return Response.json({ rateLimited: true }, { status: 429 })
}
```

---

## ROOT LAYOUT — `app/layout.jsx`

```jsx
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://gogyai.com'),
  title: { default: 'GogyAI — Free AI Tools for Teachers', template: '%s | GogyAI' },
  description: 'Free AI-powered tools for teachers worldwide. Generate lesson plans, quizzes, rubrics, parent emails and more. No login required.',
  openGraph: { siteName: 'GogyAI', type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
}

const siteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite',
  name: 'GogyAI', url: 'https://gogyai.com',
  description: 'Free AI tools for teachers worldwide',
  potentialAction: { '@type': 'SearchAction', target: 'https://gogyai.com/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
}

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'GogyAI', url: 'https://gogyai.com', logo: 'https://gogyai.com/logo.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
```

---

## HEADER — `components/Header.jsx`

`'use client'` — sticky, white, shadow-sm

- **Left:** GogyAI SVG logo → links to `/`
- **Desktop nav:** All Tools (mega-dropdown grouped by 5 categories), About `/about`, Contact `/contact`
- **Mobile:** Hamburger `☰` → slide-down full-width drawer with all links + `✕` close
- **Below nav bar:** `<Breadcrumbs />` — hidden on homepage, shown on all other pages

---

## BREADCRUMBS — `components/Breadcrumbs.jsx`

Props: `items = [{ name, url }]`

Renders:
1. Visible breadcrumb trail: Home › Tools › [Tool Name]
2. JSON-LD BreadcrumbList schema injected into page `<head>`

---

## FOOTER — `components/Footer.jsx`

4-column grid → 1 column on mobile:

| Col 1 Brand | Col 2 Quick Links | Col 3 Categories | Col 4 Popular Tools |
|---|---|---|---|
| Logo + tagline | Home | Lesson Planning | Lesson Plan Generator |
| © {year} GogyAI | About | Assessment Tools | Quiz Generator |
| | Contact | Communication | Rubric Builder |
| | Privacy Policy | Content & Resources | Parent Email Writer |
| | Terms of Service | Classroom Management | Report Card Comments |
| | Disclaimer | | |

Bottom bar: "Made for teachers worldwide 🌍" | Back-to-top button (fixed bottom-right, appears after 300px scroll, blue circle, ↑ arrow)

---

## ADSENSE — `components/AdSlot.jsx`

```jsx
'use client'
import { useEffect } from 'react'
export default function AdSlot({ slot, format = 'auto' }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch {}
  }, [])
  return (
    <div className="my-8 flex justify-center overflow-hidden">
      <ins className="adsbygoogle" style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX" data-ad-slot={slot}
        data-ad-format={format} data-full-width-responsive="true" />
    </div>
  )
}
```

**Placement on every tool page:** (1) between tool and article (2) after 3rd article section (3) before Related Tools

---

## BYOK MODAL — `components/BYOKModal.jsx`

`'use client'` — shown when `/api/generate` returns `rateLimited: true`

- Centered overlay modal
- Message: "Our free AI limit is reached for now. Enter your free Gemini API key to continue."
- Link: "Get your free Gemini API key →" → `https://aistudio.google.com/app/apikey` (new tab)
- Password input for key
- "Save & Continue" → `localStorage.setItem('gemini_api_key', key)` → close modal
- "Not now" → close modal
- Note: "🔒 Your key is stored only in your browser. We never see it."

When key is saved: future calls go browser → Gemini directly using their key. Show green badge "Using your API key" with remove option.

---

## TOOL PAGE PATTERN

Every tool page (`app/tools/[slug]/page.jsx`) structure:

```
export const metadata = {
  title: '[Tool Name] — Free AI Tool for Teachers',
  description: '[Unique ~150 char description]',
  alternates: { canonical: 'https://gogyai.com/tools/[slug]' },
}

Page order:
1. H1 + one-line description
2. <ToolForm /> with tool-specific fields and promptTemplate
3. <ToolOutput /> (shown after generation)
4. <BYOKModal /> (hidden, shown on rate limit)
5. <AdSlot slot="SLOT_1" />
6. Full SEO article (follow article-instructions.md exactly)
7. <AdSlot slot="SLOT_2" />
8. Related Tools section (3-4 tools)
9. <AdSlot slot="SLOT_3" />
10. JSON-LD schemas (all 4)
```

**4 Required JSON-LD schemas per tool page:**

```js
// 1. WebPage
{ '@context':'https://schema.org', '@type':'WebPage', name:'[Tool] — GogyAI', url:'https://gogyai.com/tools/[slug]' }

// 2. SoftwareApplication
{ '@context':'https://schema.org', '@type':'SoftwareApplication', name:'[Tool Name]', applicationCategory:'EducationalApplication', operatingSystem:'Web', offers:{ '@type':'Offer', price:'0', priceCurrency:'USD' }, url:'https://gogyai.com/tools/[slug]' }

// 3. Article
{ '@context':'https://schema.org', '@type':'Article', headline:'[Article H1]', author:{ '@type':'Organization', name:'GogyAI' }, publisher:{ '@type':'Organization', name:'GogyAI', url:'https://gogyai.com' }, url:'https://gogyai.com/tools/[slug]' }

// 4. FAQPage — populate from actual FAQ questions in the article
{ '@context':'https://schema.org', '@type':'FAQPage', mainEntity:[ { '@type':'Question', name:'[Q]', acceptedAnswer:{ '@type':'Answer', text:'[A]' } } ] }
```

---

## THE 30 TOOLS — COMPLETE SPECS

### CATEGORY 1: LESSON PLANNING

**T01 — Lesson Plan Generator** `/tools/lesson-plan-generator`
Fields: Subject | Grade Level | Topic | Duration (min) | Learning Style [visual/auditory/kinesthetic/mixed] | No. of Students
Output: Full lesson plan — objectives, materials, intro, activities, assessment, homework

**T02 — Unit Plan Creator** `/tools/unit-plan-creator`
Fields: Subject | Grade Level | Unit Theme | No. of Weeks | Key Standards/Goals
Output: Week-by-week plan — lesson titles, assessment schedule, key skills per week

**T03 — Learning Objectives Writer** `/tools/learning-objectives-writer`
Fields: Subject | Grade Level | Topic | Bloom's Level [remember/understand/apply/analyze/evaluate/create] | No. of Objectives
Output: Measurable SMART objectives with Bloom's action verbs

**T04 — Differentiated Instruction Planner** `/tools/differentiated-instruction-planner`
Fields: Subject | Grade Level | Topic | Student Need [advanced/struggling/ELL/mixed] | Accommodation Type
Output: Differentiated activities per learner group with rationale

**T05 — Cross-Curricular Activity Generator** `/tools/cross-curricular-activity-generator`
Fields: Primary Subject | Secondary Subject | Grade Level | Topic | Duration
Output: Activity connecting both subjects — instructions, materials, assessment idea

### CATEGORY 2: ASSESSMENT & QUIZ

**T06 — Quiz / MCQ Generator** `/tools/quiz-mcq-generator`
Fields: Subject | Grade Level | Topic | No. of Questions | Difficulty [easy/medium/hard/mixed] | Type [MCQ/True-False/Mixed]
Output: Complete quiz with questions, answer options, answer key

**T07 — Rubric Builder** `/tools/rubric-builder`
Fields: Assignment Type | Grade Level | Subject | No. of Criteria | Scale [4-point/5-point/percentage]
Output: Full rubric table — criteria, performance levels, descriptors

**T08 — Essay Feedback Generator** `/tools/essay-feedback-generator`
Fields: Grade Level | Subject | Assignment Description | Student Essay (textarea) | Focus [structure/grammar/content/all]
Output: Constructive feedback — strengths section + improvement areas section

**T09 — Exit Ticket Creator** `/tools/exit-ticket-creator`
Fields: Subject | Grade Level | Lesson Topic | Type [question/reflection/rating/drawing prompt]
Output: 2-3 ready-to-use exit ticket options

**T10 — Bloom's Taxonomy Question Generator** `/tools/blooms-taxonomy-question-generator`
Fields: Subject | Grade Level | Topic | Bloom's Levels (multi-select all 6) | No. of Questions per Level
Output: Questions organized by Bloom's level with explanations

### CATEGORY 3: COMMUNICATION

**T11 — Parent Email Writer** `/tools/parent-email-writer`
Fields: Purpose [progress/behavior/achievement/meeting/general] | Grade Level | Tone [formal/warm/urgent] | Key Points (textarea)
Output: Professional email with subject line, ready to send

**T12 — Report Card Comment Generator** `/tools/report-card-comment-generator`
Fields: Performance [excellent/good/satisfactory/needs improvement] | Subject | Grade Level | Strength | Growth Area | Tone [formal/warm]
Output: 3 comment options — short, medium, detailed

**T13 — Newsletter Draft Generator** `/tools/newsletter-draft-generator`
Fields: Purpose | Grade Level | Key Announcements (textarea) | Upcoming Events | Tone [formal/friendly]
Output: Complete classroom newsletter ready to send/print

**T14 — Student Feedback Writer** `/tools/student-feedback-writer`
Fields: Assignment Type | Grade Level | Performance Level | Strengths (textarea) | Areas to Improve (textarea) | Tone [encouraging/direct/balanced]
Output: Personalized constructive student feedback

**T15 — IEP Goal Writer** `/tools/iep-goal-writer`
Fields: Grade Level | Area [reading/math/writing/behavior/communication/social] | Current Performance Level | Target Skill
Output: SMART IEP goal with measurable criteria and conditions

### CATEGORY 4: CONTENT & RESOURCES

**T16 — Worksheet Generator** `/tools/worksheet-generator`
Fields: Subject | Grade Level | Topic | Type [practice/review/introduction/enrichment] | No. of Questions
Output: Complete worksheet with instructions, questions, and answer key

**T17 — Reading Comprehension Creator** `/tools/reading-comprehension-creator`
Fields: Grade Level | Reading Level [below/at/above grade] | Topic/Theme | Length [short/medium/long] | Question Types
Output: Original passage + comprehension questions + answer key

**T18 — Vocabulary List Builder** `/tools/vocabulary-list-builder`
Fields: Subject | Grade Level | Topic or Text Title | No. of Words | Include [definitions/examples/sentences/all]
Output: Organized vocabulary list — definitions, examples, usage sentences

**T19 — Classroom Story Generator** `/tools/classroom-story-generator`
Fields: Grade Level | Genre [adventure/mystery/realistic/fable/historical] | Theme/Moral | Character Description | Setting | Length [short/medium]
Output: Original classroom-appropriate story + discussion questions

**T20 — Text Simplifier** `/tools/text-simplifier`
Fields: Original Text (textarea) | Target Grade Level | Goal [ELL/struggling readers/lower grade/special needs]
Output: Simplified version of the text at the target reading level

### CATEGORY 5: CLASSROOM MANAGEMENT

**T21 — Classroom Rules Generator** `/tools/classroom-rules-generator`
Fields: Grade Level | Class Type [elementary/middle/high/university] | Environment [traditional/collaborative/digital/lab] | No. of Rules
Output: Age-appropriate rules — student-friendly language + teacher rationale

**T22 — Behavior Intervention Plan Writer** `/tools/behavior-intervention-plan-writer`
Fields: Grade Level | Behavior Description (textarea) | Frequency [occasional/frequent/daily] | Possible Triggers | Strategies Already Tried
Output: Structured BIP — antecedents, interventions, reinforcement strategies, monitoring plan

**T23 — Seating Chart Suggestion Tool** `/tools/seating-chart-suggestion-tool`
Fields: No. of Students | Layout [rows/groups/U-shape/flexible] | Special Considerations (textarea) | Learning Focus
Output: Seating strategy recommendations + rationale + arrangement tips

**T24 — Student Interest Survey Creator** `/tools/student-interest-survey-creator`
Fields: Grade Level | Purpose [beginning of year/get-to-know-you/learning styles/goal setting] | No. of Questions | Format [open-ended/multiple choice/mixed]
Output: Complete student interest survey ready to distribute

**T25 — Weekly Schedule Planner** `/tools/weekly-schedule-planner`
Fields: Grade Level | Subject Areas (textarea) | Daily School Hours | Special Classes (PE, art etc.) | Focus [balanced/literacy/math]
Output: Draft weekly schedule with time blocks and subject rotation

### CATEGORY 6: SPECIALTY

**T26 — Field Trip Permission Letter Writer** `/tools/field-trip-permission-letter-writer`
Fields: Destination | Grade Level | Date | Learning Goals | Cost | Special Requirements | School Name
Output: Permission letter — all details, parent signature line, emergency contact section

**T27 — Science Experiment Idea Generator** `/tools/science-experiment-idea-generator`
Fields: Grade Level | Science Topic/Unit | Available Materials (textarea) | Time Available | Safety [classroom-safe/outdoor/lab only]
Output: 3 experiment ideas — materials list, procedure, hypothesis prompt, expected results

**T28 — Discussion Prompt Generator** `/tools/discussion-prompt-generator`
Fields: Subject | Grade Level | Topic or Text | Format [Socratic/think-pair-share/whole class/debate] | No. of Prompts | Thinking Level [recall/analysis/synthesis/evaluation]
Output: Discussion prompts + facilitator tips + follow-up questions

**T29 — Substitute Teacher Plan Writer** `/tools/substitute-teacher-plan-writer`
Fields: Grade Level | Subjects | No. of Periods | Behavior Notes | Available Materials | Include Emergency Format [yes/no]
Output: Complete sub folder — period-by-period instructions, classroom rules, emergency procedures

**T30 — Professional Development Goal Writer** `/tools/professional-development-goal-writer`
Fields: Role [teacher/coach/admin] | Growth Area | PD Time Available [1hr week/month] | Timeframe [semester/year] | School Priority Focus
Output: SMART PD goals — action steps, resources, success metrics

---

## HOMEPAGE — `app/page.jsx`

```
Meta title: GogyAI — Free AI Tools for Teachers | Lesson Plans, Quizzes & More
Meta description: 30+ free AI tools for teachers worldwide. Generate lesson plans, quizzes, rubrics, parent emails, IEP goals and more. No login required.
Canonical: https://gogyai.com
```

Sections in order:
1. **Hero** — H1: "Free AI Tools for Teachers — Save Hours Every Week" | subheadline | CTAs: "Explore All Tools" (blue solid) + "How It Works" (blue outline) | pure CSS bg, no images
2. **How It Works** — 3 numbered steps: Choose tool → Fill details → Get results instantly
3. **Tool Categories** — 5 cards: name + inline SVG icon + tool count + 3 tool quick links
4. **Why GogyAI** — 4 cards: Free Forever | No Login | 30+ Tools | Works Worldwide
5. **Featured Tools** — 6 tool cards: name + one-line description + "Use Tool →"
6. **Trust Bar** — "Trusted by teachers worldwide" + stats: 30+ Free Tools | No Sign-up | Any Device

---

## TRUSTED PAGES

**`app/about/page.jsx`** — Mission, how tools work, privacy commitment, no student data. WebPage schema.
**`app/contact/page.jsx`** — Contact form (name, email, message), response time note. WebPage schema.
**`app/privacy-policy/page.jsx`** — Data collected (none from students), cookies, API key storage (localStorage only), third-party services (Supabase/Gemini/Groq), GDPR/COPPA. WebPage schema.
**`app/terms-of-service/page.jsx`** — Acceptable use, no liability for AI output, teacher must review all output, IP, availability. WebPage schema.
**`app/disclaimer/page.jsx`** — All AI output must be reviewed before classroom use, no accuracy guarantee, teacher judgment paramount. WebPage schema.

---

## SITEMAP — `app/sitemap.js`

```js
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
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, priority: 0.5 },
    { url: `${base}/terms-of-service`, lastModified: now, priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: now, priority: 0.5 },
    ...TOOLS.map(s => ({ url: `${base}/tools/${s}`, lastModified: now, priority: 0.9 })),
  ]
}
```

---

## LOGO & ASSETS

- `public/logo.svg` — "GogyAI" text in #1E40AF, bold sans-serif, small graduation cap icon left
- `public/favicon.ico` — "G" in blue circle, 32×32
- `public/apple-touch-icon.png` — same, 180×180
- `public/og-image.png` — 1200×630, GogyAI logo centered, blue on white, tagline below

---

## RESPONSIVENESS

| Breakpoint | Behavior |
|---|---|
| Mobile < 640px | Single column, stacked, hamburger nav, full-width buttons, 16px min font |
| Tablet 640–1024px | 2-col tool grid, collapsible nav |
| Desktop > 1024px | 3-col tool grid, full nav, max-w-7xl centered |

Tool forms must work on 320px without horizontal scroll. BYOK modal must be scrollable on mobile.

---

## DEPLOYMENT

```bash
npm install @supabase/supabase-js
git add . && git commit -m "message" && git push
```

Hostinger: Build `npm run build` | Start `npm start` | Node 18+
Vercel: Auto-detected, add env vars in dashboard.

---

## HOW TO USE IN CLAUDE CODE

1. Open terminal in project folder
2. Run `claude`
3. Paste this file contents
4. Type: `Read progress.md. Continue from the next incomplete task.`

Or for a specific task:
```
Read GogyAI_Master_Prompt.md and article-instructions.md. Build [Header/Footer/Homepage/T01/etc].
```

After each task, Claude Code must update `progress.md`.

---
*GogyAI Master Prompt v2.0 | next/font only — no Google Fonts links | 100/100 PageSpeed target*
