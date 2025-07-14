import { PageTransitionEnum, SettingValueEnum, ThemeModeEnum, VisualModeEnum } from '@/enums';
import {
  About,
  Account,
  Copyright,
  Layout,
  Security,
  Share,
  Theme,
} from '@/components/systems/settings/modules';
import type { Component } from 'vue';
import { defaultSettings } from '@/store/config';

/* ======================== 设置 ======================== */

interface SettingOption extends BaseOptions<GetObjectValues<typeof SettingValueEnum>> {
  component: Component;
  icon: string;
  description?: string;
  disabled?: boolean;
}

export const settingOptions: SettingOption[] = [
  {
    label: '账号信息',
    value: SettingValueEnum.ACCOUNT,
    icon: 'ri:user-line',
    component: Account,
  },
  {
    label: '安全设置',
    value: SettingValueEnum.SECURITY,
    icon: 'ri:shield-keyhole-line',
    component: Security,
  },
  {
    label: '布局管理',
    value: SettingValueEnum.LAYOUT,
    icon: 'ri:layout-3-line',
    component: Layout,
  },
  {
    label: '主题偏好',
    value: SettingValueEnum.THEME,
    icon: 'ri:color-filter-ai-line',
    component: Theme,
  },
  {
    label: '共享设置',
    value: SettingValueEnum.SHARE,
    icon: 'ri:share-line',
    component: Share,
  },
  {
    label: '版权声明',
    value: SettingValueEnum.COPYRIGHT,
    icon: 'ri:copyright-line',
    component: Copyright,
  },
  {
    label: '关于系统',
    value: SettingValueEnum.ABOUT,
    icon: 'ri:information-2-line',
    component: About,
  },
];

/* ======================== 布局 ======================== */

type PageTransition = {
  label?: string;
  options: BaseOptions<PageTransitionEnum>[];
};

/** 页面转场动画 */
export const PageTransitionOptions: PageTransition[] = [
  {
    options: [
      {
        label: '无动画',
        value: PageTransitionEnum.NONE,
      },
    ],
  },
  {
    label: '淡入淡出效果',
    options: [
      {
        label: '淡出淡出(基础)',
        value: PageTransitionEnum.FADE_BASE,
      },
      {
        label: '淡入淡出(上)',
        value: PageTransitionEnum.FADE_UP,
      },
      {
        label: '淡入淡出(下)',
        value: PageTransitionEnum.FADE_DOWN,
      },
      {
        label: '淡入淡出(右)',
        value: PageTransitionEnum.FADE_RIGHT,
      },
    ],
  },
  {
    label: '缩放效果',
    options: [
      {
        label: '缩放(基础)',
        value: PageTransitionEnum.SCALE_BASE,
      },
      {
        label: '缩放(上)',
        value: PageTransitionEnum.SCALE_UP,
      },
      {
        label: '缩放(下)',
        value: PageTransitionEnum.SCALE_DOWN,
      },
    ],
  },
  {
    label: '其他动画',
    options: [
      {
        label: '旋转效果',
        value: PageTransitionEnum.ROTATE_BASE,
      },
      {
        label: '翻转效果',
        value: PageTransitionEnum.FLIP_BASE,
      },
    ],
  },
];

/* ======================== 主题 ======================== */

interface ModeOption extends BaseOptions<ThemeModeEnum> {
  icon: string;
}

/** 主题模式 */
export const themeModeOptions: ModeOption[] = [
  {
    label: 'Light',
    value: ThemeModeEnum.LIGHT,
    icon: 'ri:sun-line',
  },
  {
    label: 'Dark',
    value: ThemeModeEnum.DARK,
    icon: 'ri:moon-line',
  },
  {
    label: 'System',
    value: ThemeModeEnum.SYSTEM,
    icon: 'ri:color-filter-ai-line',
  },
];

interface VisualModeOption extends BaseOptions<VisualModeEnum> {
  style?: string;
  class?: string;
}

/** 视觉模式 */
export const visualModeOptions: VisualModeOption[] = [
  {
    label: '灰色模式',
    value: VisualModeEnum.GRAY,
    style: 'filter: grayscale(1)',
    class: 'gray-mode',
  },
  {
    label: '色弱模式',
    value: VisualModeEnum.WEAK,
    style: 'filter: invert(80%)',
    class: 'weak-mode',
  },
  {
    label: '标准模式',
    value: VisualModeEnum.NORMAL,
    style: '',
    class: '',
  },
];

export const presetPrimaryColorOptions: BaseOptions<string>[] = [
  {
    label: '默认品牌色',
    value: defaultSettings.theme.primaryColor,
  },
  {
    label: '竹绿',
    value: '#1ba784',
  },
  {
    label: '紫罗兰',
    value: '#a258d5',
  },
  {
    label: '山楂红',
    value: '#e7616c',
  },
  {
    label: '小马宝莉',
    value: '#f8aac0',
  },
  {
    label: '那不勒斯黄',
    value: '#f6cb1d',
  },
  {
    label: '荧光橙',
    value: '#ff8a00',
  },
];

/* ======================== 共享 ======================== */

/** 面包屑样式 */
export const breadcrumbStyleOptions: BaseOptions<BreadcrumbStyleType>[] = [
  {
    label: '文本',
    value: 'default',
  },
  {
    label: '箭头',
    value: 'arrow',
  },
  {
    label: '平行四边形',
    value: 'parallelogram',
  },
];
