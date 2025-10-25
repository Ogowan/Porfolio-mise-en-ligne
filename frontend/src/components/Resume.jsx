const Resume = () => {
  return (
    <div className="bg-gray-200 text-black p-4 text-center min-h-screen">
      <h1 className="font-bold text-4xl mb-6">Resume</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Colonne 1 */}
        <div className="space-y-4">
          {/* HTML */}
          <SkillBar name="HTML" percent={80} />
          {/* CSS */}
          <SkillBar name="CSS" percent={80} />
          {/* Python */}
          <SkillBar name="Python" percent={80} />
        </div>

        {/* Colonne 2 */}
        <div className="space-y-4">
          {/* JavaScript */}
          <SkillBar name="JavaScript" percent={80} />
          {/* Java */}
          <SkillBar name="Java" percent={80} />
          {/* Ubuntu */}
          <SkillBar name="Ubuntu" percent={80} />
        </div>
      </div>
    </div>
  );
};

// Sous-composant pour réutiliser chaque barre
const SkillBar = ({ name, percent }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Resume;
