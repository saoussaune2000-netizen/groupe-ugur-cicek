import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import LeaderMessage from "./components/LeaderMessage";
import Diversification from "./components/Diversification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <About />
          <Services />
          <Portfolio />
          <LeaderMessage />
          <Diversification />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
