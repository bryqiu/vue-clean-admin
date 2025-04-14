import { computed, ref, unref, watch } from 'vue';
import { store } from '../init';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { DEFAULT_SETTINGS } from '@/config';
import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums';
import { usePreferredDark } from '@vueuse/core';
import { applyAppThemeColor } from '@/colors';
import { STORE_MODULES_KEYS } from '../config';

const createSettingsStore = defineStore(
  STORE_MODULES_KEYS.SETTINGS,
  () => {
    const appSettings = ref({ ...DEFAULT_SETTINGS });

    const getLayoutSettings = computed(() => {
      return appSettings.value.layout;
    });

    const getThemeSettings = computed(() => {
      return appSettings.value.theme;
    });

    const getShareSettings = computed(() => {
      return appSettings.value.share;
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

    /** 切换面包屑显示状态 */
    const toggleBreadcrumb = (val: boolean) => {
      unref(getShareSettings).showBreadcrumb = val;
    };

    /** 切换面包屑图标状态 */
    const toggleBreadcrumbIcon = (val: boolean) => {
      unref(getShareSettings).showBreadcrumbIcon = val;
    };

    /** 切换面包屑样式类型 */
    const toggleBreadcrumbStyleType = (val: BreadcrumbStyleType) => {
      unref(getShareSettings).breadcrumbStyleType = val;
    };

    const { setThemeMode, addVisualStyle, isDarkMode } = useMode();

    /** 设置当前视觉模式 */
    const setVisualMode = (val: VisualModeEnum) => {
      addVisualStyle(val);
      unref(getShareSettings).visualMode = val;
    };

    /** 设置主题色 */
    const setPrimaryColor = (val: string) => {
      unref(getThemeSettings).primaryColor = val;
    };

    /** 系统主题 */
    const systemDark = usePreferredDark();

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
        applyAppThemeColor(unref(getThemeSettings).primaryColor, isDarkMode.value);
      },
    );

    watch(
      () => unref(getThemeSettings).primaryColor,
      (color) => {
        applyAppThemeColor(color, isDarkMode.value);
      },
    );

    // 初始化视觉模式
    watch(
      () => unref(getShareSettings).visualMode,
      (mode) => {
        setVisualMode(mode);
      },
      { immediate: true },
    );

    return {
      appSettings,
      getLayoutSettings,
      getThemeSettings,
      getShareSettings,
      toggleMenuCollapse,
      toggleMenuAccordion,
      togglePageTransition,
      toggleThemeMode,
      toggleBreadcrumb,
      toggleBreadcrumbIcon,
      toggleBreadcrumbStyleType,
      setVisualMode,
      setPrimaryColor,
    };
  },
  { persist: true },
);
import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(createSettingsStore, import.meta.hot));

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
