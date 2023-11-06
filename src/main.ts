import { createApp } from 'vue';
import createRouter from './router/index';
import App from './App.vue';

import '@/assets/scss/font.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/globals.scss';

createApp(App).use(createRouter()).mount('#app');
