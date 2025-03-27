import { Code, Copy, ExternalLink, FileUser } from "lucide-react";
import { useTranslation } from "react-i18next";
import Nav from "./components/sections/Nav";
import Icon from "./components/Icon";
import { useState } from "react";

function formatDateRange(start, finish, locales="en-US") {
  const startDate = new Date(start);
  const finishDate = new Date(finish);

  const formatter = new Intl.DateTimeFormat(locales, { month: "long", year: "numeric" });

  const startStr = formatter.format(startDate);
  const finishStr = formatter.format(finishDate);

  const monthsDiff = (finishDate.getFullYear() - startDate.getFullYear()) * 12 + (finishDate.getMonth() - startDate.getMonth());

  return `${startStr} - ${finishStr} (${monthsDiff} months)`;
}

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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python",
  "Git",
  "Bash",
  "Linux",
  "MySQL",
  "Figma"
];

const experiences = [
  {
    role: "Software development intern",
    company: "Wishbox Technologies",
    start_date: "2024-08-02",
    finish_date: "2025-02-02",
    description: "wishbox_description",
    tools: [
      "Python",
      "Git",
      "Bash",
      "Linux"
    ]
  }
];

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
 const [skillDescription, setSkillDescription] = useState(null);
 
 return (
    <div className="bg-neutral-950 text-amber-50 text-xl font-(family-name:--font-poppins)">
      <div className="hidden">
        {language}
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("pt")}>pt</button>
      </div>
      <div className="max-w-5xl m-auto">
        <Nav />
      </div>
      <section id="about">
        <h2>{t("About me")}</h2>
        <h1>{t("greetings", { name: "Bruno"})}</h1>
        <p>{t("about_description")}</p>
        <a href="">
          <FileUser />
          Curriculum vitae
        </a>
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
      </section>
      <section id="skills">
        <h2>{t("Skills")}</h2>
        <p>
          {skillDescription || t("Touch to read about it!")}
        </p>
        <ul>
          {skills.map((skill) => {
            const tool = tools[skill];
            const setDescription = () => {
              setSkillDescription(tool.description);
            }

            return (
              <li key={skill} className="hover:cursor-pointer" onClick={setDescription}>
                <span className="sr-only">{skill}</span>
                <Icon name={tool.icon} />
              </li>
            );
          })}
        </ul>
      </section>
      <section id="experience">
        <h2>{t("Experience")}</h2>
        <ul>
          {experiences.map((experience) => (
            <li key={experience.company}>
              <div>
                <div>
                  <h3>{t(experience.role)}</h3>
                  <p>{formatDateRange(experience.start_date, experience.finish_date, language)}</p>
                </div>
                <h4>{experience.company}</h4>
                <p>{t(experience.description)}</p>
                <ul>
                  {experience.tools.map((tool) => (
                    <li key={tool}>
                      <span className="sr-only">{tool}</span>
                      <Icon name={tools[tool].icon} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
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