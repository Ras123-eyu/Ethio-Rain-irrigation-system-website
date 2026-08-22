import { ArrowRight, Play, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1655048425771-daa9087aaa00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Irrigation System"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0 opacity-80 md:opacity-75" />
      </div>

      {/* Animated Water Drops */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#0052FF]/20 animate-float blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#00D4FF]/20 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

      {/* Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.7 + Math.random() * 0.7}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <ScrollReveal animation="fade-up" duration={900}>
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 backdrop-blur-md border border-[#00D4FF]/30 rounded-full px-3.5 py-1.5 mb-5 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[#00D4FF] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
              Ethio-Rain Irrigation Systems
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.08] mb-5 tracking-tight">
            Water Smarter,<br />
            <span className="gradient-text">Grow Exponentially</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            Empowering Ethiopia's agricultural future with precision irrigation technology.
            From automated center pivots to intelligent drip and solar pumping, we bring world-class
            solutions to your soil.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
            <a 
              href="#services" 
              className="btn-primary text-white font-extrabold px-7 py-4 rounded-full flex items-center justify-center gap-2 group transition-all text-sm sm:text-base text-center shadow-lg shadow-[#0038E2]/40 active:scale-95"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              className="glass text-white font-bold px-7 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm sm:text-base text-center border-[#00D4FF]/25 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              View Our Projects
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 mt-10 md:mt-14 pt-6 border-t border-white/15 max-w-lg">
            {[
              { value: '500+', label: 'Projects Done' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Satisfaction' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black text-white gradient-text">{s.value}</div>
                <div className="text-slate-300 text-[11px] sm:text-xs mt-0.5 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator (Desktop only) */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-white/50 text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00D4FF]/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
