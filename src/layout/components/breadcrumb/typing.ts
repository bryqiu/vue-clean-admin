import type { RouteLocationMatched } from 'vue-router';

export type BreadcrumbStyleObj = {
  [key in BreadcrumbStyleType]: string;
};

export interface BreadcrumbProps {
  /**
   * 如果设置该属性为 true, 导航将不会留下历史记录
   * @default false
   * @see https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumbitem-attributes
   */
  replace?: boolean;

  /**
   * 是否显示面包屑图标
   * @default true
   */
  isShowIcon?: boolean;
  /**
   * 面包屑样式
   * @default default
   */
  styleType?: BreadcrumbStyleType;
}

export type BreadcrumbEmits = {
  onClickItem: [value: RouteLocationMatched];
};
