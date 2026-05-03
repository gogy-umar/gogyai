# CLAUDE CODE — GogyAI.com Internal Linking

## MISSION
Add 5–7 contextual in-article links per tool page. Nothing else.

## SESSION START
```bash
cat progress.md   # find first [ ] — that is your start point
cat links.md      # load all rules into memory — do not re-read mid-session
```

## FIND FILES (run once per session)
```bash
find . -name "*.jsx" -o -name "*.tsx" -o -name "*.html" -o -name "*.mdx" | grep -v node_modules | grep -v ".next" | sort
```
Pages likely live as: `app/[slug]/page.tsx` or `pages/[slug].tsx` or similar.
Identify the pattern from the first result, apply to all.

---

## PER-PAGE WORKFLOW — 4 STEPS

### STEP 1 — Locate article text zones (no full read)
```bash
FILE="app/[slug]/page.tsx"   # adjust path per actual structure

# First paragraph zone
grep -n '<p\|{.*content\|description\|intro' "$FILE" | head -6

# Middle zone
TOTAL=$(wc -l < "$FILE"); MID=$((TOTAL/2))
grep -n '<p\|<h2\|<h3\|<section' "$FILE" | awk -F: -v m=$MID 'int($1)>=m-25 && int($1)<=m+25'

# End of article (stop before related/suggested section)
grep -n 'related\|suggested\|also.*try\|more.*tools\|<\/main\|<\/article\|faq\|FAQ' "$FILE" | tail -8
```

### STEP 2 — Check existing internal links
```bash
grep -n 'gogyai\.com/\|href="/' "$FILE"
```
Keep good existing links. Replace weak anchors. Skip if already 5+ quality links exist.

### STEP 3 — Build 5–7 links from links.md
Required (must include):
- 1× home: `https://gogyai.com/` 
- 3–5× siblings from sibling map in links.md (pick by topic fit)

Placement:
- First `<p>` → home link + 1 sibling (wrap existing words)
- Middle section → 2 siblings
- End of article (before related section) → 1–2 siblings
- FAQ answer if present → 1 sibling max

### STEP 4 — Insert with str_replace (surgical — never rewrite file)
Wrap existing words in the paragraph with `<a>` tags.
Do NOT add new sentences. Do NOT add new paragraphs.

**React/JSX format:**
```jsx
<a href="https://gogyai.com/lesson-plan-generator" title="AI Lesson Plan Generator">Lesson Plan Generator</a>
```

**HTML format:**
```html
<a href="https://gogyai.com/lesson-plan-generator" title="AI Lesson Plan Generator">Lesson Plan Generator</a>
```

Use whichever matches the file format.

---

## RULES

### NEVER
- Read the full file
- Touch related/suggested tools section
- Touch header, nav, breadcrumbs, footer, JS logic, CSS, tool widget
- Add duplicate links (check Step 2 first)
- Use same anchor text for same URL as used on a previous page this session

### ALWAYS
- Absolute URLs: `https://gogyai.com/[slug]`
- Add `title=""` to every link
- Rotate A/B/C anchors from links.md anchor bank
- Wrap existing words — don't insert new text

---

## AFTER EACH PAGE
```bash
# Mark done in progress.md
sed -i 's/| LP1 | lesson-plan-generator | \[ \]/| LP1 | lesson-plan-generator | [x]/' progress.md
```
Then immediately move to next [ ] item.

---

## EDGE CASES
- **No article text** (pure widget page): mark `[s]`, add note in progress.md
- **404 / missing file**: mark `[s]`, add note
- **Already has 5+ good links**: improve weak anchors only, mark `[x]`

## TOTAL: 30 pages. Read PROMPT.md to resume any session.
