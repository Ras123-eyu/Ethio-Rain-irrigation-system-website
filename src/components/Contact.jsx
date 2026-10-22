import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Sparkles, Clock, ShieldCheck, SendHorizontal } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { sendTelegramQuotation } from '../services/telegram'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    systemType: 'Center Pivot Irrigation',
    farmArea: '',
    location: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [telegramDelivered, setTelegramDelivered] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await sendTelegramQuotation(formData)
      setTelegramDelivered(res.success)
      setSubmitted(true)
    } catch {
      setTelegramDelivered(false)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Ethio-Rain Team,\n\nI am requesting a quotation for:\n- Name: ${formData.name || 'Interested Client'}\n- Phone: ${formData.phone || 'N/A'}\n- System: ${formData.systemType}\n- Land Area: ${formData.farmArea || 'N/A'} Ha\n- Location: ${formData.location || 'Ethiopia'}\n\nPlease contact me.`
    )
    window.open(`https://wa.me/251910615757?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const handleTelegramDirect = () => {
    window.open('https://t.me/Ethiorain_Quotation_bot', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#030712] text-white">
      {/* Background Greenery Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/img_4ab4e79145ef.webp"
          alt="Lush agricultural irrigation field"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/95 to-[#030712]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest">
              Direct Engineering Consultation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Request a <span className="gradient-text">Project Quotation</span>
          </h2>
          <div className="section-divider mx-auto my-6" />
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Whether you are planning a 500-hectare commercial center pivot or a high-efficiency horticultural drip layout, our certified irrigation engineers provide on-site agronomic surveys and turn-key designs.
          </p>
        </ScrollReveal>

        {/* Dual Column Layout: Form + Location & Map */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Quotation Form (7 cols) */}
          <ScrollReveal animation="fade-right" className="lg:col-span-7 bg-[#0B172B]/90 backdrop-blur-2xl border border-[#00D4FF]/25 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center animate-fade-in space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-3">
                    <SendHorizontal className="w-3.5 h-3.5" />
                    {telegramDelivered ? 'Dispatched to Engineering Telegram Desk' : 'Quotation In Progress'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                    Quotation Request Received!
                  </h3>
                </div>
                <p className="text-slate-300 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                  Thank you, <span className="text-[#00D4FF] font-bold">{formData.name || 'Valued Partner'}</span>. Your irrigation specifications have been logged for our senior engineering team.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                  <button
                    onClick={handleTelegramDirect}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#0088cc]/30 transition-all"
                  >
                    <SendHorizontal className="w-4 h-4" /> Message via Telegram
                  </button>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" /> Message via WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        systemType: 'Center Pivot Irrigation',
                        farmArea: '',
                        location: '',
                        message: ''
                      })
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#00D4FF]">
                    Farm Details & Requirements
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>Free Feasibility Estimate</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abebe Bikila"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +251 91 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      System Type Interested In
                    </label>
                    <select
                      value={formData.systemType}
                      onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    >
                      <option value="Center Pivot Irrigation">Center Pivot Irrigation</option>
                      <option value="Precision Drip System">Precision Drip System</option>
                      <option value="Solar Powered Submersible Pump">Solar Powered Submersible Pump</option>
                      <option value="Commercial Greenhouse Irrigation">Commercial Greenhouse Irrigation</option>
                      <option value="Hose Reel & Travelling Sprinkler">Hose Reel & Travelling Sprinkler</option>
                      <option value="Electromechanical Water Supply">Electromechanical Water Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Farm Area (Hectares)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 50"
                      value={formData.farmArea}
                      onChange={(e) => setFormData({ ...formData, farmArea: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Farm Location / Region
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Awash Valley, Oromia, Amhara"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Notes & Water Source
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your water source (river, borehole, reservoir), soil conditions, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 btn-primary text-white font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-[#0038E2]/40 transition disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Processing Request...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Request Official Quotation
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" /> Quick WhatsApp
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-1 gap-2">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <SendHorizontal className="w-3.5 h-3.5 text-[#00D4FF]" />
                    Instant notification sent to engineering Telegram desk
                  </span>
                  <span className="text-[#10B981] font-bold">✓ 24h Response SLA</span>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* Right Column: Office Location & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal animation="fade-left" className="bg-[#0B172B]/80 border border-slate-800 rounded-[2.5rem] p-8 shadow-xl">
              <h3 className="text-xl font-extrabold text-white mb-6">
                Headquarters & Workshop
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Office Address</div>
                    <div className="text-white font-semibold mt-1 leading-snug">
                      Near Dembel City Center, M.K.A.AS Business Center, Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0038E2]/20 text-[#00D4FF] border border-[#0038E2]/40 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Direct Phone Lines</div>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+251901864466" className="block text-white hover:text-[#00D4FF] font-semibold transition">
                        +251 901 86 44 66
                      </a>
                      <a href="tel:+251912882881" className="block text-white hover:text-[#00D4FF] font-semibold transition">
                        +251 912 88 28 81
                      </a>
                      <a href="tel:+251910615757" className="block text-white hover:text-[#00D4FF] font-semibold transition">
                        +251 910 61 57 57
                      </a>
                      <a href="tel:+251118886644" className="block text-white hover:text-[#00D4FF] font-semibold transition">
                        +251 118 88 66 44 <span className="text-xs text-slate-400 font-normal">(Office Landline)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Official Email</div>
                    <a href="mailto:info@ethiorain.com" className="text-white hover:text-[#00D4FF] font-semibold mt-1 block transition">
                      info@ethiorain.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Legal Qualification</div>
                    <div className="text-white font-semibold mt-1 leading-snug">
                      Grade-1 Water Works Contractor<br />
                      <span className="text-xs text-slate-300 font-normal">Manufacturing of Special Purpose Machinery</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Working Hours</div>
                    <div className="text-white font-semibold mt-1">
                      Mon – Sat: 8:30 AM – 5:30 PM (EAT)
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Embedded Google Map */}
            <ScrollReveal animation="fade-left" delay={150} className="h-64 sm:h-72 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe
                title="Ethio-Rain Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1485019125002!2d38.767233235229625!3d9.003057398062387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857367dd87b5%3A0x8edd7a5d87f3f4ca!2sEthio%20Rain%20Irrigation%20Systems%20PLC!5e1!3m2!1sen!2set!4v1776456424804!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
