import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/team',
		component: () => import('../views/MyTeam.vue')
	},
	{
		path: '/dis',
		component: () => import('../views/Disclaimer.vue')
	},
  {
    path: '/prod',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/put',
    component: () => import('../views/PutChars.vue')
  },
	{
		path: '/pp',
		component: () => import('../views/PersonalPut.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})