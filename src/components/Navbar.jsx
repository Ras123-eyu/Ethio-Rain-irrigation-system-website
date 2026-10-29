import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { label: 'Home', sectionId: 'home', pageHref: '/#home' },
  { label: 'About', sectionId: 'about', pageHref: '/#about' },
  { label: 'Team', sectionId: 'team', pageHref: '/#team' },
  { label: 'Services', sectionId: 'services', pageHref: '/#services' },
  { label: 'Products', sectionId: 'products', pageHref: '/products' },
  { label: 'Projects', sectionId: 'projects', pageHref: '/projects' },
  { label: 'Contact', sectionId: 'contact', pageHref: '/#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const getLinkHref = (item) => {
    return isHome ? `#${item.sectionId}` : item.pageHref
  }

  const isLinkActive = (item) => {
    if (isHome) {
      return activeSection === item.sectionId
    }
    return activeSection === item.pageHref
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)

          if (pathname === '/') {
            const sectionIds = ['home', 'about', 'team', 'services', 'products', 'projects', 'contact']
            let current = 'home'
            for (const id of sectionIds) {
              const element = document.getElementById(id)
              if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top <= 150) {
                  current = id
                }
              }
            }
            setActiveSection(current)
          } else {
            setActiveSection(pathname)
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'dark:bg-gray-900/90 bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/img_4f6613efa42b.webp"
            alt="Ethio-Rain Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="sm:block">
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled || !isHome ? 'gradient-text dark:gradient-text' : 'gradient-text'}`}>
              Ethio-Rain
            </span>
            <span className={`block text-[10px] uppercase font-extrabold tracking-widest leading-none ${scrolled || !isHome ? 'gradient-text' : 'gradient-text'}`}>
              Irrigation Systems P.L.C.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => {
            const href = getLinkHref(item)
            const active = isLinkActive(item)
            const isRouterLink = !isHome && item.pageHref.startsWith('/') && !item.pageHref.startsWith('/#')

            return (
              <li key={item.label}>
                {isRouterLink ? (
                  <Link
                    to={href}
                    className={`text-sm transition-colors ${active
                      ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                      : `font-medium hover:text-brand-cyan/80 dark:hover:text-brand-cyan/80 ${scrolled || !isHome ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'}`
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={`text-sm transition-colors ${active
                      ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                      : `font-medium hover:text-brand-cyan/80 dark:hover:text-brand-cyan/80 ${scrolled || !isHome ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'}`
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all group ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" /> : <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />}
          </button>
          <a href={isHome ? '#contact' : '/#contact'} className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full">
            Get a Quote
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="p-1.5 rounded-lg focus:outline-none"
          >
            {menuOpen
              ? <X className={scrolled || !isHome ? 'text-gray-800 dark:text-white' : 'text-white'} />
              : <Menu className={scrolled || !isHome ? 'text-gray-800 dark:text-white' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden dark:bg-gray-900 bg-white shadow-xl px-6 py-6 flex flex-col gap-4 animate-fade-in border-t dark:border-gray-800 border-gray-100">
          {navItems.map(item => {
            const href = getLinkHref(item)
            const active = isLinkActive(item)
            const isRouterLink = !isHome && item.pageHref.startsWith('/') && !item.pageHref.startsWith('/#')

            return isRouterLink ? (
              <Link
                key={item.label}
                to={href}
                className={`text-sm ${active
                  ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                  : 'text-gray-700 dark:text-gray-200 font-medium hover:text-brand-cyan dark:hover:text-brand-cyan'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={href}
                className={`text-sm ${active
                  ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                  : 'text-gray-700 dark:text-gray-200 font-medium hover:text-brand-cyan dark:hover:text-brand-cyan'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
          <a href={isHome ? '#contact' : '/#contact'} className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
