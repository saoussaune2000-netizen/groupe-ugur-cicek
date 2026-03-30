import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Parlons de <span className="italic">votre projet</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour étudier vos opportunités
            d'investissement et vous accompagner dans votre stratégie
            immobilière.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="premium-card">
              <h3 className="text-2xl font-serif mb-8">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      Téléphone
                    </p>
                    <p className="text-lg font-medium">+336 84 53 15 56</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-lg font-medium">contact@ugurcicek.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      Adresse
                    </p>
                    <p className="text-lg font-medium">
                      {" "}
                      4 Rue Vauban 67450 Mundolsheim Bas-Rhin,Alsace,FRANCE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden border border-black/5 shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.680491643802!2d7.712527175354586!3d48.63509586639605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b80ef71c840d%3A0x40b684388f0ce948!2s4%20Rue%20Vauban%2C%2067450%20Mundolsheim!5e0!3m2!1sfr!2sfr!4v1773529127969!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true} // ✅ ici il faut mettre {true} en JSX
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase est correct
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form
              className="premium-card h-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-surface border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jean@exemple.com"
                    className="w-full bg-surface border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                  Sujet
                </label>
                <select className="w-full bg-surface border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Investissement immobilier</option>
                  <option>Gestion de biens</option>
                  <option>Rénovation</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full bg-surface border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
              >
                Envoyer le message
                <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
