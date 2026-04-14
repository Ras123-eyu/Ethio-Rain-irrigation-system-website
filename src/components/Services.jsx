import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-24 transition-colors duration-300 dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-6 transition-colors">
            Comprehensive Irrigation<br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-8 max-w-xl mx-auto transition-colors text-lg">
            From small farms to large-scale agribusiness — we design, install, and maintain systems that work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: ServiceIcon, title, shortDesc, img, tag, slug }) => (
            <div key={title} className="card-hover group rounded-3xl overflow-hidden dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-100 shadow-sm transition-all duration-300">
              <div className="relative overflow-hidden h-48">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                <span className="absolute top-4 right-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-md">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-blue/10 p-2 rounded-xl border border-brand-blue/20">
                    <ServiceIcon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="font-bold dark:text-white text-gray-900 text-lg transition-colors">{title}</h3>
                </div>
                <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed transition-colors line-clamp-2">{shortDesc}</p>
                <Link to={`/service/${slug}`} className="mt-6 text-brand-cyan font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More 
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
