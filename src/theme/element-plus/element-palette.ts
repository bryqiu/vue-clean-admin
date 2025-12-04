import type { Config } from 'tailwindcss';
import {
  EL_ASSISTANT_COLOR_WEIGHT,
  EL_BG_WEIGHT,
  EL_BORDER_WEIGHT,
  EL_FILL_WEIGHT,
  EL_PRIMARY_COLOR_WEIGHT,
  EL_TEXT_WEIGHT,
} from '../constants';
import { getWeightValue } from '../helpers';

/**
 * 生成 Element Plus 主色、辅助色-色阶(primary、success、warning、danger、info)
 * @param colorType 主色、辅助色类型
 * @param weights 权重
 * @returns 颜色色阶
 */
function generateElPrimaryPalette(
  colorType: ElColorType = 'primary',
  weights: number[],
): Record<number | string, string> {
  const colorVariablePalette: Record<number | string, string> = {};

  colorVariablePalette.DEFAULT = `var(--el-color-${colorType})`;

  colorVariablePalette['dark-200'] = `var(--el-color-${colorType}-dark-2)`;

  weights.forEach((weight) => {
    colorVariablePalette[weight] = `var(--el-color-${colorType}-light-${getWeightValue(weight)})`;
  });

  return colorVariablePalette;
}

interface ElThemeOptions {
  /**
   * 是否包含默认值
   * @default true
   */
  hasDefault?: boolean;
  /**
   * 格式化函数，接收 colorType 和 weight 参数
   */
  format?: (colorType: string, weight: number | string) => string;
  /**
   * 自定义默认值的key
   * @default DEFAULT
   */
  defaultKey?: string;
}

/**
 * 生成 Element Plus 中性色-色阶
 * @param colorType 中性色类型(border、bg、fill、shadow...)
 * @param weights 权重列表
 * @param options 配置项
 * @returns 颜色色阶
 */
function generateElThemePalette(
  colorType: string,
  weights: number[] | string[],
  options?: ElThemeOptions,
): Record<number | string, string> {
  const { hasDefault = true, format, defaultKey = 'DEFAULT' } = options || {};

  const defaultFormat = (colorType: string, weight: number | string) =>
    `var(--el-${colorType}-color${weight ? `-${weight}` : ''})`;

  const currentFormatFn = format || defaultFormat;

  const colorVariablePalette: Record<number | string, string> = {};

  if (hasDefault) {
    colorVariablePalette[defaultKey] = currentFormatFn(colorType, '');
  }

  weights.forEach((weight) => {
    colorVariablePalette[weight] = currentFormatFn(colorType, weight);
  });

  return colorVariablePalette;
}

/**
 * 为对象的所有键名添加前缀
 * @param obj 要添加前缀的对象
 * @param prefix 前缀
 * @returns 添加前缀后的对象
 */
function addKeyPrefix<T extends Record<string, any>>(obj: T, prefix: string): Record<string, any> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value]));
}

export const elThemePalette: Config['theme'] = {
  extend: {
    colors: {
      /** 主题色 */
      'el-primary': generateElPrimaryPalette('primary', EL_PRIMARY_COLOR_WEIGHT),
      /** 成功色 */
      'el-success': generateElPrimaryPalette('success', EL_ASSISTANT_COLOR_WEIGHT),
      /** 警告色 */
      'el-warning': generateElPrimaryPalette('warning', EL_ASSISTANT_COLOR_WEIGHT),
      /** 危险色 */
      'el-danger': generateElPrimaryPalette('danger', EL_ASSISTANT_COLOR_WEIGHT),
      /** 信息色 */
      'el-info': generateElPrimaryPalette('info', EL_ASSISTANT_COLOR_WEIGHT),
    },
    textColor: {
      /** 文本色阶 */
      'el-text': generateElThemePalette('text', EL_TEXT_WEIGHT, { hasDefault: false }),
      'el-text-disabled': 'var(--el-text-color-placeholder)',
    },
    borderColor: {
      /** 边框色阶 */
      'el-border': generateElThemePalette('border', EL_BORDER_WEIGHT),
      'el-border-disabled': 'var(--el-disabled-border-color)',
    },
    fill: {
      /** 填充色阶 */
      'el-fill': generateElThemePalette('fill', EL_FILL_WEIGHT),
    },
    boxShadow: {
      /** 阴影色阶 */
      'el-shadow': 'var(--el-box-shadow)',
      'el-shadow-light': 'var(--el-box-shadow-light)',
      'el-shadow-lighter': 'var(--el-box-shadow-lighter)',
      'el-shadow-dark': 'var(--el-box-shadow-dark)',
    },
    backgroundColor: ({ theme }) => {
      return {
        /** 填充色阶 */
        ...theme('fill'),
        /** 背景色阶 */
        'el-bg': generateElThemePalette('bg', EL_BG_WEIGHT),
        'el-bg-disabled': 'var(--el-disabled-bg-color)',
        'el-bg-mask': 'var(--el-mask-color)',
        'el-bg-mask-extra-light': 'var(--el-mask-color-extra-light)',
      };
    },
  },
};
