<template>
	<div class="my-box">
		<my-header v-if="$route.path !== '/login'" />
		<router-view></router-view>
	</div>
</template>

<script>
	import cookie from './util/cookie.js'
	import MyHeader from "./components/MyHeader.vue";
	export default {
		name: 'app',
		components: {
			MyHeader
		},
		data () {
			return {
			}
		},
		computed: {
			showHeader () {
				return cookie.getCookie('username')
			},
			localHeight () {
				return window.innerHeight;
			}
		},
		mounted() {
			console.log(this.$route)
		}
	}
</script>

<style >
	.content {
		background: #f2f6fc;
	}
	.main {
	width: 80%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: 20px;
    overflow: auto;
    background-color: #fff;
	}
</style>