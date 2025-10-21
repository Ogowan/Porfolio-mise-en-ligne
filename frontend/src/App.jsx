// App.jsx
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";

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
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
