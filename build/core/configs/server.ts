import type { ServerOptions } from 'vite';

export const createServerConfig = (): ServerOptions => {
  return {
    port: 4480, // 端口号
    host: true, // 监听所有地址
    open: false, // 项目启动时是否自动在浏览器中打开应用程序
    hmr: true, // 开启热更新
    cors: true, // 跨域允许
    // proxy:{} // 跨域处理, see：https://cn.vitejs.dev/config/server-options.html#server-proxy
    watch: {
      ignored: ['**/src/typings/auto-imports.d.ts', '**/src/typings/components.d.ts'],
    },
  };
};
