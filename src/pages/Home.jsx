import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Partners from '../components/Partners'
import About from '../components/About'
import Services from '../components/Services'
import WaterEstimator from '../components/WaterEstimator'
import ProductsPreview from '../components/ProductsPreview'
import Projects from '../components/Projects'
import TestimonialsPreview from '../components/TestimonialsPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <SEO title="Home - Advanced Irrigation & Agricultural Water Systems" />
      <Hero />
      <Partners />
      <Stats />
      <About />
      <Services />
      <WaterEstimator />
      <ProductsPreview />
      <Projects />
      <TestimonialsPreview />
      <Contact />
    </>
  )
}
