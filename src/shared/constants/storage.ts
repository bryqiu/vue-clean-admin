import {
  ACCESSIBILITY_MODE_ENUM,
  LAYOUT_MODE_ENUM,
  PAGE_TRANSITION_ENUM,
  THEME_MODE_ENUM,
} from '../enums';
import { DEFAULT_PRIMARY_COLOR } from './common';
import { formatStoreKey } from '@/store/helpers';
import type { Preferences } from '#/preferences';

/* ======================== 存储名称配置 ======================== */

/** 存储 Key */
export const STORAGE_KEY = {
  /** 用户 */
  USER: 'user',
  /** 偏好 */
  PREFERENCES: 'preferences',
  /** 语言 */
  LOCALE: 'locale',
} as const;

/** 语言-本地存储 Key */
export const LOCALE_STORAGE_KEY = formatStoreKey(STORAGE_KEY.LOCALE);

/* ======================== Preferences 默认配置 ======================== */

/** 默认偏好配置 */
export const DEFAULT_PREFERENCES: Preferences = {
  i18n: {
    currentLocale: 'zh_CN', // 当前语言
  },
  appearance: {
    themeMode: THEME_MODE_ENUM.LIGHT, // 主题模式
    primaryColor: DEFAULT_PRIMARY_COLOR, // 主色调
    showWatermark: false, // 是否显示水印
    watermarkText: '© 2026 Vue Clean Admin', // 水印文本内容
  },
  navigation: {
    layoutMode: LAYOUT_MODE_ENUM.SIDE, // 布局模式
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
    pageTransition: PAGE_TRANSITION_ENUM.FADE_RIGHT, // 页面过渡动画
  },
  accessibility: {
    accessibilityMode: ACCESSIBILITY_MODE_ENUM.NORMAL, // 无障碍模式
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
