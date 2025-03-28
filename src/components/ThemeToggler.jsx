import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggler() {
	const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");
		if (document.documentElement.classList.contains("dark")) {
			localStorage.theme = "dark";
			setTheme("dark");
		} else {
			localStorage.theme = "light";
			setTheme("light");
		}
	}

	return (
		<button className="block cursor-pointer" onClick={toggleTheme}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</button>
	)
}

export default ThemeToggler;