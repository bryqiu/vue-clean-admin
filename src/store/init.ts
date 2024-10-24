import { createPinia } from 'pinia';
import { App } from 'vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { STORE_PREFIX } from '@/config';
// 实例
const store = createPinia();

// 配置持久化
store.use(
  createPersistedState({
    key: (id) => `__${STORE_PREFIX}__${id}__`.toUpperCase(),
    auto: true, // 启用所有 Store 默认持久化，如不需要，显式配置 persist:false
  }),
);

/**
 * 初始化 Pinia
 */
const initStore = (app: App<Element>) => {
  return app.use(store);
};

export { store, initStore };
