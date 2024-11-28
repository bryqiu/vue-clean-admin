import type {
  LayoutSettingsType,
  SettingsType,
  SundriesSettingsType,
  ThemeSettingsType,
} from '#/settings';
import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums/index';

/** 默认主题设置 */
const DEFAULT_THEME_SETTINGS: ThemeSettingsType = {
  currentThemeMode: ThemeModeEnum.LIGHT, // 主题模式
  primaryColor: '#0d9fea', // 主题色
  pageTransitionName: PageTransitionEnum.FADE_DOWN, // 路由切换动画
};

/** 默认布局设置 */
const DEFAULT_LAYOUT_SETTINGS: LayoutSettingsType = {
  isMenuCollapse: false, // 控制菜单是否折叠
  sidebarOpenedWidth: 208, // 左侧边栏展开时的宽度
  sidebarCollapseWidth: 64, // 左侧边栏收缩时的宽度
  isMenuAccordion: false, // 控制菜单是否使用手风琴模式
};

/** 默认其他设置 */
const DEFAULT_SUNDRIES_SETTINGS: SundriesSettingsType = {
  hasWatermark: false,
  showBreadcrumb: true,
  showBreadcrumbIcon: true,
  breadcrumbStyleType: 'arrow',
  visualMode: VisualModeEnum.NORMAL,
};

/** 默认设置 */
const DEFAULT_SETTINGS: SettingsType = {
  theme: { ...DEFAULT_THEME_SETTINGS },
  layout: { ...DEFAULT_LAYOUT_SETTINGS },
  sundries: { ...DEFAULT_SUNDRIES_SETTINGS },
};

export { DEFAULT_SETTINGS };
