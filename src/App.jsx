import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 border-t" style={{ borderColor: '#E7EEF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: '#8A8D93' }}>© {new Date().getFullYear()} Flamesblue. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline" style={{ color: '#3E78B2' }}>Privacy</a>
            <a href="#" className="hover:underline" style={{ color: '#3E78B2' }}>Terms</a>
            <a href="#" className="hover:underline" style={{ color: '#3E78B2' }}>Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
