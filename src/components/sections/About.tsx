import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-[#FAFAF8]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <img src="/images/hero/fb-photo-29.jpg" alt="Maison avec garage réalisée par Construction LESCO inc." loading="lazy" width="800" height="1000" className="w-full aspect-[4/5] object-cover object-center" />
              <div className="absolute bottom-4 right-4 w-28 h-28 lg:w-36 lg:h-36 border-4 border-[#FAFAF8] overflow-hidden hidden lg:block">
                <img src="/images/hero/fb-photo-2.jpg" alt="Construction résidentielle LESCO" loading="lazy" width="144" height="144" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 left-0 bg-[#ec7c33] px-5 py-3">
                <div className="font-mono text-xs font-bold text-white uppercase tracking-widest3">Résidentiel &amp; Commercial</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-6">Qui sommes-nous</span>
            <h2 className="font-display font-black text-[#1B1B1B] uppercase leading-[0.9] tracking-tightest2 text-5xl lg:text-6xl xl:text-7xl mb-8">
              Votre projet,<br />notre <span className="text-[#ec7c33]">métier.</span>
            </h2>
            <p className="font-sans font-medium text-[#1B1B1B]/75 text-lg leading-relaxed mb-6 max-w-prose">
              Construction LESCO inc. est une entreprise spécialisée en construction neuve et rénovation pour tout type de projet résidentiel et commercial.
            </p>
            <p className="font-sans font-medium text-[#1B1B1B]/75 text-lg leading-relaxed mb-10 max-w-prose">
              De la charpente à la finition intérieure — sous-sol, cuisine, aménagement extérieur — nous prenons en charge chaque étape avec rigueur et professionnalisme, du premier coup de marteau à la livraison finale.
            </p>
            <ul className="space-y-3 mb-10">
              {['Construction neuve résidentielle et commerciale', 'Rénovation complète — gros œuvre et finition', 'Charpente, intérieur, sous-sol, cuisine', 'Prise en charge de A à Z'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#ec7c33] shrink-0" />
                  <span className="font-sans font-medium text-[#1B1B1B]/80 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 font-display font-black text-sm uppercase tracking-widest2 text-[#1B1B1B] border-b-2 border-[#ec7c33] pb-0.5 hover:text-[#ec7c33] transition-colors">
              Discuter de votre projet <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
