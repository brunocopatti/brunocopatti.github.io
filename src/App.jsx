import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import Nav from "./components/sections/Nav";
import Icon from "./components/Icon";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

function copyClipboard(text) {
  return () => {
    navigator.clipboard.writeText(text);
  }
}

const contacts = [
  "ottonellicopattibruno@gmail.com",
  "https://github.com/brunocopatti",
  "https://linkedin.com/in/brunocopatti",
  "https://brunocopatti.github.io"
]

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
      <section id="contact">
        <h2>{t("Contact me")}</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact}>
              <span>{contact}</span>
              <button className="hover:cursor-pointer" onClick={copyClipboard(contact)}>
                <Copy />
                <span className="sr-only">{t("Copy to clipboard")}</span>
              </button>
            </li>
          ))}
        </ul>
        <p>{t("contact_description")}</p>
        <a href="mailto:ottonellicopattibruno@gmail.com">{t("Mail me")}</a>
      </section>
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