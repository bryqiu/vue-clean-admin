import { computed } from 'vue';
import { LayoutModeEnum, PageTransitionEnum, ThemeModeEnum } from '@/enums';
import { usePreferencesStore } from '@/store/modules/preferences';

export const usePreferences = () => {
  const preferencesStore = usePreferencesStore();

  /**
   * 当前主题模式
   */
  const currentThemeMode = computed({
    get: () => preferencesStore.getAppearancePreferences.themeMode,
    set: (val: ThemeModeEnum) => preferencesStore.toggleThemeMode(val),
  });

  /**
   * 主题色调
   */
  const currentPrimaryColor = computed({
    get: () => preferencesStore.getAppearancePreferences.primaryColor,
    set: (val: string) => preferencesStore.setPrimaryColor(val),
  });

  /**
   * 无障碍模式
   */
  const accessibilityMode = computed({
    get: () => preferencesStore.getAccessibilityPreferences.accessibilityMode,
    set: (val) => preferencesStore.setAccessibilityMode(val),
  });

  /**
   * 是否为系统模式
   */
  const isSystemThemeMode = computed(() => {
    return currentThemeMode.value === ThemeModeEnum.SYSTEM;
  });

  /**
   * 路由动画
   */
  const pageTransitionName = computed({
    get: () => preferencesStore.getMotionPreferences.pageTransition,
    set: (val: PageTransitionEnum) => preferencesStore.togglePageTransition(val),
  });

  /**
   * 是否有路由动画
   */
  const hasPageTransition = computed(() => {
    return pageTransitionName.value !== PageTransitionEnum.NONE;
  });

  /**
   * 是否折叠菜单
   */
  const isMenuCollapse = computed({
    get: () => preferencesStore.getNavigationPreferences.isMenuCollapse,
    set: (val: boolean) => preferencesStore.toggleMenuCollapse(val),
  });

  /** 是否启用刷新视图组件 */
  const enableReloadViewWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableReloadView,
    set: (val: boolean) => preferencesStore.toggleReloadViewWidgetState(val),
  });

  /** 是否启用全屏部件 */
  const enableFullscreenWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableFullscreen,
    set: (val: boolean) => preferencesStore.toggleFullscreenWidgetState(val),
  });

  /** 是否启用消息通知部件 */
  const enableNotificationWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableNotification,
    set: (val: boolean) => preferencesStore.enableNotificationWidgetState(val),
  });

  /** 是否启用主题切换部件 */
  const enableThemeWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableTheme,
    set: (val: boolean) => preferencesStore.toggleThemeWidgetState(val),
  });

  /** 是否启用国际化切换部件 */
  const enableLocaleWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableLocale,
    set: (val: boolean) => preferencesStore.toggleLocaleWidgetState(val),
  });

  /** 是否启用侧边栏折叠/展开部件 */
  const enableMenuCollapseWidget = computed({
    get: () => preferencesStore.getWidgetsPreferences.enableMenuCollapse,
    set: (val: boolean) => preferencesStore.toggleMenuCollapseWidgetState(val),
  });

  /**
   * 是否开启手风琴模式
   */
  const enableMenuAccordion = computed({
    get: () => preferencesStore.getNavigationPreferences.enableMenuAccordion,
    set: (val: boolean) => preferencesStore.toggleMenuAccordion(val),
  });

  /**
   * 当前布局模式
   */
  const currentLayoutMode = computed({
    get: () => preferencesStore.getNavigationPreferences.layoutMode,
    set: (val: GetObjectValues<typeof LayoutModeEnum>) => preferencesStore.setLayoutMode(val),
  });

  /**
   * 是否侧边栏布局
   */
  const isSideLayout = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutMode === LayoutModeEnum.SIDE;
  });

  /**
   * 是否顶部布局
   */
  const isTopLayout = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutMode === LayoutModeEnum.TOP;
  });

  /**
   * 是否双栏布局
   */
  const isColLayout = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutMode === LayoutModeEnum.COL;
  });

  /** 获取当前侧边栏宽度 */
  const getCurrentSidebarWidth = computed(() => {
    return isMenuCollapse.value
      ? preferencesStore.getNavigationPreferences.layoutTokens.sidebarCollapseWidth
      : preferencesStore.getNavigationPreferences.layoutTokens.sidebarOpenedWidth;
  });

  /** 获取当前收缩侧边栏宽度 */
  const getCurrentSidebarCollapseWidth = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutTokens.sidebarCollapseWidth;
  });

  /** 获取当前展开侧边栏宽度 */
  const getCurrentSidebarOpenedWidth = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutTokens.sidebarOpenedWidth;
  });

  /** 获取双栏布局-当前整体宽度 */
  const getCurrentColSidebarWidth = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutTokens.colSidebarWidth;
  });

  /** 获取当前双栏布局-子侧边栏宽度 */
  const getCurrentColSubSidebarWidth = computed(() => {
    return (
      preferencesStore.getNavigationPreferences.layoutTokens.colSidebarWidth -
      preferencesStore.getNavigationPreferences.layoutTokens.sidebarCollapseWidth
    );
  });

  /** 获取当前头部高度 */
  const getCurrentHeaderHeight = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutTokens.headerHeight;
  });

  /** 获取当前内容区域间距 */
  const getCurrentContentSpace = computed(() => {
    return preferencesStore.getNavigationPreferences.layoutTokens.contentSpace;
  });

  /** 是否显示水印 */
  const showWatermark = computed({
    get: () => preferencesStore.getAppearancePreferences.showWatermark,
    set: (val: boolean) => preferencesStore.toggleWatermarkVisibility(val),
  });

  /** 水印文本内容 */
  const watermarkText = computed({
    get: () => preferencesStore.getAppearancePreferences.watermarkText,
    set: (val: string) => preferencesStore.setWatermarkText(val),
  });

  /** 是否显示面包屑 */
  const showBreadcrumb = computed({
    get: () => preferencesStore.getNavigationPreferences.breadcrumb.showBreadcrumb,
    set: (val: boolean) => preferencesStore.toggleBreadcrumbVisibility(val),
  });

  /** 是否显示面包屑图标 */
  const showBreadcrumbIcon = computed({
    get: () => preferencesStore.getNavigationPreferences.breadcrumb.showBreadcrumbIcon,
    set: (val: boolean) => preferencesStore.toggleBreadcrumbIconVisibility(val),
  });

  /** 面包屑样式 */
  const breadcrumbStyle = computed({
    get: () => preferencesStore.getNavigationPreferences.breadcrumb.breadcrumbStyle,
    set: (val: BreadcrumbStyle) => preferencesStore.toggleBreadcrumbStyle(val),
  });

  return {
    currentThemeMode,
    currentPrimaryColor,
    accessibilityMode,
    isSystemThemeMode,
    pageTransitionName,
    hasPageTransition,
    isMenuCollapse,
    enableReloadViewWidget,
    enableFullscreenWidget,
    enableNotificationWidget,
    enableThemeWidget,
    enableLocaleWidget,
    enableMenuCollapseWidget,
    enableMenuAccordion,
    showWatermark,
    watermarkText,
    currentLayoutMode,
    isSideLayout,
    isTopLayout,
    isColLayout,
    getCurrentSidebarWidth,
    getCurrentSidebarCollapseWidth,
    getCurrentSidebarOpenedWidth,
    getCurrentColSubSidebarWidth,
    getCurrentColSidebarWidth,
    getCurrentHeaderHeight,
    getCurrentContentSpace,
    showBreadcrumb,
    showBreadcrumbIcon,
    breadcrumbStyle,
  };
};
