import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-[100] animate-fade-in-up">
      <div className="max-w-4xl mx-auto dark:bg-gray-900/90 bg-white/90 backdrop-blur-xl border dark:border-white/10 border-gray-200 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-full dark:bg-brand-blue/20 bg-brand-blue/10 flex items-center justify-center shrink-0">
            <Cookie className="w-6 h-6 text-brand-cyan" />
          </div>
          <div>
            <h4 className="font-bold dark:text-white text-gray-900 mb-1">
              We value your privacy
            </h4>
            <p className="dark:text-white/60 text-gray-600 text-sm leading-relaxed">
              We use cookies and advanced caching to significantly improve your browsing experience, provide secure connections, and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-full border dark:border-white/10 border-gray-200 dark:text-white/60 text-gray-600 hover:dark:bg-white/5 hover:bg-gray-50 text-sm font-bold transition-all"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-brand-cyan hover:bg-brand-blue text-white text-sm font-black transition-all shadow-lg shadow-brand-cyan/20"
          >
            Accept
          </button>
          <button 
            onClick={handleDecline}
            className="w-10 h-10 rounded-full flex items-center justify-center dark:text-white/40 text-gray-400 hover:dark:bg-white/10 hover:bg-gray-100 transition-all md:hidden xl:flex"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  )
}
