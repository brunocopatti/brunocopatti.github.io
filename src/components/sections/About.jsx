import { useTranslation } from "react-i18next";
import { FileUser } from "lucide-react";
import Profile from "../../assets/profile.jpeg";
import ShowOnVisible from "../ShowOnVisible";
import Icon from "../Icon";

function About() {
	const { t } = useTranslation();

	return (
			<section className="p-3" id="about">
				<h2 className="text-cyan-700 mb-1">{t("About me")}</h2>
				<ShowOnVisible>
					<div className="flex items-center gap-6 not-lg:flex-col">
						<div className="flex flex-col gap-6 not-lg:items-center">
							<h1 className="text-3xl">{t("greetings", { name: "Bruno"})}</h1>
							<p className="not-lg:text-center">{t("about_description")}</p>
							<a className="flex items-center gap-2" href="">
								<FileUser />
								<span className="underline text-lg">Curriculum vitae</span>
							</a>
							<ul className="flex items-center gap-2">
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
						</div>
						<img
							className="w-64 h-64 rounded-full"
							src={Profile}
							alt="My profile picture"
						/>
					</div>
				</ShowOnVisible>
			</section>
	);
}

export default About;