import { useRef, useEffect, useState } from "react";

const Logiciel = () => {
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
    <section
      ref={sectionRef}
      className={`bg-white text-black p-8 max-w-6xl mx-auto mt-8 relative ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Titre de la section */}
      <div className="max-w-6xl mx-auto text-left mb-6">
        <h1 className="font-bold text-4xl">Software</h1>
      </div>

      {/* Texte + colonnes */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="font-bold mb-4">
          The different software used at the beginning of my Pre-MSc.
        </p>

        <div className="flex gap-4 flex-wrap">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 flex-1">
            {/* GitHub */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-gray-600">
                  Code hosting and collaboration platform for developers.
                </p>
              </div>
              <img
                src="/src/assets/github(3).png"
                alt="GitHub"
                className="w-1/2 h-full object-contain"
              />
            </div>

            {/* IntelliJ IDEA */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">IntelliJ IDEA</h3>
                <p className="text-sm text-gray-600">
                  Powerful IDE for Java and other programming languages.
                </p>
              </div>
              <img
                src="/src/assets/IntelliJ_IDEA_Icon.svg.png"
                alt="IntelliJ IDEA"
                className="w-1/2 h-full object-contain"
              />
            </div>

            {/* Visual Studio Code */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">Visual Studio Code</h3>
                <p className="text-sm text-gray-600">
                  Lightweight and extensible code editor for all languages.
                </p>
              </div>
              <img
                src="/src/assets/Visual_Studio_Code_1.35_icon.svg"
                alt="VS Code"
                className="w-1/2 h-full object-contain"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl font-bold invisible">Framework</h2>

            {/* React */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <img
                src="/src/assets/react.svg"
                alt="React"
                className="w-1/2 h-full object-contain"
              />
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">React</h3>
                <p className="text-sm text-gray-600">
                  JavaScript library for building interactive user interfaces.
                </p>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <img
                src="/src/assets/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="w-1/2 h-full object-contain"
              />
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">Tailwind CSS</h3>
                <p className="text-sm text-gray-600">
                  Utility-first CSS framework for fast and responsive design.
                </p>
              </div>
            </div>

            {/* MySQL Workbench */}
            <div className="flex items-center bg-white rounded h-32 overflow-hidden">
              <img
                src="/src/assets/Mysql.png"
                alt="MySQL Workbench"
                className="w-1/2 h-full object-contain"
              />
              <div className="w-1/2 p-4">
                <h3 className="font-semibold">MySQL Workbench</h3>
                <p className="text-sm text-gray-600">
                  Unified visual tool for database architects and developers.
                </p>
              </div>
            </div>
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
    </section>
  );
};

export default Logiciel;
