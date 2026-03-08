import { useDark, usePreferredDark } from '@vueuse/core';
import { ACCESSIBILITY_MODE_OPTION, THEME_MODE_ENUM } from '@/shared';
import type { AccessibilityModeEnumValue, ThemeModeEnumValue } from '@/shared';

import { computed } from 'vue';

export const useTheme = () => {
  const systemDark = usePreferredDark();

  const isDark = useDark({
    disableTransition: false,
    valueDark: THEME_MODE_ENUM.DARK,
    valueLight: THEME_MODE_ENUM.LIGHT,
  });

  const isDarkMode = computed(() => {
    return isDark.value;
  });

  /** 获取主题 */
  const getThemeMode = () => {
    if (isDark.value) {
      return THEME_MODE_ENUM.DARK;
    } else if (!isDark.value) {
      return THEME_MODE_ENUM.LIGHT;
    } else {
      return THEME_MODE_ENUM.SYSTEM;
    }
  };

  /** 设置主题 */
  const setThemeMode = (mode: ThemeModeEnumValue) => {
    switch (mode) {
      case THEME_MODE_ENUM.DARK:
        isDark.value = true;
        break;
      case THEME_MODE_ENUM.LIGHT:
        isDark.value = false;
        break;
      case THEME_MODE_ENUM.SYSTEM:
        isDark.value = systemDark.value;
        break;
    }
  };

  /**
   * 添加无障碍样式
   */
  const addAccessibilityStyle = (mode: AccessibilityModeEnumValue) => {
    const element = document.documentElement;

    ACCESSIBILITY_MODE_OPTION.forEach((option) => {
      if (option.className) {
        element.classList.remove(option.className);
      }
    });

    // 找到对应的模式值
    const accessibilityModeValue = ACCESSIBILITY_MODE_OPTION.find(
      (option) => option.value === mode,
    );

    accessibilityModeValue &&
      accessibilityModeValue.className &&
      element.classList.add(accessibilityModeValue.className);
  };

  return {
    getThemeMode,
    setThemeMode,
    addAccessibilityStyle,
    isDarkMode,
  };
};
