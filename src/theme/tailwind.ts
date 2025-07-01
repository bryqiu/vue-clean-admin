import type { Config } from 'tailwindcss';
import {
  EL_ASSISTANT_COLOR_WEIGHT,
  EL_BG_WEIGHT,
  EL_BORDER_WEIGHT,
  EL_FILL_WEIGHT,
  EL_PREFIX,
  EL_PRIMARY_COLOR_WEIGHT,
  EL_SHADOW_WEIGHT,
  EL_TEXT_WEIGHT,
} from './constants';

/**
 * 生成 Tailwind 颜色阶
 * @param colorType 色彩类型
 * @param weight 权重列表
 * @returns 颜色色阶
 */
export function generateTailwindColorScale(
  colorType: ElColorType = 'primary',
  weight: number[],
): Record<number | string, string> {
  const colorVariableScale: Record<number | string, string> = {};

  colorVariableScale.DEFAULT = `var(--el-color-${colorType})`;

  weight.forEach((weight) => {
    colorVariableScale[weight] = `var(--el-color-${colorType}-light-${weight / 100})`;
  });

  return colorVariableScale;
}

/**
 * 通用的 Tailwind 主题配置
 * @param colorType 颜色类型
 * @param weight 权重列表
 * @param hasDefault 是否包含默认值
 * @returns 颜色色阶
 */
function generateTailwindScale(
  colorType: string,
  weight: number[] | string[],
  hasDefault: boolean = true,
): Record<number | string, string> {
  const colorVariableScale: Record<number | string, string> = {};

  hasDefault && (colorVariableScale.default = `var(--el-${colorType}-color)`);

  weight.forEach((weight) => {
    colorVariableScale[weight] = `var(--el-${colorType}-color-${weight})`;
  });

  return colorVariableScale;
}

function withPrefix<T extends Record<string, any>>(obj: T, prefix: string): Record<string, any> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value]));
}

const themeColorScales = {
  /** 主题色 */
  primary: generateTailwindColorScale('primary', EL_PRIMARY_COLOR_WEIGHT),
  /** 成功色 */
  success: generateTailwindColorScale('success', EL_ASSISTANT_COLOR_WEIGHT),
  /** 警告色 */
  warning: generateTailwindColorScale('warning', EL_ASSISTANT_COLOR_WEIGHT),
  /** 危险色 */
  danger: generateTailwindColorScale('danger', EL_ASSISTANT_COLOR_WEIGHT),
  /** 信息色 */
  info: generateTailwindColorScale('info', EL_ASSISTANT_COLOR_WEIGHT),
};

/** 边框色阶 */
const borderScales = {
  border: generateTailwindScale('border', EL_BORDER_WEIGHT),
};

/** 背景色阶 */
const bgScales = {
  bg: generateTailwindScale('bg', EL_BG_WEIGHT),
};

/** 填充色阶 */
const fillScales = {
  fill: generateTailwindScale('fill', EL_FILL_WEIGHT),
};

/** 阴影色阶 */
const shadowScales = {
  shadow: generateTailwindScale('shadow', EL_SHADOW_WEIGHT),
};

/** 文本色阶 */
const textScales = {
  text: generateTailwindScale('text', EL_TEXT_WEIGHT, false),
};

/** 圆角色阶 */
const roundScales = {
  none: '0px',
  sm: 'var(--app-round-sm) /* 2px */',
  DEFAULT: 'var(--app-round) /* 8px */',
  md: 'var(--app-round-md) /* 4px */',
  lg: 'var(--app-round) /* 8px */',
  xl: 'var(--app-round-xl) /* 12px */',
  '2xl': 'var(--app-round-2xl) /* 16px */',
  '3xl': 'var(--app-round-3xl) /* 24px */',
  full: '9999px',
};

export const tailwindThemeConfig: Config['theme'] = {
  extend: {
    colors: withPrefix(themeColorScales, EL_PREFIX),
    textColor: {
      ...withPrefix(textScales, EL_PREFIX),
    },
    borderColor: {
      ...withPrefix(borderScales, EL_PREFIX),
    },
    fill: {
      ...withPrefix(fillScales, EL_PREFIX),
    },
    backgroundColor: ({ theme }) => {
      return {
        ...theme('fill'),
        ...withPrefix(bgScales, EL_PREFIX),
      };
    },
    boxShadow: {
      ...withPrefix(shadowScales, EL_PREFIX),
    },
  },
  borderRadius: roundScales,
};
