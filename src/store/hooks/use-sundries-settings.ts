import { computed, unref } from 'vue';

export const useSundriesSettings = () => {
  const {
    getSundriesSettings,
    toggleBreadcrumb,
    toggleBreadcrumbIcon,
    toggleBreadcrumbStyleType,
    setVisualMode,
  } = useSettingsStore();

  const hasWatermark = computed(() => {
    return unref(getSundriesSettings).hasWatermark;
  });

  const showBreadcrumb = computed({
    get: () => unref(getSundriesSettings).showBreadcrumb,
    set: (val) => toggleBreadcrumb(val),
  });

  const showBreadcrumbIcon = computed({
    get: () => unref(getSundriesSettings).showBreadcrumbIcon,
    set: (val) => toggleBreadcrumbIcon(val),
  });

  const currentVisualMode = computed({
    get: () => unref(getSundriesSettings).visualMode,
    set: (val) => setVisualMode(val),
  });

  const breadcrumbStyleType = computed({
    get: () => unref(getSundriesSettings).breadcrumbStyleType,
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
