import type { BuildOptions } from 'vite';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

/** 打包配置 */
export const getBuildConfig = (): BuildOptions => {
  /** 颗粒度更细的分包 */
  const manualChunks = (id: string) => {
    if (id.includes('node_modules')) {
      if (id.includes('lodash-es')) {
        return 'lodash-vendor';
      }
      if (id.includes('element-plus')) {
        return 'el-vendor';
      }
      if (id.includes('@vue') || id.includes('vue')) {
        return 'vue-vendor';
      }
      //   if (id.includes('echarts')) {
      //     return 'echarts-vendor';
      //   }
      return 'vendor';
    }
  };

  return {
    chunkSizeWarningLimit: 1500, // 超出 chunk 大小警告阈值，默认500kb
    // Rollup 打包配置
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash:8].js', // 入口文件名称
        chunkFileNames: 'assets/js/[name]-[hash:8].js', // 引入文件名名称
        assetFileNames: 'assets/[ext]/[name]-[hash:8][extname]', // 静态资源名称
        manualChunks,
      },
    },
  };
};
