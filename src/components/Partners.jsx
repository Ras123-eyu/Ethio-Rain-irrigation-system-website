import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const partners = [
  { name: 'Valley Irrigation', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.valleyirrigation.com&size=128' },
  { name: 'Netafim', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.netafim.com&size=128' },
  { name: 'Grundfos', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.grundfos.com&size=128' },
  { name: 'John Deere', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.deere.com&size=128' },
  { name: 'Jain Irrigation', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.jains.com&size=128' },
  { name: 'Rivulis', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.rivulis.com&size=128' },
  { name: 'Hunter', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hunterindustries.com&size=128' },
  { name: 'Rain Bird', logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.rainbird.com&size=128' },
]

export default function Partners() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId
    let offset = 0
    const speed = 0.5

    const animate = () => {
      offset += speed
      if (offset >= el.scrollWidth / 2) offset = 0
      el.style.transform = `translateX(-${offset}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-20 transition-colors duration-300 dark:bg-gray-900 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">Trusted Partners</p>
          <h2 className="text-3xl md:text-4xl font-extrabold dark:text-white text-gray-900 mb-4 transition-colors">
            Our <span className="gradient-text">Global Partners</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/50 mt-6 max-w-lg mx-auto transition-colors text-base">
            We partner with world-leading irrigation and agricultural technology brands to deliver the best solutions.
          </p>
        </ScrollReveal>
      </div>

      {/* Scrolling Marquee */}
      <ScrollReveal animation="fade-up" delay={200} className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r dark:from-gray-900 from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l dark:from-gray-900 from-white to-transparent pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-12 items-center w-max will-change-transform">
            {/* Duplicate the list for seamless looping */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="shrink-0 group flex flex-col items-center gap-3 px-6"
              >
                <div className="w-32 h-32 rounded-2xl dark:bg-gray-800 bg-gray-50 border dark:border-white/5 border-gray-100 flex items-center justify-center p-5 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand-cyan/30">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain opacity-75 grayscale-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all rounded-md"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-xl font-black gradient-text">${partner.name.charAt(0)}</span>`
                    }}
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest dark:text-white/30 text-gray-400 group-hover:text-brand-cyan transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
