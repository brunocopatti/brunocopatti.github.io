import { ICONS } from "../assets/icons";

function Icon({ name, size=40, theme="dark", ...props }) {
	const icon = ICONS[name];
	const svgIcon = "default" in icon ? icon["default"] : icon[theme];
	return <img width={size} height={size} src={svgIcon} {...props} />
}

export default Icon;