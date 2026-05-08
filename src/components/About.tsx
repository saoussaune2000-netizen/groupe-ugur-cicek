import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    if (textRef.current)  observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div ref={textRef} className="about-text">
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
          </div>

          <div ref={imageRef} className="about-image relative mt-4 lg:mt-0">
            <div className="aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/home-800.avif"
                srcSet="
                  /assets/home-527.avif  527w,
                  /assets/home-900.avif  900w,
                  /assets/home-1200.avif 1200w
                "
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Real Estate Professional"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-accent p-5 md:p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-white font-serif text-base md:text-xl italic">
                "L'immobilier est une question de vision et de confiance."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}