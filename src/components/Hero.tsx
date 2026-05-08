import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="/assets/slide-800.avif"
          srcSet="
            /assets/slide-527.avif 527w,
            /assets/slide-800.avif 800w,
            /assets/slide-1200.avif 1200w
          "
          sizes="100vw"
          width="1200"
          height="800"
          alt="slide"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div
        className="relative h-full flex flex-col justify-center items-center px-5 md:px-12 animate-hero-in"
        style={{ paddingTop: "var(--nav-h, 80px)" }}
      >
        <div className="w-full max-w-4xl text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Votre partenaire de confiance dans{" "}
            <em className="text-accent not-italic">l'investissement</em>{" "}
            immobilier
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-10 max-w-xl font-light leading-relaxed mx-auto">
            Expertise reconnue en acquisition, gestion et rénovation de biens
            d'exception.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">

            <a
              href="#services"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-accent/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Découvrir nos activités <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 flex items-center justify-center transition-colors duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Nous contacter
            </a>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
      </div>
    </section>
  );
}