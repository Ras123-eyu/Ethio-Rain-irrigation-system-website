import { useState, useEffect, useCallback } from 'react'
import { testimonials } from '../data/testimonials'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total])
  const prev = () => setActive((p) => (p - 1 + total) % total)

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 transition-colors duration-300 dark:bg-gray-950 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-6 transition-colors">
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Slide Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-blue/90 to-teal-600/90" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <Quote className="w-10 h-10 text-white/15 mb-6" />

              {/* Testimonial text with fade transition */}
              <div
                key={active}
                className="animate-fade-in"
              >
                <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/30 shadow-xl"
                    />
                    <div>
                      <div className="text-white font-black text-base">{t.name}</div>
                      <div className="text-white/60 text-sm font-medium">{t.role}, {t.company}</div>
                      <div className="text-white/35 text-xs font-bold mt-0.5">{t.location}</div>
                    </div>
                  </div>

                  <div className="sm:ml-auto flex items-center gap-3">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      {Array.from({ length: 5 - t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-white/20" />
                      ))}
                    </div>
                    {/* Project badge */}
                    <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-widest bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10">
                      {t.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active
                      ? 'w-8 bg-brand-cyan'
                      : 'w-2 dark:bg-white/20 bg-gray-300 hover:bg-brand-cyan/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border dark:border-white/10 border-gray-200 flex items-center justify-center dark:text-white/50 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border dark:border-white/10 border-gray-200 flex items-center justify-center dark:text-white/50 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
