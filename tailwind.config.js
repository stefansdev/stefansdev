const { scale } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: '1rem',
				},
			},
			colors: {
				brand: {
					twitter: '#1da1f2',
					instagram: '#c13584',
					github: '#333',
					upwork: '#14a800',
				},
			},
			animation: {
				blob: 'blob 7s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0,0) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0,0) scale(1)',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
