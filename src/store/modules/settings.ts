import { ref } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { defaultSettings } from '@/config';

const createSettingsStore = defineStore('settings', () => {
  const appSettings = ref({ ...defaultSettings });

  const count = ref(0);

  /** 切换菜单伸缩状态，true 折叠 | false 展开 */
  const toggleMenuCollapse = () => {
    appSettings.value.layout.isMenuCollapse = !appSettings.value.layout.isMenuCollapse;
  };

  return { appSettings, toggleMenuCollapse, count };
});

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createSettingsStore, import.meta.hot));

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
