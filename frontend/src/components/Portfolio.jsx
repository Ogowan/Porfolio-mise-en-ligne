import { useState, useRef, useEffect } from "react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      category: "Wantjob.com",
      images: ["/assets/1.png", "/assets/2.png", "/assets/3.png"],
    },
    {
      id: 2,
      category: "Hoodie.com",
      images: ["/assets/4.png", "/assets/5.png", "/assets/6.png"],
    },
    {
      id: 3,
      category: "Coffejob",
      images: ["/assets/7.png", "/assets/8.png", "/assets/9.png"],
    },
    {
      id: 4,
      category: " ",
      images: ["/assets/10.png", "/assets/11.png", "/assets/12.png"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 px-4 text-center relative ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto text-left mb-6">
        <h1 className="font-bold text-4xl">Portfolio</h1>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 capitalize">{project.category}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="w-[400px] h-[384px] rounded shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  if (window.innerWidth >= 768) {
                    setSelectedImage(img);
                  }
                }}
              >
                <img
                  src={img}
                  alt={`project-${project.id}-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Agrandissement de l'image (désactivé sur mobile) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-4xl max-h-[85vh] rounded shadow-2xl"
          />
        </div>
      )}

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

export default Portfolio;
