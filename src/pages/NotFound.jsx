import { Link } from 'react-router-dom'
import { Home, Mail } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center dark:bg-gray-950 bg-white transition-colors">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />

      <div className="relative mb-6 sm:mb-8">
        <div className="text-[120px] sm:text-[180px] font-black gradient-text leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full pointer-events-none" />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-gray-900 mb-3 sm:mb-4 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-gray-500 dark:text-white/50 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
        The irrigation solution you're looking for doesn't exist at this address.
        Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="btn-primary text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 min-h-[48px] active:scale-95 transition-all text-sm"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
        <Link
          to="/#contact"
          className="dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-900 font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 min-h-[48px] active:scale-95 transition-all border dark:border-white/10 border-gray-200 text-sm"
        >
          <Mail className="w-4 h-4" /> Contact Us
        </Link>
      </div>
    </div>
  )
}
