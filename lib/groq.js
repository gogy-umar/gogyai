export async function callGroq(prompt, apiKey) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    }),
  })
  if (res.status === 429) throw { isRateLimit: true }
  if (!res.ok) throw new Error('Groq error')
  const data = await res.json()
  return data.choices[0].message.content
}
