/**
 * Netlify Serverless Function — Telegram Lead Notification
 *
 * Keeps TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID secure on the server.
 * Set these as Environment Variables in Netlify Dashboard →
 *   Site Settings → Environment Variables.
 *
 * The frontend calls POST /.netlify/functions/send-telegram
 */

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, reason: 'Method Not Allowed' }),
    }
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('[send-telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set.')
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, reason: 'Telegram credentials not configured on server.' }),
    }
  }

  let data
  try {
    data = JSON.parse(event.body)
  } catch {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, reason: 'Invalid JSON body.' }),
    }
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Africa/Addis_Ababa',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const message = `
🌱 <b>NEW QUOTATION REQUEST</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${escapeHtml(data.name || 'Anonymous')}
📞 <b>Phone:</b> ${escapeHtml(data.phone || 'N/A')}
✉️ <b>Email:</b> ${escapeHtml(data.email || 'None')}
💧 <b>System:</b> ${escapeHtml(data.systemType || 'General Inquiry')}
🌾 <b>Farm Area:</b> ${data.farmArea ? `${escapeHtml(data.farmArea)} Hectares` : 'Not specified'}
📍 <b>Location:</b> ${escapeHtml(data.location || 'Not specified')}
📝 <b>Notes:</b>
<i>${escapeHtml(data.message || 'No additional notes provided.')}</i>
━━━━━━━━━━━━━━━━━━━━
⏰ <b>Time (EAT):</b> ${timestamp}
`

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message.trim(),
        parse_mode: 'HTML',
      }),
    })

    const result = await res.json()

    if (!res.ok || !result.ok) {
      console.error('[send-telegram] Telegram API error:', result)
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, reason: result.description || 'Telegram API error' }),
      }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('[send-telegram] Network error:', err)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, reason: err.message || 'Server error' }),
    }
  }
}

/**
 * Sanitizes user input before rendering in Telegram HTML parse mode.
 * Prevents HTML injection, tag breaking, and non-printable control characters.
 */
function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .slice(0, 1500)
}
