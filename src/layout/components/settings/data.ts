import type { TabOptions } from './typing';
import { ModuleLayout, ModuleTheme } from './modules';

export const tabsOptions: TabOptions[] = [
  {
    label: '布局',
    value: '1',
    component: ModuleLayout,
  },
  {
    label: '主题',
    value: '2',
    component: ModuleTheme,
  },
];
