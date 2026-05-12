import { useState } from 'react'
import { Phone, Globe, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 lg:py-40 bg-[#111111]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — info */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold text-[#ec7c33] uppercase tracking-widest3 block mb-6">
              Contactez-nous
            </span>
            <h2 className="font-display font-black text-white uppercase leading-[0.9] tracking-tightest2 text-4xl lg:text-5xl xl:text-6xl mb-8">
              Parlons de
              <br />
              votre{' '}
              <span className="text-[#ec7c33]">projet.</span>
            </h2>
            <p className="font-sans font-medium text-white/60 text-lg leading-relaxed mb-10 max-w-sm">
              Soumission gratuite. Réponse rapide. On s'occupe de votre projet du début à la fin.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#ec7c33]/40 mt-0.5">
                  <Phone size={16} className="text-[#ec7c33]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest3 mb-1">
                    Téléphone
                  </div>
                  <a
                    href="tel:+15165031953"
                    className="font-display font-black text-white text-xl uppercase tracking-tightest3 hover:text-[#ec7c33] transition-colors"
                  >
                    (516) 503-1953
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#ec7c33]/40 mt-0.5">
                  <Globe size={16} className="text-[#ec7c33]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest3 mb-1">
                    Site web
                  </div>
                  <a
                    href="http://www.lescoconstruction.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-black text-white text-base uppercase tracking-tightest3 hover:text-[#ec7c33] transition-colors"
                  >
                    lescoconstruction.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#ec7c33]/10 border border-[#ec7c33] mb-6">
                  <ArrowRight size={24} className="text-[#ec7c33]" />
                </div>
                <h3 className="font-display font-black text-white uppercase text-2xl tracking-tightest3 mb-3">
                  Message envoyé!
                </h3>
                <p className="font-sans font-medium text-white/60 text-base max-w-xs">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] font-bold text-white/50 uppercase tracking-widest3 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#ec7c33] text-white font-sans font-bold text-lg px-5 py-4 outline-none transition-colors placeholder:text-white/25"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] font-bold text-white/50 uppercase tracking-widest3 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#ec7c33] text-white font-sans font-bold text-lg px-5 py-4 outline-none transition-colors placeholder:text-white/25"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-bold text-white/50 uppercase tracking-widest3 mb-2">
                    Courriel
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ec7c33] text-white font-sans font-bold text-lg px-5 py-4 outline-none transition-colors placeholder:text-white/25"
                    placeholder="votre@courriel.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-bold text-white/50 uppercase tracking-widest3 mb-2">
                    Description du projet
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ec7c33] text-white font-sans font-bold text-lg px-5 py-4 outline-none transition-colors placeholder:text-white/25 resize-none"
                    placeholder="Décrivez votre projet — type de travaux, superficie, délai souhaité..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#ec7c33] hover:bg-[#d06b25] text-white font-display font-black text-sm uppercase tracking-widest2 py-5 transition-colors duration-200"
                >
                  Envoyer la demande
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
      </div>
    </section>
  )
}
