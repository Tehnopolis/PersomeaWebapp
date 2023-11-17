import { createRouter, createWebHashHistory } from 'vue-router';

export default function () {
	const router = createRouter({
		history: createWebHashHistory(),
		routes: [
			{
				name: 'IndexView',
				path: '/',
				component: () => import('@/views/IndexView.vue')
			},
			{
				name: 'AppView',
				path: '/app',
				component: () => import('@/views/AppView.vue')
			}
		]
	});

	return router;
}
