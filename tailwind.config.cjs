/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["Fira Code", "monospace"],
			},
			fontSize: {
				headline: ["3.875rem", 1.2],
				subheadline: ["2rem", 1.12],
				body: ["1.125rem", 1.12],
				label: ["1rem", 1.12],
				code: ["0.875rem", 1.12],
			},
			colors: {
				primary: {
					900: "#01080E",
					800: "#011627",
					700: "#011221",
				},
				black: "#010C15",
				"light-grey": "#E5E9F0",
				"secondary-grey": "#8DAAC7", // #607B96
				"secondary-teal": "#3C9D93",
				"secondary-purple": "#6877E3", // #4D5BCE
				"secondary-white": "#FFFFFF",
				"accent-orange": "#FEA55F",
				"accent-teal": "#43D9AD",
				"accent-pink": "#E99287",
				"accent-purple": "#C98BDF",
				"line-dark": "#1E2D3D",
				"gradient-purple": "#4D5BCE",
				"gradient-teal": "#43D9AD",
			},
			borderWidth: {
				3: "3px",
			},
		},
	},
	plugins: [],
};
