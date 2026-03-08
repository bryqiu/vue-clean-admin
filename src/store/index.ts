import { createPinia } from 'pinia';
import { App } from 'vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { formatStoreKey } from './helpers';

// 实例
const store = createPinia();

// 配置持久化
store.use(
  createPersistedState({
    key: (id) => formatStoreKey(id),
    storage: localStorage,
  }),
);

/**
 * 初始化 Pinia
 */
const initStore = (app: App<Element>) => {
  return app.use(store);
};

export { store, initStore };
