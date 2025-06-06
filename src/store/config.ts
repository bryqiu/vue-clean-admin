import type { PluginOptions } from 'pinia-plugin-persistedstate';
import type { Layout, Settings, Share, Theme } from '@/store/types';
import { PageTransitionEnum, ThemeModeEnum, VisualModeEnum } from '@/enums/index';

/** 默认持久化存储配置 */
export const defaultStoreOptions: PluginOptions = {
  key: (id) => `__${import.meta.env.VITE_STORE_PREFIX}__${id}__`.toUpperCase(),
  storage: localStorage,
} as const;

/* ======================== 存储名称配置 ======================== */

/** 存储名称配置 */
export const storeModulesNames = {
  /** 用户模块 */
  user: 'user',
  /** 设置模块 */
  settings: 'settings',
} as const;

/* ======================== Setting 默认配置 ======================== */

/** 默认主题设置 */
const defaultTheme: Theme = {
  currentThemeMode: ThemeModeEnum.LIGHT, // 主题模式
  primaryColor: '#25B0F0', // 主色调
  pageTransitionName: PageTransitionEnum.FADE_DOWN, // 路由切换动画
  visualMode: VisualModeEnum.NORMAL, // 视觉模式
} as const;

/** 默认布局设置 */
const defaultLayout: Layout = {
  isMenuCollapse: false, // 控制菜单是否折叠
  sidebarOpenedWidth: 208, // 左侧边栏展开时的宽度
  sidebarCollapseWidth: 64, // 左侧边栏收缩时的宽度
  isMenuAccordion: false, // 控制菜单是否使用手风琴模式
} as const;

/** 默认共享设置 */
const defaultShare: Share = {
  hasWatermark: false, // 是否有水印
  showBreadcrumb: true, // 是否展示面包屑
  showBreadcrumbIcon: true, // 是否显示面包屑图标
  breadcrumbStyleType: 'arrow', // 面包屑样式
} as const;

/** 默认设置配置 */
export const defaultSettings: Settings = {
  theme: { ...defaultTheme },
  layout: { ...defaultLayout },
  share: { ...defaultShare },
} as const;
