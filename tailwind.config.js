/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					black: {
						DEFAULT: '#000000',
						lighter: '#151515',
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
				sans: ['Mona Sans', ...fontFamily.sans],
				headings: ['nohemi-variable', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
