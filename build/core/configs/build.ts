import type { BuildOptions } from 'vite';

export const createBuildConfig = (): BuildOptions => {
  return {
    chunkSizeWarningLimit: 1500, // 超出 chunk 大小警告阈值，默认500kb
    // Rollup 打包配置
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash:8].js', // 入口文件名称
        chunkFileNames: 'assets/js/[name]-[hash:8].js', // 引入文件名名称
        assetFileNames: 'assets/[ext]/[name]-[hash:8][extname]', // 静态资源名称
      },
    },
  };
};
