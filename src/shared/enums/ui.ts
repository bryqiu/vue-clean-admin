import type { ValueOf } from '../types';

/** 主题模式枚举 */
export const THEME_MODE_ENUM = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

/** 主题模式联合类型 */
export type ThemeModeEnumValue = ValueOf<typeof THEME_MODE_ENUM>;

/** 无障碍 */
export const ACCESSIBILITY_MODE_ENUM = {
  GRAY: 'gray',
  WEAK: 'weak',
  NORMAL: 'normal',
} as const;

/** 视觉模式联合类型 */
export type AccessibilityModeEnumValue = ValueOf<typeof ACCESSIBILITY_MODE_ENUM>;

/** 图标翻转枚举 */
export const ICON_FLIP_ENUM = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  BOTH: 'both',
} as const;

/** 图标翻转联合类型 */
export type IconFlipEnumValue = ValueOf<typeof ICON_FLIP_ENUM>;

/** 布局方向枚举 */
export const DIRECTION_ENUM = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

/** 布局方向联合类型 */
export type DirectionEnumValue = ValueOf<typeof DIRECTION_ENUM>;

/** 应用布局模式枚举 */
export const LAYOUT_MODE_ENUM = {
  SIDE: 'side',
  TOP: 'top',
  COL: 'col',
} as const;

/** 应用布局模式联合类型 */
export type LayoutModeEnumValue = ValueOf<typeof LAYOUT_MODE_ENUM>;

/** 尺寸规格枚举 */
export const SIZE_ENUM = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
} as const;

/** 尺寸规格联合类型 */
export type SizeEnumValue = ValueOf<typeof SIZE_ENUM>;

/** 页面转场动画枚举 */
export const PAGE_TRANSITION_ENUM = {
  NONE: 'none',
  FADE_BASE: 'fade-base',
  FADE_UP: 'fade-up',
  FADE_DOWN: 'fade-down',
  FADE_RIGHT: 'fade-right',
  SCALE_BASE: 'scale-base',
  SCALE_UP: 'scale-up',
  SCALE_DOWN: 'scale-down',
  ROTATE_BASE: 'rotate-base',
  FLIP_BASE: 'flip-base',
} as const;

/** 页面转场动画联合类型 */
export type PageTransitionEnumValue = ValueOf<typeof PAGE_TRANSITION_ENUM>;

/** 面包屑样式枚举 */
export const BREADCRUMB_STYLE_ENUM = {
  DEFAULT: 'default',
  ARROW: 'arrow',
  PARALLELOGRAM: 'parallelogram',
} as const;

/** 面包屑样式联合类型 */
export type BreadcrumbStyleEnumValue = ValueOf<typeof BREADCRUMB_STYLE_ENUM>;
