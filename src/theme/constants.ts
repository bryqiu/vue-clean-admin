/**
 * Tailwind 调起 Element Plus 变量值前缀
 * 使用 Tailwind 定义样式时，统一使用该前缀，表示调用 Element Plus 变量值
 */
export const EL_PREFIX = 'el-';

/** Element Plus 主题色权重 */
export const EL_PRIMARY_COLOR_WEIGHT: ColorWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Element Plus 辅助色权重 */
export const EL_ASSISTANT_COLOR_WEIGHT = [300, 500, 700, 800, 900];

/** Element Plus 文本权重 */
export const EL_TEXT_WEIGHT = ['primary', 'regular', 'secondary', 'placeholder', 'disabled'];

/** Element Plus 边框权重 */
export const EL_BORDER_WEIGHT = ['darker', 'dark', 'light', 'lighter', 'extra-light'];

/** Element Plus 背景权重 */
export const EL_BG_WEIGHT = ['page', 'overlay'];

/** Element Plus 填充权重 */
export const EL_FILL_WEIGHT = [...EL_BORDER_WEIGHT, 'blank'];
