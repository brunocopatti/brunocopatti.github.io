import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguagePicker from "../LanguagePicker";
import ThemeToggler from "../ThemeToggler";
import "./Nav.css";

function Nav() {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="p-3">
			<div onClick={() => setMenuOpen(!menuOpen)}>
				<button
					className="ms-auto block lg:hidden hover:cursor-pointer"
					type="button"
				>
					{menuOpen ? <X /> : <Menu />}
				</button>
			</div>
			<div className="flex not-lg:flex-col gap-2 lg:justify-between items-center">
				<ul
					className={`${menuOpen ? "flex flex-col" : "not-lg:sr-only"} lg:flex lg:flex-row lg:gap-4 lg:w-fit items-center`}
				>
					<li className="nav-item"><a href="#about">{t("About")}</a></li>
					<li className="nav-item"><a href="#skills">{t("Skills")}</a></li>
					<li className="nav-item"><a href="#experience">{t("Experience")}</a></li>
					<li className="nav-item"><a href="#projects">{t("Projects")}</a></li>
					<li className="nav-item"><a href="#contact">{t("Contact")}</a></li>
				</ul>
				<div className="flex items-center not-lg:flex-col gap-2">
					<div className={`${menuOpen ? "block" : "not-lg:sr-only"}`}>
						<LanguagePicker />
					</div>
					<div className={`${menuOpen ? "block" : "not-lg:sr-only"}`}>
						<ThemeToggler />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav;