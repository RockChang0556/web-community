<!--
 * @Author: Rock Chang
 * @Date: 2021-08-20 18:01:56
 * @LastEditTime: 2021-12-03 12:05:21
 * @Description: 头像组件
-->

<template>
	<div class="com-avatar">
		<el-avatar :size="size" :src="avatarUrl">
			<img :src="avatarDefaultUrl" />
		</el-avatar>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { avatarDefaultUrl } from '@/config/constants';

export default defineComponent({
	name: 'com-avatar',
	components: {},
	props: {
		// 头像地址
		src: {
			type: String,
			default: '',
		},
		// 头像大小
		size: {
			type: Number,
			default: 36,
		},
	},
	setup(props) {
		const avatarUrl = computed(
			() => `${import.meta.env.VITE_FILE_BASE}${props.src}`
		);

		return {
			avatarUrl,
			avatarDefaultUrl,
		};
	},
});
</script>

<style lang="less">
.com-avatar {
	display: flex;
	border-radius: 50%;
	.el-avatar {
		background: none;
	}
	.el-upload {
		box-shadow: var(--el-box-shadow-light);
		display: flex;
		position: relative;
		overflow: hidden;
		border-radius: 50%;
		&:hover .mark {
			opacity: 1;
		}
		.mark {
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			color: #fff;
			font-size: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;
			transition: 0.3s;
		}
	}
}
</style>

