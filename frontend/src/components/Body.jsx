import { useState, useEffect } from "react";

const Body = () => {
  const fullText = "Bienvenue sur mon portfolio";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // vitesse de frappe

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: "url('./src/assets/feu.jpg')" }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 custom-text-style">
          {displayedText}
          {index < fullText.length && <span className="blinking-cursor">|</span>}
        </h1>
      </div>

      <style>
        {`
          .custom-text-style {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            -webkit-text-stroke: 0.5px black;
          }

          .blinking-cursor {
            animation: blink 1s step-end infinite;
            font-weight: bold;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Body;
