import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useIsVisible from "../../hooks/useIsVisible";
import Icon from "../Icon";

const skills = [
	{
		name: "HTML",
    icon: "HTML",
    description: "The standard markup language for creating web pages."
  },
  {
		name: "CSS",
    icon: "CSS",
    description: "Stylesheet language used for designing web pages."
  },
  {
		name: "JavaScript",
    icon: "JavaScript",
    description: "A versatile programming language for web development."
  },
  {
		name: "React",
    icon: "React",
    description: "A JavaScript library for building user interfaces."
  },
  {
		name: "Tailwind CSS",
    icon: "TailwindCSS",
    description: "A utility-first CSS framework for styling websites."
  },
  {
		name: "Node.js",
    icon: "NodeJS",
    description: "A JavaScript runtime for building server-side applications."
  },
  {
		name: "Express.js",
    icon: "ExpressJS",
    description: "A fast and minimalist web framework for Node.js."
  },
  {
		name: "Python",
    icon: "Python",
    description: "A powerful, high-level programming language."
  },
  {
		name: "Git",
    icon: "Git",
    description: "A version control system for tracking code changes."
  },
  {
		name: "Bash",
    icon: "Bash",
    description: "A command-line shell for Unix-based systems."
  },
  {
		name: "Linux",
    icon: "Linux",
    description: "An open-source operating system based on Unix."
  },
  {
		name: "MySQL",
    icon: "MySQL",
    description: "A popular relational database management system."
  },
  {
		name: "Figma",
    icon: "Figma",
    description: "A web-based design and prototyping tool."
  }
];

function Skills() {
	const { t } = useTranslation();
	const [skillDescription, setSkillDescription] = useState(null);
	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<section
			ref={ref}
			className={`p-3 ${isVisible ? "load-element" : ""}`}
			id="skills"
		>
			<h2 className="text-green-700 mb-1">{t("Skills")}</h2>
			<div className="flex flex-col gap-6">
				<p className="not-lg:text-center">
					{skillDescription || t("Touch to read about it!")}
				</p>
				<ul className="flex flex-wrap gap-3">
					{skills.map((skill) => {
						const setDescription = () => {
							setSkillDescription(skill.description);
						}
						return (
							<li key={skill.name} className="hover:cursor-pointer" onClick={setDescription}>
								<span className="sr-only">{skill.name}</span>
								<Icon name={skill.icon} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Skills;