import { generateMixColor } from './transform';

/**
 * 设置 Css 变量，在根节点上(html)
 */
export const setHtmlProperty = (property: string, value: string | null, priority?: string) => {
  const style = document.documentElement.style;
  style.setProperty(property, value, priority);
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
