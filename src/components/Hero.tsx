import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(80);

  useEffect(() => {
    const nav = document.getElementById("main-navbar");
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/slide.avif"
          alt="slide"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Clé du fix : padding-top = hauteur navbar, puis flex center dans l'espace restant */}
      <div
        className="relative h-full flex flex-col justify-center items-center px-5 md:px-12 pt-16 md:pt-0"
        style={{ paddingTop: `${navHeight}px` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-4xl text-center"
        >
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
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-accent/30"
            >
              Découvrir nos activités <ArrowRight size={15} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              Nous contacter
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
