import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <WorkGrid />
      <Services />
      <Contact />
    </div>
  )
}

export default App