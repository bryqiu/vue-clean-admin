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
    'nprogress',
    ...getElStylePaths(),
  ];
  const exclude: string[] = [
    '@iconify-json/ic',
    '@iconify-json/material-symbols',
    '@iconify-json/mdi',
    '@iconify-json/mingcute',
    '@iconify-json/ri',
    '@iconify-json/line-md',
  ];

  return {
    include,
    exclude,
  };
};
