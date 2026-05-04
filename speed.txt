
Render blocking requests Est savings of 80 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
gogyai.com 1st party
7.5 KiB	150 ms
…chunks/0kjz6.swa~lf_.css(gogyai.com)
7.5 KiB
150 ms
LCP request discovery
Optimize LCP by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loadingLCPUnscored
lazy load not applied
fetchpriority=high should be applied
Request is discoverable in initial document
Teacher using AI tools to create lesson plans and quizzes
<img alt="Teacher using AI tools to create lesson plans and quizzes" width="520" height="420" decoding="async" data-nimg="1" class="w-full max-w-md lg:max-w-lg drop-shadow-xl" style="color:transparent" src="/hero.svg">
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 133 ms
Initial Navigation
https://gogyai.com - 100 ms, 15.68 KiB
…chunks/0kjz6.swa~lf_.css(gogyai.com) - 133 ms, 7.48 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
no origins were preconnected
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Legacy JavaScript Est savings of 14 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingLCPFCPUnscored
URL
Wasted bytes
gogyai.com 1st party
13.7 KiB
…chunks/10~x95jhs6ns3.js(gogyai.com)
13.7 KiB
…chunks/10~x95jhs6ns3.js:1:6431(gogyai.com)
Array.prototype.at
…chunks/10~x95jhs6ns3.js:1:5819(gogyai.com)
Array.prototype.flat
…chunks/10~x95jhs6ns3.js:1:5932(gogyai.com)
Array.prototype.flatMap
…chunks/10~x95jhs6ns3.js:1:6308(gogyai.com)
Object.fromEntries
…chunks/10~x95jhs6ns3.js:1:6566(gogyai.com)
Object.hasOwn
…chunks/10~x95jhs6ns3.js:1:5561(gogyai.com)
String.prototype.trimEnd
…chunks/10~x95jhs6ns3.js:1:5476(gogyai.com)
String.prototype.trimStart
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
455
DOM depth
div.relative > button.flex > svg.w-4 > path
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
9
Most children
body.font-sans
<body class="font-sans antialiased bg-white text-slate-800">
33
LCP breakdown
Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
0 ms
Resource load delay
90 ms
Resource load duration
50 ms
Element render delay
1,110 ms
Teacher using AI tools to create lesson plans and quizzes
<img alt="Teacher using AI tools to create lesson plans and quizzes" width="520" height="420" decoding="async" data-nimg="1" class="w-full max-w-md lg:max-w-lg drop-shadow-xl" style="color:transparent" src="/hero.svg">
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Reduce unused JavaScript Est savings of 29 KiB
Avoid long main-thread tasks 2 long tasks found
More information about the performance of your application. These numbers don't directly affect the Performance score.



Reduce unused JavaScript Est savings of 29 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
gogyai.com 1st party
70.5 KiB	29.4 KiB
…chunks/10~x95jhs6ns3.js(gogyai.com)
70.5 KiB
29.4 KiB

Avoid long main-thread tasks 2 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
gogyai.com 1st party
160 ms
…chunks/10~x95jhs6ns3.js(gogyai.com)
1,966 ms
95 ms
https://gogyai.com
933 ms
65 ms




Background and foreground colors do not have a sufficient contrast ratio.
Low-contrast text is difficult or impossible for many users to read. Learn how to provide sufficient color contrast.
Failing Elements
Every tool is purpose-built for teachers. Pick a category below or click any to…
<p class="text-slate-500 max-w-2xl mx-auto">
30+ Free Tools Across 5 Categories Every tool is purpose-built for teachers. P…
<section id="tools" class="py-16 px-4 bg-brand-50">
5 tools
<p class="text-xs text-slate-400 mb-1">
Lesson Planning 5 tools Plan engaging lessons faster with AI assistance. Les…
<div id="lesson-planning" class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md…">
5 tools
<p class="text-xs text-slate-400 mb-1">
Assessment & Quiz 5 tools Create assessments and quizzes for any topic in mom…
<div id="assessment-quiz" class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md…">
5 tools
<p class="text-xs text-slate-400 mb-1">
Communication 5 tools Write parent emails, feedback and newsletters effortles…
<div id="communication" class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md…">
5 tools
<p class="text-xs text-slate-400 mb-1">
Content & Resources 5 tools Generate worksheets, stories and reading material…
<div id="content-resources" class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md…">
10 tools
<p class="text-xs text-slate-400 mb-1">
Classroom Management 10 tools Organise your classroom and manage student beha…
<div id="classroom-management" class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md…">
Teachers report saving an average of 5 to 8 hours each week by letting GogyAI h…
<p class="text-slate-500 text-sm leading-relaxed">
Save 5+ Hours Every Week Teachers report saving an average of 5 to 8 hours eac…
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
Every tool is built around real teaching standards. Specify your grade level an…
<p class="text-slate-500 text-sm leading-relaxed">
Curriculum-Aligned Output Every tool is built around real teaching standards. …
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
GogyAI supports teachers in the US, UK, Australia, Canada, India and beyond. En…
<p class="text-slate-500 text-sm leading-relaxed">
Works for Every Country GogyAI supports teachers in the US, UK, Australia, Can…
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
There is no sign-up, no email required and nothing is stored. Your inputs stay …
<p class="text-slate-500 text-sm leading-relaxed">
No Account, No Data Collection There is no sign-up, no email required and noth…
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
AI gives you a strong first draft — you make it yours. Copy any output and edit…
<p class="text-slate-500 text-sm leading-relaxed">
Fully Editable Output AI gives you a strong first draft — you make it yours. C…
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
Every single tool on GogyAI is permanently free. No freemium limits, no credit …
<p class="text-slate-500 text-sm leading-relaxed">
Free Forever — No Hidden Fees Every single tool on GogyAI is permanently free.…
<div class="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100">
Real feedback from educators who use GogyAI to reclaim their time and focus mor…
<p class="text-slate-500 max-w-xl mx-auto">
What Teachers Are Saying Real feedback from educators who use GogyAI to reclai…
<section class="py-16 px-4 bg-brand-50">
Grade 5 Teacher, Texas
<p class="text-xs text-slate-400">
"GogyAI has completely changed how I prepare for the week. I used to spend Sund…
<div class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 flex flex-col">
Special Education Teacher, Ohio
<p class="text-xs text-slate-400">
"The IEP Goal Writer alone is worth bookmarking this site. It saves me at least…
<div class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 flex flex-col">
Secondary Science Teacher, UK
<p class="text-xs text-slate-400">
"I was sceptical about AI tools but GogyAI proved me wrong. The quiz generator …
<div class="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 flex flex-col">
Everything you need to know before using GogyAI for the first time.
<p class="text-slate-500">
Frequently Asked Questions Everything you need to know before using GogyAI for…
<section class="py-16 px-4 bg-brand-50">
© 2026 GogyAI
<p class="text-sm text-slate-500 mt-4">
Free AI-powered tools for teachers worldwide. © 2026 GogyAI QUICK LINKS Abou…
<footer class="bg-slate-900 text-slate-300 pt-12 pb-8">
Made for teachers worldwide 🌍
<div class="border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
Free AI-powered tools for teachers worldwide. © 2026 GogyAI QUICK LINKS Abou…
<footer class="bg-slate-900 text-slate-300 pt-12 pb-8">