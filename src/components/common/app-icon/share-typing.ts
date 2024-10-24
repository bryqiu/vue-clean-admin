import { IconFlipEnum } from '@/enums';
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
   * svg图标的大小
   * @default 16
   */
  size?: number | string;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 旋转角度（可以是字符串形式，比如60deg，但不推荐）
   * @default 0
   */
  rotate?: number | string;
  /**
   * 是否翻转，与iconify保持一致
   * @see https://iconify.design/docs/icon-components/vue/transform.html
   */
  flip?: IconFlipEnum;
  /**
   * 自定义样式
   */
  style?: string | object;
}

export interface AppIconProps extends SvgIconProps {
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
