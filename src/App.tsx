import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#ec7c33] focus:text-white focus:px-4 focus:py-2 focus:font-bold">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
