import { CheckCircle, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const points = [
  'Over 15 years of field experience in Ethiopia',
  'Certified engineers and installation teams',
  'End-to-end project management from design to support',
  'Partnerships with global irrigation technology brands',
  'Proven 40%+ reduction in water usage for clients',
]

export default function About() {
  return (
    <section id="about" className="py-24 transition-colors duration-300 dark:bg-gray-900 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Images collage */}
        <ScrollReveal animation="fade-right" className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80"
              alt="Farm irrigation"
              className="rounded-3xl object-cover h-72 w-full shadow-xl dark:shadow-green-900/20"
            />
            <div className="flex flex-col gap-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=500&q=80"
                alt="Water sprinkler"
                className="rounded-3xl object-cover h-40 w-full shadow-lg dark:shadow-green-900/10"
              />
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80"
                alt="Lush crops"
                className="rounded-3xl object-cover h-[116px] w-full shadow-lg dark:shadow-green-900/10"
              />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-4 bg-green-600 text-white rounded-2xl p-5 shadow-2xl dark:shadow-green-900/40">
            <div className="text-3xl font-black">15+</div>
            <div className="text-green-200 text-sm font-medium">Years of Excellence</div>
          </div>

          {/* Green circle decoration */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20 -z-10" />
          <div className="absolute top-1/2 -right-4 w-12 h-12 rounded-full bg-yellow-300/40 dark:bg-yellow-600/20 -z-10" />
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal animation="fade-left" className="w-full">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-8 leading-tight transition-colors">
            Precision Engineering<br />
            <span className="gradient-text">Behind Ethio-Rain</span>
          </h2>
          <p className="text-gray-500 dark:text-white/60 leading-relaxed mb-10 transition-colors text-lg">
            Ethio Rain Irrigation System PLC is an Ethiopian company engaged in surveying,
            study, design, manufacturing, consulting, supply and installation of comprehensive
            irrigation & water supply systems, maintenance and after sales services. The
            company was established in 2003 E.C to set up the most recent and advanced
            center pivot Technology Company in Ethiopia
          </p>

          <ul className="space-y-4 mb-10">
            {points.map(point => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm transition-colors">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-12 mb-10 pb-8 border-b dark:border-gray-800 border-gray-100 transition-colors">
            {[
              { val: '40%', label: 'Less Water Used' },
              { val: '60%', label: 'Higher Crop Yield' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black gradient-text">{s.val}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors">{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 group">
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
