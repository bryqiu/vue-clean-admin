import { computed, unref } from 'vue';
import { useSettingsStore } from '../index';
import { PageTransitionEnum, ThemeModeEnum } from '@/enums';

export const useThemeSettings = () => {
  const { getThemeSettings, togglePageTransition, toggleThemeMode } = useSettingsStore();

  /** 路由动画 */
  const pageTransitionName = computed({
    get: () => unref(getThemeSettings).pageTransitionName,
    set: (val: PageTransitionEnum) => togglePageTransition(val),
  });

  /** 是否有路由动画 */
  const hasPageTransition = computed(() => {
    return pageTransitionName.value !== PageTransitionEnum.NONE;
  });

  /** 主题模式 */
  const currentThemeMode = computed({
    get: () => unref(getThemeSettings).currentThemeMode,
    set: (val: ThemeModeEnum) => toggleThemeMode(val),
  });

  const isSystemMode = computed(() => {
    return currentThemeMode.value === ThemeModeEnum.SYSTEM;
  });

  return { pageTransitionName, hasPageTransition, currentThemeMode, isSystemMode };
};
