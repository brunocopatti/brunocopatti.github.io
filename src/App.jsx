import Nav from "./components/sections/Nav";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";


function App() {
 return (
    <div className="py-2 scroll-smooth min-h-screen bg-neutral-950 text-amber-50 text-xl font-(family-name:--font-poppins)">
      <div className="max-w-5xl m-auto">
        <Nav />
      </div>
      <div className="max-w-5xl m-auto mb-6">
        <About />
      </div>
      <div className="max-w-5xl m-auto mb-6">
        <Skills />
      </div>
      <div className="max-w-5xl m-auto mb-6">
        <Experience />
      </div>
      <div className="max-w-5xl m-auto mb-6">
        <Projects />
      </div>
      <div className="max-w-5xl m-auto mb-6">
        <Contact />
      </div>
      <div className="max-w-5xl m-auto">
        <Footer />
      </div>
    </div>
 );
}

export default App;