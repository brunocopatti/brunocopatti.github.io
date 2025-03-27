import { Code, Copy, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Nav from "./components/sections/Nav";
import Icon from "./components/Icon";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";

function copyClipboard(text) {
  return () => {
    navigator.clipboard.writeText(text);
  }
}

const tools = {
  "HTML": {
    icon: "HTML",
    description: "The standard markup language for creating web pages."
  },
  "CSS": {
    icon: "CSS",
    description: "Stylesheet language used for designing web pages."
  },
  "JavaScript": {
    icon: "JavaScript",
    description: "A versatile programming language for web development."
  },
  "React": {
    icon: "React",
    description: "A JavaScript library for building user interfaces."
  },
  "Tailwind CSS": {
    icon: "TailwindCSS",
    description: "A utility-first CSS framework for styling websites."
  },
  "Node.js": {
    icon: "NodeJS",
    description: "A JavaScript runtime for building server-side applications."
  },
  "Express.js": {
    icon: "ExpressJS",
    description: "A fast and minimalist web framework for Node.js."
  },
  "Python": {
    icon: "Python",
    description: "A powerful, high-level programming language."
  },
  "Git": {
    icon: "Git",
    description: "A version control system for tracking code changes."
  },
  "Bash": {
    icon: "Bash",
    description: "A command-line shell for Unix-based systems."
  },
  "Linux": {
    icon: "Linux",
    description: "An open-source operating system based on Unix."
  },
  "MySQL": {
    icon: "MySQL",
    description: "A popular relational database management system."
  },
  "Figma": {
    icon: "Figma",
    description: "A web-based design and prototyping tool."
  }
};

const projects = [
  {
    name: "teleport",
    description: "teleport_description",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Figma"
    ],
    git: "https://github.com/brunocopatti/teleport.git",
    live: "https://tepe.pro"
  },
  {
    name: "portfolio",
    description: "portfolio_description",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Figma"
    ],
    git: "https://github.com/brunocopatti/brunocopatti.github.io.git",
    live: "https://brunocopatti.github.io/"
  }
];

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
      <div className="hidden">
        {language}
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("pt")}>pt</button>
      </div>
      <div className="max-w-5xl m-auto">
        <Nav />
      </div>
      <div className="max-w-5xl m-auto">
        <About />
      </div>
      <div className="max-w-5xl m-auto">
        <Skills />
      </div>
      <div className="max-w-5xl m-auto">
        <Experience />
      </div>
      <section id="projects">
        <h2>{t("Projects")}</h2>
        <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{t(project.description)}</p>
              <ul>
                {project.tools.map((tool) => (
                  <li key={tool}>
                    <span className="sr-only">{tool}</span>
                    <Icon name={tools[tool].icon} />
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <a href={project.git} target="_blank">
                    <Code />
                    {t("Source code")}
                  </a>
                </li>
                <li>
                  <a href={project.live} target="_blank">
                    <ExternalLink />
                    {t("Live")}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
        </ul>
      </section>
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