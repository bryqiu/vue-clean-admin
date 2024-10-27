import { computed } from 'vue';

export const useSundriesSettings = () => {
  const settingsStore = useSettingsStore();
  const sundriesSettings = settingsStore.getSundriesSettings;

  const hasWatermark = computed(() => {
    return sundriesSettings.hasWatermark;
  });
  return { hasWatermark };
};
