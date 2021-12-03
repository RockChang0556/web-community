/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:35:15
 * @LastEditTime: 2021-12-03 18:40:13
 * @Description: 文章编辑器相关路由配置文件
 */

export const editorRouteConf = [
	{
		title: '写文章',
		routeName: 'editor-add',
		routePath: '/editor/add',
		filePath: 'views/editor/add.vue',
		admin: 0,
	},
	{
		title: '修改文章',
		routeName: 'editor-update',
		routePath: '/editor/update/:id',
		filePath: 'views/editor/update.vue',
		admin: 0,
	},
];
