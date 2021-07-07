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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
