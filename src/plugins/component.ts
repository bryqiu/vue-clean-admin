import type { App } from 'vue';
import { globalCompList, globalPluginList } from '@/config';

/**
 * 全局注册组件
 * @param app 程序实例
 */
const registerGlobalComp = (app: App<Element>) => {
  if (globalCompList.length === 0) return;
  globalCompList.forEach((item) => {
    app.component(item.name, item.component);
  });
};

/**
 * 全局注册插件
 * @param app 程序实例
 */
const registerGlobalPlugin = (app: App<Element>) => {
  globalPluginList.forEach((plugin) => {
    app.use(plugin);
  });
};

// const initGlobalDirective = (app: App<Element>)

export const initElementPlus = (app: App<Element>) => {
  registerGlobalComp(app);
  registerGlobalPlugin(app);
};
