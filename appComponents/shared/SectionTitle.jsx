export default function SectionTitle({
	title,
	underlined,
	colored,
	underlineColor = "primary",
	underlineHideOnMobile = false,
}) {
	let convertedText = title.replace(
		colored,
		`<br class="block content-[''] sm:hidden"/><span class="bg-primary text-white">${colored}</span><br class="block content-[''] sm:hidden"/>`
	);
	if (underlineHideOnMobile) {
		convertedText = convertedText.replace(
			underlined,
			`<span class=${underlineColor === "red" ? "sm:styled-underline-red" : "sm:styled-underline"}>${underlined}</span>`
		);
	} else {
		convertedText = convertedText.replace(
			underlined,
			`<span class=${underlineColor === "red" ? "styled-underline-red" : "styled-underline"}>${underlined}</span>`
		);
	}

	return (
		<h2
			className="font-bold text-center mb-10"
			dangerouslySetInnerHTML={{ __html: convertedText }}
		></h2>
	);
}
