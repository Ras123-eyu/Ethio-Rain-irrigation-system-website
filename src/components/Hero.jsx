import { ArrowRight, Play } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1655048425771-daa9087aaa00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Irrigation System"
          className="w-full h-full object-fill object-center md:object-center"
        />
        <div className="hero-overlay absolute inset-0 opacity-60 md:opacity-75" />
      </div>

      {/* Animated Water Drops */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-blue/10 animate-float blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-brand-cyan/10 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

      {/* Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.6 + Math.random() * 0.6}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <ScrollReveal animation="fade-up" duration={900}>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Ethio-Rain Irrigation Systems</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
            Water Smarter,<br />
            <span className="gradient-text">Grow Exponentially</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
            Empowering Ethiopia's agricultural future with precision irrigation technology.
            From automated sprayers to intelligent water management, we bring world-class
            solutions to your soil.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#services" className="btn-primary text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 group transition-all">
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="glass text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:translate-x-0.5 transition-transform border-white/6">
              <Play className="w-4 h-4 stroke-3" />
              View Our Projects
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-10 mt-14 pt-8 border-t border-white/20">
            {[
              { value: '500+', label: 'Projects Done' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/60 text-sm mt-1 mb-20">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>

      {/* Scroll indicator */}
      <div className="absolute  bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
