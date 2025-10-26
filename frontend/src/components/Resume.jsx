import { useRef, useEffect, useState } from "react";

const Resume = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white text-black p-4 relative ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Titre aligné avec les colonnes */}
      <div className="max-w-6xl mx-auto text-left mb-6">
        <h1 className="font-bold text-4xl">Resume</h1>
      </div>

      {/* Grille à deux colonnes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne gauche : Parcours scolaire */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>
              • Bac Melec – Lycée Monge la Chauvignère, Nantes  
              <br /><br />
              • BTS CIEL – Lycée Livet, Nantes  
              <br /><br />
              • Master of Science – Epitech, Nantes 
            </p>
          </div>
        </div>

        {/* Colonne droite : Expérience professionnelle */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>
              • Internship at La Regional Design Office (2 months in 2022)  
              <br />
              Design of architectural plans and study of electronic and IT devices including network bays.
              <br /><br />
              • Internship – Technical Assistant at Legrand (1 month in 2021)  
              <br />
              Creation of electrical panel mockups, testing, and discovery of smart home devices.
              <br /><br />
              • Internship – Electrician at Loelec (2020)  
              <br />
              Installation of electrical and smart home devices, discovery of the professional work environment.
            </p>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
