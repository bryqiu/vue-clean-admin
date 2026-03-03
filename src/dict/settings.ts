import {
  AccessibilityModeEnum,
  LayoutModeEnum,
  PageTransitionEnum,
  SettingModuleEnum,
  ThemeModeEnum,
} from '@/enums';
import { ColLayout, SideLayout, TopLayout } from '@/layout/modules';
import type { Component } from 'vue';
import { defaultPreferences } from '@/store/config';
import type { SettingModeProps } from '@/components/systems/settings/widgets/setting-mode.vue';

interface LayoutModeOption
  extends Pick<
    SettingModeProps<GetObjectValues<typeof LayoutModeEnum>>,
    'label' | 'modeIcon' | 'value'
  > {
  component: Component;
}

export const layoutModeOptions: LayoutModeOption[] = [
  {
    label: '侧边布局',
    value: LayoutModeEnum.SIDE,
    modeIcon: 'side-layout',
    component: SideLayout,
  },
  {
    label: '顶部布局',
    value: LayoutModeEnum.TOP,
    modeIcon: 'top-layout',
    component: TopLayout,
  },
  {
    label: '双列布局',
    value: LayoutModeEnum.COL,
    modeIcon: 'col-layout',
    component: ColLayout,
  },
];

type PageTransition = {
  label?: string;
  options: BaseOptions<PageTransitionEnum>[];
};

/** 页面转场动画 */
export const pageTransitionOptions: PageTransition[] = [
  {
    label: '无动画',
    options: [
      {
        label: '无',
        value: PageTransitionEnum.NONE,
      },
    ],
  },
  {
    label: '淡入淡出动画',
    options: [
      {
        label: '基础',
        value: PageTransitionEnum.FADE_BASE,
      },
      {
        label: '向上',
        value: PageTransitionEnum.FADE_UP,
      },
      {
        label: '向下',
        value: PageTransitionEnum.FADE_DOWN,
      },
      {
        label: '向右',
        value: PageTransitionEnum.FADE_RIGHT,
      },
    ],
  },
  {
    label: '缩放动画',
    options: [
      {
        label: '基础',
        value: PageTransitionEnum.SCALE_BASE,
      },
      {
        label: '向上',
        value: PageTransitionEnum.SCALE_UP,
      },
      {
        label: '向下',
        value: PageTransitionEnum.SCALE_DOWN,
      },
    ],
  },
  {
    label: '其他动画',
    options: [
      {
        label: '旋转',
        value: PageTransitionEnum.ROTATE_BASE,
      },
      {
        label: '翻转',
        value: PageTransitionEnum.FLIP_BASE,
      },
    ],
  },
];

interface ModeOption extends Pick<SettingModeProps<ThemeModeEnum>, 'label' | 'value'> {
  enLabel: string;
  icon: string;
  modeIcon: string;
}

/** 主题模式 */
export const themeModeOptions: ModeOption[] = [
  {
    enLabel: 'Light',
    label: '明亮模式',
    value: ThemeModeEnum.LIGHT,
    icon: 'ri:sun-line',
    modeIcon: 'theme-light',
  },
  {
    enLabel: 'Dark',
    label: '暗黑模式',
    value: ThemeModeEnum.DARK,
    icon: 'ri:moon-line',
    modeIcon: 'theme-dark',
  },
  {
    enLabel: 'System',
    label: '跟随系统',
    value: ThemeModeEnum.SYSTEM,
    icon: 'ri:computer-line',
    modeIcon: 'theme-system',
  },
];

interface AccessibilityModeOption extends BaseOptions<AccessibilityModeEnum> {
  style?: string;
  class?: string;
}

/** 视觉模式 */
export const accessibilityModeOptions: AccessibilityModeOption[] = [
  {
    label: '灰度',
    value: AccessibilityModeEnum.GRAY,
    style: 'filter: grayscale(1)',
    class: 'gray-mode',
  },
  {
    label: '色弱',
    value: AccessibilityModeEnum.WEAK,
    style: 'filter: invert(80%)',
    class: 'weak-mode',
  },
  {
    label: '标准',
    value: AccessibilityModeEnum.NORMAL,
    style: '',
    class: '',
  },
];

export const presetPrimaryColorOptions: BaseOptions<string>[] = [
  {
    label: '默认品牌色',
    value: defaultPreferences.appearance.primaryColor,
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
  {
    label: '孔雀蓝',
    value: '#0eb0c9',
  },
  {
    label: '雾紫灰',
    value: '#908686',
  },
];

/** 面包屑样式 */
export const breadcrumbStyleOptions: BaseOptions<BreadcrumbStyle>[] = [
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
