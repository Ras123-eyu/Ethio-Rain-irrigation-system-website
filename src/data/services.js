import { 
  Zap, 
  RotateCw, 
  Droplets, 
  Home, 
  Waves, 
  Layout, 
  Truck, 
  Sun 
} from 'lucide-react'

export const services = [
  {
    id: 'water-supply',
    slug: 'water-supply-electromechanical',
    icon: Zap,
    title: 'Water Supply and Electromechanical Systems',
    shortDesc: 'Comprehensive water distribution networks and advanced electromechanical systems for reliable industrial and agricultural supply.',
    description: `Our water supply and electromechanical services offer end-to-end solutions for large-scale water distribution. We specialize in the design, procurement, and installation of heavy-duty pumping stations, control panels, and automated monitoring systems. With a focus on durability and efficiency, we ensure your water infrastructure meets the highest industrial standards.`,
    img: 'https://images.unsplash.com/photo-1583869367058-97af59eef352?q=80&w=2152&auto=format&fit=crop',
    tag: 'Infrastructure',
    benefits: [
      'High-performance pumping stations',
      'Advanced control and monitoring systems',
      'Efficient resource distribution',
      'Durable and industrial-grade components'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=800&q=80'
    ]
  },
  {
    id: 'center-pivot',
    slug: 'center-pivot-sprinkler-systems',
    icon: RotateCw,
    title: 'Center Pivot and Sprinkler Systems',
    shortDesc: 'Precision-engineered center pivot and automated sprinkler solutions for uniform large-scale field coverage.',
    description: `Ethio-Rain's center pivot and sprinkler systems are designed to maximize yield while minimizing labor. Our automated systems provide uniform water distribution across hundreds of hectares, making them ideal for large-scale commercial farming. We offer advanced control systems that allow farmers to manage their irrigation remotely, ensuring optimal soil moisture levels at all times.`,
    img: 'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?q=80&w=2532&auto=format&fit=crop',
    tag: 'Large Scale',
    benefits: [
      'Uniform water distribution',
      'Minimal labor requirement',
      'Remote monitoring and control',
      'Scalable for large-scale operations'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80',
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80',
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&q=80'
    ]
  },
  {
    id: 'drip-system',
    slug: 'drip-system',
    icon: Droplets,
    title: 'Drip System',
    shortDesc: 'High-efficiency drip irrigation systems designed to deliver water directly to the root zone, maximizing yield and conservation.',
    description: `Drip irrigation is the gold standard for water-efficient farming. Our systems deliver water and nutrients directly to the plant's roots, significantly reducing evaporation and runoff. This precision method not only saves water but also promotes healthier plant growth and higher crop yields, making it perfect for orchards, vineyards, and vegetable farms.`,
    img: 'https://images.unsplash.com/photo-1640677117376-573b9dbb8ea8?q=80&w=2070&auto=format&fit=crop',
    tag: 'Efficient',
    benefits: [
      'Up to 90% water efficiency',
      'Direct root zone hydration',
      'Reduced weed growth',
      'Lower energy costs'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80'
    ]
  },
  {
    id: 'green-house',
    slug: 'green-house-solutions',
    icon: Home,
    title: 'Green House Solutions',
    shortDesc: 'Turnkey greenhouse installations with integrated climate control and smart irrigation for year-round agricultural production.',
    description: `Control your environment and your profits with Ethio-Rain's turnkey greenhouse solutions. We provide high-quality structures integrated with automated climate control, specialized lighting, and tailored irrigation systems. Whether you're growing high-value flowers or specialty vegetables, our greenhouses ensure year-round production regardless of external weather conditions.`,
    img: 'https://plus.unsplash.com/premium_photo-1679428402040-e3c93439ec13?q=80&w=2070&auto=format&fit=crop',
    tag: 'Controlled',
    benefits: [
      'Year-round crop production',
      'Complete climate control',
      'Protection from pests and weather',
      'Higher value crop potential'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=800&q=80'
    ]
  },
  {
    id: 'hose-reel',
    slug: 'hose-reel-irrigation-system',
    icon: Waves,
    title: 'Hose Reel Irrigation System',
    shortDesc: 'Versatile and mobile hose reel systems providing flexible irrigation coverage for diverse land shapes and crop types.',
    description: `For farms that require flexibility, our hose reel irrigation systems offer a powerful and mobile solution. These automated travelers can be easily moved between fields, making them ideal for smaller holdings or irregularly shaped terrain. They provide excellent water distribution and are built to withstand the rigors of frequent movement and continuous operation.`,
    img: 'https://images.unsplash.com/photo-1590068484425-00751653640f?q=80&w=2070&auto=format&fit=crop',
    tag: 'Versatile',
    benefits: [
      'Highly mobile and flexible',
      'Suitable for irregular fields',
      'Easy to operate and maintain',
      'Robust and durable construction'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
      'https://images.unsplash.com/photo-1506478220038-0c31d1d6a69b?w=800&q=80'
    ]
  },
  {
    id: 'design-consultancy',
    slug: 'design-consultancy-installation',
    icon: Layout,
    title: 'Design and Installation Services',
    shortDesc: 'Expert consulting and professional installation services tailoring irrigation layouts to your specific topography and needs.',
    description: `A successful irrigation system starts with expert design. Our team of certified engineers provides comprehensive consultancy services, mapping your land topography and water sources to create the most efficient irrigation layout possible. We then follow through with professional installation, ensuring every component is placed for maximum performance and longevity.`,
    img: 'https://plus.unsplash.com/premium_photo-1664299231556-57f570023f87?q=80&w=2070&auto=format&fit=crop',
    tag: 'Expert',
    benefits: [
      'Precision engineering and design',
      'Topography-aware layouts',
      'Professional certified installation',
      'Long-term system reliability'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592dec58ef4e?w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1541888941255-22d760773d22?w=800&q=80'
    ]
  },
  {
    id: 'farm-equipment',
    slug: 'farm-equipment-machinery',
    icon: Truck,
    title: 'Farm Equipment and Machinery',
    shortDesc: 'Direct supply of high-quality agricultural machinery and specialized farm equipment for modern farming operations.',
    description: `Beyond irrigation, Ethio-Rain is your partner in modern mechanization. We source and supply a wide range of specialized farm equipment, from precision planters to heavy-duty harvest machinery. Our partnership with global brands ensures that Ethiopian farmers have access to the same technology powering the world's most productive agricultural regions.`,
    img: 'https://plus.unsplash.com/premium_photo-1661877413245-7fc18971d549?q=80&w=2072&auto=format&fit=crop',
    tag: 'Supply',
    benefits: [
      'Access to global machinery brands',
      'Specialized agricultural tools',
      'Enhanced farm productivity',
      'Reliable supply and support'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542362567-b05e8180f6f6?w=800&q=80',
      'https://images.unsplash.com/photo-1530263303734-829924d73bb1?w=800&q=80',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80'
    ]
  },
  {
    id: 'solar-power',
    slug: 'solar-power-system-installation',
    icon: Sun,
    title: 'Solar Power System Installation',
    shortDesc: 'Sustainable solar energy solutions for off-grid irrigation pumps and whole-farm renewable power systems.',
    description: `Bring power to where you need it most with our sustainable solar solutions. We design and install high-efficiency photovoltaic systems specifically for off-grid irrigation pumping and general farm energy needs. Reduce your carbon footprint and your operating costs simultaneously with Ethio-Rain's renewable energy expertise.`,
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1350&auto=format&fit=crop',
    tag: 'Renewable',
    benefits: [
      'Off-grid energy independence',
      'Significantly reduced energy costs',
      'Eco-friendly farm operations',
      'Low maintenance and reliable'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      'https://images.unsplash.com/photo-1545209590-09321cf03f9b?w=800&q=80'
    ]
  },
]
