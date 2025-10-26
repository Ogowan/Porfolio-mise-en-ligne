import { useRef, useEffect, useState } from "react";

const Skills = () => {
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
        <h1 className="font-bold text-4xl">Skills</h1>
      </div>

      {/* Grille des compétences */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Colonne 1 */}
        <div className="space-y-4">
          <SkillBar name="HTML" percent={90} />
          <SkillBar name="CSS-Tailwind" percent={80} />
          <SkillBar name="Python" percent={70} />
        </div>

        {/* Colonne 2 */}
        <div className="space-y-4">
          <SkillBar name="JavaScript" percent={50} />
          <SkillBar name="Java" percent={60} />
          <SkillBar name="Bash" percent={60} />
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

const SkillBar = ({ name, percent }) => {
  const getColor = (percent) => {
    if (percent <= 25) return '#f87171'; // Rouge clair
    if (percent <= 50) return '#fbbf24'; // Orange
    if (percent <= 75) return '#4ade80'; // Vert
    return '#166534'; // Vert foncé
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between w-full mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full max-w-full md:max-w-lg bg-gray-300 rounded-full h-6">
        <div
          className="h-6 rounded-full transition-all duration-1000"
          style={{
            width: `${percent}%`,
            backgroundColor: getColor(percent),
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
