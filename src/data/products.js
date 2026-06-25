import {
  Droplets,
  RotateCw,
  Waves,
  Sun,
  Zap,
  Gauge,
  Filter,
  Pipette,
  Shrub,
  Sprout,
  Monitor,
  Settings,
} from 'lucide-react'

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'drip', label: 'Drip Systems' },
  { id: 'sprinkler', label: 'Sprinklers' },
  { id: 'pivot', label: 'Center Pivots' },
  { id: 'control', label: 'Control Panels' },
  { id: 'pumps', label: 'Pumps & Motors' },
  { id: 'filtration', label: 'Filtration' },
  { id: 'solar', label: 'Solar' },
  { id: 'accessories', label: 'Accessories' },
]

export const products = [
  {
    id: 'drip-tape-16mm',
    name: 'Premium Drip Tape 16mm',
    category: 'drip',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80',
    badge: 'Best Seller',
    shortDesc: 'Heavy-duty 16mm drip tape with uniform emitter spacing for row crops and vegetables.',
    specs: ['Wall thickness: 0.20mm', 'Emitter spacing: 20cm', 'Flow rate: 1.0 L/h', 'Max pressure: 1.0 bar'],

  },
  {
    id: 'inline-dripper',
    name: 'Inline PC Dripper',
    category: 'drip',
    icon: Pipette,

    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    badge: 'New',
    shortDesc: 'Pressure-compensating inline dripper for orchards and sloped terrain with anti-clog technology.',
    specs: ['Flow rate: 2.0 / 4.0 / 8.0 L/h', 'PC range: 0.5–4.0 bar', 'Anti-siphon design', 'UV stabilized'],

  },
  {
    id: 'impact-sprinkler',
    name: 'Impact Sprinkler SR-75',
    category: 'sprinkler',
    icon: Waves,

    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80',
    badge: 'Popular',
    shortDesc: 'Full-circle brass impact sprinkler with adjustable radius for medium to large field coverage.',
    specs: ['Radius: 12–18m', 'Flow: 1.2–3.6 m³/h', 'Connection: 3/4" BSP', 'Full/Part circle'],

  },
  {
    id: 'pop-up-sprinkler',
    name: 'Pop-Up Spray Head 4"',
    category: 'sprinkler',
    icon: Sprout,

    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&q=80',
    badge: null,
    shortDesc: 'Retractable pop-up spray ideal for greenhouse beds, nurseries, and small-scale gardens.',
    specs: ['Pop-up height: 10cm', 'Radius: 2.5–5m', 'Adjustable arc: 0–360°', 'Built-in filter'],

  },
  {
    id: '8000-center-pivot',
    name: '8000 Series Center Pivot System',
    category: 'pivot',
    icon: RotateCw,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider87/product-pages/product-page---child-2/test-300kb_8000-series_170501_6534_1400x664.jpg',
    badge: 'Premium',
    shortDesc: 'an industry-leading, heavy-duty agricultural irrigation system. Known for its durability and structural integrity, it is built to withstand long spans, deep furrows, and rough, uneven terrain. It is widely used for large-scale, demanding field operations',
    specs: ['Coverage: up to ~500+ acres', 'Span length: 115 ft to 225 ft', 'GPS & VRI compatible', 'Galvanized steel frame'],

  },

  {
    id: 'center-pivot-span',
    name: 'Valley® Center Pivot System',
    category: 'pivot',
    icon: RotateCw,

    image: 'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium',
    shortDesc: 'Industry-leading center pivot irrigation covering up to 500 hectares with GPS-guided precision.',
    specs: ['Coverage: up to 500 ha', 'Span length: 65m each', 'GPS & VRI compatible', 'Galvanized steel frame'],

  },
  {
    id: 'linear-pivot',
    name: 'Linear Move System',
    category: 'pivot',
    icon: RotateCw,

    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80',
    badge: null,
    shortDesc: 'High-uniformity linear move system for rectangular fields with advanced corner coverage.',
    specs: ['Field shape: Rectangular', 'Width: up to 800m', 'End-gun corner system', 'Remote monitoring'],

  },
  {
    id: '7000-center-pivot',
    name: '7000 Series Center Pivot System',
    category: 'pivot',
    icon: RotateCw,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider87/product-pages/product-page---child-2/test_300kb_7000-series_7000series_corn_yorkne_june2012_72_1400x664.jpg',
    badge: 'Cost-Effective',
    shortDesc: 'A reliable, cost-effective center pivot irrigation system engineered for less-demanding terrain. Second only to the 8000 series in durability and performance, ideal for maximum ROI.',
    specs: ['Max length: 2,000 ft', 'Span length: 115–205 ft', 'Pipe: 6" or 6⅝"', 'Hot-dip galvanized frame'],

  },
  {
    id: 'icon10-smart-panel',
    name: 'ICON10 Smart Panel',
    category: 'control',
    icon: Monitor,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider129/icon-family/icon-10-panel.jpg',
    badge: 'Flagship',
    shortDesc: 'Top-of-the-line smart control panel with a 10-inch full-color touchscreen. Features built-in AgSense connectivity, GPS, and Variable Rate Irrigation for precision management.',
    specs: ['10" color touchscreen', 'Built-in AgSense/Valley 365', 'VRI Speed & Zone Control', 'GPS ready'],

  },
  {
    id: 'icon5-smart-panel',
    name: 'ICON5 Smart Panel',
    category: 'control',
    icon: Monitor,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider129/icon-family/icon-5-panel.jpg',
    badge: 'Smart',
    shortDesc: 'Hybrid smart panel combining a 5-inch full-color touchscreen with soft-touch buttons. Offers intuitive local control plus full remote management via AgSense/Valley 365.',
    specs: ['5" color touchscreen', 'Soft-touch buttons', 'AgSense/Valley 365 built-in', 'VRI capable'],

  },
  {
    id: 'icon1-smart-panel',
    name: 'ICON1 Smart Panel',
    category: 'control',
    icon: Monitor,

    image: 'https://tantairrigation.com/wp-content/uploads/2020/07/icon1-1.jpg',
    badge: 'Remote',
    shortDesc: 'Remote-only smart panel designed for growers who prefer full control from their smartphone, tablet, or computer. No physical display — all management via AgSense/Valley 365.',
    specs: ['Remote-only (no display)', 'AgSense/Valley 365 built-in', 'VRI capable', 'NEMA 3R rated'],

  },
  {
    id: 'iconx-smart-panel',
    name: 'ICONX Smart Panel',
    category: 'control',
    icon: Monitor,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider129/icon-family/icon-x-panel.jpg',
    badge: 'Retrofit',
    shortDesc: 'Unique retrofit solution that upgrades non-Valley or older mechanical pivot panels to the Valley ICON network. Uses existing panel circuits — no full system replacement needed.',
    specs: ['5" color touchscreen', 'Retrofits any brand', 'AgSense/Valley 365 built-in', 'Uses existing circuits'],

  },
  {
    id: 'autopilot-linear-panel',
    name: 'AutoPilot Linear Control Panel',
    category: 'control',
    icon: Settings,

    image: 'https://webassets.valmont.com/valmontstaging/images/librariesprovider87/product-pages/product-page---child-2/images-with-dark-overlay/new-autopilot-linear_autopilotlinear_panel-2_1400x664.jpg',
    badge: 'Linear',
    shortDesc: 'The only control panel designed specifically for Valley linear irrigation machines. GPS-ready with programmable auto-direction, speed control, and end gun management.',
    specs: ['GPS-ready positioning', 'Auto direction & speed', 'End gun control by position', 'BaseStation3 compatible'],

  },
  {
    id: 'classicplus-control-panel',
    name: 'ClassicPlus Control Panel',
    category: 'control',
    icon: Settings,

    image: 'https://valleyagelectric.com/wp-content/uploads/sites/15/2021/02/new-classicplus_classicplus01_1400x664-1024x486.jpg',
    badge: null,
    shortDesc: 'Reliable manual switch-operated control panel for center pivots, corner arms, and linears. Features percent timer dial, pressure monitoring, and easy upgrade path to advanced panels.',
    specs: ['Manual switch operation', 'Percent timer dial', 'Mechanical auto-reverse', 'AgSense compatible'],

  },
  {
    id: 'classic-control-panel',
    name: 'Classic Control Panel',
    category: 'control',
    icon: Settings,

    image: 'https://valleyagelectric.com/wp-content/uploads/sites/15/2021/02/new-classicpanel_classicpanel_1_rotator_web_1400x664.jpg',
    badge: null,
    shortDesc: 'Economical entry-level panel focused on basic, reliable irrigation control. Push-button operation with voltage and hour meters for straightforward performance tracking.',
    specs: ['Push-button control', 'Voltage & hour meters', 'Solid-state percent timer', 'AgSense compatible'],

  },
  {
    id: 'submersible-pump',
    name: 'Grundfos SP Submersible Pump',
    category: 'pumps',
    icon: Zap,

    image: 'https://images.unsplash.com/photo-1583869367058-97af59eef352?q=80&w=600&auto=format&fit=crop',
    badge: 'Top Rated',
    shortDesc: 'High-efficiency stainless steel submersible pump for deep wells and borehole water extraction.',
    specs: ['Power: 5.5 kW', 'Max head: 150m', 'Flow: 8 m³/h', 'SS 304 construction'],

  },
  {
    id: 'booster-pump',
    name: 'Centrifugal Booster Set',
    category: 'pumps',
    icon: Gauge,

    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    badge: null,
    shortDesc: 'Multi-stage centrifugal booster pump set for pressurized drip and sprinkler systems.',
    specs: ['Power: 3.0 kW', 'Max pressure: 8 bar', 'Flow: 12 m³/h', 'Auto pressure control'],

  },
  {
    id: 'disc-filter',
    name: 'Disc Filter 3" Manual',
    category: 'filtration',
    icon: Filter,

    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80',
    badge: null,
    shortDesc: 'High-capacity manual disc filter for removing sediment and organic matter from irrigation water.',
    specs: ['Connection: 3" BSP', 'Filtration: 120 mesh', 'Flow: 25 m³/h', 'Manual backwash'],

  },
  {
    id: 'sand-media-filter',
    name: 'Sand Media Filter Station',
    category: 'filtration',
    icon: Filter,

    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'Industrial',
    shortDesc: 'Dual-tank sand media filtration station with automatic backwash for large-scale operations.',
    specs: ['Tank diameter: 48"', 'Flow: 60 m³/h', 'Auto backwash controller', 'Epoxy coated steel'],

  },
  {
    id: 'solar-pump-kit',
    name: 'Solar Pump Kit 3HP',
    category: 'solar',
    icon: Sun,

    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
    badge: 'Eco',
    shortDesc: 'Complete off-grid solar pumping solution with panels, controller, and submersible pump.',
    specs: ['Panels: 8 × 400W', 'Pump: 3HP DC', 'Max head: 80m', 'MPPT controller'],

  },
  {
    id: 'pe-pipe-25mm',
    name: 'HDPE Pipe 25mm PN10',
    category: 'accessories',
    icon: Shrub,

    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
    badge: null,
    shortDesc: 'UV-resistant high-density polyethylene pipe for sub-main and lateral distribution lines.',
    specs: ['Diameter: 25mm', 'Pressure: PN10', 'Material: HDPE PE100', 'UV stabilized'],

  },
]
