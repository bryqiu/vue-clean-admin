import { loadEnv } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite';
import { pathResolve, processEnv, root } from './build/utils';
import { getPlugins } from './build/plugins';
import { getOptimize } from './build/optimize';
import { getBuildConfig } from './build/build';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const env = processEnv(loadEnv(mode, root));
  const { VITE_BASE_PATH, VITE_DEV_PORT, VITE_BROWSER_OPEN, VITE_PREVIEW_PORT } = env;

  return {
    base: VITE_BASE_PATH,
    plugins: getPlugins(env),
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '#': pathResolve('src/typings'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },

    server: {
      port: VITE_DEV_PORT, // 端口号
      host: true, // 监听所有地址
      open: VITE_BROWSER_OPEN, // 项目启动时是否自动在浏览器中打开应用程序
      hmr: true, // 开启热更新
      cors: true, // 跨域允许
      // proxy:{} // 跨域处理, see：https://cn.vitejs.dev/config/server-options.html#server-proxy
    },

    preview: {
      port: VITE_PREVIEW_PORT,
    },

    esbuild: {
      drop: ['debugger'],
      pure: ['console.log'],
    },

    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },

    /** 依赖预构建 */
    optimizeDeps: getOptimize(),

    /** 打包构建 */
    build: getBuildConfig(),
  };
};
