/**
 * Vercel Serverless Function — Telegram Lead Notification
 * Endpoint: POST /api/send-telegram
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, reason: 'Method Not Allowed' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('[send-telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured on server.')
    return res.status(500).json({ success: false, reason: 'Telegram credentials not configured on server.' })
  }

  const data = req.body || {}

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
    const tgRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message.trim(),
        parse_mode: 'HTML',
      }),
    })

    const result = await tgRes.json()

    if (!tgRes.ok || !result.ok) {
      console.error('[send-telegram] Telegram API error:', result)
      return res.status(502).json({ success: false, reason: result.description || 'Telegram API error' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[send-telegram] Network error:', err)
    return res.status(500).json({ success: false, reason: err.message || 'Server error' })
  }
}

function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .slice(0, 1500)
}
