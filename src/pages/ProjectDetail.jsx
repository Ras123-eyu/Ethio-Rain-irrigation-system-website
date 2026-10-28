import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { ArrowLeft, CheckCircle, Mail, Phone, ChevronRight, X, Search, MapPin, User, Clock, AlertTriangle, Lightbulb, Banknote, Percent, CameraOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData.find(p => p.slug === slug)
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
        <Link to="/" className="text-brand-cyan font-bold hover:underline">Back to Home</Link>
      </div>
    )
  }

  const { title, location, area, type, img, tag, client, duration, overview, challenge, solution, results, gallery, value, completion, hasPhoto } = project

  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white relative">
      <SEO title={title} description={overview} type="article" />
      {/* Hero Section */}
      <section className="relative h-[48vh] sm:h-[60vh] min-h-[340px] sm:min-h-[450px] flex items-end mb-10 sm:mb-16 overflow-hidden bg-gray-950">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pb-8 sm:pb-16">
          <Link to="/" className="inline-flex items-center gap-2.5 text-white/70 hover:text-brand-cyan mb-4 sm:mb-8 transition-colors text-xs sm:text-sm font-bold uppercase tracking-widest group min-h-[44px] py-1">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-6">
            <div className="inline-block bg-brand-blue text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-2xl">
              {tag}
            </div>
            {!hasPhoto && (
              <span className="inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md text-gray-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                <CameraOff className="w-3 h-3 text-brand-cyan" /> Photo Not Available (Records On File)
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl tracking-tighter drop-shadow-2xl">
            {title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_350px] gap-8 sm:gap-16">
        {/* Content Column */}
        <div className="animate-fade-in-up">
          <div className="prose prose-invert lg:prose-xl">
            
            {/* Overview */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-brand-blue/10 p-2 sm:p-3 rounded-xl border border-brand-blue/20">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold dark:text-white text-gray-900 transition-colors tracking-tight">Project Overview</h2>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 whitespace-pre-line font-medium">
              {overview}
            </p>

            {/* Challenge */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-red-500/10 p-2 sm:p-3 rounded-xl border border-red-500/20">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold dark:text-white text-gray-900 transition-colors tracking-tight">The Challenge</h2>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 whitespace-pre-line font-medium">
              {challenge}
            </p>

            {/* Solution */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-brand-cyan/10 p-2 sm:p-3 rounded-xl border border-brand-cyan/20">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold dark:text-white text-gray-900 transition-colors tracking-tight">Our Solution</h2>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 whitespace-pre-line font-medium">
              {solution}
            </p>

            {/* Results */}
            <h3 className="text-lg sm:text-2xl font-black dark:text-brand-cyan text-brand-blue mb-4 sm:mb-8 uppercase tracking-widest mt-8 sm:mt-10">Key Results</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-12 sm:mb-20">
              {results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm transition-all hover:scale-105 hover:border-brand-cyan/30">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-bold text-gray-700 dark:text-gray-200 text-xs sm:text-base transition-colors leading-snug">{result}</span>
                </div>
              ))}
            </div>

            {/* Image Gallery with Zoom */}
            {gallery && gallery.length > 0 && (
              <div className="mb-10 sm:mb-16">
                <h3 className="text-lg sm:text-2xl font-black dark:text-white text-gray-900 mb-1 sm:mb-2 uppercase tracking-widest">Project Gallery</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6 uppercase tracking-widest font-bold">Tap an image to zoom</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {gallery.map((image, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImg(image)}
                      className="group relative h-36 sm:h-64 rounded-2xl sm:rounded-4xl overflow-hidden shadow-2xl border border-white/5 cursor-zoom-in active:scale-95 transition-transform"
                    >
                      <img src={image} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-xs gap-2 sm:gap-3">
                        <Search className="text-white w-6 h-6 sm:w-10 sm:h-10 -rotate-45" />
                        <span className="text-[9px] sm:text-[10px] text-white font-black uppercase tracking-widest">Zoom</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Project Details Sidebar Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-2xl">
            <h4 className="text-lg sm:text-xl font-black mb-5 sm:mb-8 dark:text-white text-gray-900 transition-colors">Project Details</h4>
            
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Location</div>
                  <div className="font-bold text-gray-800 dark:text-white/80">{location}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3.5">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Client</div>
                  <div className="font-bold text-gray-800 dark:text-white/80">{client}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Duration</div>
                  <div className="font-bold text-gray-800 dark:text-white/80">{duration}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">System Type</div>
                  <div className="font-bold text-gray-800 dark:text-white/80">{type}</div>
                </div>
              </div>

              {area && (
                <div className="flex items-start gap-3.5">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Area Size</div>
                    <div className="font-bold text-gray-800 dark:text-white/80">{area}</div>
                  </div>
                </div>
              )}

              {value && (
                <div className="flex items-start gap-3.5">
                  <Banknote className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Value of Works</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">{value}</div>
                  </div>
                </div>
              )}

              {completion && (
                <div className="flex items-start gap-3.5">
                  <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest font-bold">Works Completed</div>
                    <div className="font-bold text-gray-800 dark:text-white/80">{completion}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-brand-blue/10 border border-brand-blue/20 shadow-2xl lg:sticky lg:top-32">
            <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-4 dark:text-white text-gray-900 transition-colors">Similar Project?</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-6 sm:mb-8 font-medium">Looking to implement a similar solution for your agricultural needs?</p>
            
            <Link to="/#contact" className="btn-primary w-full text-center py-4 min-h-[48px] rounded-2xl flex items-center justify-center text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20 active:scale-95 transition-all">
              Contact Us Now
            </Link>
          </div>
        </aside>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center z-50 transition-colors active:scale-95"
            onClick={() => setSelectedImg(null)}
            aria-label="Close preview"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImg} 
            alt="Zoom view" 
            className="relative z-50 max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-3xl animate-scale-in"
          />
        </div>
      )}
    </div>
  )
}
