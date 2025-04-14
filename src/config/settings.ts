import type { Layout, Settings, Share, Theme } from '#/settings';
import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums/index';

/** 默认主题设置 */
const DEFAULT_THEME_SETTINGS: Theme = {
  currentThemeMode: ThemeModeEnum.LIGHT, // 主题模式
  primaryColor: '#25B0F0', // 主色调
  pageTransitionName: PageTransitionEnum.FADE_DOWN, // 路由切换动画
};

/** 默认布局设置 */
const DEFAULT_LAYOUT_SETTINGS: Layout = {
  isMenuCollapse: false, // 控制菜单是否折叠
  sidebarOpenedWidth: 208, // 左侧边栏展开时的宽度
  sidebarCollapseWidth: 64, // 左侧边栏收缩时的宽度
  isMenuAccordion: false, // 控制菜单是否使用手风琴模式
};

/** 默认共享设置 */
const DEFAULT_SHARE_SETTINGS: Share = {
  hasWatermark: false, // 是否有水印
  showBreadcrumb: true, // 是否展示面包屑
  showBreadcrumbIcon: true, // 是否显示面包屑图标
  breadcrumbStyleType: 'arrow', // 面包屑样式
  visualMode: VisualModeEnum.NORMAL, // 视觉模式
};

/** 总体默认配置 */
const DEFAULT_SETTINGS: Settings = {
  theme: { ...DEFAULT_THEME_SETTINGS },
  layout: { ...DEFAULT_LAYOUT_SETTINGS },
  share: { ...DEFAULT_SHARE_SETTINGS },
};

export { DEFAULT_SETTINGS };
