import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, title: "Projet 1", category: "projet1", image: "/src/assets/feu.jpg" },
    { id: 2, title: "Projet 2", category: "projet2", image: "/images/projet2.jpg" },
    { id: 3, title: "Projet 3", category: "projet3", image: "/images/projet3.jpg" },
    { id: 4, title: "Autre", category: "autre", image: "/images/autre.jpg" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>

      {/* Boutons de filtre */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button onClick={() => setFilter("all")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Tous</button>
        <button onClick={() => setFilter("projet1")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Projet 1</button>
        <button onClick={() => setFilter("projet2")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Projet 2</button>
        <button onClick={() => setFilter("projet3")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Projet 3</button>
      </div>

      {/* Affichage des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border rounded shadow p-4">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
