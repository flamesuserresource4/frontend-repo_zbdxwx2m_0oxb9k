const colors = {
  ocean: '#0A2463',
  cerulean: '#3E78B2',
  white: '#FFFFFF',
  flame: '#FF6B35',
  sky: '#C5D5EA',
  charcoal: '#2A2D34',
  gray: '#8A8D93'
}

const features = [
  {
    title: 'Schedule Pickup',
    desc: 'Choose your preferred time and we’ll arrive promptly.',
    tone: colors.flame
  },
  {
    title: 'Premium Care',
    desc: 'Dry cleaning and wash & fold handled by experts.',
    tone: colors.cerulean
  },
  {
    title: 'Real-time Tracking',
    desc: 'Track your order through every stage until delivery.',
    tone: colors.ocean
  }
]

export default function Features() {
  return (
    <section id="how" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.ocean }}>Why Flamesblue</h2>
          <p className="mt-2 text-sm sm:text-base" style={{ color: colors.gray }}>Designed for convenience, built for trust.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border shadow-sm hover:shadow-md transition" style={{ borderColor: '#e7eef7' }}>
              <div className="h-10 w-10 rounded-md mb-4" style={{ backgroundColor: f.tone }} />
              <h3 className="text-lg font-semibold" style={{ color: colors.charcoal }}>{f.title}</h3>
              <p className="mt-1 text-sm" style={{ color: colors.gray }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
