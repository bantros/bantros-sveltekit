import type { Config } from 'tailwindcss';

export default {
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
} satisfies Config;
