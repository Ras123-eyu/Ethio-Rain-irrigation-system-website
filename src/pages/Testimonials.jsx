import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { testimonials, stats } from '../data/testimonials'
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="pt-24 pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 via-transparent to-brand-cyan/10" />
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-brand-blue/5 animate-float blur-3xl" />
        <div className="absolute bottom-0 right-10 w-48 h-48 rounded-full bg-brand-cyan/5 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="dark:text-white/70 text-gray-600 text-xs font-bold uppercase tracking-widest">Client Stories</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 leading-[1.1] mb-6 transition-colors">
              What Our Clients <br />
              <span className="gradient-text">Say About Us</span>
            </h1>
            <p className="dark:text-white/50 text-gray-500 text-lg leading-relaxed max-w-2xl transition-colors">
              Hear from the farmers, agribusinesses, and organizations who trust Ethio-Rain to power their irrigation infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-3xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-sm dark:text-white/40 text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-brand-blue/90 to-teal-600/90" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 p-10 md:p-16">
            <Quote className="w-12 h-12 text-white/20 mb-8" />

            <div className="min-h-[200px] transition-all duration-500">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10 max-w-4xl">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center gap-5">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-white/30 shadow-xl"
                />
                <div>
                  <div className="text-white font-black text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-white/60 text-sm font-medium">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</div>
                  <div className="text-white/40 text-xs font-bold mt-1">{testimonials[activeIndex].location}</div>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black dark:text-white text-gray-900 mb-4 transition-colors">
            More <span className="gradient-text">Success Stories</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="card-hover group p-8 rounded-3xl dark:bg-gray-900 bg-white border dark:border-white/5 border-gray-100 shadow-sm transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gray-300 dark:text-gray-700" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-brand-cyan/30 mb-3" />
              <p className="dark:text-white/60 text-gray-600 text-sm leading-relaxed mb-8 line-clamp-4 transition-colors">
                {t.text}
              </p>

              {/* Project tag */}
              <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-brand-blue/10 text-brand-cyan px-3 py-1 rounded-full border border-brand-blue/20 mb-6">
                {t.project}
              </span>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t dark:border-white/5 border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 dark:border-white/10 border-gray-200"
                />
                <div>
                  <div className="font-bold dark:text-white text-gray-900 text-sm transition-colors">{t.name}</div>
                  <div className="dark:text-white/40 text-gray-500 text-xs font-medium">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-brand-blue to-teal-500 opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-white/70 text-lg font-medium max-w-lg mx-auto mb-10">
              Let us design the perfect irrigation solution for your farm or agribusiness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="bg-white text-brand-blue font-black px-8 py-4 rounded-full hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+251911234567" className="border-2 border-white/30 text-white font-black px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
