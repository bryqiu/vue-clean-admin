import type { PluginOption } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { pathResolve } from '../helpers';

/** svg 图标 */
export const configSvgIconPlugin = (): PluginOption => {
  return createSvgIconsPlugin({
    iconDirs: [pathResolve('src/assets/icons')], // 指定要缓存的图标文件夹
    symbolId: 'icon-[dir]-[name]', // 指定symbolId格式
  });
};
