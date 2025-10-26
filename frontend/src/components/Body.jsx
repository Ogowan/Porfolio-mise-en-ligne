const Body = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/src/assets/feu.jpg')" }}
    >
      {/* Contenu avec animation */}
      <div className="relative z-10 text-center animate-fadeInUp">
        <h1 className="text-5xl font-bold mb-4 custom-text-style">
          Bienvenue sur mon portfolio
        </h1>

      </div>

      {/* Styles personnalisés */}
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

          .custom-text-style {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            -webkit-text-stroke: 0.5px black;
          }
        `}
      </style>
    </div>
  );
};

export default Body;
