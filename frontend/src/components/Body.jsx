const Body = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/src/assets/feu.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
      <p className="text-xl text-gray-300">Ceci est la page d'accueil</p>
    </div>
  );
};

export default Body;

