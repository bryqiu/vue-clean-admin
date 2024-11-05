import { PageTransitionEnum } from '@/enums/index';

export interface ThemeSettingsType {
  /**
   * 主题色
   * @default #0d9fea
   */
  primaryColor: string;
  /**
   * 组件切换动画
   * @default fade-down
   */
  pageTransitionName: PageTransitionEnum;
}

export interface LayoutSettingsType {
  /**
   * 控制菜单是否折叠
   * @default false (默认展开)
   */
  isMenuCollapse: boolean;

  /**
   * 控制菜单是否使用手风琴模式(即最多容纳一个子菜单的展开)
   * @default false
   */
  isMenuAccordion: boolean;

  /**
   * 左侧边栏展开时的宽度
   * @default 208px
   */
  sidebarOpenedWidth: number;
  /**
   * 左侧边栏收缩时的宽度
   * @default 64px
   */
  sidebarCollapseWidth: number;
}

export interface SundriesSettingsType {
  /**
   * 是否有水印
   * @default false
   */
  hasWatermark: boolean;
}

export interface SettingsType {
  theme: ThemeSettingsType;
  layout: LayoutSettingsType;
  sundries: SundriesSettingsType;
}
