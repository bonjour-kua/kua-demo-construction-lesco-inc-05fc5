export default function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-40 bg-[#FAFAF8]">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-5">Nos réalisations</span>
            <h2 className="font-display font-black text-[#1B1B1B] uppercase leading-[0.9] tracking-tightest2 text-5xl lg:text-6xl xl:text-7xl">
              Des projets<br />qui <span className="text-[#ec7c33]">parlent.</span>
            </h2>
          </div>
          <p className="font-sans font-medium text-[#1B1B1B]/60 text-lg max-w-sm leading-relaxed">
            Résidentiel, commercial, intérieur, extérieur — chaque projet livré avec le même soin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <figure className="relative overflow-hidden group lg:row-span-2">
            <img src="/images/gallery/fb-photo-7.jpg" alt="Aire ouverte avec escalier et cuisine" loading="eager" width="800" height="1067" className="w-full h-64 md:h-80 lg:h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-4 text-white font-mono text-[11px] uppercase tracking-widest3">Aire ouverte avec escalier</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-50.jpg" alt="Salon avec foyer en bois et escalier" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Salon avec foyer</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-27.jpg" alt="Cuisine et séjour en aire ouverte" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cuisine et séjour</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-4.jpg" alt="Cuisine complétée avec mini-split" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cuisine complétée</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-31.jpg" alt="Terrasse composite avec rampe" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Terrasse composite</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-32.jpg" alt="Grande terrasse avec pergola et brise-vue" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Terrasse avec pergola</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-34.jpg" alt="Intérieur aire ouverte plancher bois franc" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Intérieur aire ouverte</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-41.jpg" alt="Sous-sol avec plancher époxy marbré" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sous-sol époxy marbré</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-42.jpg" alt="Chambre avec mur accent marine et plancher bois" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Chambre finition soignée</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-30.jpg" alt="Construction tour boisée en forêt" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Structure boisée</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-5.jpg" alt="Plancher époxy et spots encastrés" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Plancher époxy</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-9.jpg" alt="Sous-sol avec armoires blanches sur époxy" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sous-sol armoires blanches</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-37.jpg" alt="Réalisation extérieure Construction LESCO" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Réalisation extérieure</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-38.jpg" alt="Pièce utilitaire finalisée armoires blanches époxy" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Pièce utilitaire</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-45.jpg" alt="Pièce semi-finalisée plancher époxy marbré spots encastrés" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Finition époxy</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-17.jpg" alt="Sous-sol rénové avec finition soignée" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sous-sol rénové</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-20.jpg" alt="Pièce rénovée plancher époxy finition" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Rénovation complète</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-21.jpg" alt="Intérieur cuisine et séjour rénové" loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cuisine rénovée</figcaption>
          </figure>
          <figure className="relative overflow-hidden group">
            <img src="/images/hero/fb-photo-15.jpg" alt="Maison résidentielle construite par Construction LESCO inc." loading="lazy" width="800" height="600" className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/90 to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-widest3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Construction résidentielle</figcaption>
          </figure>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white text-[#1B1B1B] font-display font-black text-sm uppercase tracking-widest2 px-8 py-4 transition-all duration-200">
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}
