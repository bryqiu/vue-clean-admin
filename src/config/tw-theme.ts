import {
  EL_BG_SIGN,
  EL_BG_WEIGHT,
  EL_BORDER_SIGN,
  EL_BORDER_WEIGHT,
  EL_FILL_SIGN,
  EL_FILL_WEIGHT,
  EL_TEXT_SIGN,
  EL_TEXT_WEIGHT,
  generateTwColorScale,
  generateTwScale,
} from '../colors';
import type { Config } from 'tailwindcss';

/** Tailwind 主题配置对象 */
export const twThemeConfig: Config['theme'] = {
  extend: {
    colors: {
      /**
       * Element Plus 主题色
       */
      primary: generateTwColorScale('primary'),
      /**
       * Element Plus 警告色
       */
      warning: generateTwColorScale('warning'),
      /**
       * Element Plus 成功色
       */
      success: generateTwColorScale('success'),
      /**
       * Element Plus 错误色
       */
      danger: generateTwColorScale('danger'),
      /**
       * Element Plus 信息色
       */
      info: generateTwColorScale('info'),
    },

    borderColor: {
      // Element Plus 边框
      ...generateTwScale(EL_BORDER_SIGN, EL_BORDER_WEIGHT),
    },

    textColor: {
      // Element Plus 文本
      ...generateTwScale(EL_TEXT_SIGN, EL_TEXT_WEIGHT, false),
    },

    fill: {
      // Element Plus 填充
      ...generateTwScale(EL_FILL_SIGN, EL_FILL_WEIGHT),
    },

    backgroundColor: ({ theme }) => {
      return {
        // Element Plus 填充 + 背景
        ...theme('fill'),
        ...generateTwScale(EL_BG_SIGN, EL_BG_WEIGHT, false),
      };
    },
    // 圆角
    borderRadius: {
      sm: 'var(--app-round-sm) /* 2px */',
      md: 'var(--app-round-md) /* 4px */',
      lg: 'var(--app-round) /* 8px */',
      xl: 'var(--app-round-xl) /* 12px */',
      '2xl': 'var(--app-round-2xl) /* 16px */',
      '3xl': 'var(--app-round-3xl) /* 24px */',
      DEFAULT: 'var(--app-round) /* 8px */',
    },
    // 阴影
    boxShadow: {
      header: 'var(--app-header-shadow)',
    },
  },
};
