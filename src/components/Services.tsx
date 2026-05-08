import {
  TrendingUp,
  Home,
  Key,
  Hammer,
  Building2,
  Briefcase,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      "Réhabilitation complète et modernisation de biens pour augmenter leur valeur.",
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
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white">
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
            l'immobilier pour offrir des solutions clés en main.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`premium-card group border border-black/0 hover:border-accent/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{
                transitionDelay: visible ? `${index * 100}ms` : "0ms",
              }}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}