import { Home, Building2, Hammer, Layers, ChefHat, TreePine } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Construction Résidentielle',
    desc: "Maisons neuves, agrandissements, projets clé en main. Du premier plan jusqu'au dernier clou.",
  },
  {
    icon: Building2,
    title: 'Rénovation Commerciale',
    desc: 'Bureaux, commerces, entrepôts — transformation complète de vos espaces professionnels.',
  },
  {
    icon: Hammer,
    title: 'Charpente & Structure',
    desc: 'Ossature bois, murs porteurs, toiture — le gros œuvre exécuté avec précision.',
  },
  {
    icon: Layers,
    title: 'Finition Intérieure',
    desc: 'Gypse, planchers, boiseries, peinture — chaque détail soigné pour un résultat impeccable.',
  },
  {
    icon: ChefHat,
    title: 'Sous-sol & Cuisine',
    desc: 'Transformation de sous-sols et rénovation de cuisines — fonctionnel et esthétique.',
  },
  {
    icon: TreePine,
    title: 'Aménagement Extérieur',
    desc: "Terrasses, pergolas, escaliers extérieurs — prolongez votre espace de vie vers l'extérieur.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-[#1B1B1B]">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-5">
              Ce que nous faisons
            </span>
            <h2 className="font-display font-black text-white uppercase leading-[0.9] tracking-tightest2 text-5xl lg:text-6xl xl:text-7xl">
              Tous types
              <br />
              de <span className="text-[#ec7c33]">travaux.</span>
            </h2>
          </div>
          <p className="font-sans font-medium text-white/60 text-lg max-w-md leading-relaxed lg:text-right">
            Résidentiel ou commercial — on prend en charge vos projets du début à la fin.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#1B1B1B] p-8 lg:p-10 group hover:bg-[#242424] transition-colors duration-200"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center border border-[#ec7c33]/40 group-hover:border-[#ec7c33] group-hover:bg-[#ec7c33]/10 transition-all duration-200">
                  <Icon size={22} className="text-[#ec7c33]" />
                </div>
                <h3 className="font-display font-black text-white uppercase tracking-tightest3 text-xl lg:text-2xl mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans font-medium text-white/60 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
