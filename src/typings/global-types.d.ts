import { PropType as propType } from 'vue';
import type { Component, DefineComponent } from 'vue';

declare global {
  type NullType<T> = T | null;

  type PropType<T> = propType<T>;

  type RegisterComponentList = { name: string; component: Component | DefineComponent }[];

  interface BaseOptions<T = string> {
    label: string;
    value: T;
  }
}
