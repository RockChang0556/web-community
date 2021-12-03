/*
 * @Author: Rock Chang
 * @Date: 2021-08-08 15:00:23
 * @LastEditTime: 2021-12-03 11:56:26
 * @Description:
 */
// element 按需引入
import {
	ElEmpty,
	ElMenu,
	ElSubmenu,
	ElMenuItem,
	ElRadio,
	ElRadioGroup,
	ElTabs,
	ElTabPane,
	ElAvatar,
	ElButton,
	ElInput,
	ElForm,
	ElFormItem,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
	ElDialog,
	ElLoading,
	ElMessage,
	ElMessageBox,
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const components = [
	ElEmpty,
	ElMenu,
	ElSubmenu,
	ElMenuItem,
	ElRadio,
	ElRadioGroup,
	ElTabs,
	ElTabPane,
	ElAvatar,
	ElButton,
	ElInput,
	ElForm,
	ElFormItem,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
	ElDialog,
];
const plugins = [ElLoading, ElMessage, ElMessageBox];

export default {
	install(app: any) {
		components.forEach(component => {
			app.component(component.name, component);
		});

		plugins.forEach(plugin => {
			app.use(plugin);
		});
	},
};
