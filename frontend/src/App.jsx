// App.jsx
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
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu principal */}
      <main className=" flex-1 flex flex-col min-h-screen">
        <div className="flex-1">
          <section id="home" className="ml-64"><Body /></section>
          <section id="about" className="ml-64"><About /></section>
          <section id="resume" className="ml-64"><Resume /></section>
          <section id="skills" className="ml-64"><Skills /></section>
          <section id="services" className="ml-64"><Logiciel /></section>
          <section id="portfolio" className="ml-64"><Portfolio /></section>
          <section id="contact" className="ml-64"><Contact /></section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
