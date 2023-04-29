/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				foreground: 'var(--color-foreground)',
			},
			screens: {
				desktop: '500px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
