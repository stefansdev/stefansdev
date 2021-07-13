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
			typography(theme) {
				return {
					light: {
						css: {
							pre: {
								backgroundColor: '#282a3a',
							},
						},
					},
					dark: {
						css: {
							color: theme('colors.gray.300'),
							'[class~="lead"]': { color: theme('colors.gray.400') },
							a: { color: theme('colors.gray.100') },
							strong: { color: theme('colors.gray.100') },
							'ul > li::before': { backgroundColor: theme('colors.gray.700') },
							hr: { borderColor: theme('colors.gray.800') },
							blockquote: {
								color: theme('colors.gray.100'),
								borderLeftColor: theme('colors.gray.800'),
							},
							h1: { color: theme('colors.gray.100') },
							h2: { color: theme('colors.gray.100') },
							h3: { color: theme('colors.gray.100') },
							h4: { color: theme('colors.gray.100') },
							code: { color: theme('colors.gray.100') },
							'a code': { color: theme('colors.gray.100') },
							pre: {
								backgroundColor: '#282a3a',
							},
							thead: {
								color: theme('colors.gray.100'),
								borderBottomColor: theme('colors.gray.700'),
							},
							'tbody tr': { borderBottomColor: theme('colors.gray.800') },
						},
					},
				};
			},
		},
	},
	variants: {
		variants: {
			extend: { typography: ['dark'] },
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
