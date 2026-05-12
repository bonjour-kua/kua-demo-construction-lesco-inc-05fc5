import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#gallery' },
  { label: 'Processus', href: '#process' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1B1B1B] shadow-2xl' : 'bg-[#1B1B1B]'
      }`}
      style={{ position: 'sticky', top: 0 }}
    >
      <div className="container-editorial flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo/logo-clean.png" alt="Construction LESCO inc." loading="eager" width="120" height="48" className="h-10 lg:h-12 w-auto object-contain" />
          <div className="hidden sm:block">
            <div className="text-white font-display font-black text-sm uppercase tracking-widest2 leading-none">
              Construction
            </div>
            <div className="text-[#ec7c33] font-mono text-xs font-bold uppercase tracking-widest3 mt-0.5">
              LESCO inc.
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#ec7c33] font-display font-black text-sm uppercase tracking-widest2 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+15165031953"
            className="flex items-center gap-2 bg-[#ec7c33] hover:bg-[#d06b25] text-white font-display font-black text-sm uppercase tracking-widest2 px-6 py-3 transition-colors duration-200"
          >
            <Phone size={16} />
            (516) 503-1953
          </a>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+15165031953"
            className="flex items-center justify-center w-11 h-11 bg-[#ec7c33] text-white"
            aria-label="Appeler"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-11 h-11 text-white border border-white/20 hover:border-[#ec7c33] transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10">
          <nav className="container-editorial py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-[#ec7c33] font-display font-black text-base uppercase tracking-widest2 py-3 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15165031953"
              className="mt-4 flex items-center justify-center gap-2 bg-[#ec7c33] text-white font-display font-black text-sm uppercase tracking-widest2 py-4"
            >
              <Phone size={16} />
              (516) 503-1953
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
