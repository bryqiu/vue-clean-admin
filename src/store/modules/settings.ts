import { computed, ref, unref, watch } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { DEFAULT_SETTINGS } from '@/config';
import { PageTransitionEnum, ThemeModeEnum } from '@/enums';
import { useDark, usePreferredDark } from '@vueuse/core';

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

    /** 切换菜单伸缩状态 */
    const toggleMenuCollapse = (val: boolean) => {
      if (getLayoutSettings.value.isMenuCollapse === val) return;
      unref(getLayoutSettings).isMenuCollapse = val;
    };

    /** 菜单手风琴模式切换 */
    const toggleMenuAccordion = (val: boolean) => {
      if (getLayoutSettings.value.isMenuAccordion === val) return;
      unref(getLayoutSettings).isMenuAccordion = val;
    };

    /** 切换页面过渡动画 */
    const togglePageTransition = (name: PageTransitionEnum) => {
      unref(getThemeSettings).pageTransitionName = name;
    };

    const isDark = useDark({
      disableTransition: false,
      valueDark: ThemeModeEnum.DARK,
      valueLight: ThemeModeEnum.LIGHT,
    });
    const systemDark = usePreferredDark();

    /** 设置主题 */
    const setThemeMode = (mode: ThemeModeEnum) => {
      switch (mode) {
        case ThemeModeEnum.DARK:
          isDark.value = true;
          break;
        case ThemeModeEnum.LIGHT:
          isDark.value = false;
          break;
        case ThemeModeEnum.SYSTEM:
          isDark.value = systemDark.value;
          break;
      }
    };

    /** 切换主题模式 */
    const toggleThemeMode = (mode: ThemeModeEnum) => {
      unref(getThemeSettings).currentThemeMode = mode;
    };

    // 监听系统主题变化
    watch(systemDark, () => {
      if (unref(getThemeSettings).currentThemeMode === ThemeModeEnum.SYSTEM) {
        setThemeMode(ThemeModeEnum.SYSTEM);
      }
    });

    // 初始化主题
    watch(
      () => unref(getThemeSettings).currentThemeMode,
      (mode) => {
        setThemeMode(mode);
      },
      { immediate: true },
    );

    return {
      appSettings,
      getLayoutSettings,
      getThemeSettings,
      getSundriesSettings,
      toggleMenuCollapse,
      toggleMenuAccordion,
      togglePageTransition,
      toggleThemeMode,
    };
  },
  { persist: true },
);
import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createSettingsStore, import.meta.hot));

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
