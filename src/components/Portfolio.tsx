import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import type { MouseEvent } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Résidentiel Haut de Gamme",
    location: "Paris & Île-de-France",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6cbe?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop"
    ],
    type: "Résidentiel",
    year: "2023",
    description: "Réhabilitation complète d'un immeuble haussmannien en appartements de luxe. Ce projet a nécessité une expertise particulière en conservation du patrimoine tout en intégrant des technologies modernes de domotique et d'efficacité énergétique.",
  },
  {
    id: 2,
    title: "Complexes de Bureaux",
    location: "Secteurs Tertiaires",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop"
    ],
    type: "Commercial",
    year: "2022",
    description: "Développement d'un pôle tertiaire innovant axé sur le bien-être au travail. Espaces modulables, jardins suspendus et certification BREEAM Excellent. Un investissement stratégique répondant aux nouveaux besoins des entreprises post-pandémie.",
  },
  {
    id: 3,
    title: "Rénovations Historiques",
    location: "Centres-Villes",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918766775-d56a17700772?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2070&auto=format&fit=crop"
    ],
    type: "Rénovation",
    year: "2021",
    description: "Restauration d'un ancien hôtel particulier. Nous avons redonné vie à des éléments architecturaux d'époque tout en créant des espaces de vie contemporains et raffinés. Un projet emblématique de notre savoir-faire en rénovation d'exception.",
  },
  {
    id: 4,
    title: "Locaux Commerciaux",
    location: "Zones Dynamiques",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    ],
    type: "Bureaux",
    year: "2024",
    description: "Optimisation et gestion d'un portefeuille de locaux commerciaux en centre-ville. Notre approche combine analyse de flux, sélection rigoureuse des enseignes et valorisation technique des surfaces pour garantir un rendement pérenne.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
              Opportunités
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Nos projets et <br />
              <span className="text-accent italic">opportunités</span> d'investissement
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            Découvrez une sélection de nos réalisations et les types de biens sur lesquels nous intervenons régulièrement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-2xl font-serif text-white mb-1">{project.title}</h3>
                <p className="text-white/60 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Image Gallery */}
              <div className="relative lg:w-2/3 bg-black flex items-center justify-center group/gallery h-[40vh] lg:h-auto">
                <img
                  key={currentImageIndex}
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all opacity-0 group-hover/gallery:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all opacity-0 group-hover/gallery:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 flex gap-2">
                  {selectedProject.gallery.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-accent w-6" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/3 p-8 lg:p-12 overflow-y-auto flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2 block">
                      {selectedProject.type}
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-primary">{selectedProject.title}</h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-surface rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-gray-500">
                    <MapPin size={20} className="text-accent" />
                    <span className="text-sm">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <Calendar size={20} className="text-accent" />
                    <span className="text-sm">Réalisation : {selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <Building2 size={20} className="text-accent" />
                    <span className="text-sm">Type : {selectedProject.type}</span>
                  </div>
                </div>

                <div className="prose prose-slate prose-sm max-w-none">
                  <h4 className="text-primary font-serif font-bold mb-4">Description du projet</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto pt-10">
                  <button
                    onClick={() => {
                      closeModal();
                      window.location.href = "#contact";
                    }}
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent/90 transition-all"
                  >
                    Investir dans un projet similaire
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
