import { computed, unref } from 'vue';
import { useSettingsStore } from '../index';
import { PageTransitionEnum, ThemeModeEnum } from '@/enums';

export const useThemeSettings = () => {
  const { getThemeSettings, togglePageTransition, toggleThemeMode, setPrimaryColor } =
    useSettingsStore();

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

  /** 主题色调 */
  const currentPrimaryColor = computed({
    get: () => unref(getThemeSettings).primaryColor,
    set: (val: string) => setPrimaryColor(val),
  });

  const isSystemMode = computed(() => {
    return currentThemeMode.value === ThemeModeEnum.SYSTEM;
  });

  return {
    pageTransitionName,
    hasPageTransition,
    currentThemeMode,
    isSystemMode,
    currentPrimaryColor,
  };
};
