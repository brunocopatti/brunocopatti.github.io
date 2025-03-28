import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import ShowOnVisible from "../ShowOnVisible";

function copyClipboard(text) {
  return () => {
    navigator.clipboard.writeText(text);
  }
}

const contacts = [
  {
    display: "ottonellicopattibruno@gmail.com",
    link: "mailto:ottonellicopattibruno@gmail.com"
  },
  {
    display: "github.com/brunocopatti",
    link: "https://github.com/brunocopatti"
  },
  {
    display: "linkedin.com/in/brunocopatti",
    link: "https://linkedin.com/in/brunocopatti"
  },
  {
    display: "brunocopatti.github.io",
    link: "https://brunocopatti.github.io"
  }
];

function Contact() {
	const { t } = useTranslation();

	return (
		<section className="p-3" id="contact">
				<h2 className="text-cyan-700 mb-1">{t("Contact me")}</h2>
				<ShowOnVisible>
					<div className="flex flex-col gap-5">
						<ul>
							{contacts.map((contact) => (
								<ShowOnVisible>
									<li className="flex max-w-96 gap-3 justify-between items-center" key={contact}>
										<a
											className="flex-1 text-ellipsis overflow-hidden text-lg"
											href={contact.link}
										>
											{contact.display}
										</a>
										<button className="hover:cursor-pointer" onClick={copyClipboard(contact.link)}>
											<Copy />
											<span className="sr-only">{t("Copy to clipboard")}</span>
										</button>
									</li>
								</ShowOnVisible>
							))}
						</ul>
						<p>{t("contact_description")}</p>
						<a
							className="py-4 px-8 w-fit rounded-xl font-semibold text-amber-50 bg-cyan-700 hover:bg-cyan-800"
							href="mailto:ottonellicopattibruno@gmail.com"
						>{t("Mail me")}</a>
					</div>
				</ShowOnVisible>
		</section>
	);
}

export default Contact;