import type { DepOptimizationOptions } from 'vite';
import { getElOptimizePaths } from './utils';
import * as ElementPlusComponents from 'element-plus';

type ElementPlusComponentType = typeof ElementPlusComponents;

type ElKeys<T> = {
  [K in keyof T]: K extends `El${string}` ? K : never;
}[keyof T];

const elComponentKeys: ElKeys<ElementPlusComponentType>[] = [
  /* ======================== 基础组件 ======================== */
  'ElButton',
  'ElButtonGroup',
  'ElContainer',
  'ElFooter',
  'ElHeader',
  'ElAside',
  'ElMain',
  'ElLink',
  'ElText',
  'ElSpace',
  'ElScrollbar',
  /* ======================== 表单组件 ======================== */
  'ElAutocomplete',
  'ElCascader',
  'ElCascaderPanel',
  'ElCheckbox',
  'ElCheckboxGroup',
  'ElCheckboxButton',
  'ElColorPicker',
  'ElDatePicker',
  'ElForm',
  'ElFormItem',
  'ElInput',
  'ElInputNumber',
  'ElInputTag',
  'ElMention',
  'ElRadio',
  'ElRadioGroup',
  'ElRadioButton',
  'ElRate',
  'ElSelect',
  'ElOption',
  'ElOptionGroup',
  'ElSlider',
  'ElSwitch',
  'ElTimePicker',
  'ElTimeSelect',
  'ElTransfer',
  'ElTreeSelect',
  'ElUpload',
  /* ======================== 数据展示 ======================== */
  'ElAvatar',
  'ElBadge',
  'ElCalendar',
  'ElCard',
  'ElCarousel',
  'ElCarouselItem',
  'ElCollapse',
  'ElCollapseItem',
  'ElDescriptions',
  'ElDescriptionsItem',
  'ElEmpty',
  'ElImage',
  'ElPagination',
  'ElProgress',
  'ElResult',
  'ElSkeleton',
  'ElSkeletonItem',
  'ElTable',
  'ElTableColumn',
  'ElTableV2',
  'ElTag',
  'ElTimeline',
  'ElTimelineItem',
  'ElTree',
  'ElTreeV2',
  'ElStatistic',
  'ElSegmented',
  /* ======================== 导航组件 ======================== */
  'ElAffix',
  'ElBacktop',
  'ElBreadcrumb',
  'ElBreadcrumbItem',
  'ElDropdown',
  'ElDropdownMenu',
  'ElDropdownItem',
  'ElMenu',
  'ElMenuItem',
  'ElMenuItemGroup',
  'ElSubMenu',
  'ElPageHeader',
  'ElSteps',
  'ElStep',
  'ElTabs',
  'ElTabPane',
  /* ======================== 反馈组件 ======================== */
  'ElAlert',
  'ElDialog',
  'ElDrawer',
  'ElLoading',
  'ElMessage',
  'ElMessageBox',
  'ElNotification',
  'ElPopconfirm',
  'ElPopover',
  'ElTooltip',
  /* ======================== 其他 ======================== */
  'ElDivider',
  'ElWatermark',
  'ElConfigProvider',
];

/** 预构建 */
export const getOptimize = (): DepOptimizationOptions => {
  const include: string[] = [
    'echarts',
    '@vueuse/core',
    'nprogress',
    'lodash-es',
    'echarts/core',
    'echarts/charts',
    'echarts/components',
    'echarts/renderers',
    'echarts/features',
    '@iconify/vue',
    'axios',
    ...getElOptimizePaths(elComponentKeys),
  ];
  const exclude: string[] = [];

  return {
    include,
    exclude,
  };
};
