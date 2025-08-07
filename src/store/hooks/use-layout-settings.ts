import { computed } from 'vue';
import { LayoutModeEnum } from '@/enums';

export const useLayoutSettings = () => {
  const { getLayoutSettings, toggleMenuCollapse, toggleMenuAccordion } = useSettingsStore();

  /** 菜单折叠 */
  const isMenuCollapse = computed({
    get: () => getLayoutSettings.isMenuCollapse,
    set: (val) => toggleMenuCollapse(val),
  });

  /** 手风琴模式 */
  const isMenuAccordion = computed({
    get: () => getLayoutSettings.isMenuAccordion,
    set: (val) => toggleMenuAccordion(val),
  });

  /** 获取当前侧边栏宽度 */
  const getCurrentSidebarWidth = computed(() => {
    return isMenuCollapse.value
      ? getLayoutSettings.sidebarCollapseWidth
      : getLayoutSettings.sidebarOpenedWidth;
  });

  /** 获取当前收缩侧边栏宽度 */
  const getCurrentSidebarCollapseWidth = computed(() => {
    return getLayoutSettings.sidebarCollapseWidth;
  });

  /** 获取当前展开侧边栏宽度 */
  const getCurrentSidebarOpenedWidth = computed(() => {
    return getLayoutSettings.sidebarOpenedWidth;
  });

  /** 获取双栏布局-当前整体宽度 */
  const getCurrentColSidebarWidth = computed(() => {
    return getLayoutSettings.colSidebarWidth;
  });

  /** 获取当前双栏布局-子侧边栏宽度 */
  const getCurrentColSubSidebarWidth = computed(() => {
    return getCurrentColSidebarWidth.value - getLayoutSettings.sidebarCollapseWidth;
  });

  /** 当前布局模式 */
  const currentLayoutMode = computed({
    get: () => getLayoutSettings.currentLayoutMode,
    set: (val: GetObjectValues<typeof LayoutModeEnum>) =>
      (getLayoutSettings.currentLayoutMode = val),
  });

  /**
   * 是否侧边栏布局
   */
  const isSideLayout = computed(() => {
    return getLayoutSettings.currentLayoutMode === LayoutModeEnum.SIDE;
  });

  /**
   * 是否顶部布局
   */
  const isTopLayout = computed(() => {
    return getLayoutSettings.currentLayoutMode === LayoutModeEnum.TOP;
  });

  /**
   * 是否双栏布局
   */
  const isColLayout = computed(() => {
    return getLayoutSettings.currentLayoutMode === LayoutModeEnum.COL;
  });

  /** 获取当前头部高度 */
  const getCurrentHeaderHeight = computed(() => {
    return getLayoutSettings.headerHeight;
  });

  return {
    isMenuCollapse,
    isMenuAccordion,
    getCurrentSidebarWidth,
    getCurrentSidebarCollapseWidth,
    getCurrentSidebarOpenedWidth,
    getCurrentColSubSidebarWidth,
    getCurrentColSidebarWidth,
    getCurrentHeaderHeight,
    currentLayoutMode,
    isSideLayout,
    isTopLayout,
    isColLayout,
  };
};
