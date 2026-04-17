import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {

  return (
    <section id="contact" className="relative py-24 overflow-hidden group">
      {/* Background Greenery */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661914051745-c374a90ba861?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Lush green field" 
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[10s] ease-linear opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-950/80 via-gray-950/80 to-gray-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div className="animate-fade-in-up">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4 transition-colors">Get In Touch</p>
          <h2 className="text-4xl font-extrabold text-white mb-6 transition-colors tracking-tight">
            Our <span className="gradient-text">Location</span>
          </h2>
          <div className="section-divider mb-10" />
          <p className="text-white/60 leading-relaxed mb-12 transition-colors text-lg font-medium">
            Visit the Ethio-Rain Irrigation System P.L.C. headquarters in Addis Ababa. 
            Our experts are ready to welcome you and discuss your agricultural transformation.
          </p>

          <div className="space-y-8">
            {[
              { icon: MapPin, label: 'Address', value: 'Near Dembel city center, M.K.A.AS Business center, Addis Ababa Ethiopia' },
              { icon: Phone, label: 'Phone', value: '+251 910 61 57 57 / +251 912 88 28 81' },
              { icon: Mail, label: 'Email', value: 'info@ethiorain.et' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-5 group/item">
                <div className="bg-brand-blue/10 p-4 rounded-2xl border border-brand-blue/20 group-hover/item:border-brand-cyan/50 transition-all backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1 transition-colors">{label}</div>
                  <div className="text-white/90 font-bold transition-colors text-base group-hover/item:text-brand-cyan">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Container */}
        <div className="h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 animate-fade-in group/map relative">
          <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none group-hover/map:opacity-0 transition-opacity" />
          <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1485019125002!2d38.767233235229625!3d9.003057398062387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857367dd87b5%3A0x8edd7a5d87f3f4ca!2sEthio%20Rain%20Irrigation%20Systems%20PLC!5e1!3m2!1sen!2set!4v1776456424804!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(0.8)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover/map:grayscale-0 transition-all duration-1000 invert-[0.9] hue-rotate-180 brightness-75 group-hover/map:invert-0 group-hover/map:brightness-100"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
