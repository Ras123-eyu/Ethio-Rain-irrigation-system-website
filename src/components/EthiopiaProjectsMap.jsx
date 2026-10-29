import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  CheckCircle2, 
  Compass,
  Building2,
  Calendar,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { ETHIOPIA_REGIONS } from '../data/ethiopiaRegions'
import { ALL_MAP_PROJECTS } from '../data/mappedProjects'

// All 11 Official Administrative Regions & Chartered Cities of Ethiopia
const REGIONS = [
  'All Regions',
  'Oromia',
  'Addis Ababa',
  'SNNPR / South',
  'Amhara',
  'Afar / Rift Basin',
  'Dire Dawa',
  'Benishangul-Gumuz',
  'Gambela',
  'Somali',
  'Tigray',
  'Harari'
]

export default function EthiopiaProjectsMap() {
  const [activeRegion, setActiveRegion] = useState('All Regions')
  const [hoveredRegion, setHoveredRegion] = useState(null)
  const [selectedProject, setSelectedProject] = useState(ALL_MAP_PROJECTS[0])
  const [zoomLevel, setZoomLevel] = useState(1)

  // Filter projects by active region
  const filteredProjects = activeRegion === 'All Regions' 
    ? ALL_MAP_PROJECTS 
    : ALL_MAP_PROJECTS.filter(p => {
        const rLower = p.region.toLowerCase()
        const actLower = activeRegion.toLowerCase()
        return rLower.includes(actLower) || actLower.includes(rLower) || p.regionId === actLower
      })

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))
  const handleResetZoom = () => setZoomLevel(1)
  // Helper to get non-overlapping display coordinates (Spiderfy fan-out for Addis Ababa & clusters)
  const projectsWithCoords = useMemo(() => {
    const isAddisFocused = activeRegion.toLowerCase().includes('addis')

    if (isAddisFocused) {
      const cx = 326
      const cy = 314
      // Sort so Addis Central HQ is at center (index 0)
      const sorted = [...filteredProjects].sort((a, b) => (b.isHQ ? 1 : 0) - (a.isHQ ? 1 : 0))
      
      return sorted.map((p, idx) => {
        if (idx === 0) {
          return {
            ...p,
            displayX: cx,
            displayY: cy,
            isSpiderfied: false,
            indexNum: 1
          }
        }
        let r, angle
        if (idx <= 5) {
          r = 48
          angle = ((idx - 1) / 5) * 2 * Math.PI - Math.PI / 2
        } else {
          r = 84
          angle = ((idx - 6) / 6) * 2 * Math.PI - Math.PI / 2 + Math.PI / 6
        }
        const displayX = Math.round((cx + r * Math.cos(angle)) * 10) / 10
        const displayY = Math.round((cy + r * Math.sin(angle)) * 10) / 10

        return {
          ...p,
          displayX,
          displayY,
          isSpiderfied: true,
          connectorStartX: cx,
          connectorStartY: cy,
          indexNum: idx + 1
        }
      })
    }

    // For other regions or All Regions, detect any overlapping pins (within 12px) and offset them
    const clusters = []
    filteredProjects.forEach(p => {
      let found = clusters.find(c => Math.hypot(c.center.x - p.x, c.center.y - p.y) < 12)
      if (!found) {
        found = { center: { x: p.x, y: p.y }, items: [] }
        clusters.push(found)
      }
      found.items.push(p)
    })

    return filteredProjects.map((p, idx) => {
      const cluster = clusters.find(c => c.items.some(item => item.id === p.id))
      if (cluster && cluster.items.length > 1) {
        const itemIdx = cluster.items.findIndex(item => item.id === p.id)
        const total = cluster.items.length
        if (p.isHQ) {
          return { ...p, displayX: p.x, displayY: p.y, isSpiderfied: false, indexNum: idx + 1 }
        }
        const offsetR = total <= 4 ? 14 : 18
        const angle = (itemIdx / total) * 2 * Math.PI - Math.PI / 2
        const displayX = Math.round((cluster.center.x + offsetR * Math.cos(angle)) * 10) / 10
        const displayY = Math.round((cluster.center.y + offsetR * Math.sin(angle)) * 10) / 10
        return {
          ...p,
          displayX,
          displayY,
          isSpiderfied: true,
          connectorStartX: cluster.center.x,
          connectorStartY: cluster.center.y,
          indexNum: idx + 1
        }
      }
      return { ...p, displayX: p.x, displayY: p.y, isSpiderfied: false, indexNum: idx + 1 }
    })
  }, [filteredProjects, activeRegion])

  // Current project index in filtered list for next/prev navigation
  const currentProjectIndex = projectsWithCoords.findIndex(p => p.id === selectedProject?.id)

  const handlePrevProject = () => {
    if (projectsWithCoords.length === 0) return
    const prevIdx = (currentProjectIndex - 1 + projectsWithCoords.length) % projectsWithCoords.length
    setSelectedProject(projectsWithCoords[prevIdx])
  }

  const handleNextProject = () => {
    if (projectsWithCoords.length === 0) return
    const nextIdx = (currentProjectIndex + 1) % projectsWithCoords.length
    setSelectedProject(projectsWithCoords[nextIdx])
  }


  // Helper to determine if a region is currently highlighted
  const isRegionHighlighted = (regionName, regionId) => {
    if (activeRegion !== 'All Regions') {
      const activeLower = activeRegion.toLowerCase()
      const idLower = regionId.toLowerCase()
      const nameLower = regionName.toLowerCase()
      return activeLower.includes(idLower) || 
             idLower.includes(activeLower) || 
             nameLower.includes(activeLower) ||
             activeLower.includes(nameLower)
    }
    if (selectedProject) {
      return selectedProject.regionId === regionId || selectedProject.region.toLowerCase().includes(regionId)
    }
    return false
  }

  return (
    <section className="py-14 sm:py-24 bg-[#030712] text-white relative overflow-hidden" id="interactive-map">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-3.5 py-1.5 mb-3 sm:mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                All 11 Ethiopian Administrative Regions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Interactive <span className="gradient-text">Ethiopia Regional Project Map</span>
            </h2>
            <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Explore Ethio-Rain’s 38 verified project schemes across all 11 administrative regions of Ethiopia. Click any regional boundary or project marker to inspect engineering specifications.
            </p>
          </div>
        </ScrollReveal>

        {/* All 11 Regions Filter Bar - Touch swipe friendly horizontal bar on mobile */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar touch-scroll pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-10">
          {REGIONS.map((region) => {
            const count = region === 'All Regions' 
              ? ALL_MAP_PROJECTS.length 
              : ALL_MAP_PROJECTS.filter(p => {
                  const rLower = p.region.toLowerCase()
                  const actLower = region.toLowerCase()
                  return rLower.includes(actLower) || actLower.includes(rLower) || p.regionId === actLower
                }).length

            return (
              <button
                key={region}
                onClick={() => {
                  setActiveRegion(region)
                  const matching = region === 'All Regions' 
                    ? ALL_MAP_PROJECTS 
                    : ALL_MAP_PROJECTS.filter(p => {
                        const rLower = p.region.toLowerCase()
                        const actLower = region.toLowerCase()
                        return rLower.includes(actLower) || actLower.includes(rLower) || p.regionId === actLower
                      })
                  if (matching.length > 0 && !matching.includes(selectedProject)) {
                    setSelectedProject(matching[0])
                  }
                }}
                className={`px-3.5 py-2 min-h-[40px] whitespace-nowrap rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 active:scale-95 ${
                  activeRegion === region
                    ? 'bg-[#0052FF] text-white shadow-[0_0_20px_rgba(0,82,255,0.5)] scale-100 sm:scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{region}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeRegion === region ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Map & Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SVG Map Container */}
          <div className="lg:col-span-7 bg-[#080E1A]/95 border border-slate-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Map Header & Controls */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Layers className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <span className="truncate">
                  Map Focus:{' '}
                  <strong className="text-white">
                    {hoveredRegion ? hoveredRegion.name : activeRegion === 'All Regions' ? 'All 11 Regions (38 Schemes)' : `${activeRegion} (${filteredProjects.length} Schemes)`}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleZoomIn}
                  className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
                  title="Zoom In"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
                  title="Zoom Out"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
                  title="Reset Zoom"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* SVG Interactive Canvas with Real Regions */}
            <div className="relative w-full aspect-[800/620] overflow-hidden rounded-2xl bg-[#030712] border border-cyan-500/20 shadow-[inset_0_0_80px_rgba(0,180,255,0.08)]">
              {/* Subtle Coordinate Grid Background */}
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #00D4FF 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              <div 
                className="w-full h-full transition-transform duration-300 ease-out origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <svg
                  viewBox="0 0 800 620"
                  className="w-full h-full select-none"
                >
                  <defs>
                    <linearGradient id="regionDefaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#132B52" />
                      <stop offset="100%" stopColor="#0B1B36" />
                    </linearGradient>

                    <linearGradient id="regionActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#0369A1" />
                    </linearGradient>

                    <linearGradient id="regionHoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#0284C7" />
                    </linearGradient>

                    <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* REAL ETHIOPIAN REGIONAL BOUNDARIES (POLYGONS) */}
                  <g id="ethiopia-regions">
                    {ETHIOPIA_REGIONS.map((region) => {
                      const isHighlighted = isRegionHighlighted(region.name, region.id)
                      const isHovered = hoveredRegion?.id === region.id

                      return (
                        <g 
                          key={region.id}
                          className="cursor-pointer transition-all duration-200"
                          onMouseEnter={() => setHoveredRegion(region)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          onClick={() => {
                            // Find corresponding region in REGIONS list
                            const matched = REGIONS.find(r => 
                              r.toLowerCase().includes(region.id.toLowerCase()) || 
                              region.id.toLowerCase().includes(r.toLowerCase()) ||
                              region.name.toLowerCase().includes(r.toLowerCase())
                            )
                            if (matched) {
                              setActiveRegion(matched)
                            }
                            const matchingProjects = ALL_MAP_PROJECTS.filter(p => 
                              p.regionId === region.id || p.region.toLowerCase().includes(region.id)
                            )
                            if (matchingProjects.length > 0) {
                              setSelectedProject(matchingProjects[0])
                            }
                          }}
                        >
                          {/* Region Base Shape */}
                          <path
                            d={region.path}
                            fill={isHovered ? 'url(#regionHoverGrad)' : isHighlighted ? 'url(#regionActiveGrad)' : 'url(#regionDefaultGrad)'}
                            stroke={isHovered ? '#00FFFF' : isHighlighted ? '#00D4FF' : '#38BDF8'}
                            strokeWidth={isHovered ? 2.5 : isHighlighted ? 2.2 : 1.5} strokeOpacity={isHovered || isHighlighted ? 1 : 0.75}
                            strokeLinejoin="round"
                            className="transition-all duration-300"
                          />

                          {/* Region Name Watermark Label on Map */}
                          <text
                            x={region.cx}
                            y={region.cy}
                            textAnchor="middle"
                            fill={isHovered ? '#00FFFF' : isHighlighted ? '#FFFFFF' : '#E2E8F0'}
                            fontSize={region.id === 'addis-ababa' ? '8.5' : region.id === 'oromia' ? '13' : region.id === 'somali' ? '13' : '10.5'}
                            fontWeight={isHovered || isHighlighted ? '900' : '700'}
                            letterSpacing="0.05em"
                            className="pointer-events-none transition-all duration-300"
                            style={{
                              textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                            }}
                          >
                            {region.name}
                          </text>
                        </g>
                      )
                    })}
                  </g>

                  {/* Water Basins (Lake Tana & Great Rift Valley indicators) */}
                  <g className="pointer-events-none">
                    <ellipse cx="265" cy="180" rx="18" ry="14" fill="#00D4FF" fillOpacity="0.45" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="265" y="183" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" opacity="0.9">Lake Tana</text>
                  </g>
                  <ellipse cx="316" cy="380" rx="16" ry="30" fill="#00D4FF" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" className="pointer-events-none" />

                  {/* Spiderfy Radial Connector Rays */}
                  <g id="spiderfy-connectors" className="pointer-events-none">
                    {projectsWithCoords.filter(p => p.isSpiderfied).map((p) => {
                      const isSelected = selectedProject?.id === p.id
                      return (
                        <line
                          key={'line-' + p.id}
                          x1={p.connectorStartX}
                          y1={p.connectorStartY}
                          x2={p.displayX}
                          y2={p.displayY}
                          stroke={isSelected ? '#00FFFF' : '#00D4FF'}
                          strokeWidth={isSelected ? 1.8 : 1}
                          strokeDasharray={isSelected ? 'none' : '3 3'}
                          strokeOpacity={isSelected ? 0.8 : 0.4}
                        />
                      )
                    })}
                  </g>

                  {/* INTERACTIVE PROJECT PINS ON REGIONS */}
                  {projectsWithCoords.map((p) => {
                    const isSelected = selectedProject?.id === p.id
                    const isCentralHQ = p.isHQ
                    const shortLabel = isCentralHQ ? '★ Central HQ' : p.name.length > 22 ? p.name.slice(0, 20) + '…' : p.name

                    return (
                      <g
                        key={p.id}
                        transform={`translate(${p.displayX}, ${p.displayY})`}
                        onClick={() => setSelectedProject(p)}
                        className="cursor-pointer group"
                      >
                        {/* Outer Radar Ping for Selected or HQ */}
                        {(isSelected || isCentralHQ) && (
                          <circle
                            r={isCentralHQ ? 26 : 22}
                            fill="none"
                            stroke={isCentralHQ ? '#F59E0B' : '#00FFFF'}
                            strokeWidth="1.8"
                            className="animate-ping opacity-60"
                          />
                        )}

                        {/* Outer Glow Halo */}
                        <circle
                          r={isSelected ? 18 : isCentralHQ ? 15 : 11}
                          fill={isCentralHQ ? '#F59E0B' : isSelected ? '#00FFFF' : '#0052FF'}
                          fillOpacity={isSelected ? 0.65 : isCentralHQ ? 0.5 : 0.35}
                        />

                        {/* Core Marker Pin */}
                        <circle
                          r={isCentralHQ ? 10.5 : isSelected ? 9.5 : 7.5}
                          fill={isCentralHQ ? '#FBBF24' : isSelected ? '#00FFFF' : '#0052FF'}
                          stroke="#FFFFFF"
                          strokeWidth={2.2}
                          filter="url(#pinGlow)"
                          className="transition-transform duration-200 group-hover:scale-125"
                        />

                        {/* Number or Star inside Pin */}
                        <text
                          y="3"
                          textAnchor="middle"
                          fill={isSelected ? '#020817' : '#FFFFFF'}
                          fontSize={isCentralHQ ? '9' : '8'}
                          fontWeight="900"
                          className="pointer-events-none select-none"
                        >
                          {isCentralHQ ? '★' : p.indexNum}
                        </text>

                        {/* Floating Project Label on Hover or when Selected */}
                        <g 
                          transform="translate(0, -16)" 
                          className={isSelected ? 'opacity-100 z-50' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-200'}
                        >
                          <rect
                            x={- (shortLabel.length * 3.6 + 12)}
                            y="-16"
                            width={shortLabel.length * 7.2 + 24}
                            height="18"
                            rx="9"
                            fill="#020817"
                            stroke={isCentralHQ ? '#FBBF24' : isSelected ? '#00FFFF' : '#38BDF8'}
                            strokeWidth="1.2"
                            filter="url(#glow)"
                          />
                          <text
                            y="-4"
                            textAnchor="middle"
                            fill={isCentralHQ ? '#FBBF24' : isSelected ? '#00FFFF' : '#F8FAFC'}
                            fontSize="9"
                            fontWeight="bold"
                          >
                            {shortLabel}
                          </text>
                        </g>
                      </g>
                    )
                  })}
                </svg>
              </div>

              {/* Map Footer Legend */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-slate-300">
                <div className="bg-[#080E1A]/95 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="font-bold text-[#F59E0B]">Addis Ababa HQ</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                    <span>Project Scheme</span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-[#1D3B6F] border border-[#38BDF8]" />
                    <span>Regional Boundary</span>
                  </span>
                </div>

                <div className="bg-[#080E1A]/95 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-2">
                  <span className="text-[#00D4FF] font-semibold">Active:</span>
                  <span><strong>{selectedProject?.city}</strong> ({selectedProject?.region})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Project Card & Specifications */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Regional Project Browser / Switcher (Solves stacking in Addis Ababa & other regions) */}
            {filteredProjects.length > 1 && (
              <div className="bg-[#080E1A]/95 border border-slate-800 rounded-2xl p-3.5 sm:p-4 shadow-xl">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                    <span className="text-xs font-bold text-white">
                      {activeRegion === 'All Regions' ? 'National Projects' : `${activeRegion} Projects`}
                    </span>
                    <span className="bg-[#0052FF]/30 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-black px-2 py-0.5 rounded-full">
                      {filteredProjects.length} Schemes
                    </span>
                  </div>

                  {/* Previous / Next Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevProject}
                      className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
                      title="Previous scheme"
                      aria-label="Previous scheme"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-400 font-bold px-1">
                      {(currentProjectIndex >= 0 ? currentProjectIndex + 1 : 1)}/{filteredProjects.length}
                    </span>
                    <button
                      onClick={handleNextProject}
                      className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
                      title="Next scheme"
                      aria-label="Next scheme"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Horizontally scrollable list of project chips */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 touch-scroll">
                  {projectsWithCoords.map((p) => {
                    const isSelected = selectedProject?.id === p.id
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProject(p)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 active:scale-95 ${
                          isSelected
                            ? 'bg-[#0052FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.4)] border border-[#00FFFF]'
                            : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:text-white'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                          isSelected ? 'bg-white text-[#0052FF]' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {p.isHQ ? '★' : p.indexNum}
                        </span>
                        <span className="max-w-[150px] truncate text-left">{p.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {selectedProject ? (
              <div className="bg-[#0B1528] border border-slate-800 hover:border-[#00D4FF]/40 transition-colors rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden animate-fade-in">
                {/* Image Preview with Badge */}
                <div className="relative h-44 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 group border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex items-center gap-2">
                    <span className="bg-[#0052FF] text-white text-[9px] sm:text-[10px] uppercase font-black tracking-widest px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                      {selectedProject.region}
                    </span>
                    {selectedProject.isHQ && (
                      <span className="bg-amber-500 text-slate-950 text-[9px] sm:text-[10px] uppercase font-black tracking-widest px-2.5 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        ★ Central HQ
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 text-white text-[11px] sm:text-xs">
                    {selectedProject.area && (
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 font-semibold border border-white/10">
                        {selectedProject.area}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title & Client */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#00D4FF] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{selectedProject.city}, {selectedProject.region}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-1">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Client: <strong className="text-slate-200">{selectedProject.client}</strong>
                  </p>
                </div>

                {/* Project Scope & Engineering Details */}
                <div className="bg-[#060D1A] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#00D4FF]/20 grid grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-5 text-xs">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold block">System Architecture</span>
                    <p className="text-slate-200 font-bold mt-0.5 truncate" title={selectedProject.type}>
                      {selectedProject.type}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold block">Scheme Scale</span>
                    <p className="text-[#00D4FF] font-bold mt-0.5 truncate">
                      {selectedProject.area}
                    </p>
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-1.5 mb-5 sm:mb-6 bg-slate-900/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800">
                  <div className="text-[10px] uppercase font-extrabold text-[#00D4FF] tracking-wider mb-1.5 sm:mb-2">
                    Engineering Scope Highlights:
                  </div>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study Link */}
                <Link
                  to={`/project/${selectedProject.slug}`}
                  className="w-full min-h-[48px] bg-gradient-to-r from-[#0052FF] to-[#00D4FF] text-white font-black py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-[#0052FF]/25 text-xs uppercase tracking-wider"
                >
                  <span>View Full Scheme Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="bg-[#0B1528] border border-slate-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-slate-400">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-sm">Select any region or pin on the map to inspect project specifications.</p>
              </div>
            )}
          </div>
        </div>

        {/* Statistical Credentials Ribbon */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#00D4FF]">10,000+ ha</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Hectares Irrigated</div>
          </div>
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">38+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Major Schemes Delivered</div>
          </div>
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">All 11 Regions</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Complete National Presence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
