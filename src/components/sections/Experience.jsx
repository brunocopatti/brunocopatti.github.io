import { useTranslation } from "react-i18next";
import ShowOnVisible from "../ShowOnVisible";
import Icon from "../Icon";

const experiences = [
  {
    role: "Software development intern",
    company: "Wishbox Technologies",
    start_date: "2024-08-02",
    finish_date: "2025-02-02",
    description: "wishbox_description",
    tools: [
      {
				name: "Python",
				icon: "Python"
			},
      {
				name: "Git",
				icon: "Git"
			},
      {
				name: "Bash",
				icon: "Bash"
			},
			{
				name: "Linux",
				icon: "Linux"
			},
    ]
  }
];

function DateRange({ start, finish }) {
	const { t, i18n: {language} } = useTranslation();

  const startDate = new Date(start);
  const finishDate = new Date(finish);

  const formatter = new Intl.DateTimeFormat(language, { month: "long", year: "numeric" });

  const startStr = formatter.format(startDate);
  const finishStr = formatter.format(finishDate);

  const monthsDiff = (finishDate.getFullYear() - startDate.getFullYear()) * 12 + (finishDate.getMonth() - startDate.getMonth());

	return (
		<p className="text-lg opacity-50">
			{startStr} - {finishStr} <span className="whitespace-nowrap">({monthsDiff} {t("months")})</span>
		</p>
	);
}

function Experience() {
	const { t } = useTranslation();

	return (
			<section className="p-3" id="experience">
				<h2 className="text-cyan-700 mb-1">{t("Experience")}</h2>
				<ul>
					{experiences.map((experience) => (
						<ShowOnVisible>
							<li key={experience.company}>
								<div className="flex flex-col gap-3 p-2 border-2 border-dashed border-neutral-600 rounded-md">
									<div className="flex not-lg:flex-col justify-between lg:items-center">
										<h3 className="text-2xl">{t(experience.role)}</h3>
										<DateRange
											start={experience.start_date}
											finish={experience.finish_date}
										/>
									</div>
									<h4 className="text-2xl text-amber-500 font-semibold">{experience.company}</h4>
									<p>{t(experience.description)}</p>
									<ul className="flex flex-wrap gap-3">
										{experience.tools.map((tool) => (
											<li key={tool}>
												<span className="sr-only">{tool.name}</span>
												<Icon name={tool.icon} />
											</li>
										))}
									</ul>
								</div>
							</li>
						</ShowOnVisible>
					))}
				</ul>
			</section>
	)
}

export default Experience;