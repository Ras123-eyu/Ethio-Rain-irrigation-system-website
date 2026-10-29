import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { services } from '../data/services'
import ScrollReveal from './ScrollReveal'

// 6 Core Featured Specializations to highlight on the home page
const FEATURED_SLUGS = [
  'water-supply-electromechanical',
  'center-pivot-sprinkler-systems',
  'drip-system',
  'sprinkler-systems',
  'green-house-solutions',
  'solar-power-system-installation'
]

export default function Services() {
  const [showAll, setShowAll] = useState(false)

  // Prioritize featured services first, followed by remaining services
  const sortedServices = useMemo(() => {
    const featured = []
    const others = []
    services.forEach(srv => {
      if (FEATURED_SLUGS.includes(srv.slug)) {
        featured.push(srv)
      } else {
        others.push(srv)
      }
    })
    featured.sort((a, b) => FEATURED_SLUGS.indexOf(a.slug) - FEATURED_SLUGS.indexOf(b.slug))
    return [...featured, ...others]
  }, [])

  const displayedServices = showAll ? sortedServices : sortedServices.slice(0, 6)

  const handleToggle = () => {
    if (showAll) {
      const section = document.getElementById('services')
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    }
    setShowAll(prev => !prev)
  }

  return (
    <section id="services" className="py-14 sm:py-24 transition-colors duration-300 dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-16">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-4 sm:mb-6 transition-colors">
            Comprehensive Irrigation<br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-4 sm:mt-8 max-w-xl mx-auto transition-colors text-sm sm:text-base md:text-lg">
            From small commercial farms to large-scale agribusiness — we design, install, and maintain systems that work.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map(({ icon: ServiceIcon, title, shortDesc, img, tag, slug }, i) => (
            <ScrollReveal
              key={slug || title}
              staggerIndex={i % 6}
              animation="fade-up"
              className="card-hover group rounded-2xl sm:rounded-3xl overflow-hidden dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-100 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-44 sm:h-48">
                  <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                  <span className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-brand-blue text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md">
                    {tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6 pb-2">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="bg-brand-blue/10 p-2 rounded-xl border border-brand-blue/20 shrink-0">
                      <ServiceIcon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h3 className="font-bold dark:text-white text-gray-900 text-base sm:text-lg transition-colors leading-snug">{title}</h3>
                  </div>
                  <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm leading-relaxed transition-colors line-clamp-2">{shortDesc}</p>
                </div>
              </div>
              <div className="p-5 sm:p-6 pt-0">
                <Link to={`/service/${slug}`} className="mt-2 text-brand-cyan font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all min-h-[44px]">
                  Learn More 
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View More / Show Less Toggle Controls */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            type="button"
            onClick={handleToggle}
            className="btn-primary text-white text-xs sm:text-sm font-bold px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-brand-cyan/20 active:scale-95 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Featured Only (6)</span>
                <ChevronUp className="w-4 h-4 text-brand-cyan" />
              </>
            ) : (
              <>
                <span>View All Services ({services.length})</span>
                <ChevronDown className="w-4 h-4 text-brand-cyan" />
              </>
            )}
          </button>
          <p className="text-gray-400 dark:text-white/40 text-xs mt-3 transition-colors">
            {showAll
              ? `Displaying all ${services.length} Grade-1 engineering & irrigation specializations`
              : `Showing 6 core featured capabilities • Click to explore all ${services.length} services`}
          </p>
        </div>
      </div>
    </section>
  )
}
