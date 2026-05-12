import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Faites-vous des soumissions gratuites?',
    a: 'Oui — nous offrons une consultation et une soumission gratuites pour tous vos projets résidentiels et commerciaux. Contactez-nous pour fixer un rendez-vous.',
  },
  {
    q: 'Travaillez-vous sur des projets commerciaux?',
    a: 'Absolument. Construction LESCO prend en charge les projets résidentiels ET commerciaux — rénovation de bureaux, commerces, entrepôts et tout autre espace professionnel.',
  },
  {
    q: 'Quel type de travaux couvrez-vous?',
    a: 'Tous types : construction neuve, rénovation complète, charpente, finition intérieure (gypse, planchers, peinture), sous-sol, cuisine, et aménagement extérieur (terrasses, pergolas).',
  },
  {
    q: 'Gérez-vous les permis de construction?',
    a: 'Oui, nous accompagnons nos clients dans les démarches de permis selon les municipalités concernées et les exigences du projet.',
  },
  {
    q: 'Quels sont vos délais habituels?',
    a: "Les délais varient selon l'ampleur du projet. Nous établissons un calendrier clair dès la soumission et nous nous engageons à le respecter. Communication régulière tout au long des travaux.",
  },
  {
    q: 'Êtes-vous assurés et reconnus?',
    a: "Construction LESCO inc. opère selon les normes de l'industrie avec les assurances requises. N'hésitez pas à nous contacter pour toute question sur nos qualifications.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 lg:py-40 bg-[#1B1B1B]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-6">
              Questions fréquentes
            </span>
            <h2 className="font-display font-black text-white uppercase leading-[0.9] tracking-tightest2 text-4xl lg:text-5xl xl:text-6xl mb-8">
              On répond
              <br />
              à vos
              <br />
              <span className="text-[#ec7c33]">questions.</span>
            </h2>
            <p className="font-sans font-medium text-white/60 text-base leading-relaxed max-w-xs">
              Une question qui n'est pas ici? Appelez-nous directement ou écrivez-nous.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-2 border-[#ec7c33] text-[#ec7c33] hover:bg-[#ec7c33] hover:text-white font-display font-black text-sm uppercase tracking-widest2 px-6 py-3 transition-all duration-200"
            >
              Nous contacter
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                    aria-expanded={open === i}
                  >
                    <span
                      className={`font-display font-black uppercase tracking-tightest3 text-lg lg:text-xl transition-colors ${
                        open === i ? 'text-[#ec7c33]' : 'text-white group-hover:text-[#ec7c33]/80'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-[#ec7c33] transition-colors">
                      {open === i ? (
                        <Minus size={14} className="text-[#ec7c33]" />
                      ) : (
                        <Plus size={14} className="text-white/60" />
                      )}
                    </span>
                  </button>
                  {open === i && (
                    <div className="pb-6">
                      <p className="font-sans font-medium text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
