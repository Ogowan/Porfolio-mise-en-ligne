import { useRef, useEffect, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`dark:bg-gray-900 px-4 relative ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Nathan Bolyos
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#resume" className="hover:underline me-4 md:me-6">Resume</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline me-4 md:me-6">Portfolio</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <a className="hover:underline">Nathan Bolyos</a>. All Rights Reserved.
        </span>
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
    </footer>
  );
};

export default Footer;
