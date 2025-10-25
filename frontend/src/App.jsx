// App.jsx
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu principal */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        <div className="flex-1">
          <Body />
          <About />
          <Resume/>
          <Logiciel/>
          <Portfolio/>
          <Contact/>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
