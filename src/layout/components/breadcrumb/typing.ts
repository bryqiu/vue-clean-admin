import type { RouteLocationMatched } from 'vue-router';

export type BreadcrumbStyle = 'default' | 'arrow' | 'parallelogram';
export type BreadcrumbStyleObj = {
  [key in BreadcrumbStyle]: string;
};

export interface BreadcrumbProps {
  /**
   * 如果设置该属性为 true, 导航将不会留下历史记录
   * @default false
   * @see https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumbitem-attributes
   */
  replace?: boolean;

  /**
   * 是否隐藏面包屑图标
   * @default false
   */
  isHideIcon?: boolean;
  /**
   * 面包屑样式
   * @default default
   */
  type?: BreadcrumbStyle;
}

export type BreadcrumbEmits = {
  onClickItem: [value: RouteLocationMatched];
};
