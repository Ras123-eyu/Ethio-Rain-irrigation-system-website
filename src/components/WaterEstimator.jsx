import { useState } from 'react'
import { Droplets, TrendingUp, Sun, ArrowRight, ShieldCheck, Sparkles, FileDown, Check, Activity, Gauge, Zap, CheckCircle2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const CROP_PRESETS = [
  { name: '🌾 Wheat / Grains (50 ha)', farm: 'Oromia Cereal Farm', crop: 'Wheat / Grains', ha: 50, method: 'CenterPivot', source: 'Deep Production Borehole', power: 'Solar PV Pumping Station' },
  { name: '🥑 Avocado / Orchards (25 ha)', farm: 'Rift Valley Avocado Estate', crop: 'Coffee / Avocado', ha: 25, method: 'Drip', source: 'River / Lake Intake', power: 'Solar PV Pumping Station' },
  { name: '🌽 Commercial Maize (120 ha)', farm: 'Awash Basin Maize Scheme', crop: 'Wheat / Grains', ha: 120, method: 'CenterPivot', source: 'River / Lake Intake', power: 'Synchronized Diesel Generator' },
  { name: '☕ Coffee Plantation (40 ha)', farm: 'Sidama Coffee Growers Block', crop: 'Coffee / Avocado', ha: 40, method: 'Drip', source: 'Canal / Gravity Scheme', power: 'National Grid Electromechanical' },
  { name: '🍅 Greenhouse Veggies (10 ha)', farm: 'Bishoftu Floriculture & Veg', crop: 'Horticulture / Fruits', ha: 10, method: 'Drip', source: 'Deep Production Borehole', power: 'Solar PV Pumping Station' },
]

const METHODS = [
  { id: 'CenterPivot', label: 'Center Pivot', efficiency: '95% Uniformity', badge: 'High Yield', desc: 'Automated circular spans for extensive grain & maize farms' },
  { id: 'Drip', label: 'Precision Drip', efficiency: '98% Efficiency', badge: 'Max Water Saver', desc: 'Direct root-zone delivery for orchards, vegetables & coffee' },
  { id: 'Sprinkler', label: 'Sprinklers & Guns', efficiency: '85% Coverage', badge: 'Flexible', desc: 'Mobile travelling guns and portable impact sprinklers' }
]

export default function WaterEstimator() {
  const [farmName, setFarmName] = useState('Abyssinia Commercial Farm')
  const [hectares, setHectares] = useState(50)
  const [cropType, setCropType] = useState('Wheat / Grains')
  const [irrigationMethod, setIrrigationMethod] = useState('CenterPivot')
  const [waterSource, setWaterSource] = useState('Deep Production Borehole')
  const [powerSource, setPowerSource] = useState('Solar PV Pumping Station')
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const [pdfSuccess, setPdfSuccess] = useState(false)

  // Dynamic Savings & Flow Rate Calculations
  const efficiencyRate = irrigationMethod === 'Drip' ? 0.48 : irrigationMethod === 'CenterPivot' ? 0.40 : 0.30
  const waterSavedM3 = Math.round(hectares * 2400 * efficiencyRate)
  const traditionalWaterM3 = Math.round(hectares * 2400 * 1.5)
  const ethioRainWaterM3 = traditionalWaterM3 - waterSavedM3

  const yieldBoostPercent = cropType === 'Horticulture / Fruits' ? 38 : cropType === 'Coffee / Avocado' ? 34 : cropType === 'Sugarcane / Cotton' ? 30 : 28
  const dieselSavedLiters = Math.round(hectares * (powerSource.includes('Solar') ? 220 : 110))
  const estPowerKw = Math.round(hectares * 1.8)
  
  // Peak Flow Rate & Pipe Spec
  const flowRateM3h = Math.round(hectares * 3.2)
  const recommendedPipe = hectares > 200 ? 'DN 250 HDPE PN10' : hectares > 80 ? 'DN 200 HDPE PN10' : hectares > 30 ? 'DN 160 HDPE PN10' : 'DN 110 HDPE PN10'

  const methodDisplayName = irrigationMethod === 'CenterPivot' 
    ? 'Valley Center Pivot Irrigation' 
    : irrigationMethod === 'Drip' 
    ? 'Inline Pressure-Compensating Drip' 
    : 'Rain Bird Sprinkler & Gun System'

  const handleApplyPreset = (p) => {
    setFarmName(p.farm)
    setCropType(p.crop)
    setHectares(p.ha)
    setIrrigationMethod(p.method)
    setWaterSource(p.source)
    setPowerSource(p.power)
  }

  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true)
    try {
      const { generateProjectSpecPDF } = await import('../utils/generateProjectSpecPDF')
      generateProjectSpecPDF({
        farmName: farmName || 'Commercial Agricultural Project',
        hectares,
        cropType,
        irrigationMethod: methodDisplayName,
        waterSource,
        powerSource,
        waterSavedM3,
        yieldBoostPercent,
        dieselSavedLiters,
        flowRateM3h,
        pipeSize: recommendedPipe
      })
      setPdfSuccess(true)
      setTimeout(() => setPdfSuccess(false), 4000)
    } catch (err) {
      console.error('PDF generation error:', err)
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  const handlePrefillQuote = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      const messageInput = document.querySelector('textarea[name="message"]') || document.querySelector('textarea')
      if (messageInput) {
        messageInput.value = `Hello Ethio-Rain Team,\n\nI generated a Preliminary Spec Sheet for ${farmName} (${hectares} hectares of ${cropType}).\n- Recommended Technology: ${methodDisplayName}\n- Water Source: ${waterSource}\n- Power Setup: ${powerSource}\n- Estimated Flow: ${flowRateM3h} m³/hr\n- Target Pipeline: ${recommendedPipe}\n\nPlease provide a formal commercial quotation and site survey schedule.`
        messageInput.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }
  }

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-[#030712] via-[#060D1A] to-[#030712] text-white relative overflow-hidden" id="spec-calculator">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-3.5 sm:px-4 py-1.5 mb-3 sm:mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                Interactive Feasibility & Spec Calculator
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Instant Preliminary <span className="gradient-text">Project Spec & PDF</span>
            </h2>
            <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Select one-click crop presets, slide farm dimensions, and choose your technology to simulate real-time water savings and export a corporate spec sheet.
            </p>
          </div>
        </ScrollReveal>

        {/* Quick Crop Presets Ribbon */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 overflow-x-auto no-scrollbar touch-scroll pb-1">
          <span className="text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-wider shrink-0 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
            ⚡ Quick Presets:
          </span>
          {CROP_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handleApplyPreset(preset)}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-900 hover:bg-[#0052FF] text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-400/40 transition-all shrink-0 cursor-pointer active:scale-95 shadow-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start bg-[#0B172B]/95 backdrop-blur-2xl border border-[#00D4FF]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl">
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              {/* Project / Farm Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Farm Name or Agricultural Scheme
                </label>
                <input
                  type="text"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  placeholder="e.g. Oromia Commercial Farm Project"
                  className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl p-3 text-white text-base md:text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Cultivated Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-200">Cultivated Farm Area</label>
                  <span className="text-lg font-black text-[#00D4FF] bg-[#0038E2]/30 px-3.5 py-1 rounded-xl border border-[#00D4FF]/40 shadow-[0_0_12px_rgba(0,212,255,0.25)]">
                    {hectares} Hectares (~{Math.round(hectares * 2.471)} Acres)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={hectares}
                  onChange={(e) => setHectares(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
                  <span>5 ha (Smallholder)</span>
                  <span>100 ha</span>
                  <span>500+ ha (Commercial Estate)</span>
                </div>
              </div>

              {/* Interactive Irrigation System Visual Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Irrigation System Model
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {METHODS.map(m => {
                    const isSelected = irrigationMethod === m.id
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setIrrigationMethod(m.id)}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#0052FF]/25 border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                            : 'bg-[#060D1A] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <span className={`text-[8px] sm:text-[9px] uppercase font-black px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-cyan-400 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {m.badge}
                          </span>
                          <div className="font-bold text-xs sm:text-sm text-white mt-1.5">{m.label}</div>
                        </div>
                        <div className="text-[10px] text-cyan-300 font-mono mt-2">{m.efficiency}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Crop & Water & Power Sources */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Primary Crop Cultivar
                  </label>
                  <select
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-base md:text-sm focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option value="Wheat / Grains">Wheat, Maize & Cereals</option>
                    <option value="Sugarcane / Cotton">Sugarcane & Cotton</option>
                    <option value="Horticulture / Fruits">Vegetables & Fruits</option>
                    <option value="Coffee / Avocado">Coffee & Avocado Orchards</option>
                    <option value="Greenhouse / Floriculture">Greenhouse Flowers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Water Intake Source
                  </label>
                  <select
                    value={waterSource}
                    onChange={(e) => setWaterSource(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-base md:text-sm focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option value="Deep Production Borehole">Deep Production Borehole</option>
                    <option value="River / Lake Intake">River / Lake Intake</option>
                    <option value="Canal / Gravity Scheme">Canal / Gravity Scheme</option>
                    <option value="Earth Dam / Storage Reservoir">Earth Dam / Reservoir</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Power Infrastructure
                </label>
                <select
                  value={powerSource}
                  onChange={(e) => setPowerSource(e.target.value)}
                  className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-base md:text-sm focus:border-[#00D4FF] focus:outline-none"
                >
                  <option value="Solar PV Pumping Station">Solar PV Array (Off-Grid Clean Energy)</option>
                  <option value="Synchronized Diesel Generator">Heavy Diesel Generator Station</option>
                  <option value="National Grid Electromechanical">National Grid Substation Connection</option>
                </select>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Grade-1 Water Works Contractor calibrated formulas compliant with MoWE standards.</span>
              </div>
            </div>

            {/* Results & Actions Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* Interactive Comparative Water Savings Visual Bar */}
              <div className="bg-[#060D1A] p-4 rounded-xl border border-cyan-500/20 shadow-inner">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    Water Efficiency vs Traditional Furrow Flooding
                  </span>
                  <span className="text-emerald-400 font-black">{Math.round(efficiencyRate * 100)}% Conserved</span>
                </div>

                {/* Dual Progress Bar */}
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                      <span>Traditional Flooding Demand</span>
                      <span className="text-rose-400 font-mono">{traditionalWaterM3.toLocaleString()} m³</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500/70 w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                      <span>Ethio-Rain Precision Demand</span>
                      <span className="text-emerald-400 font-mono font-bold">{ethioRainWaterM3.toLocaleString()} m³</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500" 
                        style={{ width: `${Math.round((ethioRainWaterM3 / traditionalWaterM3) * 100)}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="bg-[#060D1A] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Water Saved</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                      <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl font-black text-white mt-2 sm:mt-3">{waterSavedM3.toLocaleString()} m³</p>
                  <span className="text-[10px] sm:text-[11px] text-[#10B981] font-bold mt-1">~{Math.round(efficiencyRate * 100)}% conservation</span>
                </div>

                <div className="bg-[#060D1A] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Yield Boost</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl font-black text-[#10B981] mt-2 sm:mt-3">+{yieldBoostPercent}%</p>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1">Root-zone delivery</span>
                </div>

                <div className="bg-[#060D1A] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Peak Flow</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl font-black text-white mt-2 sm:mt-3">{flowRateM3h} m³/hr</p>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 truncate">{recommendedPipe}</span>
                </div>

                <div className="bg-[#060D1A] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Energy Saved</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0">
                      <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl font-black text-white mt-2 sm:mt-3">{dieselSavedLiters.toLocaleString()} L/yr</p>
                  <span className="text-[10px] sm:text-[11px] text-[#F59E0B] font-bold mt-1">~{estPowerKw} kW pump</span>
                </div>
              </div>

              {/* Action Buttons Box */}
              <div className="bg-gradient-to-br from-[#0B1528] to-[#060D1A] border border-[#00D4FF]/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#00D4FF]">
                      Export Corporate Spec Sheet
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      Download Official Preliminary Spec Sheet (PDF)
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Includes Ethio-Rain Grade-1 credentials, component BOQ checklist, and preliminary engineering formulas.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* PDF Download Button */}
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isGeneratingPdf}
                    className="w-full bg-[#00D4FF] hover:bg-[#00B4D8] text-slate-950 font-black text-xs sm:text-sm min-h-[48px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#00D4FF]/20 cursor-pointer disabled:opacity-50"
                  >
                    {isGeneratingPdf ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Generating PDF...</span>
                      </>
                    ) : pdfSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-900" />
                        <span>Downloaded PDF!</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-4 h-4" />
                        <span>Download Spec PDF</span>
                      </>
                    )}
                  </button>

                  {/* Request Formal Quotation */}
                  <button
                    onClick={handlePrefillQuote}
                    className="w-full bg-[#0052FF] hover:bg-[#0038E2] text-white font-black text-xs sm:text-sm min-h-[48px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#0052FF]/30 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {pdfSuccess && (
                  <div className="text-center text-xs text-emerald-400 font-semibold animate-fade-in">
                    ✓ Specification sheet generated and saved to your device!
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
