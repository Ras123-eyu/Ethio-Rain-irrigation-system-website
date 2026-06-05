import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import ScrollReveal from './ScrollReveal'
import { ArrowRight, CheckCircle, XCircle, ShoppingCart } from 'lucide-react'

const featured = products.filter(p => p.badge).slice(0, 4)

export default function ProductsPreview() {
  return (
    <section id="products" className="py-24 transition-colors duration-300 dark:bg-gray-950 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-6 transition-colors">
            Professional-Grade <br />
            <span className="gradient-text">Irrigation Equipment</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-gray-500 dark:text-white/60 mt-8 max-w-xl mx-auto transition-colors text-lg">
            Browse our curated selection of top-rated products for every irrigation need.
          </p>
        </ScrollReveal>

        {/* Featured Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {featured.map((product, i) => {
            const Icon = product.icon
            return (
              <ScrollReveal
                as={Link}
                to="/products"
                key={product.id}
                staggerIndex={i}
                animation="fade-up"
                className="card-hover group rounded-3xl overflow-hidden dark:bg-gray-900 bg-white border dark:border-white/5 border-gray-100 shadow-sm transition-all duration-300 block"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg ${
                      product.badge === 'Best Seller' ? 'bg-amber-500/90 text-white' :
                      product.badge === 'Premium' ? 'bg-purple-500/90 text-white' :
                      product.badge === 'Eco' ? 'bg-green-500/90 text-white' :
                      product.badge === 'Top Rated' ? 'bg-orange-500/90 text-white' :
                      'bg-brand-blue/90 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}

                  <div className={`absolute top-3 right-3 flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full backdrop-blur-md ${
                    product.inStock
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
                      : 'bg-red-500/20 text-red-400 border border-red-400/30'
                  }`}>
                    {product.inStock ? <CheckCircle className="w-2.5 h-2.5" /> : <XCircle className="w-2.5 h-2.5" />}
                    {product.inStock ? 'In Stock' : 'Order'}
                  </div>


                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-brand-blue/10 p-1.5 rounded-lg border border-brand-blue/20">
                      <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest dark:text-white/30 text-gray-400">
                      {categories.find(c => c.id === product.category)?.label}
                    </span>
                  </div>
                  <h3 className="font-bold dark:text-white text-gray-900 text-sm mb-1.5 transition-colors group-hover:text-brand-cyan line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="dark:text-white/40 text-gray-500 text-xs leading-relaxed line-clamp-2 transition-colors">
                    {product.shortDesc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* View All CTA */}
        <ScrollReveal animation="fade-up" className="text-center">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full group text-sm uppercase tracking-widest"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
