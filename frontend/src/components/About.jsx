const About = () => {
    return (
        <section className="bg-white text-black p-8 max-w-6xl mx-auto mt-8">
            {/* Titre de la section */}
            <h1 className="text-3xl font-bold mb-4">About</h1>

            {/* Paragraphe sous le titre */}
            <p className="mb-6">
                Student at Epitech and new to the world of full-stack development, discover my beginnings on this portfolio.
            </p>

            {/* Contenu avec image à gauche et texte à droite */}
            <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Carré avec l'image */}
                <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mb-4 md:mb-0">
                    <img
                        src="/src/assets/react.svg"
                        alt="About Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texte à droite de l'image */}
                <div className="flex-1 flex flex-col justify-center">
                    <p className="font-bold mb-4">
                        I am an Epitech student and a full-stack developer apprentice.
                    </p>

                    {/* Deux colonnes de texte vides */}
                    <div className="flex gap-4">
                        {/* Colonne 1 */}
                        <div className="flex flex-col gap-2 flex-1">
                            <p><span className="font-bold">Birthday:</span>  16/10/2004</p>
                            <p><span className="font-bold">CV:</span>  Download</p>
                            <p><span className="font-bold">Phone:</span>  0708326585</p>
                            <p><span className="font-bold">Certificate:</span>  BTS CIEL</p>
                        </div>

                        {/* Colonne 2 */}
                        <div className="flex flex-col gap-2 flex-1">
                            <p><span className="font-bold">Age:</span>  21</p>
                            <p><span className="font-bold">Email:</span>  nbol7744@gmail.com</p>
                            <p><span className="font-bold">City:</span>  Nantes</p>
                            <p><span className="font-bold">Status:</span>  Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
