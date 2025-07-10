import { computed } from 'vue';

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

  /** 获取当前头部高度 */
  const getCurrentHeaderHeight = computed(() => {
    return getLayoutSettings.headerHeight;
  });

  return { isMenuCollapse, isMenuAccordion, getCurrentSidebarWidth, getCurrentHeaderHeight };
};
