import { type StoreDefinition, acceptHMRUpdate } from 'pinia';
/**
 * 启用 HMR 更新
 * @param storeCreator - 使用 defineStore 定义的 Store
 * @see https://pinia.vuejs.org/zh/cookbook/hot-module-replacement.html#hmr-hot-module-replacement
 */
export const enableStoreHMR = (storeCreator: StoreDefinition) => {
  const hot = import.meta.hot;
  if (hot) {
    hot.accept(acceptHMRUpdate(storeCreator, hot));
  }
};
