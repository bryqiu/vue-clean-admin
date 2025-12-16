import type { DepOptimizationOptions } from 'vite';
import { getElementPlusStyleIncludes } from '../scripts/el-style-path';

export const createOptimizeConfig = (): DepOptimizationOptions => {
  const include: string[] = [
    'element-plus/es',
    ...getElementPlusStyleIncludes(),
    'echarts',
    '@vueuse/core',
    'nprogress',
    'lodash-es',
    'echarts/core',
    'echarts/charts',
    'echarts/components',
    'echarts/renderers',
    'echarts/features',
    '@iconify/vue',
    'axios',
    'clsx',
  ];
  const exclude: string[] = [];

  return {
    include,
    exclude,
  };
};
