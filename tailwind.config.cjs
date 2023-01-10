/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			system: [
				'-apple-system',
				'BlinkMacSystemFont',
				'helvetica neue',
				'helvetica',
				'ubuntu',
				'roboto',
				'noto',
				'segoe ui',
				'arial',
				'sans-serif'
			]
		},
		extend: {}
	},
	plugins: []
};
