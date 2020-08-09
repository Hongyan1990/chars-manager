import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})