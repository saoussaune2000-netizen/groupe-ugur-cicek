import { Utensils, ExternalLink } from "lucide-react";

export default function Diversification() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-3xl overflow-hidden shadow-xl border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-56 sm:h-72 lg:h-auto lg:order-2">
              <img
                src="/assets/restaurant.avif"
                alt="Restaurant Le Cyrano"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Utensils className="text-accent" size={20} />
                </div>
                <span className="text-accent font-semibold tracking-widest uppercase text-xs">
                  Diversification
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif mb-5">
                Le Cyrano : <span className="italic">L'art de recevoir</span>
              </h2>

              <p className="text-gray-600 mb-7 leading-relaxed text-sm md:text-base">
                Parce que l'investissement est aussi une affaire de passion, le
                Groupe Ugur Cicek s'est diversifié dans le secteur de la
                restauration avec Le Cyrano. Un lieu d'exception où se mêlent
                gastronomie et convivialité, reflétant nos valeurs d'excellence.
              </p>

              <a
                href="https://www.lecyrano.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300 ease-out w-fit text-sm md:text-base hover:scale-[1.02] active:scale-[0.98] transform"
              >
                Découvrir le restaurant
                <ExternalLink
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
