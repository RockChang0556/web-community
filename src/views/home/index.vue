<template>
	<global-header :user="currentUser"></global-header>
	<div class="content">
		<router-view v-slot="{ Component }">
			<transition name="el-fade-in-linear">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import GlobalHeader from '@/components/layout/header.vue';
export default defineComponent({
	name: 'home',
	components: { GlobalHeader },
	props: {},
	setup() {
		const store = useStore();
		const currentUser = computed(() => store.state.user.userInfo);

		return {
			currentUser,
		};
	},
});
</script>

<style lang="less">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.content {
	padding-top: 70px;
}
</style>
