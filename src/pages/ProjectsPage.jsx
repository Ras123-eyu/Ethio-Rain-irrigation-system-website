import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { projectsData } from '../data/projects'
import { ChevronLeft, ChevronRight, ArrowRight, LayoutGrid, Map } from 'lucide-react'
import SEO from '../components/SEO'
import EthiopiaProjectsMap from '../components/EthiopiaProjectsMap'

const PROJECTS_PER_PAGE = 6

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'map'
  const gridRef = useRef(null)

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    // Smooth scroll to grid top
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  // Build page number array with ellipsis logic
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="pt-24 pb-24 transition-colors duration-300 dark:bg-gray-900 bg-white min-h-screen">
      <SEO title="Projects" description="Discover our extensive portfolio of successful irrigation and water supply projects across Ethiopia." />
      {/* Hero Banner */}
      <section className="relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 via-transparent to-brand-cyan/10" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-blue/5 animate-float blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-brand-cyan/5 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="dark:text-white/70 text-gray-600 text-xs font-bold uppercase tracking-widest">Our Work</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 leading-[1.1] mb-6 transition-colors">
              All <br />
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="dark:text-white/50 text-gray-500 text-lg leading-relaxed max-w-2xl transition-colors mb-8">
              Discover our extensive portfolio of 35+ successful irrigation, deep borehole, and electromechanical water supply projects across Ethiopia.
            </p>

            {/* View Mode Toggle */}
            <div className="inline-flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  viewMode === 'grid'
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-100'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Grid Portfolio ({projectsData.length})</span>
              </button>

              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  viewMode === 'map'
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-100'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue'
                }`}
              >
                <Map className="w-4 h-4" />
                <span>Interactive Regional Map</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Render Map View or Grid View */}
      {viewMode === 'map' ? (
        <div className="animate-fade-in mb-16">
          <EthiopiaProjectsMap />
        </div>
      ) : (
        /* Projects Grid */
        <div className="max-w-7xl mx-auto px-6 animate-fade-in" ref={gridRef}>
          {/* Project count info */}
          <div className="flex items-center justify-between mb-8">
            <p className="dark:text-white/40 text-gray-400 text-sm font-medium">
              Showing{' '}
              <span className="dark:text-white text-gray-800 font-bold">{startIndex + 1}–{Math.min(startIndex + PROJECTS_PER_PAGE, projectsData.length)}</span>
              {' '}of{' '}
              <span className="dark:text-white text-gray-800 font-bold">{projectsData.length}</span> projects
            </p>
            <p className="dark:text-white/40 text-gray-400 text-sm font-medium">
              Page <span className="dark:text-white text-gray-800 font-bold">{currentPage}</span> of {totalPages}
            </p>
          </div>

        <div className="grid md:grid-cols-2 gap-10 min-h-[600px]">
          {currentProjects.map(({ slug, title, location, type, img, tag }, i) => (
            <ScrollReveal
              key={slug}
              staggerIndex={i}
              animation="fade-up"
              className="card-hover group rounded-[2.5rem] overflow-hidden dark:bg-gray-900 bg-white shadow-xl border dark:border-white/10 border-gray-100 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-72">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full mb-3 inline-block shadow-2xl backdrop-blur-md ${tag === 'Completed' ? 'bg-brand-blue text-white' : 'bg-brand-cyan text-brand-black'
                    }`}>{tag}</span>
                  <h3 className="text-white font-extrabold text-2xl leading-tight drop-shadow-2xl">{title}</h3>
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 lg:grid-cols-2 gap-6 text-sm items-end">
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-2 font-bold">Location</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{location}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-2 font-bold">System</div>
                  <div className="font-bold text-gray-800 dark:text-white/80 transition-colors">{type}</div>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Link to={`/project/${slug}`} className="text-brand-cyan font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-10 h-10 rounded-full border dark:border-white/10 border-gray-200 dark:bg-gray-900 bg-white dark:text-white/60 text-gray-500 hover:border-brand-cyan hover:text-brand-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`ellipsis-${idx}`} className="w-10 h-10 flex items-center justify-center dark:text-white/30 text-gray-400 text-sm select-none">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-200 border ${currentPage === page
                    ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/30'
                    : 'dark:border-white/10 border-gray-200 dark:bg-gray-900 bg-white dark:text-white/60 text-gray-500 hover:border-brand-cyan hover:text-brand-cyan'
                    }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center w-10 h-10 rounded-full border dark:border-white/10 border-gray-200 dark:bg-gray-900 bg-white dark:text-white/60 text-gray-500 hover:border-brand-cyan hover:text-brand-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    )}
  </div>
)
}
