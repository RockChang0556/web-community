<!--
 * @Author: Rock Chang
 * @Date: 2021-08-05 14:50:24
 * @LastEditTime: 2021-12-03 12:02:34
 * @Description: 布局组件 - 头部
-->
<template>
	<div class="global-header" v-if="user.isFetched">
		<router-link class="header-logo" to="/">
			<img src="/logo.png" alt="logo" />
		</router-link>
		<div v-if="!user.id">
			<router-link to="/login">
				<el-button type="danger" plain>登录</el-button>
			</router-link>
		</div>
		<el-dropdown v-else trigger="click">
			<span class="el-dropdown-link">
				<avatar :size="36" :src="user.avatar_url"> </avatar>
				{{ user.name }}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<template #dropdown>
				<el-dropdown-menu class="header-user-dropdown">
					<router-link to="/user/settings">
						<el-dropdown-item icon="el-icon-setting"> 设置 </el-dropdown-item>
					</router-link>
					<router-link to="/admin/dashboard">
						<el-dropdown-item icon="el-icon-setting">
							管理员空间
						</el-dropdown-item>
					</router-link>
					<el-dropdown-item
						icon="el-icon-switch-button"
						@click.prevent="logout"
					>
						退出登录
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';
import { UserProps } from '@/store/modules/user';
import Avatar from '@/components/avatar.vue';
import router from '@/router';
export default defineComponent({
	name: 'global-header',
	components: { Avatar },
	props: {
		user: {
			type: Object as PropType<UserProps>,
			default: () => ({}),
		},
	},
	setup() {
		const store = useStore();
		const logout = () => {
			store.dispatch('user/logout');
			router.push('/');
		};
		return {
			logout,
		};
	},
});
</script>

<style lang="less">
.global-header {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1999;
	height: 70px;
	line-height: 70px;
	padding: 8px 2rem;
	background-color: white;
	border-top: 4px solid mix(purple, white);
	display: flex;
	justify-content: space-between;
	align-items: center;
	.header-logo {
		height: 50px;
		img {
			height: 100%;
		}
	}
	.el-button span {
		letter-spacing: 5px;
		padding-left: 4px;
	}
	.el-dropdown {
		min-width: 80px;
		padding: 5px 0;
		.el-dropdown-link {
			float: right;
			cursor: pointer;
			display: flex;
			align-items: flex-end;
			line-height: 26px;
			.el-icon-arrow-down {
				line-height: inherit;
			}
			.el-avatar {
				margin-right: 5px;
			}
		}
	}
}

// element
.header-user-dropdown {
	a {
		color: var(--el-text-color-regular);
		&:hover {
			background-color: var(--el-dropdown-menuItem-hover-fill);
			color: var(--el-dropdown-menuItem-hover-color);
		}
	}
}
</style>
