import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://www.instagram.com/nathan_bolyos/",
      icon: "/Porfolio-mise-en-ligne/assets/instagram.png",
      alt: "Instagram",
    },
    {
      href: "https://wa.me/33708326585",
      icon: "/Porfolio-mise-en-ligne/assets/whatsapp.png",
      alt: "WhatsApp",
    },
    {
      href: "https://github.com/Ogowan",
      icon: "/Porfolio-mise-en-ligne/assets/github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/nathan-bolyos-8b4b35384/",
      icon: "/Porfolio-mise-en-ligne/assets/assets/linkedin.png",
      alt: "LinkedIn",
    },
  ];

  const navLinks = ["home", "about", "resume", "portfolio", "services", "contact"];

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex bg-slate-900 text-white w-64 fixed top-0 left-0 h-screen p-5 flex-col z-50">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-800 rounded-full p-1">
            <img
              src="/Porfolio-mise-en-ligne/assets/assets/Nathan.jpg"
              alt="Avatar"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-center">Nathan Bolyos</h1>

        {/* Réseaux sociaux */}
        <ul className="flex gap-2 justify-center mb-6">
          {socialLinks.map(({ href, icon, alt }) => (
            <li key={alt}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="bg-white rounded-full border border-gray-300 w-10 h-10 overflow-hidden">
                  <img src={icon} alt={alt} className="w-full h-full object-cover" />
                </button>
              </a>
            </li>
          ))}
        </ul>

        {/* Liens de navigation */}
        <ul className="flex flex-col gap-4 w-full">
          {navLinks.map((section) => (
            <li key={section} className="text-center">
              <a
                href={`#${section}`}
                className="hover:bg-blue-500 p-2 rounded block"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-slate-900 text-white p-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold">Nathan Bolyos</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-slate-800 text-white p-4 z-40">
          {/* Réseaux sociaux */}
          <ul className="flex gap-4 justify-center mb-4">
            {socialLinks.map(({ href, icon, alt }) => (
              <li key={alt}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white rounded-full border border-gray-300 w-10 h-10 overflow-hidden">
                    <img src={icon} alt={alt} className="w-full h-full object-cover" />
                  </button>
                </a>
              </li>
            ))}
          </ul>

          {/* Liens de navigation */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:bg-blue-500 p-2 rounded block"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
