import { useDark, usePreferredDark } from '@vueuse/core';
import { AccessibilityModeEnum, ThemeModeEnum } from '@/enums';
import { accessibilityModeOptions } from '@/dict';
import { computed } from 'vue';

export const useTheme = () => {
  const systemDark = usePreferredDark();

  const isDark = useDark({
    disableTransition: false,
    valueDark: ThemeModeEnum.DARK,
    valueLight: ThemeModeEnum.LIGHT,
  });

  const isDarkMode = computed(() => {
    return isDark.value;
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

  /**
   * 添加无障碍样式
   */
  const addAccessibilityStyle = (mode: AccessibilityModeEnum) => {
    const element = document.documentElement;

    accessibilityModeOptions.forEach((option) => {
      if (option.class) {
        element.classList.remove(option.class);
      }
    });

    // 找到对应的模式值
    const accessibilityModeValue = accessibilityModeOptions.find((option) => option.value === mode);

    accessibilityModeValue &&
      accessibilityModeValue.class &&
      element.classList.add(accessibilityModeValue.class);
  };

  return {
    getThemeMode,
    setThemeMode,
    addAccessibilityStyle,
    isDarkMode,
  };
};
