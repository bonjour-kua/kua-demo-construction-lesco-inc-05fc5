const year = new Date().getFullYear()

const links = {
  Services: [
    { label: 'Construction Résidentielle', href: '#services' },
    { label: 'Rénovation Commerciale', href: '#services' },
    { label: 'Charpente & Structure', href: '#services' },
    { label: 'Finition Intérieure', href: '#services' },
    { label: 'Sous-sol & Cuisine', href: '#services' },
  ],
  Navigation: [
    { label: 'Réalisations', href: '#gallery' },
    { label: 'Notre processus', href: '#process' },
    { label: 'À propos', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  Contact: [
    { label: '(516) 503-1953', href: 'tel:+15165031953' },
    { label: 'lescoconstruction.net', href: 'http://www.lescoconstruction.net/' },
    { label: 'Soumission gratuite', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <div className="container-editorial py-16 lg:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <img src="/images/logo/logo-clean.png" alt="Construction LESCO inc." loading="eager" width="120" height="48" className="h-12 w-auto object-contain mb-4" />
            <div className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 mb-4">
              Construction LESCO inc.
            </div>
            <p className="font-sans font-medium text-white/50 text-sm leading-relaxed max-w-xs">
              Construction neuve et rénovation résidentielle et commerciale.
              Tous types de travaux, de A à Z.
            </p>
            <a
              href="tel:+15165031953"
              className="mt-6 inline-flex items-center gap-2 bg-[#ec7c33] hover:bg-[#d06b25] text-white font-display font-black text-xs uppercase tracking-widest2 px-5 py-3 transition-colors"
            >
              (516) 503-1953
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <div className="font-mono text-[11px] font-bold text-white/30 uppercase tracking-widest3 mb-5">
                {col}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-sans font-medium text-white/60 hover:text-[#ec7c33] text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] font-bold text-white/30 uppercase tracking-widest3">
            &copy; {year} Construction LESCO inc. — Tous droits réservés
          </p>
          <p className="font-mono text-[11px] font-bold text-white/20 uppercase tracking-widest3">
            Site par Küa
          </p>
        </div>
      </div>
    </footer>
  )
}
