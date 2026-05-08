import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const LeaderMessage = lazy(() => import("./components/LeaderMessage"));
const Diversification = lazy(() => import("./components/Diversification"));
const Contact = lazy(() => import("./components/Contact"));

const Toaster = lazy(() =>
  import("react-hot-toast").then((mod) => ({
    default: mod.Toaster,
  })),
);

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-black border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <Suspense fallback={null}>
        <Toaster position="top-right" />
      </Suspense>

      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LeaderMessage />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Diversification />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}