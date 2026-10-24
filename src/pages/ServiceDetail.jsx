import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import { ArrowLeft, CheckCircle, X, Search } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  const [selectedImg, setSelectedImg] = useState(null)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
        <Link to="/" className="text-brand-cyan font-bold hover:underline">Back to Home</Link>
      </div>
    )
  }

  const { icon: Icon, title, description, img, benefits, gallery, tag } = service

  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white relative">
      <SEO title={title} description={description} />
      {/* Hero Section */}
      <section className="relative h-[48vh] sm:h-[60vh] min-h-[340px] sm:min-h-[450px] flex items-end mb-10 sm:mb-16 overflow-hidden">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pb-8 sm:pb-16">
          <Link to="/" className="inline-flex items-center gap-2.5 text-white/70 hover:text-brand-cyan mb-4 sm:mb-8 transition-colors text-xs sm:text-sm font-bold uppercase tracking-widest group min-h-[44px] py-1">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="inline-block bg-brand-blue text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-6 shadow-2xl">
            {tag}
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
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="bg-brand-blue/10 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-brand-blue/20 shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-cyan" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-gray-900 transition-colors tracking-tight">Overview</h2>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 whitespace-pre-line font-medium">
              {description}
            </p>

            <h3 className="text-lg sm:text-2xl font-black dark:text-brand-cyan text-brand-blue mb-4 sm:mb-8 uppercase tracking-widest">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-12 sm:mb-20">
              {benefits.map(benefit => (
                <div key={benefit} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm transition-all hover:scale-105 hover:border-brand-cyan/30">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-bold text-gray-700 dark:text-gray-200 text-xs sm:text-base transition-colors leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Image Gallery with Zoom */}
            <h3 className="text-lg sm:text-2xl font-black dark:text-white text-gray-900 mb-2 uppercase tracking-widest">Project Gallery</h3>
            <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6 uppercase tracking-widest font-bold">Tap an image to zoom</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-10 sm:mb-16">
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
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 sm:space-y-8 animate-fade-in">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-2xl lg:sticky lg:top-32">
            <h4 className="text-lg sm:text-xl font-black mb-4 sm:mb-8 dark:text-white text-gray-900 transition-colors">Contact Expert</h4>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-white/40 mb-6 sm:mb-10 font-medium">Interested in {title} for your project? Contact our team for an expert consultation.</p>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 text-xs sm:text-sm">
              <a href="mailto:info@ethiorain.com" className="flex items-center gap-3.5 dark:text-white/80 text-gray-700 hover:text-brand-cyan font-bold transition-all group min-h-[44px]">
                <div className="bg-brand-cyan/10 p-2 sm:p-2.5 rounded-xl border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-all shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                </div>
                <span>info@ethiorain.com</span>
              </a>
              <div className="flex items-start gap-3.5 dark:text-white/80 text-gray-700 font-bold">
                <div className="bg-brand-cyan/10 p-2 sm:p-2.5 rounded-xl border border-brand-cyan/20 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+251901864466" className="hover:text-brand-cyan transition-all py-0.5 min-h-[32px] inline-flex items-center">+251 901 86 44 66</a>
                  <a href="tel:+251912882881" className="hover:text-brand-cyan transition-all py-0.5 min-h-[32px] inline-flex items-center">+251 912 88 28 81</a>
                </div>
              </div>
            </div>

            <Link to="/#contact" className="btn-primary w-full text-center py-4 min-h-[48px] rounded-2xl flex items-center justify-center text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20 active:scale-95 transition-all">
              Get Started Now
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
