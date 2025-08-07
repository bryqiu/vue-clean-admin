import { LayoutModeEnum, PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums';

/** 主题设置 */
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
  /**
   * 视觉模式
   * @desc 用于设置不同的视觉效果，例如灰色模式、色弱模式等
   * @default ''
   */
  visualMode: VisualModeEnum;
}

/** 布局设置 */
export interface Layout {
  /**
   * 当前布局模式
   * @default sidebar
   */
  currentLayoutMode: GetObjectValues<typeof LayoutModeEnum>;
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
  /**
   * 双栏布局-侧边栏宽度
   * @default 262px
   */
  colSidebarWidth: number;
  /**
   * 头部高度
   * @default 56px
   */
  headerHeight: number;
}

/** 共享设置 */
export interface Share {
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
  /**
   * 是否有水印
   * @default false
   */
  hasWatermark: boolean;
}

/** 总体设置 */
export interface Settings {
  theme: Theme;
  layout: Layout;
  share: Share;
}
