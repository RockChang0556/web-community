<!--
 * @Author: Rock Chang
 * @Date: 2021-08-05 11:31:57
 * @LastEditTime: 2021-12-03 18:34:48
 * @Description: 
-->
<template>
	<router-view v-loading.fullscreen.lock="loading"></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { getToken } from '@/utils/token';

export default defineComponent({
	name: 'App',
	components: {},
	setup() {
		const store = useStore();
		const loading = ref(false);

		// 获取用户信息
		const getCurrentUser = async () => {
			const access_token = getToken('access_token');
			if (access_token) {
				try {
					loading.value = true;
					await store.dispatch('user/getUserInfo');
				} catch (err) {
					store.commit('user/setUserInfo', { isFetched: true });
				} finally {
					loading.value = false;
				}
			} else {
				store.commit('user/setUserInfo', { isFetched: true });
			}
		};
		getCurrentUser();

		return {
			loading,
		};
	},
});
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-emphasis: none;
	text-decoration: none;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #f2f2f2;
	width: 100%;
	min-height: 100vh;
}
.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
