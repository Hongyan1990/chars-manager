<template>
	<div class="my-box">
		<router-view></router-view>
	</div>
</template>

<script>
	import cookie from './util/cookie.js'
	import OrderHeader from './views/OrderHeader.vue'
	export default {
		name: 'app',
		components: {
			OrderHeader
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