import { useDark, usePreferredDark } from '@vueuse/core';
import { ThemeModeEnum, VisualModeEnum } from '@/enums';
import { visualModeOptions } from '@/dict';

export const useMode = () => {
  const systemDark = usePreferredDark();

  const isDark = useDark({
    disableTransition: false,
    valueDark: ThemeModeEnum.DARK,
    valueLight: ThemeModeEnum.LIGHT,
  });

  /** 获取主题 */
  const getThemeMode = () => {
    if (isDark.value) {
      return ThemeModeEnum.DARK;
    } else if (!isDark.value) {
      return ThemeModeEnum.LIGHT;
    } else {
      return ThemeModeEnum.SYSTEM;
    }
  };

  /** 设置主题 */
  const setThemeMode = (mode: ThemeModeEnum) => {
    switch (mode) {
      case ThemeModeEnum.DARK:
        isDark.value = true;
        break;
      case ThemeModeEnum.LIGHT:
        isDark.value = false;
        break;
      case ThemeModeEnum.SYSTEM:
        isDark.value = systemDark.value;
        break;
    }
  };

  /** 添加视觉样式 */
  const addVisualStyle = (mode: VisualModeEnum) => {
    const element = document.documentElement;

    // 移除所有视觉模式类
    visualModeOptions.forEach((option) => {
      if (option.class) {
        element.classList.remove(option.class);
      }
    });

    // 找到对应的模式
    const visualModeValue = visualModeOptions.find((option) => option.value === mode);

    visualModeValue && visualModeValue.class && element.classList.add(visualModeValue.class);
  };

  return {
    getThemeMode,
    setThemeMode,
    addVisualStyle,
  };
};
