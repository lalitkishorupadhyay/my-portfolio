import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Tech from './components/sections/Tech'
import Works from './components/sections/Works'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative z-0 bg-primary">
      {/* Hero with navbar */}
      <div style={{ backgroundImage: 'url("/herobg.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />

      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  )
}
