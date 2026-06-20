import ScrollReveal from './ScrollReveal'

const partners = [
  { name: 'Valley Irrigation', logo: 'https://www.image2url.com/r2/default/images/1781972119601-25cdf96f-2fb8-4905-948a-df4089917cc8.png' },
  { name: 'Rain Bird', logo: 'https://www.image2url.com/r2/default/images/1781972231008-fb92d373-bbf1-423a-b2b4-564854595cd9.jpg' },
]

export default function Partners() {
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

        {/* Two-partner grid */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} animation="fade-up" delay={i * 150}>
              <div className="group flex flex-col items-center gap-4">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl dark:bg-gray-800 bg-gray-50 border dark:border-white/5 border-gray-100 flex items-center justify-center p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand-cyan/10 group-hover:border-brand-cyan/30">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 rounded-md"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-3xl font-black gradient-text">${partner.name.charAt(0)}</span>`
                    }}
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest dark:text-white/40 text-gray-400 group-hover:text-brand-cyan transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
