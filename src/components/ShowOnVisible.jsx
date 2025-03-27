import { useRef } from "react";
import { useIsVisible } from "react-is-visible";

function ShowOnVisible({ children }) {
	const ref = useRef();
	const isVisible = useIsVisible(ref, { once: true });

	return (
		<div
			ref={ref}
			className={`${isVisible ? "load-element" : ""}`}
		>
			{children}
		</div>
	);
}

export default ShowOnVisible;