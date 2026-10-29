import { useState } from 'react'
import { 
  Users, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  Briefcase, 
  Sparkles,
  ChevronRight,
  PhoneCall
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { executiveTeam, executiveTeamMeta, departmentFilters } from '../data/team'

export default function ExecutiveTeam() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedMember, setSelectedMember] = useState(null)

  const filteredTeam = activeTab === 'all'
    ? executiveTeam
    : executiveTeam.filter(m => m.department === activeTab)

  return (
    <section id="team" className="py-14 sm:py-24 transition-colors duration-300 dark:bg-gray-950 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-3.5 py-1.5 mb-3 sm:mb-4">
              <Users className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-brand-cyan text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                Executive & Technical Leadership
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black dark:text-white text-gray-900 leading-tight mb-4 transition-colors">
              The Minds Behind <br />
              <span className="gradient-text">Our Precision Water Works</span>
            </h2>
            <p className="text-gray-500 dark:text-white/60 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              {executiveTeamMeta.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Credentials Ribbon */}
        <ScrollReveal animation="fade-up" staggerIndex={1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-14">
            {executiveTeamMeta.stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-4 sm:p-6 rounded-2xl dark:bg-gray-900 bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm text-center transition-all hover:scale-[1.02]"
              >
                <div className="text-2xl sm:text-3xl font-black gradient-text tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 dark:text-white/50 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Department Filter Pills (Mobile Horizontal Swipe Friendly) */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar touch-scroll pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {departmentFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveTab(filter.id)}
              className={`px-4 py-2 min-h-[40px] whitespace-nowrap rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border shrink-0 active:scale-95 ${
                activeTab === filter.id
                  ? 'btn-primary text-white border-transparent shadow-lg shadow-brand-blue/25 scale-100'
                  : 'dark:bg-gray-900 bg-gray-50 dark:text-white/50 text-gray-600 dark:border-white/10 border-gray-200 hover:border-brand-cyan/40 hover:text-brand-cyan'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Team Grid - 4 Columns for Executive Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTeam.map((member, idx) => (
            <ScrollReveal
              key={member.id}
              staggerIndex={idx}
              animation="fade-up"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedMember(member)
                }
              }}
              className="card-hover group rounded-2xl sm:rounded-3xl overflow-hidden dark:bg-gray-900 bg-white border dark:border-white/5 border-gray-100 shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <div className="p-5 sm:p-7">
                {/* Header: Avatar / Photo & Badges */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg shadow-brand-blue/20 shrink-0 group-hover:scale-105 transition-all duration-300 border-2 border-brand-cyan/25 dark:border-white/10 bg-gray-100 dark:bg-gray-800">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          if (e.currentTarget.nextSibling) {
                            e.currentTarget.nextSibling.style.display = 'flex'
                          }
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-tr ${member.avatarGradient} ${member.image ? 'hidden' : 'flex'} items-center justify-center text-white font-black text-lg sm:text-xl`}>
                      {member.initials}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
                      {member.badge}
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-white/40 font-semibold">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg sm:text-xl font-black dark:text-white text-gray-900 group-hover:text-brand-cyan transition-colors leading-snug mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-blue dark:text-brand-cyan mb-3">
                  {member.role}
                </p>

                {/* Academic Qualification & Experience Snippets */}
                <div className="space-y-2 mb-4 p-3 rounded-xl dark:bg-gray-800/60 bg-gray-50 border dark:border-white/5 border-gray-100 text-xs">
                  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <GraduationCap className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="font-semibold line-clamp-1">{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{member.experienceTotal} Leadership Exp.</span>
                  </div>
                </div>

                {/* Bio Excerpt */}
                <p className="text-xs sm:text-sm text-gray-500 dark:text-white/60 leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Specialties Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.slice(0, 3).map((spec, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600 border dark:border-white/5 border-gray-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Card Trigger */}
              <div className="p-4 sm:px-7 sm:py-4 border-t dark:border-white/5 border-gray-100 dark:bg-gray-900/50 bg-gray-50 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400 dark:text-white/40 uppercase tracking-wider">
                  Ethio-Rain Leadership
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-cyan group-hover:text-brand-blue transition-colors min-h-[36px] py-1">
                  View Profile <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Corporate Governance Callout */}
        <ScrollReveal animation="fade-up">
          <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-10 dark:bg-gradient-to-r dark:from-gray-900 dark:via-brand-blue-deep/30 dark:to-gray-900 bg-gradient-to-r from-blue-50 via-cyan-50/50 to-white border dark:border-brand-blue/30 border-blue-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-blue dark:text-brand-cyan mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified Grade-1 Water Works Contractor</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-gray-900 tracking-tight mb-2">
                Need to Consult Our Engineering Board?
              </h3>
              <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base max-w-xl font-medium">
                Our General Manager and Technical Directors are available for high-level feasibility review, government tender advisory, and commercial farm master planning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a 
                href="/#contact" 
                className="btn-primary text-white font-bold px-7 py-3.5 min-h-[48px] rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider shadow-lg active:scale-95 text-center"
              >
                Request Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:+251901864466" 
                className="border-2 dark:border-white/20 border-gray-300 dark:text-white text-gray-900 font-bold px-6 py-3.5 min-h-[48px] rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 active:scale-95 text-center transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-cyan" />
                <span>Call Executive Office</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <div 
            className="relative z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto dark:bg-gray-900 bg-white rounded-t-3xl sm:rounded-3xl shadow-3xl border dark:border-white/10 border-gray-200 animate-fade-in-up pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] sm:pb-0"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Close */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl dark:bg-gray-800 bg-gray-100 text-gray-400 hover:text-white transition-all active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-2xl shrink-0 border-2 border-brand-cyan/40 dark:border-white/20 bg-gray-100 dark:bg-gray-800">
                  {selectedMember.image ? (
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        if (e.currentTarget.nextSibling) {
                          e.currentTarget.nextSibling.style.display = 'flex'
                        }
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full bg-gradient-to-tr ${selectedMember.avatarGradient} ${selectedMember.image ? 'hidden' : 'flex'} items-center justify-center text-white font-black text-2xl`}>
                    {selectedMember.initials}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30 inline-block mb-1.5">
                    {selectedMember.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black dark:text-white text-gray-900 leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-brand-blue dark:text-brand-cyan">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Qualifications & Experience Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl dark:bg-gray-800/80 bg-gray-50 border dark:border-white/5 border-gray-100 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Formal Qualification</span>
                  <p className="font-bold dark:text-white text-gray-800 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-brand-cyan shrink-0" />
                    {selectedMember.qualification}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Track Record</span>
                  <p className="font-bold dark:text-white text-gray-800 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    {selectedMember.experienceSimilar}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <h4 className="text-xs font-black uppercase tracking-widest dark:text-brand-cyan text-brand-blue mb-2">
                Executive Background
              </h4>
              <p className="text-xs sm:text-sm dark:text-white/70 text-gray-600 leading-relaxed mb-6 font-medium">
                {selectedMember.bio}
              </p>

              {/* Position Responsibilities */}
              <h4 className="text-xs font-black uppercase tracking-widest dark:text-brand-cyan text-brand-blue mb-3">
                {selectedMember.responsibilitiesHeading || 'Core Responsibilities'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {(selectedMember.responsibilities || selectedMember.specialties).map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl dark:bg-gray-800 bg-gray-50 border dark:border-white/5 border-gray-100 text-xs font-semibold dark:text-gray-200 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Modal Close Action */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-800 hover:dark:bg-gray-700 hover:bg-gray-200 font-bold text-xs uppercase tracking-wider min-h-[48px] active:scale-95 transition-colors cursor-pointer text-center"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
