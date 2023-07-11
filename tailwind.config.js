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
				"widest-3": "0.3em",
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
				"10xl": "10.5rem",
				"11xl": "11.5rem",
				"12xl": "12.5rem",
				"13xl": "13.5rem",
				"14xl": "14.5rem",
				"15xl": "15.5rem",
				"16xl": "16.5rem",
				"17xl": "17.5rem",
				"18xl": "22rem",
			},
			fontSize: {
				"10xl": "10rem",
				"11xl": "11rem",
				"12xl": "12rem",
				"13xl": "13rem",
				"14xl": "14rem",
			},
			maxWidth: {
				"4xl": "58rem",
				"8xl": "90rem",
				"9xl": "100rem",
				"10xl": "110rem",
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
