import { computed } from 'vue';
import { PageTransitionEnum, ThemeModeEnum } from '@/enums';

export const useThemeSettings = () => {
  const {
    getThemeSettings,
    togglePageTransition,
    toggleThemeMode,
    setPrimaryColor,
    setVisualMode,
  } = useSettingsStore();

  /** 路由动画 */
  const pageTransitionName = computed({
    get: () => getThemeSettings.pageTransitionName,
    set: (val: PageTransitionEnum) => togglePageTransition(val),
  });

  /** 是否有路由动画 */
  const hasPageTransition = computed(() => {
    return pageTransitionName.value !== PageTransitionEnum.NONE;
  });

  /** 当前主题模式 */
  const currentThemeMode = computed({
    get: () => getThemeSettings.currentThemeMode,
    set: (val: ThemeModeEnum) => {
      toggleThemeMode(val);
    },
  });

  /** 当前主题色调 */
  const currentPrimaryColor = computed({
    get: () => getThemeSettings.primaryColor,
    set: (val: string) => {
      setPrimaryColor(val);
    },
  });

  /** 当前视觉模式 */
  const currentVisualMode = computed({
    get: () => getThemeSettings.visualMode,
    set: (val) => {
      setVisualMode(val);
    },
  });

  /** 是否为系统模式 */
  const isSystemMode = computed(() => {
    return currentThemeMode.value === ThemeModeEnum.SYSTEM;
  });

  return {
    pageTransitionName,
    hasPageTransition,
    currentThemeMode,
    currentVisualMode,
    isSystemMode,
    currentPrimaryColor,
  };
};
