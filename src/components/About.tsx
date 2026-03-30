import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
              Notre Histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Une expertise bâtie sur <br />
              <span className="text-accent italic">trois décennies</span> d'expérience
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Fondé en 1994, le Groupe Ugur Cicek s'est imposé comme un acteur incontournable du secteur immobilier. 
                Notre parcours est marqué par une volonté constante d'excellence et une vision stratégique de l'investissement.
              </p>
              <p>
                Nous intervenons sur l'ensemble de la chaîne de valeur immobilière : de l'acquisition stratégique à la 
                gestion locative, en passant par la rénovation lourde et le développement de projets neufs.
              </p>
              <p>
                Notre force réside dans notre capacité à identifier les opportunités à fort potentiel et à les transformer 
                en actifs pérennes et rentables pour nos partenaires et investisseurs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-serif text-accent mb-1">1994</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Année de création</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent mb-1">30+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Ans d'expertise</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Real Estate Professional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-2xl hidden md:block">
              <p className="text-white font-serif text-2xl italic">"L'immobilier est une question de vision et de confiance."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
