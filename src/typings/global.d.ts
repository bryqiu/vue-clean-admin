import { PropType as propType } from 'vue';
import type { Component, DefineComponent } from 'vue';

declare global {
  type AlignMode = 'horizontal' | 'vertical';
  type BreadcrumbStyleType = 'default' | 'arrow' | 'parallelogram';

  type ElColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
  type ColorWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  type NullType<T> = T | null;

  type PropType<T> = propType<T>;

  type RegisterComponentList = { name: string; component: Component | DefineComponent }[];

  interface BaseOptions<T = string> {
    label: string;
    value: T;
  }
}
