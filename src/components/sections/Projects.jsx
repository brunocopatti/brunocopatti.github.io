import { Code, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ShowOnVisible from "../ShowOnVisible";
import Icon from "../Icon";

const projects = [
  {
    name: "teleport",
    description: "teleport_description",
    tools: [
			{ name: "HTML", icon: "HTML" },
			{ name: "CSS", icon: "CSS" },
			{ name: "JavaScript", icon: "JavaScript" },
			{ name: "React", icon: "React" },
			{ name: "Tailwind CSS", icon: "TailwindCSS" },
			{ name: "Node.js", icon: "NodeJS" },
			{ name: "Express.js", icon: "ExpressJS" },
			{ name: "MySQL", icon: "MySQL" },
			{ name: "Figma", icon: "Figma" }
    ],
    git: "https://github.com/brunocopatti/teleport.git",
    live: "https://tepe.pro"
  },
  {
    name: "portfolio",
    description: "portfolio_description",
    tools: [
			{ name: "HTML", icon: "HTML" },
			{ name: "CSS", icon: "CSS" },
			{ name: "JavaScript", icon: "JavaScript" },
			{ name: "React", icon: "React" },
			{ name: "Tailwind CSS", icon: "TailwindCSS" },
			{ name: "Figma", icon: "Figma" }
    ],
    git: "https://github.com/brunocopatti/brunocopatti.github.io.git",
    live: "https://brunocopatti.github.io/"
  }
];

function Projects() {
	const { t } = useTranslation();

	return (
			<section className="p-3" id="projects">
				<h2 className="text-green-700 mb-1">{t("Projects")}</h2>
				<ul className="flex flex-col gap-2">
					{projects.map((project) => (
						<ShowOnVisible>
							<li key={project.name}>
								<div className="flex flex-col gap-3 p-2 border-2 border-dashed border-neutral-600 rounded-md">
									<h3 className="text-2xl">{project.name}</h3>
									<p>{t(project.description)}</p>
									<ul className="flex flex-wrap gap-3">
										{project.tools.map((tool) => (
											<li key={tool.name}>
												<span className="sr-only">{tool.name}</span>
												<Icon name={tool.icon} />
											</li>
										))}
									</ul>
									<ul className="flex gap-4">
										<li>
											<a className="flex items-center gap-1" href={project.git} target="_blank">
												<Code />
												{t("Source code")}
											</a>
										</li>
										<li>
											<a className="flex items-center gap-1" href={project.live} target="_blank">
												<ExternalLink />
												{t("Live")}
											</a>
										</li>
									</ul>
								</div>
							</li>
						</ShowOnVisible>
					))}
				</ul>
			</section>
	);
}

export default Projects;