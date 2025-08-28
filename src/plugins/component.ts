import type { App } from 'vue';
import type { Component, DefineComponent } from 'vue';

import { ElButton, ElLoading } from 'element-plus';
import { ActionButton } from '@/components/common/action-button';
import { IconifyIcon, LocalIcon } from '@/components/common/app-icon';

interface RegisterComponent {
  name: string;
  component: Component | DefineComponent;
}

/** 全局注册的Element Plus组件 */
const globalElComponents: RegisterComponent[] = [
  {
    name: ElButton.name || 'ElButton',
    component: ElButton,
  },
];

/** 全局注册的项目内部组件 */
const globalAppComponents: RegisterComponent[] = [
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

const globalCompList = [...globalElComponents, ...globalAppComponents];
const globalPluginList = [ElLoading];

/**
 * 注册全局组件
 * @param app Vue应用实例
 */
export const registerComponents = (app: App<Element>) => {
  if (!globalCompList.length) return;
  globalCompList.forEach((item) => {
    app.component(item.name, item.component);
  });
};

/**
 * 注册全局插件
 * @param app Vue应用实例
 */
export const registerPlugins = (app: App<Element>) => {
  globalPluginList.forEach((plugin) => {
    app.use(plugin);
  });
};
