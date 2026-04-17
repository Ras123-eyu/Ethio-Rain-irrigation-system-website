import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Partners from '../components/Partners'
import About from '../components/About'
import Services from '../components/Services'
import ProductsPreview from '../components/ProductsPreview'
import Projects from '../components/Projects'
import TestimonialsPreview from '../components/TestimonialsPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Stats />
      <About />
      <Services />
      <ProductsPreview />
      <Projects />
      <TestimonialsPreview />
      <Contact />
    </>
  )
}
