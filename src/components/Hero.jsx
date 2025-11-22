import Spline from '@splinetool/react-spline'

const colors = {
  ocean: '#0A2463',
  cerulean: '#3E78B2',
  white: '#FFFFFF',
  flame: '#FF6B35',
  sky: '#C5D5EA',
  charcoal: '#2A2D34',
}

export default function Hero() {
  return (
    <section className="relative h-[520px] sm:h-[600px] lg:h-[700px]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability - pointer events disabled per guideline */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(10,36,99,0.88), rgba(10,36,99,0.35) 45%, rgba(10,36,99,0.15) 70%, rgba(10,36,99,0.0))'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: '#ffffff', color: colors.ocean }}>
            Trusted 24h laundry in Tunis
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            On-demand Laundry & Dry Cleaning
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90">
            Fast pickup, premium care, and same‑day delivery. Book in seconds and focus on what matters.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#order" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold shadow-sm hover:shadow-lg transition" style={{ backgroundColor: colors.flame }}>
              Create New Order
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border" style={{ color: colors.white, borderColor: 'rgba(255,255,255,0.6)' }}>
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
