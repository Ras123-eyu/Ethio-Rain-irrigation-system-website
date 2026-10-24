import ScrollReveal from './ScrollReveal'

const partners = [
  { 
    name: 'Valley Irrigation', 
    category: 'Center Pivot Equipment',
    logo: '/images/img_b5ebd0286c11.webp' 
  },
  { 
    name: 'Rain Bird', 
    category: 'Drip, Turf & Sprinklers',
    logo: '/images/img_0fcd59ea215d.webp' 
  },
  { 
    name: 'Wilo', 
    category: 'Pumps & Building Technology',
    logo: '/wilo-logo.svg' 
  },
]

export default function Partners() {
  return (
    <section className="py-14 sm:py-20 transition-colors duration-300 dark:bg-gray-900 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-14">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4">Trusted Partners</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-gray-900 mb-3 sm:mb-4 transition-colors">
            Our <span className="gradient-text">Global Partners</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/50 mt-4 sm:mt-6 max-w-lg mx-auto transition-colors text-sm sm:text-base">
            We partner with world-leading irrigation and agricultural technology brands to deliver the best solutions.
          </p>
        </ScrollReveal>

        {/* Two-partner grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} animation="fade-up" delay={i * 150}>
              <div className="group flex flex-col items-center gap-3 sm:gap-4">
                <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl sm:rounded-2xl dark:bg-gray-800 bg-gray-50 border dark:border-white/5 border-gray-100 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand-cyan/10 group-hover:border-brand-cyan/30">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 rounded-md"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-2xl sm:text-3xl font-black gradient-text">${partner.name.charAt(0)}</span>`
                    }}
                  />
                </div>
                <div className="text-center">
                  <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider dark:text-white/80 text-gray-800 group-hover:text-brand-cyan transition-colors duration-300">
                    {partner.name}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 dark:text-white/40 mt-0.5 sm:mt-1">
                    {partner.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
