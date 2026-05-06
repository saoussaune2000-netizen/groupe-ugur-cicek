import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"mentions" | "privacy" | null>(
    null,
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const legalContent = {
    mentions: {
      title: "Mentions Légales",
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold">Siège social</h3>
            <p>Groupe Ugur Cicek</p>
            <p>Ugur Cicek</p>
            <p>Adresse : 4 Rue Vauban, 67450 Mundolsheim, France</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Tél. : +33 9 50 56 64 89</p>
            <p>+33 6 84 53 15 56</p>
            <p>Email : contact@ugurcicek.fr</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Représentant légal</h3>
            <p>Ugur Cicek</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">
              Inscription au registre du commerce et des sociétés
            </h3>
            <p>Numéro : 914 228 804 00011</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Immatriculation</h3>
            <p>Numéro TVA : FR75914228804</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">TVA intracommunautaire</h3>
            <p>FR75914228804</p>
          </section>
        </div>
      ),
    },

    privacy: {
      title: "Politique de Confidentialité",
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold">Contrôleur de données</h3>
            <p>Ugur Cicek</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Adresse</h3>
            <p>4 Rue Vauban, 67450 Mundolsheim, France</p>
          </section>

          <section>
            <h3 className="text-lg font-bold">
              Données personnelles collectées
            </h3>
            <p>Nous pouvons collecter les informations suivantes :</p>
            <ul className="list-disc pl-5">
              <li>Nom et prénom</li>
              <li>Email</li>
              <li>Téléphone</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold">Objectif de la collecte</h3>
            <p>Les données sont utilisées pour :</p>
            <ul className="list-disc pl-5">
              <li>Répondre aux demandes</li>
              <li>Suivi client</li>
              <li>Amélioration des services</li>
            </ul>
          </section>
        </div>
      ),
    },
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-wider">
                UGUR CICEK
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-300">
                {" "}
                GROUPE IMMOBILIER
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Expertise en investissement et gestion immobilière depuis 1994.
              Votre partenaire de confiance pour bâtir votre patrimoine.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-serif mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  Le Groupe
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Nos Activités
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-accent transition-colors"
                >
                  Opportunités
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif mb-6">Expertises</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Investissement</li>
              <li>Gestion Locative</li>
              <li>Rénovation</li>
              <li>Conseil Stratégique</li>
              <li>Immobilier Commercial</li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6">Siège Social</h4>
            <p className="text-white/60 text-sm mb-4">
              4 Rue Vauban 67450 Mundolsheim
              <br />
              Bas-Rhin,Alsace,FRANCE
            </p>
            <p className="text-white/60 text-sm">
              T: +33 9 50 56 64 89
              <br />
              E: contact@ugurcicek.fr
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Groupe Ugur Cicek. Tous droits
            réservés.
          </p>
          <div className="flex space-x-6 text-white/40 text-xs">
            <button
              onClick={() => setActiveModal("mentions")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Mentions Légales
            </button>
            <button
              onClick={() => setActiveModal("privacy")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </button>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut de page"
            className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all group"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>

      <LegalModal
        isOpen={activeModal === "mentions"}
        onClose={() => setActiveModal(null)}
        title={legalContent.mentions.title}
        content={legalContent.mentions.content}
      />
      <LegalModal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title={legalContent.privacy.title}
        content={legalContent.privacy.content}
      />
    </footer>
  );
}
