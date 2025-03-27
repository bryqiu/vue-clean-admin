import { createPinia } from 'pinia';
import { App } from 'vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { STORE_PREFIX } from './config';
// 实例
const store = createPinia();

// 配置持久化
store.use(
  createPersistedState({
    key: (id) => `__${STORE_PREFIX}__${id}__`.toUpperCase(),
  }),
);

/**
 * 初始化 Pinia
 */
const initStore = (app: App<Element>) => {
  return app.use(store);
};

export { store, initStore };
