import { ref } from 'vue';
import { store } from '@/store';
import { defineStore } from 'pinia';
import { STORE_MODULES_NAMES } from '@/store/config';
import { enableStoreHMR } from '@/store/helpers';

const createUserStore = defineStore(STORE_MODULES_NAMES.USER, () => {
  const count = ref(0);
  return { count };
});

enableStoreHMR(createUserStore);

/**
 * 注入 Pinia 实例，使其能在组件外使用
 * @see：https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export const useUserStore = () => {
  return createUserStore(store);
};
