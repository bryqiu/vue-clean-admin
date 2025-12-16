import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

export const configVisualizerPlugin = (): PluginOption => {
  return visualizer({
    open: true, // build后，是否自动打开分析页面，默认false
    gzipSize: true, // 是否分析gzip大小
    brotliSize: false, // 是否分析brotli大小
    filename: 'visualizer.html', // 分析文件命名，默认为stats.html
  });
};
