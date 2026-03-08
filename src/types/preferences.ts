import type {
  AccessibilityModeEnumValue,
  LayoutModeEnumValue,
  PageTransitionEnumValue,
  ThemeModeEnumValue,
} from '@/shared';

/** 外观偏好 */
export interface AppearancePreferences {
  /**
   * 主题模式
   * @default light
   */
  themeMode: ThemeModeEnumValue;
  /**
   * 主色调
   * @default #3b82f6
   */
  primaryColor: string;
  /**
   * 显示水印
   * @default false
   */
  showWatermark: boolean;
  /**
   * 水印文本内容
   * @default '© 2026 Vue Clean Admin'
   */
  watermarkText?: string;
}

interface Breadcrumb {
  /**
   * 面包屑样式
   * @default default
   */
  breadcrumbStyle: BreadcrumbStyle;
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
}

/** 布局 Tokens */
export interface LayoutTokens {
  /**
   * 左侧边栏展开时的宽度
   * @default 224px
   */
  sidebarOpenedWidth: number;
  /**
   * 左侧边栏收缩时的宽度
   * @default 60px
   */
  sidebarCollapseWidth: number;
  /**
   * 双栏布局-侧边栏宽度
   * @default 262px
   */
  colSidebarWidth: number;
  /**
   * 头部高度
   * @default 46px
   */
  headerHeight: number;
  /**
   * 内容区域间距
   * @default 12px
   */
  contentSpace: number;
}

/** 导航/布局偏好 */
export interface NavigationPreferences {
  /**
   * 布局模式
   * @default side
   */
  layoutMode: LayoutModeEnumValue;
  /**
   * 控制菜单是否折叠
   * @default false
   */
  isMenuCollapse: boolean;
  /**
   * 菜单是否启用手风琴模式(即最多容纳一个子菜单的展开)
   * @default false
   */
  enableMenuAccordion: boolean;
  /**
   * 面包屑
   */
  breadcrumb: Breadcrumb;
  /**
   * 布局 Token
   */
  layoutTokens: Readonly<LayoutTokens>;
}

/** 国际化偏好 */
export interface I18nPreferences {
  /**
   * 当前语言
   * @default zh_CN
   */
  currentLocale: string;
}

/** 动效偏好 */
export interface MotionPreferences {
  /**
   * 页面过渡动画
   * @default fade-right
   */
  pageTransition: PageTransitionEnumValue;
}

/** 无障碍偏好 */
export interface AccessibilityPreferences {
  /**
   * 无障碍模式
   * @default 'normal'
   */
  accessibilityMode: AccessibilityModeEnumValue;
}

/** 小部件 */
export interface Widgets {
  /**
   * 启用刷新部件
   * @default true
   */
  enableReloadView: boolean;
  /**
   * 启用全屏部件
   * @default true
   */
  enableFullscreen: boolean;
  /**
   * 启用消息通知部件
   * @default true
   */
  enableNotification: boolean;
  /**
   * 启用主题切换部件
   * @default true
   */
  enableTheme: boolean;
  /**
   * 启用国际化切换部件
   * @default true
   */
  enableLocale: boolean;
  /**
   * 启用侧边栏折叠/展开部件
   * @default true
   */
  enableMenuCollapse: boolean;
}

/** 用户偏好 */
export interface Preferences {
  i18n: I18nPreferences;
  appearance: AppearancePreferences;
  navigation: NavigationPreferences;
  motion: MotionPreferences;
  accessibility: AccessibilityPreferences;
  widgets: Widgets;
}
