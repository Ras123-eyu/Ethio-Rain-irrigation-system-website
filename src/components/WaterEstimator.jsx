import React, { useState } from 'react'
import { Droplets, TrendingUp, Sun, ArrowRight, ShieldCheck, Sparkles, Gauge } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function WaterEstimator() {
  const [hectares, setHectares] = useState(50)
  const [cropType, setCropType] = useState('Wheat / Grains')
  const [irrigationMethod, setIrrigationMethod] = useState('Drip')

  // Dynamic Savings Calculation
  const waterSavedM3 = Math.round(hectares * 2400 * (irrigationMethod === 'Drip' ? 0.45 : 0.35))
  const yieldBoostPercent = cropType === 'Horticulture / Fruits' ? 38 : cropType === 'Coffee / Avocado' ? 32 : 28
  const dieselSavedLiters = Math.round(hectares * 175)
  const estPowerKw = Math.round(hectares * 1.8)

  return (
    <section className="py-24 bg-gradient-to-b from-[#030712] via-[#060D1A] to-[#030712] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest">
                Interactive ROI & Water Calculator
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Calculate Your <span className="gradient-text">Water & Yield Advantage</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
              Estimate your farm's water conservation, crop yield boost, and operational fuel savings with Ethio-Rain precision engineering.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B172B]/90 backdrop-blur-2xl border border-[#00D4FF]/20 rounded-3xl p-6 md:p-10 shadow-2xl">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
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
                  <span>5 Ha (Smallholding)</span>
                  <span>250 Ha</span>
                  <span>500+ Ha (Commercial Estate)</span>
                </div>
              </div>

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
                    <option value="Horticulture / Fruits">Vegetables, Onions & Fruits</option>
                    <option value="Coffee / Avocado">Coffee & Avocado Orchards</option>
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
                    <option value="Drip">Precision Drip Irrigation</option>
                    <option value="CenterPivot">Center Pivot / Sprinkler</option>
                    <option value="Solar">Solar Pumping + Micro-Spray</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>Calibrated against Ethiopian agronomy benchmarks and FAO water duty standards.</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Annual Water Saved</span>
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                    <Droplets className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-white mt-3">{waterSavedM3.toLocaleString()} m³</p>
                <span className="text-[11px] text-[#10B981] font-bold mt-1">~45% vs. traditional flood irrigation</span>
              </div>

              <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Expected Yield Boost</span>
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-[#10B981] mt-3">+{yieldBoostPercent}%</p>
                <span className="text-[11px] text-slate-400 mt-1">Uniform root-zone delivery</span>
              </div>

              <div className="bg-[#060D1A] p-5 rounded-2xl border border-[#00D4FF]/20 flex flex-col justify-between hover:border-[#00D4FF]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Solar Fuel Savings</span>
                  <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
                    <Sun className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-white mt-3">{dieselSavedLiters.toLocaleString()} Liters</p>
                <span className="text-[11px] text-[#F59E0B] font-bold mt-1">~{estPowerKw} kW Solar Array capacity</span>
              </div>

              <div className="bg-gradient-to-br from-[#0038E2] via-[#0052FF] to-[#00D4FF] p-5 rounded-2xl flex flex-col justify-between text-white shadow-lg shadow-[#0038E2]/40">
                <div>
                  <span className="text-[11px] uppercase font-extrabold text-[#00D4FF] tracking-wider">
                    Turnkey Engineering
                  </span>
                  <h4 className="font-extrabold text-sm mt-1 leading-snug">
                    Get an Engineer Feasibility Survey
                  </h4>
                </div>
                <a
                  href="#contact"
                  className="mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-black text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all transform hover:scale-[1.02] shadow-md"
                >
                  Request Quotation <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
