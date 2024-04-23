/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF6464',
				secondary: '#00A8CC',
				text: '#21243D',
				background: '#E5E5E5',
				"secondary-background": "#EDF7FA",
				"dark-background": "#142850",
				"text-light": "#8695A4"
			}
		},
	},
	plugins: [],
}
