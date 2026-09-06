import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const OWNER_EMAIL = 'aakashsrinivasan092@gmail.com'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error('Email service is not configured')
    }

    const body = await req.json().catch(() => null)
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const message = typeof body?.message === 'string' ? body.message.trim() : ''

    const errors: Record<string, string> = {}
    if (!name || name.length > 100) errors.name = 'Name is required (max 100 characters)'
    if (!email || email.length > 255 || !isValidEmail(email)) errors.email = 'A valid email is required'
    if (!message || message.length > 2000) errors.message = 'Message is required (max 2000 characters)'
    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ error: 'Validation failed', fields: errors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0b1120;color:#e2e8f0;border-radius:12px">
        <h2 style="color:#00F5D4;margin-top:0">New Portfolio Contact</h2>
        <p><strong style="color:#38BDF8">Name:</strong> ${escapeHtml(name)}</p>
        <p><strong style="color:#38BDF8">Email:</strong> ${escapeHtml(email)}</p>
        <p><strong style="color:#38BDF8">Message:</strong></p>
        <p style="white-space:pre-wrap;background:rgba(255,255,255,0.05);padding:16px;border-radius:8px;border:1px solid rgba(0,245,212,0.2)">${escapeHtml(message)}</p>
        <p style="font-size:12px;color:#64748b;margin-top:24px">Sent from your portfolio contact form.</p>
      </div>
    `

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [OWNER_EMAIL],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        html,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`Resend request failed [${response.status}]: ${errorBody}`)
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-contact-email error:', err)
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
