import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import { projectsData } from '../data/projects'
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Wrench, 
  Building2, 
  Layers, 
  Cpu, 
  ChevronRight,
  FileCheck2,
  Calendar,
  ExternalLink,
  Droplet,
  CameraOff
} from 'lucide-react'
import { useEffect } from 'react'
import SEO from '../components/SEO'

export default function ServiceDetail() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const currentIndex = services.findIndex(s => s.slug === slug)
  const service = services[currentIndex]

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center dark:bg-gray-950 bg-white">
        <h1 className="text-3xl sm:text-4xl font-black mb-4 dark:text-white text-gray-900">Service Not Found</h1>
        <p className="text-gray-500 mb-6 text-sm">The requested irrigation or water engineering service could not be found.</p>
        <Link to="/#services" className="btn-primary text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
          Back to Services
        </Link>
      </div>
    )
  }

  const { 
    icon: Icon, 
    title, 
    description, 
    img, 
    benefits, 
    tag,
    specs = [],
    applications = [],
    partners = [],
    relatedProjects = []
  } = service

  // Strictly use verified, 100% completed real projects executed with this technology
  const matchedProjects = (relatedProjects || [])
    .map(projSlug => projectsData.find(p => p.slug === projSlug))
    .filter(p => p && (p.tag === 'Completed' || p.completion?.includes('100%')))

  // Previous and Next service navigation
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1]
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0]

  const turnkeySteps = [
    {
      num: '01',
      title: 'Topographic GPS Survey & Feasibility',
      desc: 'GPS RTK surveying, soil infiltration evaluation, and water source pumping test to map exact elevation and volume.'
    },
    {
      num: '02',
      title: 'Hydraulic Modeling & Engineering BOQ',
      desc: 'CAD hydraulic network simulation, friction loss analysis, pump head calculation, and value-engineered BOQ preparation.'
    },
    {
      num: '03',
      title: 'Equipment Sourcing & Workshop Pre-Fabrication',
      desc: 'Procurement from global partners (Valley, Rain Bird, Wilo) and certified in-house manifold and skid fabrication.'
    },
    {
      num: '04',
      title: 'Field Assembly & Electromechanical Erection',
      desc: 'On-site excavation, HDPE butt-fusion welding, pivot span erection, pump house construction, and power wiring.'
    },
    {
      num: '05',
      title: 'Hydrostatic Field Testing & Commissioning',
      desc: '24-hour hydrostatic pressure hold verification, pump flow-rate logging, electrical safety signoff, and live water delivery.'
    },
    {
      num: '06',
      title: 'Operator Training & Preventative Handover',
      desc: 'Hands-on operator training for farm staff, telemetry app setup, as-built drawings, and 12-month warranty support.'
    }
  ]

  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-24 transition-colors duration-300 dark:bg-gray-950 bg-white relative">
      <SEO 
        title={`${title} | Ethio-Rain Irrigation Systems`}
        description={description.slice(0, 160)} 
        image={img}
      />

      {/* Hero Section */}
      <section className="relative h-[48vh] sm:h-[58vh] min-h-[360px] sm:min-h-[460px] flex items-end mb-10 sm:mb-16 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pb-8 sm:pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-3 sm:mb-4 font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#services" className="hover:text-brand-cyan transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-brand-cyan line-clamp-1">{title}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-blue/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-3 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{tag}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight drop-shadow-2xl mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-brand-cyan" /> Grade-1 Water Works Contractor
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" /> Full Turnkey BOQ & Execution
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" /> 15+ Years Field Proven
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-14">
        
        {/* Left Column: Comprehensive Engineering Service Details */}
        <div className="space-y-12 sm:space-y-16 animate-fade-in-up">
          
          {/* 1. Overview */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-brand-blue/10 dark:bg-brand-blue/20 p-3 sm:p-3.5 rounded-2xl border border-brand-blue/20 shrink-0">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-cyan" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block">
                  Service Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-gray-900 tracking-tight">
                  Engineering Overview
                </h2>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line font-medium mb-6">
              {description}
            </p>

            {/* Applications Chips */}
            {applications.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40 block mb-2.5">
                  Typical Applications & Commercial Deployment
                </span>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 rounded-lg dark:bg-gray-800 bg-white dark:text-gray-200 text-gray-700 border dark:border-white/5 border-gray-200 shadow-xs"
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. Key Engineering Specifications */}
          {specs.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
                    Technical Architecture
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black dark:text-white text-gray-900 tracking-tight">
                    Engineering Specifications & Standards
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {specs.map((spec, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-2xl dark:bg-gray-900/80 bg-gray-50 border dark:border-white/5 border-gray-200 shadow-xs flex flex-col justify-between"
                  >
                    <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-white/40 tracking-wider mb-1 block">
                      {spec.label}
                    </span>
                    <span className="font-bold text-xs sm:text-sm dark:text-white text-gray-900 leading-snug">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Turnkey Execution Process */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-cyan/10 p-2.5 rounded-xl border border-brand-cyan/20">
                <Layers className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block">
                  Methodology
                </span>
                <h3 className="text-xl sm:text-2xl font-black dark:text-white text-gray-900 tracking-tight">
                  Turnkey Delivery Methodology
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {turnkeySteps.map((step) => (
                <div 
                  key={step.num}
                  className="p-4 sm:p-5 rounded-2xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 flex items-start gap-3.5 group hover:border-brand-cyan/30 transition-colors"
                >
                  <span className="text-xs font-black text-brand-cyan px-2 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm dark:text-white text-gray-900 mb-1 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-white/50 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Benefits */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black dark:text-white text-gray-900 mb-6 uppercase tracking-wider">
              Key Commercial & Agricultural Benefits
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map(benefit => (
                <div 
                  key={benefit} 
                  className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-xs hover:border-brand-cyan/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-xs sm:text-sm leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Technology Partners */}
          {partners.length > 0 && (
            <div className="p-5 sm:p-6 rounded-3xl dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900/60 bg-gradient-to-r from-blue-50/60 to-white border dark:border-white/5 border-blue-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block mb-2">
                Certified OEM Equipment
              </span>
              <h4 className="text-base sm:text-lg font-black dark:text-white text-gray-900 mb-3">
                Global Technology & Manufacturer Alliances
              </h4>
              <p className="text-xs text-gray-500 dark:text-white/60 mb-4">
                We integrate top-tier certified machinery and components from industry-leading international partners:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {partners.map((partner, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold dark:bg-gray-800 bg-white dark:text-white text-gray-800 border dark:border-white/10 border-gray-200 shadow-xs flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 6. Real Executed Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block">
                    Proven Track Record
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black dark:text-white text-gray-900 tracking-tight">
                    Real Projects Executed with this Technology
                  </h3>
                </div>
                <Link 
                  to="/projects" 
                  className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1 shrink-0"
                >
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {matchedProjects.map((proj) => (
                  <Link 
                    key={proj.slug}
                    to={`/project/${proj.slug}`}
                    className="group card-hover rounded-2xl overflow-hidden dark:bg-gray-900 bg-white border dark:border-white/5 border-gray-100 shadow-sm flex flex-col justify-between"
                  >
                    <div className="relative h-40 overflow-hidden bg-gray-950">
                      <img 
                        src={proj.img} 
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                      <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                        <CheckCircle className="w-2.5 h-2.5" /> 100% Executed
                      </span>
                      {!proj.hasPhoto && (
                        <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-gray-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10 shadow-sm">
                          <CameraOff className="w-2.5 h-2.5 text-brand-cyan" /> Photo Not Available
                        </span>
                      )}
                      {proj.area && proj.hasPhoto && (
                        <span className="absolute bottom-2.5 left-2.5 text-[11px] text-white font-bold bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                          {proj.area}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {proj.client && (
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block mb-1 line-clamp-1">
                            Client: {proj.client}
                          </span>
                        )}
                        <h4 className="font-bold text-xs sm:text-sm dark:text-white text-gray-900 group-hover:text-brand-cyan transition-colors line-clamp-2 mb-2">
                          {proj.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 dark:text-white/50 line-clamp-2 mb-3 leading-relaxed">
                          {proj.overview}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] pt-2.5 border-t dark:border-white/5 border-gray-100">
                        <span className="text-gray-400 font-medium">{proj.location}</span>
                        <span className="font-bold text-brand-cyan flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Case Study <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation between Services */}
          <div className="pt-8 border-t dark:border-white/10 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to={`/service/${prevService.slug}`}
              className="flex items-center gap-3 p-3 rounded-2xl dark:hover:bg-gray-900 hover:bg-gray-50 transition-colors w-full sm:w-auto text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:text-brand-cyan transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Previous Service</span>
                <span className="text-xs font-bold dark:text-white text-gray-900 group-hover:text-brand-cyan line-clamp-1">{prevService.title}</span>
              </div>
            </Link>

            <Link
              to={`/service/${nextService.slug}`}
              className="flex items-center justify-end gap-3 p-3 rounded-2xl dark:hover:bg-gray-900 hover:bg-gray-50 transition-colors w-full sm:w-auto text-right group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Next Service</span>
                <span className="text-xs font-bold dark:text-white text-gray-900 group-hover:text-brand-cyan line-clamp-1">{nextService.title}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:text-brand-cyan transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Sticky Consultation & Estimator Sidebar */}
        <aside className="space-y-6 sm:space-y-8 animate-fade-in">
          
          {/* Contact Expert Card */}
          <div className="p-6 sm:p-7 rounded-3xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-200 shadow-xl lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-cyan mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Grade-1 Advisory
            </div>
            <h4 className="text-lg sm:text-xl font-black mb-2 dark:text-white text-gray-900">
              Need a Site Survey or Quotation?
            </h4>
            <p className="text-xs text-gray-500 dark:text-white/50 mb-6 leading-relaxed">
              Our registered irrigation engineers will review your crop requirements, topography, and water sources to prepare a comprehensive BOQ.
            </p>
            
            <div className="space-y-3.5 mb-6 text-xs font-semibold">
              <a 
                href="mailto:info@ethiorain.com" 
                className="flex items-center gap-3 p-2.5 rounded-xl dark:bg-gray-800/80 bg-white border dark:border-white/5 border-gray-200 hover:border-brand-cyan text-gray-700 dark:text-gray-200 transition-colors"
              >
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">info@ethiorain.com</span>
              </a>

              <a 
                href="tel:+251901864466" 
                className="flex items-center gap-3 p-2.5 rounded-xl dark:bg-gray-800/80 bg-white border dark:border-white/5 border-gray-200 hover:border-brand-cyan text-gray-700 dark:text-gray-200 transition-colors"
              >
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+251 901 86 44 66</span>
              </a>

              <a 
                href="tel:+251912882881" 
                className="flex items-center gap-3 p-2.5 rounded-xl dark:bg-gray-800/80 bg-white border dark:border-white/5 border-gray-200 hover:border-brand-cyan text-gray-700 dark:text-gray-200 transition-colors"
              >
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+251 912 88 28 81</span>
              </a>
            </div>

            <a 
              href="#contact" 
              className="btn-primary w-full text-center py-3.5 min-h-[46px] rounded-2xl flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-brand-blue/20 active:scale-95 transition-all mb-3"
            >
              Request Engineering Quote <ArrowRight className="w-4 h-4" />
            </a>

            <div className="p-3.5 rounded-2xl dark:bg-gray-800/50 bg-blue-50/50 border dark:border-white/5 border-blue-100 text-center">
              <span className="text-[10px] text-gray-500 dark:text-white/40 uppercase font-bold block mb-1">
                Office Location
              </span>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Kirkos Sub City, Woreda 02, House 172/506-C, Addis Ababa
              </p>
            </div>
          </div>

          {/* Quick Services Directory */}
          <div className="p-6 rounded-3xl dark:bg-gray-900/60 bg-gray-50 border dark:border-white/5 border-gray-200">
            <h5 className="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-white/40 mb-3.5">
              All Engineering Services
            </h5>
            <div className="space-y-1.5 max-h-72 overflow-y-auto no-scrollbar pr-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/service/${s.slug}`}
                  className={`block px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    s.slug === slug
                      ? 'bg-brand-blue text-white font-bold shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800'
                  }`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
