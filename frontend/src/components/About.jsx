import { useRef, useEffect, useState } from "react";

const About = () => {
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
        <h1 className="font-bold text-4xl">About</h1>
      </div>

      {/* Paragraphe sous le titre */}
      <p className="mb-6">
        Student at Epitech and new to the world of full-stack development, discover my beginnings on this portfolio.
      </p>

      {/* Contenu avec image à gauche et texte à droite */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mb-4 md:mb-0">
          <img
            src="./src/assets/Nathan.jpg"
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="font-bold mb-4">
            I am an Epitech student and a full-stack developer apprentice.
          </p>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <p><span className="font-bold">Birthday:</span> 16/10/2004</p>
              <p>
                <span className="font-bold">CV:</span>{" "}
                <a
                  href="./src/assets/Nathan Bolyos.pdf"
                  download
                  className="text-blue-600 hover:underline"
                >
                  Download ⬇️
                </a>
              </p>
              <p><span className="font-bold">Phone:</span> 0708326585</p>
              <p><span className="font-bold">Certificate:</span> BTS CIEL</p>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <p><span className="font-bold">Age:</span> 21</p>
              <p><span className="font-bold">Email:</span> nathan.bolyos@gmail.com</p>
              <p><span className="font-bold">City:</span> Nantes</p>
              <p><span className="font-bold">Status:</span> Student</p>
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

export default About;
