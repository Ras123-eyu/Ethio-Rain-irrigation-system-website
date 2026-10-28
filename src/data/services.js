import {
  Zap,
  RotateCw,
  Droplets,
  Home,
  Waves,
  Layout,
  Truck,
  Sun,
  Wrench,
  ShieldCheck,
  Factory,
  Layers,
  Sliders,
  Compass,
  CloudRain
} from 'lucide-react'

export const services = [
  {
    id: 'water-supply',
    slug: 'water-supply-electromechanical',
    icon: Zap,
    title: 'Water Supply and Electromechanical Systems',
    shortDesc: 'Grade-1 contractor solutions: water distribution networks, deep-well drilling, booster pumps, firefighting systems, and electromechanical integration.',
    description: `As a certified Grade-1 Water Works Contractor, Ethio-Rain provides end-to-end solutions for municipal, commercial, and agricultural water infrastructure. We specialize in deep well drilling, supply and installation of high-capacity submersible pumps (partnering with Wilo), automated booster pumping stations, and certified firefighting systems (such as our projects for the Ministry of Justice and Addis Ababa Police Commission). We also execute certified high-density polyethylene (HDPE) butt-fusion welding and hydrostatic field pressure testing.`,
    img: '/images/img_3f8d10cd9593.webp',
    tag: 'Grade-1 Infrastructure',
    benefits: [
      'Grade-1 Water Works certified execution by registered engineers',
      'Deep well drilling and high-head submersible pump equipping',
      'Industrial booster, transfer & firefighting pump stations',
      'Certified HDPE butt-fusion welding & hydrostatic pressure testing'
    ],
    specs: [
      { label: 'Regulatory License', value: 'Grade-1 Water Works Contractor (Ministry of Water & Energy)' },
      { label: 'Well Pumping Depth', value: 'Submersible installations up to 450m dynamic head' },
      { label: 'Pumping Technology', value: 'Submersible, horizontal split-case, vertical multi-stage, fire pumps' },
      { label: 'Pipeline Materials', value: 'HDPE PE100 (PN10-PN25), Ductile Iron, Galvanized Riser' },
      { label: 'Hydrostatic Field Test', value: 'Factory & field pressure hold up to 25 bar (DIN/ISO verified)' },
      { label: 'Automation & Controls', value: 'Soft-starters, VFD frequency drives, dry-run protection logic' }
    ],
    applications: [
      'Municipal & university town water supply systems',
      'Commercial agro-processing & industrial factory water',
      'Certified commercial & institutional firefighting networks',
      'High-yield agricultural deep borehole pumping stations'
    ],
    partners: ['Wilo Pumps', 'Schneider Electric', 'Federal Water Development Bureau'],
    relatedProjects: [
      'gesuba-small-towns-water-supply-and-sanitation-project',
      'debrebrhan-university-water-supply-and-elector-mechanical-porject',
      'hilton-hotel-water-well-submersible-pump',
      'moj-p111-firefighting-pump-delivery-eec'
    ],
    gallery: [
      '/images/img_c48e21cdda98.webp',
      '/images/img_0ab41cbad70e.webp',
      '/images/img_a0bafc6c3687.webp'
    ]
  },
  {
    id: 'center-pivot',
    slug: 'center-pivot-sprinkler-systems',
    icon: RotateCw,
    title: 'Center Pivot and Mechanical-Move Systems',
    shortDesc: 'Precision mechanized center pivot and linear move systems for uniform large-scale commercial field coverage.',
    description: `In partnership with Valley Irrigation, the global leader in mechanized irrigation, Ethio-Rain provides state-of-the-art center pivot and linear/mechanical-move irrigation systems across Ethiopia. Our installations span massive projects like the 1,000-hectare Meki scheme (15 pivots) and the 8,000-hectare Gidabo development. We equip our machines with smart corner arms, low-drift sprinkler packages, computerized touchscreens, and remote telemetry for seamless operation.`,
    img: '/images/img_37cc9ecf2b11.webp',
    tag: 'Mechanized Mega-Scale',
    benefits: [
      'Official partnership with Valley Irrigation (USA / South Africa)',
      'Uniform 360° and linear field water distribution with 95%+ efficiency',
      'Remote monitoring and speed/depth automation via AgSense & Valley 365',
      'Proven durability on tens of thousands of hectares across Ethiopia'
    ],
    specs: [
      { label: 'Global Partner', value: 'Valley Irrigation (Valmont Industries)' },
      { label: 'Single Machine Coverage', value: '10 to 200+ Hectares per unit (Custom Span Geometry)' },
      { label: 'Pipeline Diameters', value: '6-5/8", 8-5/8", and 10" hot-dip galvanized pipe' },
      { label: 'Application Uniformity', value: '92% - 97% Christiansen Uniformity Coefficient (CU)' },
      { label: 'Control Systems', value: 'Valley ICON10 Touchscreen, ICON5, ICON1 & GPS AgSense' },
      { label: 'Terrain Adaptability', value: 'Up to 15% slope negotiation with heavy-duty drive towers' }
    ],
    applications: [
      'Commercial grain farms (wheat, maize, barley, sorghum)',
      'Large-scale commercial forage & alfalfa production',
      'Industrial sugarcane and cotton plantations',
      'Government mechanized food security & wheat initiative schemes'
    ],
    partners: ['Valley Irrigation', 'Valmont Industries', 'Nelson Irrigation', 'AgSense'],
    relatedProjects: [
      'meki-irrigation-projects-1000ha-15-pivots',
      'center-pivot-irrigation-system-design-installation',
      'eldima-center-pivot-installation',
      'center-pivot-irrigation-system-demonstration-project'
    ],
    gallery: [
      '/images/img_4f650875d590.webp',
      '/images/img_2c407b4a84aa.webp',
      '/images/img_7cf955102102.webp'
    ]
  },
  {
    id: 'drip-system',
    slug: 'drip-system',
    icon: Droplets,
    title: 'Drip Irrigation Systems',
    shortDesc: 'High-efficiency cylindrical, in-line, on-line, and flat drip tape systems delivering water and nutrients directly to the root zone.',
    description: `Drip irrigation delivers water and soluble nutrients directly to plant roots with up to 90%+ application efficiency. Ethio-Rain provides all four principal drip configurations specified for modern commercial farming: heavy-duty cylindrical drip lines, integrated in-line drip tubing, customizable on-line button drippers, and economical thin-walled flat drip tape. Our systems have powered agricultural projects for the Ethiopian Agricultural Transformation Agency (ATA), SEPROB Morocco, and regional agriculture offices.`,
    img: '/images/img_0fc0e6fb7f1b.webp',
    tag: 'High Efficiency',
    benefits: [
      'Cylindrical, in-line, on-line, and flat drip options',
      'Up to 90%+ water and nutrient delivery efficiency',
      'Drastically minimizes weed germination and evaporation losses',
      'Custom filtration batteries preventing emitter clogging'
    ],
    specs: [
      { label: 'Configurations', value: 'Cylindrical inline, flat tape, PC button drippers, micro-tubing' },
      { label: 'Wall Thickness', value: '0.15mm (6 mil tape) to 1.1mm (heavy-duty multi-season)' },
      { label: 'Flow Rates', value: '1.0 L/h, 1.6 L/h, 2.0 L/h, 4.0 L/h pressure-compensating' },
      { label: 'Filtration Standard', value: '120-150 mesh automatic disc batteries & sand media filters' },
      { label: 'Water Savings', value: '40% - 60% reduction relative to furrow irrigation' },
      { label: 'Fertigation Readiness', value: 'Venturi injectors, proportional dosing pumps, EC/pH monitoring' }
    ],
    applications: [
      'High-density fruit orchards (avocado, mango, citrus, papaya)',
      'Open-field row vegetables (tomatoes, onions, peppers, potatoes)',
      'Horticulture cut flowers and greenhouse bench crops',
      'Smallholder cluster schemes and outgrower farm networks'
    ],
    partners: ['Rain Bird', 'Rivulis', 'T-Tape', 'SEPROB Morocco'],
    relatedProjects: [
      'manisa-drip-irrigating-supply-and-installation',
      'drip-irrigation-system',
      'drip-system-installation',
      'drip-and-water-distribution-system'
    ],
    gallery: [
      '/images/img_92447edfd8ec.webp',
      '/images/img_916a743effa4.webp',
      '/images/img_650a354c7c41.webp'
    ]
  },
  {
    id: 'sprinkler-systems',
    slug: 'sprinkler-systems',
    icon: CloudRain,
    title: 'Sprinkler Systems (Fixed, Hand-Drag & Guns)',
    shortDesc: 'Fixed piping networks, hand-drag flexible sets, impact sprinklers, micro-sprinklers, and high-volume gun systems.',
    description: `Ethio-Rain designs and supplies complete pressurized sprinkler solutions tailored to varied agricultural crops, topography, and aesthetic landscapes. We provide permanent fixed-pipe networks, cost-effective semi-permanent hand-drag lines, brass and polymer impact sprinklers, low-pressure micro-sprinklers, and high-volume long-radius big guns. Our portfolio includes specialized installations such as the automated pop-up sprinkler landscape system for the Presidential Palace grounds in Addis Ababa.`,
    img: '/images/img_916a743effa4.webp',
    tag: 'Flexible Sprinklers',
    benefits: [
      'Fixed and portable hand-drag sprinkler systems',
      'Impact, micro-sprinkler, and long-range big gun options',
      'Rain Bird partner technology for maximum uniformity',
      'Ideal for pastures, row crops, orchards, and turf landscaping'
    ],
    specs: [
      { label: 'Sprinkler Types', value: 'Brass impact, engineering polymer rotary, pop-up turf, big guns' },
      { label: 'Operating Pressure', value: '1.5 to 6.5 bar operating spectrum' },
      { label: 'Throw Radius', value: '8m (micro-orchard) to 65m (high-volume big gun)' },
      { label: 'Piping Setup', value: 'Quick-coupling aluminum, portable PE hand-drag, buried PVC/HDPE' },
      { label: 'Precipitation Uniformity', value: 'Matched precipitation rate nozzles preventing ponding' },
      { label: 'Nozzle Materials', value: 'Wear-resistant brass and heavy-duty UV-stabilized POM' }
    ],
    applications: [
      'Commercial grain, vegetable & seed multiplication plots',
      'Dairy pasture irrigation & multi-cut fodder grasses',
      'Under-tree orchard micro-sprinkling and frost protection',
      'Institutional, palace & airport green landscaping'
    ],
    partners: ['Rain Bird', 'Nelson Irrigation', 'Komet Irrigation'],
    relatedProjects: [
      'pop-up-sprinkler-for-president-palace',
      'ethiopian-airlines-120ha-airside-landscaping-irrigation'
    ],
    gallery: [
      '/images/img_a92dad3e2e0b.webp',
      '/images/img_0287ccd8d8f0.webp'
    ]
  },
  {
    id: 'green-house',
    slug: 'green-house-solutions',
    icon: Home,
    title: 'Complete Greenhouse Solutions',
    shortDesc: 'Turnkey commercial greenhouse supply, structural installation, micro-misting, drip benches, and micro-climate control.',
    description: `Protect your high-value horticultural yields against adverse weather and pest pressures with Ethio-Rain’s turnkey greenhouse solutions. We deliver complete structural fabrication, UV-stabilized polythene cladding, shade screening, automated roof and side ventilation, overhead fogging/misting systems, and micro-drip fertigation benches. We have successfully completed turnkey greenhouse installations for clients including SEPROB Morocco Ethiopia.`,
    img: '/images/img_5786a204517f.webp',
    tag: 'Controlled Agriculture',
    benefits: [
      'Turnkey structural supply, cladding, and mechanical erection',
      'Integrated micro-climate and humidity misting controls',
      'Automated fertigation dosing and sub-surface drip benches',
      'Optimized for year-round flower, seedling, and vegetable production'
    ],
    specs: [
      { label: 'Structure Architecture', value: 'Galvanized tubular steel Gothic & Multi-Span arches' },
      { label: 'Cladding Technology', value: '200-micron multi-layer UV stabilized, anti-drip, diffuse film' },
      { label: 'Climate Automation', value: 'Motorized roof/side roll-up curtains & 50-mesh insect netting' },
      { label: 'Misting System', value: 'High-pressure 70-bar overhead fogging for temperature moderation' },
      { label: 'Substrate Benches', value: 'Elevated coco-peat trough benches with leachate recycling' },
      { label: 'Turnkey Services', value: 'Civil foundations, steel erection, irrigation plumbing & commissioning' }
    ],
    applications: [
      'Export flower and rose farm propagation tunnels',
      'High-value vegetable production (sweet peppers, cherry tomatoes, cucumbers)',
      'Seedling multiplication and nursery seedling propagation',
      'Agricultural research & biotech propagation stations'
    ],
    partners: ['SEPROB Morocco', 'Plastro', 'Ginegar Plastic Products'],
    relatedProjects: [
      'green-house-water-supply-and-irrigation-project',
      'green-house-system-supply-and-installation'
    ],
    gallery: [
      '/images/img_72199b96cf1f.webp',
      '/images/img_57f79a92752d.webp',
      '/images/img_b38a57dba324.webp'
    ]
  },
  {
    id: 'hose-reel',
    slug: 'hose-reel-irrigation-system',
    icon: Waves,
    title: 'Travelling / Hose-Reel Guns and Booms',
    shortDesc: 'Mobile turbine-driven hose-reel irrigators, high-volume travelling rain guns, and low-pressure spray booms.',
    description: `For farms with irregular parcel layouts, rotational grazing paddocks, or dispersed fields, our travelling hose-reel irrigation systems offer unmatched mobility and high-capacity coverage. Powered by energy-efficient water turbines, these automated machines wind the heavy-duty PE hose smoothly while discharging water through a long-radius rain gun or a low-pressure spray boom, providing gentle, deep soil infiltration without runoff.`,
    img: '/images/img_d83b1dcd0592.webp',
    tag: 'Mobile Irrigation',
    benefits: [
      'Flexible deployment across irregular or non-contiguous plots',
      'Water turbine-driven retraction with automatic shut-off',
      'High-volume rain guns and gentle low-pressure spray booms',
      'Sturdy galvanized chassis built for rough farm terrain'
    ],
    specs: [
      { label: 'Drive Mechanism', value: 'Integrated water-turbine drive with multi-speed gearbox' },
      { label: 'Hose Specifications', value: 'Continuous PE80/PE100 polyethylene (Ø 63mm to 110mm)' },
      { label: 'Pull Run Length', value: '200m to 450m single continuous pass' },
      { label: 'Discharge Units', value: 'Long-radius rain gun trolley or 32m folding low-pressure boom' },
      { label: 'Inlet Pressure Range', value: '4.5 to 9.0 bar required at hydrants' },
      { label: 'Auto-Stop Logic', value: 'Mechanical and pressure-sensing end-of-run safety shutdown' }
    ],
    applications: [
      'Farms with irregular borders unsuitable for pivot circles',
      'Rotational pasture, sports fields, and turf farms',
      'Supplemental watering for cereal and pulse crops',
      'Rented or leased farmland requiring mobile, non-fixed equipment'
    ],
    partners: ['Ocmis', 'Marani', 'Valley Irrigators'],
    relatedProjects: [
      'nettle-irrigation-project-1000ha',
      'center-pivot-irrigation-system-demonstration-project'
    ],
    gallery: [
      '/images/img_0446b8c26b6f.webp',
      '/images/img_bad155cdb47f.webp',
      '/images/img_3317e851464f.webp'
    ]
  },
  {
    id: 'design-consultancy',
    slug: 'design-consultancy-installation',
    icon: Compass,
    title: 'Surveying, Feasibility Studies, Design & BOQ',
    shortDesc: 'Topographic land surveying, hydrological feasibility studies, detailed engineering design, and BOQ/specification preparation.',
    description: `Rigorous engineering and agronomic analysis form the foundation of every viable water project. Ethio-Rain provides comprehensive technical consulting: drone and GPS topographic surveying, river and groundwater hydrological studies, detailed hydraulic modeling, and preparation of rigorous Bills of Quantities (BOQs) and tender specifications. Our track record includes master designs such as the 8,000-hectare Gidabo Center Pivot scheme and airport turf landscaping for Ethiopian Airlines.`,
    img: '/images/img_b13e188930cc.webp',
    tag: 'Technical Consultancy',
    benefits: [
      'High-precision GPS and topographic drone surveying',
      'Hydrological catchment and aquifer feasibility analysis',
      'Full CAD & GIS hydraulic network design',
      'Value-engineered BOQs and tender specification preparation'
    ],
    specs: [
      { label: 'Surveying Instruments', value: 'Dual-frequency RTK GPS units & photogrammetric mapping drones' },
      { label: 'Hydraulic Modeling', value: 'WaterCAD, EPANET, and dynamic surge simulation software' },
      { label: 'Agronomic Modeling', value: 'CROPWAT water budget, soil infiltration, crop ET0 calculation' },
      { label: 'Deliverable Package', value: 'Full CAD drawings, tender specifications, itemized BOQ, O&M manual' },
      { label: 'Compliance Level', value: 'Ministry of Water & Energy Grade-1 standards & FIDIC guidelines' },
      { label: 'Project Scale', value: 'From 10 ha outgrowers to 10,000+ ha commercial river basins' }
    ],
    applications: [
      'Commercial agro-investor master plan feasibility',
      'Government and regional water bureau public tender design',
      'River basin diversion and headworks engineering',
      'Pump station elevation and hydraulic surge mitigation'
    ],
    partners: ['Engineering Corporation of Oromia', 'MoWE', 'Ethiopian Airlines Group'],
    relatedProjects: [
      'design-and-consultancy-of-kmd-agricultural-development',
      'irrigation-sytem-based-center-pivot-system-design-biran-abuhay-agricultural-development'
    ],
    gallery: [
      '/images/img_ccc0369d5c2d.webp',
      '/images/img_c8adaa3c4c93.webp'
    ]
  },
  {
    id: 'commissioning-training',
    slug: 'installation-commissioning-training',
    icon: ShieldCheck,
    title: 'Installation, Commissioning, Supervision & Training',
    shortDesc: 'Certified field installation, hydraulic commissioning, technical site supervision, and comprehensive operator training.',
    description: `Having the right equipment is only half the battle; flawless execution requires professional installation and thorough operational transfer. Ethio-Rain’s 18 permanent and contract engineers provide on-site supervision, mechanical assembly, electrical wiring, hydrostatic testing, and system commissioning. We conduct structured training programs for farm managers and pump operators to guarantee optimal system longevity and peak water efficiency.`,
    img: '/images/img_e20afcb69bfe.webp',
    tag: 'Quality Assurance',
    benefits: [
      'Experienced team of 18 permanent & contract engineering professionals',
      'Certified mechanical assembly and electrical synchronization',
      'Hydrostatic field pressure testing and performance commissioning',
      'Comprehensive on-site operator training and handover documentation'
    ],
    specs: [
      { label: 'Field Engineering Team', value: '18 Grade-1 licensed permanent & contract water engineers' },
      { label: 'Assembly Standards', value: 'AWS structural weld standards & mechanical torque compliance' },
      { label: 'Electrical Protocols', value: 'Megger insulation testing, phase sequence & earthing certification' },
      { label: 'Pressure Validation', value: '24-hour hydrostatic pressure hold test prior to commissioning' },
      { label: 'Operator Curriculum', value: 'Control panel programming, nozzle flushing, gearbox maintenance' },
      { label: 'Workmanship Warranty', value: '12-month full engineering warranty on all turnkey installations' }
    ],
    applications: [
      'Turnkey multi-span center pivot field assembly and erection',
      'Industrial borehole pumping station commissioning',
      'HDPE fusion pipeline network quality certification',
      'Institutional farm operator handover training'
    ],
    partners: ['Valley Irrigation', 'Ethiopian Engineering Corporation', 'Ministry of Water'],
    relatedProjects: [
      'meki-irrigation-projects-1000ha-15-pivots',
      'eldima-center-pivot-installation',
      'gesuba-small-towns-water-supply-and-sanitation-project'
    ],
    gallery: [
      '/images/img_a02a71599b3f.webp',
      '/images/img_0ab41cbad70e.webp'
    ]
  },
  {
    id: 'maintenance-aftersales',
    slug: 'maintenance-after-sales-services',
    icon: Wrench,
    title: 'Maintenance and After-Sales Services',
    shortDesc: 'Rapid preventative maintenance, emergency pump rehabilitation, system descaling, and genuine spare parts availability.',
    description: `We stand behind every project we deliver with dedicated after-sales support and scheduled preventative maintenance services. Our rapid-response field technicians handle borehole pump overhauls, center pivot drive gear servicing, filtration media cleaning, control panel troubleshooting, and nozzle recalibration. We maintain an inventory of genuine spare parts to minimize farm downtime during peak cropping seasons.`,
    img: '/images/img_8859d45d7cbb.webp',
    tag: 'After-Sales Care',
    benefits: [
      'Scheduled preventative maintenance contracts',
      'Rapid field response for emergency pump and electrical repairs',
      'Guaranteed genuine spare parts from global partner manufacturers',
      'System recalibration ensuring peak water and power efficiency'
    ],
    specs: [
      { label: 'Response Guarantee', value: 'Priority rapid mobilization across Oromia, Amhara, Afar & Southern Ethiopia' },
      { label: 'Warehouse Stock', value: 'Valley gearboxes, center drives, Rain Bird nozzles, Wilo impellers' },
      { label: 'Diagnostic Equipment', value: 'Ultrasonic flow meters, borehole inspection cameras, vibration analyzers' },
      { label: 'Service Cycles', value: 'Seasonal pre-planting inspections and annual comprehensive overhaul' },
      { label: 'Rehabilitation Scope', value: 'Submersible pump rewinding, motor refurbishment, pipe descaling' },
      { label: 'Parts Guarantee', value: '100% genuine OEM factory parts with traceability' }
    ],
    applications: [
      'Commercial farms in continuous cropping cycles',
      'Government and university water distribution networks',
      'Preventative center pivot maintenance before rainy & dry seasons',
      'Emergency borehole pump recovery and re-installation'
    ],
    partners: ['Valley Irrigation', 'Wilo', 'Rain Bird'],
    relatedProjects: [
      'debrebrhan-university-water-supply-and-elector-mechanical-porject',
      'supply-and-installation-of-generators-and-pumps',
      'ecwc-submersible-pump-supply-and-fix'
    ],
    gallery: [
      '/images/img_a0bafc6c3687.webp'
    ]
  },
  {
    id: 'control-systems',
    slug: 'irrigation-control-systems',
    icon: Sliders,
    title: 'Irrigation Control Systems & Automation',
    shortDesc: 'Automated smart control panels, soil moisture sensors, telemetry, and Variable Rate Irrigation (VRI) automation.',
    description: `Transform irrigation management into an automated, data-driven operation. Ethio-Rain provides cutting-edge irrigation control panels (such as Valley ICON10, ICON5, and ICON1) integrated with wireless AgSense cloud telemetry. Monitor borehole levels, manage pump sequencing, execute Variable Rate Irrigation (VRI) across changing soil zones, and receive real-time fault alerts directly on your smartphone.`,
    img: '/images/img_af2c22196d77.webp',
    tag: 'Smart Automation',
    benefits: [
      'Touchscreen and remote smartphone control via AgSense/Valley 365',
      'Variable Rate Irrigation (VRI) tailored to soil and crop needs',
      'Automated pump start/stop and line pressure monitoring',
      'Immediate alert notifications for pressure drops or power interruptions'
    ],
    specs: [
      { label: 'Control Panels', value: 'Valley ICON10 (10" Touchscreen), ICON5, ICON1, AutoPilot Linear' },
      { label: 'Telemetry & Cloud', value: 'AgSense 4G/LTE cellular telemetry with Valley 365 dashboard' },
      { label: 'Precision Tech', value: 'Sector-by-sector & speed-controlled Variable Rate Irrigation (VRI)' },
      { label: 'Sensor Integration', value: 'Capacitance soil moisture probes, pressure sensors, rain gauges' },
      { label: 'Electrical Safeguards', value: 'Phase failure, low-voltage, over-torque & water pressure cutoffs' },
      { label: 'Remote Access', value: 'iOS, Android and web dashboard with automated SMS/email alarms' }
    ],
    applications: [
      'Commercial farms managing multiple pivots across large distances',
      'Precision agriculture with soil variability requiring variable depth',
      'Borehole networks requiring synchronized automated pump starts',
      'High-security operations needing real-time tamper & power alerts'
    ],
    partners: ['Valley Irrigation', 'AgSense', 'Schneider Electric'],
    relatedProjects: [
      'meki-irrigation-projects-1000ha-15-pivots',
      'center-pivot-irrigation-system-design-installation'
    ],
    gallery: [
      '/images/img_8859d45d7cbb.webp'
    ]
  },
  {
    id: 'machinery-manufacturing',
    slug: 'special-purpose-machinery-manufacturing',
    icon: Factory,
    title: 'Manufacturing of Special Purpose Machinery',
    shortDesc: 'Licensed manufacturing of custom agricultural machinery, specialized mounting chassis, and hydraulic manifold assemblies.',
    description: `As a licensed manufacturer of special purpose machinery in Ethiopia, Ethio-Rain designs and fabricates custom equipment adapted to local agricultural environments. Our workshop capabilities include manufacturing robust pump skid frames, specialized mobile irrigation carts, high-pressure distribution manifolds, customized filtration battery skids, and agricultural implements built to withstand demanding field operations.`,
    img: '/images/img_a02a71599b3f.webp',
    tag: 'Local Manufacturing',
    benefits: [
      'Official license for manufacturing special purpose machinery',
      'Custom pump skid frames and manifold headers built to spec',
      'High-grade structural steel welding and corrosion protection',
      'Faster turnaround time and localized engineering support'
    ],
    specs: [
      { label: 'Manufacturing License', value: 'Special Purpose Machinery Manufacturing (Grade-1 Water Works)' },
      { label: 'Workshop Operations', value: 'CNC plasma cutting, precision MIG/TIG welding, plate rolling' },
      { label: 'Manufactured Units', value: 'Booster skids, manifold distribution headers, suction strainers' },
      { label: 'Coating Protection', value: 'Sandblasting to Sa 2.5, heavy-duty epoxy and hot-dip galvanizing' },
      { label: 'Pressure Validation', value: '100% hydrostatic testing on all fabricated manifolds prior to delivery' },
      { label: 'Localization Impact', value: 'Dramatically reduces foreign currency expenditure and import wait times' }
    ],
    applications: [
      'Custom pump house suction and discharge header manifolds',
      'Heavy-duty diesel booster pumping station transport skids',
      'Mobile towable sprinkler and hose reel mounting frames',
      'Filtration battery skid assemblies for automated drip schemes'
    ],
    partners: ['Ethio-Rain Heavy Engineering Workshop', 'MoWE'],
    relatedProjects: [
      'rama-construction-hdpe-pipe-welding',
      'construction-of-water-well-and-pipe-supported-irrigation'
    ],
    gallery: [
      '/images/img_e20afcb69bfe.webp'
    ]
  },
  {
    id: 'solar-power',
    slug: 'solar-power-system-installation',
    icon: Sun,
    title: 'Solar Power System Supply and Installation',
    shortDesc: 'Clean renewable solar pumping solutions and whole-farm photovoltaic arrays for reliable off-grid irrigation.',
    description: `Eliminate dependence on erratic grid power and expensive diesel fuel. Ethio-Rain designs and installs complete solar pumping systems: high-yield monocrystalline PV panels, heavy-duty solar mounting structures, smart MPPT solar pump inverters, and DC/AC submersible pumping units. Our solar systems ensure free, dependable daytime irrigation across remote agricultural lands throughout Ethiopia.`,
    img: '/images/img_efbdb6f76d5d.webp',
    tag: 'Renewable Solar',
    benefits: [
      'Zero fuel expense and complete off-grid energy independence',
      'High-efficiency MPPT controllers maximizing morning and evening flow',
      'Rugged, dust- and heat-resistant photovoltaic arrays',
      'Low maintenance with automated dry-run protection'
    ],
    specs: [
      { label: 'Photovoltaic Modules', value: 'Tier-1 Monocrystalline silicon panels (540W to 670W per module)' },
      { label: 'Solar Controller', value: 'Smart MPPT Inverter with 98.5% peak energy tracking efficiency' },
      { label: 'Pumping Range', value: 'Submersible and surface pumps from 2.2 kW to 75 kW solar array size' },
      { label: 'Mounting Structure', value: 'Hot-dip galvanized steel ground-mount with anti-theft fasteners' },
      { label: 'Hybrid Capability', value: 'Seamless automatic switching between solar, grid, and backup generator' },
      { label: 'Safety Systems', value: 'Surge arrestors, lightning protection, well water level sensors' }
    ],
    applications: [
      'Remote off-grid commercial farms with no regional electrical grid',
      'High fuel-cost diesel pump replacement for huge operational savings',
      'Community pastoralist solar drinking water supply points',
      'Drip and micro-sprinkler daytime fertigation systems'
    ],
    partners: ['Tier-1 Solar PV Manufacturers', 'Wilo Solar Solutions', 'Schneider Electric'],
    relatedProjects: [
      'electric-motor-driven-submersible-pump-riser-pipe-power-cables',
      'construction-of-water-well-and-pipe-supported-irrigation'
    ],
    gallery: [
      '/images/img_3c36a87e5c1a.webp',
      '/images/img_a2da2040ed61.webp'
    ]
  },
  {
    id: 'farm-equipment',
    slug: 'farm-equipment-machinery',
    icon: Truck,
    title: 'Supply of Farm Equipment and Machinery',
    shortDesc: 'Direct procurement and supply of specialized agricultural implements, tractors, planters, and harvesting machinery.',
    description: `Beyond irrigation infrastructure, Ethio-Rain supplies high-quality agricultural machinery and farm implements to accelerate modernization in Ethiopia. We supply precision row-crop planters, seed drills, multi-furrow disc ploughs, power tillers, and specialized farm transport equipment, helping commercial growers and agricultural enterprises scale production efficiently.`,
    img: '/images/img_93a0ffb7d5da.webp',
    tag: 'Farm Mechanization',
    benefits: [
      'Access to international standard agricultural machinery brands',
      'Precision row-crop planters, seeders, and tillage implements',
      'Spare parts availability and operator maintenance guidance',
      'Enhances land preparation efficiency and planting speed'
    ],
    specs: [
      { label: 'Equipment Categories', value: 'Tractors, seed drills, pneumatic row planters, heavy disc ploughs' },
      { label: 'Power Ranges', value: 'Matching 45 HP to 180+ HP 4WD commercial farm tractors' },
      { label: 'Tillage Tools', value: 'Reversible disc ploughs, subsoilers, rotary tillers, disc harrows' },
      { label: 'Seeding Uniformity', value: 'Pneumatic seed singulation for maize, soybeans, wheat, and sorghum' },
      { label: 'Parts & Field Service', value: 'Fast-moving wearing parts, bearings, hydraulic seals in local stock' },
      { label: 'Technical Handover', value: 'Field hitching, PTO alignment, and tractor operator safety training' }
    ],
    applications: [
      'Commercial grain production (wheat, maize, teff, barley)',
      'Large-scale soil preparation and hardpan subsoiling',
      'Precision row-crop fertilizer and seed placement',
      'Integrated mechanized farm fleet development'
    ],
    partners: ['International Agricultural OEM Equipment Partners'],
    relatedProjects: [
      'nettle-irrigation-project-1000ha',
      'center-pivot-irrigation-system-demonstration-project'
    ],
    gallery: [
      '/images/img_a92dad3e2e0b.webp'
    ]
  },
  {
    id: 'pipe-fitting-supply',
    slug: 'pipe-and-fitting-supply',
    icon: Layers,
    title: 'Pipe and Fitting Supply (HDPE, PVC & Steel)',
    shortDesc: 'Certified supply of HDPE butt-fusion pipes, uPVC pressure pipes, compression fittings, and heavy-gauge riser columns.',
    description: `A reliable water distribution system depends on top-grade piping. Ethio-Rain stocks and supplies certified high-density polyethylene (HDPE PE100) pipes in diameters up to 630mm, uPVC pressure pipes, stainless steel and galvanized deep well riser columns, electro-fusion fittings, and compression couplers. We also offer on-site butt-fusion welding and hydrostatic pressure testing for large infrastructure schemes.`,
    img: '/images/img_a02a71599b3f.webp',
    tag: 'Piping & Fittings',
    benefits: [
      'Full inventory of HDPE (PE100), uPVC, and galvanized riser pipes',
      'ISO / DIN standard compression and electro-fusion fittings',
      'Certified butt-fusion welding and hydrostatic pressure testing services',
      'High resistance to corrosion, UV exposure, and water hammer'
    ],
    specs: [
      { label: 'HDPE Specifications', value: 'PE100 virgin grade resins (OD 20mm to 630mm, PN6 to PN25)' },
      { label: 'uPVC Specifications', value: 'Solvent-weld & rubber ring pressure pipe (OD 32mm to 400mm)' },
      { label: 'Fitting Range', value: 'Electrofusion couplers, butt-fusion elbows/tees, compression fittings' },
      { label: 'Riser Columns', value: 'Flanged and threaded heavy-gauge galvanized steel and 304/316 SS' },
      { label: 'On-site Services', value: 'Certified butt-fusion hydraulic welding & data-logged pressure tests' },
      { label: 'Compliance Standards', value: 'ISO 4427, EN 12201, DIN 8074/8075 certified drinking water safe' }
    ],
    applications: [
      'Long-distance pressurized water transmission trunk lines',
      'Center pivot and drip mainline supply infrastructure',
      'Municipal water distribution and borehole riser installations',
      'Mining and industrial effluent and slurry transport pipelines'
    ],
    partners: ['ISO Certified Pipe Extruders', 'George Fischer', 'Plassim'],
    relatedProjects: [
      'rama-construction-hdpe-pipe-welding',
      'rama-construction-hdpe-welding-hydrostatic-pressure-test',
      'gesuba-small-towns-water-supply-and-sanitation-project'
    ],
    gallery: [
      '/images/img_6804f054f925.webp'
    ]
  }
]
