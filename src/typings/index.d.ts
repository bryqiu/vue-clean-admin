import { PropType as propType } from 'vue';
import type { Component, DefineComponent } from 'vue';

declare global {
  type RecordType<T> = Record<string, T>;

  type NullType<T> = T | null;

  type PropType<T> = propType<T>;

  type RegisterComponentList = { name: string; component: Component | DefineComponent }[];

  interface BaseOptions<T = string> {
    label: string;
    value: T;
  }

  type DisplayMode = 'horizontal' | 'vertical';
  type BreadcrumbStyleType = 'default' | 'arrow' | 'parallelogram';
  type ElColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
}
