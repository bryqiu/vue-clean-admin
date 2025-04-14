import { computed, unref } from 'vue';

export const useShareSettings = () => {
  const {
    getShareSettings,
    toggleBreadcrumb,
    toggleBreadcrumbIcon,
    toggleBreadcrumbStyleType,
    setVisualMode,
  } = useSettingsStore();

  const hasWatermark = computed(() => {
    return unref(getShareSettings).hasWatermark;
  });

  const showBreadcrumb = computed({
    get: () => unref(getShareSettings).showBreadcrumb,
    set: (val) => toggleBreadcrumb(val),
  });

  const showBreadcrumbIcon = computed({
    get: () => unref(getShareSettings).showBreadcrumbIcon,
    set: (val) => toggleBreadcrumbIcon(val),
  });

  const currentVisualMode = computed({
    get: () => unref(getShareSettings).visualMode,
    set: (val) => setVisualMode(val),
  });

  const breadcrumbStyleType = computed({
    get: () => unref(getShareSettings).breadcrumbStyleType,
    set: (val) => toggleBreadcrumbStyleType(val),
  });
  return {
    hasWatermark,
    showBreadcrumb,
    showBreadcrumbIcon,
    breadcrumbStyleType,
    currentVisualMode,
  };
};
