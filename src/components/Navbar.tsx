import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Le Groupe", href: "#about" },
    { name: "Activités", href: "#services" },
    { name: "Opportunités", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-3">

      <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <div className="flex flex-col">
          <span className={`text-xl font-serif font-bold tracking-wider ${scrolled ? "text-primary" : "text-white"}`}>
            UGUR CICEK
          </span>
          <span className={`text-[10px] uppercase tracking-[0.3em] ${scrolled ? "text-accent" : "text-accent/80"}`}>
            GROUPE IMMOBILIER
          </span>
        </div>
        </div>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-primary" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-primary hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/5 flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <Phone size={16} />
                  <span> 84 53 15 56 </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <Mail size={16} />
                  <span>contact@ugurcicek.fr</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
