import { generateMixColor } from './transform';
import { EL_COLOR_WEIGHT } from './constants';

/**
 * 设置 Css 变量，在根节点上(html)
 */
export const setHtmlProperty = (property: string, value: string | null, priority?: string) => {
  const style = document.documentElement.style;
  style.setProperty(property, value, priority);
};

/**
 * 添加el前缀
 * @param value 变量文本
 * @returns 带前缀el的文本
 */
export const addElPrefix = (value: string) => {
  return `el-${value}`;
};

/**
 * 系统主题色彩
 */
export const applyAppThemeColor = (primaryColor: string, isDark: boolean, type = 'primary') => {
  const { DEFAULT_COLOR, DEFAULT_DARK, variables } = generateMixColor(primaryColor, isDark);

  // 固定变量
  setHtmlProperty(`--el-color-${type}`, DEFAULT_COLOR);
  setHtmlProperty(`--el-color-${type}-dark-2`, DEFAULT_DARK);

  // 色阶变量
  for (const [key, value] of Object.entries(variables)) {
    setHtmlProperty(`--el-color-${type}-light-${key}`, value);
  }
};

/**
 * 针对主题色彩生成符合 tailwind 格式的色阶
 * @param type 颜色类型
 * @returns 对象色阶
 */
export const generateTwColorScale = (type: ElColorType) => {
  const colorVariableMap: Record<number | string, string> = {};

  colorVariableMap.DEFAULT = `var(--el-color-${type})`;

  EL_COLOR_WEIGHT.forEach((weight) => {
    colorVariableMap[weight] = `var(--el-color-${type}-light-${weight / 100})`;
  });

  return colorVariableMap;
};

/**
 * 通用生成符合 tailwind 格式的色阶
 * @param type 色阶类型
 * @returns 对象色阶
 */
export const generateTwScale = (type: string, weightList: string[], hasDefault: boolean = true) => {
  const variableMap: Record<number | string, string> = {};

  hasDefault && (variableMap[addElPrefix('default')] = `var(--el-${type}-color)`);

  weightList.forEach((weight) => {
    variableMap[addElPrefix(weight)] = `var(--el-${type}-color-${weight})`;
  });

  return variableMap;
};
