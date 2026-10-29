import { CheckCircle, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const points = [
  'Grade-1 Water Works Contractor & Special Purpose Machinery Manufacturer',
  'Established in 2003 E.C. – Over 15 years of engineering excellence in Ethiopia',
  '35+ major projects executed across commercial farms and government bureaus',
  'Over 10,000+ hectares irrigated through modern center pivot and drip schemes',
  'Global technology partnerships with Valley Irrigation, Rain Bird, and Wilo',
  'Team of 18 permanent and contract irrigation engineers and technical specialists',
]

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 transition-colors duration-300 dark:bg-gray-900 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Images collage */}
        <ScrollReveal animation="fade-right" className="relative pb-6 sm:pb-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/images/img_f4fc84da4ae0.webp"
              alt="Farm irrigation"
              loading="lazy"
              className="rounded-2xl sm:rounded-3xl object-cover h-56 sm:h-72 w-full shadow-xl dark:shadow-green-900/20"
            />
            <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-8">
              <img
                src="/images/img_cbfe287c3a29.webp"
                alt="Water sprinkler"
                loading="lazy"
                className="rounded-2xl sm:rounded-3xl object-cover h-28 sm:h-40 w-full shadow-lg dark:shadow-green-900/10"
              />
              <img
                src="/images/img_aa679fa269f4.webp"
                alt="Lush crops"
                loading="lazy"
                className="rounded-2xl sm:rounded-3xl object-cover h-24 sm:h-[116px] w-full shadow-lg dark:shadow-green-900/10"
              />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 sm:-bottom-6 left-2 sm:-left-4 btn-primary text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-2xl dark:shadow-green-900/40">
            <div className="text-xl sm:text-3xl font-black">Grade 1</div>
            <div className="text-white text-xs sm:text-sm font-medium">Water Works Contractor</div>
          </div>

          {/* Green circle decoration */}
          <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full btn-primary -z-10 opacity-70" />
          <div className="absolute top-1/2 -right-4 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-brand-cyan/70 -z-10" />
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal animation="fade-left" className="w-full">
          <p className="text-brand-cyan font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-4 sm:mb-8 leading-tight transition-colors">
            Precision Engineering<br />
            <span className="gradient-text">Behind Ethio-Rain</span>
          </h2>
          <p className="text-gray-500 dark:text-white/60 leading-relaxed mb-6 sm:mb-10 transition-colors text-sm sm:text-base md:text-lg">
            Ethio-Rain Irrigation Systems PLC is an Ethiopian Grade-1 Water Works Contractor and 
            special-purpose machinery manufacturer established in 2003 E.C. We are engaged in surveying, 
            feasibility studies, study & design, BOQ preparation, manufacturing, consulting, equipment supply, 
            installation, commissioning, training, supervision, water supply & electromechanical systems, 
            irrigation control systems, complete greenhouse solutions, and solar power installations across Ethiopia.
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {points.map(point => (
              <li key={point} className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-8 sm:gap-12 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b dark:border-gray-800 border-gray-100 transition-colors">
            {[
              { val: '10,000+', label: 'Hectares Irrigated' },
              { val: '35+', label: 'Major Projects Done' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black gradient-text">{s.val}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1 transition-colors">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <a href="/#contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 group w-full sm:w-auto min-h-[48px] active:scale-95 text-center text-sm sm:text-base">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/#team" className="inline-flex items-center gap-3 group p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover object-top" src="/images/team/gulelat_sitotaw.webp" alt="Gulelat Sitotaw" loading="lazy" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover object-top" src="/images/team/fitsum_tadesse.webp" alt="Fitsum Tadesse" loading="lazy" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover object-top" src="/images/team/nahom_yiheyis.webp" alt="Nahom Yiheyis" loading="lazy" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover object-top" src="/images/team/lidiya_nigusse.webp" alt="Lidiya Nigussie" loading="lazy" />
              </div>
              <div className="text-left text-xs pr-2">
                <p className="font-bold text-gray-900 dark:text-white group-hover:text-brand-cyan transition-colors">Executive Team</p>
                <p className="text-[11px] text-gray-500 dark:text-white/50">Meet Leadership &rarr;</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
