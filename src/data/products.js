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
} from 'lucide-react'

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'drip', label: 'Drip Systems' },
  { id: 'sprinkler', label: 'Sprinklers' },
  { id: 'pivot', label: 'Center Pivots' },
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
