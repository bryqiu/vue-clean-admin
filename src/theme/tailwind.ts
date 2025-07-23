import type { Config } from 'tailwindcss';
import {
  EL_ASSISTANT_COLOR_WEIGHT,
  EL_BG_WEIGHT,
  EL_BORDER_WEIGHT,
  EL_FILL_WEIGHT,
  EL_PRIMARY_COLOR_WEIGHT,
  EL_TEXT_WEIGHT,
} from './constants';

/**
 * 生成 Element Plus 主色、辅助色-色阶(primary、success、warning、danger、info)
 * @param colorType 主色、辅助色类型
 * @param weights 权重
 * @returns 颜色色阶
 */
export function generateElPrimaryScale(
  colorType: ElColorType = 'primary',
  weights: number[],
): Record<number | string, string> {
  const colorVariableScale: Record<number | string, string> = {};

  colorVariableScale.DEFAULT = `var(--el-color-${colorType})`;

  colorVariableScale['dark-200'] = `var(--el-color-${colorType}-dark-2)`;

  weights.forEach((weight) => {
    colorVariableScale[weight] = `var(--el-color-${colorType}-light-${weight / 100})`;
  });

  return colorVariableScale;
}

/**
 * 生成 Element Plus 中性色-色阶
 * @param colorType 中性色类型(border、bg、fill、shadow...)
 * @param weights 权重列表
 * @param hasDefault 是否包含默认值
 * @returns 颜色色阶
 */
export function generateElThemeScale(
  colorType: string,
  weights: number[] | string[],
  hasDefault: boolean = true,
): Record<number | string, string> {
  const colorVariableScale: Record<number | string, string> = {};

  hasDefault && (colorVariableScale.DEFAULT = `var(--el-${colorType}-color)`);

  weights.forEach((weight) => {
    colorVariableScale[weight] = `var(--el-${colorType}-color-${weight})`;
  });

  return colorVariableScale;
}

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
    colors: {
      /** 主题色 */
      'el-primary': generateElPrimaryScale('primary', EL_PRIMARY_COLOR_WEIGHT),
      /** 成功色 */
      'el-success': generateElPrimaryScale('success', EL_ASSISTANT_COLOR_WEIGHT),
      /** 警告色 */
      'el-warning': generateElPrimaryScale('warning', EL_ASSISTANT_COLOR_WEIGHT),
      /** 危险色 */
      'el-danger': generateElPrimaryScale('danger', EL_ASSISTANT_COLOR_WEIGHT),
      /** 信息色 */
      'el-info': generateElPrimaryScale('info', EL_ASSISTANT_COLOR_WEIGHT),
    },
    textColor: {
      /** 文本色阶 */
      'el-text': generateElThemeScale('text', EL_TEXT_WEIGHT, false),
    },
    borderColor: {
      /** 边框色阶 */
      'el-border': generateElThemeScale('border', EL_BORDER_WEIGHT),
    },
    fill: {
      /** 填充色阶 */
      'el-fill': generateElThemeScale('fill', EL_FILL_WEIGHT),
    },
    backgroundColor: ({ theme }) => {
      return {
        /** 填充色阶 */
        ...theme('fill'),
        /** 背景色阶 */
        'el-bg': generateElThemeScale('bg', EL_BG_WEIGHT),
      };
    },
  },
  borderRadius: roundScales,
};
