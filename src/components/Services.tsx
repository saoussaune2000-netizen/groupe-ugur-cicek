import { motion } from "motion/react";
import { TrendingUp, Home, Key, Hammer, Building2, Briefcase } from "lucide-react";

const services = [
  {
    icon: <TrendingUp className="text-accent" size={32} />,
    title: "Investissement immobilier",
    description: "Stratégies d'acquisition ciblées pour maximiser votre rendement et valoriser votre patrimoine.",
  },
  {
    icon: <Home className="text-accent" size={32} />,
    title: "Achat de biens",
    description: "Recherche et acquisition de biens immobiliers à fort potentiel sur des secteurs stratégiques.",
  },
  {
    icon: <Key className="text-accent" size={32} />,
    title: "Vente de biens",
    description: "Accompagnement complet dans la cession de vos actifs immobiliers au meilleur prix du marché.",
  },
  {
    icon: <Hammer className="text-accent" size={32} />,
    title: "Rénovation immobilière",
    description: "Réhabilitation complète et modernisation de biens pour augmenter leur valeur d'usage et vénale.",
  },
  {
    icon: <Building2 className="text-accent" size={32} />,
    title: "Gestion de biens",
    description: "Gestion locative et technique rigoureuse pour une sérénité totale des propriétaires.",
  },
  {
    icon: <Briefcase className="text-accent" size={32} />,
    title: "Conseil en investissement",
    description: "Expertise juridique, fiscale et financière pour optimiser vos placements immobiliers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            Nos Activités
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Une offre de services <span className="italic">complète</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Le Groupe Ugur Cicek déploie son expertise sur tous les aspects de l'immobilier 
            pour offrir des solutions clés en main à ses partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
