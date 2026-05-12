import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end bg-[#1B1B1B] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero/fb-photo-35.jpg" alt="Maison neuve construite par Construction LESCO inc." loading="eager" width="1920" height="1080" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/60 to-[#1B1B1B]/20" />
      </div>

      <div className="relative z-10 container-editorial pb-16 lg:pb-28 w-full pt-28 lg:pt-36">
        <div className="mb-6 lg:mb-8">
          <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3">
            Construction &amp; Rénovation — Résidentiel &amp; Commercial
          </span>
        </div>

        <div className="max-w-5xl">
          <h1 className="font-display font-black text-white uppercase leading-[0.88] tracking-tightest text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 lg:mb-8">
            Du gros <span className="text-[#ec7c33]">œuvre</span><br />à la <span className="text-[#ec7c33]">finition.</span>
          </h1>
          <p className="font-sans font-medium text-white/75 text-lg lg:text-2xl max-w-2xl leading-relaxed mb-10 lg:mb-12">
            Construction neuve et rénovation résidentielle et commerciale.
            On s'occupe de vos projets de A à Z — charpente, intérieur, sous-sol, cuisine.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#ec7c33] hover:bg-[#d06b25] text-white font-display font-black text-sm uppercase tracking-widest2 px-8 py-5 transition-colors duration-200">
            Obtenir une soumission <ArrowRight size={16} />
          </a>
          <a href="tel:+15165031953" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#ec7c33] hover:text-[#ec7c33] text-white font-display font-black text-sm uppercase tracking-widest2 px-8 py-5 transition-all duration-200">
            <Phone size={16} /> (516) 503-1953
          </a>
        </div>

        <div className="mt-14 lg:mt-20 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-2xl">
          {[
            { num: 'A–Z', label: 'Prise en charge complète' },
            { num: '2', label: 'Secteurs résidentiel & commercial' },
            { num: '100%', label: 'Travaux tous genres' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-black text-[#ec7c33] text-4xl lg:text-5xl leading-none tracking-tightest">{stat.num}</div>
              <div className="font-mono text-[11px] font-bold text-white/60 uppercase tracking-widest3 mt-2 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
