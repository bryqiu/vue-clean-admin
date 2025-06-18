import { ElButton, ElLoading } from 'element-plus';

import { ActionButton } from '@/components/common/action-button';
import { IconifyIcon, LocalIcon } from '@/components/common/app-icon';

/** 全局注册的Element Plus组件 */
const globalElCompConfig: RegisterComponentList = [
  {
    name: ElButton.name || 'ElButton',
    component: ElButton,
  },
];

/** 全局注册的项目内部组件 */
const globalCompConfig: RegisterComponentList = [
  {
    name: 'ActionButton',
    component: ActionButton,
  },
  {
    name: 'IconifyIcon',
    component: IconifyIcon,
  },
  {
    name: 'LocalIcon',
    component: LocalIcon,
  },
];

const globalPluginConfig = [ElLoading];

export const globalCompList = [...globalElCompConfig, ...globalCompConfig];
export const globalPluginList = globalPluginConfig;

/**
 * 注册完后需要在 typings/global-components.d.ts 中进行类型声明
 */
