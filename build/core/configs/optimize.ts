import type { DepOptimizationOptions } from 'vite';
import { extractLibStyleIncludes } from '../scripts/el-style-path';

export const createOptimizeConfig = (): DepOptimizationOptions => {
  const include: string[] = [
    'element-plus/es',
    ...extractLibStyleIncludes('element-plus', 'sass'),
    'plus-pro-components/es',
    ...extractLibStyleIncludes('plus-pro-components'),
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
