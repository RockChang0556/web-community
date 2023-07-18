/*
 * @Author: Rock Chang
 * @Date: 2021-08-05 11:31:57
 * @LastEditTime: 2023-07-18 15:40:59
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd()); // 获取.env文件里定义的环境变量

	return defineConfig({
		base: env.VITE_BASE_URL,
		plugins: [vue()],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		// 打包配置
		build: {
			target: 'modules',
			// outDir: 'dist', //指定输出路径
			// assetsDir: 'assets', // 指定生成静态资源的存放路径
			minify: 'terser', // 混淆器，terser构建后文件体积更小
		},
		server: {
			port: 8081,
			cors: true, // 默认启用并允许任何源
			// open: true, // 在服务器启动时自动在浏览器中打开应用程序
			//反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
			proxy: {
				'/api': {
					target: 'http://localhost:3000', //代理接口
					changeOrigin: true,
					// rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
	});
};
