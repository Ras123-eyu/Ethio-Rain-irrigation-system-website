import { jsPDF } from 'jspdf'

/**
 * Generates and downloads a corporate-branded Preliminary Project Specification Sheet PDF
 * for Ethio-Rain Irrigation Systems P.L.C.
 */
export function generateProjectSpecPDF(params) {
  const {
    farmName = 'Commercial Agricultural Project',
    hectares = 50,
    cropType = 'Wheat / Grains',
    irrigationMethod = 'Center Pivot',
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
  const margin = 16
  const contentWidth = pageWidth - margin * 2

  // Generate Reference ID & Date
  const specRef = `ER-SPEC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Colors
  const navy = [10, 25, 47] // #0A192F
  const cyan = [0, 180, 216] // #00B4D8
  const emerald = [16, 185, 129] // #10B981
  const darkGray = [30, 41, 59] // #1E293B
  const lightBg = [248, 250, 252] // #F8FAFC
  const borderGray = [226, 232, 240] // #E2E8F0
  const slate = [100, 116, 139] // #64748B

  // --- HEADER SECTION ---
  doc.setFillColor(...navy)
  doc.rect(0, 0, pageWidth, 42, 'F')

  // Cyan accent line
  doc.setFillColor(...cyan)
  doc.rect(0, 40, pageWidth, 2, 'F')

  // Company Brand Name
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text('ETHIO-RAIN', margin, 17)

  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 212, 255)
  doc.text('IRRIGATION SYSTEMS P.L.C.', margin, 23)

  doc.setFontSize(7.5)
  doc.setTextColor(200, 210, 225)
  doc.text('Grade-1 Water Works Contractor | Special Purpose Machinery Manufacturer', margin, 29)
  doc.text('Partner of Valley Irrigation, Rain Bird & Wilo Pumps', margin, 34)

  // Document Title & Spec ID on Right
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text('PROJECT SPECIFICATION SHEET', pageWidth - margin, 16, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(0, 212, 255)
  doc.text(`Ref: ${specRef}`, pageWidth - margin, 22, { align: 'right' })
  doc.setTextColor(200, 210, 225)
  doc.text(`Date: ${dateStr}`, pageWidth - margin, 28, { align: 'right' })
  doc.text('Status: Preliminary Engineering Estimate', pageWidth - margin, 34, { align: 'right' })

  let currentY = 50

  // --- CLIENT / PROJECT OVERVIEW CARD ---
  doc.setFillColor(...lightBg)
  doc.setDrawColor(...borderGray)
  doc.roundedRect(margin, currentY, contentWidth, 24, 2, 2, 'FD')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8.5)
  doc.setTextColor(...navy)
  doc.text('Client / Farm Project:', margin + 6, currentY + 7)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(String(farmName), margin + 45, currentY + 7)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Evaluated Farm Area:', margin + 6, currentY + 14)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(`${hectares} Hectares (${Math.round(hectares * 2.471)} Acres / ~${Math.round(hectares * 4)} Timad)`, margin + 45, currentY + 14)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Target Crop Cultivar:', margin + 6, currentY + 20)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(String(cropType), margin + 45, currentY + 20)

  // Right-side badge
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Water Source:', margin + 105, currentY + 7)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(String(waterSource), margin + 130, currentY + 7)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text('Power Setup:', margin + 105, currentY + 14)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...darkGray)
  doc.text(String(powerSource), margin + 130, currentY + 14)

  currentY += 32

  // --- SECTION 1: SYSTEM ARCHITECTURE & RECOMMENDATION ---
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 7, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('1. RECOMMENDED IRRIGATION SYSTEM ARCHITECTURE', margin + 4, currentY + 4.8)

  currentY += 10

  const techRows = [
    ['Recommended Technology', String(irrigationMethod), 'Engineered for high application uniformity and rugged field reliability.'],
    ['Primary Water Intake', String(waterSource), 'Includes intake civil works, wet well/borehole casing, and gravel pack.'],
    ['Power & Pumping Plant', String(powerSource), 'Submersible or booster pumping skid with automated motor control center.'],
    ['Distribution Network', `${pipeSize} Butt-Fusion HDPE`, 'High-density polyethylene pressure pipe rated for PN10/PN16.'],
    ['Field Emission Units', irrigationMethod.includes('Pivot') ? 'Valley Low-Pressure Spray Nozzles' : 'Pressure-Compensating Emitters / Sprinklers', 'Ensures 92%+ distribution uniformity across all parcels.']
  ]

  techRows.forEach(([title, val, desc], i) => {
    const rowY = currentY + i * 8.5
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252)
    doc.setDrawColor(...borderGray)
    doc.rect(margin, rowY, contentWidth, 8, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7.5)
    doc.setTextColor(...navy)
    doc.text(title, margin + 4, rowY + 5)

    doc.setTextColor(...cyan)
    doc.text(val, margin + 55, rowY + 5)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...slate)
    doc.text(desc, margin + 105, rowY + 5)
  })

  currentY += techRows.length * 8.5 + 8

  // --- SECTION 2: ESTIMATED PERFORMANCE & SAVINGS ---
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 7, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('2. PROJECTED ENGINEERING & ECONOMIC ADVANTAGES', margin + 4, currentY + 4.8)

  currentY += 10

  // 4 metric cards
  const metrics = [
    { label: 'Projected Water Saved', val: `${waterSavedM3.toLocaleString()} m³/yr`, sub: 'vs traditional flooding' },
    { label: 'Projected Yield Boost', val: `+${yieldBoostPercent}%`, sub: 'due to rootzone delivery' },
    { label: 'Diesel / Energy Saved', val: `${dieselSavedLiters.toLocaleString()} L/yr`, sub: 'via optimized pump sizing' },
    { label: 'Estimated Flow Demand', val: `${flowRateM3h} m³/hr`, sub: 'operational peak demand' }
  ]

  const cardWidth = (contentWidth - 9) / 4
  metrics.forEach((m, idx) => {
    const cardX = margin + idx * (cardWidth + 3)
    doc.setFillColor(...lightBg)
    doc.setDrawColor(...borderGray)
    doc.roundedRect(cardX, currentY, cardWidth, 22, 2, 2, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...cyan)
    doc.text(m.val, cardX + cardWidth / 2, currentY + 8, { align: 'center' })

    doc.setFontSize(7)
    doc.setTextColor(...navy)
    doc.text(m.label, cardX + cardWidth / 2, currentY + 14, { align: 'center' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6)
    doc.setTextColor(...slate)
    doc.text(m.sub, cardX + cardWidth / 2, currentY + 18, { align: 'center' })
  })

  currentY += 30

  // --- SECTION 3: PRELIMINARY BILL OF QUANTITIES (BOQ) CHECKLIST ---
  doc.setFillColor(...navy)
  doc.roundedRect(margin, currentY, contentWidth, 7, 1, 1, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('3. PRELIMINARY BILL OF QUANTITIES (BOQ) COMPONENT CHECKLIST', margin + 4, currentY + 4.8)

  currentY += 10

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
  doc.rect(margin, currentY, contentWidth, 6, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...navy)
  doc.text('Item', margin + 4, currentY + 4.2)
  doc.text('System Scope Component', margin + 18, currentY + 4.2)
  doc.text('Technical Specification & Manufacturer Standard', margin + 65, currentY + 4.2)
  doc.text('Status', pageWidth - margin - 4, currentY + 4.2, { align: 'right' })

  currentY += 6

  boqItems.forEach(([num, title, spec, stat], i) => {
    const rowY = currentY + i * 6.5
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252)
    doc.setDrawColor(...borderGray)
    doc.rect(margin, rowY, contentWidth, 6.5, 'FD')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.8)
    doc.setTextColor(...slate)
    doc.text(num, margin + 4, rowY + 4.2)

    doc.setTextColor(...navy)
    doc.text(title, margin + 18, rowY + 4.2)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...darkGray)
    doc.text(spec, margin + 65, rowY + 4.2)

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...emerald)
    doc.text(stat, pageWidth - margin - 4, rowY + 4.2, { align: 'right' })
  })

  currentY += boqItems.length * 6.5 + 8

  // --- SECTION 4: ETHIO-RAIN ASSURANCE & NEXT STEPS ---
  doc.setFillColor(...lightBg)
  doc.setDrawColor(...cyan)
  doc.roundedRect(margin, currentY, contentWidth, 23, 2, 2, 'FD')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...navy)
  doc.text('Official Disclaimer & Next Steps for Full Implementation:', margin + 4, currentY + 6)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.8)
  doc.setTextColor(...darkGray)
  doc.text('1. This preliminary specification is generated based on standard crop evapotranspiration and hydraulic formulas for Ethiopia.', margin + 4, currentY + 11)
  doc.text('2. A certified Ethio-Rain engineering team will conduct on-site GPS topographic surveying and water test pumping before final BOQ.', margin + 4, currentY + 16)
  doc.text('3. To schedule a full site survey or request a formal commercial bid, contact Ethio-Rain engineering department at info@ethiorain.com.', margin + 4, currentY + 21)

  // --- FOOTER SECTION ---
  const footerY = pageHeight - 16
  doc.setDrawColor(...borderGray)
  doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...navy)
  doc.text('ETHIO-RAIN IRRIGATION SYSTEMS P.L.C.', margin, footerY)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.setTextColor(...slate)
  doc.text('Headquarters: Bole Sub-City, Addis Ababa, Ethiopia | Tel: +251 901 86 44 66 / +251 910 61 57 57', margin, footerY + 4)
  doc.text('Email: info@ethiorain.com | Web: https://ethiorain.com | Grade-1 Water Works Contractor', margin, footerY + 8)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...cyan)
  doc.text(`Doc Ref: ${specRef} | Page 1 of 1`, pageWidth - margin, footerY + 4, { align: 'right' })

  // Trigger browser download
  const safeName = farmName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
  doc.save(`EthioRain_SpecSheet_${safeName}_${hectares}ha.pdf`)
}
