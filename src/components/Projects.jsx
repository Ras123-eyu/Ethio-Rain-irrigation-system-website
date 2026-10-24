import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-24 transition-colors duration-300 dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-16">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4 transition-colors">Our Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-4 sm:mb-6 transition-colors">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-4 sm:mt-8 max-w-lg mx-auto transition-colors text-sm sm:text-base md:text-lg">
            Real results across Ethiopia's diverse agricultural regions.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {projectsData.slice(0, 4).map(({ slug, title, location, type, img, tag }, i) => (
            <ScrollReveal
              key={slug}
              staggerIndex={i}
              animation="fade-up"
              className="card-hover group rounded-2xl sm:rounded-[2.5rem] overflow-hidden dark:bg-brand-dark bg-white shadow-xl border dark:border-white/5 border-gray-100 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52 sm:h-72">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <span className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 inline-block shadow-2xl backdrop-blur-md ${tag === 'Completed' ? 'bg-brand-blue text-white' : 'bg-brand-cyan text-brand-black'
                    }`}>{tag}</span>
                  <h3 className="text-white font-extrabold text-lg sm:text-2xl leading-tight drop-shadow-2xl line-clamp-2">{title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-8 grid grid-cols-2 gap-4 sm:gap-6 text-sm items-end">
                <div>
                  <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest mb-1.5 sm:mb-2 font-bold">Location</div>
                  <div className="font-bold text-xs sm:text-sm text-gray-800 dark:text-white/80 transition-colors">{location}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest mb-1.5 sm:mb-2 font-bold">System</div>
                  <div className="font-bold text-xs sm:text-sm text-gray-800 dark:text-white/80 transition-colors truncate">{type}</div>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Link to={`/project/${slug}`} className="text-brand-cyan font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1 min-h-[44px]">
                    Details →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" className="mt-10 sm:mt-16 text-center">
          <Link to="/projects" className="btn-primary text-white text-xs sm:text-sm font-bold px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl w-full sm:w-auto min-h-[48px] active:scale-95">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
