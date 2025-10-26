import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Logiciel from "./components/Logiciel";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar fixe à gauche */}
      <Navbar />

      {/* Contenu principal avec padding à gauche sur desktop */}
      <main className="pt-16 lg:pt-0 lg:pl-64">
        <section id="home" className="scroll-mt-24"><Body /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="resume" className="scroll-mt-24"><Resume /></section>
        <section id="skills" className="scroll-mt-24"><Skills /></section>
        <section id="services" className="scroll-mt-24"><Logiciel /></section>
        <section id="portfolio" className="scroll-mt-24"><Portfolio /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
