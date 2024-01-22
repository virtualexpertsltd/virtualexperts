export default function SectionTitle({ title, underlined, colored, underlineColor = "primary" }) {
	let convertedText = title
		.replace(
			colored,
			`<br class="block sm:hidden"/><span class="bg-primary text-white">${colored}</span><br class="block sm:hidden"/>`
		)
		.replace(
			underlined,
			`<span class=${underlineColor === "red" ? "sm:styled-underline-red" : "sm:styled-underline"}>${underlined}</span>`
		);

	return (
		<h2
			className="font-bold text-center mb-10"
			dangerouslySetInnerHTML={{ __html: convertedText }}
		></h2>
	);
}
