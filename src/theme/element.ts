import { EL_PRIMARY_COLOR_WEIGHT } from './constants';
import { getDarkColor, getLightColor, setHtmlProperty } from './helpers';

/**
 * 处理 Element Plus 主题颜色
 * @param color 主题颜色
 * @param isDark 是否暗黑模式
 */
export function setElementPrimaryColor(color: string, isDark: boolean = false): void {
  setHtmlProperty('--el-color-primary', color);
  setHtmlProperty(`--el-color-primary-dark-2`, getDarkColor(color, 0.2));

  for (const weight of EL_PRIMARY_COLOR_WEIGHT) {
    setHtmlProperty(
      `--el-color-primary-light-${weight / 100}`,
      getLightColor(color, weight / 1000, isDark),
    );
  }

  // for (const weight of COLOR_WEIGHT) {
  //   setHtmlProperty(`--el-color-primary-dark-${weight / 100}`, getDarkColor(color, weight / 1000));
  // }
}
