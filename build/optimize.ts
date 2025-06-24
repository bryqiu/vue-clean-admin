import type { DepOptimizationOptions } from 'vite';
import { getElStylePaths } from './utils';

/** 预构建 */
export const getOptimize = (): DepOptimizationOptions => {
  const include: string[] = [
    'echarts',
    '@vueuse/core',
    'nprogress',
    'lodash-es',
    'echarts/core',
    'echarts/charts',
    'echarts/components',
    'echarts/renderers',
    'echarts/features',
    'axios',
    ...getElStylePaths(),
  ];
  const exclude: string[] = ['@iconify-json/mdi', '@iconify-json/mingcute', '@iconify-json/ri'];

  return {
    include,
    exclude,
  };
};
