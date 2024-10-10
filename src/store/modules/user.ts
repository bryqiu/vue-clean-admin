import { ref } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const createUserStore = defineStore('user', () => {
  const count = ref(0);
  return { count };
});

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createUserStore, import.meta.hot));

/**
 * 注入 Pinia 实例，使其能在组件外使用
 * @see：https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export const useUserStore = () => {
  return createUserStore(store);
};
