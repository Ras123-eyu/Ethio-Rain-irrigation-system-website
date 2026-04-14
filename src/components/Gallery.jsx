import { ArrowRight } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', label: 'Aerial Farmland', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', label: 'Drip System' },
  { src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80', label: 'Crop Fields' },
  { src: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&q=80', label: 'Sprinklers at Dusk' },
  { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80', label: 'Green Harvest' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 transition-colors duration-300 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in">
          <div>
            <p className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Visual Story</p>
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 transition-colors">
              The Beauty of<br />
              <span className="gradient-text">Smart Irrigation</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <a href="#projects" className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
          {galleryImages.map(({ src, label, span }, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group shadow-lg dark:shadow-green-900/10 ${span || ''}`}>
              <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
