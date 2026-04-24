import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 transition-colors duration-300 dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4 transition-colors">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-6 transition-colors">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-8 max-w-lg mx-auto transition-colors text-lg">
            Real results across Ethiopia's diverse agricultural regions.
          </p>
        </div>

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
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold">Area</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{area}</div>
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold">System</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{type}</div>
                </div>
                <Link to={`/project/${slug}`} className="text-brand-cyan font-black text-xs uppercase tracking-widest hover:underline justify-self-end">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
