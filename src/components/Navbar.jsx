import { Menu } from 'lucide-react'

const colors = {
  ocean: '#0A2463',
  cerulean: '#3E78B2',
  white: '#FFFFFF',
  flame: '#FF6B35',
  sky: '#C5D5EA',
  charcoal: '#2A2D34',
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg grid place-items-center shadow-sm" style={{ backgroundColor: colors.ocean }}>
            <span className="text-white font-bold">Fb</span>
          </div>
          <div>
            <p className="text-xl font-bold" style={{ color: colors.ocean }}>Flamesblue</p>
            <p className="text-xs" style={{ color: colors.cerulean }}>Laundry & Dry Cleaning</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: colors.charcoal }}>
          <a href="#customer" className="hover:opacity-80">Customer</a>
          <a href="#driver" className="hover:opacity-80">Driver</a>
          <a href="#admin" className="hover:opacity-80">Admin</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#order" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-white font-semibold shadow-sm hover:shadow transition" style={{ backgroundColor: colors.flame }}>Order Now</a>
          <button className="md:hidden p-2 rounded-md" style={{ color: colors.ocean }} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
