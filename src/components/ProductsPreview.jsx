import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import ScrollReveal from './ScrollReveal'
import { ArrowRight, Eye, X, Check, ShieldCheck, Zap } from 'lucide-react'

// Selected interactive category preview tabs
const PREVIEW_CATEGORIES = [
  { id: 'all', label: 'All Featured' },
  { id: 'pivot', label: 'Center Pivots' },
  { id: 'pumps-generators', label: 'Pumps & Generators' },
  { id: 'drip', label: 'Drip Systems' },
  { id: 'greenhouse', label: 'Greenhouse Tech' }
]

export default function ProductsPreview() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Filter products based on selected tab
  const displayProducts = (activeTab === 'all'
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeTab).slice(0, 8)
  )

  const handleOpenSpecs = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
  }

  const handleRequestQuote = (productName) => {
    setSelectedProduct(null)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      const messageInput = document.querySelector('textarea[name="message"]') || document.querySelector('textarea')
      if (messageInput) {
        messageInput.value = `Hello Ethio-Rain Engineering,\n\nI am interested in procuring the "${productName}". Please send me technical datasheets, pricing, and installation availability for Ethiopia.`
        messageInput.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }
  }

  return (
    <section id="products" className="py-14 sm:py-24 transition-colors duration-300 dark:bg-gray-950 bg-gray-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-12">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4">
            Interactive Machinery Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-4 sm:mb-6 transition-colors">
            Professional-Grade <br />
            <span className="gradient-text">Irrigation Equipment</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-4 sm:mt-6 max-w-xl mx-auto transition-colors text-sm sm:text-base md:text-lg">
            Filter by machinery category or click <strong className="text-brand-cyan">Quick Specs</strong> to inspect engineering ratings, flow rates, and warranty details.
          </p>
        </ScrollReveal>

        {/* Interactive Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar touch-scroll pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-10">
          {PREVIEW_CATEGORIES.map(cat => {
            const count = cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 min-h-[40px] whitespace-nowrap rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 active:scale-95 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00D4FF] text-white shadow-lg shadow-brand-blue/25 scale-100 sm:scale-105'
                    : 'dark:bg-gray-900 bg-white text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border dark:border-white/10 border-gray-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === cat.id ? 'bg-white/20 text-white' : 'dark:bg-gray-800 bg-gray-100 dark:text-gray-400 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-10 sm:mb-14">
          {displayProducts.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="card-hover group rounded-2xl sm:rounded-3xl overflow-hidden dark:bg-gray-900/90 bg-white border dark:border-white/10 border-gray-200 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Quick Action Overlay */}
                <div className="relative overflow-hidden h-36 sm:h-48 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md shadow-lg bg-[#0052FF]/90 text-white border border-[#00D4FF]/30">
                      {product.badge}
                    </span>
                  )}

                  {/* Interactive Quick Inspect Floating Button */}
                  <button
                    onClick={(e) => handleOpenSpecs(e, product)}
                    className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-black/75 hover:bg-[#0052FF] text-white p-2 rounded-xl backdrop-blur-md border border-white/20 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-lg group/btn cursor-pointer"
                    title="Quick Specs Preview"
                    aria-label={`View specs for ${product.name}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-cyan group-hover/btn:text-white" />
                    <span className="text-[10px] hidden sm:inline">Quick Specs</span>
                  </button>
                </div>

                {/* Info Container */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div className="bg-brand-blue/10 p-1 sm:p-1.5 rounded-lg border border-brand-blue/20 shrink-0">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan" />
                      </div>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest dark:text-white/40 text-gray-500 truncate">
                        {categories.find(c => c.id === product.category)?.label}
                      </span>
                    </div>

                    <h3 className="font-bold dark:text-white text-gray-900 text-xs sm:text-sm mb-1 sm:mb-1.5 transition-colors group-hover:text-brand-cyan line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="dark:text-white/50 text-gray-600 text-[11px] sm:text-xs leading-relaxed line-clamp-2 transition-colors mb-3">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t dark:border-white/5 border-gray-100 flex items-center justify-between">
                    <button
                      onClick={(e) => handleOpenSpecs(e, product)}
                      className="text-[11px] font-bold text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Specifications →
                    </button>
                    <Link
                      to="/products"
                      className="text-[10px] text-gray-400 hover:text-white transition-colors"
                    >
                      Full Catalog
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All CTA */}
        <ScrollReveal animation="fade-up" className="text-center">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-3.5 sm:py-4 rounded-full group text-xs sm:text-sm uppercase tracking-widest w-full sm:w-auto min-h-[48px] active:scale-95 shadow-xl shadow-brand-blue/20"
          >
            Explore Complete Product Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Interactive Quick Specs Lightbox Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-[#0B1528] border border-cyan-500/30 rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative overflow-hidden animate-scale-in text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-4 border border-slate-800">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {selectedProduct.badge && (
                <span className="absolute top-3 left-3 bg-[#0052FF] text-white text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-lg border border-cyan-400/30">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            {/* Title & Category */}
            <div className="mb-3">
              <span className="text-[10px] uppercase font-extrabold text-[#00D4FF] tracking-widest">
                {categories.find(c => c.id === selectedProduct.category)?.label}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                {selectedProduct.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {selectedProduct.shortDesc}
            </p>

            {/* Technical Specifications List */}
            {selectedProduct.specs && (
              <div className="bg-[#060D1A] p-3.5 sm:p-4 rounded-xl border border-slate-800 mb-5">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-2">
                  Engineering Specifications:
                </span>
                <ul className="space-y-1.5">
                  {selectedProduct.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => handleRequestQuote(selectedProduct.name)}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D4FF] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 active:scale-95 transition-all cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
