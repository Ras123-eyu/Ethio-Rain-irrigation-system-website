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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const socialIcons = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon]

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* CTA Banner */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-teal-500 opacity-90" />
        <div className="max-w-7xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Irrigate Smarter?
            </h2>
            <p className="text-white/80 text-lg font-medium">Join 3,200+ farmers who transformed their yields with Ethio-Rain.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-brand-blue font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
              Get Started Free
            </a>
            <a href="tel:+251911234567" className="border-2 border-white/30 text-white font-black px-10 py-5 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="/src/assets/logo.png" 
              alt="Ethio-Rain Logo" 
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="gradient-text font-black text-2xl tracking-tighter">Ethio-Rain</div>
              <div className="gradient-text text-[10px] uppercase tracking-[0.3em] font-black">Irrigation Systems</div>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-loose mb-10 font-medium">
            Empowering Ethiopia's farmers with smart, sustainable, and efficient irrigation solutions since 2009. We bring world-class technology to your soil.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-8">Our Services</h4>
          <ul className="space-y-4 text-sm font-bold text-white/40">
            {[
              'Water Supply & Electromechanical', 
              'Center Pivot & Sprinkler', 
              'Drip System', 
              'Green House', 
              'Hose Reel Systems', 
              'Design & Installation', 
              'Farm Equipment Supply', 
              'Solar Power Systems'
            ].map(s => (
              <li key={s}><a href="#services" className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/20 group-hover:bg-brand-cyan" /> {s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-8">Our Company</h4>
          <ul className="space-y-4 text-sm font-bold text-white/40">
            {['About Us', 'Our Projects', 'Gallery', 'Careers', 'Blog', 'Contact'].map(s => (
              <li key={s}><a href={`#${s.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-white" /> {s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-8">Contact Info</h4>
          <ul className="space-y-6 text-sm font-bold text-white/40">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
              <span className="leading-relaxed">Bole Road, Addis Ababa,<br />Ethiopia</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
              +251 911 234 567
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
              info@ethiorain.et
            </li>
          </ul>

         
        </div>
      </div>

      <div className="border-t border-white/5 py-10 max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 text-[11px]  uppercase tracking-[0.3em] font-black text-white/30">
        <span className="text-center sm:text-left">© {new Date().getFullYear()} Ethio-Rain Irrigation Systems P.L.C.</span>
      
      </div>
    </footer>
  )
}
