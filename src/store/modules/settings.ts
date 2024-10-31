import { computed, ref, unref } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { DEFAULT_SETTINGS } from '@/config';

const createSettingsStore = defineStore(
  'settings',
  () => {
    const appSettings = ref({ ...DEFAULT_SETTINGS });

    const getLayoutSettings = computed(() => {
      return appSettings.value.layout;
    });

    const getSundriesSettings = computed(() => {
      return appSettings.value.sundries;
    });

    /** 切换菜单伸缩状态，true 折叠 | false 展开 */
    const toggleMenuCollapse = () => {
      appSettings.value.layout.isMenuCollapse = !unref(getLayoutSettings).isMenuCollapse;
    };

    /** 菜单手风琴模式切换 */
    const toggleMenuAccordion = () => {
      appSettings.value.layout.isMenuAccordion = !unref(getLayoutSettings).isMenuAccordion;
    };

    return {
      appSettings,
      getLayoutSettings,
      getSundriesSettings,
      toggleMenuCollapse,
      toggleMenuAccordion,
    };
  },
  { persist: true },
);
import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createSettingsStore, import.meta.hot));

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
