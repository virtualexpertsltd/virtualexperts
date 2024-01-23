/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./appComponents/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff9f26",
				dark: "#222f3e",
				light: "#707070",
				grey: "#f5f8fe",

				border: "#707070",
			},
			fontFamily: {
				sans: ["var(--font-roboto)"],
			},
			boxShadow: {
				custom: "0px 3px 6px rgba(0,0,0,0.16)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")({
			strategy: "base",
		}),
	],
};

