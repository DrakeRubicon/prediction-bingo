import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components',
			$server: './src/lib/server',
			$utils: './src/lib/utils'
		}
	}
};

export default config;
