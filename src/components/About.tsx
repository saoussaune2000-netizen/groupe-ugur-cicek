import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
              Notre Histoire
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
              Une expertise bâtie sur{" "}
              <span className="text-accent italic">trois décennies</span>{" "}
              d'expérience
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Fondé en 1994, le Groupe Ugur Cicek s'est imposé comme un acteur
                incontournable du secteur immobilier. Notre parcours est marqué
                par une volonté constante d'excellence et une vision stratégique
                de l'investissement.
              </p>
              <p>
                Nous intervenons sur l'ensemble de la chaîne de valeur
                immobilière : de l'acquisition stratégique à la gestion
                locative, en passant par la rénovation lourde et le
                développement de projets neufs.
              </p>
              <p>
                Notre force réside dans notre capacité à identifier les
                opportunités à fort potentiel et à les transformer en actifs
                pérennes et rentables pour nos partenaires et investisseurs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent mb-1">
                  1994
                </div>
                <div className="text-xs md:text-sm text-gray-700 uppercase tracking-wider">
                  Année de création
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent mb-1">
                  30+
                </div>
                <div className="text-xs md:text-sm text-gray-700 uppercase tracking-wider">
                  Ans d'expertise
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-4 lg:mt-0"
          >
            {/* Image réduite sur mobile pour éviter qu'elle prenne trop de place */}
            <div className="aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/home.avif"
                alt="Real Estate Professional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Citation visible uniquement à partir de md */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-accent p-5 md:p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-white font-serif text-base md:text-xl italic">
                "L'immobilier est une question de vision et de confiance."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
