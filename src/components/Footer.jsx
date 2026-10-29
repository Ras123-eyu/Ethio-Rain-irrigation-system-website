import { Mail, Phone, MapPin } from 'lucide-react'

// Inline SVG social icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
  </svg>
)

const socialLinks = [
  { icon: TelegramIcon, name: 'Telegram', href: 'https://t.me/Ethiorain_Quotation_bot' },
  { icon: FacebookIcon, name: 'Facebook', href: 'https://facebook.com/ethiorain' },
  { icon: LinkedinIcon, name: 'LinkedIn', href: 'https://linkedin.com/company/ethio-rain' },
  { icon: TwitterIcon, name: 'X (Twitter)', href: 'https://twitter.com/ethiorain' },
  { icon: InstagramIcon, name: 'Instagram', href: 'https://instagram.com/ethiorain' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* CTA Banner */}
      <div className="relative py-14 sm:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-teal-500 opacity-90" />
        <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
              Ready to Irrigate Smarter?
            </h2>
            <p className="text-white/80 text-base sm:text-lg font-medium">Partner with Ethiopia's leading Grade-1 Water Works Contractor.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full md:w-auto">
            <a href="/#contact" className="bg-white text-brand-blue font-black px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-2 text-center text-base">
              Request Quotation
            </a>
            <a href="tel:+251901864466" className="border-2 border-white/30 text-white font-black px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] rounded-full hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm flex items-center justify-center text-center text-base">
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
        <div className="animate-fade-in">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <img
              src="/images/img_4f6613efa42b.webp"
              alt="Ethio-Rain Logo"
              loading="lazy"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div>
              <div className="gradient-text font-black text-2xl tracking-tighter">Ethio-Rain</div>
              <div className="gradient-text text-[10px] uppercase tracking-[0.3em] font-black">Irrigation Systems</div>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed sm:leading-loose mb-8 sm:mb-10 font-medium">
            Grade-1 Water Works Contractor & Special Purpose Machinery Manufacturer established in 2003 E.C. Delivering precision irrigation, electromechanical systems, and sustainable water solutions across Ethiopia.
          </p>
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map(({ icon: Icon, name, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-brand-cyan/5 active:scale-95 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-6 sm:mb-8">Our Services</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm font-bold text-white/40">
            {[
              'Water Supply & Electromechanical',
              'Center Pivot & Sprinkler Systems',
              'Drip Irrigation Systems',
              'Complete Greenhouse Solutions',
              'Study, Design & Feasibility',
              'Submersible Pumping & Drilling',
              'HDPE Piping & Welding',
              'Solar Power Systems Supply'
            ].map(s => (
              <li key={s}><a href="/#services" className="hover:text-white transition-all flex items-center gap-2 py-1 min-h-[40px] group"><span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/20 group-hover:bg-brand-cyan" /> {s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-6 sm:mb-8">Our Company</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm font-bold text-white/40">
            {['About', 'Executive Team', 'Projects', 'Products', 'Contact'].map(s => (
              <li key={s}><a href={s === 'Executive Team' ? '/#team' : `/#${s.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-all flex items-center gap-2 py-1 min-h-[40px] group"><span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-white" /> {s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-6 sm:mb-8">Contact Info</h4>
          <ul className="space-y-4 sm:space-y-6 text-sm font-bold text-white/40">
            <li className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <span className="leading-relaxed">Near Dembel City Center,<br />M.K.A.AS Business Center,<br />Addis Ababa, Ethiopia</span>
            </li>
            <li className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <a href="tel:+251901864466" className="hover:text-white transition-all active:text-brand-cyan py-0.5 min-h-[32px] inline-flex items-center">+251 901 86 44 66</a>
                <a href="tel:+251912882881" className="hover:text-white transition-all active:text-brand-cyan py-0.5 min-h-[32px] inline-flex items-center">+251 912 88 28 81</a>
              </div>
            </li>
            <li className="flex items-center gap-3.5">
              <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
              <a href="mailto:info@ethiorain.com" className="hover:text-white transition-all active:text-brand-cyan py-1 min-h-[36px] inline-flex items-center">info@ethiorain.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 sm:py-10 pb-[calc(env(safe-area-inset-bottom,0px)+4.5rem)] md:pb-10 max-w-7xl mx-auto px-4 sm:px-6 flex justify-center items-center gap-6 text-[11px] uppercase tracking-[0.3em] font-black text-white/30">
        <span className="text-center sm:text-left">© {new Date().getFullYear()} Ethio-Rain Irrigation Systems P.L.C.</span>
      </div>
    </footer>
  )
}
