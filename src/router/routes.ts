/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:59:50
 * @LastEditTime: 2021-12-03 18:39:00
 * @Description: 整合所有路由
 */

import { RouteRecordRaw } from 'vue-router';
import { formatRoutes } from '@/utils/route';
import { editorRouteConf } from './route-editor';

const editorRoutes = formatRoutes(editorRouteConf);

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/home/index.vue'),
		children: [
			// 首页
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/home/home.vue'),
			},
			// 文章详情
			{
				path: '/post/:id',
				name: 'post',
				component: () => import('@/views/post/index.vue'),
			},
			// 新建或编辑文章
			{
				path: '/editor',
				name: 'editor',
				component: () => import('@/views/editor/index.vue'),
				children: [...editorRoutes],
			},
		],
	},
	{
		path: '/err',
		name: 'err',
		component: () => import('@/components/errpage/index.vue'),
		children: [
			{
				path: '403',
				name: '403',
				component: () => import('@/components/errpage/403.vue'),
			},
			{
				path: '404',
				name: '404',
				component: () => import('@/components/errpage/404.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/err/404',
	},
];
console.log('', routes);
export default routes;
