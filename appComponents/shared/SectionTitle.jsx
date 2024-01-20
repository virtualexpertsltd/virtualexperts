export default function SectionTitle({ title, underlined, colored, underlineColor = "primary" }) {
	let convertedText = title
		.replace(colored, `<span class="bg-primary text-white">${colored}</span>`)
		.replace(
			underlined,
			`<span class=${underlineColor === "red" ? "styled-underline-red" : "styled-underline"}>${underlined}</span>`
		);

	return (
		<h2
			className="font-bold text-center mb-10"
			dangerouslySetInnerHTML={{ __html: convertedText }}
		></h2>
	);
}
