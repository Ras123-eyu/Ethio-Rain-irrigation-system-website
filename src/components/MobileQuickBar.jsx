import React from 'react'
import { Phone, MessageCircle, FileText } from 'lucide-react'

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#060D1A]/95 backdrop-blur-lg border-t border-[#00D4FF]/25 px-4 py-2.5 flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
      <a
        href="tel:+251911000000"
        className="flex-1 bg-[#0038E2] hover:bg-[#0052FF] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#0038E2]/40 transition active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
        <span>Call Hotline</span>
      </a>

      <a
        href="https://wa.me/251911000000?text=Hello%20Ethio-Rain,%20I%20would%20like%20to%20inquire%20about%20an%20irrigation%20system."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#10B981]/30 transition active:scale-95"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <a
        href="#contact"
        className="flex-1 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 text-xs font-black py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#F59E0B]/30 transition active:scale-95"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Get Quote</span>
      </a>
    </div>
  )
}
