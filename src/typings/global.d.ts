import { PropType as propType } from 'vue';
import type { Component, DefineComponent } from 'vue';

declare global {
  /** 对齐模式 */
  type AlignMode = 'horizontal' | 'vertical';

  /** 面包屑样式类型 */
  type BreadcrumbStyleType = 'default' | 'arrow' | 'parallelogram';

  /** 颜色类型 */
  type ElColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /** 颜色权重 */
  type ColorWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  /** 空类型 */
  type NullType<T> = T | null;

  /** 属性类型 */
  type PropType<T> = propType<T>;

  /** 注册组件列表 */
  type RegisterComponentList = { name: string; component: Component | DefineComponent }[];

  /** 字典基本结构 */
  interface BaseOptions<T = string> {
    label: string;
    value: T;
  }
  type IconComponent = 'iconify' | 'local';
}
