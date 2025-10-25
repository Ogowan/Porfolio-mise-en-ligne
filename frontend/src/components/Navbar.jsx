const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white w-65  top-0 left-0 h-screen fixed p-5 flex flex-col ">

      <div className="w-full flex justify-center">
        {/* Cercle extérieur */}
        <div className="bg-gray-800 rounded-full justify-center p-1">
          {/* Cercle intérieur avec image */}
          <img
            src="/src/assets/react.svg"
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
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
              <button className="bg-gray-400 border-1 rounded-full  w-10 h-10  overflow-hidden">
                <img
                  src="/src/assets/instagram.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </li>
            <li>
              <button className="bg-white rounded-full border-1  w-10 h-10  overflow-hidden">
                <img
                  src="/src/assets/whatsapp.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </li>
            <li>
              <button className="bg-white rounded-full border-1 w-10 h-10 p-  overflow-hidden">
                <img
                  src="/src/assets/github.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </li>
            <li>
              <button className="bg-white rounded-full border-1 w-10 h-10  overflow-hidden">
                <img
                  src="/src/assets/linkedin.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </li>
          </ul>

        </div>
      </div>

      <ul className="flex flex-col gap-4 w-full">
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">Home</li>
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">About</li>
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">Resume </li>
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">Portfolio</li>
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">Services</li>
        <li className="cursor-pointer hover:bg-blue-500 p-2 rounded w-full text-center">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
