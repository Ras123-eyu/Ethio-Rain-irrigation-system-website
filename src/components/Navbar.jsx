import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Droplets, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname)
      return
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'services', 'products', 'projects', 'contact']
      let current = '/#home'
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = `/#${section}`
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'dark:bg-gray-900/90 bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://www.image2url.com/r2/default/images/1776446803908-1a0fb0a4-83a0-45e7-a562-6f6d629fc2b8.blob"
            alt="Ethio-Rain Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="sm:block">
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled || pathname !== '/' ? 'gradient-text dark:gradient-text' : 'gradient-text'}`}>
              Ethio-Rain
            </span>
            <span className={`block text-[10px] uppercase font-extrabold tracking-widest leading-none ${scrolled || pathname !== '/' ? 'gradient-text' : 'gradient-text'}`}>
              Irrigation Systems P.L.C.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link to={link.href}
                  className={`text-sm transition-colors ${activeSection === link.href
                    ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                    : `font-medium hover:text-brand-cyan/80 dark:hover:text-brand-cyan/80 ${scrolled || pathname !== '/' ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'
                    }`
                    }`}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href}
                  className={`text-sm transition-colors ${activeSection === link.href
                    ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                    : `font-medium hover:text-brand-cyan/80 dark:hover:text-brand-cyan/80 ${scrolled || pathname !== '/' ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'
                    }`
                    }`}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all group ${scrolled || pathname !== '/' ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" /> : <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />}
          </button>
          <a href="/#contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full">
            Get a Quote
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl ${scrolled || pathname !== '/' ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <X className={scrolled || pathname !== '/' ? 'text-gray-800 dark:text-white' : 'text-white'} />
              : <Menu className={scrolled || pathname !== '/' ? 'text-gray-800 dark:text-white' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden dark:bg-gray-900 bg-white shadow-xl px-6 py-6 flex flex-col gap-4 animate-fade-in border-t dark:border-gray-800 border-gray-100">
          {navLinks.map(link =>
            link.href.startsWith('/') && !link.href.startsWith('/#') ? (
              <Link key={link.label} to={link.href}
                className={`text-sm ${activeSection === link.href
                  ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                  : 'text-gray-700 dark:text-gray-200 font-medium hover:text-brand-cyan dark:hover:text-brand-cyan'
                  }`}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href}
                className={`text-sm ${activeSection === link.href
                  ? 'text-brand-cyan dark:text-brand-cyan font-bold'
                  : 'text-gray-700 dark:text-gray-200 font-medium hover:text-brand-cyan dark:hover:text-brand-cyan'
                  }`}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            )
          )}
          <a href="#contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
