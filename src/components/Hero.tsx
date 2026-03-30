import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import slide from "../assets/slide.avif";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
         src={slide} 
         alt="slide"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative h-full min-h-screen max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center pt-32 pb-20">

<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="max-w-4xl mt-3 md:mt-5 text-center"
>

  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
    Votre partenaire de confiance dans <br />
    <span className="text-accent">l'investissement</span> immobilier
  </h1>

  <p className="text-lg md:text-xl text-white/80 mb-7 max-w-2xl font-light leading-relaxed mx-auto">
    Le Groupe Ugur Cicek accompagne vos projets immobiliers avec une expertise reconnue dans l'investissement,
    la gestion et la rénovation de biens d'exception.
  </p>

  <div className="flex flex-row gap-2 justify-center flex-wrap">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#services"
    className="bg-accent text-white px-4 py-2 sm:px-10 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-accent/20"
  >
    Découvrir nos activités
    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#contact"
    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 sm:px-10 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/20 flex items-center justify-center"
  >
    Nous contacter
  </motion.a>
</div>

</motion.div>
</div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
