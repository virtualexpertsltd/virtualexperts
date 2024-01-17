/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff9f26",
				dark: "#222f3e",
				light: "#707070",
			},
		},
	},
	plugins: [],
};

