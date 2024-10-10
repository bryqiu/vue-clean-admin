import { TransitionEnum } from '@/enums/index';

interface SettingsType {
  theme: {
    /**
     * 主题色
     * @default #0d9fea
     */
    primaryColor: string;
    /**
     * 组件切换动画
     * @default slide-down (始终从下淡入淡出)
     */
    transitionName: TransitionEnum;
  };
  layout: {
    //   /** 布局 */
    //   layout: "side" | "top";
    //   /** 固定头部 */
    //   fixedHeader: boolean;
    //   /** 固定侧边栏 */
    //   fixedSidebar: boolean;
    //   /** 侧边栏宽度 */
    //   sidebarWidth: number;

    /**
     * 控制菜单是否折叠
     * @default false (默认展开)
     */
    isMenuCollapse: boolean;

    /**
     * 控制菜单是否使用手风琴模式
     * @default false
     */
    isMenuAccordion: boolean;
  };
}

/** 默认设置 */
const defaultSettings: SettingsType = {
  theme: { primaryColor: '#0d9fea', transitionName: TransitionEnum.SLIDE_DOWN },
  layout: {
    isMenuCollapse: false,
    isMenuAccordion: false,
  },
};

export { defaultSettings };
export type { SettingsType };
