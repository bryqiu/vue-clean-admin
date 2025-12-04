import { computed, ref, watch } from 'vue';
import { store } from '@/store';
import { defineStore } from 'pinia';
import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums';
import { defaultSettings, storeModulesNames } from '@/store/config';
import { enableStoreHMR } from '@/store/helpers';
import { usePreferredDark } from '@vueuse/core';
import type { Settings } from '@/store/types';
import { setElementPrimaryColor } from '@/theme/element-plus';

const createSettingsStore = defineStore(
  storeModulesNames.settings,
  () => {
    const appSettings = ref<Settings>({ ...defaultSettings });

    /** 获取布局设置 */
    const getLayoutSettings = computed(() => {
      return appSettings.value.layout;
    });

    /** 获取主题设置 */
    const getThemeSettings = computed(() => {
      return appSettings.value.theme;
    });

    /** 获取共享设置 */
    const getShareSettings = computed(() => {
      return appSettings.value.share;
    });

    /** 切换菜单伸缩状态 */
    const toggleMenuCollapse = (val: boolean) => {
      if (getLayoutSettings.value.isMenuCollapse === val) return;
      getLayoutSettings.value.isMenuCollapse = val;
    };

    /** 菜单手风琴模式切换 */
    const toggleMenuAccordion = (val: boolean) => {
      if (getLayoutSettings.value.isMenuAccordion === val) return;
      getLayoutSettings.value.isMenuAccordion = val;
    };

    /** 切换页面过渡动画 */
    const togglePageTransition = (name: PageTransitionEnum) => {
      getThemeSettings.value.pageTransitionName = name;
    };

    /** 切换面包屑显示状态 */
    const toggleBreadcrumb = (val: boolean) => {
      getShareSettings.value.showBreadcrumb = val;
    };

    /** 切换面包屑图标状态 */
    const toggleBreadcrumbIcon = (val: boolean) => {
      getShareSettings.value.showBreadcrumbIcon = val;
    };

    /** 切换面包屑样式类型 */
    const toggleBreadcrumbStyleType = (val: BreadcrumbStyleType) => {
      getShareSettings.value.breadcrumbStyleType = val;
    };

    const { setThemeMode, addVisualStyle, isDarkMode } = useTheme();

    /** 设置当前视觉模式 */
    const setVisualMode = (val: VisualModeEnum) => {
      addVisualStyle(val);
      getThemeSettings.value.visualMode = val;
    };

    /** 设置主题色 */
    const setPrimaryColor = (val: string) => {
      setElementPrimaryColor(val, isDarkMode.value);
      getThemeSettings.value.primaryColor = val;
    };

    /** 切换主题模式 */
    const toggleThemeMode = (mode: ThemeModeEnum) => {
      setThemeMode(mode);
      setElementPrimaryColor(getThemeSettings.value.primaryColor, isDarkMode.value);
      getThemeSettings.value.currentThemeMode = mode;
    };

    const systemDark = usePreferredDark();

    // 监听系统主题变化
    watch(systemDark, () => {
      if (getThemeSettings.value.currentThemeMode === ThemeModeEnum.SYSTEM) {
        setThemeMode(ThemeModeEnum.SYSTEM);
        setElementPrimaryColor(getThemeSettings.value.primaryColor, isDarkMode.value);
      }
    });

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

enableStoreHMR(createSettingsStore);

export const useSettingsStore = () => {
  return createSettingsStore(store);
};
