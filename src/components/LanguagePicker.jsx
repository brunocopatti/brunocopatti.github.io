import { useTranslation } from "react-i18next";
import BRFlag from "../assets/icons/flags/br.svg";
import USFlag from "../assets/icons/flags/us.svg";

function LanguagePicker() {
	const { i18n: {changeLanguage, language} } = useTranslation();

	return (
		<div className="flex gap-2">
			<span className="sr-only">Choose the language:</span>
			<button
				className={`hover:cursor-pointer ${language == "en" ? "border" : ""}`}
				type="button"
				onClick={() => changeLanguage("en")}
			>
				<span className="sr-only">English</span>
				<img src={USFlag} width={30} alt="" />
			</button>
			<button
				className={`hover:cursor-pointer ${language == "pt" ? "border" : ""}`}
				type="button"
				onClick={() => changeLanguage("pt")}
			>
				<span className="sr-only">Portuguese</span>
				<img src={BRFlag} width={30} alt="" />
			</button>
		</div>
	);
}

export default LanguagePicker;