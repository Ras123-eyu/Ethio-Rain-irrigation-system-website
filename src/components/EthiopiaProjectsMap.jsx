import { useState } from 'react'
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
  Briefcase
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
    <section className="py-24 bg-[#030712] text-white relative overflow-hidden" id="interactive-map">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest">
                All 11 Ethiopian Administrative Regions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Interactive <span className="gradient-text">Ethiopia Regional Project Map</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
              Explore Ethio-Rain’s 38 verified project schemes across all 11 administrative regions of Ethiopia. Click any regional boundary or project marker to inspect engineering specifications.
            </p>
          </div>
        </ScrollReveal>

        {/* All 11 Regions Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeRegion === region
                    ? 'bg-[#0052FF] text-white shadow-[0_0_20px_rgba(0,82,255,0.5)] scale-105'
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
          <div className="lg:col-span-7 bg-[#080E1A]/95 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            {/* Map Header & Controls */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Layers className="w-4 h-4 text-[#00D4FF]" />
                <span>
                  Map Focus:{' '}
                  <strong className="text-white">
                    {hoveredRegion ? hoveredRegion.name : activeRegion === 'All Regions' ? 'All 11 Regions (38 Schemes)' : `${activeRegion} (${filteredProjects.length} Schemes)`}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
                  title="Zoom In"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
                  title="Zoom Out"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
                  title="Reset Zoom"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* SVG Interactive Canvas with Real Regions */}
            <div className="relative w-full aspect-[800/620] overflow-hidden rounded-2xl bg-[#040812]">
              {/* Subtle Coordinate Grid Background */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
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
                      <stop offset="0%" stopColor="#0B1A35" />
                      <stop offset="100%" stopColor="#060F22" />
                    </linearGradient>

                    <linearGradient id="regionActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0E3378" />
                      <stop offset="100%" stopColor="#091E47" />
                    </linearGradient>

                    <linearGradient id="regionHoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#143F96" />
                      <stop offset="100%" stopColor="#0B2356" />
                    </linearGradient>

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
                            stroke={isHovered ? '#00D4FF' : isHighlighted ? '#38BDF8' : '#1D3B6F'}
                            strokeWidth={isHovered ? 2 : isHighlighted ? 1.8 : 1}
                            strokeLinejoin="round"
                            className="transition-all duration-300"
                          />

                          {/* Region Name Watermark Label on Map */}
                          <text
                            x={region.cx}
                            y={region.cy}
                            textAnchor="middle"
                            fill={isHovered ? '#00D4FF' : isHighlighted ? '#FFFFFF' : '#476599'}
                            fontSize={region.id === 'addis-ababa' ? '7.5' : region.id === 'oromia' ? '12' : region.id === 'somali' ? '12' : '9'}
                            fontWeight={isHovered || isHighlighted ? 'bold' : '600'}
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
                  <ellipse cx="265" cy="180" rx="16" ry="12" fill="#00D4FF" className="opacity-20 animate-pulse pointer-events-none" />
                  <ellipse cx="316" cy="380" rx="14" ry="28" fill="#00D4FF" className="opacity-20 animate-pulse pointer-events-none" />

                  {/* INTERACTIVE PROJECT PINS ON REGIONS */}
                  {filteredProjects.map((p) => {
                    const isSelected = selectedProject?.id === p.id
                    const isCentralHQ = p.isHQ

                    return (
                      <g
                        key={p.id}
                        transform={`translate(${p.x}, ${p.y})`}
                        onClick={() => setSelectedProject(p)}
                        className="cursor-pointer group"
                      >
                        {/* Outer Radar Ping for Selected or HQ */}
                        {(isSelected || isCentralHQ) && (
                          <circle
                            r={isCentralHQ ? 22 : 16}
                            fill="none"
                            stroke={isCentralHQ ? '#F59E0B' : '#00D4FF'}
                            strokeWidth="1.5"
                            className="animate-ping opacity-60"
                          />
                        )}

                        {/* Outer Glow Halo */}
                        <circle
                          r={isSelected ? 14 : isCentralHQ ? 12 : 8}
                          fill={isCentralHQ ? '#F59E0B' : isSelected ? '#00D4FF' : '#0052FF'}
                          fillOpacity={isSelected || isCentralHQ ? '0.45' : '0.2'}
                        />

                        {/* Core Marker Pin */}
                        <circle
                          r={isCentralHQ ? 7.5 : isSelected ? 6.5 : 4.5}
                          fill={isCentralHQ ? '#F59E0B' : isSelected ? '#00D4FF' : '#38BDF8'}
                          stroke="#FFFFFF"
                          strokeWidth={isCentralHQ ? 2 : 1.5}
                          filter="url(#glow)"
                          className="transition-transform duration-200 group-hover:scale-125"
                        />

                        {/* Central Star for Addis Ababa HQ */}
                        {isCentralHQ && (
                          <text
                            y="2.5"
                            textAnchor="middle"
                            fill="#030712"
                            fontSize="8"
                            fontWeight="black"
                          >
                            ★
                          </text>
                        )}

                        {/* City Label Badge on Hover or when Selected */}
                        <g 
                          transform="translate(0, -14)" 
                          className={isSelected || isCentralHQ ? 'opacity-100' : 'opacity-85 group-hover:opacity-100'}
                        >
                          <rect
                            x={- (p.city.length * 3.5 + (isCentralHQ ? 24 : 10))}
                            y="-14"
                            width={p.city.length * 7 + (isCentralHQ ? 48 : 20)}
                            height="16"
                            rx="8"
                            fill="#060D1A"
                            stroke={isCentralHQ ? '#F59E0B' : isSelected ? '#00D4FF' : '#334155'}
                            strokeWidth="1"
                          />
                          <text
                            y="-3"
                            textAnchor="middle"
                            fill={isCentralHQ ? '#F59E0B' : isSelected ? '#00D4FF' : '#F1F5F9'}
                            fontSize="8.5"
                            fontWeight="bold"
                          >
                            {isCentralHQ ? `★ ${p.city} (HQ)` : p.city}
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
            {selectedProject ? (
              <div className="bg-[#0B1528] border border-slate-800 hover:border-[#00D4FF]/40 transition-colors rounded-3xl p-6 shadow-2xl relative overflow-hidden animate-fade-in">
                {/* Image Preview with Badge */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5 group border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#0052FF] text-white text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {selectedProject.region}
                    </span>
                    {selectedProject.isHQ && (
                      <span className="bg-amber-500 text-slate-950 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        ★ Central HQ
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-mono bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-emerald-400 font-bold border border-emerald-500/30">
                      {selectedProject.value}
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 font-semibold border border-white/10">
                      {selectedProject.area}
                    </span>
                  </div>
                </div>

                {/* Project Title & Client */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#00D4FF] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedProject.city}, {selectedProject.region}</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-snug mb-1">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Client: <strong className="text-slate-200">{selectedProject.client}</strong>
                  </p>
                </div>

                {/* Project Scope & Engineering Details */}
                <div className="bg-[#060D1A] p-4 rounded-2xl border border-[#00D4FF]/20 grid grid-cols-2 gap-3 mb-5 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">System Architecture</span>
                    <p className="text-slate-200 font-bold mt-0.5 truncate" title={selectedProject.type}>
                      {selectedProject.type}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Scheme Scale</span>
                    <p className="text-[#00D4FF] font-bold mt-0.5 truncate">
                      {selectedProject.area}
                    </p>
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-1.5 mb-6 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <div className="text-[10px] uppercase font-extrabold text-[#00D4FF] tracking-wider mb-2">
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
                  to={`/projects/${selectedProject.slug}`}
                  className="w-full bg-gradient-to-r from-[#0052FF] to-[#00D4FF] text-white font-black py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-[#0052FF]/25 text-xs uppercase tracking-wider"
                >
                  <span>View Full Scheme Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="bg-[#0B1528] border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p>Select any region or pin on the map to inspect project specifications.</p>
              </div>
            )}
          </div>
        </div>

        {/* Statistical Credentials Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-2xl p-5 text-center">
            <div className="text-2xl md:text-3xl font-black text-[#00D4FF]">10,000+ ha</div>
            <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Hectares Irrigated</div>
          </div>
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-2xl p-5 text-center">
            <div className="text-2xl md:text-3xl font-black text-emerald-400">38+</div>
            <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Major Schemes Delivered</div>
          </div>
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-2xl p-5 text-center">
            <div className="text-2xl md:text-3xl font-black text-white">All 11 Regions</div>
            <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Complete National Presence</div>
          </div>
          <div className="bg-[#080E1A]/80 border border-slate-800/80 rounded-2xl p-5 text-center">
            <div className="text-2xl md:text-3xl font-black text-[#0052FF]">ETB 240M+</div>
            <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Delivered Value of Works</div>
          </div>
        </div>
      </div>
    </section>
  )
}
