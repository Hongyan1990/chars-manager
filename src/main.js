import Vue from 'vue'
import Router from 'vue-router'
import {
  Button, Container, Header, Main, Row, Col,
  Table, TableColumn, Dialog, Input, Form, FormItem,
  Tooltip, Upload, Loading, Message, Tabs, TabPane, Avatar,
    Card, Pagination, Select, Option, DatePicker, Image,
  Dropdown, DropdownItem, DropdownMenu, Popover, Link,
  Breadcrumb, BreadcrumbItem, InputNumber, Badge, Drawer
} from 'element-ui'
import VeHistogram from 'v-charts/lib/histogram.common'
import VePie from 'v-charts/lib/pie.common'

import App from './app.vue'
import createStore from './store/store.js'
// /home/hongyan/Desktop/hongyan/my-order/dist
import router from './routes/router.js'
import cookie from './util/cookie.js'
import './style.css'

import i18n from "./lang";

Vue.use(Router)

Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VePie.name, VePie)

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Avatar)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Image)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Popover)
Vue.use(Link)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(InputNumber)
Vue.use(Badge)
Vue.use(Drawer)
Vue.prototype.$message = Message

const store = createStore()

router.beforeEach((to, from, next) => {
  // const username = cookie.getCookie('username')
  // if(username === null && to.path !== '/login') {
  // 	next('/login')
  // } else {
  // 	next()
  // }
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('router before resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('router after each')
})

new Vue({
	router,
  store,
  i18n,
	render: h => h(App)
}).$mount('#root')