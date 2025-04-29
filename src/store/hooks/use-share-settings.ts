import { computed } from 'vue';

export const useShareSettings = () => {
  const { getShareSettings, toggleBreadcrumb, toggleBreadcrumbIcon, toggleBreadcrumbStyleType } =
    useSettingsStore();

  /** 是否显示水印 */
  const hasWatermark = computed(() => {
    return getShareSettings.hasWatermark;
  });

  /** 是否显示面包屑 */
  const showBreadcrumb = computed({
    get: () => getShareSettings.showBreadcrumb,
    set: (val) => toggleBreadcrumb(val),
  });

  /** 是否显示面包屑图标 */
  const showBreadcrumbIcon = computed({
    get: () => getShareSettings.showBreadcrumbIcon,
    set: (val) => toggleBreadcrumbIcon(val),
  });

  /** 面包屑样式 */
  const breadcrumbStyleType = computed({
    get: () => getShareSettings.breadcrumbStyleType,
    set: (val) => toggleBreadcrumbStyleType(val),
  });
  return {
    hasWatermark,
    showBreadcrumb,
    showBreadcrumbIcon,
    breadcrumbStyleType,
  };
};
