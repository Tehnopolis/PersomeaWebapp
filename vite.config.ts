import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [vue(), vueJsx(), eslint()],
	resolve: {
		alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
	}
});
