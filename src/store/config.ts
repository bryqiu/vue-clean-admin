import type { PluginOptions } from 'pinia-plugin-persistedstate';
import {
  AccessibilityModeEnum,
  LayoutModeEnum,
  PageTransitionEnum,
  ThemeModeEnum,
} from '@/enums/index';
import { PRIMARY_COLOR } from '@/theme/constants';
import { formatStoreKey } from './helpers';
import type { Preferences } from '#/preferences';

/** 默认持久化存储配置 */
export const defaultStoreOptions: PluginOptions = {
  key: (id) => formatStoreKey(id),
  storage: localStorage,
} as const;

/* ======================== 存储名称配置 ======================== */

/** 存储名称配置 */
export const storeModulesNames = {
  /** 用户模块 */
  user: 'user',
  /** 偏好模块 */
  preferences: 'preferences',
  /** 语言模块 */
  locale: 'locale',
} as const;

/* ======================== Preferences 默认配置 ======================== */

/** 默认偏好配置 */
export const defaultPreferences: Preferences = {
  i18n: {
    currentLocale: 'zh_CN', // 当前语言
  },
  appearance: {
    themeMode: ThemeModeEnum.LIGHT, // 主题模式
    primaryColor: PRIMARY_COLOR, // 主色调
    showWatermark: false, // 是否显示水印
    watermarkText: '© 2026 Vue Clean Admin', // 水印文本内容
  },
  navigation: {
    layoutMode: LayoutModeEnum.SIDE, // 布局模式
    isMenuCollapse: false, // 菜单是否折叠
    enableMenuAccordion: false, // 菜单手风琴模式
    breadcrumb: {
      breadcrumbStyle: 'default', // 面包屑样式
      showBreadcrumb: true, // 是否展示面包屑
      showBreadcrumbIcon: true, // 是否显示面包屑图标
    },
    layoutTokens: {
      sidebarOpenedWidth: 224, // 侧边栏展开宽度
      sidebarCollapseWidth: 60, // 侧边栏收缩宽度
      colSidebarWidth: 262, // 双栏布局侧边栏宽度
      headerHeight: 46, // 头部高度
      contentSpace: 12, // 内容区间距
    },
  },
  motion: {
    pageTransition: PageTransitionEnum.FADE_RIGHT, // 页面过渡动画
  },
  accessibility: {
    accessibilityMode: AccessibilityModeEnum.NORMAL, // 无障碍模式
  },
  widgets: {
    enableReloadView: true, // 启用刷新组件
    enableFullscreen: true, // 启用全屏组件
    enableTheme: true, // 启用主题组件
    enableLocale: true, // 启用语言组件
    enableMenuCollapse: true, // 启用折叠组件
    enableNotification: true, // 启用消息组件
  },
} as const;
