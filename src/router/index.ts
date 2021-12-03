/*
 * @Author: Rock Chang
 * @Date: 2021-08-05 11:34:59
 * @LastEditTime: 2021-12-03 18:45:03
 * @Description: 路由
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { ElMessage, ElMessageBox } from 'element-plus';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const hasToken = localStorage.getItem('access_token');
	// 登录验证
	if (isLoginRequired(to.meta) && !hasToken) {
		ElMessageBox.alert('此页面需登录才可访问', '', {
			confirmButtonText: '去登录',
		});
		return;
	}
	// 权限验证, -1-未登录 0-登录 1~5管理员
	const userInfo = JSON.parse(
		(sessionStorage.getItem('userInfo') as string) || '{}'
	);
	const userAdmin: number = userInfo.admin ?? -1;
	const pageAdmin: number = (to.meta.admin as number) ?? -1;
	if (pageAdmin > userAdmin) {
		ElMessage.error('您无此页面的权限哟');
		next({ name: '403' });
		return;
	}

	// 路由发生变化重新计时
	// autoJump(router);

	// 路由发生变化修改页面title
	if (to.meta.title) {
		document.title = `${to.meta.title} | 鹏`;
	}

	next();
});

function isLoginRequired(meta: any) {
	return meta.admin >= 0;
}

export default router;
