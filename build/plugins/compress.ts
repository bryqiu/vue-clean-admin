import viteCompression from 'vite-plugin-compression';
import type { PluginOption } from 'vite';

/** 打包压缩 */
export const compressionPluginConfig = (): PluginOption => {
  // 默认压缩gzip，生产.gz文件
  return viteCompression({
    deleteOriginFile: false, // 压缩后是否删除源文件
  });
};
