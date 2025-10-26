import { useRef, useEffect, useState } from "react";

const Contact = () => {
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
      className={`relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-6xl mx-auto text-left mb-6">
          <h1 className="font-bold text-4xl">Contact</h1>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.358848143146!2d-1.5561836845989244!3d47.21863797916162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eebc3a4e0b7f%3A0x5e6e8e3c4b9f1a5d!2sEpitech%20Nantes!5e0!3m2!1sfr!2sfr!4v1697040000000!5m2!1sfr!2sfr"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">
                    16 RUE DE FLANDRES DUNKERQUE<br />
                    44100 Nantes
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: nathan.bolyos@gmail.com</p>
                  <p className="mt-1 text-gray-600">Phone: 0708326585</p>
                </div>
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

export default Contact;
