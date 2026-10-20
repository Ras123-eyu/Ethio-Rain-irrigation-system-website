import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import MobileQuickBar from './components/MobileQuickBar'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const Products = lazy(() => import('./pages/Products'))

function PageFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-14 h-14 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-[#00D4FF]/20 animate-ping" />
        <div className="w-14 h-14 rounded-full border-4 border-[#00D4FF] border-t-transparent animate-spin" />
      </div>
      <p className="text-xs uppercase font-extrabold tracking-widest text-[#00D4FF]">
        Loading Ethio-Rain...
      </p>
    </div>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme !== null) return savedTheme === 'dark'
    return true // Default to dark theme when opened
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-x-hidden min-h-screen transition-colors duration-300 dark:bg-[#030712] bg-white text-slate-900 dark:text-slate-100 pb-14 md:pb-0">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:slug" element={<ServiceDetail />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <MobileQuickBar />
      </div>
    </BrowserRouter>
  )
}
