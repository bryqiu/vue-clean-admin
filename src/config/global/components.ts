import { ElButton, ElLoading } from 'element-plus';

import { AppIcon } from '@/components/common/app-icon';
import { ActionButton } from '@/components/common/action-button';

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
    name: 'AppIcon',
    component: AppIcon,
  },
  {
    name: 'ActionButton',
    component: ActionButton,
  },
];

const globalPluginConfig = [ElLoading];

export const globalCompList = [...globalElCompConfig, ...globalCompConfig];
export const globalPluginList = globalPluginConfig;

/**
 * 注册完后需要在 typings/global-components.d.ts 中进行类型声明
 */
