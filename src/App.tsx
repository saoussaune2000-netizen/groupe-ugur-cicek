import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Toaster } from "react-hot-toast";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const LeaderMessage = lazy(() => import("./components/LeaderMessage"));
const Diversification = lazy(() => import("./components/Diversification"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster position="top-right" />

      <main>
        <Hero />

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}