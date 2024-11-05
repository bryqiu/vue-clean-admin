import { computed, ref, unref } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { DEFAULT_SETTINGS } from '@/config';
import type { PageTransitionEnum } from '@/enums';

const createSettingsStore = defineStore(
  'settings',
  () => {
    const appSettings = ref({ ...DEFAULT_SETTINGS });

    const getLayoutSettings = computed(() => {
      return appSettings.value.layout;
    });

    const getThemeSettings = computed(() => {
      return appSettings.value.theme;
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

    /** 切换页面过渡动画 */
    const togglePageTransition = (name: PageTransitionEnum) => {
      unref(getThemeSettings).pageTransitionName = name;
    };

    return {
      appSettings,
      getLayoutSettings,
      getThemeSettings,
      getSundriesSettings,
      toggleMenuCollapse,
      toggleMenuAccordion,
      togglePageTransition,
    };
  },
  { persist: true },
);
import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createSettingsStore, import.meta.hot));

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
