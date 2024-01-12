/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					black: {
						DEFAULT: '#000000',
						lighter: '#151515',
					},
					red: {
						DEFAULT: '#CD3F37',
					},
				},
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '100%',
					md: '100%',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1680px',
				},
			},
			fontFamily: {
				sans: ['var(--font-mona-sans)', ...fontFamily.sans],
				headings: ['var(--font-nohemi)', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
