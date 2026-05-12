import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Marc Beauchamp',
    location: 'Propriétaire résidentiel',
    quote: 'Construction LESCO a transformé notre sous-sol en espace de vie complet. Travail propre, délais respectés, équipe professionnelle du début à la fin.',
    highlight: 'délais respectés',
  },
  {
    name: 'Josée Thibodeau',
    location: 'Renovation cuisine',
    quote: 'Ma cuisine a été entièrement refaite — du plancher aux armoires. Le résultat dépasse mes attentes. Je recommande LESCO sans hésiter.',
    highlight: 'dépasse mes attentes',
  },
  {
    name: 'Patrick Gauthier',
    location: 'Propriétaire commercial',
    quote: 'Nous avons confié la rénovation complète de nos locaux commerciaux à LESCO. Prise en charge totale, communication claire et résultat impeccable.',
    highlight: 'résultat impeccable',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  const getHighlightedQuote = (quote: string, highlight: string) => {
    const idx = quote.toLowerCase().indexOf(highlight.toLowerCase())
    if (idx === -1) return <>{quote}</>
    return (
      <>
        {quote.slice(0, idx)}
        <span className="text-[#ec7c33]">{quote.slice(idx, idx + highlight.length)}</span>
        {quote.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-[#FAFAF8]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — label + nav */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-6">
              Ce qu'ils disent
            </span>
            <h2 className="font-display font-black text-[#1B1B1B] uppercase leading-[0.9] tracking-tightest2 text-4xl lg:text-5xl mb-10">
              Nos clients
              <br />
              témoignent.
            </h2>

            {/* Name list */}
            <nav className="space-y-1">
              {testimonials.map((t2, i) => (
                <button
                  key={t2.name}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 border-l-2 transition-all duration-200 ${
                    active === i
                      ? 'border-[#ec7c33] bg-[#ec7c33]/5'
                      : 'border-transparent hover:border-[#1B1B1B]/20'
                  }`}
                >
                  <div className={`font-display font-black text-sm uppercase tracking-widest2 ${active === i ? 'text-[#1B1B1B]' : 'text-[#1B1B1B]/50'}`}>
                    {t2.name}
                  </div>
                  <div className="font-mono text-[11px] font-bold text-[#1B1B1B]/40 uppercase tracking-widest3 mt-0.5">
                    {t2.location}
                  </div>
                </button>
              ))}
            </nav>

            {/* Dots */}
            <div className="flex gap-2 mt-6 px-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-0.5 transition-all duration-300 ${active === i ? 'w-8 bg-[#ec7c33]' : 'w-4 bg-[#1B1B1B]/20'}`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — quote */}
          <div className="lg:col-span-8">
            <blockquote key={active} className="relative">
              <div className="font-mono text-8xl font-bold text-[#ec7c33]/20 leading-none select-none mb-4">
                "
              </div>
              <p className="font-display font-black text-[#1B1B1B] uppercase leading-tight tracking-tightest3 text-3xl lg:text-4xl xl:text-5xl mb-8">
                {getHighlightedQuote(t.quote, t.highlight)}
              </p>
              <footer>
                <div className="font-mono text-xs font-bold text-[#1B1B1B]/50 uppercase tracking-widest3">
                  — {t.name} · {t.location}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
