const colors = {
  ocean: '#0A2463',
  cerulean: '#3E78B2',
  white: '#FFFFFF',
  flame: '#FF6B35',
  sky: '#C5D5EA',
  charcoal: '#2A2D34',
}

export default function CTA() {
  return (
    <section id="order" className="py-16 bg-gradient-to-b from-white to-[#f4f8fe]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: colors.ocean }}>Ready to feel lighter?</h2>
        <p className="mt-2 text-sm sm:text-base" style={{ color: '#556' }}>Book your pickup now and enjoy same‑day delivery.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold shadow-sm hover:shadow-lg transition" style={{ backgroundColor: colors.flame }}>
            Order Now
          </a>
          <a href="/test" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border" style={{ color: colors.ocean, borderColor: colors.sky }}>
            Check System Status
          </a>
        </div>
      </div>
    </section>
  )
}
