import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 via-transparent to-brand-cyan/10" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-blue/5 animate-float blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-brand-cyan/5 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="dark:text-white/70 text-gray-600 text-xs font-bold uppercase tracking-widest">Our Work</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 leading-[1.1] mb-6 transition-colors">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="dark:text-white/50 text-gray-500 text-lg leading-relaxed max-w-2xl transition-colors">
              Discover our extensive portfolio of successful irrigation and water supply projects across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map(({ slug, title, location, area, type, img, tag }) => (
            <div key={slug} className="card-hover group rounded-[2.5rem] overflow-hidden dark:bg-brand-dark bg-white shadow-xl border dark:border-white/5 border-gray-100 transition-all duration-300">
              <div className="relative overflow-hidden h-72">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full mb-3 inline-block shadow-2xl backdrop-blur-md ${
                    tag === 'Completed' ? 'bg-brand-blue text-white' : 'bg-brand-cyan text-brand-black'
                  }`}>{tag}</span>
                  <h3 className="text-white font-extrabold text-2xl leading-tight drop-shadow-2xl">{title}</h3>
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm items-end">
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold">Location</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{location}</div>
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold">System</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{type}</div>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Link to={`/project/${slug}`} className="text-brand-cyan font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
