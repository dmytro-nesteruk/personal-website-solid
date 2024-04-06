/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["Fira Code", "monospace"],
			},
			fontSize: {
				headline: "62px",
				subheadline: "32px",
				body: "18px",
				label: "16px",
				code: "14px",
			},
			colors: {
				primary: {
					900: "#01080E",
					800: "#011627",
					700: "#011221",
				},
				black: "#010C15",
				"light-grey": "#E5E9F0",
				"secondary-grey": "#607B96",
				"secondary-teal": "#3C9D93",
				"secondary-purple": "#4D5BCE",
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
