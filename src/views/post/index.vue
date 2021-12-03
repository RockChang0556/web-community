<!--
 * @Author: Rock Chang
 * @Date: 2021-08-21 17:26:16
 * @LastEditTime: 2021-12-03 18:14:27
 * @Description: 
-->
<template>
	<div class="post-wrap">详情</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import GlobalHeader from '@/components/layout/header.vue';

export default defineComponent({
	name: 'post-wrap',
	components: { GlobalHeader },
	props: {},
	setup() {
		const store = useStore();
		const currentUser = computed(() => store.state.user.userInfo);
		return { currentUser };
	},
});
</script>

<style lang="less"></style>
