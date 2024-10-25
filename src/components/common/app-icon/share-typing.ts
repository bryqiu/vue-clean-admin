import { IconFlipEnum } from '@/enums';
import type { IconProps as IconifyProps } from '@iconify/vue';
import type { CSSProperties } from 'vue';

export type AppIconType = 'iconify' | 'local';

export interface SvgIconProps {
  /**
   * 唯一ID自定义前缀
   * @default icon
   */
  prefix?: string;
  /**
   * 图标类名
   */
  iconClass?: string;
  /**
   * 图标名称
   */
  icon: string;
  /**
   * 图标大小，为规范和协调化，iconify和SvgIcon统一使用height
   * @default 16
   * @see https://iconify.design/docs/icon-components/vue2/dimensions.html#setting-only-width-or-height
   */
  height?: IconifyProps['height'];
  // width?: IconifyProps['width'];
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 旋转角度
   * @default 0
   */
  rotate?: number | string;
  /**
   * 是否翻转，与iconify保持一致
   * @see https://iconify.design/docs/icon-components/vue/transform.html
   */
  flip?: IconFlipEnum;
  /**
   * 垂直翻转图标
   * @default false
   */
  verticalFlip?: boolean;
  /**
   * 水平翻转图标
   * @default false
   */
  horizontalFlip?: boolean;
  /**
   * 自定义样式
   */
  style?: string | CSSProperties;
}
/**
 * PS:inline - 默认开启垂直对齐
 * @see https://iconify.design/docs/icon-components/vue/inline.html#inline-attribute
 */

export interface AppIconProps {
  /**
   * 图标类型
   * @default iconify
   */
  type?: AppIconType;
  /**
   * 图标名称
   */
  icon: string;
}
