import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import { Search, ArrowRight, CheckCircle, X } from 'lucide-react'
import SEO from '../components/SEO'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white min-h-screen">
      <SEO title="Products" description="Browse our complete range of professional-grade irrigation products." />
      {/* Hero Banner */}
      <section className="relative overflow-hidden mb-10 sm:mb-16">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 via-transparent to-brand-cyan/10" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-blue/5 animate-float blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-brand-cyan/5 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="dark:text-white/70 text-gray-600 text-[11px] sm:text-xs font-bold uppercase tracking-widest">Product Catalog</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 leading-[1.15] mb-4 sm:mb-6 transition-colors">
              Irrigation <br />
              <span className="gradient-text">Equipment & Supplies</span>
            </h1>
            <p className="dark:text-white/50 text-gray-500 text-sm sm:text-lg leading-relaxed max-w-2xl transition-colors">
              Browse our complete range of professional-grade irrigation products. From drip tape to center pivots — everything you need for efficient water management.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-white/30 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-11 py-3.5 min-h-[48px] rounded-2xl dark:bg-gray-900 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 placeholder:dark:text-white/30 placeholder:text-gray-400 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/10 transition-all text-base md:text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-white/30 text-gray-400 hover:text-brand-cyan p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills - Touch swipe friendly horizontal bar on mobile */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar touch-scroll pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 min-h-[40px] whitespace-nowrap rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border shrink-0 active:scale-95 ${activeCategory === cat.id
                  ? 'btn-primary text-white border-transparent shadow-lg shadow-brand-blue/20'
                  : 'dark:bg-gray-900 bg-gray-50 dark:text-white/50 text-gray-500 dark:border-white/10 border-gray-200 hover:border-brand-cyan/30 hover:text-brand-cyan'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 sm:mt-6 flex items-center justify-between">
          <p className="text-xs sm:text-sm dark:text-white/40 text-gray-400 font-medium">
            Showing <span className="dark:text-white text-gray-900 font-bold">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'all' && (
              <span> in <span className="text-brand-cyan font-bold">{categories.find(c => c.id === activeCategory)?.label}</span></span>
            )}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <Search className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 mb-2 sm:mb-3">No products found</h3>
            <p className="dark:text-white/40 text-gray-500 text-sm mb-6 sm:mb-8">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
              className="btn-primary text-white text-sm font-bold px-6 py-3 min-h-[44px] rounded-full active:scale-95 transition-transform"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((product, i) => {
              const Icon = product.icon
              return (
                <div
                  key={product.id}
                  className="card-hover group rounded-2xl sm:rounded-3xl overflow-hidden dark:bg-gray-900 bg-white border dark:border-white/5 border-gray-100 shadow-sm transition-all duration-300 cursor-pointer animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-36 sm:h-52 shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                    {/* Badge */}
                    {product.badge && (
                      <span className={`absolute top-2.5 sm:top-4 left-2.5 sm:left-4 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-lg ${product.badge === 'Best Seller' ? 'bg-amber-500/90 text-white' :
                        product.badge === 'New' ? 'bg-emerald-500/90 text-white' :
                          product.badge === 'Premium' ? 'bg-purple-500/90 text-white' :
                            product.badge === 'Eco' ? 'bg-green-500/90 text-white' :
                              product.badge === 'Top Rated' ? 'bg-orange-500/90 text-white' :
                                product.badge === 'Industrial' ? 'bg-slate-600/90 text-white' :
                                  'bg-brand-blue/90 text-white'
                        }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-3">
                        <div className="bg-brand-blue/10 p-1 sm:p-1.5 rounded-lg border border-brand-blue/20 shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-cyan" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest dark:text-white/40 text-gray-400 line-clamp-1">
                          {categories.find(c => c.id === product.category)?.label}
                        </span>
                      </div>
                      <h3 className="font-bold dark:text-white text-gray-900 text-xs sm:text-base mb-1.5 sm:mb-2 transition-colors group-hover:text-brand-cyan line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="dark:text-white/50 text-gray-500 text-[11px] sm:text-sm leading-relaxed line-clamp-2 transition-colors">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t dark:border-white/5 border-gray-100 flex items-center justify-between">
                      <span className="text-brand-cyan text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-24">
        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-brand-blue to-teal-500 opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 p-6 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3 tracking-tight">
                Can't find what you need?
              </h2>
              <p className="text-white/80 text-sm sm:text-lg font-medium max-w-lg">
                We source specialized equipment from global partners. Contact us for custom orders and bulk pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
              <Link to="/#contact" className="bg-white text-brand-blue font-black px-8 py-4 min-h-[48px] rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-2 text-center text-sm">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+251901864466" className="border-2 border-white/30 text-white font-black px-8 py-4 min-h-[48px] rounded-full hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm flex items-center justify-center text-center text-sm">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <div
            className="relative z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-gray-900 bg-white rounded-t-3xl sm:rounded-4xl shadow-3xl border dark:border-white/10 border-gray-200 animate-fade-in-up pb-[calc(env(safe-area-inset-bottom,0px)+1rem)] sm:pb-0"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 dark:text-white/40 text-gray-400 hover:text-brand-cyan p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl dark:bg-gray-800 bg-gray-100 transition-all active:scale-95"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-t-3xl sm:rounded-t-4xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-transparent to-transparent" />
              {selectedProduct.badge && (
                <span className={`absolute top-4 sm:top-6 left-4 sm:left-6 text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full backdrop-blur-md ${selectedProduct.badge === 'Best Seller' ? 'bg-amber-500/90 text-white' :
                  selectedProduct.badge === 'Premium' ? 'bg-purple-500/90 text-white' :
                    selectedProduct.badge === 'Eco' ? 'bg-green-500/90 text-white' :
                      'bg-brand-blue/90 text-white'
                  }`}>
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="bg-brand-blue/10 p-1.5 sm:p-2 rounded-xl border border-brand-blue/20">
                  <selectedProduct.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest dark:text-white/30 text-gray-400">
                  {categories.find(c => c.id === selectedProduct.category)?.label}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black dark:text-white text-gray-900 mb-3 sm:mb-4 tracking-tight transition-colors">
                {selectedProduct.name}
              </h2>
              <p className="dark:text-white/50 text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 transition-colors">
                {selectedProduct.shortDesc}
              </p>

              {/* Specs */}
              <h4 className="text-xs font-black uppercase tracking-widest dark:text-brand-cyan text-brand-blue mb-3 sm:mb-4">Technical Specifications</h4>
              <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                {selectedProduct.specs.map(spec => (
                  <div key={spec} className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl dark:bg-gray-800 bg-gray-50 border dark:border-white/5 border-gray-100">
                    <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="dark:text-white/70 text-gray-700 text-xs sm:text-sm font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/#contact"
                  className="btn-primary text-white font-black px-8 py-4 min-h-[48px] rounded-full flex items-center justify-center gap-2 text-sm uppercase tracking-widest active:scale-95 transition-all text-center"
                  onClick={() => setSelectedProduct(null)}
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+251901864466"
                  className="dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-900 font-black px-8 py-4 min-h-[48px] rounded-full text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all border dark:border-white/10 border-gray-200 flex items-center justify-center text-center"
                >
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
