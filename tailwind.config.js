/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			white: "#ffffff",
			"off-white": "#f0f0f0",
			"light-grey": "#dbdbdb",
			"smokey-grey": "#707070",
			"off-black": "#141414",
			purple: "#854dff",
			"light-red": "#ff5757",
		},
		fontFamily: {
			poppins: ["poppins", "sans-serif"],
		},
		extend: {
			letterSpacing: {
				"widest-2": "0.2em",
			},
			spacing: {
				20: "4.8rem",
				21: "5.2rem",
				23: "6.5rem",
			},
			borderRadius: {
				"4xl": "2.5rem",
				"5xl": "3.5rem",
				"9xl": "9.5rem",
			},
			margin: {
				18: "4.2rem",
			},
			colors: {
				white: "#ffffff",
				"off-white": "#f0f0f0",
				"light-grey": "#dbdbdb",
				"smokey-grey": "#707070",
				"off-black": "#141414",
				purple: "#854dff",
				"light-red": "#ff5757",
			},
		},
	},
	plugins: [],
};
