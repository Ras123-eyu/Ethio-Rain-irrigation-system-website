import { useEffect, useRef, useState } from 'react'
import { Droplets, Users, Award, Globe } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const stats = [
  { icon: Droplets, value: 8000, suffix: '+', label: 'Hectares Irrigated' },
  { icon: Users,    value: 3200, suffix: '+', label: 'Farmers Served'     },
  { icon: Award,    value: 98,   suffix: '%',  label: 'Success Rate'       },
  { icon: Globe,    value: 15,   suffix: '+', label: 'Regions Covered'    },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-20 transition-colors duration-300 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">Our Impact In Numbers</p>
          <h2 className="text-4xl font-extrabold dark:text-white text-gray-900 transition-colors">
            Transforming Agriculture Across Ethiopia
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <ScrollReveal
              key={label}
              staggerIndex={i}
              animation="fade-up"
              className="card-hover text-center p-10 rounded-3xl dark:bg-brand-dark bg-gray-50 border dark:border-white/5 border-gray-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-brand-blue/10 border border-brand-blue/20">
                <Icon className="w-8 h-8 text-brand-cyan" />
              </div>
              <div className="text-4xl font-black mb-2 gradient-text">
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="dark:text-white/40 text-gray-500 text-[10px] uppercase tracking-widest font-bold transition-colors">{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
