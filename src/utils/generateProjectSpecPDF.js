import { jsPDF } from 'jspdf'

/**
 * Generates and downloads a corporate-branded Preliminary Project Specification Sheet PDF
 * for Ethio-Rain Irrigation Systems P.L.C.
 * Precision engineered for single-page A4 executive presentation with zero overlap.
 */
export function generateProjectSpecPDF(params) {
  const {
    farmName = 'Commercial Agricultural Project',
    hectares = 50,
    cropType = 'Wheat / Grains',
    irrigationMethod = 'Valley Center Pivot Irrigation',
    waterSource = 'Deep Production Borehole',
    powerSource = 'Solar PV Pumping Station',
    waterSavedM3 = 54000,
    yieldBoostPercent = 30,
    dieselSavedLiters = 8750,
    flowRateM3h = 120,
    pipeSize = 'DN 160 HDPE PN10'
  } = params

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 15
  const contentWidth = pageWidth - margin * 2

  // Generate Reference ID & Date
  const specRef = `ER-SPEC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  // Executive Palette
  const navy = [6, 18, 36]        // #061224 - Corporate Deep Navy
  const cyan = [0, 180, 216]      // #00B4D8 - Ethio-Rain Brand Cyan
  const emerald = [16, 185, 129]  // #10B981 - Success Emerald
  const darkGray = [30, 41, 59]   // #1E293B - High-contrast text
  const lightBg = [248, 250, 252] // #F8FAFC - Clean card fill
  const borderGray = [226, 232, 240] // #E2E8F0 - Subtle borders
  const slate = [100, 116, 139]   // #64748B - Subtext slate

  // ==========================================
  // --- HEADER SECTION (Height 36mm) ---
  // ==========================================
  doc.setFillColor(...navy)
  doc.rect(0, 0, pageWidth, 36, 'F')

  // Vibrant Brand Accent Line
  doc.setFillColor(...cyan)
  doc.rect(0, 34.5, pageWidth, 1.5, 'F')

  // Company Brand Name & Credentials
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  doc.text('ETHIO-RAIN', margin, 14)

  doc.setFontSize(8.5)
  doc.setTextColor(0, 212, 255)
  doc.text('IRRIGATION SYSTEMS P.L.C.', margin, 19.5)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(180, 200, 225)
  doc.text('Grade-1 Water Works Contractor | Precision Agricultural Machinery Manufacturer', margin, 25)
  doc.text('Authorized Global Technology Partner of Valley Irrigation, Rain Bird & Wilo Pumps', margin, 30)

  // Document Title & Spec Reference on Right
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.text('PROJECT SPECIFICATION SHEET', pageWidth - margin, 13, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(0, 212, 255)
  doc.text(`Ref: ${specRef}`, pageWidth - margin, 18.5, { align: 'right' })

  doc.setTextColor(200, 215, 235)
  doc.text(`Date: ${dateStr}`, pageWidth - margin, 24, { align: 'right' })

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(52, 211, 153)
  doc.text('Status: Preliminary Engineering Estimate', pageWidth - margin, 29.5, { align: 'right' })

  let currentY = 41

  // ==========================================
  // --- CLIENT / PROJECT OVERVIEW CARD (Height 21mm) ---
  // ==========================================
  doc.setFillColor(...lightBg)
  doc.setDrawColor(...borderGray)
  doc.roundedRect(margin, currentY, contentWidth, 21, 2, 2, 'FD')

  const col1ValX = margin + 34
  const col2LabelX = margin + 94
  const col2ValX = margin + 120

  // Row 1
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...navy)
  doc.text('Project / Client:', margin + 5, currentY + 5.5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(doc.splitTextToSize(String(farmName), 56)[0], col1ValX, currentY + 5.5)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Water Source:', col2LabelX, currentY + 5.5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(doc.splitTextToSize(String(waterSource), 56)[0], col2ValX, currentY + 5.5)

  // Row 2
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Evaluated Area:', margin + 5, currentY + 11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(`${hectares} ha (~${Math.round(hectares * 2.471)} Acres / ${Math.round(hectares * 4)} Timad)`, col1ValX, currentY + 11)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Power Setup:', col2LabelX, currentY + 11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(doc.splitTextToSize(String(powerSource), 56)[0], col2ValX, currentY + 11)

  // Row 3
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Target Crop:', margin + 5, currentY + 16.5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(doc.splitTextToSize(String(cropType), 56)[0], col1ValX, currentY + 16.5)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Contractor Tier:', col2LabelX, currentY + 16.5)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...emerald)
  doc.text('Ethiopian Grade-1 Water Works Contractor', col2ValX, currentY + 16.5)

  currentY += 25 // 41 + 25 = 66

  // ==========================================
  // --- SECTION 1: SYSTEM ARCHITECTURE ---
  // ==========================================
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 6, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('1. RECOMMENDED IRRIGATION SYSTEM ARCHITECTURE', margin + 4, currentY + 4.2)

  currentY += 8 // currentY = 74

  const techRows = [
    ['Technology Model', String(irrigationMethod), 'Engineered for high application uniformity and maximum field reliability.'],
    ['Water Intake Unit', String(waterSource), 'Includes intake civil works, wet well/borehole casing, and gravel pack.'],
    ['Pumping Station', String(powerSource), 'Submersible or surface booster pumping skid with automated control panel.'],
    ['Conveyance Pipeline', `${pipeSize} Butt-Fusion HDPE`, 'High-density polyethylene pressure pipe rated for PN10/PN16 service.'],
    ['Field Emission Units', irrigationMethod.includes('Pivot') ? 'Valley Low-Pressure Spray Nozzles' : 'Pressure-Compensating Emitters / Sprinklers', 'Ensures 92%+ distribution uniformity across all evaluated crop blocks.']
  ]

  techRows.forEach(([title, val, desc], i) => {
    const rowY = currentY + i * 7
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252)
    doc.setDrawColor(...borderGray)
    doc.rect(margin, rowY, contentWidth, 7, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7)
    doc.setTextColor(...navy)
    doc.text(title, margin + 4, rowY + 4.5)

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...cyan)
    doc.text(doc.splitTextToSize(val, 50)[0], margin + 42, rowY + 4.5)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...slate)
    doc.setFontSize(6.5)
    doc.text(doc.splitTextToSize(desc, 84)[0], margin + 95, rowY + 4.5)
  })

  currentY += techRows.length * 7 + 5 // 74 + 35 + 5 = 114

  // ==========================================
  // --- SECTION 2: ESTIMATED PERFORMANCE & SAVINGS ---
  // ==========================================
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 6, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('2. PROJECTED ENGINEERING & ECONOMIC ADVANTAGES', margin + 4, currentY + 4.2)

  currentY += 8 // currentY = 122

  const metrics = [
    { label: 'Projected Water Saved', val: `${waterSavedM3.toLocaleString()} m³/yr`, sub: 'vs furrow flooding' },
    { label: 'Projected Yield Boost', val: `+${yieldBoostPercent}%`, sub: 'via precision rootzone delivery' },
    { label: 'Estimated Energy Saved', val: `${dieselSavedLiters.toLocaleString()} L/yr`, sub: 'optimized hydraulic head' },
    { label: 'Peak Flow Demand', val: `${flowRateM3h} m³/hr`, sub: 'designed continuous capacity' }
  ]

  const cardWidth = (contentWidth - 9) / 4
  metrics.forEach((m, idx) => {
    const cardX = margin + idx * (cardWidth + 3)
    doc.setFillColor(...lightBg)
    doc.setDrawColor(...borderGray)
    doc.roundedRect(cardX, currentY, cardWidth, 18, 1.5, 1.5, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    doc.setTextColor(...cyan)
    doc.text(m.val, cardX + cardWidth / 2, currentY + 6.5, { align: 'center' })

    doc.setFontSize(6.5)
    doc.setTextColor(...navy)
    doc.text(m.label, cardX + cardWidth / 2, currentY + 11.5, { align: 'center' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(5.8)
    doc.setTextColor(...slate)
    doc.text(m.sub, cardX + cardWidth / 2, currentY + 15.5, { align: 'center' })
  })

  currentY += 23 // 122 + 23 = 145

  // ==========================================
  // --- SECTION 3: BILL OF QUANTITIES (BOQ) CHECKLIST ---
  // ==========================================
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 6, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('3. PRELIMINARY BILL OF QUANTITIES (BOQ) COMPONENT CHECKLIST', margin + 4, currentY + 4.2)

  currentY += 8 // currentY = 153

  const boqItems = [
    ['01', 'Water Intake & Pumping Unit', 'Wilo Submersible / Centrifugal Pump Skid with dry-run protection', 'Included'],
    ['02', 'Power & Control Unit', `${powerSource} with automated surge & phase protection`, 'Included'],
    ['03', 'Primary Filtration Battery', 'Hydrocyclone sand separator + automatic dual disc/media filters', 'Included'],
    ['04', 'Main Transmission Pipelines', `${pipeSize} butt-fusion & electrofusion welded HDPE conduits`, 'Included'],
    ['05', 'Secondary Field Submains', 'Buried PVC / HDPE sub-distribution manifolds with air release valves', 'Included'],
    ['06', 'Field Distribution Units', `${irrigationMethod} equipment, spans, driplines, and fittings`, 'Included'],
    ['07', 'Engineering Services', 'Topographic surveying, hydraulic modeling, BOQ, civil construction', 'Grade-1 Certified'],
    ['08', 'Commissioning & Training', 'On-site trial testing, flow calibration, operator technical training', 'Standard Warranty']
  ]

  // Header row
  doc.setFillColor(235, 243, 250)
  doc.rect(margin, currentY, contentWidth, 5.5, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.8)
  doc.setTextColor(...navy)
  doc.text('Item', margin + 4, currentY + 3.8)
  doc.text('System Scope Component', margin + 15, currentY + 3.8)
  doc.text('Technical Specification & Manufacturer Standard', margin + 60, currentY + 3.8)
  doc.text('Status', pageWidth - margin - 4, currentY + 3.8, { align: 'right' })

  currentY += 5.5 // currentY = 158.5

  boqItems.forEach(([num, title, spec, stat], i) => {
    const rowY = currentY + i * 5.8
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252)
    doc.setDrawColor(...borderGray)
    doc.rect(margin, rowY, contentWidth, 5.8, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.5)
    doc.setTextColor(...slate)
    doc.text(num, margin + 4, rowY + 3.8)

    doc.setTextColor(...navy)
    doc.text(title, margin + 15, rowY + 3.8)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...darkGray)
    doc.text(doc.splitTextToSize(spec, 90)[0], margin + 60, rowY + 3.8)

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...emerald)
    doc.text(stat, pageWidth - margin - 4, rowY + 3.8, { align: 'right' })
  })

  currentY += boqItems.length * 5.8 + 5 // 158.5 + 46.4 + 5 = 209.9

  // ==========================================
  // --- SECTION 4: DISCLAIMER & NEXT STEPS ---
  // ==========================================
  doc.setFillColor(...lightBg)
  doc.setDrawColor(...cyan)
  doc.roundedRect(margin, currentY, contentWidth, 18, 1.5, 1.5, 'FD')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...navy)
  doc.text('Official Engineering Disclaimer & Next Steps for Full Implementation:', margin + 4, currentY + 4.8)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.2)
  doc.setTextColor(...darkGray)
  doc.text('1. This preliminary specification is calculated using standard crop evapotranspiration benchmarks for Ethiopia.', margin + 4, currentY + 9)
  doc.text('2. An Ethio-Rain engineering delegation will conduct on-site GPS surveying and aquifer pumping tests before final BOQ sign-off.', margin + 4, currentY + 13)
  doc.text('3. To schedule an on-site technical inspection or commercial tender discussion, contact our engineering office at info@ethiorain.com.', margin + 4, currentY + 17)

  currentY += 22 // 209.9 + 22 = 231.9

  // ==========================================
  // --- OFFICIAL QUALITY ASSURANCE BADGE ---
  // ==========================================
  doc.setFillColor(240, 249, 255)
  doc.setDrawColor(186, 230, 253)
  doc.roundedRect(margin, currentY, contentWidth, 9.5, 1.5, 1.5, 'FD')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...navy)
  doc.text('✓ CERTIFIED GRADE-1 WATER WORKS QUALITY ASSURANCE', margin + 4, currentY + 6)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.2)
  doc.setTextColor(...slate)
  doc.text('Registered with Ethiopian Ministry of Water and Energy | 15+ Years Commercial Experience | Nationwide Execution', margin + 74, currentY + 6)

  // ==========================================
  // --- FOOTER SECTION (Clear separation) ---
  // ==========================================
  const footerY = pageHeight - 12
  doc.setDrawColor(...borderGray)
  doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...navy)
  doc.text('ETHIO-RAIN IRRIGATION SYSTEMS P.L.C.', margin, footerY)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6)
  doc.setTextColor(...slate)
  doc.text('Headquarters: Bole Sub-City, Addis Ababa, Ethiopia | Tel: +251 901 86 44 66 / +251 910 61 57 57', margin, footerY + 3.8)
  doc.text('Email: info@ethiorain.com | Web: https://ethiorain.com | Grade-1 Water Works Contractor', margin, footerY + 7.2)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...cyan)
  doc.text(`Doc Ref: ${specRef} | Single Page Executive Briefing`, pageWidth - margin, footerY + 3.8, { align: 'right' })

  // Trigger browser download
  const safeName = farmName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
  doc.save(`EthioRain_SpecSheet_${safeName}_${hectares}ha.pdf`)
}
