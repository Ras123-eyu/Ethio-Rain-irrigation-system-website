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
      'Grade-1 Water Works certified execution',
      'Deep well drilling and high-head submersible pump equipping',
      'Industrial booster, transfer & firefighting pump stations',
      'Certified HDPE butt-fusion welding & hydrostatic pressure testing'
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
      'Official partnership with Valley Irrigation',
      'Uniform 360° and linear field water distribution',
      'Remote monitoring and speed/depth automation',
      'Proven durability on thousands of hectares across Ethiopia'
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
    gallery: [
      '/images/img_6804f054f925.webp'
    ]
  }
]
