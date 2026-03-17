import {
  ACCESSIBILITY_MODE_ENUM,
  BREADCRUMB_STYLE_ENUM,
  LAYOUT_MODE_ENUM,
  PAGE_TRANSITION_ENUM,
  THEME_MODE_ENUM,
} from '../enums';

import type {
  AccessibilityModeEnumValue,
  BreadcrumbStyleEnumValue,
  LayoutModeEnumValue,
  PageTransitionEnumValue,
  ThemeModeEnumValue,
} from '../enums';
import { DEFAULT_PRIMARY_COLOR } from '../constants';
import type { OptionGroup, Options } from '#/common';
import { ColLayout, SideLayout, TopLayout } from '@/layout/modules';
import type { Component } from 'vue';
import { About, Preferences, Shortcut } from '@/components/systems/settings/modules';

/** 设置页左侧模块列表 */
export const SETTING_MODULES = [
  {
    label: '个人偏好',
    value: 'preference',
    icon: 'ri:settings-3-line',
    component: Preferences,
  },
  {
    label: '快捷方式',
    value: 'shortcut',
    icon: 'ri:keyboard-box-line',
    component: Shortcut,
  },
  {
    label: '关于系统',
    value: 'about',
    icon: 'ri:copyright-line',
    component: About,
  },
] as const satisfies Options<string, { icon: string; component: Component }>;

/** 偏好面板分组列表。 */
export const PREFERENCE_CONTAINERS = [
  { value: 'appearance', label: '外观', desc: '主题、色彩与水印' },
  { value: 'navigation', label: '导航与布局', desc: '布局、菜单与面包屑' },
  { value: 'motion', label: '动效', desc: '页面切换与动效' },
  { value: 'accessibility', label: '无障碍', desc: '视觉辅助与可读性' },
  { value: 'i18n', label: '语言与地区', desc: '界面语言与区域' },
  { value: 'widgets', label: '小部件', desc: '快捷组件显示控制' },
] as const satisfies Options<string, { desc: string }>;

type LayoutModeOptionMeta = {
  /** 菜单项-图标 */
  modeIcon: string;
  /** 组件 */
  component: Component;
};

/** 布局模式选项 */
export const LAYOUT_MODE_OPTION: Options<LayoutModeEnumValue, LayoutModeOptionMeta> = [
  {
    label: '侧边布局',
    value: LAYOUT_MODE_ENUM.SIDE,
    modeIcon: 'side-layout',
    component: SideLayout,
  },
  { label: '顶部布局', value: LAYOUT_MODE_ENUM.TOP, modeIcon: 'top-layout', component: TopLayout },
  { label: '双列布局', value: LAYOUT_MODE_ENUM.COL, modeIcon: 'col-layout', component: ColLayout },
] as const;

/** 页面转场分组选项 */
export const PAGE_TRANSITION_OPTION: OptionGroup<PageTransitionEnumValue>[] = [
  {
    label: '无动画',
    options: [{ label: '无', value: PAGE_TRANSITION_ENUM.NONE }],
  },
  {
    label: '淡入淡出动画',
    options: [
      { label: '基础', value: PAGE_TRANSITION_ENUM.FADE_BASE },
      { label: '向上', value: PAGE_TRANSITION_ENUM.FADE_UP },
      { label: '向下', value: PAGE_TRANSITION_ENUM.FADE_DOWN },
      { label: '向右', value: PAGE_TRANSITION_ENUM.FADE_RIGHT },
    ],
  },
  {
    label: '缩放动画',
    options: [
      { label: '基础', value: PAGE_TRANSITION_ENUM.SCALE_BASE },
      { label: '向上', value: PAGE_TRANSITION_ENUM.SCALE_UP },
      { label: '向下', value: PAGE_TRANSITION_ENUM.SCALE_DOWN },
    ],
  },
  {
    label: '其他动画',
    options: [
      { label: '旋转', value: PAGE_TRANSITION_ENUM.ROTATE_BASE },
      { label: '翻转', value: PAGE_TRANSITION_ENUM.FLIP_BASE },
    ],
  },
] as const;

/** 主题模式选项附加元信息 */
type ThemeModeOptionMeta = {
  enLabel: string;
  icon: string;
  modeIcon: string;
};

/** 主题模式选项 */
export const THEME_MODE_OPTION: Options<ThemeModeEnumValue, ThemeModeOptionMeta> = [
  {
    enLabel: 'Light',
    label: '明亮模式',
    value: THEME_MODE_ENUM.LIGHT,
    icon: 'ri:sun-line',
    modeIcon: 'theme-light',
  },
  {
    enLabel: 'Dark',
    label: '暗黑模式',
    value: THEME_MODE_ENUM.DARK,
    icon: 'ri:moon-line',
    modeIcon: 'theme-dark',
  },
  {
    enLabel: 'System',
    label: '跟随系统',
    value: THEME_MODE_ENUM.SYSTEM,
    icon: 'ri:computer-line',
    modeIcon: 'theme-system',
  },
] as const;

/** 视觉模式选项附加元信息 */
type VisualModeOptionMeta = {
  style?: string;
  className?: string;
};

/** 视觉模式选项（灰色/色弱/标准） */
export const ACCESSIBILITY_MODE_OPTION: Options<AccessibilityModeEnumValue, VisualModeOptionMeta> =
  [
    {
      label: '灰色模式',
      value: ACCESSIBILITY_MODE_ENUM.GRAY,
      style: 'filter: grayscale(1)',
      className: 'gray-mode',
    },
    {
      label: '色弱模式',
      value: ACCESSIBILITY_MODE_ENUM.WEAK,
      style: 'filter: invert(80%)',
      className: 'weak-mode',
    },
    {
      label: '标准模式',
      value: ACCESSIBILITY_MODE_ENUM.NORMAL,
      style: '',
      className: '',
    },
  ] as const;

/** 预设主题色选项 */
export const PRESET_PRIMARY_COLOR_OPTION: Options<string> = [
  { label: '默认品牌色', value: DEFAULT_PRIMARY_COLOR },
  { label: '竹绿', value: '#1ba784' },
  { label: '紫罗兰', value: '#a258d5' },
  { label: '山楂红', value: '#e7616c' },
  { label: '小马宝莉', value: '#f8aac0' },
  { label: '那不勒斯黄', value: '#f6cb1d' },
  { label: '荧光橙', value: '#ff8a00' },
  { label: '孔雀蓝', value: '#0eb0c9' },
  { label: '雾紫灰', value: '#908686' },
] as const;

/** 面包屑样式选项 */
export const BREADCRUMB_STYLE_OPTION: Options<BreadcrumbStyleEnumValue> = [
  { label: '文本', value: BREADCRUMB_STYLE_ENUM.DEFAULT },
  { label: '箭头', value: BREADCRUMB_STYLE_ENUM.ARROW },
  { label: '平行四边形', value: BREADCRUMB_STYLE_ENUM.PARALLELOGRAM },
] as const;
