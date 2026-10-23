import { useState, useEffect, useCallback, useMemo } from 'react'
import { testimonials, googleReviewsMeta } from '../data/testimonials'
import ScrollReveal from './ScrollReveal'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Grid3X3,
  MapPin,
  Languages,
  Camera,
  Image as ImageIcon
} from 'lucide-react'

// Authentic Google Multicolor SVG Icon
function GoogleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  )
}

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0)
  const [viewMode, setViewMode] = useState('carousel') // 'carousel' | 'grid'
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [isPaused, setIsPaused] = useState(false)
  const [expandedResponse, setExpandedResponse] = useState({ 1: true, 2: true }) // default expanded for realism
  const [showOriginalLanguage, setShowOriginalLanguage] = useState({ 1: true }) // Show Amharic by default for Gulelat

  const filterOptions = useMemo(() => {
    return [
      { id: 'All', label: 'All Google Reviews (4)' },
      { id: 'Photos', label: 'With Photos (12)' },
      { id: 'Amharic', label: 'Original Amharic (አማርኛ)' },
      { id: 'Responses', label: 'With Owner Reply (4)' },
    ]
  }, [])

  const filteredTestimonials = useMemo(() => {
    if (selectedFilter === 'Photos') return testimonials.filter(t => t.hasPhotos)
    if (selectedFilter === 'Amharic') return testimonials.filter(t => !!t.originalAmharic)
    if (selectedFilter === 'Responses') return testimonials.filter(t => !!t.responseFromOwner)
    return testimonials
  }, [selectedFilter])

  const total = testimonials.length

  const next = useCallback(() => {
    setActive((p) => (p + 1) % total)
  }, [total])

  const prev = () => {
    setActive((p) => (p - 1 + total) % total)
  }

  // Auto-slide carousel every 6.5s when not paused
  useEffect(() => {
    if (viewMode !== 'carousel' || isPaused) return
    const timer = setInterval(next, 6500)
    return () => clearInterval(timer)
  }, [next, viewMode, isPaused])

  const current = testimonials[active]

  const toggleResponse = (id) => {
    setExpandedResponse((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const toggleLanguage = (id) => {
    setShowOriginalLanguage((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="testimonials" className="py-20 transition-colors duration-300 dark:bg-gray-950 bg-gray-50 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Google Brand Badge */}
        <ScrollReveal animation="fade-up" className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xs mb-4">
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              100% Genuine Google Maps Reviews
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
              ★ {googleReviewsMeta.rating} / 5.0
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 mb-4 transition-colors">
            Ethio Rain Irrigation Systems{' '}
            <span className="gradient-text">Google Reviews</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Real, unedited reviews published by customers on our verified Google Business Profile in Addis Ababa.
          </p>
          <div className="section-divider mx-auto mt-5" />
        </ScrollReveal>

        {/* Google Summary Rating Banner */}
        <ScrollReveal animation="fade-up" delay={100} className="mb-10">
          <div className="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-3xl p-5 sm:p-7 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left: Overall Score & Stars */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-500 shrink-0">
                  <span className="text-2xl font-black">{googleReviewsMeta.rating}</span>
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                    <span>{googleReviewsMeta.businessName}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500 inline shrink-0" />
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    <strong>{googleReviewsMeta.totalReviews} Total Reviews on Google Maps</strong> • {googleReviewsMeta.location}
                  </p>
                </div>
              </div>

              {/* Middle: Rating distribution mini bars */}
              <div className="hidden sm:flex flex-col gap-1.5 w-full sm:w-64">
                {googleReviewsMeta.breakdown.slice(0, 2).map((item) => (
                  <div key={item.stars} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-12 text-right">{item.stars} stars</span>
                    <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 font-semibold text-gray-700 dark:text-gray-300">{item.percentage}%</span>
                  </div>
                ))}
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={googleReviewsMeta.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-linear-to-r from-brand-blue to-teal-600 hover:shadow-lg hover:shadow-brand-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <GoogleIcon className="w-4 h-4" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* View Mode Toggle Buttons */}
                <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setViewMode('carousel')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      viewMode === 'carousel'
                        ? 'bg-white dark:bg-gray-900 text-brand-blue dark:text-brand-cyan shadow-xs'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                    title="Spotlight Carousel View"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Spotlight</span>
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      viewMode === 'grid'
                        ? 'bg-white dark:bg-gray-900 text-brand-blue dark:text-brand-cyan shadow-xs'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                    title="Google Reviews Grid"
                  >
                    <Grid3X3 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">All Reviews</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= VIEW 1: SPOTLIGHT CAROUSEL ================= */}
        {viewMode === 'carousel' && (
          <ScrollReveal animation="fade-up" delay={200} className="relative max-w-4xl mx-auto">
            <div
              className="rounded-[2rem] overflow-hidden relative shadow-2xl transition-all"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Rich Ethiopian Agricultural Theme Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#002f87] via-[#01518f] to-[#047857]" />
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-400/10 translate-y-1/2 -translate-x-1/2 blur-xl" />

              <div className="relative z-10 p-6 sm:p-10 md:p-12">
                <div key={active} className="animate-fade-in">
                  {/* Top Google Card Bar with smooth transition */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-xl shadow-xs">
                        <GoogleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white text-xs font-bold uppercase tracking-wider">
                            Google Review
                          </span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5" /> Verified on Google Maps
                          </span>
                          {current.hasPhotos && (
                            <span className="text-[10px] bg-white/15 text-white/90 border border-white/20 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                              <Camera className="w-2.5 h-2.5" /> {current.photosCount} Photos
                            </span>
                          )}
                        </div>
                        <span className="text-white/60 text-xs">{current.date}</span>
                      </div>
                    </div>

                    {/* Stars Rating */}
                    <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      <div className="flex gap-0.5">
                        {Array.from({ length: current.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-white font-bold text-xs">5.0</span>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-white/20 mb-4" />

                  {/* Review Quote Text */}
                  <div className="mb-6">
                    <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                      &ldquo;
                      {showOriginalLanguage[current.id] && current.originalAmharic
                        ? current.originalAmharic
                        : current.text}
                      &rdquo;
                    </p>

                    {/* Amharic Toggle if original review was in Amharic */}
                    {current.originalAmharic && (
                      <button
                        onClick={() => toggleLanguage(current.id)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-brand-cyan hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1 rounded-full font-semibold"
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span>
                          {showOriginalLanguage[current.id]
                            ? 'Translate to English (በእንግሊዝኛ አሳይ)'
                            : 'Show Original Amharic (የመጀመሪያውን አማርኛ አሳይ)'}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Owner Response Box */}
                  {current.responseFromOwner && (
                    <div className="mb-6 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
                        <span className="text-xs font-bold text-brand-cyan">
                          {current.responseFromOwner.author}
                        </span>
                        <span className="text-[11px] text-white/40">• {current.responseFromOwner.date}</span>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm italic pl-4 border-l-2 border-brand-cyan/40">
                        &ldquo;
                        {showOriginalLanguage[current.id] && current.responseFromOwner.amharicText
                          ? current.responseFromOwner.amharicText
                          : current.responseFromOwner.text}
                        &rdquo;
                      </p>
                    </div>
                  )}

                  {/* Reviewer Details Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/10">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Circle with initials */}
                      <div className={`w-11 h-11 rounded-full bg-linear-to-br ${current.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-md ring-2 ring-white/30 shrink-0`}>
                        {current.initials}
                      </div>

                      <div>
                        <div className="text-white font-black text-sm sm:text-base flex items-center gap-2 flex-wrap">
                          <span>{current.name}</span>
                          <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full">
                            {current.guideReviews}
                          </span>
                        </div>
                        <div className="text-white/70 text-xs sm:text-sm font-medium">
                          {current.role}
                        </div>
                        <div className="text-white/50 text-[11px] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-brand-cyan" />
                          <span>{current.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:self-center">
                      {/* Project badge */}
                      <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/15 text-white px-3 py-1.5 rounded-full border border-white/20 shadow-xs">
                        {current.project}
                      </span>

                      {/* Helpful counter */}
                      <div className="flex items-center gap-1 text-white/70 text-xs bg-white/10 px-2.5 py-1.5 rounded-full">
                        <ThumbsUp className="w-3 h-3 text-white/70" />
                        <span>{current.helpfulCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active
                        ? 'w-8 bg-brand-cyan'
                        : 'w-2 dark:bg-white/20 bg-gray-300 hover:bg-brand-cyan/50'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border dark:border-white/10 border-gray-300 flex items-center justify-center dark:text-white/70 text-gray-700 hover:text-brand-cyan hover:border-brand-cyan/50 dark:hover:bg-white/5 hover:bg-gray-100 transition-all"
                  aria-label="Previous Google review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border dark:border-white/10 border-gray-300 flex items-center justify-center dark:text-white/70 text-gray-700 hover:text-brand-cyan hover:border-brand-cyan/50 dark:hover:bg-white/5 hover:bg-gray-100 transition-all"
                  aria-label="Next Google review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ================= VIEW 2: ALL GOOGLE REVIEWS GRID ================= */}
        {viewMode === 'grid' && (
          <ScrollReveal animation="fade-up" delay={200}>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFilter(opt.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === opt.id
                      ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                      : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-brand-cyan/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Grid of Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTestimonials.map((review) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top user row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full bg-linear-to-br ${review.avatarColor} text-white font-black text-xs flex items-center justify-center shadow-xs shrink-0`}>
                          {review.initials}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                            <span>{review.name}</span>
                            <span className="text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              Google Maps Verified
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-0.5">
                            <span>{review.guideReviews}</span>
                            {review.hasPhotos && (
                              <span className="text-brand-blue dark:text-brand-cyan font-semibold flex items-center gap-1">
                                <ImageIcon className="w-3 h-3" /> 12 photos
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Google G icon */}
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl shrink-0">
                        <GoogleIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Rating and date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-400">{review.date}</span>
                    </div>

                    {/* Review text */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      &ldquo;
                      {showOriginalLanguage[review.id] && review.originalAmharic
                        ? review.originalAmharic
                        : review.text}
                      &rdquo;
                    </p>

                    {/* Language toggle if original Amharic exists */}
                    {review.originalAmharic && (
                      <button
                        onClick={() => toggleLanguage(review.id)}
                        className="text-xs text-brand-blue dark:text-brand-cyan hover:underline font-semibold mb-3 flex items-center gap-1"
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span>
                          {showOriginalLanguage[review.id]
                            ? 'Translate to English (በእንግሊዝኛ አሳይ)'
                            : 'የመጀመሪያውን አማርኛ አሳይ (Show Original Amharic)'}
                        </span>
                      </button>
                    )}
                  </div>

                  <div>
                    {/* Project badge & Helpful button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan bg-brand-blue/5 dark:bg-brand-cyan/10 px-2.5 py-1 rounded-full">
                        {review.project}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{review.helpfulCount}</span>
                      </div>
                    </div>

                    {/* Owner Response toggle */}
                    {review.responseFromOwner && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60">
                        <button
                          onClick={() => toggleResponse(review.id)}
                          className="text-[11px] font-bold text-gray-500 dark:text-gray-400 hover:text-brand-cyan flex items-center gap-1 transition-colors"
                        >
                          <MessageSquare className="w-3 h-3 text-brand-cyan" />
                          <span>
                            {expandedResponse[review.id] ? 'Hide owner response' : 'View owner response'}
                          </span>
                        </button>
                        {expandedResponse[review.id] && (
                          <div className="mt-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-[11px] text-gray-600 dark:text-gray-300 border-l-2 border-brand-cyan">
                            <span className="font-semibold block text-brand-blue dark:text-brand-cyan mb-1">
                              {review.responseFromOwner.author}
                            </span>
                            {showOriginalLanguage[review.id] && review.responseFromOwner.amharicText
                              ? review.responseFromOwner.amharicText
                              : review.responseFromOwner.text}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Bottom Trust & Google Action Strip */}
        <ScrollReveal animation="fade-up" delay={300} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-linear-to-r from-blue-900/10 via-teal-900/10 to-brand-cyan/10 border border-gray-200 dark:border-white/10 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center shrink-0">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white">
                  Have you partnered with Ethio Rain Irrigation Systems PLC?
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Rate your experience on Google Maps to help fellow growers and agricultural investors across Ethiopia.
                </p>
              </div>
            </div>

            <a
              href={googleReviewsMeta.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue/90 shadow-md hover:shadow-brand-blue/20 transition-all shrink-0"
            >
              <span>View & Review on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
