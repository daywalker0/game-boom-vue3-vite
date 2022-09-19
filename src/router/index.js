import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Build from '@/views/Build.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/build',
			name: 'build',
			component: Build
		},
	]
})

export default router;