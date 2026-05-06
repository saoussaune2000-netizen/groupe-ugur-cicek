import { motion } from "motion/react";
import {
  TrendingUp,
  Home,
  Key,
  Hammer,
  Building2,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: <TrendingUp className="text-accent" size={28} />,
    title: "Investissement immobilier",
    description:
      "Stratégies d'acquisition ciblées pour maximiser votre rendement et valoriser votre patrimoine.",
  },
  {
    icon: <Home className="text-accent" size={28} />,
    title: "Achat de biens",
    description:
      "Recherche et acquisition de biens immobiliers à fort potentiel sur des secteurs stratégiques.",
  },
  {
    icon: <Key className="text-accent" size={28} />,
    title: "Vente de biens",
    description:
      "Accompagnement complet dans la cession de vos actifs immobiliers au meilleur prix du marché.",
  },
  {
    icon: <Hammer className="text-accent" size={28} />,
    title: "Rénovation immobilière",
    description:
      "Réhabilitation complète et modernisation de biens pour augmenter leur valeur d'usage et vénale.",
  },
  {
    icon: <Building2 className="text-accent" size={28} />,
    title: "Gestion de biens",
    description:
      "Gestion locative et technique rigoureuse pour une sérénité totale des propriétaires.",
  },
  {
    icon: <Briefcase className="text-accent" size={28} />,
    title: "Conseil en investissement",
    description:
      "Expertise juridique, fiscale et financière pour optimiser vos placements immobiliers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            Nos Activités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-5">
            Une offre de services <span className="italic">complète</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Le Groupe Ugur Cicek déploie son expertise sur tous les aspects de
            l'immobilier pour offrir des solutions clés en main à ses
            partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-black/0 hover:border-accent/10"
            >
              <div className="mb-5 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
