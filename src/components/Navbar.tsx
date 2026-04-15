import { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import avatar from '../assets/avatar.jpg'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => { setActive(''); window.scrollTo(0, 0) }}
        >
          <div
            className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: '2px solid rgba(251,146,60,0.6)',
              boxShadow: '0 0 10px rgba(251,146,60,0.3)',
            }}
          >
            <img src={avatar} alt="Lalit Kishor" className="w-full h-full object-cover" />
          </div>
          <p className="text-white font-bold text-[18px] hidden sm:flex">
            Lalit &nbsp;<span className="text-ember">Kishor</span>
          </p>
        </a>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`text-[18px] font-medium cursor-pointer hover:text-ember transition-colors ${
                active === link.title ? 'text-ember' : 'text-white/80'
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {menuOpen && (
            <div className="absolute top-16 right-4 glass-card p-6 min-w-[140px] z-10">
              <ul className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <li
                    key={link.id}
                    className={`text-[16px] font-medium cursor-pointer hover:text-ember transition-colors ${
                      active === link.title ? 'text-ember' : 'text-white/80'
                    }`}
                    onClick={() => { setActive(link.title); setMenuOpen(false) }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
