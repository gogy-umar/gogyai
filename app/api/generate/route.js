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
    supabase.from('prompt_cache').insert({ prompt_hash: hash, tool_slug: toolSlug, output })
    supabase.rpc('increment_api_usage', { api: 'gemini' })
    return Response.json({ output })
  } catch (e) {
    if (!e.isRateLimit) return Response.json({ error: 'AI error' }, { status: 500 })
  }

  try {
    const output = await callGroq(prompt, process.env.GROQ_API_KEY)
    supabase.from('prompt_cache').insert({ prompt_hash: hash, tool_slug: toolSlug, output })
    supabase.rpc('increment_api_usage', { api: 'groq' })
    return Response.json({ output })
  } catch (e) {
    if (!e.isRateLimit) return Response.json({ error: 'AI error' }, { status: 500 })
  }

  return Response.json({ rateLimited: true }, { status: 429 })
}
