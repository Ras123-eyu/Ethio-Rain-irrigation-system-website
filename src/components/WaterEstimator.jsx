import { useState } from 'react'
import { Droplets, TrendingUp, Sun, ArrowRight, ShieldCheck, Sparkles, FileDown, Check, Activity, Gauge } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { generateProjectSpecPDF } from '../utils/generateProjectSpecPDF'

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
  const efficiencyRate = irrigationMethod === 'Drip' ? 0.45 : irrigationMethod === 'CenterPivot' ? 0.38 : 0.30
  const waterSavedM3 = Math.round(hectares * 2400 * efficiencyRate)
  const yieldBoostPercent = cropType === 'Horticulture / Fruits' ? 38 : cropType === 'Coffee / Avocado' ? 32 : cropType === 'Sugarcane / Cotton' ? 30 : 28
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

  const handleDownloadPDF = () => {
    setIsGeneratingPdf(true)
    setTimeout(() => {
      try {
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
    }, 600)
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
    <section className="py-24 bg-gradient-to-b from-[#030712] via-[#060D1A] to-[#030712] text-white relative overflow-hidden" id="spec-calculator">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest">
                Interactive Engineering Tool
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Instant Preliminary <span className="gradient-text">Project Spec & PDF</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
              Configure your land size, water source, and power setup to generate an engineering feasibility estimate and download a corporate specification sheet in seconds.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0B172B]/95 backdrop-blur-2xl border border-[#00D4FF]/20 rounded-3xl p-6 md:p-10 shadow-2xl">
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-6">
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
                  className="w-full bg-[#060D1A] border border-slate-700 focus:border-[#00D4FF] rounded-xl p-3 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Cultivated Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-200">Cultivated Farm Area</label>
                  <span className="text-lg font-black text-[#00D4FF] bg-[#0038E2]/30 px-3.5 py-1 rounded-xl border border-[#00D4FF]/40 shadow-[0_0_12px_rgba(0,212,255,0.25)]">
                    {hectares} Hectares
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

              {/* Crop & Irrigation Technology Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Primary Crop
                  </label>
                  <select
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
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
                    Irrigation System
                  </label>
                  <select
                    value={irrigationMethod}
                    onChange={(e) => setIrrigationMethod(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option value="CenterPivot">Valley Center Pivot</option>
                    <option value="Drip">Precision Drip Irrigation</option>
                    <option value="Sprinkler">Rain Bird Sprinklers & Guns</option>
                  </select>
                </div>
              </div>

              {/* Water Source & Power Source */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Water Source
                  </label>
                  <select
                    value={waterSource}
                    onChange={(e) => setWaterSource(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option value="Deep Production Borehole">Deep Production Borehole</option>
                    <option value="River / Lake Intake">River / Lake Intake</option>
                    <option value="Canal / Gravity Scheme">Canal / Gravity Scheme</option>
                    <option value="Earth Dam / Storage Reservoir">Earth Dam / Reservoir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Power Infrastructure
                  </label>
                  <select
                    value={powerSource}
                    onChange={(e) => setPowerSource(e.target.value)}
                    className="w-full bg-[#060D1A] border border-slate-700 rounded-xl p-3 text-white text-sm focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option value="Solar PV Pumping Station">Solar PV Array (Off-Grid)</option>
                    <option value="Synchronized Diesel Generator">Heavy Diesel Generator</option>
                    <option value="National Grid Electromechanical">National Grid Substation</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Grade-1 Water Works Contractor calibrated formulas compliant with MoWE standards.</span>
              </div>
            </div>

            {/* Results & Actions Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* Engineering Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Annual Water Saved</span>
                    <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                      <Droplets className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-white mt-3">{waterSavedM3.toLocaleString()} m³</p>
                  <span className="text-[11px] text-[#10B981] font-bold mt-1">~{Math.round(efficiencyRate * 100)}% conservation vs. flood</span>
                </div>

                <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Projected Yield Boost</span>
                    <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-[#10B981] mt-3">+{yieldBoostPercent}%</p>
                  <span className="text-[11px] text-slate-400 mt-1">Consistent root-zone delivery</span>
                </div>

                <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Peak Flow Requirement</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Gauge className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-white mt-3">{flowRateM3h} m³/hr</p>
                  <span className="text-[11px] text-slate-400 mt-1">Recommended: {recommendedPipe}</span>
                </div>

                <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Fuel / Energy Savings</span>
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
                      <Sun className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-white mt-3">{dieselSavedLiters.toLocaleString()} L/yr</p>
                  <span className="text-[11px] text-[#F59E0B] font-bold mt-1">Estimated ~{estPowerKw} kW pump array</span>
                </div>
              </div>

              {/* Action Buttons Box */}
              <div className="bg-gradient-to-br from-[#0B1528] to-[#060D1A] border border-[#00D4FF]/30 p-6 rounded-2xl space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#00D4FF]">
                      Export Corporate Spec Sheet
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
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
                    className="w-full bg-[#00D4FF] hover:bg-[#00B4D8] text-slate-950 font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#00D4FF]/20 cursor-pointer disabled:opacity-50"
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
                    className="w-full bg-[#0052FF] hover:bg-[#0038E2] text-white font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#0052FF]/30 cursor-pointer"
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
