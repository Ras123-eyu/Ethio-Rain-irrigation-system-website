/**
 * Telegram Notification Service for Ethio-Rain Quotation Requests
 */

export async function sendTelegramQuotation(data) {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Africa/Addis_Ababa',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  // Format message using HTML parse_mode for safe rendering
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

  // If credentials are not configured in .env yet
  if (!botToken || !chatId) {
    console.warn(
      '[Telegram Service] VITE_TELEGRAM_BOT_TOKEN or VITE_TELEGRAM_CHAT_ID not configured in .env.'
    )
    return {
      success: false,
      reason: 'unconfigured',
      formattedText: message,
    }
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message.trim(),
        parse_mode: 'HTML',
      }),
    })

    const result = await res.json()

    if (!res.ok || !result.ok) {
      console.error('[Telegram Service Error]', result)
      return {
        success: false,
        reason: result.description || 'Failed to send to Telegram',
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[Telegram Service Network Error]', err)
    return {
      success: false,
      reason: err.message || 'Network error',
    }
  }
}

function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
