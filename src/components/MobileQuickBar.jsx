import { Phone, MessageCircle, FileText } from 'lucide-react'

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#060D1A]/95 backdrop-blur-lg border-t border-[#00D4FF]/25 px-3 sm:px-4 pt-2.5 pb-[calc(env(safe-area-inset-bottom,0px)+0.625rem)] flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
      <a
        href="tel:+251910615757"
        className="flex-1 bg-[#0038E2] hover:bg-[#0052FF] text-white text-xs font-bold min-h-[44px] py-2.5 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#0038E2]/40 transition active:scale-95 text-center"
      >
        <Phone className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
        <span className="truncate">Call Hotline</span>
      </a>

      <a
        href="https://wa.me/251910615757?text=Hello%20Ethio-Rain,%20I%20would%20like%20to%20inquire%20about%20an%20irrigation%20system."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold min-h-[44px] py-2.5 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#10B981]/30 transition active:scale-95 text-center"
      >
        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>

      <a
        href="#contact"
        className="flex-1 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 text-xs font-black min-h-[44px] py-2.5 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#F59E0B]/30 transition active:scale-95 text-center"
      >
        <FileText className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Get Quote</span>
      </a>
    </div>
  )
}
