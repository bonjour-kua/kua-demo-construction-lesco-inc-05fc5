const steps = [
  {
    num: '01',
    title: 'Consultation & Devis',
    desc: "On analyse votre projet, on visite le chantier si nécessaire et on vous remet une soumission claire et détaillée — sans surprise.",
  },
  {
    num: '02',
    title: 'Réalisation',
    desc: "Notre équipe prend en charge les travaux de A à Z. Communication régulière, respect des délais, qualité d'exécution à chaque étape.",
  },
  {
    num: '03',
    title: 'Livraison',
    desc: "On remet les clés d'un chantier propre et terminé. Votre satisfaction est notre seul critère de réussite.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-[#111111]">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-5">
            Comment on travaille
          </span>
          <h2 className="font-display font-black text-white uppercase leading-[0.9] tracking-tightest2 text-5xl lg:text-6xl xl:text-7xl">
            Simple.{' '}
            <span className="text-[#ec7c33]">Direct.</span>
            <br />
            Livré.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="font-mono font-bold text-[#ec7c33] text-7xl lg:text-8xl tracking-widest2 leading-none mb-6 lg:mb-8 opacity-80">
                {step.num}
              </div>
              <h3 className="font-display font-black text-white uppercase tracking-tightest3 text-2xl lg:text-3xl mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="font-sans font-medium text-white/60 text-base lg:text-lg leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 lg:mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="font-sans font-medium text-white/60 text-lg">
            Prêt à démarrer votre projet?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ec7c33] hover:bg-[#d06b25] text-white font-display font-black text-sm uppercase tracking-widest2 px-8 py-4 transition-colors duration-200"
          >
            Obtenir une soumission gratuite
          </a>
        </div>
      </div>
    </section>
  )
}
