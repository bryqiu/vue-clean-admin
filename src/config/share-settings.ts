import { LayoutSettingsType, ThemeSettingsType } from '#/settings';
import { TransitionEnum } from '@/enums/index';

interface SettingsType {
  theme: ThemeSettingsType;
  layout: LayoutSettingsType;
}

/** 默认主题设置 */
const DEFAULT_THEME_SETTINGS: ThemeSettingsType = {
  primaryColor: '#0d9fea', // 主题色
  transitionName: TransitionEnum.SLIDE_DOWN, // 组件切换动画
};

/** 默认布局设置 */
const DEFAULT_LAYOUT_SETTINGS: LayoutSettingsType = {
  isMenuCollapse: false, // 控制菜单是否折叠
  sidebarOpenedWidth: 208, // 左侧边栏展开时的宽度
  sidebarCollapseWidth: 64, // 左侧边栏收缩时的宽度
  isMenuAccordion: false, // 控制菜单是否使用手风琴模式
};

/** 默认设置 */
const DEFAULT_SETTINGS: SettingsType = {
  theme: { ...DEFAULT_THEME_SETTINGS },
  layout: { ...DEFAULT_LAYOUT_SETTINGS },
};

export { DEFAULT_SETTINGS };
export type { SettingsType };
