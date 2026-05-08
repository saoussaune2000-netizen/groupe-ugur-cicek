import { useState, useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Résidentiel Haut de Gamme",
    location: "Strasbourg",
    image: "/assets/home1.avif",
    gallery: ["/assets/home1.avif", "/assets/home11.avif"],
    type: "Résidentiel",
    year: "2023",
    description:
      "Réhabilitation complète d'un immeuble haussmannien en appartements de luxe. Ce projet a nécessité une expertise particulière en conservation du patrimoine tout en intégrant des technologies modernes de domotique et d'efficacité énergétique.",
  },
  {
    id: 2,
    title: "Complexes de Bureaux",
    location: "Secteurs Tertiaires",
    image: "/assets/home2.avif",
    gallery: [
      "/assets/home2.avif",
      "/assets/home21.avif",
      "/assets/home22.avif",
    ],
    type: "Commercial",
    year: "2022",
    description:
      "Développement d'un pôle tertiaire innovant axé sur le bien-être au travail. Espaces modulables, jardins suspendus et certification BREEAM Excellent. Un investissement stratégique répondant aux nouveaux besoins des entreprises post-pandémie.",
  },
  {
    id: 3,
    title: "Rénovations Historiques",
    location: "Centres-Villes",
    image: "/assets/home3.avif",
    gallery: ["/assets/home3.avif", "/assets/home31.avif"],
    type: "Rénovation",
    year: "2021",
    description:
      "Restauration d'un ancien hôtel particulier. Nous avons redonné vie à des éléments architecturaux d'époque tout en créant des espaces de vie contemporains et raffinés. Un projet emblématique de notre savoir-faire en rénovation d'exception.",
  },
  {
    id: 4,
    title: "Locaux Commerciaux",
    location: "Zones Dynamiques",
    image: "/assets/home4.avif",
    gallery: [
      "/assets/home4.avif",
      "/assets/home41.avif",
      "/assets/home42.avif",
    ],
    type: "Bureaux",
    year: "2024",
    description:
      "Optimisation et gestion d'un portefeuille de locaux commerciaux en centre-ville. Notre approche combine analyse de flux, sélection rigoureuse des enseignes et valorisation technique des surfaces pour garantir un rendement pérenne.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = "auto";
    }, 300);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedProject)
      setCurrentImageIndex((p) => (p + 1) % selectedProject.gallery.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedProject)
      setCurrentImageIndex(
        (p) => (p - 1 + selectedProject.gallery.length) % selectedProject.gallery.length,
      );
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
              <span className="text-accent italic">opportunités</span>{" "}
              d'investissement
            </h2>
          </div>
          <p className="text-gray-700 max-w-sm">
            Découvrez une sélection de nos réalisations et les types de biens
            sur lesquels nous intervenons régulièrement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="portfolio-card relative group overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
              style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              onClick={() => openModal(project)}
            >
              <img
                src={project.image.replace(".avif", "-800.avif")}
                srcSet={`
                  ${project.image.replace(".avif", "-527.avif")} 527w,
                  ${project.image.replace(".avif", "-800.avif")} 800w,
                  ${project.image.replace(".avif", "-1200.avif")} 1200w
                `}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-2xl font-serif text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className={`modal-backdrop absolute inset-0 bg-black/90 backdrop-blur-md ${modalVisible ? "modal-backdrop--in" : "modal-backdrop--out"}`}
            onClick={closeModal}
          />
          <div
            className={`modal-panel relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] ${modalVisible ? "modal-panel--in" : "modal-panel--out"}`}
          >
            <div className="relative lg:w-2/3 bg-black flex items-center justify-center group/gallery h-[40vh] lg:h-auto">
              <img
                key={currentImageIndex}
                src={selectedProject.gallery[currentImageIndex]}
                alt={selectedProject.title}
                className="modal-img w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

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

              <div className="absolute bottom-6 flex gap-2">
                {selectedProject.gallery.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-accent w-6" : "bg-white/40 w-2"}`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 p-8 lg:p-12 overflow-y-auto flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-2 block">
                    {selectedProject.type}
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-primary">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-surface rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-gray-700">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-sm">{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Calendar size={20} className="text-accent" />
                  <span className="text-sm">Réalisation : {selectedProject.year}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Building2 size={20} className="text-accent" />
                  <span className="text-sm">Type : {selectedProject.type}</span>
                </div>
              </div>

              <div className="prose prose-slate prose-sm max-w-none">
                <h4 className="text-primary font-serif font-bold mb-4">
                  Description du projet
                </h4>
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
                  className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold hover:bg-accent/90 transition-all"
                >
                  Investir dans un projet similaire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}