import { useTranslation } from "react-i18next";
import Icon from "../Icon";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="p-3 flex justify-between items-center">
			<p>{t("Made by")} <a className="underline whitespace-nowrap" href="https://brunocopatti.github.io">Bruno Copatti</a></p>
			<ul className="flex gap-2">
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
	);
}

export default Footer;