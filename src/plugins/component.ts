import type { App } from 'vue';
import { globalCompList, globalPluginList } from '@/config';

/**
 * 注册全局组件
 * @param app Vue应用实例
 */
const registerGlobalComp = (app: App<Element>) => {
  if (globalCompList.length === 0) return;
  globalCompList.forEach((item) => {
    app.component(item.name, item.component);
  });
};

/**
 * 注册全局插件
 * @param app Vue应用实例
 */
const registerGlobalPlugin = (app: App<Element>) => {
  globalPluginList.forEach((plugin) => {
    app.use(plugin);
  });
};

// const initGlobalDirective = (app: App<Element>)

export const initGlobalModules = (app: App<Element>) => {
  registerGlobalComp(app);
  registerGlobalPlugin(app);
};
