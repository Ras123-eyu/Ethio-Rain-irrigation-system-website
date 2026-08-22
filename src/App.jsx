import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import ProjectDetail from './pages/ProjectDetail'
import ProjectsPage from './pages/ProjectsPage'
import Products from './pages/Products'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import MobileQuickBar from './components/MobileQuickBar'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
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
      <div className="overflow-x-hidden min-h-screen transition-colors duration-300 dark:bg-[#030712] bg-white text-slate-900 dark:text-slate-100 pb-14 md:pb-0">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <MobileQuickBar />
      </div>
    </BrowserRouter>
  )
}
