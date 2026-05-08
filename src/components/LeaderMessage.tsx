import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LeaderMessage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current && entry.isIntersecting) {
            setLeftVisible(true);
          }
          if (entry.target === rightRef.current && entry.isIntersecting) {
            setRightVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div
            ref={leftRef}
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[3/4] sm:aspect-[4/4] lg:aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent/20 max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
              <img
                src="/assets/cicek.jpg"
                alt="Dirigeant Groupe Ugur Cicek"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>

          <div
            ref={rightRef}
            className={`lg:col-span-7 transition-all duration-700 ease-out ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Quote size={44} className="text-accent/30 mb-6" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-7 leading-relaxed">
              "Notre engagement est de bâtir une relation de confiance durable
              avec chaque partenaire, en plaçant l'intégrité et l'expertise au
              cœur de chaque projet immobilier que nous entreprenons."
            </h2>

            <div className="border-l-2 border-accent pl-5">
              <p className="text-lg sm:text-xl font-serif font-bold text-white">
                Ugur Cicek
              </p>
              <p className="text-accent text-sm uppercase tracking-widest font-semibold">
                Président Fondateur
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}