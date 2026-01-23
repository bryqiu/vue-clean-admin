import type { App } from 'vue';
import type { Component, DefineComponent } from 'vue';

import { ActionButton } from '@/components/common/action-button';
import { IconifyIcon, LocalIcon } from '@/components/common/app-icon';
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';

interface RegisterComponent {
  name: string;
  component: Component | DefineComponent;
}

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

/**
 * 注册全局组件
 * @param app Vue应用实例
 */
export const registerComponents = (app: App<Element>) => {
  if (!globalAppComponents.length) return;
  globalAppComponents.forEach((item) => {
    app.component(item.name, item.component);
  });
};

const globalPluginList = [ElLoading, ElMessage, ElMessageBox];

/**
 * 注册全局插件
 * @param app Vue应用实例
 */
export const registerPlugins = (app: App<Element>) => {
  globalPluginList.forEach((plugin) => {
    app.use(plugin);
  });
};
