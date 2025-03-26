import { useTranslation } from "react-i18next";

function formatDateRange(start, finish, locales="en-US") {
  const startDate = new Date(start);
  const finishDate = new Date(finish);

  const formatter = new Intl.DateTimeFormat(locales, { month: "long", year: "numeric" });

  const startStr = formatter.format(startDate);
  const finishStr = formatter.format(finishDate);

  const monthsDiff = (finishDate.getFullYear() - startDate.getFullYear()) * 12 + (finishDate.getMonth() - startDate.getMonth());

  return `${startStr} - ${finishStr} (${monthsDiff} months)`;
}

function copy(text) {
  return () => {
    navigator.clipboard.writeText(text);
  }
}

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
 
 return (
    <div>
      <div>
        {language}
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("pt")}>pt</button>
      </div>
      <nav>
        <ul>
          <li><a href="#about">{t("About")}</a></li>
          <li><a href="#skills">{t("Skills")}</a></li>
          <li><a href="#experience">{t("Experience")}</a></li>
          <li><a href="#projects">{t("Projects")}</a></li>
          <li><a href="#contact">{t("Contact")}</a></li>
        </ul>
      </nav>
      <section id="about">
        <h2>{t("About me")}</h2>
        <h1>{t("greetings", { name: "Bruno"})}</h1>
        <p>{t("about_description")}</p>
        <a href="">Curriculum vitae</a>
        <ul>
          <li><a href="https://github.com/brunocopatti">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/brunocopatti/">LinkedIn</a></li>
        </ul>
      </section>
      <section id="skills">
        <h2>{t("Skills")}</h2>
        <p>{t("Touch to read about it!")}</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
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
                    <li key={tool}>{tool}</li>
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
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <ul>
                <li><a href={project.git} target="_blank">{t("Source code")}</a></li>
                <li><a href={project.live} target="_blank">{t("Live")}</a></li>
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
              <button onClick={copy(contact)}>copy</button>
            </li>
          ))}
        </ul>
        <p>{t("contact_description")}</p>
        <a href="mailto:ottonellicopattibruno@gmail.com">{t("Mail me")}</a>
      </section>
      <footer>
        <p>{t("Made by")} <a href="https://brunocopatti.github.io">Bruno Copatti</a></p>
        <ul>
          <li><a href="https://github.com/brunocopatti">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/brunocopatti/">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
 );
}

export default App;