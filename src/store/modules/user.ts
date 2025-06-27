import { ref } from 'vue';
import { store } from '@/store';
import { defineStore } from 'pinia';
import { storeModulesNames } from '@/store/config';
import { enableStoreHMR } from '@/store/helpers';

const createUserStore = defineStore(
  storeModulesNames.user,
  () => {
    const accessToken = ref('9bba23a759e54c4ca04108b14d24b73a');
    const refreshToken = ref('');
    const userInfo = ref({});

    return { accessToken, refreshToken, userInfo };
  },
  { persist: true },
);

enableStoreHMR(createUserStore);

/**
 * 注入 Pinia 实例，使其能在组件外使用
 * @see：https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export const useUserStore = () => {
  return createUserStore(store);
};
