import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums/index';
/* ======================== 主题 ======================== */

export interface Theme {
  /**
   * 主题模式
   * @default light
   */
  currentThemeMode: ThemeModeEnum;
  /**
   * 主色调
   * @default #25B0F0
   */
  primaryColor: string;
  /**
   * 组件切换动画
   * @default fade-down
   */
  pageTransitionName: PageTransitionEnum;
}

/* ======================== 布局 ======================== */

export interface Layout {
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

/* ======================== 杂项 ======================== */
// 面包屑
interface Breadcrumb {
  /**
   * 是否展示面包屑
   * @default true
   */
  showBreadcrumb: boolean;
  /**
   * 是否显示面包屑图标
   * @default true
   */
  showBreadcrumbIcon: boolean;
  /**
   * 面包屑样式
   * @default arrow
   */
  breadcrumbStyleType: BreadcrumbStyleType;
}

export interface Share extends Breadcrumb {
  /**
   * 是否有水印
   * @default false
   */
  hasWatermark: boolean;

  /**
   * 视觉模式
   * @default ''
   */
  visualMode: VisualModeEnum;
}

export interface Settings {
  theme: Theme;
  layout: Layout;
  share: Share;
}
