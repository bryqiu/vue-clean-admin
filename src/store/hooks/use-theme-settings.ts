import { computed } from 'vue';
import { useSettingsStore } from '../index';
import { PageTransitionEnum } from '@/enums';

export const useThemeSettings = () => {
  const settingsStore = useSettingsStore();
  const themeSettings = settingsStore.getThemeSettings;

  /** 路由动画 */
  const pageTransitionName = computed(() => {
    return themeSettings.pageTransitionName;
  });

  /** 是否有路由动画 */
  const hasPageTransition = computed(() => {
    return pageTransitionName.value !== PageTransitionEnum.NONE;
  });

  return { pageTransitionName, hasPageTransition };
};
