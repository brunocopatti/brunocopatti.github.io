import { useTranslation } from "react-i18next";
import Nav from "./components/sections/Nav";
import Icon from "./components/Icon";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
 const { t, i18n: {changeLanguage, language} } = useTranslation();
 
 return (
    <div className="scroll-smooth min-h-screen bg-neutral-950 text-amber-50 text-xl font-(family-name:--font-poppins)">
      <div>
        {language}
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("pt")}>pt</button>
      </div>
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
      <footer>
        <p>{t("Made by")} <a href="https://brunocopatti.github.io">Bruno Copatti</a></p>
        <ul>
          <li>
            <a href="https://github.com/brunocopatti">
              <Icon name="Github" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brunocopatti/">
              <Icon name="LinkedIn" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
 );
}

export default App;