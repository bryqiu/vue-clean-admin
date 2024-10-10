export type AppIconType = 'iconify' | 'local';

export interface SvgIconProps {
  /**
   * 唯一ID自定义前缀
   * @default icon
   */
  prefix?: string;
  /**
   * 图标名称
   */
  icon: string;
  /**
   * 图标填充颜色
   * @default #334155
   */
  color?: string;
}

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
