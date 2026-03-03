import { computed, ref, watch } from 'vue';
import { store } from '@/store';
import { defineStore } from 'pinia';
import { AccessibilityModeEnum, LayoutModeEnum, PageTransitionEnum, ThemeModeEnum } from '@/enums';
import { defaultPreferences, storeModulesNames } from '@/store/config';
import { enableStoreHMR } from '@/store/helpers';
import { usePreferredDark } from '@vueuse/core';
import type { Preferences } from '#/preferences';
import { setElementPrimaryColor } from '@/theme/element-plus';

const createPreferencesStore = defineStore(
  storeModulesNames.preferences,
  () => {
    const preferences = ref<Preferences>(structuredClone(defaultPreferences));

    /** 获取偏好配置 */
    const getPreferences = computed(() => preferences.value);

    /** 获取外观偏好 */
    const getAppearancePreferences = computed(() => preferences.value.appearance);

    /** 获取导航偏好 */
    const getNavigationPreferences = computed(() => preferences.value.navigation);

    /** 获取动效偏好 */
    const getMotionPreferences = computed(() => preferences.value.motion);

    /** 获取无障碍偏好 */
    const getAccessibilityPreferences = computed(() => preferences.value.accessibility);

    /** 获取国际化偏好 */
    const getI18nPreferences = computed(() => preferences.value.i18n);

    /** 获取小部件偏好 */
    const getWidgetsPreferences = computed(() => preferences.value.widgets);

    /**
     * 切换菜单折叠/展开状态
     * @param val 菜单折叠/展开状态
     */
    const toggleMenuCollapse = (val: boolean) => {
      if (getNavigationPreferences.value.isMenuCollapse === val) return;
      getNavigationPreferences.value.isMenuCollapse = val;
    };

    /**
     * 切换菜单手风琴模式
     * @param val 菜单手风琴模式状态
     */
    const toggleMenuAccordion = (val: boolean) => {
      if (getNavigationPreferences.value.enableMenuAccordion === val) return;
      getNavigationPreferences.value.enableMenuAccordion = val;
    };

    /**
     * 切换页面过渡动画
     * @param name 页面过渡动画名称
     */
    const togglePageTransition = (name: PageTransitionEnum) => {
      getMotionPreferences.value.pageTransition = name;
    };

    /**
     * 切换布局模式
     * @param mode 布局模式
     */
    const setLayoutMode = (mode: GetObjectValues<typeof LayoutModeEnum>) => {
      if (getNavigationPreferences.value.layoutMode === mode) return;
      getNavigationPreferences.value.layoutMode = mode;
    };

    /**
     * 切换面包屑显示状态
     * @param val 面包屑显示状态
     */
    const toggleBreadcrumbVisibility = (val: boolean) => {
      if (getNavigationPreferences.value.breadcrumb.showBreadcrumb === val) return;
      getNavigationPreferences.value.breadcrumb.showBreadcrumb = val;
    };

    /** 切换面包屑图标状态 */
    const toggleBreadcrumbIconVisibility = (val: boolean) => {
      if (getNavigationPreferences.value.breadcrumb.showBreadcrumbIcon === val) return;
      getNavigationPreferences.value.breadcrumb.showBreadcrumbIcon = val;
    };

    /**
     * 切换面包屑样式类型
     * @param val 面包屑样式类型
     */
    const toggleBreadcrumbStyle = (val: BreadcrumbStyle) => {
      if (getNavigationPreferences.value.breadcrumb.breadcrumbStyle === val) return;
      getNavigationPreferences.value.breadcrumb.breadcrumbStyle = val;
    };

    /**
     * 切换水印显示状态
     * @param val 水印显示状态
     */
    const toggleWatermarkVisibility = (val: boolean) => {
      if (getAppearancePreferences.value.showWatermark === val) return;
      getAppearancePreferences.value.showWatermark = val;
    };

    /**
     * 设置水印文本内容
     * @param val 水印文本
     */
    const setWatermarkText = (val: string) => {
      if (getAppearancePreferences.value.watermarkText === val) return;
      getAppearancePreferences.value.watermarkText = val;
    };

    /**
     * 切换当前语言
     * @param val 目标语言
     */
    const setLocale = (val: string) => {
      getI18nPreferences.value.currentLocale = val;
    };

    /**
     * 切换刷新视图组件
     * @param val 刷新视图组件状态
     */
    const toggleReloadViewWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableReloadView === val) return;
      getWidgetsPreferences.value.enableReloadView = val;
    };

    /**
     * 切换全屏部件
     * @param val 全屏部件状态
     */
    const toggleFullscreenWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableFullscreen === val) return;
      getWidgetsPreferences.value.enableFullscreen = val;
    };

    /**
     * 切换消息通知部件
     * @param val 消息通知部件状态
     */
    const enableNotificationWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableNotification === val) return;
      getWidgetsPreferences.value.enableNotification = val;
    };

    /**
     * 切换主题切换部件
     * @param val 主题切换部件状态
     */
    const toggleThemeWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableTheme === val) return;
      getWidgetsPreferences.value.enableTheme = val;
    };

    /**
     * 切换国际化切换部件
     * @param val 国际化切换部件状态
     */
    const toggleLocaleWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableLocale === val) return;
      getWidgetsPreferences.value.enableLocale = val;
    };

    /**
     * 切换侧边栏折叠/展开部件
     * @param val 侧边栏折叠/展开部件状态
     */
    const toggleMenuCollapseWidgetState = (val: boolean) => {
      if (getWidgetsPreferences.value.enableMenuCollapse === val) return;
      getWidgetsPreferences.value.enableMenuCollapse = val;
    };

    const { setThemeMode, addAccessibilityStyle, isDarkMode } = useTheme();

    /**
     * 设置无障碍模式
     * @param val 无障碍模式
     */
    const setAccessibilityMode = (val: AccessibilityModeEnum) => {
      addAccessibilityStyle(val);
      getAccessibilityPreferences.value.accessibilityMode = val;
    };

    /**
     * 设置主题色
     * @param val 主题色
     */
    const setPrimaryColor = (val: string) => {
      setElementPrimaryColor(val, isDarkMode.value);
      getAppearancePreferences.value.primaryColor = val;
    };

    /**
     * 切换主题模式
     * @param mode 主题模式
     */
    const toggleThemeMode = (mode: ThemeModeEnum) => {
      setThemeMode(mode);
      setElementPrimaryColor(getAppearancePreferences.value.primaryColor, isDarkMode.value);
      getAppearancePreferences.value.themeMode = mode;
    };

    const systemDark = usePreferredDark();

    // 监听系统主题变化
    watch(systemDark, () => {
      if (getAppearancePreferences.value.themeMode === ThemeModeEnum.SYSTEM) {
        setThemeMode(ThemeModeEnum.SYSTEM);
        setElementPrimaryColor(getAppearancePreferences.value.primaryColor, isDarkMode.value);
      }
    });

    return {
      preferences,
      getPreferences,
      getAppearancePreferences,
      getNavigationPreferences,
      getMotionPreferences,
      getAccessibilityPreferences,
      getI18nPreferences,
      getWidgetsPreferences,
      toggleMenuCollapse,
      toggleMenuAccordion,
      togglePageTransition,
      setLayoutMode,
      toggleThemeMode,
      toggleBreadcrumbVisibility,
      toggleBreadcrumbIconVisibility,
      toggleBreadcrumbStyle,
      toggleWatermarkVisibility,
      setLocale,
      toggleReloadViewWidgetState,
      toggleFullscreenWidgetState,
      enableNotificationWidgetState,
      toggleThemeWidgetState,
      toggleLocaleWidgetState,
      toggleMenuCollapseWidgetState,
      setAccessibilityMode,
      setPrimaryColor,
      setWatermarkText,
    };
  },
  { persist: true },
);

enableStoreHMR(createPreferencesStore);

export const usePreferencesStore = () => {
  return createPreferencesStore(store);
};
