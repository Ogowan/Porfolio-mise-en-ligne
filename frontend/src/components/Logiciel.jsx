const Logiciel = () => {
  return (
    <section className="bg-white text-black p-8 max-w-6xl mx-auto mt-8">
      {/* Titre de la section */}
      <h1 className="text-3xl font-bold mb-4">Techno</h1>

      {/* Texte + colonnes */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="font-bold mb-4">
          I am an Epitech student and a full-stack developer apprentice.
        </p>

        {/* Deux colonnes côte à côte */}
        <div className="flex gap-4">
          {/* Colonne 1 : images */}
          <div className="flex flex-col gap-4 flex-1">
            <h1>Logiciel</h1>
            <div className="w-full h-32 bg-white rounded overflow-hidden">
              <img
                src="/src/assets/github(3).png"
                alt="Tech 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-32 bg-white rounded overflow-hidden">
              <img
                src="/src/assets/IntelliJ_IDEA_Icon.svg.png"
                alt="Tech 2"
                className="w-full h-full object-contain"
              />
            </div>
             <div className="w-full h-32 bg-white rounded overflow-hidden">
              <img
                src="/src/assets/Visual_Studio_Code_1.35_icon.svg"
                alt="Tech 2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          

          {/* Colonne 2 : images */}
          <div className="flex flex-col gap-4 flex-1">
            <h2>Framework</h2>
            <div className="w-full h-32 bg-white rounded overflow-hidden">
              <img
            
                src="/src/assets/react.svg"
                alt="Tech 3"
                className="w-full h-full object-contain"
              />  <span>hroifrphrt</span>
            </div>
            <div className="w-full h-32 bg-white rounded overflow-hidden">
              <img
                src="/src/assets/Tailwind_CSS_Logo.svg"
                alt="Tech 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logiciel;
