const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white w-65  top-0 left-0 h-screen fixed p-5 flex flex-col ">

      <div className="w-full flex justify-center">
        {/* Cercle extérieur */}
        <div className="bg-gray-800 rounded-full justify-center p-1">
          {/* Cercle intérieur avec image */}
          <img
            src="/src/assets/Nathan.jpg"
            alt="Avatar"
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
      </div>


      <h1 className=" text-3xl font-bold mb-2">Nathan Bolyos</h1>

      <div className="w-full flex justify-center">
        {/* Cercle extérieur */}
        <div className="justify-center p-1">
          {/* Cercle intérieur avec image */}
          <ul className="flex gap-2">
            <li>
              <a
                href="https://www.instagram.com/nathan_bolyos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-400 border-1 rounded-full w-10 h-10 overflow-hidden">
                  <img
                    src="/src/assets/instagram.png"
                    alt="Instagram"
                    className="w-full h-full object-cover"
                  />
                </button>
              </a>

            </li>
            <li>
              <a
                href="https://wa.me/33708326585"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white rounded-full border border-gray-300 w-10 h-10 overflow-hidden">
                  <img
                    src="/src/assets/whatsapp.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover"
                  />
                </button>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Ogowan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white rounded-full border border-gray-300 w-10 h-10 overflow-hidden">
                  <img
                    src="/src/assets/github.png"
                    alt="GitHub"
                    className="w-full h-full object-cover"
                  />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nathan-bolyos-8b4b35384/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white rounded-full border border-gray-300 w-10 h-10 overflow-hidden">
                  <img
                    src="/src/assets/linkedin.png"
                    alt="LinkedIn"
                    className="w-full h-full object-cover"
                  />
                </button>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <ul className="flex flex-col gap-4 w-full">
        <li className="w-full text-center">
          <a href="#home" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">Home</a>
        </li>
        <li className="w-full text-center">
          <a href="#about" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">About</a>
        </li>
        <li className="w-full text-center">
          <a href="#resume" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">Resume</a>
        </li>
        <li className="w-full text-center">
          <a href="#portfolio" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">Portfolio</a>
        </li>
        <li className="w-full text-center">
          <a href="#services" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">Services</a>
        </li>
        <li className="w-full text-center">
          <a href="#contact" className="cursor-pointer hover:bg-blue-500 p-2 rounded block">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
