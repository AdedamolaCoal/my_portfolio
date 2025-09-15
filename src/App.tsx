import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen overflow-y-scroll scrollbar-hide relative">
      <div className="sm:pl-24 sm:px-2 py-10 w-screen min-h-screen relative">
        <Sidebar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
