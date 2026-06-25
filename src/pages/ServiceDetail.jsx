import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import { ArrowLeft, CheckCircle, Mail, Phone, ChevronRight, X, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

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
    <div className="pt-24 pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white relative">
      <SEO title={title} description={description} />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end mb-16 overflow-hidden">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pb-16">
          <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-brand-cyan mb-8 mr-10 transition-colors text-sm font-bold uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="inline-block bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 shadow-2xl">
            {tag}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl tracking-tighter drop-shadow-2xl">
            {title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_350px] gap-16">
        {/* Content Column */}
        <div className="animate-fade-in-up">
          <div className="prose prose-invert lg:prose-xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-brand-blue/10 p-4 rounded-2xl border border-brand-blue/20">
                <Icon className="w-8 h-8 text-brand-cyan" />
              </div>
              <h2 className="text-3xl font-extrabold dark:text-white text-gray-900 transition-colors tracking-tight">Overview</h2>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-lg leading-relaxed mb-12 whitespace-pre-line font-medium">
              {description}
            </p>

            <h3 className="text-2xl font-black dark:text-brand-cyan text-brand-blue mb-8 uppercase tracking-widest">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-20">
              {benefits.map(benefit => (
                <div key={benefit} className="flex items-start gap-4 p-6 rounded-3xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm transition-all hover:scale-105 hover:border-brand-cyan/30">
                  <CheckCircle className="w-6 h-6 text-brand-cyan shrink-0" />
                  <span className="font-bold text-gray-700 dark:text-gray-200 transition-colors leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Image Gallery with Zoom */}
            <h3 className="text-2xl font-black dark:text-white text-gray-900 mb-8 uppercase tracking-widest">Project Gallery</h3>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest font-bold">Click an image to zoom</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {gallery.map((image, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImg(image)}
                  className="group relative h-64 rounded-4xl overflow-hidden shadow-2xl border border-white/5 cursor-zoom-in"
                >
                  <img src={image} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-xs gap-3">
                    <Search className="text-white w-10 h-10 -rotate-45" />
                    <span className="text-[10px] text-white font-black uppercase tracking-widest">Zoom View</span>
                  </div>
                </div>
              ))}
            </div>

         
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 animate-fade-in">
          <div className="p-8 rounded-[2.5rem] dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-2xl sticky top-32">
            <h4 className="text-xl font-black mb-8 dark:text-white text-gray-900 transition-colors">Contact Expert</h4>
            <p className="text-sm text-gray-500 dark:text-white/40 mb-10 font-medium">Interested in {title} for your project? Contact our team for an expert consultation.</p>
            
            <div className="space-y-6 mb-10">
              <a href="mailto:info@ethiorain.et" className="flex items-center gap-4 dark:text-white/80 text-gray-700 hover:text-brand-cyan font-bold transition-all group">
                <div className="bg-brand-cyan/10 p-2.5 rounded-xl border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-all">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <span>info@ethiorain.et</span>
              </a>
              <a href="tel:+251910615757" className="flex items-center gap-4 dark:text-white/80 text-gray-700 hover:text-brand-cyan font-bold transition-all group">
                <div className="bg-brand-cyan/10 p-2.5 rounded-xl border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-all">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                </div>
                <span>+251 910 61 57 57 / +251 912 88 28 81</span>
              </a>
            </div>

            <Link to="/#contact" className="btn-primary w-full text-center py-4 rounded-2xl block text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20">
              Get Started Now
            </Link>
          </div>
        </aside>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white p-2 z-50 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImg} 
            alt="Zoom view" 
            className="relative z-50 max-w-full max-h-full object-contain rounded-2xl shadow-3xl animate-scale-in"
          />
        </div>
      )}
    </div>
  )
}
