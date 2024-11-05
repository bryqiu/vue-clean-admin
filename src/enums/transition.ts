export enum PageTransitionEnum {
  /** 无动画 */
  NONE = 'none',
  /** 淡出淡出(基础) */
  FADE_BASE = 'fade-base',
  /** 淡入淡出(上) */
  FADE_UP = 'fade-up',
  /** 淡入淡出(下) */
  FADE_DOWN = 'fade-down',
  /** 淡入淡出(右) */
  FADE_RIGHT = 'fade-right',

  /** 缩放(基础) */
  SCALE_BASE = 'scale-base',
  /** 缩放(上) */
  SCALE_UP = 'scale-up',
  /** 缩放(下) */
  SCALE_DOWN = 'scale-down',

  /** 旋转效果 */
  ROTATE_BASE = 'rotate-base',
  /** 翻转效果 */
  FLIP_BASE = 'flip-base',
}
